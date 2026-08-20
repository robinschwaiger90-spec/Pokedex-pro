import {
  EvolutionNode,
  FullPokemonDetail,
  PokemonAbility,
  PokemonMove,
  PokemonSummary,
  PokemonType,
} from '../types/pokemon';
import { getGenerationById, GENERATIONS } from '../data/generations';
import { getGermanName } from '../data/germanPokemonData';
import { calculateTypeDefenses } from '../data/pokemonTypes';
import {
  getAnimatedSpriteUrl,
  getArtworkUrl,
  getCryAudioUrl,
  getShinyArtworkUrl,
  getShinySpriteUrl,
  getSpriteUrl,
  PRELOADED_POKEMON,
} from '../data/preloadedPokemon';

const API_BASE = 'https://pokeapi.co/api/v2';
const memoryDetailCache = new Map<number, FullPokemonDetail>();
const memorySummaryCache = new Map<number, PokemonSummary>();

// Initialize memory cache with preloaded items
PRELOADED_POKEMON.forEach((p) => {
  memorySummaryCache.set(p.id, p);
});

export async function fetchPokemonList(limit = 151, offset = 0): Promise<PokemonSummary[]> {
  try {
    const res = await fetch(`${API_BASE}/pokemon?limit=${limit}&offset=${offset}`);
    if (!res.ok) throw new Error('Failed to fetch pokemon list');
    const data = await res.json();

    // Map basic metadata
    const results: PokemonSummary[] = await Promise.all(
      data.results.map(async (item: { name: string; url: string }) => {
        const parts = item.url.split('/').filter(Boolean);
        const id = parseInt(parts[parts.length - 1], 10);

        if (memorySummaryCache.has(id)) {
          return memorySummaryCache.get(id)!;
        }

        // Fetch basic details for types and stats
        const summary = await fetchPokemonSummary(id, item.name);
        return summary;
      })
    );

    return results;
  } catch (err) {
    console.warn('PokeAPI fetch error, falling back to cached/preloaded:', err);
    return PRELOADED_POKEMON;
  }
}

export async function fetchPokemonSummary(id: number, name?: string): Promise<PokemonSummary> {
  if (memorySummaryCache.has(id)) {
    return memorySummaryCache.get(id)!;
  }

  try {
    const res = await fetch(`${API_BASE}/pokemon/${id}`);
    if (!res.ok) throw new Error(`Pokemon ${id} not found`);
    const data = await res.json();

    const types = data.types.map((t: any) => t.type.name as PokemonType);
    const stats = {
      hp: data.stats[0]?.base_stat || 50,
      attack: data.stats[1]?.base_stat || 50,
      defense: data.stats[2]?.base_stat || 50,
      specialAttack: data.stats[3]?.base_stat || 50,
      specialDefense: data.stats[4]?.base_stat || 50,
      speed: data.stats[5]?.base_stat || 50,
    };
    const totalStats = Object.values(stats).reduce((a, b) => a + b, 0);

    const summary: PokemonSummary = {
      id: data.id,
      name: data.name,
      germanName: getGermanName(data.id, data.name),
      types,
      sprite: data.sprites?.front_default || getSpriteUrl(data.id),
      artwork: data.sprites?.other?.['official-artwork']?.front_default || getArtworkUrl(data.id),
      animatedSprite:
        data.sprites?.other?.showdown?.front_default || getAnimatedSpriteUrl(data.id),
      shinyArtwork:
        data.sprites?.other?.['official-artwork']?.front_shiny || getShinyArtworkUrl(data.id),
      shinySprite: data.sprites?.front_shiny || getShinySpriteUrl(data.id),
      stats,
      totalStats,
      height: data.height / 10,
      weight: data.weight / 10,
      generation: getGenerationById(data.id),
      isStarter: [1, 4, 7, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816, 906, 909, 912].includes(data.id),
      isLegendary: [144, 145, 146, 150, 243, 244, 245, 249, 250, 377, 378, 379, 380, 381, 382, 383, 384, 480, 481, 482, 483, 484, 485, 486, 487, 488, 638, 639, 640, 641, 642, 643, 644, 645, 646, 716, 717, 718, 785, 786, 787, 788, 791, 792, 800, 888, 889, 890, 891, 892, 894, 895, 896, 897, 898, 1001, 1002, 1003, 1004, 1007, 1008, 1014, 1015, 1016, 1017, 1024].includes(data.id),
      isMythical: [151, 251, 385, 386, 489, 490, 491, 492, 493, 494, 647, 648, 649, 719, 720, 721, 801, 802, 807, 808, 809, 893, 1025].includes(data.id),
    };

    memorySummaryCache.set(id, summary);
    return summary;
  } catch (error) {
    const fallback = PRELOADED_POKEMON.find((p) => p.id === id) || {
      id,
      name: name || `pokemon-${id}`,
      germanName: getGermanName(id, name || `pokemon-${id}`),
      types: ['normal' as PokemonType],
      sprite: getSpriteUrl(id),
      artwork: getArtworkUrl(id),
      stats: { hp: 50, attack: 50, defense: 50, specialAttack: 50, specialDefense: 50, speed: 50 },
      totalStats: 300,
      height: 1.0,
      weight: 10.0,
      generation: getGenerationById(id),
    };
    return fallback;
  }
}

