import { PokemonType, TypeDetail, TypeDefenses } from '../types/pokemon';

export const POKEMON_TYPES: Record<PokemonType, TypeDetail> = {
  normal: {
    name: 'normal',
    germanName: 'Normal',
    color: '#A8A77A',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#A8A77A] to-[#8C8B5F]',
    borderColor: '#78774F',
    iconSymbol: '⚪',
  },
  fire: {
    name: 'fire',
    germanName: 'Feuer',
    color: '#EE8130',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#FF6B35] to-[#EE8130]',
    borderColor: '#C65610',
    iconSymbol: '🔥',
  },
  water: {
    name: 'water',
    germanName: 'Wasser',
    color: '#6390F0',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#4D90FE] to-[#3B72D9]',
    borderColor: '#2654A6',
    iconSymbol: '💧',
  },
  grass: {
    name: 'grass',
    germanName: 'Pflanze',
    color: '#7AC74C',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#78C850] to-[#5CA638]',
    borderColor: '#438025',
    iconSymbol: '🌿',
  },
  electric: {
    name: 'electric',
    germanName: 'Elektro',
    color: '#F7D02C',
    textColor: '#1A1A1A',
    bgGradient: 'from-[#FFD83B] to-[#F7C610]',
    borderColor: '#C79D00',
    iconSymbol: '⚡',
  },
  ice: {
    name: 'ice',
    germanName: 'Eis',
    color: '#96D9D6',
    textColor: '#1A1A1A',
    bgGradient: 'from-[#98D8D8] to-[#6EC5C5]',
    borderColor: '#43A4A4',
    iconSymbol: '❄️',
  },
  fighting: {
    name: 'fighting',
    germanName: 'Kampf',
    color: '#C22E28',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#D33830] to-[#A01F1A]',
    borderColor: '#79120E',
    iconSymbol: '🥊',
  },
  poison: {
    name: 'poison',
    germanName: 'Gift',
    color: '#A33EA1',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#B24CB0] to-[#862A84]',
    borderColor: '#60165F',
    iconSymbol: '☠️',
  },
  ground: {
    name: 'ground',
    germanName: 'Boden',
    color: '#E2BF65',
    textColor: '#1A1A1A',
    bgGradient: 'from-[#E0C068] to-[#C9A23E]',
    borderColor: '#9E7A1C',
    iconSymbol: '🏜️',
  },
  flying: {
    name: 'flying',
    germanName: 'Flug',
    color: '#A98FF3',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#A890F0] to-[#8566E2]',
    borderColor: '#5D3EB6',
    iconSymbol: '🕊️',
  },
  psychic: {
    name: 'psychic',
    germanName: 'Psycho',
    color: '#F95587',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#FF5D8F] to-[#E83E72]',
    borderColor: '#B9194C',
    iconSymbol: '🔮',
  },
  bug: {
    name: 'bug',
    germanName: 'Käfer',
    color: '#A6B91A',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#A8B820] to-[#889613]',
    borderColor: '#626D07',
    iconSymbol: '🐛',
  },
  rock: {
    name: 'rock',
    germanName: 'Gestein',
    color: '#B6A136',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#B8A038] to-[#998322]',
    borderColor: '#715F10',
    iconSymbol: '🪨',
  },
  ghost: {
    name: 'ghost',
    germanName: 'Geist',
    color: '#735797',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#7B62A3] to-[#5A3F83]',
    borderColor: '#3D2560',
    iconSymbol: '👻',
  },
  dragon: {
    name: 'dragon',
    germanName: 'Drache',
    color: '#6F35FC',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#7A42FF] to-[#571AE8]',
    borderColor: '#390CB3',
    iconSymbol: '🐉',
  },
  dark: {
    name: 'dark',
    germanName: 'Unlicht',
    color: '#705746',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#755D4C] to-[#513D2F]',
    borderColor: '#35251B',
    iconSymbol: '🌑',
  },
  steel: {
    name: 'steel',
    germanName: 'Stahl',
    color: '#B7B7CE',
    textColor: '#1A1A1A',
    bgGradient: 'from-[#B8B8D0] to-[#9797B3]',
    borderColor: '#6C6C8E',
    iconSymbol: '⚙️',
  },
  fairy: {
    name: 'fairy',
    germanName: 'Fee',
    color: '#D685AD',
    textColor: '#FFFFFF',
    bgGradient: 'from-[#EE99AC] to-[#D66B84]',
    borderColor: '#B3405B',
    iconSymbol: '✨',
  },
};

export const ALL_POKEMON_TYPES: PokemonType[] = Object.keys(POKEMON_TYPES) as PokemonType[];

// Defensive Multipliers when attacking a single type (AttackingType -> DefendingType)
export const TYPE_CHART: Record<PokemonType, Partial<Record<PokemonType, number>>> = {
  normal: { rock: 0.5, ghost: 0, steel: 0.5 },
  fire: { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
  water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
  grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
  electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
  ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
  fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
  poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
  ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
  flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
  psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
  bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
  rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
  ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
  dragon: { dragon: 2, steel: 0.5, fairy: 0 },
  dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
  steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
  fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 },
};

/**
 * Calculates defensive effectiveness against a Pokémon with given types.
 * Returns map of attacking type -> damage multiplier (0x, 0.25x, 0.5x, 1x, 2x, 4x)
 */
export function calculateTypeDefenses(types: PokemonType[]): TypeDefenses {
  const defenses: TypeDefenses = {};

  ALL_POKEMON_TYPES.forEach((attackingType) => {
    let multiplier = 1;

    types.forEach((defendingType) => {
      const typeMultipliers = TYPE_CHART[attackingType];
      if (typeMultipliers && typeMultipliers[defendingType] !== undefined) {
        multiplier *= typeMultipliers[defendingType]!;
      }
    });

    defenses[attackingType] = multiplier;
  });

  return defenses;
}

/**
 * Calculates offensive effectiveness when attacking with one or two types.
 */
export function calculateTypeOffenses(attackingTypes: PokemonType[]): Record<PokemonType, number> {
  const offenses: Record<string, number> = {};

  ALL_POKEMON_TYPES.forEach((targetType) => {
    let bestMultiplier = 1;
    attackingTypes.forEach((attType) => {
      const mult = TYPE_CHART[attType]?.[targetType] ?? 1;
      if (mult > bestMultiplier) {
        bestMultiplier = mult;
      }
    });
    offenses[targetType] = bestMultiplier;
  });

  return offenses as Record<PokemonType, number>;
}
