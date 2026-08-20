export type TcgSupertype = 'Pokémon' | 'Trainer' | 'Energy';

export type TcgRarity =
  | 'Common'
  | 'Uncommon'
  | 'Rare'
  | 'Rare Holo'
  | 'Double Rare'
  | 'Ultra Rare'
  | 'Secret Rare'
  | 'Illustration Rare'
  | 'Special Illustration Rare'
  | 'Hyper Rare'
  | 'Promo'
  | 'Classic Holo';

export type TcgHoloPattern =
  | 'none'
  | 'galaxy'
  | 'rainbow'
  | 'glitter'
  | 'gold'
  | 'reverse'
  | 'classic';

export interface TcgAttack {
  name: string;
  germanName?: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
  germanText?: string;
}

export interface TcgWeaknessResistance {
  type: string;
  value: string;
}

export interface TcgSetInfo {
  id: string;
  name: string;
  series: string;
  releaseDate: string;
  total: number;
  symbolUrl?: string;
  logoUrl?: string;
}

export interface TcgCard {
  id: string;
  name: string;
  germanName: string;
  supertype: TcgSupertype;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  attacks?: TcgAttack[];
  weaknesses?: TcgWeaknessResistance[];
  resistances?: TcgWeaknessResistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: TcgSetInfo;
  number: string;
  artist?: string;
  rarity: TcgRarity;
  text?: string;
  germanText?: string;
  flavorText?: string;
  germanFlavorText?: string;
  images: {
    small: string;
    large: string;
  };
  pokemonDexId?: number;
  isHolo?: boolean;
  holoPattern?: TcgHoloPattern;
  estimatedValueEur?: number;
}

export interface TcgBoosterPack {
  id: string;
  name: string;
  series: string;
  setName: string;
  setId: string;
  coverArt: string;
  accentColor: string;
  releaseYear: number;
  descriptionDe: string;
  descriptionEn: string;
  cardsCount: number;
  featuredPokemon: string[];
  availableCardIds: string[];
}

export interface TcgDeck {
  id: string;
  name: string;
  cardIds: string[]; // 60 cards
  coverCardId?: string;
  createdAt: number;
  format: 'Standard' | 'Expanded' | 'Retro';
}

export interface TcgUserCollection {
  ownedCards: { [cardId: string]: number }; // cardId -> count
  favoriteCardIds: string[];
  openedPacksCount: number;
  decks: TcgDeck[];
}