export async function fetchFullPokemonDetail(id: number): Promise<FullPokemonDetail> {
  if (memoryDetailCache.has(id)) {
    return memoryDetailCache.get(id)!;
  }

  const [pokemonRes, speciesRes] = await Promise.all([
    fetch(`${API_BASE}/pokemon/${id}`),
    fetch(`${API_BASE}/pokemon-species/${id}`).catch(() => null),
  ]);

  if (!pokemonRes.ok) {
    throw new Error(`Konnte Pokémon mit ID ${id} nicht laden.`);
  }

  const pData = await pokemonRes.json();
  let sData: any = null;
  if (speciesRes && speciesRes.ok) {
    sData = await speciesRes.json();
  }

  // Extract German and English names & genus
  let germanName = getGermanName(id, pData.name);
  let genusDe = 'Pokémon';
  let genusEn = 'Pokémon';
  const flavorTexts: { version: string; textDe: string; textEn: string }[] = [];

  if (sData) {
    const deNameObj = sData.names?.find((n: any) => n.language.name === 'de');
    if (deNameObj?.name) {
      germanName = deNameObj.name;
    }

    const deGenusObj = sData.genera?.find((g: any) => g.language.name === 'de');
    if (deGenusObj?.genus) {
      genusDe = deGenusObj.genus;
    }

    const enGenusObj = sData.genera?.find((g: any) => g.language.name === 'en');
    if (enGenusObj?.genus) {
      genusEn = enGenusObj.genus;
    }

    // Collect flavor texts
    const deFlavors = sData.flavor_text_entries?.filter((f: any) => f.language.name === 'de') || [];
    const enFlavors = sData.flavor_text_entries?.filter((f: any) => f.language.name === 'en') || [];

    const versions = ['x', 'y', 'sword', 'shield', 'scarlet', 'violet', 'ruby', 'sapphire', 'diamond', 'pearl'];
    for (const v of versions) {
      const deEntry = deFlavors.find((f: any) => f.version.name === v);
      const enEntry = enFlavors.find((f: any) => f.version.name === v);
      if (deEntry || enEntry) {
        flavorTexts.push({
          version: v.charAt(0).toUpperCase() + v.slice(1),
          textDe: (deEntry?.flavor_text || enEntry?.flavor_text || '').replace(/\f|\n/g, ' '),
          textEn: (enEntry?.flavor_text || '').replace(/\f|\n/g, ' '),
        });
      }
    }

    if (flavorTexts.length === 0 && (deFlavors.length > 0 || enFlavors.length > 0)) {
      flavorTexts.push({
        version: 'Pokédex',
        textDe: (deFlavors[0]?.flavor_text || enFlavors[0]?.flavor_text || '').replace(/\f|\n/g, ' '),
        textEn: (enFlavors[0]?.flavor_text || '').replace(/\f|\n/g, ' '),
      });
    }
  }

  // Abilities
  const abilities: PokemonAbility[] = await Promise.all(
    pData.abilities.map(async (ab: any) => {
      let germanAbName = ab.ability.name.replace(/-/g, ' ');
      let desc = '';
      try {
        const abRes = await fetch(ab.ability.url);
        if (abRes.ok) {
          const abData = await abRes.json();
          const deName = abData.names?.find((n: any) => n.language.name === 'de');
          if (deName) germanAbName = deName.name;
          const deEffect = abData.flavor_text_entries?.find((f: any) => f.language.name === 'de');
          const enEffect = abData.flavor_text_entries?.find((f: any) => f.language.name === 'en');
          desc = deEffect?.flavor_text || enEffect?.flavor_text || abData.effect_entries?.find((e: any) => e.language.name === 'en')?.short_effect || '';
        }
      } catch (e) {
        // silent fallback
      }

      return {
        name: ab.ability.name,
        germanName: germanAbName,
        description: desc,
        isHidden: ab.is_hidden,
      };
    })
  );

  // Moves (first 25 most relevant)
  const moves: PokemonMove[] = pData.moves.slice(0, 25).map((m: any) => {
    const method = m.version_group_details[0]?.move_learn_method?.name || 'level-up';
    const level = m.version_group_details[0]?.level_learned_at || 0;
    return {
      name: m.move.name,
      germanName: m.move.name.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()),
      type: 'normal' as PokemonType,
      category: 'physical',
      power: null,
      accuracy: null,
      pp: 15,
      learnMethod: method as any,
      levelLearnedAt: level,
    };
  });

  // Evolution chain
  let evolutionChain: EvolutionNode | null = null;
  if (sData?.evolution_chain?.url) {
    try {
      const evoRes = await fetch(sData.evolution_chain.url);
      if (evoRes.ok) {
        const evoData = await evoRes.json();
        evolutionChain = parseEvolutionChain(evoData.chain);
      }
    } catch (e) {
      console.warn('Could not parse evolution chain', e);
    }
  }

  const types = pData.types.map((t: any) => t.type.name as PokemonType);
  const typeDefenses = calculateTypeDefenses(types);

  const stats = {
    hp: pData.stats[0]?.base_stat || 50,
    attack: pData.stats[1]?.base_stat || 50,
    defense: pData.stats[2]?.base_stat || 50,
    specialAttack: pData.stats[3]?.base_stat || 50,
    specialDefense: pData.stats[4]?.base_stat || 50,
    speed: pData.stats[5]?.base_stat || 50,
  };
  const totalStats = Object.values(stats).reduce((a, b) => a + b, 0);

  // Gender ratio
  let genderRatio = { male: 50, female: 50, genderless: false };
  if (sData && sData.gender_rate !== undefined) {
    if (sData.gender_rate === -1) {
      genderRatio = { male: 0, female: 0, genderless: true };
    } else {
      const femalePercent = (sData.gender_rate / 8) * 100;
      genderRatio = {
        male: 100 - femalePercent,
        female: femalePercent,
        genderless: false,
      };
    }
  }

  const detail: FullPokemonDetail = {
    id: pData.id,
    name: pData.name,
    germanName,
    types,
    sprite: pData.sprites?.front_default || getSpriteUrl(pData.id),
    artwork: pData.sprites?.other?.['official-artwork']?.front_default || getArtworkUrl(pData.id),
    animatedSprite: pData.sprites?.other?.showdown?.front_default || getAnimatedSpriteUrl(pData.id),
    shinyArtwork: pData.sprites?.other?.['official-artwork']?.front_shiny || getShinyArtworkUrl(pData.id),
    shinySprite: pData.sprites?.front_shiny || getShinySpriteUrl(pData.id),
    stats,
    totalStats,
    height: pData.height / 10,
    weight: pData.weight / 10,
    generation: getGenerationById(pData.id),
    genus: genusDe,
    genusDe,
    genusEn,
    flavorTexts,
    flavorText: flavorTexts[0]?.textDe || '',
    abilities,
    moves,
    evolutionChain,
    typeDefenses,
    cryUrl: getCryAudioUrl(pData.id),
    captureRate: sData?.capture_rate,
    baseHappiness: sData?.base_happiness,
    genderRatio,
    isStarter: [1, 4, 7, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816, 906, 909, 912].includes(pData.id),
    isLegendary: sData?.is_legendary ?? false,
    isMythical: sData?.is_mythical ?? false,
    sprites: {
      frontDefault: pData.sprites?.front_default || getSpriteUrl(pData.id),
      frontShiny: pData.sprites?.front_shiny || getShinySpriteUrl(pData.id),
      officialArtwork: pData.sprites?.other?.['official-artwork']?.front_default || getArtworkUrl(pData.id),
      officialShinyArtwork: pData.sprites?.other?.['official-artwork']?.front_shiny || getShinyArtworkUrl(pData.id),
      animatedFront: pData.sprites?.other?.showdown?.front_default || getAnimatedSpriteUrl(pData.id),
      animatedShiny: pData.sprites?.other?.showdown?.front_shiny,
      homeFront: pData.sprites?.other?.home?.front_default,
      pixelIcon: pData.sprites?.versions?.['generation-viii']?.icons?.front_default,
    },
  };

  memoryDetailCache.set(id, detail);
  return detail;
}

