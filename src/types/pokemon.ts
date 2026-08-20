export type PokemonType =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export interface TypeDetail {
  name: PokemonType;
  germanName: string;
  color: string;
  textColor: string;
  bgGradient: string;
  borderColor: string;
  iconSymbol: string;
}

export interface PokemonSummary {
  id: number;
  name: string;
  germanName: string;
  types: PokemonType[];
  sprite: string;
  artwork: string;
  animatedSprite?: string;
  shinyArtwork?: string;
  shinySprite?: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  totalStats: number;
  height: number; // in meters (decimeters / 10)
  weight: number; // in kg (hectograms / 10)
  generation: number;
  isStarter?: boolean;
  isLegendary?: boolean;
  isMythical?: boolean;
  genus?: string;
  flavorText?: string;
}

export interface PokemonAbility {
  name: string;
  germanName: string;
  description: string;
  isHidden: boolean;
}

export interface PokemonMove {
  name: string;
  germanName: string;
  type: PokemonType;
  category: 'physical' | 'special' | 'status';
  power: number | null;
  accuracy: number | null;
  pp: number;
  learnMethod: 'level-up' | 'machine' | 'egg' | 'tutor';
  levelLearnedAt?: number;
  description?: string;
}

export interface EvolutionNode {
  id: number;
  name: string;
  germanName: string;
  sprite: string;
  artwork: string;
  types: PokemonType[];
  minLevel?: number | null;
  trigger?: string;
  item?: string;
  heldItem?: string;
  timeOfDay?: string;
  happiness?: number;
  knowsMove?: string;
  evolvesTo: EvolutionNode[];
}

export interface TypeDefenses {
  [key: string]: number; // 0, 0.25, 0.5, 1, 2, 4
}

export interface FullPokemonDetail extends PokemonSummary {
  genusDe: string;
  genusEn: string;
  flavorTexts: {
    version: string;
    textDe: string;
    textEn: string;
  }[];
  abilities: PokemonAbility[];
  moves: PokemonMove[];
  evolutionChain: EvolutionNode | null;
  typeDefenses: TypeDefenses;
  cryUrl?: string;
  captureRate?: number;
  baseHappiness?: number;
  genderRatio?: {
    male: number;
    female: number;
    genderless: boolean;
  };
  sprites: {
    frontDefault: string;
    frontShiny: string;
    officialArtwork: string;
    officialShinyArtwork: string;
    animatedFront?: string;
    animatedShiny?: string;
    homeFront?: string;
    pixelIcon?: string;
  };
}

export interface TeamMember {
  id: string; // unique slot id
  pokemonId: number;
  nickname?: string;
  pokemon: PokemonSummary;
}

export interface ScanResult {
  detected: boolean;
  pokemonNameDe: string;
  pokemonNameEn: string;
  dexId: number;
  species: string;
  types: PokemonType[];
  confidence: number;
  voiceAnnouncement: string;
  visualAnalysis: string;
  isShiny?: boolean;
}

export type ViewMode = 'modern' | 'classic';
export type ActiveTab = 'pokedex' | 'team' | 'types' | 'quiz' | 'chat' | 'scanner' | 'tcg';
