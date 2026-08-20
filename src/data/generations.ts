export interface GenerationInfo {
  id: number;
  name: string;
  region: string;
  germanRegion: string;
  startId: number;
  endId: number;
  totalPokemon: number;
  games: string[];
}

export const GENERATIONS: GenerationInfo[] = [
  {
    id: 1,
    name: 'Generation I',
    region: 'Kanto',
    germanRegion: 'Kanto',
    startId: 1,
    endId: 151,
    totalPokemon: 151,
    games: ['Rot & Blau', 'Gelb', 'Feuerrot & Blattgrün', "Let's Go"],
  },
  {
    id: 2,
    name: 'Generation II',
    region: 'Johto',
    germanRegion: 'Johto',
    startId: 152,
    endId: 251,
    totalPokemon: 100,
    games: ['Gold & Silber', 'Kristall', 'HeartGold & SoulSilver'],
  },
  {
    id: 3,
    name: 'Generation III',
    region: 'Hoenn',
    germanRegion: 'Hoenn',
    startId: 252,
    endId: 386,
    totalPokemon: 135,
    games: ['Rubin & Saphir', 'Smaragd', 'Omega Rubin & Alpha Saphir'],
  },
  {
    id: 4,
    name: 'Generation IV',
    region: 'Sinnoh',
    germanRegion: 'Sinnoh',
    startId: 387,
    endId: 493,
    totalPokemon: 107,
    games: ['Diamant & Perl', 'Platin', 'Strahlender Diamant & Leuchtende Perle'],
  },
  {
    id: 5,
    name: 'Generation V',
    region: 'Unova',
    germanRegion: 'Einall',
    startId: 494,
    endId: 649,
    totalPokemon: 156,
    games: ['Schwarz & Weiß', 'Schwarz 2 & Weiß 2'],
  },
  {
    id: 6,
    name: 'Generation VI',
    region: 'Kalos',
    germanRegion: 'Kalos',
    startId: 650,
    endId: 721,
    totalPokemon: 72,
    games: ['X & Y'],
  },
  {
    id: 7,
    name: 'Generation VII',
    region: 'Alola',
    germanRegion: 'Alola',
    startId: 722,
    endId: 809,
    totalPokemon: 88,
    games: ['Sonne & Mond', 'Ultrasonne & Ultramond', 'Let’s Go, Pikachu/Evoli!'],
  },
  {
    id: 8,
    name: 'Generation VIII',
    region: 'Galar / Hisui',
    germanRegion: 'Galar / Hisui',
    startId: 810,
    endId: 905,
    totalPokemon: 96,
    games: ['Schwert & Schild', 'Legenden: Arceus'],
  },
  {
    id: 9,
    name: 'Generation IX',
    region: 'Paldea',
    germanRegion: 'Paldea',
    startId: 906,
    endId: 1025,
    totalPokemon: 120,
    games: ['Karmesin & Purpur'],
  },
];

export function getGenerationById(pokemonId: number): number {
  for (const gen of GENERATIONS) {
    if (pokemonId >= gen.startId && pokemonId <= gen.endId) {
      return gen.id;
    }
  }
  return 1;
}