function parseEvolutionChain(chain: any): EvolutionNode {
  const speciesUrl = chain.species.url;
  const parts = speciesUrl.split('/').filter(Boolean);
  const id = parseInt(parts[parts.length - 1], 10);
  const evoDetails = chain.evolution_details?.[0];

  return {
    id,
    name: chain.species.name,
    germanName: getGermanName(id, chain.species.name),
    sprite: getSpriteUrl(id),
    artwork: getArtworkUrl(id),
    types: [],
    minLevel: evoDetails?.min_level,
    trigger: evoDetails?.trigger?.name,
    item: evoDetails?.item?.name?.replace(/-/g, ' '),
    heldItem: evoDetails?.held_item?.name?.replace(/-/g, ' '),
    timeOfDay: evoDetails?.time_of_day,
    happiness: evoDetails?.min_happiness,
    knowsMove: evoDetails?.known_move?.name,
    evolvesTo: (chain.evolves_to || []).map((child: any) => parseEvolutionChain(child)),
  };
}

export function searchPokemon(
  pokemonList: PokemonSummary[],
  query: string,
  selectedGen: number | null,
  selectedType: PokemonType | null,
  sortBy: 'id' | 'name' | 'stats' | 'height' | 'weight',
  filterFavorites: boolean,
  favoriteIds: number[],
  filterCaught: boolean,
  caughtIds: number[],
  filterSpecial: 'all' | 'starter' | 'legendary' | 'mythical'
): PokemonSummary[] {
  return pokemonList
    .filter((p) => {
      // Query filter (supports German name, English name, and ID)
      if (query.trim()) {
        const q = query.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesGermanName = p.germanName.toLowerCase().includes(q);
        const matchesId = p.id.toString() === q || `#${p.id}` === q;
        if (!matchesName && !matchesGermanName && !matchesId) {
          return false;
        }
      }

      // Generation filter
      if (selectedGen !== null && p.generation !== selectedGen) {
        return false;
      }

      // Type filter
      if (selectedType !== null && !p.types.includes(selectedType)) {
        return false;
      }

      // Favorites filter
      if (filterFavorites && !favoriteIds.includes(p.id)) {
        return false;
      }

      // Caught filter
      if (filterCaught && !caughtIds.includes(p.id)) {
        return false;
      }

      // Special category filter
      if (filterSpecial === 'starter' && !p.isStarter) return false;
      if (filterSpecial === 'legendary' && !p.isLegendary) return false;
      if (filterSpecial === 'mythical' && !p.isMythical) return false;

      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.germanName.localeCompare(b.germanName, 'de');
        case 'stats':
          return b.totalStats - a.totalStats;
        case 'height':
          return b.height - a.height;
        case 'weight':
          return b.weight - a.weight;
        case 'id':
        default:
          return a.id - b.id;
      }
    });
}
