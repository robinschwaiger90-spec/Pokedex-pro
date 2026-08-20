import fs from 'fs';

async function run() {
  console.log('Fetching all 1025 Pokémon from PokéAPI GraphQL...');
  const query = `
    query GetAll1025Pokemon {
      pokemon_v2_pokemon(where: {id: {_lte: 1025}}, order_by: {id: asc}) {
        id
        name
        height
        weight
        pokemon_v2_pokemontypes(order_by: {slot: asc}) {
          pokemon_v2_type {
            name
          }
        }
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
        pokemon_v2_pokemonspecy {
          is_legendary
          is_mythical
          pokemon_v2_pokemonspeciesnames(where: {pokemon_v2_language: {name: {_eq: "de"}}}) {
            name
            genus
          }
          pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "de"}}}, limit: 1) {
            flavor_text
          }
        }
      }
    }
  `;

  const res = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });

  const json = await res.json();
  const rawList = json.data.pokemon_v2_pokemon;
  console.log('Received raw list of', rawList.length, 'pokémon.');

  const starters = new Set([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    152, 153, 154, 155, 156, 157, 158, 159, 160,
    252, 253, 254, 255, 256, 257, 258, 259, 260,
    387, 388, 389, 390, 391, 392, 393, 394, 395,
    495, 496, 497, 498, 499, 500, 501, 502, 503,
    650, 651, 652, 653, 654, 655, 656, 657, 658,
    722, 723, 724, 725, 726, 727, 728, 729, 730,
    810, 811, 812, 813, 814, 815, 816, 817, 818,
    906, 907, 908, 909, 910, 911, 912, 913, 914
  ]);

  const germanNamesMap = {};

  function getGen(id) {
    if (id <= 151) return 1;
    if (id <= 251) return 2;
    if (id <= 386) return 3;
    if (id <= 493) return 4;
    if (id <= 649) return 5;
    if (id <= 721) return 6;
    if (id <= 809) return 7;
    if (id <= 905) return 8;
    return 9;
  }

  const allPokemon = rawList.map((p) => {
    const species = p.pokemon_v2_pokemonspecy || {};
    const deNameObj = species.pokemon_v2_pokemonspeciesnames?.[0];
    const rawDeName = deNameObj?.name || (p.name.charAt(0).toUpperCase() + p.name.slice(1));
    const genus = deNameObj?.genus || 'Pokémon';
    const flavorText = species.pokemon_v2_pokemonspeciesflavortexts?.[0]?.flavor_text?.replace(/\f|\n/g, ' ') || '';

    germanNamesMap[p.id] = rawDeName;

    const types = p.pokemon_v2_pokemontypes.map((t) => t.pokemon_v2_type.name);

    const statsMap = {};
    for (const st of p.pokemon_v2_pokemonstats) {
      statsMap[st.pokemon_v2_stat.name] = st.base_stat;
    }

    const stats = {
      hp: statsMap['hp'] || 50,
      attack: statsMap['attack'] || 50,
      defense: statsMap['defense'] || 50,
      specialAttack: statsMap['special-attack'] || 50,
      specialDefense: statsMap['special-defense'] || 50,
      speed: statsMap['speed'] || 50,
    };
    const totalStats = stats.hp + stats.attack + stats.defense + stats.specialAttack + stats.specialDefense + stats.speed;

    return {
      id: p.id,
      name: p.name,
      germanName: rawDeName,
      types,
      stats,
      totalStats,
      height: +(p.height / 10).toFixed(1),
      weight: +(p.weight / 10).toFixed(1),
      generation: getGen(p.id),
      isStarter: starters.has(p.id),
      isLegendary: !!species.is_legendary,
      isMythical: !!species.is_mythical,
      genus,
      flavorText,
    };
  });

  // Write germanPokemonData.ts
  const germanDataContent = `// Comprehensive German translations for all 1025 Pokémon species names across Gen 1-9
export const GERMAN_POKEMON_NAMES: Record<number, string> = ${JSON.stringify(germanNamesMap, null, 2)};

export function getGermanName(id: number, fallbackEn: string): string {
  return GERMAN_POKEMON_NAMES[id] || (fallbackEn.charAt(0).toUpperCase() + fallbackEn.slice(1));
}
`;

  fs.writeFileSync('src/data/germanPokemonData.ts', germanDataContent);
  console.log('Saved src/data/germanPokemonData.ts with', Object.keys(germanNamesMap).length, 'names.');

  // Write allPokemonData.ts
  const allPokemonContent = `import { PokemonSummary, PokemonType } from '../types/pokemon';

export function getArtworkUrl(id: number): string {
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png";
}

export function getShinyArtworkUrl(id: number): string {
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/" + id + ".png";
}

export function getSpriteUrl(id: number): string {
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
}

export function getShinySpriteUrl(id: number): string {
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png";
}

export function getAnimatedSpriteUrl(id: number): string {
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/" + id + ".gif";
}

export function getCryAudioUrl(id: number): string {
  return "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/" + id + ".ogg";
}

export interface RawPokemonEntry {
  id: number;
  name: string;
  germanName: string;
  types: PokemonType[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  totalStats: number;
  height: number;
  weight: number;
  generation: number;
  isStarter?: boolean;
  isLegendary?: boolean;
  isMythical?: boolean;
  genus?: string;
  flavorText?: string;
}

export const ALL_RAW_POKEMON: RawPokemonEntry[] = ${JSON.stringify(allPokemon, null, 2)};

export const ALL_POKEMON: PokemonSummary[] = ALL_RAW_POKEMON.map((p) => ({
  ...p,
  sprite: getSpriteUrl(p.id),
  artwork: getArtworkUrl(p.id),
  animatedSprite: getAnimatedSpriteUrl(p.id),
  shinyArtwork: getShinyArtworkUrl(p.id),
  shinySprite: getShinySpriteUrl(p.id),
}));

export const PRELOADED_POKEMON: PokemonSummary[] = ALL_POKEMON;
`;

  fs.writeFileSync('src/data/allPokemonData.ts', allPokemonContent);
  console.log('Saved src/data/allPokemonData.ts with', allPokemon.length, 'pokémon!');

  // Also update preloadedPokemon.ts to re-export from allPokemonData.ts for backward compatibility
  const preloadedContent = `export {
  getArtworkUrl,
  getShinyArtworkUrl,
  getSpriteUrl,
  getShinySpriteUrl,
  getAnimatedSpriteUrl,
  getCryAudioUrl,
  ALL_POKEMON,
  PRELOADED_POKEMON,
  ALL_RAW_POKEMON,
} from './allPokemonData';
`;
  fs.writeFileSync('src/data/preloadedPokemon.ts', preloadedContent);
  console.log('Updated src/data/preloadedPokemon.ts to export all 1025 Pokémon.');
}

run();
