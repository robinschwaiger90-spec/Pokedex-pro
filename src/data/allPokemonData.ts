import { PokemonSummary, PokemonType } from '../types/pokemon';

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

export const ALL_RAW_POKEMON: RawPokemonEntry[] = [
  {
    "id": 1,
    "name": "bulbasaur",
    "germanName": "Bisasam",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    },
    "totalStats": 318,
    "height": 0.7,
    "weight": 6.9,
    "generation": 1,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Samen-Pokémon",
    "flavorText": "Dieses Pokémon trägt von Geburt an einen Samen auf dem Rücken, der mit ihm keimt und wächst."
  },
  {
    "id": 2,
    "name": "ivysaur",
    "germanName": "Bisaknosp",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 60
    },
    "totalStats": 405,
    "height": 1,
    "weight": 13,
    "generation": 1,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Samen-Pokémon",
    "flavorText": "Es trägt eine Knospe auf seinem Rücken. Nimmt es Nahrung zu sich, soll aus der Knospe eine große blühende Blume werden."
  },
  {
    "id": 3,
    "name": "venusaur",
    "germanName": "Bisaflor",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80
    },
    "totalStats": 525,
    "height": 2,
    "weight": 100,
    "generation": 1,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Samen-Pokémon",
    "flavorText": "Es spreizt die breiten Blätter seiner Blüte, um seinen Körper mit Sonnenenergie zu durchfluten."
  },
  {
    "id": 4,
    "name": "charmander",
    "germanName": "Glumanda",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65
    },
    "totalStats": 309,
    "height": 0.6,
    "weight": 8.5,
    "generation": 1,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Echsen-Pokémon",
    "flavorText": "Die Flamme auf seiner Schweifspitze zeigt die Lebensenergie an. Ist es gesund, leuchtet sie hell."
  },
  {
    "id": 5,
    "name": "charmeleon",
    "germanName": "Glutexo",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 80
    },
    "totalStats": 405,
    "height": 1.1,
    "weight": 19,
    "generation": 1,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flammen-Pokémon",
    "flavorText": "Es schlägt im Kampf mit seinem Schwanz nach seinen Gegnern. Anschließend zerfetzt es die Gegner mit seinen scharfen Klauen."
  },
  {
    "id": 6,
    "name": "charizard",
    "germanName": "Glurak",
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100
    },
    "totalStats": 534,
    "height": 1.7,
    "weight": 90.5,
    "generation": 1,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flammen-Pokémon",
    "flavorText": "Wenn dieses Pokémon einen Strahl glühenden Feuers speit, leuchtet seine Schwanzspitze auf."
  },
  {
    "id": 7,
    "name": "squirtle",
    "germanName": "Schiggy",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 64,
      "speed": 43
    },
    "totalStats": 314,
    "height": 0.5,
    "weight": 9,
    "generation": 1,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Minikröten-Pokémon",
    "flavorText": "Es zieht sich in seinen Panzer zurück und greift dann mit Wasserstrahlen seine Gegner an."
  },
  {
    "id": 8,
    "name": "wartortle",
    "germanName": "Schillok",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 58
    },
    "totalStats": 405,
    "height": 1,
    "weight": 22.5,
    "generation": 1,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kröten-Pokémon",
    "flavorText": "Bei Gefahr zieht dieses Pokémon seinen Kopf ein. Die Schwanzspitze ragt jedoch aus dem Panzer heraus."
  },
  {
    "id": 9,
    "name": "blastoise",
    "germanName": "Turtok",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 78
    },
    "totalStats": 530,
    "height": 1.6,
    "weight": 85.5,
    "generation": 1,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Panzertier-Pokémon",
    "flavorText": "Es begräbt seine Gegner mit seinem enormen Körpergewicht. Wenn es in einer aussichtslosen Lage steckt, zieht es sich in seinen Panzer zurück."
  },
  {
    "id": 10,
    "name": "caterpie",
    "germanName": "Raupy",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 45
    },
    "totalStats": 195,
    "height": 0.3,
    "weight": 2.9,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wurm-Pokémon",
    "flavorText": "Als Schutz vor Feinden sondert es einen übel riechenden Gestank mit seinen Antennen ab."
  },
  {
    "id": 11,
    "name": "metapod",
    "germanName": "Safcon",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 30
    },
    "totalStats": 205,
    "height": 0.7,
    "weight": 9.9,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kokon-Pokémon",
    "flavorText": "Der stahlharte Panzer schützt seinen zarten Körper. Es wartet geduldig auf seine Entwicklung."
  },
  {
    "id": 12,
    "name": "butterfree",
    "germanName": "Smettbo",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 70
    },
    "totalStats": 395,
    "height": 1.1,
    "weight": 32,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Falter-Pokémon",
    "flavorText": "Es liebt Blütenhonig. Es findet selbst Blumen, die sehr wenig Pollen haben."
  },
  {
    "id": 13,
    "name": "weedle",
    "germanName": "Hornliu",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 50
    },
    "totalStats": 195,
    "height": 0.3,
    "weight": 3.2,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Raupe",
    "flavorText": "Es lebt bevorzugt in Wäldern und in hohem Gras. Auf dem Kopf trägt es einen circa 5 cm langen, spitzen, giftigen Stachel."
  },
  {
    "id": 14,
    "name": "kakuna",
    "germanName": "Kokuna",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 35
    },
    "totalStats": 205,
    "height": 0.6,
    "weight": 10,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kokon",
    "flavorText": "Dieses Pokémon kann sich kaum bewegen. Bei drohender Gefahr verhärtet es seinen Panzer."
  },
  {
    "id": 15,
    "name": "beedrill",
    "germanName": "Bibor",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 75
    },
    "totalStats": 395,
    "height": 1,
    "weight": 29.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftbiene",
    "flavorText": "Dieses Pokémon verfügt über drei Giftstachel. Es kann seine Gegner damit wiederholt stechen."
  },
  {
    "id": 16,
    "name": "pidgey",
    "germanName": "Taubsi",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 56
    },
    "totalStats": 251,
    "height": 0.3,
    "weight": 1.8,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kleinvogel",
    "flavorText": "Ein vorwiegend in Wäldern lebendes Pokémon, das zur Verteidigung mit den Flügeln Sand aufwirbelt."
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "germanName": "Tauboga",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 71
    },
    "totalStats": 349,
    "height": 1.1,
    "weight": 30,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vogel",
    "flavorText": "Die Krallen an seinen Füßen sind sehr ausgeprägt. Es kann sogar ein Owei zu seinem Nest in 100 km Entfernung tragen."
  },
  {
    "id": 18,
    "name": "pidgeot",
    "germanName": "Tauboss",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 101
    },
    "totalStats": 479,
    "height": 1.5,
    "weight": 39.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vogel",
    "flavorText": "Dieses Pokémon schnellt bei der Jagd blitzschnell unter Wasser, um seine ahnungslose Beute zu fangen."
  },
  {
    "id": 19,
    "name": "rattata",
    "germanName": "Rattfratz",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 72
    },
    "totalStats": 253,
    "height": 0.3,
    "weight": 3.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maus",
    "flavorText": "Es baut sein Nest, wo es Futter findet. Es ist den ganzen Tag auf der Suche nach etwas Essbarem."
  },
  {
    "id": 20,
    "name": "raticate",
    "germanName": "Rattikarl",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 97
    },
    "totalStats": 413,
    "height": 0.7,
    "weight": 18.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maus",
    "flavorText": "Es wetzt seine ständig wachsenden Zähne an harten Dingen. Es kann Wände aus Beton zernagen."
  },
  {
    "id": 21,
    "name": "spearow",
    "germanName": "Habitak",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "specialAttack": 31,
      "specialDefense": 31,
      "speed": 70
    },
    "totalStats": 262,
    "height": 0.3,
    "weight": 2,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kleinvogel",
    "flavorText": "Es beschützt sein Gebiet stets vor Eindringlingen. Daher fliegt es ständig wild umher."
  },
  {
    "id": 22,
    "name": "fearow",
    "germanName": "Ibitak",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "specialAttack": 61,
      "specialDefense": 61,
      "speed": 100
    },
    "totalStats": 442,
    "height": 1.2,
    "weight": 38,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pickvogel",
    "flavorText": "Mit seinen riesigen Flügeln kann dieses Pokémon nahezu pausenlos in der Luft bleiben."
  },
  {
    "id": 23,
    "name": "ekans",
    "germanName": "Rettan",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "specialAttack": 40,
      "specialDefense": 54,
      "speed": 55
    },
    "totalStats": 288,
    "height": 2,
    "weight": 6.9,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schlange",
    "flavorText": "Mit dem Alter wird der Körper dieses Pokémon immer länger. Es schläft um Äste gewickelt."
  },
  {
    "id": 24,
    "name": "arbok",
    "germanName": "Arbok",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "specialAttack": 65,
      "specialDefense": 79,
      "speed": 80
    },
    "totalStats": 448,
    "height": 3.5,
    "weight": 65,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kobra",
    "flavorText": "Das Muster auf seinem Bauch ähnelt einer Fratze. Schwache Gegner nehmen bereits beim Anblick Reißaus."
  },
  {
    "id": 25,
    "name": "pikachu",
    "germanName": "Pikachu",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    },
    "totalStats": 320,
    "height": 0.4,
    "weight": 6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maus-Pokémon",
    "flavorText": "Es streckt seinen Schweif nach oben, um seine Umgebung zu prüfen. Häufig fährt ein Blitz hinein."
  },
  {
    "id": 26,
    "name": "raichu",
    "germanName": "Raichu",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 110
    },
    "totalStats": 485,
    "height": 0.8,
    "weight": 30,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maus-Pokémon",
    "flavorText": "Wenn es sich auflädt, zucken seine Muskeln und es wird aggressiver und kampflustiger."
  },
  {
    "id": 27,
    "name": "sandshrew",
    "germanName": "Sandan",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 40
    },
    "totalStats": 300,
    "height": 0.6,
    "weight": 12,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maus-Pokémon",
    "flavorText": "Es gräbt und lebt im Erdboden. Bei Gefahr rollt es sich zum Schutz zu einem Ball zusammen."
  },
  {
    "id": 28,
    "name": "sandslash",
    "germanName": "Sandamer",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 65
    },
    "totalStats": 450,
    "height": 1,
    "weight": 29.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maus-Pokémon",
    "flavorText": "Wenn es schnell gräbt, können seine Stacheln und Krallen abbrechen. Sie wachsen binnen eines Tages nach."
  },
  {
    "id": 29,
    "name": "nidoran-f",
    "germanName": "Nidoran♀",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 41
    },
    "totalStats": 275,
    "height": 0.4,
    "weight": 7,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftdorn-Pokémon",
    "flavorText": "Dieses Pokémon ist sehr klein, verfügt aber über starke Gifte. Das Weibchen hat ein kleineres Horn."
  },
  {
    "id": 30,
    "name": "nidorina",
    "germanName": "Nidorina",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 56
    },
    "totalStats": 365,
    "height": 0.8,
    "weight": 20,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftdorn-Pokémon",
    "flavorText": "Das Weibchen ist ausgeglichener. Es stößt Schreie im Ultraschallwellenbereich aus, die den Gegner verwirren können."
  },
  {
    "id": 31,
    "name": "nidoqueen",
    "germanName": "Nidoqueen",
    "types": [
      "poison",
      "ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 76
    },
    "totalStats": 505,
    "height": 1.3,
    "weight": 60,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Bohrer-Pokémon",
    "flavorText": "Es benutzt seinen schuppigen Körper, um den Höhleneingang als Schutz für seine Jungen zu sperren."
  },
  {
    "id": 32,
    "name": "nidoran-m",
    "germanName": "Nidoran♂",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 50
    },
    "totalStats": 273,
    "height": 0.5,
    "weight": 9,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftdorn-Pokémon",
    "flavorText": "Es untersucht die Umgebung, indem es die Ohren spitzt und lauscht. Sein giftiges Horn schützt es."
  },
  {
    "id": 33,
    "name": "nidorino",
    "germanName": "Nidorino",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 65
    },
    "totalStats": 365,
    "height": 0.9,
    "weight": 19.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftdorn-Pokémon",
    "flavorText": "Es überwacht mit seinen riesigen Ohren die Umgebung. Registriert es eine Bewegung, greift es an."
  },
  {
    "id": 34,
    "name": "nidoking",
    "germanName": "Nidoking",
    "types": [
      "poison",
      "ground"
    ],
    "stats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 85
    },
    "totalStats": 505,
    "height": 1.4,
    "weight": 62,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Bohrer-Pokémon",
    "flavorText": "Seine steinharte Haut und sein ausgeprägtes Horn sind seine Markenzeichen. Achte auf das Horn, denn es enthält Gift."
  },
  {
    "id": 35,
    "name": "clefairy",
    "germanName": "Piepi",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "specialAttack": 60,
      "specialDefense": 65,
      "speed": 35
    },
    "totalStats": 323,
    "height": 0.6,
    "weight": 7.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feen-Pokémon",
    "flavorText": "Eine Ansammlung von Piepi bei Vollmond tanzen zu sehen, soll Freude verheißen."
  },
  {
    "id": 36,
    "name": "clefable",
    "germanName": "Pixi",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 60
    },
    "totalStats": 483,
    "height": 1.3,
    "weight": 40,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feen-Pokémon",
    "flavorText": "Es kann eine Nadel hören, die in 1 km Entfernung zu Boden fällt. Es lebt in der Stille der Berge."
  },
  {
    "id": 37,
    "name": "vulpix",
    "germanName": "Vulpix",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 65
    },
    "totalStats": 299,
    "height": 0.6,
    "weight": 9.9,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fuchs-Pokémon",
    "flavorText": "Dieses Pokémon hat bei seiner Geburt nur einen Schweif, der sich mit zunehmendem Alter aufspaltet."
  },
  {
    "id": 38,
    "name": "ninetales",
    "germanName": "Vulnona",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "specialAttack": 81,
      "specialDefense": 100,
      "speed": 100
    },
    "totalStats": 505,
    "height": 1.1,
    "weight": 19.9,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fuchs-Pokémon",
    "flavorText": "Es hat neun lange Schweife und sein Fell glänzt gülden. Man sagt, es soll 1 000 Jahre alt werden."
  },
  {
    "id": 39,
    "name": "jigglypuff",
    "germanName": "Pummeluff",
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 20
    },
    "totalStats": 270,
    "height": 0.5,
    "weight": 5.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ballon-Pokémon",
    "flavorText": "Es fesselt die Gegner mit seinen großen, runden Augen und versetzt sie in Schlaf, indem es eine beruhigende Melodie singt."
  },
  {
    "id": 40,
    "name": "wigglytuff",
    "germanName": "Knuddeluff",
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 50,
      "speed": 45
    },
    "totalStats": 435,
    "height": 1,
    "weight": 12,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ballon-Pokémon",
    "flavorText": "Sein Fell ist so flauschig, dass, wenn zwei zusammenstehen, sie nicht getrennt werden möchten."
  },
  {
    "id": 41,
    "name": "zubat",
    "germanName": "Zubat",
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 55
    },
    "totalStats": 245,
    "height": 0.8,
    "weight": 7.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fledermaus-Pokémon",
    "flavorText": "Obwohl es keine Augen hat, kann es Hindernisse mithilfe von Ultraschallwellen wahrnehmen."
  },
  {
    "id": 42,
    "name": "golbat",
    "germanName": "Golbat",
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 90
    },
    "totalStats": 455,
    "height": 1.6,
    "weight": 55,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fledermaus-Pokémon",
    "flavorText": "Dieses Pokémon saugt dem Gegner selbst dann noch Energie ab, wenn es zu schwer zum Fliegen wird."
  },
  {
    "id": 43,
    "name": "oddish",
    "germanName": "Myrapla",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "specialAttack": 75,
      "specialDefense": 65,
      "speed": 30
    },
    "totalStats": 320,
    "height": 0.5,
    "weight": 5.4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Unkraut-Pokémon",
    "flavorText": "Tagsüber versteckt es sich in der kalten Erde, um die Sonne zu meiden. Es wächst im Mondschein."
  },
  {
    "id": 44,
    "name": "gloom",
    "germanName": "Duflor",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40
    },
    "totalStats": 395,
    "height": 0.8,
    "weight": 8.6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Unkraut-Pokémon",
    "flavorText": "Dieses Pokémon sondert einen übelriechenden Geruch ab. Trotzdem halten einige Leute es im Haus."
  },
  {
    "id": 45,
    "name": "vileplume",
    "germanName": "Giflor",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "specialAttack": 110,
      "specialDefense": 90,
      "speed": 50
    },
    "totalStats": 490,
    "height": 1.2,
    "weight": 18.6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blumen-Pokémon",
    "flavorText": "Je größer die Blütenblätter, desto mehr giftige Pollen sind in der Blüte enthalten."
  },
  {
    "id": 46,
    "name": "paras",
    "germanName": "Paras",
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 25
    },
    "totalStats": 285,
    "height": 0.3,
    "weight": 5.4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pilz",
    "flavorText": "Auf seinem Rücken wachsen Pilze, die man Tochukaso nennt. Die Pilze wachsen mit ihrem Wirt."
  },
  {
    "id": 47,
    "name": "parasect",
    "germanName": "Parasek",
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 30
    },
    "totalStats": 405,
    "height": 1,
    "weight": 29.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pilz",
    "flavorText": "Parasek wird von einem Pilz, der größer als das Pokémon ist, kontrolliert. Er gibt Giftsporen ab."
  },
  {
    "id": 48,
    "name": "venonat",
    "germanName": "Bluzuk",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 45
    },
    "totalStats": 305,
    "height": 1,
    "weight": 30,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Insekt",
    "flavorText": "Seine großen Augen bestehen aus vielen kleinen Augen. Nachts wird es von Licht angezogen."
  },
  {
    "id": 49,
    "name": "venomoth",
    "germanName": "Omot",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 90
    },
    "totalStats": 450,
    "height": 1.5,
    "weight": 12.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftmotte",
    "flavorText": "Wer die von ihm verstreuten Schuppen berührt, wird gelähmt und muss sich setzen."
  },
  {
    "id": 50,
    "name": "diglett",
    "germanName": "Digda",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 95
    },
    "totalStats": 265,
    "height": 0.2,
    "weight": 0.8,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maulwurf-Pokémon",
    "flavorText": "Dieses Pokémon lebt 1 m unter der Erde. Es frisst Wurzeln und kommt selten an die Oberfläche."
  },
  {
    "id": 51,
    "name": "dugtrio",
    "germanName": "Digdri",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 120
    },
    "totalStats": 425,
    "height": 0.7,
    "weight": 33.3,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maulwurf-Pokémon",
    "flavorText": "Im Kampf gräbt es sich ein und attackiert den Gegner aus einer unvorhersehbaren Richtung."
  },
  {
    "id": 52,
    "name": "meowth",
    "germanName": "Mauzi",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90
    },
    "totalStats": 290,
    "height": 0.4,
    "weight": 4.2,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Katzen-Pokémon",
    "flavorText": "Ein nachtaktives Pokémon. Sieht es etwas Schimmerndes, fangen seine Augen an zu glänzen."
  },
  {
    "id": 53,
    "name": "persian",
    "germanName": "Snobilikat",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 115
    },
    "totalStats": 440,
    "height": 1,
    "weight": 32,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rassekatzen-Pokémon",
    "flavorText": "Dieses Pokémon hat sehr schönes Fell. Es ist jedoch ein schwer erziehbares Haustier."
  },
  {
    "id": 54,
    "name": "psyduck",
    "germanName": "Enton",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 55
    },
    "totalStats": 320,
    "height": 0.8,
    "weight": 19.6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Enten-Pokémon",
    "flavorText": "Es wird permanent von Kopfschmerzen geplagt. Wird der Schmerz stärker, setzt es geheimnisvolle Kräfte ein."
  },
  {
    "id": 55,
    "name": "golduck",
    "germanName": "Entoron",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 85
    },
    "totalStats": 500,
    "height": 1.7,
    "weight": 76.6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Enten-Pokémon",
    "flavorText": "An seinen langen, dünnen Gliedmaßen befinden sich Schwimmflossen. Mit diesen kann es anmutig durch Seen schwimmen."
  },
  {
    "id": 56,
    "name": "mankey",
    "germanName": "Menki",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 70
    },
    "totalStats": 305,
    "height": 0.5,
    "weight": 28,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwein/Affe",
    "flavorText": "Da es grundlos angreift und nicht zwischen Freund oder Feind unterscheidet, ist es sehr gefährlich."
  },
  {
    "id": 57,
    "name": "primeape",
    "germanName": "Rasaff",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 95
    },
    "totalStats": 455,
    "height": 1,
    "weight": 32,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwein/Affe",
    "flavorText": "In ganz seltenen Fällen beruhigt sich dieses sehr jähzornige Pokémon und ist für einen Moment friedlich."
  },
  {
    "id": 58,
    "name": "growlithe",
    "germanName": "Fukano",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 60
    },
    "totalStats": 350,
    "height": 0.7,
    "weight": 19,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Welpen-Pokémon",
    "flavorText": "Es ist sehr freundlich und bleibt den Menschen treu. Durch Bellen und Beißen versucht es, Gegner zu verscheuchen."
  },
  {
    "id": 59,
    "name": "arcanine",
    "germanName": "Arkani",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 95
    },
    "totalStats": 555,
    "height": 1.9,
    "weight": 155,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Legendär-Pokémon",
    "flavorText": "Dieses Pokémon trägt ein wunderschönes Fell. Es ist obendrein schnell und sehr wendig."
  },
  {
    "id": 60,
    "name": "poliwag",
    "germanName": "Quapsel",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90
    },
    "totalStats": 300,
    "height": 0.6,
    "weight": 12.4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kaulquappen-Pokémon",
    "flavorText": "Seine glatte, schwarze Haut ist dünn und feucht. Teilweise sind seine Innereien als spiralförmige Muster sichtbar."
  },
  {
    "id": 61,
    "name": "poliwhirl",
    "germanName": "Quaputzi",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    },
    "totalStats": 385,
    "height": 1,
    "weight": 20,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kaulquappen-Pokémon",
    "flavorText": "Dieses Pokémon kann im Wasser und auch an Land leben. An Land schwitzt es sich den Körper nass."
  },
  {
    "id": 62,
    "name": "poliwrath",
    "germanName": "Quappo",
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "specialAttack": 70,
      "specialDefense": 90,
      "speed": 70
    },
    "totalStats": 510,
    "height": 1.3,
    "weight": 54,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kaulquappen-Pokémon",
    "flavorText": "Es hat extrem starke Muskeln und kann durch den Ozean schwimmen, ohne sich ausruhen zu müssen."
  },
  {
    "id": 63,
    "name": "abra",
    "germanName": "Abra",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "specialAttack": 105,
      "specialDefense": 55,
      "speed": 90
    },
    "totalStats": 310,
    "height": 0.9,
    "weight": 19.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Psi-Pokémon",
    "flavorText": "Es schläft 18 Stunden am Tag. Währenddessen setzt es eine Vielzahl zusätzlicher sensorischer Kräfte ein."
  },
  {
    "id": 64,
    "name": "kadabra",
    "germanName": "Kadabra",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 105
    },
    "totalStats": 400,
    "height": 1.3,
    "weight": 56.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Psi-Pokémon",
    "flavorText": "Viele seltsame Dinge passieren, wenn ein Kadabra in der Nähe ist. Uhren laufen zum Beispiel rückwärts."
  },
  {
    "id": 65,
    "name": "alakazam",
    "germanName": "Simsala",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "specialAttack": 135,
      "specialDefense": 95,
      "speed": 120
    },
    "totalStats": 500,
    "height": 1.5,
    "weight": 48,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Psi-Pokémon",
    "flavorText": "Seine Gehirnzellen vervielfachen sich sein ganzes Leben lang. Daher kann es sich immer an alles erinnern."
  },
  {
    "id": 66,
    "name": "machop",
    "germanName": "Machollo",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35
    },
    "totalStats": 305,
    "height": 0.8,
    "weight": 19.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kraftprotz-Pokémon",
    "flavorText": "Es hebt Georok hoch, um seinen Körper zu trainieren. Außerdem übt es sich in jeder Art von Kampfsport."
  },
  {
    "id": 67,
    "name": "machoke",
    "germanName": "Maschock",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 45
    },
    "totalStats": 405,
    "height": 1.5,
    "weight": 70.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kraftprotz-Pokémon",
    "flavorText": "Dieses Pokémon ist superstark. Es kann sich nur mit einem Kraft regulierenden Gürtel bewegen."
  },
  {
    "id": 68,
    "name": "machamp",
    "germanName": "Machomei",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 55
    },
    "totalStats": 505,
    "height": 1.6,
    "weight": 130,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kraftprotz-Pokémon",
    "flavorText": "Seine markigen Arme können innerhalb von nur zwei Sekunden 1 000 Schläge verteilen."
  },
  {
    "id": 69,
    "name": "bellsprout",
    "germanName": "Knofensa",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 30,
      "speed": 40
    },
    "totalStats": 300,
    "height": 0.7,
    "weight": 4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blume",
    "flavorText": "Obwohl sein Körper sehr schmal ist, schnappt es blitzschnell nach Beute."
  },
  {
    "id": 70,
    "name": "weepinbell",
    "germanName": "Ultrigaria",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 55
    },
    "totalStats": 390,
    "height": 1,
    "weight": 6.4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fliegentod",
    "flavorText": "Die Blätter werden eingesetzt, um Gegner aufzuschlitzen. Dieses Pokémon spuckt eine Flüssigkeit, die alles auflöst."
  },
  {
    "id": 71,
    "name": "victreebel",
    "germanName": "Sarzenia",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 70,
      "speed": 70
    },
    "totalStats": 490,
    "height": 1.7,
    "weight": 15.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fliegentod",
    "flavorText": "Dieses Pokémon soll in großen Kolonien tief im Dschungel leben, doch niemand kann dies bestätigen."
  },
  {
    "id": 72,
    "name": "tentacool",
    "germanName": "Tentacha",
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 70
    },
    "totalStats": 335,
    "height": 0.9,
    "weight": 45.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Quallen-Pokémon",
    "flavorText": "Sein Körper besteht aus Wasser. Aus seinen kristallartigen Augen verschießt es eigenartige Strahlen."
  },
  {
    "id": 73,
    "name": "tentacruel",
    "germanName": "Tentoxa",
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 100
    },
    "totalStats": 515,
    "height": 1.6,
    "weight": 55,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Quallen-Pokémon",
    "flavorText": "Dieses Pokémon kann die Tentakel bei der Jagd ausfahren, um die Beute leichter zu fangen."
  },
  {
    "id": 74,
    "name": "geodude",
    "germanName": "Kleinstein",
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 20
    },
    "totalStats": 300,
    "height": 0.4,
    "weight": 20,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gestein",
    "flavorText": "Wanderer stolpern in den Bergen häufig über dieses Pokémon, da es wie ein Stein aussieht."
  },
  {
    "id": 75,
    "name": "graveler",
    "germanName": "Georok",
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 35
    },
    "totalStats": 390,
    "height": 1,
    "weight": 105,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gestein",
    "flavorText": "Es ist ihm völlig gleichgültig, wenn Stücke aus ihm herausbrechen, während es Berge hinabrollt."
  },
  {
    "id": 76,
    "name": "golem",
    "germanName": "Geowaz",
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    },
    "totalStats": 495,
    "height": 1.4,
    "weight": 300,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Urgestein",
    "flavorText": "Sie rollen Berge hinunter und hinterlassen Spurrillen. Halte dich von diesen Rillen fern."
  },
  {
    "id": 77,
    "name": "ponyta",
    "germanName": "Ponita",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 90
    },
    "totalStats": 410,
    "height": 1,
    "weight": 30,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerpferd-Pokémon",
    "flavorText": "Neugeboren kann es kaum stehen. Durch das Galoppieren werden seine Beine aber schneller und kräftiger."
  },
  {
    "id": 78,
    "name": "rapidash",
    "germanName": "Gallopa",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 105
    },
    "totalStats": 500,
    "height": 1.7,
    "weight": 95,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerpferd-Pokémon",
    "flavorText": "Dieses Pokémon verfolgt schnelle Objekte in der Hoffnung, ein Wettrennen gegen sie zu gewinnen."
  },
  {
    "id": 79,
    "name": "slowpoke",
    "germanName": "Flegmon",
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 15
    },
    "totalStats": 315,
    "height": 1.2,
    "weight": 36,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schnarcher-Pokémon",
    "flavorText": "Es faulenzt am Wasser. Wenn es in den Schweif gebissen wird, bemerkt es das erst am nächsten Tag."
  },
  {
    "id": 80,
    "name": "slowbro",
    "germanName": "Lahmus",
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30
    },
    "totalStats": 490,
    "height": 1.6,
    "weight": 78.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Symbiose-Pokémon",
    "flavorText": "Das Muschas an seiner Rute lässt nicht locker, da ein leckerer Geschmack aus seiner Rute strömt."
  },
  {
    "id": 81,
    "name": "magnemite",
    "germanName": "Magnetilo",
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 55,
      "speed": 45
    },
    "totalStats": 325,
    "height": 0.3,
    "weight": 6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Magnet-Pokémon",
    "flavorText": "Die Magneten an seinem Körper erzeugen ein Antigravitationsfeld, um es ständig in der Schwebe zu halten."
  },
  {
    "id": 82,
    "name": "magneton",
    "germanName": "Magneton",
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 70
    },
    "totalStats": 465,
    "height": 1,
    "weight": 60,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Magnet-Pokémon",
    "flavorText": "Schließen sich mehrere Magnetilo zusammen, entsteht dieses Pokémon. Es entlädt kräftige Hochspannungsmagnetwellen."
  },
  {
    "id": 83,
    "name": "farfetchd",
    "germanName": "Porenta",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "specialAttack": 58,
      "specialDefense": 62,
      "speed": 60
    },
    "totalStats": 377,
    "height": 0.8,
    "weight": 15,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wildenten-Pokémon",
    "flavorText": "Dieses Pokémon nutzt eine Lauchstange als Waffe. Es setzt sie wie ein Schwert ein."
  },
  {
    "id": 84,
    "name": "doduo",
    "germanName": "Dodu",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 75
    },
    "totalStats": 310,
    "height": 1.4,
    "weight": 39.2,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Duovogel",
    "flavorText": "Dieses zweiköpfige Pokémon gilt als plötzliche Mutation. Es rennt bis zu 100 km/h schnell."
  },
  {
    "id": 85,
    "name": "dodrio",
    "germanName": "Dodri",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 110
    },
    "totalStats": 470,
    "height": 1.8,
    "weight": 85.2,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Trivogel",
    "flavorText": "Lässt ein Feind auch nur einen der drei Köpfe für nur eine Sekunde aus den Augen, wird er sofort gepickt."
  },
  {
    "id": 86,
    "name": "seel",
    "germanName": "Jurob",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 70,
      "speed": 45
    },
    "totalStats": 325,
    "height": 1.1,
    "weight": 90,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seehund",
    "flavorText": "Dieses Pokémon lebt auf Eisbergen. Es schwimmt im Eiswasser und bricht das Eis mithilfe seines Horns."
  },
  {
    "id": 87,
    "name": "dewgong",
    "germanName": "Jugong",
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 70
    },
    "totalStats": 475,
    "height": 1.7,
    "weight": 120,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seehund",
    "flavorText": "Sein Körper ist mit reinem, weißem Fell überzogen. Je kälter es wird, desto aktiver wird dieses Pokémon."
  },
  {
    "id": 88,
    "name": "grimer",
    "germanName": "Sleima",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 25
    },
    "totalStats": 325,
    "height": 0.9,
    "weight": 30,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schlamm",
    "flavorText": "Schlamm, der Röntgenstrahlung vom Mond ausgesetzt war, wurde zu Sleima. Es isst am liebsten dreckige Dinge."
  },
  {
    "id": 89,
    "name": "muk",
    "germanName": "Sleimok",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 100,
      "speed": 50
    },
    "totalStats": 500,
    "height": 1.2,
    "weight": 30,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schlamm",
    "flavorText": "Sie treffen sich an stinkenden Orten, an denen der Schleim sich türmt. Dies merkt man am Gestank."
  },
  {
    "id": 90,
    "name": "shellder",
    "germanName": "Muschas",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 40
    },
    "totalStats": 305,
    "height": 0.3,
    "weight": 4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Muschel-Pokémon",
    "flavorText": "Eine harte Schale schützt dieses Pokémon. Nur wenn es diese öffnet, wird es verwundbar."
  },
  {
    "id": 91,
    "name": "cloyster",
    "germanName": "Austos",
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 70
    },
    "totalStats": 525,
    "height": 1.5,
    "weight": 132.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Muschel-Pokémon",
    "flavorText": "Austos, die im Meer mit starker Strömung leben, werden groß und entwickeln scharfe Stacheln."
  },
  {
    "id": 92,
    "name": "gastly",
    "germanName": "Nebulak",
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "specialAttack": 100,
      "specialDefense": 35,
      "speed": 80
    },
    "totalStats": 310,
    "height": 1.3,
    "weight": 0.1,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gas-Pokémon",
    "flavorText": "Es hat einen gasförmigen Körper. Es kann jeden Gegner mit Giftgas einnebeln und dadurch ersticken."
  },
  {
    "id": 93,
    "name": "haunter",
    "germanName": "Alpollo",
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "specialAttack": 115,
      "specialDefense": 55,
      "speed": 95
    },
    "totalStats": 405,
    "height": 1.6,
    "weight": 0.1,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gas-Pokémon",
    "flavorText": "Falls du im Dunkeln das Gefühl hast, beobachtet zu werden und niemand ist zu sehen, ist es bestimmt Alpollo."
  },
  {
    "id": 94,
    "name": "gengar",
    "germanName": "Gengar",
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 75,
      "speed": 110
    },
    "totalStats": 500,
    "height": 1.5,
    "weight": 40.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schatten-Pokémon",
    "flavorText": "Es versteckt sich im Schatten. Man sagt, wenn sich ein Gengar versteckt, kühlt es sich um 5 °C ab."
  },
  {
    "id": 95,
    "name": "onix",
    "germanName": "Onix",
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 70
    },
    "totalStats": 385,
    "height": 8.8,
    "weight": 210,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Felsnatter-Pokémon",
    "flavorText": "Dieses Pokémon gräbt auf seiner Suche nach Futter lange Tunnel, in denen sich später Digda einnisten."
  },
  {
    "id": 96,
    "name": "drowzee",
    "germanName": "Traumato",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "specialAttack": 43,
      "specialDefense": 90,
      "speed": 42
    },
    "totalStats": 328,
    "height": 1,
    "weight": 32.4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hypnose",
    "flavorText": "Traumato versetzt Gegner in den Schlaf und frisst deren Träume. Von Alpträumen wird ihm aber übel."
  },
  {
    "id": 97,
    "name": "hypno",
    "germanName": "Hypno",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "specialAttack": 73,
      "specialDefense": 115,
      "speed": 67
    },
    "totalStats": 483,
    "height": 1.6,
    "weight": 75.6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hypnose",
    "flavorText": "Es trägt ein Pendel. Man berichtet von einem Vorfall, bei dem es ein Kind mitnahm, das es zuvor hypnotisiert hatte."
  },
  {
    "id": 98,
    "name": "krabby",
    "germanName": "Krabby",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 50
    },
    "totalStats": 325,
    "height": 0.4,
    "weight": 6.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Krabben-Pokémon",
    "flavorText": "Wittert es Gefahr, hüllt es sich in Blasen aus seinem Maul, um größer zu erscheinen."
  },
  {
    "id": 99,
    "name": "kingler",
    "germanName": "Kingler",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 75
    },
    "totalStats": 475,
    "height": 1.3,
    "weight": 60,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kneifer-Pokémon",
    "flavorText": "Die Kraft seiner großen und harten Schere entspricht 10 000 PS. Durch die Größe ist sie aber auch äußerst unhandlich und sperrig."
  },
  {
    "id": 100,
    "name": "voltorb",
    "germanName": "Voltobal",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 100
    },
    "totalStats": 330,
    "height": 0.5,
    "weight": 10.4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ball",
    "flavorText": "Es wurde entdeckt, als man Pokébälle einführte. Es scheint, als gäbe es da einen Zusammenhang."
  },
  {
    "id": 101,
    "name": "electrode",
    "germanName": "Lektrobal",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 150
    },
    "totalStats": 490,
    "height": 1.2,
    "weight": 66.6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ball",
    "flavorText": "Es explodiert schon bei kleinsten Reizen. Sein Spitzname „Die Bombenkugel“ spiegelt die Furcht der Menschen wider."
  },
  {
    "id": 102,
    "name": "exeggcute",
    "germanName": "Owei",
    "types": [
      "grass",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 45,
      "speed": 40
    },
    "totalStats": 325,
    "height": 0.4,
    "weight": 2.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ei-Pokémon",
    "flavorText": "Die sechs Eier kommunizieren telepathisch. Werden sie getrennt, finden sie sich schnell wieder."
  },
  {
    "id": 103,
    "name": "exeggutor",
    "germanName": "Kokowei",
    "types": [
      "grass",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 75,
      "speed": 55
    },
    "totalStats": 530,
    "height": 2,
    "weight": 120,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Palmfrucht-Pokémon",
    "flavorText": "Seine drei Köpfe denken unabhängig voneinander. Dennoch sind sie nett zueinander und streiten nie."
  },
  {
    "id": 104,
    "name": "cubone",
    "germanName": "Tragosso",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 35
    },
    "totalStats": 320,
    "height": 0.4,
    "weight": 6.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Einsam-Pokémon",
    "flavorText": "Es trägt den Schädel seiner verstorbenen Mutter auf seinem Kopf. Fühlt es sich einsam, soll es laut weinen."
  },
  {
    "id": 105,
    "name": "marowak",
    "germanName": "Knogga",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 45
    },
    "totalStats": 425,
    "height": 1,
    "weight": 45,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Knochenfan-Pokémon",
    "flavorText": "Es ist klein und war ursprünglich sehr schwach. Erst als es anfing Knochen einzusetzen, wurde es wild."
  },
  {
    "id": 106,
    "name": "hitmonlee",
    "germanName": "Kicklee",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 87
    },
    "totalStats": 455,
    "height": 1.5,
    "weight": 49.8,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kicker-Pokémon",
    "flavorText": "Die Beine ziehen und strecken sich unabhängig voneinander. Mit seinen dehnbaren Beinen kann es einen entfernten Gegner treffen."
  },
  {
    "id": 107,
    "name": "hitmonchan",
    "germanName": "Nockchan",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 76
    },
    "totalStats": 455,
    "height": 1.4,
    "weight": 50.2,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Puncher-Pokémon",
    "flavorText": "Die Schläge, die es austeilt, können Beton pulverisieren. Es muss sich im Kampf alle drei Minuten ausruhen."
  },
  {
    "id": 108,
    "name": "lickitung",
    "germanName": "Schlurp",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 30
    },
    "totalStats": 385,
    "height": 1.2,
    "weight": 65.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schlecker-Pokémon",
    "flavorText": "Seine Zunge ist mit klebrigem Speichel bedeckt, der überall haftet. Dies ist sehr nützlich."
  },
  {
    "id": 109,
    "name": "koffing",
    "germanName": "Smogon",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "specialAttack": 60,
      "specialDefense": 45,
      "speed": 35
    },
    "totalStats": 340,
    "height": 0.6,
    "weight": 1,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftwolken-Pokémon",
    "flavorText": "Sein dünner, ballonartiger Körper ist mit schrecklichem Giftgas gefüllt. Es verbreitet einen heftigen Gestank, wenn es in der Nähe ist."
  },
  {
    "id": 110,
    "name": "weezing",
    "germanName": "Smogmog",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 60
    },
    "totalStats": 490,
    "height": 1.2,
    "weight": 9.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftwolken-Pokémon",
    "flavorText": "Pumpt sich eines der zwei Smogon auf, lässt das andere Luft ab. So findet ein Giftgasaustausch statt."
  },
  {
    "id": 111,
    "name": "rhyhorn",
    "germanName": "Rihorn",
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 25
    },
    "totalStats": 345,
    "height": 1,
    "weight": 115,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stachler-Pokémon",
    "flavorText": "Stark, aber nicht allzu klug, kann dieses Pokémon sogar Hochhäuser mit seinem Tackle-Angriff zum Einsturz bringen."
  },
  {
    "id": 112,
    "name": "rhydon",
    "germanName": "Rizeros",
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 40
    },
    "totalStats": 485,
    "height": 1.9,
    "weight": 120,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Bohrer-Pokémon",
    "flavorText": "Durch seine panzerähnliche Körperhülle kann es in bis zu 2 000 °C heißer Lava leben."
  },
  {
    "id": 113,
    "name": "chansey",
    "germanName": "Chaneira",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "specialAttack": 35,
      "specialDefense": 105,
      "speed": 50
    },
    "totalStats": 450,
    "height": 1.1,
    "weight": 34.6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ei-Pokémon",
    "flavorText": "Man sagt, es bringe Glück. Es ist sehr mitfühlend und teilt seine Eier mit Verletzten."
  },
  {
    "id": 114,
    "name": "tangela",
    "germanName": "Tangela",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "specialAttack": 100,
      "specialDefense": 40,
      "speed": 60
    },
    "totalStats": 435,
    "height": 1,
    "weight": 35,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ranken-Pokémon",
    "flavorText": "Aufgrund der Ranken, die seinen Körper bedecken, kennt keiner seine wahre Form. Die blauen Ranken wachsen immer weiter."
  },
  {
    "id": 115,
    "name": "kangaskhan",
    "germanName": "Kangama",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 90
    },
    "totalStats": 490,
    "height": 2.2,
    "weight": 80,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Muttertier-Pokémon",
    "flavorText": "Sein Nachwuchs wächst in seinem Beutel heran. Nur wenn es sicher ist, darf das Junge aus dem Beutel."
  },
  {
    "id": 116,
    "name": "horsea",
    "germanName": "Seeper",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 25,
      "speed": 60
    },
    "totalStats": 295,
    "height": 0.4,
    "weight": 8,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Drachen-Pokémon",
    "flavorText": "Dieses Pokémon schießt mit Tinte auf über der Wasseroberfläche fliegende Insekten."
  },
  {
    "id": 117,
    "name": "seadra",
    "germanName": "Seemon",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 45,
      "speed": 85
    },
    "totalStats": 440,
    "height": 1.2,
    "weight": 25,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Drachen-Pokémon",
    "flavorText": "Sein Körper ist mit scharfen Stacheln gespickt. Wenn man sorglos ist und es berührt, kann man durch die Stacheln bewusstlos werden."
  },
  {
    "id": 118,
    "name": "goldeen",
    "germanName": "Goldini",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 63
    },
    "totalStats": 320,
    "height": 0.6,
    "weight": 15,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Goldfisch-Pokémon",
    "flavorText": "Es schwimmt mit fünf Knoten. Wird es angegriffen, wehrt es sich mit seinem scharfen Horn."
  },
  {
    "id": 119,
    "name": "seaking",
    "germanName": "Golking",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 68
    },
    "totalStats": 450,
    "height": 1.3,
    "weight": 39,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Goldfisch-Pokémon",
    "flavorText": "Im Herbst, zur Paarungszeit, sieht man diese Pokémon kraftvoll Bäche und Flüsse hinaufschwimmen."
  },
  {
    "id": 120,
    "name": "staryu",
    "germanName": "Sterndu",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 85
    },
    "totalStats": 340,
    "height": 0.8,
    "weight": 34.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sternform-Pokémon",
    "flavorText": "Auch wenn sein Körper nicht mehr intakt ist, kann es sich regenerieren, wenn der Kern leuchtet."
  },
  {
    "id": 121,
    "name": "starmie",
    "germanName": "Starmie",
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "specialAttack": 100,
      "specialDefense": 85,
      "speed": 115
    },
    "totalStats": 520,
    "height": 1.1,
    "weight": 80,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Mysteriös-Pokémon",
    "flavorText": "Der Kern dieses Pokémon leuchtet in den Farben des Regenbogens. Sein Kern gilt als Edelstein."
  },
  {
    "id": 122,
    "name": "mr-mime",
    "germanName": "Pantimos",
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 120,
      "speed": 90
    },
    "totalStats": 460,
    "height": 1.3,
    "weight": 54.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sperren-Pokémon",
    "flavorText": "Seine Fingerspitzen sondern etwas ab, das die Luft zu einer schützenden Wand werden lässt."
  },
  {
    "id": 123,
    "name": "scyther",
    "germanName": "Sichlor",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 105
    },
    "totalStats": 500,
    "height": 1.5,
    "weight": 56,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Mantis-Pokémon",
    "flavorText": "Es zerreißt und zerkleinert seine Beute mit seinen unglaublich scharfen Sicheln. Selten breitet es seine Flügel aus, um zu fliegen."
  },
  {
    "id": 124,
    "name": "jynx",
    "germanName": "Rossana",
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "specialAttack": 115,
      "specialDefense": 95,
      "speed": 95
    },
    "totalStats": 455,
    "height": 1.4,
    "weight": 40.6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Humanotyp-Pokémon",
    "flavorText": "Der beschwingte Gang dieses Pokémon bezaubert Zuschauer und lässt sie im Takt dazu tanzen."
  },
  {
    "id": 125,
    "name": "electabuzz",
    "germanName": "Elektek",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 105
    },
    "totalStats": 490,
    "height": 1.1,
    "weight": 30,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Elektro-Pokémon",
    "flavorText": "Elektrizität bedeckt seinen Körper. Im Dunkeln erstrahlt es in einem bläulichen Ton."
  },
  {
    "id": 126,
    "name": "magmar",
    "germanName": "Magmar",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "specialAttack": 100,
      "specialDefense": 85,
      "speed": 93
    },
    "totalStats": 495,
    "height": 1.3,
    "weight": 44.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Brenner-Pokémon",
    "flavorText": "Es wurde in der Nähe eines Vulkans gefunden. Die Körpertemperatur dieses Feuerspuckers liegt bei fast 1 200 °C."
  },
  {
    "id": 127,
    "name": "pinsir",
    "germanName": "Pinsir",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 70,
      "speed": 85
    },
    "totalStats": 500,
    "height": 1.5,
    "weight": 55,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kneifkäfer-Pokémon",
    "flavorText": "Es hält seine Beute mit seiner Zange fest und teilt sie dann. Was es nicht teilen kann, wirft es fort."
  },
  {
    "id": 128,
    "name": "tauros",
    "germanName": "Tauros",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 110
    },
    "totalStats": 490,
    "height": 1.4,
    "weight": 88.4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wildbullen-Pokémon",
    "flavorText": "Es kämpft mit vollem Einsatz, nachdem es sich mit seinen drei Schweifen auspeitschte, um sich anzustacheln."
  },
  {
    "id": 129,
    "name": "magikarp",
    "germanName": "Karpador",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "specialAttack": 15,
      "specialDefense": 20,
      "speed": 80
    },
    "totalStats": 200,
    "height": 0.9,
    "weight": 10,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fisch-Pokémon",
    "flavorText": "Es ist nutzlos, was Kraft und Geschwindigkeit angeht. Dieses ist das schwächste und erbärmlichste Pokémon der Welt."
  },
  {
    "id": 130,
    "name": "gyarados",
    "germanName": "Garados",
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 81
    },
    "totalStats": 540,
    "height": 6.5,
    "weight": 235,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Grausam-Pokémon",
    "flavorText": "In alten Schriften wird von einem Garados berichtet, das in einem Wutanfall ein Dorf zerstörte."
  },
  {
    "id": 131,
    "name": "lapras",
    "germanName": "Lapras",
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 60
    },
    "totalStats": 535,
    "height": 2.5,
    "weight": 220,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Transport-Pokémon",
    "flavorText": "Sie sind gutmütig. Da sie selten kämpfen, wurden sie oft gefangen. Ihre Anzahl ist stark reduziert."
  },
  {
    "id": 132,
    "name": "ditto",
    "germanName": "Ditto",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "specialAttack": 48,
      "specialDefense": 48,
      "speed": 48
    },
    "totalStats": 288,
    "height": 0.3,
    "weight": 4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Transform-Pokémon",
    "flavorText": "Es kann seine Zellstruktur so verändern, dass es sich in alles verwandeln kann, was es sieht."
  },
  {
    "id": 133,
    "name": "eevee",
    "germanName": "Evoli",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55
    },
    "totalStats": 325,
    "height": 0.3,
    "weight": 6.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Evolutions-Pokémon",
    "flavorText": "Ein seltenes Pokémon, das sich seiner Umgebung anpasst, indem es sich in unterschiedliche Formen entwickelt."
  },
  {
    "id": 134,
    "name": "vaporeon",
    "germanName": "Aquana",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 65
    },
    "totalStats": 525,
    "height": 1,
    "weight": 29,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blubbblasen-Pokémon",
    "flavorText": "Es liebt schöne Ufer. Da seine Zellstruktur Wassermolekülen ähnlich ist, kann es mit Wasser verschmelzen."
  },
  {
    "id": 135,
    "name": "jolteon",
    "germanName": "Blitza",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 130
    },
    "totalStats": 525,
    "height": 0.8,
    "weight": 24.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blitz-Pokémon",
    "flavorText": "Lädt es sich mit Elektrizität auf, steht jedes einzelne seiner Körperhaare steil nach oben."
  },
  {
    "id": 136,
    "name": "flareon",
    "germanName": "Flamara",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 110,
      "speed": 65
    },
    "totalStats": 525,
    "height": 0.9,
    "weight": 25,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuer-Pokémon",
    "flavorText": "In seinem Körper befindet sich eine Flamme. Seine Körpertemperatur liegt vor dem Kampf bei 900 °C."
  },
  {
    "id": 137,
    "name": "porygon",
    "germanName": "Porygon",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40
    },
    "totalStats": 395,
    "height": 0.8,
    "weight": 36.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Virtuell-Pokémon",
    "flavorText": "Ein künstlich produziertes Pokémon, welches das Ergebnis von Forschungen ist. Es ist simpel aufgebaut."
  },
  {
    "id": 138,
    "name": "omanyte",
    "germanName": "Amonitas",
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "specialAttack": 90,
      "specialDefense": 55,
      "speed": 35
    },
    "totalStats": 355,
    "height": 0.4,
    "weight": 7.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Spiralen-Pokémon",
    "flavorText": "Ein prähistorisches Pokémon, das zur Urzeit im Wasser lebte. Es schwimmt, indem es seine zehn Tentakel bewegt."
  },
  {
    "id": 139,
    "name": "omastar",
    "germanName": "Amoroso",
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "specialAttack": 115,
      "specialDefense": 70,
      "speed": 55
    },
    "totalStats": 495,
    "height": 1,
    "weight": 35,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Spiralen-Pokémon",
    "flavorText": "Seine Tentakel sind hoch entwickelt und es setzt sie ähnlich Händen und Füßen ein. Sobald es Beute ergriffen hat, beißt es zu."
  },
  {
    "id": 140,
    "name": "kabuto",
    "germanName": "Kabuto",
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "specialAttack": 55,
      "specialDefense": 45,
      "speed": 55
    },
    "totalStats": 355,
    "height": 0.5,
    "weight": 11.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schaltier-Pokémon",
    "flavorText": "Man geht davon aus, dass dieses Pokémon vor 300 Millionen Jahren die Strände bevölkerte."
  },
  {
    "id": 141,
    "name": "kabutops",
    "germanName": "Kabutops",
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 80
    },
    "totalStats": 495,
    "height": 1.3,
    "weight": 40.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schaltier-Pokémon",
    "flavorText": "Im Wasser zieht es seine Beine an und bewegt seinen Panzer, um so schneller schwimmen zu können."
  },
  {
    "id": 142,
    "name": "aerodactyl",
    "germanName": "Aerodactyl",
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 130
    },
    "totalStats": 515,
    "height": 1.8,
    "weight": 59,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fossil-Pokémon",
    "flavorText": "In Bernstein eingeschlossenes genetisches Material eines Dinosauriers war der Ursprung dieses Pokémon. Beim Fliegen schreit es schrill."
  },
  {
    "id": 143,
    "name": "snorlax",
    "germanName": "Relaxo",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 110,
      "speed": 30
    },
    "totalStats": 540,
    "height": 2.1,
    "weight": 460,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tagträumer-Pokémon",
    "flavorText": "Es ist erst satt, wenn es über 400 kg Nahrung am Tag gefressen hat. Ist es mit dem Essen fertig, schläft es sofort ein."
  },
  {
    "id": 144,
    "name": "articuno",
    "germanName": "Arktos",
    "types": [
      "ice",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 125,
      "speed": 85
    },
    "totalStats": 580,
    "height": 1.7,
    "weight": 55.4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Eis-Pokémon",
    "flavorText": "Ein Legendäres Vogel-Pokémon. Es kann Blizzards verursachen, indem es Feuchtigkeit gefriert."
  },
  {
    "id": 145,
    "name": "zapdos",
    "germanName": "Zapdos",
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 100
    },
    "totalStats": 580,
    "height": 1.6,
    "weight": 52.6,
    "generation": 1,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Elektro-Pokémon",
    "flavorText": "Ein Legendäres Vogel-Pokémon, das im Sturzflug aus den Wolken bricht und Blitze schleudert."
  },
  {
    "id": 146,
    "name": "moltres",
    "germanName": "Lavados",
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 85,
      "speed": 90
    },
    "totalStats": 580,
    "height": 2,
    "weight": 60,
    "generation": 1,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Flammen-Pokémon",
    "flavorText": "Dieses Pokémon ist der Legendäre Feuervogel. Sein Flügelschlag entfacht ein helles Feuermeer."
  },
  {
    "id": 147,
    "name": "dratini",
    "germanName": "Dratini",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 50
    },
    "totalStats": 300,
    "height": 1.8,
    "weight": 3.3,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Drachen-Pokémon",
    "flavorText": "Man nennt es „Illusion-Pokémon“, denn nur wenige haben es gesehen. Nur seine Haut wurde oft gefunden."
  },
  {
    "id": 148,
    "name": "dragonair",
    "germanName": "Dragonir",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70
    },
    "totalStats": 420,
    "height": 4,
    "weight": 16.5,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Drachen-Pokémon",
    "flavorText": "Die kristallenen Bälle an seinem Schweif ermöglichen es ihm, das Wetter zu beeinflussen."
  },
  {
    "id": 149,
    "name": "dragonite",
    "germanName": "Dragoran",
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80
    },
    "totalStats": 600,
    "height": 2.2,
    "weight": 210,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Drachen-Pokémon",
    "flavorText": "Trotz seines wuchtigen und massiven Körpers kann es fliegen. Es umrundet den Erdball in nur 16 Stunden."
  },
  {
    "id": 150,
    "name": "mewtwo",
    "germanName": "Mewtu",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "specialAttack": 154,
      "specialDefense": 90,
      "speed": 130
    },
    "totalStats": 680,
    "height": 2,
    "weight": 122,
    "generation": 1,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Genmutanten-Pokémon",
    "flavorText": "Dieses Pokémon ist das Resultat eines jahrelangen und skrupellosen Experimentes."
  },
  {
    "id": 151,
    "name": "mew",
    "germanName": "Mew",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "totalStats": 600,
    "height": 0.4,
    "weight": 4,
    "generation": 1,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Neue Art-Pokémon",
    "flavorText": "Es beherrscht alle möglichen Attacken, daher sieht man in ihm den Vorfahren aller Pokémon."
  },
  {
    "id": 152,
    "name": "chikorita",
    "germanName": "Endivie",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "specialAttack": 49,
      "specialDefense": 65,
      "speed": 45
    },
    "totalStats": 318,
    "height": 0.9,
    "weight": 6.4,
    "generation": 2,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Laub",
    "flavorText": "Ein süßer Duft geht von dem Blatt auf seinem Kopf aus. Es ist ruhig und liegt gerne in der Sonne."
  },
  {
    "id": 153,
    "name": "bayleef",
    "germanName": "Lorblatt",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "specialAttack": 63,
      "specialDefense": 80,
      "speed": 60
    },
    "totalStats": 405,
    "height": 1.2,
    "weight": 15.8,
    "generation": 2,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Laub",
    "flavorText": "Ein würziges Aroma geht von seinen Blättern aus. Das Aroma soll gesundheitsfördernd sein."
  },
  {
    "id": 154,
    "name": "meganium",
    "germanName": "Meganie",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "specialAttack": 83,
      "specialDefense": 100,
      "speed": 80
    },
    "totalStats": 525,
    "height": 1.8,
    "weight": 100.5,
    "generation": 2,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kräuter",
    "flavorText": "Das Aroma aus seiner Blüte enthält Stoffe, die jegliche Aggressivität schwinden lassen."
  },
  {
    "id": 155,
    "name": "cyndaquil",
    "germanName": "Feurigel",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65
    },
    "totalStats": 309,
    "height": 0.5,
    "weight": 7.9,
    "generation": 2,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuermaus",
    "flavorText": "Es ist ruhig und kugelt sich stets zusammen. Zum Schutz entflammt es seinen Rücken."
  },
  {
    "id": 156,
    "name": "quilava",
    "germanName": "Igelavar",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 80
    },
    "totalStats": 405,
    "height": 0.9,
    "weight": 19,
    "generation": 2,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vulkan",
    "flavorText": "Vor dem Kampf dreht es dem Feind den Rücken zu, um ihm zu zeigen, wie Furcht erregend sein Feuer lodert."
  },
  {
    "id": 157,
    "name": "typhlosion",
    "germanName": "Tornupto",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100
    },
    "totalStats": 534,
    "height": 1.7,
    "weight": 79.5,
    "generation": 2,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vulkan",
    "flavorText": "Wenn sein Zorn den Zenit übersteigt, wird es so heiß, dass alles, was es berührt, in Flammen aufgeht."
  },
  {
    "id": 158,
    "name": "totodile",
    "germanName": "Karnimani",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "specialAttack": 44,
      "specialDefense": 48,
      "speed": 43
    },
    "totalStats": 314,
    "height": 0.6,
    "weight": 9.5,
    "generation": 2,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Großmaul",
    "flavorText": "Es ist klein, aber zäh und stark. Es zögert nicht, jeden anzugreifen, wenn dieser ihm zu nahe kommt."
  },
  {
    "id": 159,
    "name": "croconaw",
    "germanName": "Tyracroc",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "specialAttack": 59,
      "specialDefense": 63,
      "speed": 58
    },
    "totalStats": 405,
    "height": 1.1,
    "weight": 25,
    "generation": 2,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Großmaul",
    "flavorText": "Verliert es einen seiner Zähne, wächst ein neuer nach. Es hat immer 48 Zähne in seinem Kiefer."
  },
  {
    "id": 160,
    "name": "feraligatr",
    "germanName": "Impergator",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "specialAttack": 79,
      "specialDefense": 83,
      "speed": 78
    },
    "totalStats": 530,
    "height": 2.3,
    "weight": 88.8,
    "generation": 2,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Großmaul",
    "flavorText": "Eigentlich bewegt es sich langsam, doch seine Beute greift es blitzschnell an."
  },
  {
    "id": 161,
    "name": "sentret",
    "germanName": "Wiesor",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 20
    },
    "totalStats": 215,
    "height": 0.8,
    "weight": 6,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Späher",
    "flavorText": "Wenn es Wache hat, warnt es seine Artgenossen, indem es schreit und mit dem Schwanz auf den Boden schlägt."
  },
  {
    "id": 162,
    "name": "furret",
    "germanName": "Wiesenior",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 90
    },
    "totalStats": 415,
    "height": 1.8,
    "weight": 32.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Langleib",
    "flavorText": "Es rollt sich um seine Jungen, wenn diese schlafen sollen. Gegnern begegnet es mit Schnelligkeit."
  },
  {
    "id": 163,
    "name": "hoothoot",
    "germanName": "Hoothoot",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "specialAttack": 36,
      "specialDefense": 56,
      "speed": 50
    },
    "totalStats": 262,
    "height": 0.7,
    "weight": 21.2,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eulen-Pokémon",
    "flavorText": "Sein Zeitgefühl ist perfekt. Was auch immer passiert, es behält den Rhythmus, da sein Kopf wackelt."
  },
  {
    "id": 164,
    "name": "noctowl",
    "germanName": "Noctuh",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "specialAttack": 86,
      "specialDefense": 96,
      "speed": 70
    },
    "totalStats": 452,
    "height": 1.6,
    "weight": 40.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eulen-Pokémon",
    "flavorText": "Sein Sehvermögen ist hervorragend. Selbst bei schwachem Licht kann es jedes Detail erkennen."
  },
  {
    "id": 165,
    "name": "ledyba",
    "germanName": "Ledyba",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 55
    },
    "totalStats": 265,
    "height": 1,
    "weight": 10.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fünf-Punkt",
    "flavorText": "Wird es kalt, versammeln sich viele Ledyba von nah und fern, um sich gegenseitig Wärme zu schenken."
  },
  {
    "id": 166,
    "name": "ledian",
    "germanName": "Ledian",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 110,
      "speed": 85
    },
    "totalStats": 390,
    "height": 1.4,
    "weight": 35.6,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fünf-Punkt",
    "flavorText": "Leuchten die Sterne am Nachthimmel, schwirrt es umher und verstreut einen strahlenden, leuchtenden Puder."
  },
  {
    "id": 167,
    "name": "spinarak",
    "germanName": "Webarak",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    },
    "totalStats": 250,
    "height": 0.5,
    "weight": 8.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fadenwurf",
    "flavorText": "Es spinnt ein Netz aus feinem, aber reißfestem Faden. Dann wartet es auf Beute, die im Netz zappelt."
  },
  {
    "id": 168,
    "name": "ariados",
    "germanName": "Ariados",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 40
    },
    "totalStats": 400,
    "height": 1.1,
    "weight": 33.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Langbein",
    "flavorText": "Da es Fäden sowohl mit dem Hinterleib als auch mit dem Mund spinnt, verwechselt man die beiden leicht."
  },
  {
    "id": 169,
    "name": "crobat",
    "germanName": "Iksbat",
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 130
    },
    "totalStats": 535,
    "height": 1.8,
    "weight": 75,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fledermaus-Pokémon",
    "flavorText": "Mit seinen vier Flügeln fliegt es so geräuschlos durch die Nacht, dass man es nicht bemerkt."
  },
  {
    "id": 170,
    "name": "chinchou",
    "germanName": "Lampi",
    "types": [
      "water",
      "electric"
    ],
    "stats": {
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "specialAttack": 56,
      "specialDefense": 56,
      "speed": 67
    },
    "totalStats": 330,
    "height": 0.5,
    "weight": 12,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Angler-Pokémon",
    "flavorText": "Am Meeresgrund kann es sich nur durch ständiges Flackern seiner Lichter der Umgebung kundtun."
  },
  {
    "id": 171,
    "name": "lanturn",
    "germanName": "Lanturn",
    "types": [
      "water",
      "electric"
    ],
    "stats": {
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "specialAttack": 76,
      "specialDefense": 76,
      "speed": 67
    },
    "totalStats": 460,
    "height": 1.2,
    "weight": 22.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Leuchten-Pokémon",
    "flavorText": "Lanturns Licht kann aus großen Tiefen heraufscheinen. Man nennt es auch „Tiefseestern“."
  },
  {
    "id": 172,
    "name": "pichu",
    "germanName": "Pichu",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 60
    },
    "totalStats": 205,
    "height": 0.3,
    "weight": 2,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Babymaus-Pokémon",
    "flavorText": "Sie spielen miteinander, indem sie ihre Schweifspitzen aneinanderhalten und Funken fliegen lassen."
  },
  {
    "id": 173,
    "name": "cleffa",
    "germanName": "Pii",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 15
    },
    "totalStats": 218,
    "height": 0.3,
    "weight": 3,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sternform-Pokémon",
    "flavorText": "Aufgrund seiner ungewöhnlichen Sternform sagt man, es sei auf einem Meteor hierhergereist."
  },
  {
    "id": 174,
    "name": "igglybuff",
    "germanName": "Fluffeluff",
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "specialAttack": 40,
      "specialDefense": 20,
      "speed": 15
    },
    "totalStats": 210,
    "height": 0.3,
    "weight": 1,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ballon-Pokémon",
    "flavorText": "Anstatt mit seinen kurzen Beinen zu laufen, hüpft es mit seinem weichen und kuscheligen Körper."
  },
  {
    "id": 175,
    "name": "togepi",
    "germanName": "Togepi",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 20
    },
    "totalStats": 245,
    "height": 0.3,
    "weight": 1.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zackenball-Pokémon",
    "flavorText": "Seine Schale ist voll von Freude. Es teilt sein Glück, wenn man es freundlich und gut behandelt."
  },
  {
    "id": 176,
    "name": "togetic",
    "germanName": "Togetic",
    "types": [
      "fairy",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "specialAttack": 80,
      "specialDefense": 105,
      "speed": 40
    },
    "totalStats": 405,
    "height": 0.6,
    "weight": 3.2,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Freuden-Pokémon",
    "flavorText": "Es wird entmutigt, wenn es unter unfreundlichen Menschen ist. Es kann ohne Flügel niedrig schweben."
  },
  {
    "id": 177,
    "name": "natu",
    "germanName": "Natu",
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 45,
      "speed": 70
    },
    "totalStats": 320,
    "height": 0.2,
    "weight": 2,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kleinvogel-Pokémon",
    "flavorText": "Da seine Flügel nicht voll ausgebildet sind, bewegt es sich hüpfend. Es starrt immer etwas an."
  },
  {
    "id": 178,
    "name": "xatu",
    "germanName": "Xatu",
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 95
    },
    "totalStats": 470,
    "height": 1.5,
    "weight": 15,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Mystik-Pokémon",
    "flavorText": "Wenn es bei Sonnenaufgang anfängt zu meditieren, vergeht der ganze Tag, ehe es sich wieder bewegt."
  },
  {
    "id": 179,
    "name": "mareep",
    "germanName": "Voltilamm",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 35
    },
    "totalStats": 280,
    "height": 0.6,
    "weight": 7.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wolle",
    "flavorText": "Sein weiches Fell wird doppelt so dick, wenn sich Elektrizität aufbaut."
  },
  {
    "id": 180,
    "name": "flaaffy",
    "germanName": "Waaty",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "specialAttack": 80,
      "specialDefense": 60,
      "speed": 45
    },
    "totalStats": 365,
    "height": 0.8,
    "weight": 13.3,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wolle",
    "flavorText": "Sein flauschiges Fell speichert Elektrizität. Seine Gummihaut schützt es vor Stromstößen."
  },
  {
    "id": 181,
    "name": "ampharos",
    "germanName": "Ampharos",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "specialAttack": 115,
      "specialDefense": 90,
      "speed": 55
    },
    "totalStats": 510,
    "height": 1.4,
    "weight": 61.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Leuchte",
    "flavorText": "Seine Schweifspitze ist so hell, dass viele Verschollene es als Orientierungspunkt nutzen."
  },
  {
    "id": 182,
    "name": "bellossom",
    "germanName": "Blubella",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 95,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 50
    },
    "totalStats": 490,
    "height": 0.4,
    "weight": 5.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blumen-Pokémon",
    "flavorText": "Blubella kommen zusammen, um zu tanzen. Man sagt, dieser Tanz sei ein Ritual, um der Sonne zu huldigen."
  },
  {
    "id": 183,
    "name": "marill",
    "germanName": "Marill",
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "specialAttack": 20,
      "specialDefense": 50,
      "speed": 40
    },
    "totalStats": 250,
    "height": 0.4,
    "weight": 8.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Aquamaus-Pokémon",
    "flavorText": "Sein Fell ist von Natur aus wasserabweisend. Es bleibt trocken, auch wenn es im Wasser spielt."
  },
  {
    "id": 184,
    "name": "azumarill",
    "germanName": "Azumarill",
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 50
    },
    "totalStats": 420,
    "height": 0.8,
    "weight": 28.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Aquahasen-Pokémon",
    "flavorText": "Seine langen Ohren sind hervorragende Sensoren. Mit ihnen kann es Bewegungen im Fluss wahrnehmen."
  },
  {
    "id": 185,
    "name": "sudowoodo",
    "germanName": "Mogelbaum",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "specialAttack": 30,
      "specialDefense": 65,
      "speed": 30
    },
    "totalStats": 410,
    "height": 1.2,
    "weight": 38,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Imitations-Pokémon",
    "flavorText": "Obwohl es vorgibt, ein Baum zu sein, kommt seine Zusammensetzung einem Stein näher als einer Pflanze."
  },
  {
    "id": 186,
    "name": "politoed",
    "germanName": "Quaxo",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 70
    },
    "totalStats": 500,
    "height": 1.1,
    "weight": 33.9,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Frosch-Pokémon",
    "flavorText": "Sind drei oder mehr von ihnen zusammen, lassen sie einen schallenden Ruf erklingen."
  },
  {
    "id": 187,
    "name": "hoppip",
    "germanName": "Hoppspross",
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 55,
      "speed": 50
    },
    "totalStats": 250,
    "height": 0.4,
    "weight": 0.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Löwenzahn",
    "flavorText": "Sein Körper ist so leicht, dass es seine Füße im Boden verankert, damit es nicht davongeweht wird."
  },
  {
    "id": 188,
    "name": "skiploom",
    "germanName": "Hubelupf",
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 80
    },
    "totalStats": 340,
    "height": 0.6,
    "weight": 1,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Löwenzahn",
    "flavorText": "Temperaturschwankungen veranlassen es, die Blüte auf seinem Kopf immer zu öffnen oder zu schließen."
  },
  {
    "id": 189,
    "name": "jumpluff",
    "germanName": "Papungha",
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 110
    },
    "totalStats": 460,
    "height": 0.8,
    "weight": 3,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Löwenzahn",
    "flavorText": "Es lässt sich von den Winden um den Globus tragen und verteilt auf seinem Flug Baumwollsamen."
  },
  {
    "id": 190,
    "name": "aipom",
    "germanName": "Griffel",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 85
    },
    "totalStats": 360,
    "height": 0.8,
    "weight": 11.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Langschweif",
    "flavorText": "Es lebt in den Kronen großer Bäume. Es hüpft von Ast zu Ast und balanciert mit seinem Schweif."
  },
  {
    "id": 191,
    "name": "sunkern",
    "germanName": "Sonnkern",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 30
    },
    "totalStats": 180,
    "height": 0.3,
    "weight": 1.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Samen",
    "flavorText": "Manchmal fällt es plötzlich vom Himmel. Wird es von Habitak angegriffen, schüttelt es seine Blätter."
  },
  {
    "id": 192,
    "name": "sunflora",
    "germanName": "Sonnflora",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "specialAttack": 105,
      "specialDefense": 85,
      "speed": 30
    },
    "totalStats": 425,
    "height": 0.8,
    "weight": 8.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sonne",
    "flavorText": "Steht der Sommer bevor, werden die Blätter um das Gesicht dieses Pokémon aktiv und lebhaft."
  },
  {
    "id": 193,
    "name": "yanma",
    "germanName": "Yanma",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "specialAttack": 75,
      "specialDefense": 45,
      "speed": 95
    },
    "totalStats": 390,
    "height": 1.2,
    "weight": 38,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Libelle",
    "flavorText": "Mit seinen Augen hat es einen Blickwinkel von 360 Grad. Es sieht sogar Beute, die sich hinter ihm befindet."
  },
  {
    "id": 194,
    "name": "wooper",
    "germanName": "Felino",
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "totalStats": 210,
    "height": 0.4,
    "weight": 8.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fisch-Pokémon",
    "flavorText": "Dieses Pokémon lebt in Eiswasser. Wird es an Land kalt, verlässt es das Wasser und sucht nach Futter."
  },
  {
    "id": 195,
    "name": "quagsire",
    "germanName": "Morlord",
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 35
    },
    "totalStats": 430,
    "height": 1.4,
    "weight": 75,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fisch-Pokémon",
    "flavorText": "Ein träges Pokémon, das auf dem Grund des Flusses liegt und wartet, dass ihm Beute ins Maul schwimmt."
  },
  {
    "id": 196,
    "name": "espeon",
    "germanName": "Psiana",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 95,
      "speed": 110
    },
    "totalStats": 525,
    "height": 0.9,
    "weight": 26.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sonnen-Pokémon",
    "flavorText": "Die Spitze seines geteilten Schweifs bebt, wenn es die nächste Attacke seines Feindes voraussagt."
  },
  {
    "id": 197,
    "name": "umbreon",
    "germanName": "Nachtara",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "specialAttack": 60,
      "specialDefense": 130,
      "speed": 65
    },
    "totalStats": 525,
    "height": 1,
    "weight": 27,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Mondschein-Pokémon",
    "flavorText": "Mondlicht hat die genetische Struktur von Evoli verändert. Im Dunkeln wartet es auf Beute."
  },
  {
    "id": 198,
    "name": "murkrow",
    "germanName": "Kramurx",
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "specialAttack": 85,
      "specialDefense": 42,
      "speed": 91
    },
    "totalStats": 405,
    "height": 0.5,
    "weight": 2.1,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Finsternis",
    "flavorText": "Es versteckt jeden schimmernden Gegenstand. Kramurx und Mauzi rauben sich gegenseitig die Beute."
  },
  {
    "id": 199,
    "name": "slowking",
    "germanName": "Laschoking",
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 110,
      "speed": 30
    },
    "totalStats": 490,
    "height": 2,
    "weight": 79.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Monarchen-Pokémon",
    "flavorText": "Sein feines Gespür und Intellekt zeichnen es aus. Es bleibt in jeder Situation gelassen und besonnen."
  },
  {
    "id": 200,
    "name": "misdreavus",
    "germanName": "Traunfugil",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 85,
      "specialDefense": 85,
      "speed": 85
    },
    "totalStats": 435,
    "height": 0.7,
    "weight": 1,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kreischer",
    "flavorText": "Es nährt sich von der Angst anderer Wesen und nimmt diese in roten Kugeln auf. Schläft am Tage."
  },
  {
    "id": 201,
    "name": "unown",
    "germanName": "Icognito",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "specialAttack": 72,
      "specialDefense": 48,
      "speed": 48
    },
    "totalStats": 336,
    "height": 0.5,
    "weight": 5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Symbol",
    "flavorText": "Sein flacher, dünner Körper hängt immer an Wänden. Seine Form scheint eine Bedeutung zu haben."
  },
  {
    "id": 202,
    "name": "wobbuffet",
    "germanName": "Woingenau",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 190,
      "attack": 33,
      "defense": 58,
      "specialAttack": 33,
      "specialDefense": 58,
      "speed": 33
    },
    "totalStats": 405,
    "height": 1.3,
    "weight": 28.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gedulds-Pokémon",
    "flavorText": "Es hasst Licht und Schläge. Wird es angegriffen, pumpt es sich auf, um einen Gegenschlag vorzubereiten."
  },
  {
    "id": 203,
    "name": "girafarig",
    "germanName": "Girafarig",
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 65,
      "speed": 85
    },
    "totalStats": 455,
    "height": 1.5,
    "weight": 41.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Langhals",
    "flavorText": "Während es schläft, hält sein Schweif Wache. Dieser benötigt keinen Schlaf."
  },
  {
    "id": 204,
    "name": "pineco",
    "germanName": "Tannza",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 90,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 15
    },
    "totalStats": 290,
    "height": 0.6,
    "weight": 7.2,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Beutelwurm",
    "flavorText": "Es fügt seiner Schale schichtenweise Baumrinde hinzu. Die zusätzliche Belastung ist ihm gleich."
  },
  {
    "id": 205,
    "name": "forretress",
    "germanName": "Forstellka",
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 40
    },
    "totalStats": 465,
    "height": 1.2,
    "weight": 125.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Beutelwurm",
    "flavorText": "Dieses Pokémon ist von einer Stahlhülle umgeben. Seine stechenden Augen sind alles, was man von ihm sieht."
  },
  {
    "id": 206,
    "name": "dunsparce",
    "germanName": "Dummisel",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    },
    "totalStats": 415,
    "height": 1.5,
    "weight": 14,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schlangen-Pokémon",
    "flavorText": "Wird es entdeckt, flüchtet dieses Pokémon, indem es sich mit seinem Schweif in den Boden gräbt."
  },
  {
    "id": 207,
    "name": "gligar",
    "germanName": "Skorgla",
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 85
    },
    "totalStats": 430,
    "height": 1.1,
    "weight": 64.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flugskorpi",
    "flavorText": "Es hängt meist an Klippen. Erspäht es Beute, spreizt es seine Flügel und greift diese sofort an."
  },
  {
    "id": 208,
    "name": "steelix",
    "germanName": "Stahlos",
    "types": [
      "steel",
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 30
    },
    "totalStats": 510,
    "height": 9.2,
    "weight": 400,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stahlboa-Pokémon",
    "flavorText": "Hoher Druck und hohe Temperaturen haben seinen Körper härter als Stahl werden lassen."
  },
  {
    "id": 209,
    "name": "snubbull",
    "germanName": "Snubbull",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    },
    "totalStats": 300,
    "height": 0.6,
    "weight": 7.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fee",
    "flavorText": "Es ist von Natur aus verspielt. Es tollt mit vielen Frauen herum, da es ihnen zugeneigt ist."
  },
  {
    "id": 210,
    "name": "granbull",
    "germanName": "Granbull",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 45
    },
    "totalStats": 450,
    "height": 1.4,
    "weight": 48.7,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fee",
    "flavorText": "Es ist trotz seines Äußeren schüchtern. Wird es wütend, schnappt es mit seinen Fängen zu."
  },
  {
    "id": 211,
    "name": "qwilfish",
    "germanName": "Baldorfish",
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 85
    },
    "totalStats": 440,
    "height": 0.5,
    "weight": 3.9,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ballon-Pokémon",
    "flavorText": "Um seine Giftstacheln abzufeuern, muss es seinen Körper aufpumpen, indem es 10 l trinkt."
  },
  {
    "id": 212,
    "name": "scizor",
    "germanName": "Scherox",
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 65
    },
    "totalStats": 500,
    "height": 1.8,
    "weight": 118,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kneifer-Pokémon",
    "flavorText": "Dieses Pokémon kann mit seinen stählernen Scheren jeden harten Gegenstand mühelos zermalmen."
  },
  {
    "id": 213,
    "name": "shuckle",
    "germanName": "Pottrott",
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 230,
      "specialAttack": 10,
      "specialDefense": 230,
      "speed": 5
    },
    "totalStats": 505,
    "height": 0.6,
    "weight": 20.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schimmel-Pokémon",
    "flavorText": "In seinem topfförmigen Panzer gelagerte Beeren verwandeln sich im Nu zu einem dickflüssigen Saft."
  },
  {
    "id": 214,
    "name": "heracross",
    "germanName": "Skaraborn",
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "specialAttack": 40,
      "specialDefense": 95,
      "speed": 85
    },
    "totalStats": 500,
    "height": 1.5,
    "weight": 54,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Einzelhorn-Pokémon",
    "flavorText": "Dieses kräftige Pokémon rammt sein stolzes Horn unter den Rumpf des Gegners und wirft ihn um."
  },
  {
    "id": 215,
    "name": "sneasel",
    "germanName": "Sniebel",
    "types": [
      "dark",
      "ice"
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 75,
      "speed": 115
    },
    "totalStats": 430,
    "height": 0.9,
    "weight": 28,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stichklauen-Pokémon",
    "flavorText": "Es ernährt sich von Eiern, die es aus Nestern stiehlt. Beute greift es mit seinen scharfen Krallen an."
  },
  {
    "id": 216,
    "name": "teddiursa",
    "germanName": "Teddiursa",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    },
    "totalStats": 330,
    "height": 0.6,
    "weight": 8.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kleinbär",
    "flavorText": "Findet es Honig, leuchtet die Sichel auf seinem Kopf. Es leckt oft seine mit Honig bedeckten Pfoten."
  },
  {
    "id": 217,
    "name": "ursaring",
    "germanName": "Ursaring",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 75,
      "specialAttack": 75,
      "specialDefense": 75,
      "speed": 55
    },
    "totalStats": 500,
    "height": 1.8,
    "weight": 125.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schläfer",
    "flavorText": "Da es alle Gerüche perfekt unterscheiden kann, findet es sogar Nahrung, die tief im Erdreich ist."
  },
  {
    "id": 218,
    "name": "slugma",
    "germanName": "Schneckmag",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 40,
      "speed": 20
    },
    "totalStats": 250,
    "height": 0.7,
    "weight": 35,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lava",
    "flavorText": "Es hält sich ständig bei Vulkanen auf und ist stets kriechend auf der Suche nach warmen Aufenthaltsorten."
  },
  {
    "id": 219,
    "name": "magcargo",
    "germanName": "Magcargo",
    "types": [
      "fire",
      "rock"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 120,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 30
    },
    "totalStats": 430,
    "height": 0.8,
    "weight": 55,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lava",
    "flavorText": "Aus seinem porösen Schneckengehäuse sprudeln Feuerfontänen, die seinen Körper durchfluten."
  },
  {
    "id": 220,
    "name": "swinub",
    "germanName": "Quiekel",
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 50
    },
    "totalStats": 250,
    "height": 0.4,
    "weight": 6.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ferkel-Pokémon",
    "flavorText": "Auf Nahrungssuche schnüffelt es am Boden entlang. Es entdeckt dabei manchmal auch heiße Quellen."
  },
  {
    "id": 221,
    "name": "piloswine",
    "germanName": "Keifel",
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    },
    "totalStats": 450,
    "height": 1.1,
    "weight": 55.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwein-Pokémon",
    "flavorText": "Trotz kurzer Beine rutscht es auf eisigen Flächen nicht aus, da seine Hufe ihm genügend Halt bieten."
  },
  {
    "id": 222,
    "name": "corsola",
    "germanName": "Corasonn",
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 95,
      "specialAttack": 65,
      "specialDefense": 95,
      "speed": 35
    },
    "totalStats": 410,
    "height": 0.6,
    "weight": 5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Korallen-Pokémon",
    "flavorText": "Es häutet sich ständig und wächst. Seine Kopfspitze wurde als Schatz der Schönheit ausgezeichnet."
  },
  {
    "id": 223,
    "name": "remoraid",
    "germanName": "Remoraid",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 65,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 35,
      "speed": 65
    },
    "totalStats": 300,
    "height": 0.6,
    "weight": 12,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hochdruck-Pokémon",
    "flavorText": "Es ist äußerst präzise. Es kann mit seinem Wasserschuss Beute erlegen, die 100 m entfernt ist."
  },
  {
    "id": 224,
    "name": "octillery",
    "germanName": "Octillery",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 105,
      "defense": 75,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 45
    },
    "totalStats": 480,
    "height": 0.9,
    "weight": 28.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hochdruck-Pokémon",
    "flavorText": "Es verkriecht sich gerne in Löchern, von wo aus es Gegner mit Tinte beschießt. Es bevorzugt Felsspalten und Vasen."
  },
  {
    "id": 225,
    "name": "delibird",
    "germanName": "Botogel",
    "types": [
      "ice",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 45,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 75
    },
    "totalStats": 330,
    "height": 0.9,
    "weight": 16,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lieferanten-Pokémon",
    "flavorText": "Im eingerollten Schweif transportiert es Futter, das es mit denen teilt, die sich verlaufen haben."
  },
  {
    "id": 226,
    "name": "mantine",
    "germanName": "Mantax",
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 40,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 140,
      "speed": 70
    },
    "totalStats": 485,
    "height": 2.1,
    "weight": 220,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flugrochen-Pokémon",
    "flavorText": "Schwimmt es schnell genug, kann es über die Wellen springen und bis zu 100 m durch die Lüfte gleiten."
  },
  {
    "id": 227,
    "name": "skarmory",
    "germanName": "Panzaeron",
    "types": [
      "steel",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 70
    },
    "totalStats": 465,
    "height": 1.7,
    "weight": 50.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flugstahl-Pokémon",
    "flavorText": "Die dornigen Zweige seines Nests bewirken, dass die Flügel seiner Jungen fest und hart werden."
  },
  {
    "id": 228,
    "name": "houndour",
    "germanName": "Hunduster",
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 30,
      "specialAttack": 80,
      "specialDefense": 50,
      "speed": 65
    },
    "totalStats": 330,
    "height": 0.6,
    "weight": 10.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hades",
    "flavorText": "Im Morgengrauen schallt sein ominöses Geheule über das Gebiet, das es für sich beansprucht."
  },
  {
    "id": 229,
    "name": "houndoom",
    "germanName": "Hundemon",
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "specialAttack": 110,
      "specialDefense": 80,
      "speed": 95
    },
    "totalStats": 500,
    "height": 1.4,
    "weight": 35,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hades",
    "flavorText": "In alten Zeiten glaubte man, das Heulen dieses Pokémon sei der Ruf des Todes."
  },
  {
    "id": 230,
    "name": "kingdra",
    "germanName": "Seedraking",
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 85
    },
    "totalStats": 540,
    "height": 1.8,
    "weight": 152,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Drachen-Pokémon",
    "flavorText": "Man sagt, es hause in Unterwasserhöhlen. Es kann mächtige Strudel generieren, wenn es gähnt."
  },
  {
    "id": 231,
    "name": "phanpy",
    "germanName": "Phanpy",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 40
    },
    "totalStats": 330,
    "height": 0.5,
    "weight": 33.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Langrüssel",
    "flavorText": "Als Zeichen seiner Zuneigung stupst es dich mit dem Rüssel, was dich aber buchstäblich umwerfen könnte."
  },
  {
    "id": 232,
    "name": "donphan",
    "germanName": "Donphan",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 120,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    },
    "totalStats": 500,
    "height": 1.1,
    "weight": 120,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Panzer",
    "flavorText": "Aufgrund seiner scharfen Stoßzähne und seiner rauen Haut könnte es mit Tackle ein Haus niederreißen."
  },
  {
    "id": 233,
    "name": "porygon2",
    "germanName": "Porygon2",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 90,
      "specialAttack": 105,
      "specialDefense": 95,
      "speed": 60
    },
    "totalStats": 515,
    "height": 0.6,
    "weight": 32.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Virtuell-Pokémon",
    "flavorText": "Seine Fähigkeiten wurden verbessert. Es zeigt manchmal sogar Handlungen, die nicht einprogrammiert sind."
  },
  {
    "id": 234,
    "name": "stantler",
    "germanName": "Damhirplex",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 73,
      "attack": 95,
      "defense": 62,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 85
    },
    "totalStats": 465,
    "height": 1.4,
    "weight": 71.2,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vielender",
    "flavorText": "Starrt man auf sein Geweih, bekommt man das seltsame Gefühl, in dessen Mitte gezogen zu werden."
  },
  {
    "id": 235,
    "name": "smeargle",
    "germanName": "Farbeagle",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 20,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 45,
      "speed": 75
    },
    "totalStats": 250,
    "height": 1.2,
    "weight": 58,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maler",
    "flavorText": "Sein Revier markiert es mit seinem pinselartigen Schweif. Es kennt mehr als 5 000 Markierungen."
  },
  {
    "id": 236,
    "name": "tyrogue",
    "germanName": "Rabauz",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35
    },
    "totalStats": 210,
    "height": 0.7,
    "weight": 21,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Racker-Pokémon",
    "flavorText": "Es strotzt vor Energie. Um noch stärker zu werden, kämpft es weiter, auch wenn es verloren hat."
  },
  {
    "id": 237,
    "name": "hitmontop",
    "germanName": "Kapoera",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 95,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 70
    },
    "totalStats": 455,
    "height": 1.4,
    "weight": 48,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kopfstand-Pokémon",
    "flavorText": "Es kämpft, während es sich wie ein Kreisel dreht. Die Zentrifugalkraft verzehnfacht seine Kampfkraft."
  },
  {
    "id": 238,
    "name": "smoochum",
    "germanName": "Kussilla",
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 15,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 65
    },
    "totalStats": 305,
    "height": 0.4,
    "weight": 6,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kuss-Pokémon",
    "flavorText": "Die Lippen sind sein empfindlichster Körperteil. Neue Dinge untersucht es zuerst damit."
  },
  {
    "id": 239,
    "name": "elekid",
    "germanName": "Elekid",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 63,
      "defense": 37,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 95
    },
    "totalStats": 360,
    "height": 0.6,
    "weight": 23.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Elektro-Pokémon",
    "flavorText": "Es bewegt seine Arme und generiert damit Elektrizität. Diese kann es aber nicht speichern."
  },
  {
    "id": 240,
    "name": "magby",
    "germanName": "Magby",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 75,
      "defense": 37,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 83
    },
    "totalStats": 365,
    "height": 0.7,
    "weight": 21.4,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Glutherd-Pokémon",
    "flavorText": "Seine Körpertemperatur misst 600 °C. Beim Ein- und Ausatmen springen glühende Kohlenstücke aus seinem Mund."
  },
  {
    "id": 241,
    "name": "miltank",
    "germanName": "Miltank",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 80,
      "defense": 105,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 100
    },
    "totalStats": 490,
    "height": 1.2,
    "weight": 75.5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Milchkuh-Pokémon",
    "flavorText": "Wenn es gerade ein Junges hat, dann enthält seine Milch mehr Nährstoffe als gewöhnlich."
  },
  {
    "id": 242,
    "name": "blissey",
    "germanName": "Heiteira",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 255,
      "attack": 10,
      "defense": 10,
      "specialAttack": 75,
      "specialDefense": 135,
      "speed": 55
    },
    "totalStats": 540,
    "height": 1.5,
    "weight": 46.8,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Freuden-Pokémon",
    "flavorText": "Eier, die es legt, stecken voller Fröhlichkeit. Schon ein Bissen erzeugt ein breites Lächeln."
  },
  {
    "id": 243,
    "name": "raikou",
    "germanName": "Raikou",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 75,
      "specialAttack": 115,
      "specialDefense": 100,
      "speed": 115
    },
    "totalStats": 580,
    "height": 1.9,
    "weight": 178,
    "generation": 2,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Donner-Pokémon",
    "flavorText": "Die Regenwolken, die es trägt, ermöglichen es ihm, Gewitter zu erzeugen. Es strotzt vor Blitzen."
  },
  {
    "id": 244,
    "name": "entei",
    "germanName": "Entei",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 115,
      "attack": 115,
      "defense": 85,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 100
    },
    "totalStats": 580,
    "height": 2.1,
    "weight": 198,
    "generation": 2,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Vulkan-Pokémon",
    "flavorText": "Dieses Pokémon jagt über das Land. Man sagt, in jedem neuen Vulkan wird ein Entei geboren."
  },
  {
    "id": 245,
    "name": "suicune",
    "germanName": "Suicune",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 75,
      "defense": 115,
      "specialAttack": 90,
      "specialDefense": 115,
      "speed": 85
    },
    "totalStats": 580,
    "height": 2,
    "weight": 187,
    "generation": 2,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Polarlicht-Pokémon",
    "flavorText": "Es wandert beständig in der Welt herum, um verunreinigtes Wasser zu reinigen. Es zieht mit dem Nordwind."
  },
  {
    "id": 246,
    "name": "larvitar",
    "germanName": "Larvitar",
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 41
    },
    "totalStats": 300,
    "height": 0.6,
    "weight": 72,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Felshaut-Pokémon",
    "flavorText": "Es ernährt sich von Erde. Nachdem es einen Berg verspeist hat, schläft es ein, um zu wachsen."
  },
  {
    "id": 247,
    "name": "pupitar",
    "germanName": "Pupitar",
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 84,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 51
    },
    "totalStats": 410,
    "height": 1.2,
    "weight": 152,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hartschalen-Pokémon",
    "flavorText": "Sein Körper ist hart wie Fels. Es lässt mit Hochdruck Gas ab, um wie eine Rakete nach oben zu schießen."
  },
  {
    "id": 248,
    "name": "tyranitar",
    "germanName": "Despotar",
    "types": [
      "rock",
      "dark"
    ],
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "specialAttack": 95,
      "specialDefense": 100,
      "speed": 61
    },
    "totalStats": 600,
    "height": 2,
    "weight": 202,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Panzer-Pokémon",
    "flavorText": "Es besitzt so viel Kraft, dass es mit nur einer Hand die Erde beben lassen und Berge zerbröckeln kann."
  },
  {
    "id": 249,
    "name": "lugia",
    "germanName": "Lugia",
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 106,
      "attack": 90,
      "defense": 130,
      "specialAttack": 90,
      "specialDefense": 154,
      "speed": 110
    },
    "totalStats": 680,
    "height": 5.2,
    "weight": 216,
    "generation": 2,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Taucher-Pokémon",
    "flavorText": "Es schläft in einem Tiefseegraben. Schwingt es seine Flügel, entsteht ein Sturm, der 40 Tage dauert."
  },
  {
    "id": 250,
    "name": "ho-oh",
    "germanName": "Ho-Oh",
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 106,
      "attack": 130,
      "defense": 90,
      "specialAttack": 110,
      "specialDefense": 154,
      "speed": 90
    },
    "totalStats": 680,
    "height": 3.8,
    "weight": 199,
    "generation": 2,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Regenbogen-Pokémon",
    "flavorText": "Sein Körper soll in sieben Farben leuchten. Im Flug zieht es einen Regenbogen hinter sich her."
  },
  {
    "id": 251,
    "name": "celebi",
    "germanName": "Celebi",
    "types": [
      "psychic",
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "totalStats": 600,
    "height": 0.6,
    "weight": 5,
    "generation": 2,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Zeitreise-Pokémon",
    "flavorText": "Dieses Pokémon reist durch Zeit und Raum. Bäume und Wiesen wuchern, wenn es in der Nähe ist."
  },
  {
    "id": 252,
    "name": "treecko",
    "germanName": "Geckarbor",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 70
    },
    "totalStats": 310,
    "height": 0.5,
    "weight": 5,
    "generation": 3,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Waldgecko-Pokémon",
    "flavorText": "Es klettert blitzschnell Wände empor. Mit seinem Schwanz misst es die Luftfeuchtigkeit, um das Wetter am nächsten Tag vorherzusagen."
  },
  {
    "id": 253,
    "name": "grovyle",
    "germanName": "Reptain",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 95
    },
    "totalStats": 405,
    "height": 0.9,
    "weight": 21.6,
    "generation": 3,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Waldgecko-Pokémon",
    "flavorText": "Seine stark entwickelten Oberschenkelmuskeln verleihen ihm außergewöhnliche Agilität und Sprungkraft."
  },
  {
    "id": 254,
    "name": "sceptile",
    "germanName": "Gewaldro",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 105,
      "specialDefense": 85,
      "speed": 120
    },
    "totalStats": 530,
    "height": 1.7,
    "weight": 52.2,
    "generation": 3,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Dschungel-Pokémon",
    "flavorText": "Die Blätter an seinen Armen können dicke Bäume fällen. Im Dschungelkampf gibt es kein stärkeres Pokémon."
  },
  {
    "id": 255,
    "name": "torchic",
    "germanName": "Flemmli",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 45
    },
    "totalStats": 310,
    "height": 0.4,
    "weight": 2.5,
    "generation": 3,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Küken-Pokémon",
    "flavorText": "In seinem Bauch ist ein Flammensack, der stets brennt. Umarmt man es, fühlt es sich warm an."
  },
  {
    "id": 256,
    "name": "combusken",
    "germanName": "Jungglut",
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "specialAttack": 85,
      "specialDefense": 60,
      "speed": 55
    },
    "totalStats": 405,
    "height": 0.9,
    "weight": 19.5,
    "generation": 3,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kleinhahn-Pokémon",
    "flavorText": "Es kann zehn Tritte pro Sekunde austeilen. Es gibt schrille Schreie von sich, um Gegner einzuschüchtern."
  },
  {
    "id": 257,
    "name": "blaziken",
    "germanName": "Lohgock",
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 70,
      "speed": 80
    },
    "totalStats": 530,
    "height": 1.9,
    "weight": 52,
    "generation": 3,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Großbrand-Pokémon",
    "flavorText": "Mühelos springt es selbst über 30-stöckige Häuser. Sein Feuerschlag fügt dem Gegner Verbrennungen zu."
  },
  {
    "id": 258,
    "name": "mudkip",
    "germanName": "Hydropi",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    },
    "totalStats": 310,
    "height": 0.4,
    "weight": 7.6,
    "generation": 3,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lehmhüpfer-Pokémon",
    "flavorText": "Durch den propellerartigen Einsatz seiner großen Schwanzflosse schwimmt es schnell durchs Wasser. Trotz seiner kleinen Größe ist es stark."
  },
  {
    "id": 259,
    "name": "marshtomp",
    "germanName": "Moorabbel",
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    },
    "totalStats": 405,
    "height": 0.7,
    "weight": 28,
    "generation": 3,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lehmhüpfer-Pokémon",
    "flavorText": "Seine kräftigen Beine geben ihm sicheren Halt. Es gräbt sich in Dreck ein, wenn es schlafen will."
  },
  {
    "id": 260,
    "name": "swampert",
    "germanName": "Sumpex",
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "specialAttack": 85,
      "specialDefense": 90,
      "speed": 60
    },
    "totalStats": 535,
    "height": 1.5,
    "weight": 81.9,
    "generation": 3,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lehmhüpfer-Pokémon",
    "flavorText": "Schon ein Hieb seiner steinharten Arme schlägt selbst den stärksten Felsen zu Bruch."
  },
  {
    "id": 261,
    "name": "poochyena",
    "germanName": "Fiffyen",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 35
    },
    "totalStats": 220,
    "height": 0.5,
    "weight": 13.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Biss",
    "flavorText": "Ein beharrliches Pokémon, das seine Beute jagt, bis diese erschöpft ist."
  },
  {
    "id": 262,
    "name": "mightyena",
    "germanName": "Magnayen",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 70
    },
    "totalStats": 420,
    "height": 1,
    "weight": 37,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Biss",
    "flavorText": "Es jagt in Rudeln von ungefähr zehn Magnayen. Beim Einkreisen der Beute arbeiten sie perfekt zusammen."
  },
  {
    "id": 263,
    "name": "zigzagoon",
    "germanName": "Zigzachs",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "specialAttack": 30,
      "specialDefense": 41,
      "speed": 60
    },
    "totalStats": 240,
    "height": 0.4,
    "weight": 17.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kleindachs-Pokémon",
    "flavorText": "Es läuft im Zickzack. Es hat das Talent, Items im Gras, aber auch im Boden, zu finden."
  },
  {
    "id": 264,
    "name": "linoone",
    "germanName": "Geradaks",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 100
    },
    "totalStats": 420,
    "height": 0.5,
    "weight": 32.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sprinter-Pokémon",
    "flavorText": "Auf gerader Strecke erreicht es mühelos 100 km/h. Nur die Kurven bereiten ihm große Schwierigkeiten."
  },
  {
    "id": 265,
    "name": "wurmple",
    "germanName": "Waumpel",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 20
    },
    "totalStats": 195,
    "height": 0.3,
    "weight": 3.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wurm",
    "flavorText": "Es isst am liebsten Blätter. Wird es von einem Staralili angegriffen, verteidigt es sich mit Stacheln."
  },
  {
    "id": 266,
    "name": "silcoon",
    "germanName": "Schaloko",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "totalStats": 205,
    "height": 0.6,
    "weight": 10,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kokon",
    "flavorText": "Es bindet sich mit Seide an Äste und trinkt Regenwasser, während es starr auf seine Entwicklung wartet."
  },
  {
    "id": 267,
    "name": "beautifly",
    "germanName": "Papinella",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 65
    },
    "totalStats": 395,
    "height": 1,
    "weight": 28.4,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Falter",
    "flavorText": "Die bunten Flügel sind sein Markenzeichen. Mit seinem Rüssel saugt es süßen Honig aus Blumen."
  },
  {
    "id": 268,
    "name": "cascoon",
    "germanName": "Panekon",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "totalStats": 205,
    "height": 0.7,
    "weight": 11.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kokon",
    "flavorText": "Sein aus weicher Seide bestehender Körper erhärtet mit der Zeit. Sobald Risse sichtbar sind, steht die Entwicklung kurz bevor."
  },
  {
    "id": 269,
    "name": "dustox",
    "germanName": "Pudox",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 65
    },
    "totalStats": 385,
    "height": 1.2,
    "weight": 31.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftmotte",
    "flavorText": "Nachtaktives Pokémon, das vom Licht der Stadt angezogen wird und dort die Blätter der Bäume frisst."
  },
  {
    "id": 270,
    "name": "lotad",
    "germanName": "Loturzel",
    "types": [
      "water",
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 30
    },
    "totalStats": 220,
    "height": 0.5,
    "weight": 2.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wasserlinsen-Pokémon",
    "flavorText": "Es sieht aus wie eine Wasserpflanze. Es dient den Pokémon, die nicht schwimmen können, als Fähre."
  },
  {
    "id": 271,
    "name": "lombre",
    "germanName": "Lombrero",
    "types": [
      "water",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    },
    "totalStats": 340,
    "height": 1.2,
    "weight": 32.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Frohmut-Pokémon",
    "flavorText": "Es lebt am Ufer, wo die Sonne scheint. Tagsüber schläft es in einem Bett aus Schilf und wird nachts aktiv."
  },
  {
    "id": 272,
    "name": "ludicolo",
    "germanName": "Kappalores",
    "types": [
      "water",
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 70
    },
    "totalStats": 480,
    "height": 1.5,
    "weight": 55,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sorglos-Pokémon",
    "flavorText": "Hört es fröhliche Musik, füllen sich seine Muskeln mit Energie. Es muss dann einfach tanzen."
  },
  {
    "id": 273,
    "name": "seedot",
    "germanName": "Samurzel",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 50,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 30
    },
    "totalStats": 220,
    "height": 0.5,
    "weight": 4,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eichelnuss-Pokémon",
    "flavorText": "Mit dem Stiel auf seinem Kopf hängt es sich an Äste. Bei starkem Wind fällt es durchaus einmal herunter."
  },
  {
    "id": 274,
    "name": "nuzleaf",
    "germanName": "Blanas",
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 60
    },
    "totalStats": 340,
    "height": 1,
    "weight": 28,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hinterlist-Pokémon",
    "flavorText": "Der Ton seiner Grasflöte beunruhigt die, die ihn hören. Es lebt tief in den Wäldern."
  },
  {
    "id": 275,
    "name": "shiftry",
    "germanName": "Tengulist",
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 60,
      "speed": 80
    },
    "totalStats": 480,
    "height": 1.3,
    "weight": 59.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Verschlagen-Pokémon",
    "flavorText": "Dieses Pokémon wurde als Wächter des Waldes gefürchtet. Es kann die Gedanken des Gegners lesen und präventiv handeln."
  },
  {
    "id": 276,
    "name": "taillow",
    "germanName": "Schwalbini",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 85
    },
    "totalStats": 270,
    "height": 0.3,
    "weight": 2.3,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwälblein",
    "flavorText": "Es ist sehr mutig und stellt sich auch starken Gegnern. Es sucht ständig nach warmen Regionen."
  },
  {
    "id": 277,
    "name": "swellow",
    "germanName": "Schwalboss",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 50,
      "speed": 125
    },
    "totalStats": 455,
    "height": 0.7,
    "weight": 19.8,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwalbe",
    "flavorText": "Wenn seine beiden Schwanzfedern aufrecht stehen, zeigt das, dass es bei bester Gesundheit ist. Es fliegt elegant in den Himmel empor."
  },
  {
    "id": 278,
    "name": "wingull",
    "germanName": "Wingull",
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 30,
      "speed": 85
    },
    "totalStats": 270,
    "height": 0.6,
    "weight": 9.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seemöwen-Pokémon",
    "flavorText": "Es lässt sich vom Wind der Meere treiben, als wäre es ein Segelflugzeug."
  },
  {
    "id": 279,
    "name": "pelipper",
    "germanName": "Pelipper",
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 65
    },
    "totalStats": 440,
    "height": 1.2,
    "weight": 28,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wasservogel-Pokémon",
    "flavorText": "Es taucht seinen großen Schnabel ins Wasser und fängt so eine Menge Beute."
  },
  {
    "id": 280,
    "name": "ralts",
    "germanName": "Trasla",
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 28,
      "attack": 25,
      "defense": 25,
      "specialAttack": 45,
      "specialDefense": 35,
      "speed": 40
    },
    "totalStats": 198,
    "height": 0.4,
    "weight": 6.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gefühls-Pokémon",
    "flavorText": "Es erfasst warme Gefühle von Menschen und Pokémon mit seinen Hörnern und wärmt sich daran auf."
  },
  {
    "id": 281,
    "name": "kirlia",
    "germanName": "Kirlia",
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 38,
      "attack": 35,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 50
    },
    "totalStats": 278,
    "height": 0.8,
    "weight": 20.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Emotions-Pokémon",
    "flavorText": "Die fröhliche Stimmung seines Trainers verleiht ihm Energie für psychokinetische Kraft. Wenn es glücklich ist, tanzt und dreht es sich."
  },
  {
    "id": 282,
    "name": "gardevoir",
    "germanName": "Guardevoir",
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 115,
      "speed": 80
    },
    "totalStats": 518,
    "height": 1.6,
    "weight": 48.4,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Umarmungs-Pokémon",
    "flavorText": "Erzeugt ein kleines schwarzes Loch mithilfe all seiner Psycho-Kräfte, um seinen Trainer zu schützen."
  },
  {
    "id": 283,
    "name": "surskit",
    "germanName": "Gehweiher",
    "types": [
      "bug",
      "water"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 32,
      "specialAttack": 50,
      "specialDefense": 52,
      "speed": 65
    },
    "totalStats": 269,
    "height": 0.5,
    "weight": 1.7,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wassergeher",
    "flavorText": "Normalerweise leben sie in Teichen, aber nach einem Schauer am Abend kann man sie auch in Pfützen in den Städten finden."
  },
  {
    "id": 284,
    "name": "masquerain",
    "germanName": "Maskeregen",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 62,
      "specialAttack": 100,
      "specialDefense": 82,
      "speed": 80
    },
    "totalStats": 454,
    "height": 0.8,
    "weight": 3.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Auge",
    "flavorText": "Seine Antenne besitzt ein Augenmuster. Seine vier Flügel erlauben es, in alle Richtungen zu fliegen."
  },
  {
    "id": 285,
    "name": "shroomish",
    "germanName": "Knilz",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 35
    },
    "totalStats": 295,
    "height": 0.4,
    "weight": 4.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pilz",
    "flavorText": "Es bevorzugt feuchte Orte. Am Tag sitzt es regungslos im Schatten des Waldes. Von seinem Kopf sondert es einen giftigen Puder ab."
  },
  {
    "id": 286,
    "name": "breloom",
    "germanName": "Kapilz",
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 60,
      "attack": 130,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 70
    },
    "totalStats": 460,
    "height": 1.2,
    "weight": 39.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pilz",
    "flavorText": "Erst lässt es den Gegner seine giftigen Sporen einatmen, dann traktiert es ihn mit Boxschlägen."
  },
  {
    "id": 287,
    "name": "slakoth",
    "germanName": "Bummelz",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 30
    },
    "totalStats": 280,
    "height": 0.8,
    "weight": 24,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Faulpelz",
    "flavorText": "Allein bei Bummelz’ Anblick werden Gegner von Trägheit gepackt und schlummern alsbald ein."
  },
  {
    "id": 288,
    "name": "vigoroth",
    "germanName": "Muntier",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 90
    },
    "totalStats": 440,
    "height": 1.4,
    "weight": 46.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wildaffe",
    "flavorText": "Sein Puls ist konstant so hoch, dass sein Blut immer in Wallung ist und es keine Sekunde stillhalten kann."
  },
  {
    "id": 289,
    "name": "slaking",
    "germanName": "Letarking",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 150,
      "attack": 160,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 65,
      "speed": 100
    },
    "totalStats": 670,
    "height": 2,
    "weight": 130.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Müßig",
    "flavorText": "Das faulste Pokémon der Welt. Es bewegt sich nur, wenn alles Essbare in Reichweite verputzt ist."
  },
  {
    "id": 290,
    "name": "nincada",
    "germanName": "Nincada",
    "types": [
      "bug",
      "ground"
    ],
    "stats": {
      "hp": 31,
      "attack": 45,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 40
    },
    "totalStats": 266,
    "height": 0.5,
    "weight": 5.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vorbereiter-Pokémon",
    "flavorText": "Da es fast sein gesamtes Leben unter der Erde verbracht hat, ist es nahezu blind. Es setzt daher als Augenersatz seine Fühler ein."
  },
  {
    "id": 291,
    "name": "ninjask",
    "germanName": "Ninjask",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 61,
      "attack": 90,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 160
    },
    "totalStats": 456,
    "height": 0.8,
    "weight": 12,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ninja-Pokémon",
    "flavorText": "Sein Gesang erzeugt unausweichlich Kopfweh. Es bewegt sich so schnell, dass es beinah unsichtbar zu sein scheint."
  },
  {
    "id": 292,
    "name": "shedinja",
    "germanName": "Ninjatom",
    "types": [
      "bug",
      "ghost"
    ],
    "stats": {
      "hp": 1,
      "attack": 90,
      "defense": 45,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 40
    },
    "totalStats": 236,
    "height": 0.8,
    "weight": 1.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Häutungs-Pokémon",
    "flavorText": "Ein weggeworfener Käferpanzer, der zum Leben erwachte. Schaut man hinein, stiehlt es einem die Seele."
  },
  {
    "id": 293,
    "name": "whismur",
    "germanName": "Flurmel",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 64,
      "attack": 51,
      "defense": 23,
      "specialAttack": 51,
      "specialDefense": 23,
      "speed": 28
    },
    "totalStats": 240,
    "height": 0.6,
    "weight": 16.3,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flüster-Pokémon",
    "flavorText": "Normalerweise murmelt es, aber bei Gefahr beginnt es laut zu schreien. Es hört auf zu schreien, wenn seine Ohrmuscheln bedeckt werden."
  },
  {
    "id": 294,
    "name": "loudred",
    "germanName": "Krakeelo",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 84,
      "attack": 71,
      "defense": 43,
      "specialAttack": 71,
      "specialDefense": 43,
      "speed": 48
    },
    "totalStats": 360,
    "height": 1,
    "weight": 40.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lauthals-Pokémon",
    "flavorText": "Es atmet tief ein und nutzt seine Bauchmuskeln, um die Luft in einem gewaltigen Schrei auszustoßen."
  },
  {
    "id": 295,
    "name": "exploud",
    "germanName": "Krawumms",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 104,
      "attack": 91,
      "defense": 63,
      "specialAttack": 91,
      "specialDefense": 73,
      "speed": 68
    },
    "totalStats": 490,
    "height": 1.5,
    "weight": 84,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Krach-Pokémon",
    "flavorText": "Sein Heulen hört man in 10 km Entfernung. Es gibt alle Arten von Geräuschen von sich."
  },
  {
    "id": 296,
    "name": "makuhita",
    "germanName": "Makuhita",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 72,
      "attack": 60,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 25
    },
    "totalStats": 237,
    "height": 1,
    "weight": 86.4,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Courage",
    "flavorText": "Indem es wieder und wieder Bäume rammt, erhält es einen zähen Körper und einen stahlharten Willen."
  },
  {
    "id": 297,
    "name": "hariyama",
    "germanName": "Hariyama",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 144,
      "attack": 120,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 50
    },
    "totalStats": 474,
    "height": 2.3,
    "weight": 253.8,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Armwurf",
    "flavorText": "Es stampft auf den Boden, um Energie zu generieren. Ein einziger Armschlag reicht aus, um einen 10 t schweren LKW durch die Luft zu wirbeln."
  },
  {
    "id": 298,
    "name": "azurill",
    "germanName": "Azurill",
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 40,
      "specialAttack": 20,
      "specialDefense": 40,
      "speed": 20
    },
    "totalStats": 190,
    "height": 0.2,
    "weight": 2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gepunktet-Pokémon",
    "flavorText": "Dieses Pokémon lebt am Wasser. An Land bewegt es sich schnell, indem es auf seinem großen Schweif hüpft."
  },
  {
    "id": 299,
    "name": "nosepass",
    "germanName": "Nasgnet",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 135,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 30
    },
    "totalStats": 375,
    "height": 1,
    "weight": 97,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kompass",
    "flavorText": "Es schützt sich mit Objekten aus Eisen, die es mithilfe seiner immer nach Norden zeigenden magnetischen Nase anzieht."
  },
  {
    "id": 300,
    "name": "skitty",
    "germanName": "Eneco",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 50
    },
    "totalStats": 260,
    "height": 0.6,
    "weight": 11,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kätzchen",
    "flavorText": "Es muss Dinge, die sich bewegen, einfach jagen. Es rennt oft im Kreis und jagt seinen eigenen Schweif."
  },
  {
    "id": 301,
    "name": "delcatty",
    "germanName": "Enekoro",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 90
    },
    "totalStats": 400,
    "height": 1.1,
    "weight": 32.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eingebildet",
    "flavorText": "Hasst schmutzige Orte. Behagt ihm ein Platz, fängt es sofort an, sein glänzendes Fell zu pflegen."
  },
  {
    "id": 302,
    "name": "sableye",
    "germanName": "Zobiris",
    "types": [
      "dark",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 50
    },
    "totalStats": 380,
    "height": 0.5,
    "weight": 11,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Finsternis-Pokémon",
    "flavorText": "Es versteckt sich im Dunkeln von Höhlen. Seine Augen sind Edelsteine."
  },
  {
    "id": 303,
    "name": "mawile",
    "germanName": "Flunkifer",
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 50
    },
    "totalStats": 380,
    "height": 0.6,
    "weight": 11.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwindler-Pokémon",
    "flavorText": "Mit seinem friedlichen Gesicht bringt es Gegner zur Selbstgefälligkeit und beißt anschließend mit seinem riesigen Kiefer gnadenlos zu."
  },
  {
    "id": 304,
    "name": "aron",
    "germanName": "Stollunior",
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 100,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    },
    "totalStats": 330,
    "height": 0.4,
    "weight": 60,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisenpanzer-Pokémon",
    "flavorText": "Normalerweise lebt es in dunklen Bergen. Ist es hungrig, frisst es auch Eisenbahnschienen und Autos."
  },
  {
    "id": 305,
    "name": "lairon",
    "germanName": "Stollrak",
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 140,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    },
    "totalStats": 430,
    "height": 0.9,
    "weight": 120,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisenpanzer-Pokémon",
    "flavorText": "Ist verrückt nach Eisenerz. Bei Revierkämpfen stoßen Stollrak einander mit ihren Stahlkörpern."
  },
  {
    "id": 306,
    "name": "aggron",
    "germanName": "Stolloss",
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    },
    "totalStats": 530,
    "height": 2.1,
    "weight": 360,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisenpanzer-Pokémon",
    "flavorText": "Ihre Reviere erstrecken sich über ganze Gebirge. Stolloss, die mit Narben übersät sind, sollte man besser meiden."
  },
  {
    "id": 307,
    "name": "meditite",
    "germanName": "Meditie",
    "types": [
      "fighting",
      "psychic"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 60
    },
    "totalStats": 280,
    "height": 0.6,
    "weight": 11.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Meditation",
    "flavorText": "Trainiert tief in den Bergen. Erhöht es seine spirituelle Kraft durch Meditation, kann es schweben."
  },
  {
    "id": 308,
    "name": "medicham",
    "germanName": "Meditalis",
    "types": [
      "fighting",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 80
    },
    "totalStats": 410,
    "height": 1.3,
    "weight": 31.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Meditation",
    "flavorText": "Es weicht Attacken elegant tänzerisch aus, um anschließend eine verheerende Attacke aus derselben Bewegung heraus zu lancieren."
  },
  {
    "id": 309,
    "name": "electrike",
    "germanName": "Frizelbliz",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 40,
      "speed": 65
    },
    "totalStats": 295,
    "height": 0.6,
    "weight": 15.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gewitter-Pokémon",
    "flavorText": "Die Elektrizität, die es im Fell speichert, nutzt es, um seine Muskeln zu stimulieren."
  },
  {
    "id": 310,
    "name": "manectric",
    "germanName": "Voltenso",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 105
    },
    "totalStats": 475,
    "height": 1.5,
    "weight": 40.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Entladungs-Pokémon",
    "flavorText": "Es zeigt sich selten den Menschen. Man sagt, dass es sein Nest baut, wo der Blitz eingeschlagen hat."
  },
  {
    "id": 311,
    "name": "plusle",
    "germanName": "Plusle",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 95
    },
    "totalStats": 405,
    "height": 0.4,
    "weight": 4.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Jubel",
    "flavorText": "Es feuert Freunde mit Pompons an, die aus Funken bestehen. Es holt sich Energie aus Telegrafenmasten."
  },
  {
    "id": 312,
    "name": "minun",
    "germanName": "Minun",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 50,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 95
    },
    "totalStats": 405,
    "height": 0.4,
    "weight": 4.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Jubel",
    "flavorText": "Mit elektrischen Schlägen regen Plusle und Minun den Blutkreislauf an und lösen so Verspannungen."
  },
  {
    "id": 313,
    "name": "volbeat",
    "germanName": "Volbeat",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 73,
      "defense": 75,
      "specialAttack": 47,
      "specialDefense": 85,
      "speed": 85
    },
    "totalStats": 430,
    "height": 0.7,
    "weight": 17.7,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Glühwürmchen",
    "flavorText": "Es kommuniziert mit anderen, indem es sein Hinterteil zum Leuchten bringt. Es liebt Illumises Duft."
  },
  {
    "id": 314,
    "name": "illumise",
    "germanName": "Illumise",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 47,
      "defense": 75,
      "specialAttack": 73,
      "specialDefense": 85,
      "speed": 85
    },
    "totalStats": 430,
    "height": 0.6,
    "weight": 17.7,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Glühwürmchen",
    "flavorText": "Sein süßer Duft leitet Volbeat an, über 200 verschiedene Lichtmuster an den Nachthimmel zu malen."
  },
  {
    "id": 315,
    "name": "roselia",
    "germanName": "Roselia",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 45,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 65
    },
    "totalStats": 400,
    "height": 0.3,
    "weight": 2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Dorn-Pokémon",
    "flavorText": "Aus seinen Händen verströmt es jeweils ein anderes Gift. Je stärker Roselia duftet, desto gesünder ist es."
  },
  {
    "id": 316,
    "name": "gulpin",
    "germanName": "Schluppuck",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 43,
      "defense": 53,
      "specialAttack": 43,
      "specialDefense": 53,
      "speed": 40
    },
    "totalStats": 302,
    "height": 0.4,
    "weight": 10.3,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Magen",
    "flavorText": "Sein Körper besteht fast nur aus Magen. Herz und Hirn sind winzig. Sein Magensaft verdaut alles."
  },
  {
    "id": 317,
    "name": "swalot",
    "germanName": "Schlukwech",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "specialAttack": 73,
      "specialDefense": 83,
      "speed": 55
    },
    "totalStats": 467,
    "height": 1.7,
    "weight": 80,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftbeutel",
    "flavorText": "Es verschluckt, was in sein Maul passt, und verdaut es mit seiner alles zersetzenden Magensäure."
  },
  {
    "id": 318,
    "name": "carvanha",
    "germanName": "Kanivanha",
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 45,
      "attack": 90,
      "defense": 20,
      "specialAttack": 65,
      "specialDefense": 20,
      "speed": 65
    },
    "totalStats": 305,
    "height": 0.8,
    "weight": 20.8,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gnadenlos-Pokémon",
    "flavorText": "Schwärme von Kanivanha haben in Dschungelflüssen schon so manches Boot zerbissen und versenkt."
  },
  {
    "id": 319,
    "name": "sharpedo",
    "germanName": "Tohaido",
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "specialAttack": 95,
      "specialDefense": 40,
      "speed": 95
    },
    "totalStats": 460,
    "height": 1.8,
    "weight": 88.8,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Brutal-Pokémon",
    "flavorText": "Seine Zähne durchdringen sogar Eisen. Es schwimmt mit 120 km/h und wird „Tyrann des Meeres“ genannt."
  },
  {
    "id": 320,
    "name": "wailmer",
    "germanName": "Wailmer",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 130,
      "attack": 70,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 35,
      "speed": 60
    },
    "totalStats": 400,
    "height": 2,
    "weight": 130,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kugelwal-Pokémon",
    "flavorText": "Es hüpft gerne wie ein Ball herum. Je mehr Meerwasser es trinkt, desto höher kann es springen."
  },
  {
    "id": 321,
    "name": "wailord",
    "germanName": "Wailord",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 170,
      "attack": 90,
      "defense": 45,
      "specialAttack": 90,
      "specialDefense": 45,
      "speed": 60
    },
    "totalStats": 500,
    "height": 14.5,
    "weight": 398,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flutwal-Pokémon",
    "flavorText": "Springt es mit seinem gewaltigen Körper von einer Welle ab, kann es Gegner allein mit der Wucht des Aufpralls besiegen."
  },
  {
    "id": 322,
    "name": "numel",
    "germanName": "Camaub",
    "types": [
      "fire",
      "ground"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 35
    },
    "totalStats": 305,
    "height": 0.7,
    "weight": 24,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Taubheit",
    "flavorText": "In seinem Rücken speichert es sehr heißes Magma. Regnet es, kühlt das Magma ab und es wird langsamer."
  },
  {
    "id": 323,
    "name": "camerupt",
    "germanName": "Camerupt",
    "types": [
      "fire",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 40
    },
    "totalStats": 460,
    "height": 1.9,
    "weight": 220,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ausbruch",
    "flavorText": "Seine Vulkanhöcker brechen nur alle zehn Jahre aus oder wenn es richtig wütend ist."
  },
  {
    "id": 324,
    "name": "torkoal",
    "germanName": "Qurtel",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 20
    },
    "totalStats": 470,
    "height": 0.5,
    "weight": 80.4,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kohle-Pokémon",
    "flavorText": "Große Gruppen Qurtel siedeln sich in stillgelegten Bergwerken an und graben dort emsig nach Kohle."
  },
  {
    "id": 325,
    "name": "spoink",
    "germanName": "Spoink",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 25,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 60
    },
    "totalStats": 330,
    "height": 0.7,
    "weight": 30.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sprungfeder",
    "flavorText": "Es hüpft beständig umher, wobei es seinen Schweif als Feder verwendet. Nur so bleibt sein Herz aktiv."
  },
  {
    "id": 326,
    "name": "grumpig",
    "germanName": "Groink",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 110,
      "speed": 80
    },
    "totalStats": 470,
    "height": 0.9,
    "weight": 71.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Manipulator",
    "flavorText": "Mit schwarzen Perlen verstärkt es seine Psycho-Kräfte. Mit einem Tanz kontrolliert es seine Gegner."
  },
  {
    "id": 327,
    "name": "spinda",
    "germanName": "Pandir",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 60
    },
    "totalStats": 360,
    "height": 1.1,
    "weight": 5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Punkt-Panda",
    "flavorText": "Das Muster eines Pandir ist wie ein Fingerabdruck. Sein Taumeln senkt die gegnerische Zielsicherheit."
  },
  {
    "id": 328,
    "name": "trapinch",
    "germanName": "Knacklion",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 45,
      "attack": 100,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 10
    },
    "totalStats": 290,
    "height": 0.7,
    "weight": 15,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ameisenlöwen-Pokémon",
    "flavorText": "Es lebt in trockenen Wüstengebieten, wo es eine Trichterfalle baut und seelenruhig darauf wartet, dass Beute hinabrutscht."
  },
  {
    "id": 329,
    "name": "vibrava",
    "germanName": "Vibrava",
    "types": [
      "ground",
      "dragon"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 70
    },
    "totalStats": 340,
    "height": 1.1,
    "weight": 15.3,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vibrations-Pokémon",
    "flavorText": "Die Schallwellen, die es durch eine hohe Flügelschlagfrequenz erzeugt, verursachen heftige Kopfschmerzen."
  },
  {
    "id": 330,
    "name": "flygon",
    "germanName": "Libelldra",
    "types": [
      "ground",
      "dragon"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 100
    },
    "totalStats": 520,
    "height": 2,
    "weight": 82,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Mystik-Pokémon",
    "flavorText": "Es versteckt sich, indem es mit seinen Flügeln Wüstensand aufwirbelt. Rote Augenlider schützen es vor dem Sand."
  },
  {
    "id": 331,
    "name": "cacnea",
    "germanName": "Tuska",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 40,
      "speed": 35
    },
    "totalStats": 335,
    "height": 0.4,
    "weight": 51.3,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kaktus",
    "flavorText": "Es wächst an trockenen Orten mit wenig Niederschlag. Nur einmal im Jahr bildet es eine gelbe Blüte."
  },
  {
    "id": 332,
    "name": "cacturne",
    "germanName": "Noktuska",
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 60,
      "specialAttack": 115,
      "specialDefense": 60,
      "speed": 55
    },
    "totalStats": 475,
    "height": 1.3,
    "weight": 77.4,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vogelschock",
    "flavorText": "Ein nachtaktives Pokémon, das Beute sucht, die durch die Tageshitze der Wüste bereits erschöpft ist."
  },
  {
    "id": 333,
    "name": "swablu",
    "germanName": "Wablu",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 75,
      "speed": 50
    },
    "totalStats": 310,
    "height": 0.4,
    "weight": 1.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wollvogel-Pokémon",
    "flavorText": "Aus irgendeinem Grund setzt es sich gerne auf den Kopf von Menschen und tut so, als sei es ein Hut."
  },
  {
    "id": 334,
    "name": "altaria",
    "germanName": "Altaria",
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "specialAttack": 70,
      "specialDefense": 105,
      "speed": 80
    },
    "totalStats": 490,
    "height": 1.1,
    "weight": 20.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Summsel-Pokémon",
    "flavorText": "Es schwebt gemächlich durch den Himmel. Sein wunderschönes Summen gibt einem das Gefühl zu träumen."
  },
  {
    "id": 335,
    "name": "zangoose",
    "germanName": "Sengo",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 73,
      "attack": 115,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 90
    },
    "totalStats": 458,
    "height": 1.3,
    "weight": 40.3,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Frettkatz",
    "flavorText": "Seit Generationen ist es mit Vipitis verfeindet. Seine scharfen Klauen sind seine stärksten Waffen."
  },
  {
    "id": 336,
    "name": "seviper",
    "germanName": "Vipitis",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 73,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 65
    },
    "totalStats": 458,
    "height": 2.7,
    "weight": 52.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Reißzahn",
    "flavorText": "Die flinken Angriffe von Sengo kontert es mit seinem messerscharfen Schweif, aus dem Gift austritt."
  },
  {
    "id": 337,
    "name": "lunatone",
    "germanName": "Lunastein",
    "types": [
      "rock",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 70
    },
    "totalStats": 460,
    "height": 1,
    "weight": 168,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Meteoriten-Pokémon",
    "flavorText": "Da es in Vollmondnächten aktiv wird, sagt man ihm nach, mit den Mondphasen in Verbindung zu stehen."
  },
  {
    "id": 338,
    "name": "solrock",
    "germanName": "Sonnfel",
    "types": [
      "rock",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 70
    },
    "totalStats": 460,
    "height": 1.2,
    "weight": 154,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Meteoriten-Pokémon",
    "flavorText": "Da es seine Energie aus Sonnenlicht gewinnt, ist es tagsüber am stärksten. Wenn es sich dreht, leuchtet es."
  },
  {
    "id": 339,
    "name": "barboach",
    "germanName": "Schmerbe",
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 48,
      "defense": 43,
      "specialAttack": 46,
      "specialDefense": 41,
      "speed": 60
    },
    "totalStats": 288,
    "height": 0.4,
    "weight": 1.9,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Barthaar-Pokémon",
    "flavorText": "Es bedeckt seinen Körper mit einer schleimigen Substanz und kann sich so aus Umklammerungen winden."
  },
  {
    "id": 340,
    "name": "whiscash",
    "germanName": "Welsar",
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 110,
      "attack": 78,
      "defense": 73,
      "specialAttack": 76,
      "specialDefense": 71,
      "speed": 60
    },
    "totalStats": 468,
    "height": 0.9,
    "weight": 23.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Barthaar-Pokémon",
    "flavorText": "Sein Revier hat es im Sumpfland. Nähert sich ein Feind, zappelt es wie wild und erzeugt so Erdbeben."
  },
  {
    "id": 341,
    "name": "corphish",
    "germanName": "Krebscorps",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 43,
      "attack": 80,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 35,
      "speed": 35
    },
    "totalStats": 308,
    "height": 0.6,
    "weight": 11.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Grobian-Pokémon",
    "flavorText": "Egal, wie schmutzig der Fluss ist, in dem sie leben, sie passen sich daran an und vermehren sich. Sie sind hart im Nehmen."
  },
  {
    "id": 342,
    "name": "crawdaunt",
    "germanName": "Krebutack",
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 63,
      "attack": 120,
      "defense": 85,
      "specialAttack": 90,
      "specialDefense": 55,
      "speed": 55
    },
    "totalStats": 468,
    "height": 1.1,
    "weight": 32.8,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schlingel-Pokémon",
    "flavorText": "Dieser Grobian ergreift andere Pokémon mit seinen Scheren und wirft sie aus seinem Teich."
  },
  {
    "id": 343,
    "name": "baltoy",
    "germanName": "Puppance",
    "types": [
      "ground",
      "psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 55
    },
    "totalStats": 300,
    "height": 0.5,
    "weight": 21.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lehmpuppen-Pokémon",
    "flavorText": "Es bewegt sich, indem es auf seinem Fuß kreiselt. Vereinzelt sieht man Puppance, die kopfüber kreiseln."
  },
  {
    "id": 344,
    "name": "claydol",
    "germanName": "Lepumentas",
    "types": [
      "ground",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 120,
      "speed": 75
    },
    "totalStats": 500,
    "height": 1.5,
    "weight": 108,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lehmpuppen-Pokémon",
    "flavorText": "Eine antike Lehmstatue, die durch ein mysteriöses Licht zum Leben erwacht ist."
  },
  {
    "id": 345,
    "name": "lileep",
    "germanName": "Liliep",
    "types": [
      "rock",
      "grass"
    ],
    "stats": {
      "hp": 66,
      "attack": 41,
      "defense": 77,
      "specialAttack": 61,
      "specialDefense": 87,
      "speed": 23
    },
    "totalStats": 355,
    "height": 1,
    "weight": 23.8,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seeanemonen-Pokémon",
    "flavorText": "Vor 100 Millionen Jahren starb es aus. Es fängt seine Beute mit als Blüte getarnten Tentakeln."
  },
  {
    "id": 346,
    "name": "cradily",
    "germanName": "Wielie",
    "types": [
      "rock",
      "grass"
    ],
    "stats": {
      "hp": 86,
      "attack": 81,
      "defense": 97,
      "specialAttack": 81,
      "specialDefense": 107,
      "speed": 43
    },
    "totalStats": 495,
    "height": 1.5,
    "weight": 60.4,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rankfüßer-Pokémon",
    "flavorText": "Es lebt in seichten Stellen warmer Meere. Bei Ebbe sucht es im Sand nach Beute."
  },
  {
    "id": 347,
    "name": "anorith",
    "germanName": "Anorith",
    "types": [
      "rock",
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 95,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75
    },
    "totalStats": 355,
    "height": 0.7,
    "weight": 12.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Urgarnelen-Pokémon",
    "flavorText": "Es ist eine Art Vorfahre der Pokémon. Mit seinen erweiterten Scheren geht es zwischen den Felsen am Meeresgrund auf Beutefang."
  },
  {
    "id": 348,
    "name": "armaldo",
    "germanName": "Armaldo",
    "types": [
      "rock",
      "bug"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 45
    },
    "totalStats": 495,
    "height": 1.5,
    "weight": 68.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schild-Pokémon",
    "flavorText": "Es spießt die Beute mit seinen Scheren auf, ehe es sie verspeist. Den Körper umgibt ein robuster Panzer."
  },
  {
    "id": 349,
    "name": "feebas",
    "germanName": "Barschwa",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 20,
      "attack": 15,
      "defense": 20,
      "specialAttack": 10,
      "specialDefense": 55,
      "speed": 80
    },
    "totalStats": 200,
    "height": 0.6,
    "weight": 7.4,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fisch-Pokémon",
    "flavorText": "Es frisst einfach alles und kann daher auch in verschmutzter Umgebung leben. Niemand beachtet es."
  },
  {
    "id": 350,
    "name": "milotic",
    "germanName": "Milotic",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "specialAttack": 100,
      "specialDefense": 125,
      "speed": 81
    },
    "totalStats": 540,
    "height": 6.2,
    "weight": 162,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zartheits-Pokémon",
    "flavorText": "Milotic ist atemberaubend schön. Man sagt, dass diejenigen, die es sehen, vergessen zu kämpfen."
  },
  {
    "id": 351,
    "name": "castform",
    "germanName": "Formeo",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70
    },
    "totalStats": 420,
    "height": 0.3,
    "weight": 0.8,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wetter",
    "flavorText": "Formeo kann seine Gestalt ändern. Seine Zellen reagieren auf Temperaturschwankungen und Feuchtigkeit."
  },
  {
    "id": 352,
    "name": "kecleon",
    "germanName": "Kecleon",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 120,
      "speed": 40
    },
    "totalStats": 440,
    "height": 1,
    "weight": 22,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Farbenspiel",
    "flavorText": "Es kann nach Belieben seine Farbe ändern. Nur das gezackte Muster auf seinem Bauch bleibt gleich."
  },
  {
    "id": 353,
    "name": "shuppet",
    "germanName": "Shuppet",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 44,
      "attack": 75,
      "defense": 35,
      "specialAttack": 63,
      "specialDefense": 33,
      "speed": 45
    },
    "totalStats": 295,
    "height": 0.6,
    "weight": 2.3,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Puppe",
    "flavorText": "Man sagt, durch sein Horn ernähre es sich von Rachsucht und Neid. Erst nachts wird es richtig aktiv."
  },
  {
    "id": 354,
    "name": "banette",
    "germanName": "Banette",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "specialAttack": 83,
      "specialDefense": 63,
      "speed": 65
    },
    "totalStats": 455,
    "height": 1.1,
    "weight": 12.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Marionette",
    "flavorText": "Dieses Pokémon war eine Puppe, die weggeworfen wurde. Es sucht nun das Kind, das dies getan hat."
  },
  {
    "id": 355,
    "name": "duskull",
    "germanName": "Zwirrlicht",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 90,
      "speed": 25
    },
    "totalStats": 295,
    "height": 0.8,
    "weight": 15,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Requiem-Pokémon",
    "flavorText": "Verbissen verfolgt es seine Beute überallhin. Doch sobald die Sonne aufgeht, ist die Jagd vorbei."
  },
  {
    "id": 356,
    "name": "dusclops",
    "germanName": "Zwirrklop",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 40,
      "attack": 70,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 130,
      "speed": 25
    },
    "totalStats": 455,
    "height": 1.6,
    "weight": 30.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wink-Pokémon",
    "flavorText": "Blickt man direkt in den Feuerball in seinem Inneren, wird einem die Seele ausgesaugt."
  },
  {
    "id": 357,
    "name": "tropius",
    "germanName": "Tropius",
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 99,
      "attack": 68,
      "defense": 83,
      "specialAttack": 72,
      "specialDefense": 87,
      "speed": 51
    },
    "totalStats": 460,
    "height": 2,
    "weight": 100,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Obst",
    "flavorText": "Es nutzt seine großen Blätter als Flügel und verteilt die süßen Früchte, die an seinem Hals wachsen, an Kinder."
  },
  {
    "id": 358,
    "name": "chimecho",
    "germanName": "Palimpalim",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 65
    },
    "totalStats": 455,
    "height": 0.6,
    "weight": 1,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Windspiel",
    "flavorText": "Mit seinem Saugnapf hängt es sich an Äste oder unter Vordächer. Es kennt sieben verschiedene Schreie."
  },
  {
    "id": 359,
    "name": "absol",
    "germanName": "Absol",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 75
    },
    "totalStats": 465,
    "height": 1.2,
    "weight": 47,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Desaster-Pokémon",
    "flavorText": "Es spürt drohende Katastrophen und erscheint nur dann, wenn es andere vor der Gefahr warnen will."
  },
  {
    "id": 360,
    "name": "wynaut",
    "germanName": "Isso",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 23,
      "defense": 48,
      "specialAttack": 23,
      "specialDefense": 48,
      "speed": 23
    },
    "totalStats": 260,
    "height": 0.6,
    "weight": 14,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Strahlekind-Pokémon",
    "flavorText": "Es zieht normalerweise im Rudel umher. Zum Schlafen drängen sie sich ganz eng in einer Höhle zusammen."
  },
  {
    "id": 361,
    "name": "snorunt",
    "germanName": "Schneppke",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 50
    },
    "totalStats": 300,
    "height": 0.7,
    "weight": 16.8,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schneehut-Pokémon",
    "flavorText": "Gerüchten zufolge sammeln sich Schneppke unter riesigen Blättern und leben dort friedlich zusammen."
  },
  {
    "id": 362,
    "name": "glalie",
    "germanName": "Firnontor",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80
    },
    "totalStats": 480,
    "height": 1.5,
    "weight": 256.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Antlitz-Pokémon",
    "flavorText": "Um sich zu schützen, umgibt es seinen Körper mit einer Rüstung aus Eis."
  },
  {
    "id": 363,
    "name": "spheal",
    "germanName": "Seemops",
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 50,
      "speed": 25
    },
    "totalStats": 290,
    "height": 0.8,
    "weight": 39.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Applaus-Pokémon",
    "flavorText": "Es ist noch kein guter Schwimmer und bewegt sich rollend schneller fort. Ist es froh, klatscht es mit seinen Flossen."
  },
  {
    "id": 364,
    "name": "sealeo",
    "germanName": "Seejong",
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 45
    },
    "totalStats": 410,
    "height": 1.1,
    "weight": 87.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Spielball-Pokémon",
    "flavorText": "Die Nerven in seiner Nase sind sehr empfindlich. Sieht es etwas Neues, berührt es es zuerst mit der Nase."
  },
  {
    "id": 365,
    "name": "walrein",
    "germanName": "Walraisa",
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 90,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 65
    },
    "totalStats": 530,
    "height": 1.4,
    "weight": 150.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisbrecher-Pokémon",
    "flavorText": "Mit seinen Stoßzähnen bricht es durch Eis. Eine Speckschicht schützt es vor Kälte und Angriffen."
  },
  {
    "id": 366,
    "name": "clamperl",
    "germanName": "Perlu",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 64,
      "defense": 85,
      "specialAttack": 74,
      "specialDefense": 55,
      "speed": 32
    },
    "totalStats": 345,
    "height": 0.4,
    "weight": 52.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Muschel",
    "flavorText": "Es entwickelt sich nur einmal im Leben, wobei es eine wundersame Perle erzeugt, die Psycho-Kräfte verstärkt."
  },
  {
    "id": 367,
    "name": "huntail",
    "germanName": "Aalabyss",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 104,
      "defense": 105,
      "specialAttack": 94,
      "specialDefense": 75,
      "speed": 52
    },
    "totalStats": 485,
    "height": 1.7,
    "weight": 27,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tiefsee",
    "flavorText": "Es lebt tief im Meer, wo Sonnenlicht nie vordringt. Beim Beutefang leuchtet sein fischartiger Schwanz, um Beute anzulocken."
  },
  {
    "id": 368,
    "name": "gorebyss",
    "germanName": "Saganabyss",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 84,
      "defense": 105,
      "specialAttack": 114,
      "specialDefense": 75,
      "speed": 52
    },
    "totalStats": 485,
    "height": 1.8,
    "weight": 22.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Südsee",
    "flavorText": "Es lebt auf dem Grund des Meeres. Im Frühling wirkt die Farbe seines Körpers viel kräftiger."
  },
  {
    "id": 369,
    "name": "relicanth",
    "germanName": "Relicanth",
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 100,
      "attack": 90,
      "defense": 130,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55
    },
    "totalStats": 485,
    "height": 1,
    "weight": 23.4,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Bestand-Pokémon",
    "flavorText": "100 Millionen Jahre lang blieb es unverändert. Es wurde bei einer Tiefsee-Tauchexpedition entdeckt."
  },
  {
    "id": 370,
    "name": "luvdisc",
    "germanName": "Liebiskus",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 43,
      "attack": 30,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 97
    },
    "totalStats": 330,
    "height": 0.6,
    "weight": 8.7,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rendezvous",
    "flavorText": "Es lebt in warmen Meeren. Man sagt, dass Verliebte, die es sehen, mit ewiger Liebe gesegnet sind."
  },
  {
    "id": 371,
    "name": "bagon",
    "germanName": "Kindwurm",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 45,
      "attack": 75,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 50
    },
    "totalStats": 300,
    "height": 0.6,
    "weight": 42.1,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Steinhaupt-Pokémon",
    "flavorText": "Mit seinen robusten Nackenmuskeln und seinem stahlharten Kopf kann es sogar Felsen zertrümmern."
  },
  {
    "id": 372,
    "name": "shelgon",
    "germanName": "Draschel",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 50
    },
    "totalStats": 420,
    "height": 1.1,
    "weight": 110.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Durchsteher-Pokémon",
    "flavorText": "Die Zellen seines Panzers fingen an, sich zu verändern. Er fällt ab, sobald sich das Pokémon entwickelt."
  },
  {
    "id": 373,
    "name": "salamence",
    "germanName": "Brutalanda",
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "specialAttack": 110,
      "specialDefense": 80,
      "speed": 100
    },
    "totalStats": 600,
    "height": 1.5,
    "weight": 102.6,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Drachen-Pokémon",
    "flavorText": "Wenn es wütend ist, gerät es außer Kontrolle. Es zerstört alles mit seinen Klauen und mit Feuer."
  },
  {
    "id": 374,
    "name": "beldum",
    "germanName": "Tanhel",
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 80,
      "specialAttack": 35,
      "specialDefense": 60,
      "speed": 30
    },
    "totalStats": 300,
    "height": 0.6,
    "weight": 95.2,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisenkugel-Pokémon",
    "flavorText": "Es fliegt, indem es eine magnetische Kraft erzeugt, durch die es der natürlichen Anziehungskraft der Erde trotzt."
  },
  {
    "id": 375,
    "name": "metang",
    "germanName": "Metang",
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 50
    },
    "totalStats": 420,
    "height": 1.2,
    "weight": 202.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisenklauen-Pokémon",
    "flavorText": "Das Pokémon besteht aus zwei Tanhel. Es bekommt selbst dann keinen Kratzer, wenn ein Jet es streift."
  },
  {
    "id": 376,
    "name": "metagross",
    "germanName": "Metagross",
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 70
    },
    "totalStats": 600,
    "height": 1.6,
    "weight": 550,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisenfuß-Pokémon",
    "flavorText": "Dank seiner vier vernetzten Hirne kann es Gegner besser als ein Supercomputer mit komplizierten Formeln analysieren."
  },
  {
    "id": 377,
    "name": "regirock",
    "germanName": "Regirock",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 200,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 50
    },
    "totalStats": 580,
    "height": 1.7,
    "weight": 230,
    "generation": 3,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Steingipfel-Pokémon",
    "flavorText": "Sein Körper besteht aus Stein. Bricht im Kampf etwas heraus, wird es durch Stein wieder ersetzt."
  },
  {
    "id": 378,
    "name": "regice",
    "germanName": "Regice",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 200,
      "speed": 50
    },
    "totalStats": 580,
    "height": 1.8,
    "weight": 175,
    "generation": 3,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Eisberg-Pokémon",
    "flavorText": "Es heißt, es habe Jahrtausende lang im ewigen Eis geschlummert. Selbst Magma schmilzt es nicht."
  },
  {
    "id": 379,
    "name": "registeel",
    "germanName": "Registeel",
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 80,
      "attack": 75,
      "defense": 150,
      "specialAttack": 75,
      "specialDefense": 150,
      "speed": 50
    },
    "totalStats": 580,
    "height": 1.9,
    "weight": 205,
    "generation": 3,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Eisen-Pokémon",
    "flavorText": "Im Laufe der Jahrtausende, die es unterirdisch lebte, wurde sein Körper durch Druck und Wärme hart."
  },
  {
    "id": 380,
    "name": "latias",
    "germanName": "Latias",
    "types": [
      "dragon",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 90,
      "specialAttack": 110,
      "specialDefense": 130,
      "speed": 110
    },
    "totalStats": 600,
    "height": 1.4,
    "weight": 40,
    "generation": 3,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Äon-Pokémon",
    "flavorText": "Es kommuniziert durch Telepathie. Sein Daunenkleid bricht das Licht, sodass es unsichtbar wird."
  },
  {
    "id": 381,
    "name": "latios",
    "germanName": "Latios",
    "types": [
      "dragon",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 90,
      "defense": 80,
      "specialAttack": 130,
      "specialDefense": 110,
      "speed": 110
    },
    "totalStats": 600,
    "height": 2,
    "weight": 60,
    "generation": 3,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Äon-Pokémon",
    "flavorText": "Ein hochintelligentes Pokémon. Wenn es im Flug seine Flügel nach hinten legt, ist es schneller als ein Jet."
  },
  {
    "id": 382,
    "name": "kyogre",
    "germanName": "Kyogre",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 90,
      "specialAttack": 150,
      "specialDefense": 140,
      "speed": 90
    },
    "totalStats": 670,
    "height": 4.5,
    "weight": 352,
    "generation": 3,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Seegründler-Pokémon",
    "flavorText": "Der Legende nach erschuf sein Regen das Meer. Es und Groudon lieferten sich einen langen Kampf."
  },
  {
    "id": 383,
    "name": "groudon",
    "germanName": "Groudon",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 140,
      "specialAttack": 100,
      "specialDefense": 90,
      "speed": 90
    },
    "totalStats": 670,
    "height": 3.5,
    "weight": 950,
    "generation": 3,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Kontinent-Pokémon",
    "flavorText": "Sein Feuer erschuf einst das Land. Es und Kyogre lieferten sich einen langen Kampf."
  },
  {
    "id": 384,
    "name": "rayquaza",
    "germanName": "Rayquaza",
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 105,
      "attack": 150,
      "defense": 90,
      "specialAttack": 150,
      "specialDefense": 90,
      "speed": 95
    },
    "totalStats": 680,
    "height": 7,
    "weight": 206.5,
    "generation": 3,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Himmelhoch-Pokémon",
    "flavorText": "Es lebt in der Ozonschicht hoch über den Wolken und kann vom Boden aus nicht gesehen werden."
  },
  {
    "id": 385,
    "name": "jirachi",
    "germanName": "Jirachi",
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "totalStats": 600,
    "height": 0.3,
    "weight": 1.1,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Wünscher-Pokémon",
    "flavorText": "Wenn Jirachi erwacht, erfüllt es die Wünsche, die man auf die Zettel an seinem Kopf geschrieben hat."
  },
  {
    "id": 386,
    "name": "deoxys-normal",
    "germanName": "Deoxys",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 50,
      "attack": 150,
      "defense": 50,
      "specialAttack": 150,
      "specialDefense": 50,
      "speed": 150
    },
    "totalStats": 600,
    "height": 1.7,
    "weight": 60.8,
    "generation": 3,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "DNS",
    "flavorText": "Ein außerirdischer Virus kam mit einem Meteor auf die Erde. Seine DNA mutierte. So entstand Deoxys."
  },
  {
    "id": 387,
    "name": "turtwig",
    "germanName": "Chelast",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 55,
      "attack": 68,
      "defense": 64,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 31
    },
    "totalStats": 318,
    "height": 0.4,
    "weight": 10.2,
    "generation": 4,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Winziglaub",
    "flavorText": "Im Sonnenlicht betreibt sein ganzer Körper Photosynthese. Sein Panzer besteht aus hartem Lehm."
  },
  {
    "id": 388,
    "name": "grotle",
    "germanName": "Chelcarain",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 89,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 36
    },
    "totalStats": 405,
    "height": 1.1,
    "weight": 97,
    "generation": 4,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hain",
    "flavorText": "Es lebt in der Nähe von Wasser in Wäldern. Tagsüber verlässt es diese, um ein Sonnenbad zu nehmen."
  },
  {
    "id": 389,
    "name": "torterra",
    "germanName": "Chelterrar",
    "types": [
      "grass",
      "ground"
    ],
    "stats": {
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 56
    },
    "totalStats": 525,
    "height": 2.2,
    "weight": 310,
    "generation": 4,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kontinent",
    "flavorText": "In alten Zeiten malten die Menschen sich aus, die Erde ruhe auf dem Rücken eines riesigen Chelterrar."
  },
  {
    "id": 390,
    "name": "chimchar",
    "germanName": "Panflam",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 44,
      "attack": 58,
      "defense": 44,
      "specialAttack": 58,
      "specialDefense": 44,
      "speed": 61
    },
    "totalStats": 309,
    "height": 0.5,
    "weight": 6.2,
    "generation": 4,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schimpanse",
    "flavorText": "Das Feuer an seinem Hinterteil wird durch Gase im Bauch genährt. Selbst Regen löscht es nicht."
  },
  {
    "id": 391,
    "name": "monferno",
    "germanName": "Panpyro",
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 64,
      "attack": 78,
      "defense": 52,
      "specialAttack": 78,
      "specialDefense": 52,
      "speed": 81
    },
    "totalStats": 405,
    "height": 0.9,
    "weight": 22,
    "generation": 4,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Verspielt",
    "flavorText": "Es kontrolliert die Stärke des Feuers auf seinem Schweif geschickt, um Gegner auf Distanz zu halten."
  },
  {
    "id": 392,
    "name": "infernape",
    "germanName": "Panferno",
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "specialAttack": 104,
      "specialDefense": 71,
      "speed": 108
    },
    "totalStats": 534,
    "height": 1.2,
    "weight": 55,
    "generation": 4,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flamme",
    "flavorText": "Seine Krone aus Feuer ist Zeichen seines feurigen Wesens. Niemand ist schneller im Kampf als dieses Pokémon."
  },
  {
    "id": 393,
    "name": "piplup",
    "germanName": "Plinfa",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 53,
      "attack": 51,
      "defense": 53,
      "specialAttack": 61,
      "specialDefense": 56,
      "speed": 40
    },
    "totalStats": 314,
    "height": 0.4,
    "weight": 5.2,
    "generation": 4,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pinguin",
    "flavorText": "Einmischung kann es gar nicht leiden. Es ist bockig und fasst nur schwer Zutrauen zu seinem Trainer."
  },
  {
    "id": 394,
    "name": "prinplup",
    "germanName": "Pliprin",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 64,
      "attack": 66,
      "defense": 68,
      "specialAttack": 81,
      "specialDefense": 76,
      "speed": 50
    },
    "totalStats": 405,
    "height": 0.8,
    "weight": 23,
    "generation": 4,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pinguin",
    "flavorText": "Es lebt allein, entfernt von anderen. Jedes von ihnen denkt, es sei das Bedeutendste unter ihnen."
  },
  {
    "id": 395,
    "name": "empoleon",
    "germanName": "Impoleon",
    "types": [
      "water",
      "steel"
    ],
    "stats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "specialAttack": 111,
      "specialDefense": 101,
      "speed": 60
    },
    "totalStats": 530,
    "height": 1.7,
    "weight": 84.5,
    "generation": 4,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kaiser",
    "flavorText": "Es schwimmt so schnell wie ein Rennboot. Seine Flügel haben scharfe Seiten und können Packeis schneiden."
  },
  {
    "id": 396,
    "name": "starly",
    "germanName": "Staralili",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 60
    },
    "totalStats": 245,
    "height": 0.3,
    "weight": 2,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Star",
    "flavorText": "Ihr Schwarm ist stets groß. Obwohl es kleine Pokémon sind, schwingen sie ihre Flügel mit enormer Kraft."
  },
  {
    "id": 397,
    "name": "staravia",
    "germanName": "Staravia",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 80
    },
    "totalStats": 340,
    "height": 0.6,
    "weight": 15.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Star",
    "flavorText": "Es neigt dazu, sich in großen Gruppen zu bewegen. Zwischen ihnen kommt es zu heftigen Kämpfen."
  },
  {
    "id": 398,
    "name": "staraptor",
    "germanName": "Staraptor",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 100
    },
    "totalStats": 485,
    "height": 1.2,
    "weight": 24.9,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Raubtier",
    "flavorText": "Die Muskeln in seinen Flügeln und Beinen sind stark. Es kann im Flug sogar ein anderes Pokémon tragen."
  },
  {
    "id": 399,
    "name": "bidoof",
    "germanName": "Bidiza",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 59,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 40,
      "speed": 31
    },
    "totalStats": 250,
    "height": 0.5,
    "weight": 20,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Dickmaus",
    "flavorText": "Es hat Nerven wie Drahtseile, nichts kann es erschüttern. Es ist agiler und aktiver, als es scheint."
  },
  {
    "id": 400,
    "name": "bibarel",
    "germanName": "Bidifas",
    "types": [
      "normal",
      "water"
    ],
    "stats": {
      "hp": 79,
      "attack": 85,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 71
    },
    "totalStats": 410,
    "height": 1,
    "weight": 31.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Biber",
    "flavorText": "Emsig durchbeißt es mit seinen scharfen Vorderzähnen Wurzeln und Äste und baut daraus sein Nest."
  },
  {
    "id": 401,
    "name": "kricketot",
    "germanName": "Zirpurze",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 37,
      "attack": 25,
      "defense": 41,
      "specialAttack": 25,
      "specialDefense": 41,
      "speed": 25
    },
    "totalStats": 194,
    "height": 0.3,
    "weight": 2.2,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zirper",
    "flavorText": "Diese Pokémon unterhalten sich, indem sie ihre Antennen aneinanderschlagen. Der Ton ist ihr Kennzeichen."
  },
  {
    "id": 402,
    "name": "kricketune",
    "germanName": "Zirpeise",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 77,
      "attack": 85,
      "defense": 51,
      "specialAttack": 55,
      "specialDefense": 51,
      "speed": 65
    },
    "totalStats": 384,
    "height": 1,
    "weight": 25.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zirper",
    "flavorText": "Wenn es ruft, verschränkt es seine messerartigen Arme vor der Brust. Es komponiert aus dem Stegreif."
  },
  {
    "id": 403,
    "name": "shinx",
    "germanName": "Sheinux",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 34,
      "specialAttack": 40,
      "specialDefense": 34,
      "speed": 45
    },
    "totalStats": 263,
    "height": 0.5,
    "weight": 9.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flacker-Pokémon",
    "flavorText": "Es erzeugt Elektrizität durch das Strecken und Zusammenziehen seiner Muskeln. Bei Bedrohung glüht es."
  },
  {
    "id": 404,
    "name": "luxio",
    "germanName": "Luxio",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 49,
      "specialAttack": 60,
      "specialDefense": 49,
      "speed": 60
    },
    "totalStats": 363,
    "height": 0.9,
    "weight": 30.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Funken-Pokémon",
    "flavorText": "Seine Krallen geben Elektrizität ab, die stark genug ist, jemanden bewusstlos zu machen."
  },
  {
    "id": 405,
    "name": "luxray",
    "germanName": "Luxtra",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "specialAttack": 95,
      "specialDefense": 79,
      "speed": 70
    },
    "totalStats": 523,
    "height": 1.4,
    "weight": 42,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Glühaugen-Pokémon",
    "flavorText": "Leuchten seine Augen golden auf, kann es Beute, die sich versteckt, sehen. Es kann durch Wände sehen."
  },
  {
    "id": 406,
    "name": "budew",
    "germanName": "Knospi",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 55
    },
    "totalStats": 280,
    "height": 0.2,
    "weight": 1.2,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Knospen-Pokémon",
    "flavorText": "Bei Sonnenlicht öffnet es seine Knospe und gibt Pollen ab. Es lebt in der Nähe von sauberem Wasser."
  },
  {
    "id": 407,
    "name": "roserade",
    "germanName": "Roserade",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 105,
      "speed": 90
    },
    "totalStats": 515,
    "height": 0.9,
    "weight": 14.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blumenstrauß-Pokémon",
    "flavorText": "Es lockt seine Beute mit süßem Duft an, um sie danach mit seinen dornigen Ranken zu peitschen oder zu würgen."
  },
  {
    "id": 408,
    "name": "cranidos",
    "germanName": "Koknodon",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 67,
      "attack": 125,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 58
    },
    "totalStats": 350,
    "height": 0.9,
    "weight": 31.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kopfstoß",
    "flavorText": "Es wurde aus einem ballartigen, eisernen Fossil geschaffen. Es schlägt Beute mit einem Kopfstoß."
  },
  {
    "id": 409,
    "name": "rampardos",
    "germanName": "Rameidon",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 58
    },
    "totalStats": 495,
    "height": 1.6,
    "weight": 102.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kopfstoß",
    "flavorText": "Sein dicker Schädelknochen trotzt jedem Angriff. Gleichzeitig stoppt er jedoch sein Hirnwachstum."
  },
  {
    "id": 410,
    "name": "shieldon",
    "germanName": "Schilterus",
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 30,
      "attack": 42,
      "defense": 118,
      "specialAttack": 42,
      "specialDefense": 88,
      "speed": 30
    },
    "totalStats": 350,
    "height": 0.5,
    "weight": 57,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schutzschild",
    "flavorText": "Es reibt sein Gesicht an Baumstämmen, um es zu polieren. Es ist leicht, es von hinten anzugreifen."
  },
  {
    "id": 411,
    "name": "bastiodon",
    "germanName": "Bollterus",
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "specialAttack": 47,
      "specialDefense": 138,
      "speed": 30
    },
    "totalStats": 495,
    "height": 1.3,
    "weight": 149.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schutzschild",
    "flavorText": "Stellen sie sich Seite an Seite, kann kein Gegner hindurchbrechen. So schützen sie auch ihre Jungen."
  },
  {
    "id": 412,
    "name": "burmy",
    "germanName": "Burmy",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 40,
      "attack": 29,
      "defense": 45,
      "specialAttack": 29,
      "specialDefense": 45,
      "speed": 36
    },
    "totalStats": 224,
    "height": 0.2,
    "weight": 3.4,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Beutelwurm",
    "flavorText": "Um sich vor dem eisigen Winterwind zu schützen, legt es sich unter einen Umhang aus Ästen und Laub."
  },
  {
    "id": 413,
    "name": "wormadam-plant",
    "germanName": "Burmadame",
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 59,
      "defense": 85,
      "specialAttack": 79,
      "specialDefense": 105,
      "speed": 36
    },
    "totalStats": 424,
    "height": 0.5,
    "weight": 6.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Beutelwurm",
    "flavorText": "Die Umgebung, in der es sich entwickelt, bestimmt sein Aussehen. Es formt seinen Körper mithilfe der umliegenden Materialien."
  },
  {
    "id": 414,
    "name": "mothim",
    "germanName": "Moterpel",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 94,
      "defense": 50,
      "specialAttack": 94,
      "specialDefense": 50,
      "speed": 66
    },
    "totalStats": 424,
    "height": 0.9,
    "weight": 23.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Motte",
    "flavorText": "Es liebt Honig und stiehlt den Honig, der von Wadribie gesammelt wurde."
  },
  {
    "id": 415,
    "name": "combee",
    "germanName": "Wadribie",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 42,
      "specialAttack": 30,
      "specialDefense": 42,
      "speed": 70
    },
    "totalStats": 244,
    "height": 0.3,
    "weight": 5.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kleinbienen-Pokémon",
    "flavorText": "Dieses Trio ist von Geburt an zusammen. Fleißig bringt es Blütenhonig zu Honweisel."
  },
  {
    "id": 416,
    "name": "vespiquen",
    "germanName": "Honweisel",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 102,
      "specialAttack": 80,
      "specialDefense": 102,
      "speed": 40
    },
    "totalStats": 474,
    "height": 1.2,
    "weight": 38.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Bienenstock-Pokémon",
    "flavorText": "Es beherbergt Jung-Pokémon in seinem Rumpf, die es mithilfe von verschiedenen Pheromonen frei herumkommandieren kann."
  },
  {
    "id": 417,
    "name": "pachirisu",
    "germanName": "Pachirisu",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 95
    },
    "totalStats": 405,
    "height": 0.4,
    "weight": 3.9,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Elektrohörnchen",
    "flavorText": "Es bildet ein Fellknäuel, der vor statischer Energie knistert. Es speichert die Energie in Bäumen."
  },
  {
    "id": 418,
    "name": "buizel",
    "germanName": "Bamelin",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 35,
      "specialAttack": 60,
      "specialDefense": 30,
      "speed": 85
    },
    "totalStats": 330,
    "height": 0.7,
    "weight": 29.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Meereswiesel",
    "flavorText": "Es schwimmt, indem es seine beiden Schweife wie eine Schiffsschraube rotieren lässt."
  },
  {
    "id": 419,
    "name": "floatzel",
    "germanName": "Bojelin",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 50,
      "speed": 115
    },
    "totalStats": 495,
    "height": 1.1,
    "weight": 33.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Meereswiesel",
    "flavorText": "Es treibt mithilfe einer Art Rettungsring auf dem Wasser und hilft dem, der zu ertrinken droht."
  },
  {
    "id": 420,
    "name": "cherubi",
    "germanName": "Kikugi",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 35,
      "defense": 45,
      "specialAttack": 62,
      "specialDefense": 53,
      "speed": 35
    },
    "totalStats": 275,
    "height": 0.4,
    "weight": 3.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kirschen-Pokémon",
    "flavorText": "Sonnenlicht färbt es rot. Verliert das kleine Bällchen Nährstoffe, welkt es und die Entwicklung beginnt."
  },
  {
    "id": 421,
    "name": "cherrim",
    "germanName": "Kinoso",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 70,
      "specialAttack": 87,
      "specialDefense": 78,
      "speed": 85
    },
    "totalStats": 450,
    "height": 0.5,
    "weight": 9.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blüten-Pokémon",
    "flavorText": "Bei Sonnenschein entfaltet seine Knospe ihre Blütenblätter und es springt lebhaft umher."
  },
  {
    "id": 422,
    "name": "shellos",
    "germanName": "Schalellos",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 76,
      "attack": 48,
      "defense": 48,
      "specialAttack": 57,
      "specialDefense": 62,
      "speed": 34
    },
    "totalStats": 325,
    "height": 0.3,
    "weight": 6.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seeschnecken-Pokémon",
    "flavorText": "Nicht seinen Körper zusammendrücken, sonst sickert eine seltsame lilafarbene Flüssigkeit aus!"
  },
  {
    "id": 423,
    "name": "gastrodon",
    "germanName": "Gastrodon",
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 111,
      "attack": 83,
      "defense": 68,
      "specialAttack": 92,
      "specialDefense": 82,
      "speed": 39
    },
    "totalStats": 475,
    "height": 0.9,
    "weight": 29.9,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seeschnecken-Pokémon",
    "flavorText": "Wird es von einem natürlichen Feind angegriffen, flieht es, indem es ein lila Sekret über die Haut ausstößt."
  },
  {
    "id": 424,
    "name": "ambipom",
    "germanName": "Ambidiffel",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 66,
      "specialAttack": 60,
      "specialDefense": 66,
      "speed": 115
    },
    "totalStats": 482,
    "height": 1.2,
    "weight": 20.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Langschweif",
    "flavorText": "Sie leben in großen Kolonien und verbinden ihre Schweife in Freundschaft."
  },
  {
    "id": 425,
    "name": "drifloon",
    "germanName": "Driftlon",
    "types": [
      "ghost",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 50,
      "defense": 34,
      "specialAttack": 60,
      "specialDefense": 44,
      "speed": 70
    },
    "totalStats": 348,
    "height": 0.4,
    "weight": 1.2,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ballon-Pokémon",
    "flavorText": "Ein Pokémon, entstanden aus den Gefühlen von Menschen und Pokémon. Es mag feuchte Jahreszeiten."
  },
  {
    "id": 426,
    "name": "drifblim",
    "germanName": "Drifzepeli",
    "types": [
      "ghost",
      "flying"
    ],
    "stats": {
      "hp": 150,
      "attack": 80,
      "defense": 44,
      "specialAttack": 90,
      "specialDefense": 54,
      "speed": 80
    },
    "totalStats": 498,
    "height": 1.2,
    "weight": 15,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Luftschiff-Pokémon",
    "flavorText": "Es trägt Menschen und Pokémon im Flug. Da es sich aber nur vom Wind tragen lässt, weiß man nie, wo es hingeht."
  },
  {
    "id": 427,
    "name": "buneary",
    "germanName": "Haspiror",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 66,
      "defense": 44,
      "specialAttack": 44,
      "specialDefense": 56,
      "speed": 85
    },
    "totalStats": 350,
    "height": 0.4,
    "weight": 5.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hasen-Pokémon",
    "flavorText": "Seine Ohren sind immer aufgerollt. Mit ihnen kann es selbst große Felsbrocken zertrümmern."
  },
  {
    "id": 428,
    "name": "lopunny",
    "germanName": "Schlapor",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "specialAttack": 54,
      "specialDefense": 96,
      "speed": 105
    },
    "totalStats": 480,
    "height": 1.2,
    "weight": 33.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hasen-Pokémon",
    "flavorText": "Es ist extrem vorsichtig. Wenn es Gefahr wittert, macht es sich mit flinken Sprüngen aus dem Staub."
  },
  {
    "id": 429,
    "name": "mismagius",
    "germanName": "Traunmagil",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 105,
      "speed": 105
    },
    "totalStats": 495,
    "height": 0.9,
    "weight": 4.4,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Magisch",
    "flavorText": "Es spricht Beschwörungen. Viele lösen Schmerzen aus, manche aber bringen Glück."
  },
  {
    "id": 430,
    "name": "honchkrow",
    "germanName": "Kramshef",
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 52,
      "specialAttack": 105,
      "specialDefense": 52,
      "speed": 71
    },
    "totalStats": 505,
    "height": 0.9,
    "weight": 27.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Anführer",
    "flavorText": "Sein tiefer Ruf lockt andere Kramurx herbei. Man nennt es daher „Beschwörer der Nacht“."
  },
  {
    "id": 431,
    "name": "glameow",
    "germanName": "Charmian",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 49,
      "attack": 55,
      "defense": 42,
      "specialAttack": 42,
      "specialDefense": 37,
      "speed": 85
    },
    "totalStats": 310,
    "height": 0.5,
    "weight": 3.9,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fies",
    "flavorText": "Es schlägt mit Krallen zu oder schnurrt, je nachdem, ob es gerade wütend oder zutraulich ist."
  },
  {
    "id": 432,
    "name": "purugly",
    "germanName": "Shnurgarst",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 71,
      "attack": 82,
      "defense": 64,
      "specialAttack": 64,
      "specialDefense": 59,
      "speed": 112
    },
    "totalStats": 452,
    "height": 1,
    "weight": 43.8,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tigerkatze",
    "flavorText": "Behagt ihm die Behausung eines anderen Pokémon, bleibt Shnurgarst einfach da und nistet sich dort ein."
  },
  {
    "id": 433,
    "name": "chingling",
    "germanName": "Klingplim",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 45
    },
    "totalStats": 285,
    "height": 0.2,
    "weight": 0.6,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Glöckchen",
    "flavorText": "Jedes Mal, wenn es hüpft, entsteht ein klingender Laut. Seine hohen Schreie machen die Gegner taub."
  },
  {
    "id": 434,
    "name": "stunky",
    "germanName": "Skunkapuh",
    "types": [
      "poison",
      "dark"
    ],
    "stats": {
      "hp": 63,
      "attack": 63,
      "defense": 47,
      "specialAttack": 41,
      "specialDefense": 41,
      "speed": 74
    },
    "totalStats": 329,
    "height": 0.4,
    "weight": 19.2,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stinktier-Pokémon",
    "flavorText": "Versprüht eine Substanz aus seinem Hinterleib, die in einem großen Radius andere Pokémon fernhält."
  },
  {
    "id": 435,
    "name": "skuntank",
    "germanName": "Skuntank",
    "types": [
      "poison",
      "dark"
    ],
    "stats": {
      "hp": 103,
      "attack": 93,
      "defense": 67,
      "specialAttack": 71,
      "specialDefense": 61,
      "speed": 84
    },
    "totalStats": 479,
    "height": 1,
    "weight": 38,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stinktier-Pokémon",
    "flavorText": "Über seine Schweifspitze versprüht es eine übelriechende Substanz. Die Reichweite liegt bei über 50 m."
  },
  {
    "id": 436,
    "name": "bronzor",
    "germanName": "Bronzel",
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 57,
      "attack": 24,
      "defense": 86,
      "specialAttack": 24,
      "specialDefense": 86,
      "speed": 23
    },
    "totalStats": 300,
    "height": 0.5,
    "weight": 60.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Bronze-Pokémon",
    "flavorText": "Früher glaubten die Menschen, dem Muster auf seinem Rücken wohne eine mysteriöse Kraft inne."
  },
  {
    "id": 437,
    "name": "bronzong",
    "germanName": "Bronzong",
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 67,
      "attack": 89,
      "defense": 116,
      "specialAttack": 79,
      "specialDefense": 116,
      "speed": 33
    },
    "totalStats": 500,
    "height": 1.3,
    "weight": 187,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Bronzeglocken-Pokémon",
    "flavorText": "Man verehrt sie schon seit Urzeiten als Regenmacher. Manchmal findet man eines von ihnen im Boden vergraben."
  },
  {
    "id": 438,
    "name": "bonsly",
    "germanName": "Mobai",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 50,
      "attack": 80,
      "defense": 95,
      "specialAttack": 10,
      "specialDefense": 45,
      "speed": 10
    },
    "totalStats": 290,
    "height": 0.5,
    "weight": 15,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Bonsai-Pokémon",
    "flavorText": "Es bevorzugt trockene Gebiete. Es gibt über die Augen Wasser ab, um den Wasserhaushalt zu regulieren."
  },
  {
    "id": 439,
    "name": "mime-jr",
    "germanName": "Pantimimi",
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 20,
      "attack": 25,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 90,
      "speed": 60
    },
    "totalStats": 310,
    "height": 0.6,
    "weight": 13,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Mimen-Pokémon",
    "flavorText": "Es ahmt seinen Gegner nach. Während dieser noch verblüfft dreinsieht, macht es sich aus dem Staub."
  },
  {
    "id": 440,
    "name": "happiny",
    "germanName": "Wonneira",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 100,
      "attack": 5,
      "defense": 5,
      "specialAttack": 15,
      "specialDefense": 65,
      "speed": 30
    },
    "totalStats": 220,
    "height": 0.6,
    "weight": 24.4,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Spielhaus-Pokémon",
    "flavorText": "In seinem Beutel trägt es einen runden, eiförmigen Stein, den es Freunden gibt."
  },
  {
    "id": 441,
    "name": "chatot",
    "germanName": "Plaudagei",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 76,
      "attack": 65,
      "defense": 45,
      "specialAttack": 92,
      "specialDefense": 42,
      "speed": 91
    },
    "totalStats": 411,
    "height": 0.5,
    "weight": 1.9,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Musiknote",
    "flavorText": "Es versucht Attacken zu entgehen, indem es den Ruf des Gegners nachahmt und einen Artgenossen mimt."
  },
  {
    "id": 442,
    "name": "spiritomb",
    "germanName": "Kryppuk",
    "types": [
      "ghost",
      "dark"
    ],
    "stats": {
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "specialAttack": 92,
      "specialDefense": 108,
      "speed": 35
    },
    "totalStats": 485,
    "height": 1,
    "weight": 108,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Verboten-Pokémon",
    "flavorText": "Ein Pokémon, das aus 108 Geistern besteht. Es ist an einen Spalt in einem mysteriösen Stein gebunden."
  },
  {
    "id": 443,
    "name": "gible",
    "germanName": "Kaumalat",
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 58,
      "attack": 70,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 42
    },
    "totalStats": 300,
    "height": 0.7,
    "weight": 20.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Landhai-Pokémon",
    "flavorText": "Es lebt in Höhlen, die Erdwärme ausgesetzt sind. Es springt heraus und beißt, wenn Feinde sich nähern."
  },
  {
    "id": 444,
    "name": "gabite",
    "germanName": "Knarksel",
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 68,
      "attack": 90,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 55,
      "speed": 82
    },
    "totalStats": 410,
    "height": 1.4,
    "weight": 56,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Höhlen-Pokémon",
    "flavorText": "Es liebt funkelnde Dinge und sucht nach Schätzen in Höhlen, die es dann in seinem Nest hortet."
  },
  {
    "id": 445,
    "name": "garchomp",
    "germanName": "Knakrack",
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "specialAttack": 80,
      "specialDefense": 85,
      "speed": 102
    },
    "totalStats": 600,
    "height": 1.9,
    "weight": 95,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rasanz-Pokémon",
    "flavorText": "Spannt es seinen Körper und seine Flügel, sieht es aus wie ein Jet. Es fliegt mit Schallgeschwindigkeit."
  },
  {
    "id": 446,
    "name": "munchlax",
    "germanName": "Mampfaxo",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 135,
      "attack": 85,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 85,
      "speed": 5
    },
    "totalStats": 390,
    "height": 0.6,
    "weight": 105,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Nimmersatt-Pokémon",
    "flavorText": "Unter seinem langen Fell versteckt es Nahrung. Aber es vergisst, dass es sie dort versteckt hat."
  },
  {
    "id": 447,
    "name": "riolu",
    "germanName": "Riolu",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 40,
      "attack": 70,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 40,
      "speed": 60
    },
    "totalStats": 285,
    "height": 0.7,
    "weight": 20.2,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wellenspiel-Pokémon",
    "flavorText": "Es kommuniziert mit seinen Artgenossen über Wellen, die je nach Gefühlslage eine andere Form annehmen."
  },
  {
    "id": 448,
    "name": "lucario",
    "germanName": "Lucario",
    "types": [
      "fighting",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "specialAttack": 115,
      "specialDefense": 70,
      "speed": 90
    },
    "totalStats": 525,
    "height": 1.2,
    "weight": 54,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Aura-Pokémon",
    "flavorText": "Es nimmt die Aura seines Gegners wahr. So kann es dessen Gedanken und Bewegungen erkennen."
  },
  {
    "id": 449,
    "name": "hippopotas",
    "germanName": "Hippopotas",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 68,
      "attack": 72,
      "defense": 78,
      "specialAttack": 38,
      "specialDefense": 42,
      "speed": 32
    },
    "totalStats": 330,
    "height": 0.8,
    "weight": 49.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flusspferd-Pokémon",
    "flavorText": "Es lebt in ausgetrockneten Gebieten. Statt zu schwitzen, sondert sein Körper Sand ab."
  },
  {
    "id": 450,
    "name": "hippowdon",
    "germanName": "Hippoterus",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "specialAttack": 68,
      "specialDefense": 72,
      "speed": 47
    },
    "totalStats": 525,
    "height": 2,
    "weight": 300,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwergewichts-Pokémon",
    "flavorText": "Das weit aufgerissene Maul demonstriert seine Stärke. Es attackiert mit gebündeltem Sand."
  },
  {
    "id": 451,
    "name": "skorupi",
    "germanName": "Pionskora",
    "types": [
      "poison",
      "bug"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 65
    },
    "totalStats": 330,
    "height": 0.8,
    "weight": 12,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Skorpion-Pokémon",
    "flavorText": "Es greift seine Beute mit den Krallen an seinem Schweif und vergiftet sie. Dann wartet es ab..."
  },
  {
    "id": 452,
    "name": "drapion",
    "germanName": "Piondragi",
    "types": [
      "poison",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 110,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 95
    },
    "totalStats": 500,
    "height": 1.3,
    "weight": 61.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ogerskorpion-Pokémon",
    "flavorText": "Es bringt seine Gegner mit starkem Gift zur Strecke, obwohl es weiß, dass es stark genug ist, um sie zu zerfetzen."
  },
  {
    "id": 453,
    "name": "croagunk",
    "germanName": "Glibunkel",
    "types": [
      "poison",
      "fighting"
    ],
    "stats": {
      "hp": 48,
      "attack": 61,
      "defense": 40,
      "specialAttack": 61,
      "specialDefense": 40,
      "speed": 50
    },
    "totalStats": 300,
    "height": 0.7,
    "weight": 23,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftmund-Pokémon",
    "flavorText": "In seinen Backen sammelt sich Gift. Es versucht, Beute zu überraschen und mit Giftfingern zu schnappen."
  },
  {
    "id": 454,
    "name": "toxicroak",
    "germanName": "Toxiquak",
    "types": [
      "poison",
      "fighting"
    ],
    "stats": {
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "specialAttack": 86,
      "specialDefense": 65,
      "speed": 85
    },
    "totalStats": 490,
    "height": 1.3,
    "weight": 44.4,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftmund-Pokémon",
    "flavorText": "Verfügt über einen Giftsack an seiner Kehle. Quakt es, schäumt das Gift und wird so noch stärker."
  },
  {
    "id": 455,
    "name": "carnivine",
    "germanName": "Venuflibis",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 74,
      "attack": 100,
      "defense": 72,
      "specialAttack": 90,
      "specialDefense": 72,
      "speed": 46
    },
    "totalStats": 454,
    "height": 1.4,
    "weight": 27,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Käfertod",
    "flavorText": "Sein süßlich riechender Speichel zieht Beute an, die es frisst. Es braucht einen Tag, sie zu fressen."
  },
  {
    "id": 456,
    "name": "finneon",
    "germanName": "Finneon",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 49,
      "attack": 49,
      "defense": 56,
      "specialAttack": 49,
      "specialDefense": 61,
      "speed": 66
    },
    "totalStats": 330,
    "height": 0.4,
    "weight": 7,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flügelfisch",
    "flavorText": "Die Linie an seiner Seite kann Sonnenlicht speichern. Nachts leuchtet es sehr intensiv."
  },
  {
    "id": 457,
    "name": "lumineon",
    "germanName": "Lumineon",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 69,
      "attack": 69,
      "defense": 76,
      "specialAttack": 69,
      "specialDefense": 86,
      "speed": 91
    },
    "totalStats": 460,
    "height": 1.2,
    "weight": 24,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Neon",
    "flavorText": "Es lebt tief auf dem Meeresboden. Das blinkende Muster auf seinen vier Rückenflossen zieht Beute an."
  },
  {
    "id": 458,
    "name": "mantyke",
    "germanName": "Mantirps",
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 20,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 120,
      "speed": 50
    },
    "totalStats": 345,
    "height": 1,
    "weight": 65,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flugrochen-Pokémon",
    "flavorText": "Ihre Rücken sind je nach Region unterschiedlich gemustert. Oft mischen sie sich unter Remoraid-Schwärme."
  },
  {
    "id": 459,
    "name": "snover",
    "germanName": "Shnebedeck",
    "types": [
      "grass",
      "ice"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 50,
      "specialAttack": 62,
      "specialDefense": 60,
      "speed": 40
    },
    "totalStats": 334,
    "height": 1,
    "weight": 50.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Frostbaum-Pokémon",
    "flavorText": "Im Winter steigt es bis zum Fuß der Berge herab. Im Frühjahr kehrt es auf den Gipfel zurück."
  },
  {
    "id": 460,
    "name": "abomasnow",
    "germanName": "Rexblisar",
    "types": [
      "grass",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "specialAttack": 92,
      "specialDefense": 85,
      "speed": 60
    },
    "totalStats": 494,
    "height": 2.2,
    "weight": 135.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Frostbaum-Pokémon",
    "flavorText": "Es bedeckt weite Gebiete mit Schnee, indem es Blizzards auslöst. Man nennt es „Das Eismonster“."
  },
  {
    "id": 461,
    "name": "weavile",
    "germanName": "Snibunna",
    "types": [
      "dark",
      "ice"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 85,
      "speed": 125
    },
    "totalStats": 510,
    "height": 1.1,
    "weight": 34,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stichklauen-Pokémon",
    "flavorText": "Es lebt in schneereichen Gebieten. Snibunna senden einander Signale, indem sie Zeichen in Rinde ritzen."
  },
  {
    "id": 462,
    "name": "magnezone",
    "germanName": "Magnezone",
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 115,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 60
    },
    "totalStats": 535,
    "height": 1.2,
    "weight": 180,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Magnetgebiets-Pokémon",
    "flavorText": "Gelegentlich erzeugen sie so starke Magnetfelder, dass sie sich gegenseitig anziehen und einander immobilisieren."
  },
  {
    "id": 463,
    "name": "lickilicky",
    "germanName": "Schlurplek",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 95,
      "specialAttack": 80,
      "specialDefense": 95,
      "speed": 50
    },
    "totalStats": 515,
    "height": 1.7,
    "weight": 140,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schlecker-Pokémon",
    "flavorText": "Es umklammert Dinge mit seiner dehnbaren Zunge. Kommt man ihm zu nahe, wird man eingespeichelt."
  },
  {
    "id": 464,
    "name": "rhyperior",
    "germanName": "Rihornior",
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 40
    },
    "totalStats": 535,
    "height": 2.4,
    "weight": 282.8,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Bohrer-Pokémon",
    "flavorText": "Es feuert Kleinstein aus seinen Handflächen. Durch seinen Schützer erträgt es sogar Vulkanausbrüche."
  },
  {
    "id": 465,
    "name": "tangrowth",
    "germanName": "Tangoloss",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 125,
      "specialAttack": 110,
      "specialDefense": 50,
      "speed": 50
    },
    "totalStats": 535,
    "height": 2,
    "weight": 128.6,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ranken-Pokémon",
    "flavorText": "Es umwickelt Beute, indem es seine Arme, die aus Ranken bestehen, verlängert."
  },
  {
    "id": 466,
    "name": "electivire",
    "germanName": "Elevoltek",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 75,
      "attack": 123,
      "defense": 67,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 95
    },
    "totalStats": 540,
    "height": 1.8,
    "weight": 138.6,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Donnerkeil-Pokémon",
    "flavorText": "Bei voller Ladung zucken feurige, blassweiße Funken zwischen seinen zwei Hörnern hin und her."
  },
  {
    "id": 467,
    "name": "magmortar",
    "germanName": "Magbrant",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 67,
      "specialAttack": 125,
      "specialDefense": 95,
      "speed": 83
    },
    "totalStats": 540,
    "height": 1.6,
    "weight": 68,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Detonations-Pokémon",
    "flavorText": "Aus den Enden seiner Arme schießen Feuerbälle mit 2 000 °C. Es lebt in Vulkankratern."
  },
  {
    "id": 468,
    "name": "togekiss",
    "germanName": "Togekiss",
    "types": [
      "fairy",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 50,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 115,
      "speed": 80
    },
    "totalStats": 545,
    "height": 1.5,
    "weight": 38,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Jubilierer-Pokémon",
    "flavorText": "Es zeigt sich nie an Orten, wo Streit und Zwietracht herrschen. In letzter Zeit wird es kaum noch gesehen."
  },
  {
    "id": 469,
    "name": "yanmega",
    "germanName": "Yanmega",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 86,
      "attack": 76,
      "defense": 86,
      "specialAttack": 116,
      "specialDefense": 56,
      "speed": 95
    },
    "totalStats": 515,
    "height": 1.9,
    "weight": 51.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Agrion",
    "flavorText": "Seine bevorzugte Strategie besteht darin, seine Gegner aus dem Flug blitzartig zur Strecke zu bringen."
  },
  {
    "id": 470,
    "name": "leafeon",
    "germanName": "Folipurba",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 65,
      "speed": 95
    },
    "totalStats": 525,
    "height": 1,
    "weight": 25.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Unreif-Pokémon",
    "flavorText": "An klaren Tagen erzeugt Folipurba saubere Luft, indem es Photosynthese betreibt."
  },
  {
    "id": 471,
    "name": "glaceon",
    "germanName": "Glaziola",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "specialAttack": 130,
      "specialDefense": 95,
      "speed": 65
    },
    "totalStats": 525,
    "height": 0.8,
    "weight": 25.9,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Neuschnee-Pokémon",
    "flavorText": "Erzeugt ein Diamantstaubgestöber durch das Einfrieren der Luft um sich herum."
  },
  {
    "id": 472,
    "name": "gliscor",
    "germanName": "Skorgro",
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "specialAttack": 45,
      "specialDefense": 75,
      "speed": 95
    },
    "totalStats": 510,
    "height": 2,
    "weight": 42.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zahnskorpi",
    "flavorText": "Es hängt kopfüber von einem Ast und beobachtet seine Beute. Bei Gelegenheit stürzt es sich auf sie."
  },
  {
    "id": 473,
    "name": "mamoswine",
    "germanName": "Mamutel",
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 80
    },
    "totalStats": 530,
    "height": 2.5,
    "weight": 291,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Doppelstoßzahn-Pokémon",
    "flavorText": "Es existiert schon seit Urzeiten. Mamutel wurde sogar schon in 10 000 Jahre altem Eis gefunden."
  },
  {
    "id": 474,
    "name": "porygon-z",
    "germanName": "Porygon-Z",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 70,
      "specialAttack": 135,
      "specialDefense": 75,
      "speed": 90
    },
    "totalStats": 535,
    "height": 0.9,
    "weight": 34,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Virtuell-Pokémon",
    "flavorText": "Zusätzliche Software wurde installiert, um das Pokémon zu verbessern. Seitdem benimmt es sich seltsam."
  },
  {
    "id": 475,
    "name": "gallade",
    "germanName": "Galagladi",
    "types": [
      "psychic",
      "fighting"
    ],
    "stats": {
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 115,
      "speed": 80
    },
    "totalStats": 518,
    "height": 1.6,
    "weight": 52,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Klingen-Pokémon",
    "flavorText": "Da es selbst die leisesten Gedanken seines Gegners lesen kann, kann es immer zuerst angreifen."
  },
  {
    "id": 476,
    "name": "probopass",
    "germanName": "Voluminas",
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 145,
      "specialAttack": 75,
      "specialDefense": 150,
      "speed": 40
    },
    "totalStats": 525,
    "height": 1.4,
    "weight": 340,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kompass",
    "flavorText": "Es gibt starken Magnetismus ab. Es steuert drei kleine Einheiten, die sich Mininasen nennen."
  },
  {
    "id": 477,
    "name": "dusknoir",
    "germanName": "Zwirrfinst",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 45,
      "attack": 100,
      "defense": 135,
      "specialAttack": 65,
      "specialDefense": 135,
      "speed": 45
    },
    "totalStats": 525,
    "height": 2.2,
    "weight": 106.6,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Greifer-Pokémon",
    "flavorText": "Die Antenne auf seinem Kopf empfängt Radiowellen aus einer anderen Dimension."
  },
  {
    "id": 478,
    "name": "froslass",
    "germanName": "Frosdedje",
    "types": [
      "ice",
      "ghost"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 110
    },
    "totalStats": 480,
    "height": 1.3,
    "weight": 26.6,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schneegebiets-Pokémon",
    "flavorText": "Sein eisiger Atem mit -50 °C friert Gegner ein. Was aussieht wie sein Körper, ist tatsächlich hohl."
  },
  {
    "id": 479,
    "name": "rotom",
    "germanName": "Rotom",
    "types": [
      "electric",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "specialAttack": 95,
      "specialDefense": 77,
      "speed": 91
    },
    "totalStats": 440,
    "height": 0.3,
    "weight": 0.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Plasma-Pokémon",
    "flavorText": "Dieses Pokémon wurde lange Zeit erforscht, um als Energiequelle für einen besonderen Motor zu dienen."
  },
  {
    "id": 480,
    "name": "uxie",
    "germanName": "Selfe",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 130,
      "specialAttack": 75,
      "specialDefense": 130,
      "speed": 95
    },
    "totalStats": 580,
    "height": 0.3,
    "weight": 0.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Wissens-Pokémon",
    "flavorText": "„Das wissende Wesen“. Es soll die Erinnerungen derer löschen, die ihm in die Augen sehen."
  },
  {
    "id": 481,
    "name": "mesprit",
    "germanName": "Vesprit",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 105,
      "specialAttack": 105,
      "specialDefense": 105,
      "speed": 80
    },
    "totalStats": 580,
    "height": 0.3,
    "weight": 0.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Emotions-Pokémon",
    "flavorText": "„Das fühlende Wesen“. Es lehrt die Menschen die Ideale von Trauer, Schmerz und Freude."
  },
  {
    "id": 482,
    "name": "azelf",
    "germanName": "Tobutz",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 70,
      "speed": 115
    },
    "totalStats": 580,
    "height": 0.3,
    "weight": 0.3,
    "generation": 4,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Willenskraft-Pokémon",
    "flavorText": "„Das starke Wesen“. Es schläft auf dem Grund eines Sees und hält so die Welt in Balance."
  },
  {
    "id": 483,
    "name": "dialga",
    "germanName": "Dialga",
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 120,
      "specialAttack": 150,
      "specialDefense": 100,
      "speed": 90
    },
    "totalStats": 680,
    "height": 5.4,
    "weight": 683,
    "generation": 4,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Zeitweilig-Pokémon",
    "flavorText": "Ein Pokémon, das in Legenden zu finden ist. Man sagt, als Dialga geboren wurde, begann der Lauf der Zeit."
  },
  {
    "id": 484,
    "name": "palkia",
    "germanName": "Palkia",
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 100,
      "specialAttack": 150,
      "specialDefense": 120,
      "speed": 100
    },
    "totalStats": 680,
    "height": 4.2,
    "weight": 336,
    "generation": 4,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Räumlich-Pokémon",
    "flavorText": "Man sagt, es lebe in einem Spalt in einer Paralleldimension. Es wird in der Mythologie erwähnt."
  },
  {
    "id": 485,
    "name": "heatran",
    "germanName": "Heatran",
    "types": [
      "fire",
      "steel"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 106,
      "specialAttack": 130,
      "specialDefense": 106,
      "speed": 77
    },
    "totalStats": 600,
    "height": 1.7,
    "weight": 430,
    "generation": 4,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Lavadom-Pokémon",
    "flavorText": "Es lebt in vulkanischen Höhlen. Mit seinen kreuzförmigen Klauen kann es sogar an der Decke laufen."
  },
  {
    "id": 486,
    "name": "regigigas",
    "germanName": "Regigigas",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 110,
      "attack": 160,
      "defense": 110,
      "specialAttack": 80,
      "specialDefense": 110,
      "speed": 100
    },
    "totalStats": 670,
    "height": 3.7,
    "weight": 420,
    "generation": 4,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Kolossal-Pokémon",
    "flavorText": "Man sagt, es habe Pokémon aus einem Eisberg, Felsen und Magma nach seinem Abbild geschaffen."
  },
  {
    "id": 487,
    "name": "giratina-altered",
    "germanName": "Giratina",
    "types": [
      "ghost",
      "dragon"
    ],
    "stats": {
      "hp": 150,
      "attack": 100,
      "defense": 120,
      "specialAttack": 100,
      "specialDefense": 120,
      "speed": 90
    },
    "totalStats": 680,
    "height": 4.5,
    "weight": 750,
    "generation": 4,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Rebellen-Pokémon",
    "flavorText": "Es lebt in einer Zerrwelt, die auf der Kehrseite der unseren liegt und die sich aller Logik entzieht."
  },
  {
    "id": 488,
    "name": "cresselia",
    "germanName": "Cresselia",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 120,
      "attack": 70,
      "defense": 110,
      "specialAttack": 75,
      "specialDefense": 120,
      "speed": 85
    },
    "totalStats": 580,
    "height": 1.5,
    "weight": 85.6,
    "generation": 4,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Lunar-Pokémon",
    "flavorText": "Seine Flügel geben schimmernde Partikel ab, die wie ein Schleier herabrieseln. Man sagt, es verkörpere die Mondsichel."
  },
  {
    "id": 489,
    "name": "phione",
    "germanName": "Phione",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80
    },
    "totalStats": 480,
    "height": 0.4,
    "weight": 3.1,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Seedrift",
    "flavorText": "Steigt die Meerestemperatur, bläst es seinen Schwimmbeutel auf und treibt in Schwärmen auf dem Wasser."
  },
  {
    "id": 490,
    "name": "manaphy",
    "germanName": "Manaphy",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "totalStats": 600,
    "height": 0.3,
    "weight": 1.4,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Seefahrer",
    "flavorText": "Es wird mit einer wundersamen Kraft geboren, die eine Bindung zu jedem anderen Pokémon möglich macht."
  },
  {
    "id": 491,
    "name": "darkrai",
    "germanName": "Darkrai",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 90,
      "specialAttack": 135,
      "specialDefense": 90,
      "speed": 125
    },
    "totalStats": 600,
    "height": 1.5,
    "weight": 50.5,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Dunkelnacht",
    "flavorText": "Es vertreibt Eindringlinge aus seinem Revier, indem es sie in Schlaf versetzt und mit Alpträumen quält."
  },
  {
    "id": 492,
    "name": "shaymin-land",
    "germanName": "Shaymin",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "totalStats": 600,
    "height": 0.2,
    "weight": 2.1,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Dankbarkeit",
    "flavorText": "Es kann die Luft von Giften reinigen und Ödland in ein üppig blühendes Blumenfeld verwandeln."
  },
  {
    "id": 493,
    "name": "arceus",
    "germanName": "Arceus",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 120,
      "attack": 120,
      "defense": 120,
      "specialAttack": 120,
      "specialDefense": 120,
      "speed": 120
    },
    "totalStats": 720,
    "height": 3.2,
    "weight": 320,
    "generation": 4,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Alpha",
    "flavorText": "In den Legenden Sinnohs heißt es, es sei aus einem Ei geschlüpft und hätte die gesamte Welt geschaffen."
  },
  {
    "id": 494,
    "name": "victini",
    "germanName": "Victini",
    "types": [
      "psychic",
      "fire"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    },
    "totalStats": 600,
    "height": 0.4,
    "weight": 4,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Triumph-Pokémon",
    "flavorText": "Ein siegverheißendes Pokémon. Man sagt, Trainer, die ein Victini in ihrem Team haben, seien unschlagbar."
  },
  {
    "id": 495,
    "name": "snivy",
    "germanName": "Serpifeu",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 63
    },
    "totalStats": 308,
    "height": 0.6,
    "weight": 8.1,
    "generation": 5,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Grasschlange",
    "flavorText": "Im Sonnenlicht erhöht sich das Tempo seiner Bewegungen. Es ist mit seinen Schlingen geschickter als mit den Händen."
  },
  {
    "id": 496,
    "name": "servine",
    "germanName": "Efoserp",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 83
    },
    "totalStats": 413,
    "height": 0.8,
    "weight": 16,
    "generation": 5,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Grasschlange",
    "flavorText": "Huscht beinahe gleitend über den Boden und täuscht Gegner mit agilen Manövern, bis es mithilfe seiner Efeurute obsiegt."
  },
  {
    "id": 497,
    "name": "serperior",
    "germanName": "Serpiroyal",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "specialAttack": 75,
      "specialDefense": 95,
      "speed": 113
    },
    "totalStats": 528,
    "height": 3.3,
    "weight": 63,
    "generation": 5,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hoheit",
    "flavorText": "Im Kampf zeigt es nur Gegnern, die seinem edlen Blick standhalten, seine wahre Kraft."
  },
  {
    "id": 498,
    "name": "tepig",
    "germanName": "Floink",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 63,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 45
    },
    "totalStats": 308,
    "height": 0.5,
    "weight": 9.9,
    "generation": 5,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerferkel",
    "flavorText": "Weicht flink gegnerischen Angriffen aus und schießt Flammen aus dem Rüssel, mit denen es gern auch mal Nüsse röstet."
  },
  {
    "id": 499,
    "name": "pignite",
    "germanName": "Ferkokel",
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 93,
      "defense": 55,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 55
    },
    "totalStats": 418,
    "height": 1,
    "weight": 55.5,
    "generation": 5,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerferkel",
    "flavorText": "Je mehr es frisst, desto stärker werden die Flammen in seinem Magen. Dies führt zu rapiden Energieschüben."
  },
  {
    "id": 500,
    "name": "emboar",
    "germanName": "Flambirex",
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 65,
      "speed": 65
    },
    "totalStats": 528,
    "height": 1.6,
    "weight": 150,
    "generation": 5,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerschwein",
    "flavorText": "Steckt mit dem Feuer um sein Kinn seine Fäuste in Brand und holt zu feurigen Fausthieben aus. Zeigt großen Teamgeist."
  },
  {
    "id": 501,
    "name": "oshawott",
    "germanName": "Ottaro",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 45,
      "specialAttack": 63,
      "specialDefense": 45,
      "speed": 45
    },
    "totalStats": 308,
    "height": 0.5,
    "weight": 5.9,
    "generation": 5,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Otter",
    "flavorText": "Die Muschel an seinem Bauch dient ihm nicht nur als Waffe, sondern auch als Messer, mit dem es Beeren aufschneidet."
  },
  {
    "id": 502,
    "name": "dewott",
    "germanName": "Zwottronin",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 60,
      "specialAttack": 83,
      "specialDefense": 60,
      "speed": 60
    },
    "totalStats": 413,
    "height": 0.8,
    "weight": 24.5,
    "generation": 5,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schulung",
    "flavorText": "Es eignet sich durch strenges Training elegant ineinander übergehende Attacken mit seinen zwei Muscheln an."
  },
  {
    "id": 503,
    "name": "samurott",
    "germanName": "Admurai",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "specialAttack": 108,
      "specialDefense": 70,
      "speed": 70
    },
    "totalStats": 528,
    "height": 1.5,
    "weight": 94.6,
    "generation": 5,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Würde",
    "flavorText": "Ehe man sichs versieht, hat es schon das Langschwert aus seinen Vorderbeinen gezogen und seinen Gegner besiegt."
  },
  {
    "id": 504,
    "name": "patrat",
    "germanName": "Nagelotz",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 39,
      "specialAttack": 35,
      "specialDefense": 39,
      "speed": 42
    },
    "totalStats": 255,
    "height": 0.5,
    "weight": 11.6,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Späher",
    "flavorText": "Hortet in seinen Backentaschen Futter, um tagelang Wache stehen zu können, und gibt Kameraden über seine Rute Signale."
  },
  {
    "id": 505,
    "name": "watchog",
    "germanName": "Kukmarda",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "specialAttack": 60,
      "specialDefense": 69,
      "speed": 77
    },
    "totalStats": 420,
    "height": 1.1,
    "weight": 27,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wachsamkeit",
    "flavorText": "Es kann mit einer körpereigenen Substanz seine Augen und seinen Torso aufleuchten lassen, um Gegner zu erschrecken."
  },
  {
    "id": 506,
    "name": "lillipup",
    "germanName": "Yorkleff",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 45,
      "speed": 55
    },
    "totalStats": 275,
    "height": 0.4,
    "weight": 4.1,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Welpen-Pokémon",
    "flavorText": "Das lange Fell um sein Gesicht fungiert als Hightech-Radar, mit dem es fein säuberlich seine Umgebung abtastet."
  },
  {
    "id": 507,
    "name": "herdier",
    "germanName": "Terribark",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 65,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 60
    },
    "totalStats": 370,
    "height": 0.9,
    "weight": 14.7,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Treuhund-Pokémon",
    "flavorText": "Dieses äußerst treue Pokémon geht nicht nur seinem Trainer zur Hand, sondern hilft auch anderen Pokémon."
  },
  {
    "id": 508,
    "name": "stoutland",
    "germanName": "Bissbark",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 90,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 80
    },
    "totalStats": 500,
    "height": 1.2,
    "weight": 61,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Großmut-Pokémon",
    "flavorText": "Es rettet Menschen, die aufgrund eines Schneesturmes im Gebirge festsitzen. Sein langes Fell schützt es vor Kälte."
  },
  {
    "id": 509,
    "name": "purrloin",
    "germanName": "Felilou",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 41,
      "attack": 50,
      "defense": 37,
      "specialAttack": 50,
      "specialDefense": 37,
      "speed": 66
    },
    "totalStats": 281,
    "height": 0.4,
    "weight": 10.1,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schelm-Pokémon",
    "flavorText": "Es lenkt die Menschen durch sein süßes Verhalten ab, um sie zu bestehlen. Ist es wütend, kratzt es gern mal."
  },
  {
    "id": 510,
    "name": "liepard",
    "germanName": "Kleoparda",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "specialAttack": 88,
      "specialDefense": 50,
      "speed": 106
    },
    "totalStats": 446,
    "height": 1.1,
    "weight": 37.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gefühlskälte-Pokémon",
    "flavorText": "Sein anmutiges Auftreten verdankt es den Muskeln, die es entwickelt hat. Es prescht lautlos durch die Nacht."
  },
  {
    "id": 511,
    "name": "pansage",
    "germanName": "Vegimak",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64
    },
    "totalStats": 316,
    "height": 0.6,
    "weight": 10.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Grasaffe",
    "flavorText": "Schwächelnden Pokémon gibt es ein paar der Kräuter auf seinem Kopf ab und hilft ihnen so wieder auf die Beine."
  },
  {
    "id": 512,
    "name": "simisage",
    "germanName": "Vegichita",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101
    },
    "totalStats": 498,
    "height": 1.1,
    "weight": 30.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stachelaffe",
    "flavorText": "Wer sich mit diesem temperamentvollen Pokémon anlegt, bekommt seinen mit Dornen bestückten Schweif zu spüren."
  },
  {
    "id": 513,
    "name": "pansear",
    "germanName": "Grillmak",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64
    },
    "totalStats": 316,
    "height": 0.6,
    "weight": 11,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hitze",
    "flavorText": "Ein kultiviertes Pokémon, das Beeren vor dem Verzehr stets anbrät. Es bietet den Menschen gerne seine Hilfe an."
  },
  {
    "id": 514,
    "name": "simisear",
    "germanName": "Grillchita",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101
    },
    "totalStats": 498,
    "height": 1,
    "weight": 28,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Funkenregen",
    "flavorText": "Es entfacht in seinem Körper ein Feuer und verkohlt Gegner mit Funken aus seinem Kopf und Schweif."
  },
  {
    "id": 515,
    "name": "panpour",
    "germanName": "Sodamak",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64
    },
    "totalStats": 316,
    "height": 0.6,
    "weight": 13.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wasserstrahl",
    "flavorText": "Das Büschel auf seinem Kopf enthält eine sehr nahrhafte Flüssigkeit, mit der es über seinen Schweif Pflanzen wässert."
  },
  {
    "id": 516,
    "name": "simipour",
    "germanName": "Sodachita",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101
    },
    "totalStats": 498,
    "height": 1,
    "weight": 29,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Drainage",
    "flavorText": "Es schießt mit so hohem Druck Wasser aus seinem Schweif, dass selbst Betonwände den Kürzeren ziehen."
  },
  {
    "id": 517,
    "name": "munna",
    "germanName": "Somniam",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 76,
      "attack": 25,
      "defense": 45,
      "specialAttack": 67,
      "specialDefense": 55,
      "speed": 24
    },
    "totalStats": 292,
    "height": 0.6,
    "weight": 23.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Traumfresser-Pokémon",
    "flavorText": "Es erscheint vor schlafenden Menschen und Pokémon und frisst ihre Alpträume."
  },
  {
    "id": 518,
    "name": "musharna",
    "germanName": "Somnivora",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 116,
      "attack": 55,
      "defense": 85,
      "specialAttack": 107,
      "specialDefense": 95,
      "speed": 29
    },
    "totalStats": 487,
    "height": 1.1,
    "weight": 60.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Halbschlaf-Pokémon",
    "flavorText": "Der Dunst, der aus seiner Stirn tritt, enthält die Träume unzähliger Menschen und Pokémon."
  },
  {
    "id": 519,
    "name": "pidove",
    "germanName": "Dusselgurr",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 50,
      "attack": 55,
      "defense": 50,
      "specialAttack": 36,
      "specialDefense": 30,
      "speed": 43
    },
    "totalStats": 264,
    "height": 0.3,
    "weight": 2.1,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Täubchen-Pokémon",
    "flavorText": "Wartet oft vergeblich auf Anweisungen, obwohl es bereits einen Befehl erhalten hat. Ein sehr zerstreutes Pokémon."
  },
  {
    "id": 520,
    "name": "tranquill",
    "germanName": "Navitaub",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 62,
      "attack": 77,
      "defense": 62,
      "specialAttack": 50,
      "specialDefense": 42,
      "speed": 65
    },
    "totalStats": 358,
    "height": 0.6,
    "weight": 15,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wildtauben-Pokémon",
    "flavorText": "Viele Leute glauben, dass es tief in seinem heimatlichen Wald ein Land der Harmonie gibt, wo man keine Kriege kennt."
  },
  {
    "id": 521,
    "name": "unfezant",
    "germanName": "Fasasnob",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 115,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 93
    },
    "totalStats": 488,
    "height": 1.2,
    "weight": 29,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stolz-Pokémon",
    "flavorText": "Männchen schrecken Gegner ab, indem sie ihren Kopfschmuck schütteln. Weibchen verfügen über bessere Flugfertigkeiten."
  },
  {
    "id": 522,
    "name": "blitzle",
    "germanName": "Elezeba",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 32,
      "specialAttack": 50,
      "specialDefense": 32,
      "speed": 76
    },
    "totalStats": 295,
    "height": 0.8,
    "weight": 29.8,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hochspannung",
    "flavorText": "Es erscheint, wenn Gewitterwolken den Himmel verdunkeln. Es fängt mit seiner Mähne Blitze und hortet ihre Energie."
  },
  {
    "id": 523,
    "name": "zebstrika",
    "germanName": "Zebritz",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 63,
      "speed": 116
    },
    "totalStats": 497,
    "height": 1.6,
    "weight": 79.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Donnerkeil",
    "flavorText": "Ein stürmischer Geselle. Wenn es wütend ist, feuert es über seine Mähne in alle Richtungen Stromsalven ab."
  },
  {
    "id": 524,
    "name": "roggenrola",
    "germanName": "Kiesling",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 85,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    },
    "totalStats": 280,
    "height": 0.4,
    "weight": 18,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Erdmantel-Pokémon",
    "flavorText": "Hat ein sechseckiges Ohr. Sein durch das Erdreich gepresster Körper steht Stahl in Sachen Härte in nichts nach."
  },
  {
    "id": 525,
    "name": "boldore",
    "germanName": "Sedimantur",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 105,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 20
    },
    "totalStats": 390,
    "height": 0.9,
    "weight": 102,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Erz-Pokémon",
    "flavorText": "Energie, die ungehindert aus seinem Körper austrat, hat sich an ihm zu orangefarbenen Kristallen verfestigt."
  },
  {
    "id": 526,
    "name": "gigalith",
    "germanName": "Brockoloss",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 85,
      "attack": 135,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 25
    },
    "totalStats": 515,
    "height": 1.7,
    "weight": 260,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kompressions-Pokémon",
    "flavorText": "Es verarbeitet Sonnenstrahlen in seinem Energiekern zu Lichtkugeln weiter, um sie im Kampf auf seinen Gegner abzufeuern."
  },
  {
    "id": 527,
    "name": "woobat",
    "germanName": "Fleknoil",
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 43,
      "specialAttack": 55,
      "specialDefense": 43,
      "speed": 72
    },
    "totalStats": 323,
    "height": 0.4,
    "weight": 2.1,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fledermaus-Pokémon",
    "flavorText": "Wohnt in dunklen Wäldern und Höhlen. Es sendet Ultraschallwellen mit seiner Nase aus, um die Gegend abzutasten."
  },
  {
    "id": 528,
    "name": "swoobat",
    "germanName": "Fletiamo",
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 67,
      "attack": 57,
      "defense": 55,
      "specialAttack": 77,
      "specialDefense": 55,
      "speed": 114
    },
    "totalStats": 425,
    "height": 0.9,
    "weight": 10.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Balz-Pokémon",
    "flavorText": "Beim Abfeuern seiner Ultraschallwellen, mit denen es selbst Beton zertrümmern kann, wedelt es eifrig mit dem Schweif."
  },
  {
    "id": 529,
    "name": "drilbur",
    "germanName": "Rotomurf",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 68
    },
    "totalStats": 328,
    "height": 0.3,
    "weight": 8.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maulwurf-Pokémon",
    "flavorText": "Es führt seine beiden Klauen zusammen, dreht sich rapide um die eigene Achse und gräbt sich ratzfatz durch das Erdreich."
  },
  {
    "id": 530,
    "name": "excadrill",
    "germanName": "Stalobor",
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 88
    },
    "totalStats": 508,
    "height": 0.7,
    "weight": 40.4,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Untergrund-Pokémon",
    "flavorText": "Seine zu Stahl weiterentwickelten Bohrer kriegen selbst Eisenplatten klein. Im Tunnelbau ist es ein absolutes Ass."
  },
  {
    "id": 531,
    "name": "audino",
    "germanName": "Ohrdoch",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "specialAttack": 60,
      "specialDefense": 86,
      "speed": 50
    },
    "totalStats": 445,
    "height": 1.1,
    "weight": 31,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gehör-Pokémon",
    "flavorText": "Über die Fühler an seinen Ohren kann es ertasten, wie es einer Person geht oder wann ein Pokémon aus seinem Ei schlüpft."
  },
  {
    "id": 532,
    "name": "timburr",
    "germanName": "Praktibalk",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 35
    },
    "totalStats": 305,
    "height": 0.6,
    "weight": 12.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Muskel-Pokémon",
    "flavorText": "Trägt stets einen Holzbalken bei sich. Es taucht hier und da auf Baustellen auf und hilft dort den Arbeitern aus."
  },
  {
    "id": 533,
    "name": "gurdurr",
    "germanName": "Strepoli",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 85,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 40
    },
    "totalStats": 405,
    "height": 1.2,
    "weight": 40,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Muskel-Pokémon",
    "flavorText": "Diese durchtrainierten Muskelprotze sind im Umgang mit Stahlträgern versiert und können damit ganze Häuser abreißen."
  },
  {
    "id": 534,
    "name": "conkeldurr",
    "germanName": "Meistagrif",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    },
    "totalStats": 505,
    "height": 1.4,
    "weight": 87,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Muskel-Pokémon",
    "flavorText": "Man nimmt an, dass es der Menschheit vor ca. 2 000 Jahren das Betonmischen beigebracht hat."
  },
  {
    "id": 535,
    "name": "tympole",
    "germanName": "Schallquap",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 64
    },
    "totalStats": 294,
    "height": 0.5,
    "weight": 4.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kaulquappen-Pokémon",
    "flavorText": "Erzeugt mit seinen Wangen für Menschen unhörbare Schallwellen, um Artgenossen vor Gefahr zu warnen."
  },
  {
    "id": 536,
    "name": "palpitoad",
    "germanName": "Mebrana",
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 65,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 69
    },
    "totalStats": 384,
    "height": 0.8,
    "weight": 17,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vibrations-Pokémon",
    "flavorText": "Wenn es die Beulen auf seinem Kopf zum Schwingen bringt, tobt je nach Umgebung entweder das Wasser oder die Erde bebt."
  },
  {
    "id": 537,
    "name": "seismitoad",
    "germanName": "Branawarz",
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 75,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 74
    },
    "totalStats": 509,
    "height": 1.5,
    "weight": 62,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vibrations-Pokémon",
    "flavorText": "Wenn es die Beulen an seinen Fäusten zum Schwingen bringt, kann es doppelt so fest zuschlagen und Felsen zertrümmern."
  },
  {
    "id": 538,
    "name": "throh",
    "germanName": "Jiutesto",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 120,
      "attack": 100,
      "defense": 85,
      "specialAttack": 30,
      "specialDefense": 85,
      "speed": 45
    },
    "totalStats": 465,
    "height": 1.3,
    "weight": 55.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Judo-Pokémon",
    "flavorText": "Zurrt es seinen Gürtel fest, gewinnt es an Kraft. Wilde Exemplare flechten sich ihren Gürtel in Handarbeit aus Ranken."
  },
  {
    "id": 539,
    "name": "sawk",
    "germanName": "Karadonis",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 75,
      "specialAttack": 30,
      "specialDefense": 75,
      "speed": 85
    },
    "totalStats": 465,
    "height": 1.4,
    "weight": 51,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Karate-Pokémon",
    "flavorText": "Es lebt zurückgezogen in den Bergen und trainiert Tag und Nacht, um seinen Karateschlag zu perfektionieren."
  },
  {
    "id": 540,
    "name": "sewaddle",
    "germanName": "Strawickl",
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 53,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 42
    },
    "totalStats": 310,
    "height": 0.3,
    "weight": 2.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schneider",
    "flavorText": "Schneidert sich ein Kleid, indem es sich Blätter zurechtbeißt und sie mit Klebefäden aus seinem Mund zusammennäht."
  },
  {
    "id": 541,
    "name": "swadloon",
    "germanName": "Folikon",
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 55,
      "attack": 63,
      "defense": 90,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 42
    },
    "totalStats": 380,
    "height": 0.5,
    "weight": 7.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wickelblatt",
    "flavorText": "Es wandelt herabgefallenes Laub in Nährstoffe um. In Wäldern, wo es Folikon gibt, fühlen sich Pflanzen pudelwohl."
  },
  {
    "id": 542,
    "name": "leavanny",
    "germanName": "Matrifol",
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 103,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 92
    },
    "totalStats": 500,
    "height": 1.2,
    "weight": 20.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kinderpflege",
    "flavorText": "Begegnet es einem jungen Pokémon, näht es ihm mit den klebrigen Fäden aus seinem Mund ein Kleid aus Blättern."
  },
  {
    "id": 543,
    "name": "venipede",
    "germanName": "Toxiped",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 59,
      "specialAttack": 30,
      "specialDefense": 39,
      "speed": 57
    },
    "totalStats": 260,
    "height": 0.4,
    "weight": 5.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tausendfüßer-Pokémon",
    "flavorText": "Mit seinen Ruten und den Fühlern an seinem Kopf tastet es die Umgebung ab. Ein überaus aggressiver Geselle."
  },
  {
    "id": 544,
    "name": "whirlipede",
    "germanName": "Rollum",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 99,
      "specialAttack": 40,
      "specialDefense": 79,
      "speed": 47
    },
    "totalStats": 360,
    "height": 1.2,
    "weight": 58.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kokonfüßer-Pokémon",
    "flavorText": "Von einem harten Schutzpanzer umgeben. Es greift seine Gegner an, indem es mit Karacho wie ein Rad in sie hineinrollt."
  },
  {
    "id": 545,
    "name": "scolipede",
    "germanName": "Cerapendra",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 89,
      "specialAttack": 55,
      "specialDefense": 69,
      "speed": 112
    },
    "totalStats": 485,
    "height": 2.5,
    "weight": 200.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Riesenfüßer-Pokémon",
    "flavorText": "Lähmt seine Beute, indem es sie mit den Zacken an seinem Hals aufspießt. Mit einer Ladung Gift gibt es ihr den Rest."
  },
  {
    "id": 546,
    "name": "cottonee",
    "germanName": "Waumboll",
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 27,
      "defense": 60,
      "specialAttack": 37,
      "specialDefense": 50,
      "speed": 66
    },
    "totalStats": 280,
    "height": 0.3,
    "weight": 0.6,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wattebausch-Pokémon",
    "flavorText": "Wird es angegriffen, verstreut es zur Täuschung Watte. Es flieht, während der Gegner nach dem wahren Waumboll sucht."
  },
  {
    "id": 547,
    "name": "whimsicott",
    "germanName": "Elfun",
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "specialAttack": 77,
      "specialDefense": 75,
      "speed": 116
    },
    "totalStats": 480,
    "height": 0.7,
    "weight": 6.6,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Windschatten-Pokémon",
    "flavorText": "Sie erscheinen mit Orkanböen und spielen den Leuten Streiche, indem sie in Häusern Möbel verrücken oder Watte verstreuen."
  },
  {
    "id": 548,
    "name": "petilil",
    "germanName": "Lilminip",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 35,
      "defense": 50,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 30
    },
    "totalStats": 280,
    "height": 0.5,
    "weight": 6.6,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wurzel-Pokémon",
    "flavorText": "Die Blätter auf seinem Kopf schmecken furchtbar bitter, doch sie helfen ausgezeichnet gegen Erschöpfung."
  },
  {
    "id": 549,
    "name": "lilligant",
    "germanName": "Dressella",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 75,
      "speed": 90
    },
    "totalStats": 480,
    "height": 1.1,
    "weight": 16.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blumenzier-Pokémon",
    "flavorText": "Der Duft des Blumenschmucks auf seinem Kopf wirkt beruhigend. Damit der Schmuck nicht verwelkt, muss man es gut pflegen."
  },
  {
    "id": 550,
    "name": "basculin-red-striped",
    "germanName": "Barschuft",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 92,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 55,
      "speed": 98
    },
    "totalStats": 460,
    "height": 1,
    "weight": 18,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Grobheits-Pokémon",
    "flavorText": "Sie gelten als Delikatesse. Aufgrund ihrer brutalen Natur liegen rot und blau gestreifte Exemplare immer im Clinch."
  },
  {
    "id": 551,
    "name": "sandile",
    "germanName": "Ganovil",
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 50,
      "attack": 72,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 65
    },
    "totalStats": 292,
    "height": 0.7,
    "weight": 15.2,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wüstenkroko-Pokémon",
    "flavorText": "Wenn es sich durch den Sand gräbt, ragen nur noch Nase und Augen hervor. Die schwarze Haut dient als Augenschutz."
  },
  {
    "id": 552,
    "name": "krokorok",
    "germanName": "Rokkaiman",
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 60,
      "attack": 82,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 74
    },
    "totalStats": 351,
    "height": 1,
    "weight": 33.4,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wüstenkroko-Pokémon",
    "flavorText": "Bildet mit mehreren Artgenossen ein Rudel. Eine Membran schützt seine Augen vor Sandstürmen."
  },
  {
    "id": 553,
    "name": "krookodile",
    "germanName": "Rabigator",
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 92
    },
    "totalStats": 519,
    "height": 1.5,
    "weight": 96.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Abschreckungs-Pokémon",
    "flavorText": "Ein äußerst grausames Pokémon. Es greift jeden, der ihm unter die Augen kommt, mit seinen scharfen Reißzähnen an."
  },
  {
    "id": 554,
    "name": "darumaka",
    "germanName": "Flampion",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 45,
      "specialAttack": 15,
      "specialDefense": 45,
      "speed": 50
    },
    "totalStats": 315,
    "height": 0.6,
    "weight": 37.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lampion-Pokémon",
    "flavorText": "Früher nutzte man die heißen Ausscheidungen von Flampion, um sich den Körper zu wärmen."
  },
  {
    "id": 555,
    "name": "darmanitan-standard",
    "germanName": "Flampivian",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 55,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 95
    },
    "totalStats": 480,
    "height": 1.3,
    "weight": 92.9,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lichterloh-Pokémon",
    "flavorText": "Nimmt es in einem heißen Kampf Schaden, wird es hart wie Stein und fällt in eine Trance, um seinen Verstand zu schärfen."
  },
  {
    "id": 556,
    "name": "maractus",
    "germanName": "Maracamba",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 86,
      "defense": 67,
      "specialAttack": 106,
      "specialDefense": 67,
      "speed": 60
    },
    "totalStats": 461,
    "height": 1,
    "weight": 28,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kaktus-Pokémon",
    "flavorText": "Verjagt Vogel-Pokémon, die auf seine Blüten aus sind, mit einem flotten Tänzchen und lauter Untermalung."
  },
  {
    "id": 557,
    "name": "dwebble",
    "germanName": "Lithomith",
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 85,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 55
    },
    "totalStats": 325,
    "height": 0.3,
    "weight": 14.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Steinhaus-Pokémon",
    "flavorText": "Höhlt sich einen brauchbaren Stein aus, um darin zu wohnen. Geht er zu Bruch, ruht es nicht, bis es einen neuen findet."
  },
  {
    "id": 558,
    "name": "crustle",
    "germanName": "Castellith",
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 125,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 45
    },
    "totalStats": 485,
    "height": 1.4,
    "weight": 200,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Felshaus-Pokémon",
    "flavorText": "Es ist hart genug im Nehmen, um mitsamt seines schweren Felsens mehrere Tage durch trockene Gebiete zu wandern."
  },
  {
    "id": 559,
    "name": "scraggy",
    "germanName": "Zurrokex",
    "types": [
      "dark",
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 70,
      "specialAttack": 35,
      "specialDefense": 70,
      "speed": 48
    },
    "totalStats": 348,
    "height": 0.6,
    "weight": 11.8,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hautwechsel-Pokémon",
    "flavorText": "Es zieht seine gummiartige Haut bis zum Hals hinauf und nimmt eine Abwehrhaltung ein, um sich vor Schaden zu schützen."
  },
  {
    "id": 560,
    "name": "scrafty",
    "germanName": "Irokex",
    "types": [
      "dark",
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 115,
      "speed": 58
    },
    "totalStats": 488,
    "height": 1.1,
    "weight": 30,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Halunken-Pokémon",
    "flavorText": "Es wehrt Angriffe mit seiner alten Haut ab und kontert mit Tritten. Sein Ego entspricht der Größe seines Kamms."
  },
  {
    "id": 561,
    "name": "sigilyph",
    "germanName": "Symvolara",
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 72,
      "attack": 58,
      "defense": 80,
      "specialAttack": 103,
      "specialDefense": 80,
      "speed": 97
    },
    "totalStats": 490,
    "height": 1.4,
    "weight": 14,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vogelgleich-Pokémon",
    "flavorText": "Einst war es der Wächter einer Stadt aus uralten Zeiten. Wer sich in sein Revier wagt, lernt seine Psycho-Kräfte kennen."
  },
  {
    "id": 562,
    "name": "yamask",
    "germanName": "Makabaja",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 30
    },
    "totalStats": 303,
    "height": 0.5,
    "weight": 1.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seelen-Pokémon",
    "flavorText": "Es entsteht aus den Seelen von längst begrabenen Menschen und kann sich immer noch an deren Vergangenheit erinnern."
  },
  {
    "id": 563,
    "name": "cofagrigus",
    "germanName": "Echnatoll",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "specialAttack": 95,
      "specialDefense": 105,
      "speed": 30
    },
    "totalStats": 483,
    "height": 1.7,
    "weight": 76.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sarkophag-Pokémon",
    "flavorText": "Angeblich verschlingt es jeden, der sich ihm auch nur nähert. Besonders gern frisst es Klumpen aus reinem Gold."
  },
  {
    "id": 564,
    "name": "tirtouga",
    "germanName": "Galapaflos",
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 54,
      "attack": 78,
      "defense": 103,
      "specialAttack": 53,
      "specialDefense": 45,
      "speed": 22
    },
    "totalStats": 355,
    "height": 0.7,
    "weight": 16.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Urzeitkröten-Pokémon",
    "flavorText": "Schwamm bereits vor 100 Millionen Jahren durch die Meere. Ab und zu führt es die Jagd auch an Land."
  },
  {
    "id": 565,
    "name": "carracosta",
    "germanName": "Karippas",
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 74,
      "attack": 108,
      "defense": 133,
      "specialAttack": 83,
      "specialDefense": 65,
      "speed": 32
    },
    "totalStats": 495,
    "height": 1.2,
    "weight": 81,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Urzeitkröten-Pokémon",
    "flavorText": "Es lebt im Meer und an Land. Es ist so stark, dass es mit einem einzigen Hieb ein Loch in ein Schiff reißen kann."
  },
  {
    "id": 566,
    "name": "archen",
    "germanName": "Flapteryx",
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 112,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 45,
      "speed": 70
    },
    "totalStats": 401,
    "height": 0.5,
    "weight": 9.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Urzeitvogel-Pokémon",
    "flavorText": "Es wurde aus einem Fossil reanimiert. Man geht davon aus, dass es der Urahn aller Vogel-Pokémon ist."
  },
  {
    "id": 567,
    "name": "archeops",
    "germanName": "Aeropteryx",
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 140,
      "defense": 65,
      "specialAttack": 112,
      "specialDefense": 65,
      "speed": 110
    },
    "totalStats": 567,
    "height": 1.4,
    "weight": 32,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Urzeitvogel-Pokémon",
    "flavorText": "Bevor es abhebt, nimmt es am Boden Anlauf. Es ist schlau genug, seine Beute zusammen mit Artgenossen zu jagen."
  },
  {
    "id": 568,
    "name": "trubbish",
    "germanName": "Unratütox",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 62,
      "specialAttack": 40,
      "specialDefense": 62,
      "speed": 65
    },
    "totalStats": 329,
    "height": 0.6,
    "weight": 31,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Mülltüten-Pokémon",
    "flavorText": "Eine Mülltüte, der Industrieabfälle und chemische Reaktionen neues Leben eingehaucht haben."
  },
  {
    "id": 569,
    "name": "garbodor",
    "germanName": "Deponitox",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "specialAttack": 60,
      "specialDefense": 82,
      "speed": 75
    },
    "totalStats": 474,
    "height": 1.9,
    "weight": 107.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Müllhalden-Pokémon",
    "flavorText": "Es nimmt mit dem rechten Arm Gegner in die Mangel und gibt ihnen mit dem giftigen Gas aus seinem Maul den Rest."
  },
  {
    "id": 570,
    "name": "zorua",
    "germanName": "Zorua",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 40,
      "specialAttack": 80,
      "specialDefense": 40,
      "speed": 65
    },
    "totalStats": 330,
    "height": 0.7,
    "weight": 12.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lausefuchs-Pokémon",
    "flavorText": "Nicht selten überrumpelt es Gegner, indem es ihre Gestalt annimmt und den Überraschungseffekt zur Flucht nutzt."
  },
  {
    "id": 571,
    "name": "zoroark",
    "germanName": "Zoroark",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "specialAttack": 120,
      "specialDefense": 60,
      "speed": 105
    },
    "totalStats": 510,
    "height": 1.6,
    "weight": 81.1,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Polymorfuchs-Pokémon",
    "flavorText": "Kann auf einen Schlag große Massen von Menschen täuschen. Es kreiert Illusionen, um sein Revier zu schützen."
  },
  {
    "id": 572,
    "name": "minccino",
    "germanName": "Picochilla",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 75
    },
    "totalStats": 300,
    "height": 0.4,
    "weight": 5.8,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Chinchilla-Pokémon",
    "flavorText": "Sie begrüßen einander, indem sie ihr Gegenüber mithilfe ihres Schweifs säubern."
  },
  {
    "id": 573,
    "name": "cinccino",
    "germanName": "Chillabell",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 115
    },
    "totalStats": 470,
    "height": 0.5,
    "weight": 7.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schal-Pokémon",
    "flavorText": "Sein weißer Flaum fühlt sich wunderbar flauschig an und zieht weder Staub noch statische Elektrizität an."
  },
  {
    "id": 574,
    "name": "gothita",
    "germanName": "Mollimorba",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    },
    "totalStats": 290,
    "height": 0.4,
    "weight": 5.8,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Glotz-Pokémon",
    "flavorText": "Die schleifenförmigen Fühler erhöhen seine Psycho-Kräfte. Es scheint stets irgendetwas anzustarren."
  },
  {
    "id": 575,
    "name": "gothorita",
    "germanName": "Hypnomorba",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 55
    },
    "totalStats": 390,
    "height": 0.7,
    "weight": 18,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Manipulator-Pokémon",
    "flavorText": "Zieht seine Energie aus dem Sternenlicht. Bei Nacht bringt es Steine zum Schweben und bildet damit Sternzeichen nach."
  },
  {
    "id": 576,
    "name": "gothitelle",
    "germanName": "Morbitesse",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 110,
      "speed": 65
    },
    "totalStats": 490,
    "height": 1.5,
    "weight": 44,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gestirns-Pokémon",
    "flavorText": "Durch seine mächtigen Psycho-Kräfte krümmt sich der Raum und Bilder eines Lichtjahre entfernten Ortes erscheinen."
  },
  {
    "id": 577,
    "name": "solosis",
    "germanName": "Monozyto",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 40,
      "specialAttack": 105,
      "specialDefense": 50,
      "speed": 20
    },
    "totalStats": 290,
    "height": 0.3,
    "weight": 1,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zellen-Pokémon",
    "flavorText": "Die spezielle Flüssigkeit, die es umgibt, bietet ihm in jeder noch so gefährlichen Situation Schutz."
  },
  {
    "id": 578,
    "name": "duosion",
    "germanName": "Mitodos",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 40,
      "defense": 50,
      "specialAttack": 125,
      "specialDefense": 60,
      "speed": 30
    },
    "totalStats": 370,
    "height": 0.6,
    "weight": 8,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zellteilungs-Pokémon",
    "flavorText": "Wegen seines gespaltenen Denkapparates kann es vorkommen, dass es sich abrupt einer anderen Tätigkeit zuwendet."
  },
  {
    "id": 579,
    "name": "reuniclus",
    "germanName": "Zytomega",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "specialAttack": 125,
      "specialDefense": 85,
      "speed": 30
    },
    "totalStats": 490,
    "height": 1,
    "weight": 20.1,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vermehrungs-Pokémon",
    "flavorText": "Seine Arme bestehen aus einer speziellen Flüssigkeit. Dank seiner Psycho-Kräfte kann es mit ihnen Felsen zerschmettern."
  },
  {
    "id": 580,
    "name": "ducklett",
    "germanName": "Piccolente",
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 62,
      "attack": 44,
      "defense": 50,
      "specialAttack": 44,
      "specialDefense": 50,
      "speed": 55
    },
    "totalStats": 305,
    "height": 0.5,
    "weight": 5.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wasservogel",
    "flavorText": "Gerät es in Gefahr, versprüht es Wasser aus seinem Federkleid und nutzt den Sprühregen, um Reißaus zu nehmen."
  },
  {
    "id": 581,
    "name": "swanna",
    "germanName": "Swaroness",
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 87,
      "defense": 63,
      "specialAttack": 87,
      "specialDefense": 63,
      "speed": 98
    },
    "totalStats": 473,
    "height": 1.3,
    "weight": 24.2,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwan",
    "flavorText": "Sie wirken zerbrechlich, aber ihre starken Schwingen tragen sie in einem Stück bis zu 1 000 km weit."
  },
  {
    "id": 582,
    "name": "vanillite",
    "germanName": "Gelatini",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 36,
      "attack": 50,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 44
    },
    "totalStats": 305,
    "height": 0.4,
    "weight": 5.7,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Neuschnee-Pokémon",
    "flavorText": "Die Temperatur seines Odems liegt bei -50 °C. Es erzeugt Eiskristalle und lässt es in seiner Umgebung schneien."
  },
  {
    "id": 583,
    "name": "vanillish",
    "germanName": "Gelatroppo",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 51,
      "attack": 65,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 75,
      "speed": 59
    },
    "totalStats": 395,
    "height": 1.1,
    "weight": 41,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Firn-Pokémon",
    "flavorText": "Es produziert Eiskörner, indem es die Luft um sich herum abkühlt, und zieht mit ihnen eine Eisschicht um seinen Gegner."
  },
  {
    "id": 584,
    "name": "vanilluxe",
    "germanName": "Gelatwino",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 79
    },
    "totalStats": 535,
    "height": 1.3,
    "weight": 57.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schneesturm-Pokémon",
    "flavorText": "Bringt man beide Köpfe in Rage, stößt sein Horn heftige Eisböen aus, und alles in seiner Umgebung versinkt in Schnee."
  },
  {
    "id": 585,
    "name": "deerling",
    "germanName": "Sesokitz",
    "types": [
      "normal",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75
    },
    "totalStats": 335,
    "height": 0.6,
    "weight": 19.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Jahreszeit",
    "flavorText": "Unabhängig von der Jahreszeit ändert sich seine Farbe auch bei wechselnder Temperatur oder Luftfeuchtigkeit leicht."
  },
  {
    "id": 586,
    "name": "sawsbuck",
    "germanName": "Kronjuwild",
    "types": [
      "normal",
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 95
    },
    "totalStats": 475,
    "height": 1.9,
    "weight": 92.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Jahreszeit",
    "flavorText": "An seinem Geweih kann man ablesen, wann eine neue Jahreszeit beginnt. Sein Revier wechselt mit jeder neuen Jahreszeit."
  },
  {
    "id": 587,
    "name": "emolga",
    "germanName": "Emolga",
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 103
    },
    "totalStats": 428,
    "height": 0.4,
    "weight": 5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flughörnchen-Pokémon",
    "flavorText": "Lebt in den Wipfeln der Waldbäume. Während es durch die Lüfte gleitet, entlädt es Strom aus seinen Fluglappen."
  },
  {
    "id": 588,
    "name": "karrablast",
    "germanName": "Laukaps",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 60
    },
    "totalStats": 315,
    "height": 0.5,
    "weight": 5.9,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schnappbiss-Pokémon",
    "flavorText": "Ein mysteriöses Pokémon, das sich entwickelt, wenn es zusammen mit Schnuthelm einen Stromschlag abbekommt."
  },
  {
    "id": 589,
    "name": "escavalier",
    "germanName": "Cavalanzas",
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 105,
      "specialAttack": 60,
      "specialDefense": 105,
      "speed": 20
    },
    "totalStats": 495,
    "height": 1,
    "weight": 33,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kavallerie-Pokémon",
    "flavorText": "Eine von einem Schnuthelm gestohlene Muschel dient ihm als Helm. Es greift Gegner mit seinen beiden Lanzen an."
  },
  {
    "id": 590,
    "name": "foongus",
    "germanName": "Tarnpignon",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 69,
      "attack": 55,
      "defense": 45,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 15
    },
    "totalStats": 294,
    "height": 0.2,
    "weight": 1,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pilz-Pokémon",
    "flavorText": "Fällt ein Trainer auf sein Äußeres herein, das komischerweise einem Pokéball ähnelt, besprüht es ihn mit Giftsporen."
  },
  {
    "id": 591,
    "name": "amoonguss",
    "germanName": "Hutsassa",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 114,
      "attack": 85,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 80,
      "speed": 30
    },
    "totalStats": 464,
    "height": 0.6,
    "weight": 10.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pilz-Pokémon",
    "flavorText": "Um Beute anzulocken, bietet es seinen Hut feil, der einem Pokéball ähnelt. Doch kaum ein Pokémon fällt darauf herein."
  },
  {
    "id": 592,
    "name": "frillish",
    "germanName": "Quabbel",
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 40
    },
    "totalStats": 335,
    "height": 1.2,
    "weight": 33,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gleit-Pokémon",
    "flavorText": "Es lähmt seine Beute mit Gift und verschleppt sie in seinen Unterschlupf, 8 km unter dem Meeresspiegel."
  },
  {
    "id": 593,
    "name": "jellicent",
    "germanName": "Apoquallyp",
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 100,
      "attack": 60,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 60
    },
    "totalStats": 480,
    "height": 2.2,
    "weight": 135,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gleit-Pokémon",
    "flavorText": "Es heißt, am Meeresboden gebe es einen Palast aus Schiffen, die es versenkt hat. Es besteht fast nur aus Meerwasser."
  },
  {
    "id": 594,
    "name": "alomomola",
    "germanName": "Mamolida",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 165,
      "attack": 75,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 65
    },
    "totalStats": 470,
    "height": 1.2,
    "weight": 31.6,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fürsorge",
    "flavorText": "Es treibt durch den Ozean. Findet es ein verletztes Pokémon, nimmt es dieses auf und trägt es zurück an Land."
  },
  {
    "id": 595,
    "name": "joltik",
    "germanName": "Wattzapf",
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 50,
      "attack": 47,
      "defense": 50,
      "specialAttack": 57,
      "specialDefense": 50,
      "speed": 65
    },
    "totalStats": 319,
    "height": 0.1,
    "weight": 0.6,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kleben-Pokémon",
    "flavorText": "Da es selbst keinen Strom erzeugen kann, klettert es auf andere Pokémon, um ihnen elektrostatische Energie abzusaugen."
  },
  {
    "id": 596,
    "name": "galvantula",
    "germanName": "Voltula",
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 77,
      "defense": 60,
      "specialAttack": 97,
      "specialDefense": 60,
      "speed": 108
    },
    "totalStats": 472,
    "height": 0.8,
    "weight": 14.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stromspinnen-Pokémon",
    "flavorText": "Lässt seine Beute in elektrisch geladene Fäden tappen. Solang diese durch den Schock gelähmt ist, labt es sich an ihr."
  },
  {
    "id": 597,
    "name": "ferroseed",
    "germanName": "Kastadur",
    "types": [
      "grass",
      "steel"
    ],
    "stats": {
      "hp": 44,
      "attack": 50,
      "defense": 91,
      "specialAttack": 24,
      "specialDefense": 86,
      "speed": 10
    },
    "totalStats": 305,
    "height": 0.6,
    "weight": 18.8,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Dornfrucht-Pokémon",
    "flavorText": "Fühlt es sich bedroht, wehrt es sich, indem es eine großzügige Salve Dornen abfeuert."
  },
  {
    "id": 598,
    "name": "ferrothorn",
    "germanName": "Tentantel",
    "types": [
      "grass",
      "steel"
    ],
    "stats": {
      "hp": 74,
      "attack": 94,
      "defense": 131,
      "specialAttack": 54,
      "specialDefense": 116,
      "speed": 20
    },
    "totalStats": 489,
    "height": 1,
    "weight": 110,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Dornkugel-Pokémon",
    "flavorText": "Es macht mit Gegnern kurzen Prozess, indem es mit seinen drei Schlingen auf sie eindrischt und Dornen auf sie abfeuert."
  },
  {
    "id": 599,
    "name": "klink",
    "germanName": "Klikk",
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 60,
      "speed": 30
    },
    "totalStats": 300,
    "height": 0.3,
    "weight": 21,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Getriebe-Pokémon",
    "flavorText": "Es gewinnt lebenswichtige Energie, indem es seine zwei Einzelteile ineinander verzahnt und rotieren lässt."
  },
  {
    "id": 600,
    "name": "klang",
    "germanName": "Kliklak",
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 95,
      "specialAttack": 70,
      "specialDefense": 85,
      "speed": 50
    },
    "totalStats": 440,
    "height": 0.6,
    "weight": 51,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Getriebe-Pokémon",
    "flavorText": "Teilt Artgenossen seine Gefühlslage mit, indem es die Umlaufrichtung ändert. Wenn es wütend ist, dreht es sich schneller."
  },
  {
    "id": 601,
    "name": "klinklang",
    "germanName": "Klikdiklak",
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 115,
      "specialAttack": 70,
      "specialDefense": 85,
      "speed": 90
    },
    "totalStats": 520,
    "height": 0.6,
    "weight": 81,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Getriebe-Pokémon",
    "flavorText": "Indem es das Rad mit dem roten Zentrum mit hohem Tempo zum Rotieren bringt, kann es eine Turboladung durchführen."
  },
  {
    "id": 602,
    "name": "tynamo",
    "germanName": "Zapplardin",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 60
    },
    "totalStats": 275,
    "height": 0.2,
    "weight": 0.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stromfisch",
    "flavorText": "Allein erzeugt es nur wenig Strom, doch tritt es geschlossen im Schwarm auf, gleicht seine Kraft der eines Blitzes."
  },
  {
    "id": 603,
    "name": "eelektrik",
    "germanName": "Zapplalek",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 40
    },
    "totalStats": 405,
    "height": 1.2,
    "weight": 22,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stromfisch",
    "flavorText": "Schlingt sich um Gegner, lähmt sie über die rund gemaserten Flächen an seinem Körper mit Strom und beißt beherzt zu."
  },
  {
    "id": 604,
    "name": "eelektross",
    "germanName": "Zapplarang",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 80,
      "specialAttack": 105,
      "specialDefense": 80,
      "speed": 50
    },
    "totalStats": 515,
    "height": 2.1,
    "weight": 80.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stromfisch",
    "flavorText": "Mit dem Saugnapf an seinem Maul hakt es sich an seiner Beute fest und versetzt ihr über seine Fangzähne Stromschläge."
  },
  {
    "id": 605,
    "name": "elgyem",
    "germanName": "Pygraulon",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 55,
      "speed": 30
    },
    "totalStats": 335,
    "height": 0.5,
    "weight": 9,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Grips-Pokémon",
    "flavorText": "Es verfügt über mächtige Psycho-Kräfte, mit denen es die Hirne seiner Gegner verwirrt, um ihnen Kopfweh zu bereiten."
  },
  {
    "id": 606,
    "name": "beheeyem",
    "germanName": "Megalon",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 75,
      "specialAttack": 125,
      "specialDefense": 95,
      "speed": 40
    },
    "totalStats": 485,
    "height": 1,
    "weight": 34.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Grips-Pokémon",
    "flavorText": "Es spricht, indem es seine Fingerspitzen leuchten lässt, doch noch konnte der Code dahinter nicht entziffert werden."
  },
  {
    "id": 607,
    "name": "litwick",
    "germanName": "Lichtel",
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 30,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 20
    },
    "totalStats": 275,
    "height": 0.3,
    "weight": 3.1,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kerzen-Pokémon",
    "flavorText": "Es entzündet ein Licht und gibt vor, dem Gegner den Weg zu weisen, doch eigentlich saugt es ihm seine Lebensenergie ab."
  },
  {
    "id": 608,
    "name": "lampent",
    "germanName": "Laternecto",
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 55
    },
    "totalStats": 370,
    "height": 0.6,
    "weight": 13,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lampen-Pokémon",
    "flavorText": "Es nährt seine Flamme mit den Seelen seiner Opfer. Heutzutage irrt es auf der Suche nach Seelen durch Krankenhäuser."
  },
  {
    "id": 609,
    "name": "chandelure",
    "germanName": "Skelabra",
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "specialAttack": 145,
      "specialDefense": 90,
      "speed": 80
    },
    "totalStats": 520,
    "height": 1,
    "weight": 34.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Geleit-Pokémon",
    "flavorText": "Es saugt die Seele eines jeden auf, der in seinen Feuerkranz gerät, bis nur noch eine leere Hülle von ihm übrig ist."
  },
  {
    "id": 610,
    "name": "axew",
    "germanName": "Milza",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 46,
      "attack": 87,
      "defense": 60,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 57
    },
    "totalStats": 320,
    "height": 0.6,
    "weight": 18,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stoßzahn-Pokémon",
    "flavorText": "Es knackt mit seinen Hauern Nüsse. Brechen seine Fangzähne ab, wächst an ihrer Stelle ein stärkeres Ersatzpaar."
  },
  {
    "id": 611,
    "name": "fraxure",
    "germanName": "Sharfax",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 66,
      "attack": 117,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 67
    },
    "totalStats": 410,
    "height": 1,
    "weight": 36,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Beilkiefer-Pokémon",
    "flavorText": "Mit seinen Fängen kriegt es sogar Felsen klein. Gegen Artgenossen, die sein Revier passieren, geht es besonders hart vor."
  },
  {
    "id": 612,
    "name": "haxorus",
    "germanName": "Maxax",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 76,
      "attack": 147,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 97
    },
    "totalStats": 540,
    "height": 1.8,
    "weight": 105.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Beilkiefer-Pokémon",
    "flavorText": "Hat eine eher sanfte Natur, doch bei Eindringlingen kennt es keine Gnade. Seine Stoßzähne durchbohren sogar Eisen."
  },
  {
    "id": 613,
    "name": "cubchoo",
    "germanName": "Petznief",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 40
    },
    "totalStats": 305,
    "height": 0.5,
    "weight": 8.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisschollen-Pokémon",
    "flavorText": "Der Schleim, der stets aus seiner Nase hängt, treibt seine Attacken an. Zieht es ihn hoch, steht ein Angriff bevor."
  },
  {
    "id": 614,
    "name": "beartic",
    "germanName": "Siberio",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 50
    },
    "totalStats": 505,
    "height": 2.6,
    "weight": 260,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Packeis-Pokémon",
    "flavorText": "Es liebt die kalten Meere im Norden und überquert ihre Flächen auf Stegen, die es mit seinem gefrorenen Atem baut."
  },
  {
    "id": 615,
    "name": "cryogonal",
    "germanName": "Frigometri",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 50,
      "specialAttack": 95,
      "specialDefense": 135,
      "speed": 105
    },
    "totalStats": 515,
    "height": 1.1,
    "weight": 148,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kristall-Pokémon",
    "flavorText": "Es fängt seine Beute mit Ketten, die sich aus Eiskristallen zusammensetzen. Entstanden ist es aus einer Schneewolke."
  },
  {
    "id": 616,
    "name": "shelmet",
    "germanName": "Schnuthelm",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 85,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 25
    },
    "totalStats": 305,
    "height": 0.4,
    "weight": 7.7,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schnecken-Pokémon",
    "flavorText": "Hält sich ein Laukaps in seiner Nähe auf und kommen beide mit Strom in Berührung, entwickeln sie sich."
  },
  {
    "id": 617,
    "name": "accelgor",
    "germanName": "Hydragil",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 40,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 145
    },
    "totalStats": 495,
    "height": 0.8,
    "weight": 25.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Entschalungs-Pokémon",
    "flavorText": "Seit es die schwere Muschel abgestreift hat, ist es viel leichter. Nun gleichen seine Kampfbewegungen denen eines Ninja."
  },
  {
    "id": 618,
    "name": "stunfisk",
    "germanName": "Flunschlik",
    "types": [
      "ground",
      "electric"
    ],
    "stats": {
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "specialAttack": 81,
      "specialDefense": 99,
      "speed": 32
    },
    "totalStats": 471,
    "height": 0.7,
    "weight": 11,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Falle-Pokémon",
    "flavorText": "Dank seiner dicken Haut hält es selbst das Gewicht eines Sumoringers aus. Wenn es Stromschläge verteilt, grinst es."
  },
  {
    "id": 619,
    "name": "mienfoo",
    "germanName": "Lin-Fu",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 45,
      "attack": 85,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 50,
      "speed": 65
    },
    "totalStats": 350,
    "height": 0.9,
    "weight": 20,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kampfkünste-Pokémon",
    "flavorText": "Schnelle Angriffe sind seine Spezialität. Es gleicht seine Schwächen mit der Vielfalt seines Attackenrepertoires aus."
  },
  {
    "id": 620,
    "name": "mienshao",
    "germanName": "Wie-Shu",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 105
    },
    "totalStats": 510,
    "height": 1.4,
    "weight": 35.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kampfkünste-Pokémon",
    "flavorText": "Es benutzt das Fell an seinen Armen als Peitsche. Beide Arme bewegen sich dabei mit atemberaubender Geschwindigkeit."
  },
  {
    "id": 621,
    "name": "druddigon",
    "germanName": "Shardrago",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 77,
      "attack": 120,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 48
    },
    "totalStats": 485,
    "height": 1.6,
    "weight": 139,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Höhlen-Pokémon",
    "flavorText": "Es jagt durch enge Höhlengänge und spießt seine Gegner mit spitzen Klauen auf. Seine Kopfhaut ist fester als Stein."
  },
  {
    "id": 622,
    "name": "golett",
    "germanName": "Golbit",
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 59,
      "attack": 74,
      "defense": 50,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 35
    },
    "totalStats": 303,
    "height": 1,
    "weight": 92,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Urgolem-Pokémon",
    "flavorText": "Es wird durch eine Energie angetrieben, die seinem Körper entspringt. Keiner weiß jedoch, woher diese Energie stammt."
  },
  {
    "id": 623,
    "name": "golurk",
    "germanName": "Golgantes",
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 55
    },
    "totalStats": 483,
    "height": 2.8,
    "weight": 330,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Urgolem-Pokémon",
    "flavorText": "Man munkelt, sein Schöpfer habe ihm aufgetragen, schützend über Pokémon und Menschen zu wachen."
  },
  {
    "id": 624,
    "name": "pawniard",
    "germanName": "Gladiantri",
    "types": [
      "dark",
      "steel"
    ],
    "stats": {
      "hp": 45,
      "attack": 85,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 60
    },
    "totalStats": 340,
    "height": 0.5,
    "weight": 10.2,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stahlklingen-Pokémon",
    "flavorText": "Sein Körper ist mit Klingen übersät, die es an Felsen eines Flussbettes schärft, wenn sie im Kampf schartig werden."
  },
  {
    "id": 625,
    "name": "bisharp",
    "germanName": "Caesurio",
    "types": [
      "dark",
      "steel"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 70
    },
    "totalStats": 490,
    "height": 1.6,
    "weight": 70,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwertklingen-Pokémon",
    "flavorText": "Ein kaltblütiges Pokémon, das Gegner zunächst mit einer Schar von Gladiantri lähmt und dann zweiteilt."
  },
  {
    "id": 626,
    "name": "bouffalant",
    "germanName": "Bisofank",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 110,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 95,
      "speed": 55
    },
    "totalStats": 490,
    "height": 1.6,
    "weight": 94.6,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kopfstoßrind-Pokémon",
    "flavorText": "Rammt seine Gegner ohne Rücksicht auf Verluste mit dem Kopf und vermag damit sogar Züge zum Entgleisen zu bringen."
  },
  {
    "id": 627,
    "name": "rufflet",
    "germanName": "Geronimatz",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 83,
      "defense": 50,
      "specialAttack": 37,
      "specialDefense": 50,
      "speed": 60
    },
    "totalStats": 350,
    "height": 0.5,
    "weight": 10.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Adlerküken-Pokémon",
    "flavorText": "Kann mit seinen Füßen Nüsse zermalmen. Es stellt sich jedem noch so starken Gegner tapfer zum Kampf."
  },
  {
    "id": 628,
    "name": "braviary",
    "germanName": "Washakwil",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 100,
      "attack": 123,
      "defense": 75,
      "specialAttack": 57,
      "specialDefense": 75,
      "speed": 80
    },
    "totalStats": 510,
    "height": 1.5,
    "weight": 41,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kühnheits-Pokémon",
    "flavorText": "Ein tapferer Krieger der Lüfte, der zum Schutz seiner Kameraden auch mit Verletzungen immer weiterkämpft."
  },
  {
    "id": 629,
    "name": "vullaby",
    "germanName": "Skallyk",
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 75,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 60
    },
    "totalStats": 370,
    "height": 0.5,
    "weight": 9,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Windel-Pokémon",
    "flavorText": "Seine Flügel sind noch zu klein zum Fliegen. Kurz bevor es sich entwickelt, wirft es seine Schädelwindel ab."
  },
  {
    "id": 630,
    "name": "mandibuzz",
    "germanName": "Grypheldis",
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 105,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 80
    },
    "totalStats": 510,
    "height": 1.2,
    "weight": 39.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Knochenadler-Pokémon",
    "flavorText": "Es kreist am Himmel, bis es seine Beute findet. Nach erfolgtem Angriff trägt es sie mühelos zu seinem Nest."
  },
  {
    "id": 631,
    "name": "heatmor",
    "germanName": "Furnifraß",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 85,
      "attack": 97,
      "defense": 66,
      "specialAttack": 105,
      "specialDefense": 66,
      "speed": 65
    },
    "totalStats": 484,
    "height": 1.4,
    "weight": 58,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ameisenbären-Pokémon",
    "flavorText": "Mit seiner brandheißen Zunge bringt es Fermicula zum Schmelzen, um so an sein weiches Inneres zu gelangen."
  },
  {
    "id": 632,
    "name": "durant",
    "germanName": "Fermicula",
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 58,
      "attack": 109,
      "defense": 112,
      "specialAttack": 48,
      "specialDefense": 48,
      "speed": 109
    },
    "totalStats": 484,
    "height": 0.3,
    "weight": 33,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisenameisen-Pokémon",
    "flavorText": "Eine ausgeklügelte Rollenverteilung hilft ihnen dabei, ihren natürlichen Feind Furnifraß aus dem Nest zu verjagen."
  },
  {
    "id": 633,
    "name": "deino",
    "germanName": "Kapuno",
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 52,
      "attack": 65,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 38
    },
    "totalStats": 300,
    "height": 0.8,
    "weight": 17.3,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Haudrauf-Pokémon",
    "flavorText": "Da es nichts sehen kann, sucht es seine Umgebung mit Rempel- und Bissattacken ab und ist immer mit Wunden übersät."
  },
  {
    "id": 634,
    "name": "zweilous",
    "germanName": "Duodino",
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 72,
      "attack": 85,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 58
    },
    "totalStats": 420,
    "height": 1.4,
    "weight": 50,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Grobheits-Pokémon",
    "flavorText": "Seine zwei Köpfe sind sich spinnefeind. Beide versuchen, über Fresswettbewerbe die Oberhand zu gewinnen."
  },
  {
    "id": 635,
    "name": "hydreigon",
    "germanName": "Trikephalo",
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 98
    },
    "totalStats": 600,
    "height": 1.8,
    "weight": 160,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Brutal-Pokémon",
    "flavorText": "Die Köpfe an seinen beiden Armen haben kein eigenes Gehirn. Seine drei Mäuler kauen alles radikal kurz und klein."
  },
  {
    "id": 636,
    "name": "larvesta",
    "germanName": "Ignivor",
    "types": [
      "bug",
      "fire"
    ],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 55,
      "speed": 60
    },
    "totalStats": 360,
    "height": 1.1,
    "weight": 28.8,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fackel-Pokémon",
    "flavorText": "Es heißt, es sei ein Produkt der Sonne. Wenn es sich entwickelt, hüllt es sich in Flammen, die es aus seinen Hörnern bläst."
  },
  {
    "id": 637,
    "name": "volcarona",
    "germanName": "Ramoth",
    "types": [
      "bug",
      "fire"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "specialAttack": 135,
      "specialDefense": 105,
      "speed": 100
    },
    "totalStats": 550,
    "height": 1.6,
    "weight": 46,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sonnen-Pokémon",
    "flavorText": "Schüttelt sich glühenden Staub aus seinen sechs Flügeln und verwandelt das Umfeld in ein einziges Meer aus Flammen."
  },
  {
    "id": 638,
    "name": "cobalion",
    "germanName": "Kobalium",
    "types": [
      "steel",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 129,
      "specialAttack": 90,
      "specialDefense": 72,
      "speed": 108
    },
    "totalStats": 580,
    "height": 2.1,
    "weight": 250,
    "generation": 5,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Eisenkern-Pokémon",
    "flavorText": "Sein Körper und sein Herz sind aus Stahl. Ein böser Blick genügt und selbst die wildesten Pokémon unterwerfen sich ihm."
  },
  {
    "id": 639,
    "name": "terrakion",
    "germanName": "Terrakium",
    "types": [
      "rock",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 129,
      "defense": 90,
      "specialAttack": 72,
      "specialDefense": 90,
      "speed": 108
    },
    "totalStats": 580,
    "height": 1.9,
    "weight": 260,
    "generation": 5,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Felsenhöhlen-Pokémon",
    "flavorText": "Seine Angriffskraft genügt, um selbst mächtige Wälle niederzureißen. Ein Held zahlreicher Legenden."
  },
  {
    "id": 640,
    "name": "virizion",
    "germanName": "Viridium",
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 72,
      "specialAttack": 90,
      "specialDefense": 129,
      "speed": 108
    },
    "totalStats": 580,
    "height": 2,
    "weight": 200,
    "generation": 5,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Wiesen-Pokémon",
    "flavorText": "Das Horn an seinem Kopf ist eine scharfe Klinge. Neckt seine Gegner mit quirligen Bewegungen und greift blitzartig an."
  },
  {
    "id": 641,
    "name": "tornadus-incarnate",
    "germanName": "Boreos",
    "types": [
      "flying"
    ],
    "stats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 111
    },
    "totalStats": 580,
    "height": 1.5,
    "weight": 63,
    "generation": 5,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Wirbelsturm-Pokémon",
    "flavorText": "Sein Unterkörper ist in eine wolkenartige Energieschicht gehüllt. Es jagt mit bis zu 300 km/h durch die Lüfte."
  },
  {
    "id": 642,
    "name": "thundurus-incarnate",
    "germanName": "Voltolos",
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 111
    },
    "totalStats": 580,
    "height": 1.5,
    "weight": 61,
    "generation": 5,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Torpedo-Pokémon",
    "flavorText": "Es greift mit elektrischer Ladung aus den Dornen seiner Rute an und bombardiert Einall aus der Luft mit Blitzen."
  },
  {
    "id": 643,
    "name": "reshiram",
    "germanName": "Reshiram",
    "types": [
      "dragon",
      "fire"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 100,
      "specialAttack": 150,
      "specialDefense": 120,
      "speed": 90
    },
    "totalStats": 680,
    "height": 3.2,
    "weight": 330,
    "generation": 5,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Wahres Weiß-Pokémon",
    "flavorText": "Ein Legendäres Pokémon mit der Macht, die Welt mit seinen Flammen einzuäschern. Hilft allen, die nach Wirklichkeit streben."
  },
  {
    "id": 644,
    "name": "zekrom",
    "germanName": "Zekrom",
    "types": [
      "dragon",
      "electric"
    ],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 120,
      "specialAttack": 120,
      "specialDefense": 100,
      "speed": 90
    },
    "totalStats": 680,
    "height": 2.9,
    "weight": 345,
    "generation": 5,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Reines Schwarz-Pokémon",
    "flavorText": "Ein Legendäres Pokémon mit der Macht, die Welt durch Donner einzuäschern. Hilft allen, die einer Welt der Wünsche harren."
  },
  {
    "id": 645,
    "name": "landorus-incarnate",
    "germanName": "Demeteros",
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 89,
      "attack": 125,
      "defense": 90,
      "specialAttack": 115,
      "specialDefense": 80,
      "speed": 101
    },
    "totalStats": 600,
    "height": 1.5,
    "weight": 68,
    "generation": 5,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Reichtums-Pokémon",
    "flavorText": "Da an Orten, wo es sich blicken lässt, mit reicher Ernte zu rechnen ist, nennt man es auch den „Herrn des Ackerbaus“."
  },
  {
    "id": 646,
    "name": "kyurem",
    "germanName": "Kyurem",
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 125,
      "attack": 130,
      "defense": 90,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 95
    },
    "totalStats": 660,
    "height": 3,
    "weight": 325,
    "generation": 5,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Schwellen-Pokémon",
    "flavorText": "Ein Legendäres Eis-Pokémon, das auf den Helden wartet, der seinen verstümmelten Körper mit Wunsch und Wirklichkeit heilt."
  },
  {
    "id": 647,
    "name": "keldeo-ordinary",
    "germanName": "Keldeo",
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 72,
      "defense": 90,
      "specialAttack": 129,
      "specialDefense": 90,
      "speed": 108
    },
    "totalStats": 580,
    "height": 1.4,
    "weight": 48.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Fohlen-Pokémon",
    "flavorText": "Es kann auf dem Wasser laufen und reist auf Flüssen und Meeren um die Welt. Zu sehen in malerischen Küstengebieten."
  },
  {
    "id": 648,
    "name": "meloetta-aria",
    "germanName": "Meloetta",
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 77,
      "defense": 77,
      "specialAttack": 128,
      "specialDefense": 128,
      "speed": 90
    },
    "totalStats": 600,
    "height": 0.6,
    "weight": 6.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Melodie",
    "flavorText": "Es besitzt die Macht, Pokémon, die sich in seiner Nähe aufhalten, mit seinen Melodien froh oder traurig zu stimmen."
  },
  {
    "id": 649,
    "name": "genesect",
    "germanName": "Genesect",
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 71,
      "attack": 120,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 99
    },
    "totalStats": 600,
    "height": 1.5,
    "weight": 82.5,
    "generation": 5,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Paläozoikums-Pokémon",
    "flavorText": "Ein von Team Plasma modifiziertes Käfer-Pokémon aus dem Altertum. Die Kanone auf seinem Rücken ist nun noch stärker."
  },
  {
    "id": 650,
    "name": "chespin",
    "germanName": "Igamaro",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 56,
      "attack": 61,
      "defense": 65,
      "specialAttack": 48,
      "specialDefense": 45,
      "speed": 38
    },
    "totalStats": 313,
    "height": 0.4,
    "weight": 9,
    "generation": 6,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stachelkopf",
    "flavorText": "Wenn es seine Kraft auf die sonst eher weichen Stacheln auf seinem Kopf konzentriert, werden diese robust genug, um damit Steine zu zertrümmern."
  },
  {
    "id": 651,
    "name": "quilladin",
    "germanName": "Igastarnish",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 61,
      "attack": 78,
      "defense": 95,
      "specialAttack": 56,
      "specialDefense": 58,
      "speed": 57
    },
    "totalStats": 405,
    "height": 0.7,
    "weight": 29,
    "generation": 6,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Spitzpanzer",
    "flavorText": "Der Panzer, der seinen Körper umgibt, bietet ihm Schutz vor Angreifern und straft direkte Angriffe postwendend mit spitzen Stacheln ab."
  },
  {
    "id": 652,
    "name": "chesnaught",
    "germanName": "Brigaron",
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "specialAttack": 74,
      "specialDefense": 75,
      "speed": 64
    },
    "totalStats": 530,
    "height": 1.6,
    "weight": 90,
    "generation": 6,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Spitzpanzer",
    "flavorText": "Es ist so stark, dass es selbst 50 t schwere Panzer umkippen kann. Es schützt seine Artgenossen, indem es sich ihnen als Schild anbietet."
  },
  {
    "id": 653,
    "name": "fennekin",
    "germanName": "Fynx",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 60,
      "speed": 60
    },
    "totalStats": 307,
    "height": 0.4,
    "weight": 9.4,
    "generation": 6,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fuchs",
    "flavorText": "Wenn es Zweige frisst, fasst es neue Kraft und stößt über seine Ohren über 200 °C heiße Luft aus."
  },
  {
    "id": 654,
    "name": "braixen",
    "germanName": "Rutena",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 59,
      "attack": 59,
      "defense": 58,
      "specialAttack": 90,
      "specialDefense": 70,
      "speed": 73
    },
    "totalStats": 409,
    "height": 1,
    "weight": 14.5,
    "generation": 6,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fuchs",
    "flavorText": "In seinem Schweif steckt ein Zweig, den es bei Bedarf mit der Reibungswärme seiner Schweifhaare anzündet und im Kampf einsetzt."
  },
  {
    "id": 655,
    "name": "delphox",
    "germanName": "Fennexis",
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "specialAttack": 114,
      "specialDefense": 100,
      "speed": 104
    },
    "totalStats": 534,
    "height": 1.5,
    "weight": 39,
    "generation": 6,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fuchs",
    "flavorText": "Es kann die Zukunft vorhersehen, indem es konzentriert in die Flamme an der Spitze seines Zweiges blickt."
  },
  {
    "id": 656,
    "name": "froakie",
    "germanName": "Froxy",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 41,
      "attack": 56,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 44,
      "speed": 71
    },
    "totalStats": 314,
    "height": 0.3,
    "weight": 7,
    "generation": 6,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blubbfrosch",
    "flavorText": "Es stößt aus Brust und Rücken elastische Blasen aus, mit denen es gegnerische Angriffe abfängt und so den erlittenen Schaden verringert."
  },
  {
    "id": 657,
    "name": "frogadier",
    "germanName": "Amphizel",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 54,
      "attack": 63,
      "defense": 52,
      "specialAttack": 83,
      "specialDefense": 56,
      "speed": 97
    },
    "totalStats": 405,
    "height": 0.6,
    "weight": 10.9,
    "generation": 6,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blubbfrosch",
    "flavorText": "Es kann kleine in Blasen gehüllte Steine mit solcher Präzision werfen, dass es selbst 30 m entfernte Dosen problemlos trifft."
  },
  {
    "id": 658,
    "name": "greninja",
    "germanName": "Quajutsu",
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "specialAttack": 103,
      "specialDefense": 71,
      "speed": 122
    },
    "totalStats": 530,
    "height": 1.5,
    "weight": 40,
    "generation": 6,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ninja",
    "flavorText": "Es stellt Wurfsterne aus komprimiertem Wasser her, die durch ihre hohe Drehgeschwindigkeit beim Werfen sogar Metall durchtrennen."
  },
  {
    "id": 659,
    "name": "bunnelby",
    "germanName": "Scoppel",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 38,
      "attack": 36,
      "defense": 38,
      "specialAttack": 32,
      "specialDefense": 36,
      "speed": 57
    },
    "totalStats": 237,
    "height": 0.4,
    "weight": 5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Baugräber-Pokémon",
    "flavorText": "Mit seinen großen Ohren schaufelt es sich einen Bau. Es kann die ganze Nacht ohne Pause durchschaufeln."
  },
  {
    "id": 660,
    "name": "diggersby",
    "germanName": "Grebbit",
    "types": [
      "normal",
      "ground"
    ],
    "stats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "specialAttack": 50,
      "specialDefense": 77,
      "speed": 78
    },
    "totalStats": 423,
    "height": 1,
    "weight": 42.4,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Baugräber-Pokémon",
    "flavorText": "Seine großen Ohren besitzen die Kraft, selbst Felsen, die 1 t schwer sind, mühelos hochzuheben. Es wird daher oft auf Baustellen eingesetzt."
  },
  {
    "id": 661,
    "name": "fletchling",
    "germanName": "Dartiri",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 43,
      "specialAttack": 40,
      "specialDefense": 38,
      "speed": 62
    },
    "totalStats": 278,
    "height": 0.3,
    "weight": 1.7,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rotkehlchen-Pokémon",
    "flavorText": "Ein sehr zutrauliches Pokémon. Durch Zwitschern und Bewegen der Schwanzfedern sendet es Signale an seine Gefährten."
  },
  {
    "id": 662,
    "name": "fletchinder",
    "germanName": "Dartignis",
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 62,
      "attack": 73,
      "defense": 55,
      "specialAttack": 56,
      "specialDefense": 52,
      "speed": 84
    },
    "totalStats": 382,
    "height": 0.7,
    "weight": 16,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Funkenregen-Pokémon",
    "flavorText": "Es speit Funken aus seinem Schnabel und fängt die Beute, die überrascht aus dem angesengten Gras hervorspringt."
  },
  {
    "id": 663,
    "name": "talonflame",
    "germanName": "Fiaro",
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "specialAttack": 74,
      "specialDefense": 69,
      "speed": 126
    },
    "totalStats": 499,
    "height": 1.2,
    "weight": 24.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stichflammen-Pokémon",
    "flavorText": "Die Aufregung eines harten Kampfes veranlasst es dazu, im Flug Funken aus den Zwischenräumen seines Gefieders zu sprühen."
  },
  {
    "id": 664,
    "name": "scatterbug",
    "germanName": "Purmel",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 38,
      "attack": 35,
      "defense": 40,
      "specialAttack": 27,
      "specialDefense": 25,
      "speed": 35
    },
    "totalStats": 200,
    "height": 0.3,
    "weight": 2.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Puderinsekt",
    "flavorText": "Wird es von einem fliegenden Pokémon angegriffen, verstreut es schwarzen Puder. Der giftige Puder löst bei Berührung Paralyse aus."
  },
  {
    "id": 665,
    "name": "spewpa",
    "germanName": "Puponcho",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 22,
      "defense": 60,
      "specialAttack": 27,
      "specialDefense": 30,
      "speed": 29
    },
    "totalStats": 213,
    "height": 0.3,
    "weight": 8.4,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Puderinsekt",
    "flavorText": "Es lebt versteckt im schattigen Dickicht. Wird es von einem Feind angegriffen, stellt es sein Fell zur Abschreckung zu scharfen Spitzen auf."
  },
  {
    "id": 666,
    "name": "vivillon",
    "germanName": "Vivillon",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 50,
      "speed": 89
    },
    "totalStats": 411,
    "height": 1.2,
    "weight": 17,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flügelstaub",
    "flavorText": "Vivillon kommen weltweit mit den unterschiedlichsten Musterungen vor. Das Klima ihres Habitats hat Einfluss auf ihre Flügelmusterung."
  },
  {
    "id": 667,
    "name": "litleo",
    "germanName": "Leufeo",
    "types": [
      "fire",
      "normal"
    ],
    "stats": {
      "hp": 62,
      "attack": 50,
      "defense": 58,
      "specialAttack": 73,
      "specialDefense": 54,
      "speed": 72
    },
    "totalStats": 369,
    "height": 0.6,
    "weight": 13.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Junglöwe",
    "flavorText": "Je stärker sein Gegner ist, desto heißer wird seine Mähne und umso kraftvoller wird es."
  },
  {
    "id": 668,
    "name": "pyroar",
    "germanName": "Pyroleo",
    "types": [
      "fire",
      "normal"
    ],
    "stats": {
      "hp": 86,
      "attack": 68,
      "defense": 72,
      "specialAttack": 109,
      "specialDefense": 66,
      "speed": 106
    },
    "totalStats": 507,
    "height": 1.5,
    "weight": 81.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Monarch",
    "flavorText": "Das Männchen mit der prächtigsten Feuermähne führt das Rudel an."
  },
  {
    "id": 669,
    "name": "flabebe",
    "germanName": "Flabébé",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 44,
      "attack": 38,
      "defense": 39,
      "specialAttack": 61,
      "specialDefense": 79,
      "speed": 42
    },
    "totalStats": 303,
    "height": 0.1,
    "weight": 0.1,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Einblütler",
    "flavorText": "Die Krone auf seinem Kopf hat es sich aus Pollen von Blumen gebastelt. Sie besitzt eine heilende Wirkung."
  },
  {
    "id": 670,
    "name": "floette",
    "germanName": "Floette",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "specialAttack": 75,
      "specialDefense": 98,
      "speed": 52
    },
    "totalStats": 371,
    "height": 0.2,
    "weight": 0.9,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Einblütler",
    "flavorText": "Es fliegt auf Wiesen umher und kümmert sich um welkende Blumen. Es setzt deren geheime Kräfte frei und nutzt diese zum Kämpfen."
  },
  {
    "id": 671,
    "name": "florges",
    "germanName": "Florges",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 78,
      "attack": 65,
      "defense": 68,
      "specialAttack": 112,
      "specialDefense": 154,
      "speed": 75
    },
    "totalStats": 552,
    "height": 1.1,
    "weight": 10,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Garten",
    "flavorText": "Wunderschöne Blumengärten sind sein Revier. Es badet in der von blühenden Blumen freigesetzten Energie und zieht daraus seine Kraft."
  },
  {
    "id": 672,
    "name": "skiddo",
    "germanName": "Mähikel",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 66,
      "attack": 65,
      "defense": 48,
      "specialAttack": 62,
      "specialDefense": 57,
      "speed": 52
    },
    "totalStats": 350,
    "height": 0.9,
    "weight": 31,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ritt",
    "flavorText": "Man sagt, es sei eines der ersten Pokémon, die mit Menschen zusammengelebt haben. Es ist sehr ruhig und friedfertig."
  },
  {
    "id": 673,
    "name": "gogoat",
    "germanName": "Chevrumm",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 123,
      "attack": 100,
      "defense": 62,
      "specialAttack": 97,
      "specialDefense": 81,
      "speed": 68
    },
    "totalStats": 531,
    "height": 1.7,
    "weight": 91,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ritt",
    "flavorText": "Es kann die Stimmung seines Trainers an der kleinsten Veränderung dessen Griffes um seine Hörner ablesen und galoppiert sofort los, wenn dieser es wünscht."
  },
  {
    "id": 674,
    "name": "pancham",
    "germanName": "Pam-Pam",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 67,
      "attack": 82,
      "defense": 62,
      "specialAttack": 46,
      "specialDefense": 48,
      "speed": 43
    },
    "totalStats": 348,
    "height": 0.6,
    "weight": 8,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Verspielt-Pokémon",
    "flavorText": "Es starrt den Gegner finster an, um nicht unterschätzt zu werden, hat aber nur wenig Erfolg damit. Das Kauen auf einem Blatt ist sein Markenzeichen."
  },
  {
    "id": 675,
    "name": "pangoro",
    "germanName": "Pandagro",
    "types": [
      "fighting",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "specialAttack": 69,
      "specialDefense": 71,
      "speed": 58
    },
    "totalStats": 495,
    "height": 2.1,
    "weight": 136,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gaunerblick-Pokémon",
    "flavorText": "Es ist sehr grob und streitlustig, lässt es aber nicht zu, dass Schwächere gemobbt werden. Mit seinem Blatt erspürt es die Bewegungen des Gegners."
  },
  {
    "id": 676,
    "name": "furfrou",
    "germanName": "Coiffwaff",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 90,
      "speed": 102
    },
    "totalStats": 472,
    "height": 1.2,
    "weight": 28,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pudel",
    "flavorText": "Schneidet man sein Fell zurecht, wird es nicht nur schöner, sondern auch beweglicher."
  },
  {
    "id": 677,
    "name": "espurr",
    "germanName": "Psiau",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 62,
      "attack": 48,
      "defense": 54,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 68
    },
    "totalStats": 355,
    "height": 0.3,
    "weight": 3.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zügelungs-Pokémon",
    "flavorText": "Damit die starken Psycho-Kräfte dieses Pokémon nicht unkontrolliert nach außen dringen, ist das Organ, das diese freisetzt, von seinen Ohren bedeckt."
  },
  {
    "id": 678,
    "name": "meowstic-male",
    "germanName": "Psiaugon",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "specialAttack": 83,
      "specialDefense": 81,
      "speed": 104
    },
    "totalStats": 466,
    "height": 0.6,
    "weight": 8.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fassungs-Pokémon",
    "flavorText": "In Gefahrensituationen hebt es seine Ohren an und setzt Psycho-Kräfte frei, die einen 10 t schweren LKW zu Schrott verarbeiten können."
  },
  {
    "id": 679,
    "name": "honedge",
    "germanName": "Gramokles",
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 45,
      "attack": 80,
      "defense": 100,
      "specialAttack": 35,
      "specialDefense": 37,
      "speed": 28
    },
    "totalStats": 325,
    "height": 0.8,
    "weight": 2,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Klingenkraft-Pokémon",
    "flavorText": "Dieses Pokémon wird geboren, wenn die Seele eines Verstorbenen sich in einem Schwert festsetzt. Es heftet sich an Menschen und saugt deren Lebenskraft aus."
  },
  {
    "id": 680,
    "name": "doublade",
    "germanName": "Duokles",
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 59,
      "attack": 110,
      "defense": 150,
      "specialAttack": 45,
      "specialDefense": 49,
      "speed": 35
    },
    "totalStats": 448,
    "height": 0.8,
    "weight": 4.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Klingenkraft-Pokémon",
    "flavorText": "Bei seiner Entwicklung hat es sich in zwei Schwerter geteilt. Es begegnet seinen Gegnern mit Attacken, die es mittels Telepathie koordiniert."
  },
  {
    "id": 681,
    "name": "aegislash-shield",
    "germanName": "Durengard",
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "specialAttack": 50,
      "specialDefense": 140,
      "speed": 60
    },
    "totalStats": 500,
    "height": 1.7,
    "weight": 53,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Königsklingen-Pokémon",
    "flavorText": "Generationen von Königen hatten dieses Pokémon an ihrer Seite. Mit seiner mysteriösen Kraft kann es Menschen und Pokémon gleichermaßen kontrollieren."
  },
  {
    "id": 682,
    "name": "spritzee",
    "germanName": "Parfi",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 78,
      "attack": 52,
      "defense": 60,
      "specialAttack": 63,
      "specialDefense": 65,
      "speed": 23
    },
    "totalStats": 341,
    "height": 0.2,
    "weight": 0.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Parfüm-Pokémon",
    "flavorText": "Der von ihm verströmte Duft verzückt jeden, der ihn riecht. Je nachdem, was es frisst, ändert sich sein Duft."
  },
  {
    "id": 683,
    "name": "aromatisse",
    "germanName": "Parfinesse",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "specialAttack": 99,
      "specialDefense": 89,
      "speed": 29
    },
    "totalStats": 462,
    "height": 0.8,
    "weight": 15.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Duft-Pokémon",
    "flavorText": "Es produziert verschiedene Düfte. Im Kampf verschafft es sich einen Vorteil, indem es einen Duft verströmt, der dem Gegner zuwider ist."
  },
  {
    "id": 684,
    "name": "swirlix",
    "germanName": "Flauschling",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 62,
      "attack": 48,
      "defense": 66,
      "specialAttack": 59,
      "specialDefense": 57,
      "speed": 49
    },
    "totalStats": 341,
    "height": 0.4,
    "weight": 3.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zuckerwatte-Pokémon",
    "flavorText": "Es stößt weiße Fäden aus, die so süß und klebrig wie Zuckerwatte sind. Mit ihnen umwickelt es den Gegner und hindert ihn daran, sich zu bewegen."
  },
  {
    "id": 685,
    "name": "slurpuff",
    "germanName": "Sabbaione",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 72
    },
    "totalStats": 480,
    "height": 0.8,
    "weight": 5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schlagsahne-Pokémon",
    "flavorText": "Es verfügt über einen feinen Geruchssinn, mit dem es selbst die schwächsten Gerüche erkennen kann. Es hilft deshalb oft in Konditoreien aus."
  },
  {
    "id": 686,
    "name": "inkay",
    "germanName": "Iscalar",
    "types": [
      "dark",
      "psychic"
    ],
    "stats": {
      "hp": 53,
      "attack": 54,
      "defense": 53,
      "specialAttack": 37,
      "specialDefense": 46,
      "speed": 45
    },
    "totalStats": 288,
    "height": 0.4,
    "weight": 3.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rotations-Pokémon",
    "flavorText": "Gegner, die auf die blinkenden Punkte an seinem Körper blicken, werden geblendet und verlieren den Willen zu kämpfen."
  },
  {
    "id": 687,
    "name": "malamar",
    "germanName": "Calamanero",
    "types": [
      "dark",
      "psychic"
    ],
    "stats": {
      "hp": 86,
      "attack": 92,
      "defense": 88,
      "specialAttack": 68,
      "specialDefense": 75,
      "speed": 73
    },
    "totalStats": 482,
    "height": 1.5,
    "weight": 47,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Inversions-Pokémon",
    "flavorText": "Unter allen Pokémon verfügt es über die stärksten hypnotischen Kräfte, mit denen es Gegner nach Belieben kontrollieren kann."
  },
  {
    "id": 688,
    "name": "binacle",
    "germanName": "Bithora",
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 42,
      "attack": 52,
      "defense": 67,
      "specialAttack": 39,
      "specialDefense": 56,
      "speed": 50
    },
    "totalStats": 306,
    "height": 0.5,
    "weight": 31,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Krallenduo-Pokémon",
    "flavorText": "Bithora bewohnen jeweils zu zweit einen Felsen. Entzweien sie sich im Streit, sucht sich eines der beiden einen neuen Felsen als Unterkunft."
  },
  {
    "id": 689,
    "name": "barbaracle",
    "germanName": "Thanathora",
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 72,
      "attack": 105,
      "defense": 115,
      "specialAttack": 54,
      "specialDefense": 86,
      "speed": 68
    },
    "totalStats": 500,
    "height": 1.3,
    "weight": 96,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ballungs-Pokémon",
    "flavorText": "Es entsteht bei der entwicklungsbedingten Aufspaltung der beiden Bithora in sieben Vertreter ihrer Art. Gemeinsam verfügen sie über die siebenfache Stärke."
  },
  {
    "id": 690,
    "name": "skrelp",
    "germanName": "Algitt",
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 30
    },
    "totalStats": 320,
    "height": 0.5,
    "weight": 7.3,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tangmimikry-Pokémon",
    "flavorText": "Als verfaulter Seetang getarnt, lauert es auf Beute und bespritzt alles und jeden, der sich ahnungslos nähert, mit flüssigem Gift, bevor es ihm den Rest gibt."
  },
  {
    "id": 691,
    "name": "dragalge",
    "germanName": "Tandrak",
    "types": [
      "poison",
      "dragon"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 90,
      "specialAttack": 97,
      "specialDefense": 123,
      "speed": 44
    },
    "totalStats": 494,
    "height": 1.8,
    "weight": 81.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tangmimikry-Pokémon",
    "flavorText": "Das Gift, mit dem es Eindringlinge in seinem Revier bespritzt, ist ätzend genug, um sich durch den Stahl eines Tankschiffes zu fressen."
  },
  {
    "id": 692,
    "name": "clauncher",
    "germanName": "Scampisto",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "specialAttack": 58,
      "specialDefense": 63,
      "speed": 44
    },
    "totalStats": 330,
    "height": 0.5,
    "weight": 8.3,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Aquapistolen-Pokémon",
    "flavorText": "Mit Salven komprimierten Wassers, die es wie Pistolenkugeln aus seinen Scheren abfeuert, schießt es fliegende Beute ab."
  },
  {
    "id": 693,
    "name": "clawitzer",
    "germanName": "Wummer",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "specialAttack": 120,
      "specialDefense": 89,
      "speed": 59
    },
    "totalStats": 500,
    "height": 1.3,
    "weight": 35.3,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Aquawummen-Pokémon",
    "flavorText": "Aus seinen gewaltigen Scheren feuert es mächtige Wassergeschosse ab, die selbst den Rumpf eines Tankschiffes durchdringen."
  },
  {
    "id": 694,
    "name": "helioptile",
    "germanName": "Eguana",
    "types": [
      "electric",
      "normal"
    ],
    "stats": {
      "hp": 44,
      "attack": 38,
      "defense": 33,
      "specialAttack": 61,
      "specialDefense": 43,
      "speed": 70
    },
    "totalStats": 289,
    "height": 0.5,
    "weight": 6,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Generatoren-Pokémon",
    "flavorText": "Es ist in der Wüste zu Hause und wandelt die Energie der Sonne in Körperkraft um, wodurch es auch ohne Nahrung auskommt."
  },
  {
    "id": 695,
    "name": "heliolisk",
    "germanName": "Elezard",
    "types": [
      "electric",
      "normal"
    ],
    "stats": {
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "specialAttack": 109,
      "specialDefense": 94,
      "speed": 109
    },
    "totalStats": 481,
    "height": 1,
    "weight": 21,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Generatoren-Pokémon",
    "flavorText": "Die Strommenge, die ein Elezard mit ausgebreiteten Hautlappen durch Umwandlung von Sonnenstrahlen erzeugt, genügt zur Versorgung eines Wolkenkratzers."
  },
  {
    "id": 696,
    "name": "tyrunt",
    "germanName": "Balgoras",
    "types": [
      "rock",
      "dragon"
    ],
    "stats": {
      "hp": 58,
      "attack": 89,
      "defense": 77,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 48
    },
    "totalStats": 362,
    "height": 0.8,
    "weight": 26,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kronprinz-Pokémon",
    "flavorText": "Dieses Pokémon wurde aus einem Fossil neu belebt. Missfällt ihm etwas, rastet es vollkommen aus."
  },
  {
    "id": 697,
    "name": "tyrantrum",
    "germanName": "Monargoras",
    "types": [
      "rock",
      "dragon"
    ],
    "stats": {
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "specialAttack": 69,
      "specialDefense": 59,
      "speed": 71
    },
    "totalStats": 521,
    "height": 2.5,
    "weight": 270,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tyrannen-Pokémon",
    "flavorText": "Aufgrund der Zerstörungskraft seines Kiefers, der Stahl zerreißen kann, als wäre es Papier, galt es in seiner Zeit als unbesiegbar."
  },
  {
    "id": 698,
    "name": "amaura",
    "germanName": "Amarino",
    "types": [
      "rock",
      "ice"
    ],
    "stats": {
      "hp": 77,
      "attack": 59,
      "defense": 50,
      "specialAttack": 67,
      "specialDefense": 63,
      "speed": 46
    },
    "totalStats": 362,
    "height": 1.3,
    "weight": 25.2,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tundra-Pokémon",
    "flavorText": "Dieses antike Pokémon wurde aus Teilen seines Körpers neu belebt, die 100 Millionen Jahre lang im ewigen Eis geschlummert hatten."
  },
  {
    "id": 699,
    "name": "aurorus",
    "germanName": "Amagarga",
    "types": [
      "rock",
      "ice"
    ],
    "stats": {
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "specialAttack": 99,
      "specialDefense": 92,
      "speed": 58
    },
    "totalStats": 521,
    "height": 2.7,
    "weight": 225,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tundra-Pokémon",
    "flavorText": "Mit der -150 °C kalten Luft, die den diamantförmigen Kristallen auf seinem Körper entströmt, friert es Gegner ein."
  },
  {
    "id": 700,
    "name": "sylveon",
    "germanName": "Feelinara",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "specialAttack": 110,
      "specialDefense": 130,
      "speed": 60
    },
    "totalStats": 525,
    "height": 1,
    "weight": 23.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Bindungs-Pokémon",
    "flavorText": "Seinen bandförmigen Fühlern lässt es beruhigende Wellen entströmen, die das Ende von Kämpfen herbeiführen."
  },
  {
    "id": 701,
    "name": "hawlucha",
    "germanName": "Resladero",
    "types": [
      "fighting",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "specialAttack": 74,
      "specialDefense": 63,
      "speed": 118
    },
    "totalStats": 500,
    "height": 0.8,
    "weight": 21.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wrestling-Pokémon",
    "flavorText": "Ungeachtet seines kleinen Wuchses, erweist es sich, dank seiner Kampftechnik, gegenüber größeren Gegnern wie Machomei oder Hariyama als ebenbürtig."
  },
  {
    "id": 702,
    "name": "dedenne",
    "germanName": "Dedenne",
    "types": [
      "electric",
      "fairy"
    ],
    "stats": {
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "specialAttack": 81,
      "specialDefense": 67,
      "speed": 101
    },
    "totalStats": 431,
    "height": 0.2,
    "weight": 2.2,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Antennen-Pokémon",
    "flavorText": "Seine Schnurrhaare dienen ihm als Antennen. Durch das Senden und Empfangen von elektrischen Wellen kann es mit weit entfernten Freunden kommunizieren."
  },
  {
    "id": 703,
    "name": "carbink",
    "germanName": "Rocara",
    "types": [
      "rock",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 150,
      "specialAttack": 50,
      "specialDefense": 150,
      "speed": 50
    },
    "totalStats": 500,
    "height": 0.3,
    "weight": 5.7,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Edelstein-Pokémon",
    "flavorText": "Dieses Pokémon entstand aus Druck und Hitze in den tiefsten Erdschichten. Mithilfe des Steines in seinem Kopf feuert es Energiestrahlen ab."
  },
  {
    "id": 704,
    "name": "goomy",
    "germanName": "Viscora",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 35,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 40
    },
    "totalStats": 300,
    "height": 0.3,
    "weight": 2.8,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schneckedei-Pokémon",
    "flavorText": "Dieses schwächste aller Drachen-Pokémon lebt an feuchten und schattigen Plätzen, um seinen glitschigen Körper vor dem Austrocknen zu bewahren."
  },
  {
    "id": 705,
    "name": "sliggoo",
    "germanName": "Viscargot",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 68,
      "attack": 75,
      "defense": 53,
      "specialAttack": 83,
      "specialDefense": 113,
      "speed": 60
    },
    "totalStats": 452,
    "height": 0.8,
    "weight": 17.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schneckedei-Pokémon",
    "flavorText": "Es verjagt Gegner durch Absonderung eines alles zersetzenden Schleims. Die zurückgebildeten Augäpfel des Pokémon gewähren ihm keine Sicht."
  },
  {
    "id": 706,
    "name": "goodra",
    "germanName": "Viscogon",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 150,
      "speed": 80
    },
    "totalStats": 600,
    "height": 2,
    "weight": 150.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Drachen-Pokémon",
    "flavorText": "Dieses äußerst freundliche Drachen-Pokémon neigt dazu, seinen geliebten Trainer zu umarmen und so mit einer dicken Schleimschicht zu umhüllen."
  },
  {
    "id": 707,
    "name": "klefki",
    "germanName": "Clavion",
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "specialAttack": 80,
      "specialDefense": 87,
      "speed": 75
    },
    "totalStats": 470,
    "height": 0.2,
    "weight": 3,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schlüssel-Pokémon",
    "flavorText": "Dieses Pokémon sammelt eifrig Schlüssel, mit denen es wild herumfuchtelt, um Gegner abzuschrecken."
  },
  {
    "id": 708,
    "name": "phantump",
    "germanName": "Paragoni",
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 43,
      "attack": 70,
      "defense": 48,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 38
    },
    "totalStats": 309,
    "height": 0.4,
    "weight": 7,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Baumstumpf-Pokémon",
    "flavorText": "Bei diesen Pokémon handelt es sich um verrottete und von Geistern besessene Baumstümpfe, die sich in von Menschen gemiedene Wälder zurückziehen."
  },
  {
    "id": 709,
    "name": "trevenant",
    "germanName": "Trombork",
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "specialAttack": 65,
      "specialDefense": 82,
      "speed": 56
    },
    "totalStats": 474,
    "height": 1.5,
    "weight": 71,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Urgehölz-Pokémon",
    "flavorText": "Die Bäume des Waldes folgen ihm blind. Menschen, die dem Wald Schaden zufügen, hält es bis an ihr Lebensende darin gefangen."
  },
  {
    "id": 710,
    "name": "pumpkaboo-average",
    "germanName": "Irrbis",
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 49,
      "attack": 66,
      "defense": 70,
      "specialAttack": 44,
      "specialDefense": 55,
      "speed": 51
    },
    "totalStats": 335,
    "height": 0.4,
    "weight": 5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kürbis-Pokémon",
    "flavorText": "Es entsteht aus der Vereinigung einer in der Welt der Lebenden gefangenen Seele mit einem Kürbis. Es wird erst nach Sonnenuntergang aktiv."
  },
  {
    "id": 711,
    "name": "gourgeist-average",
    "germanName": "Pumpdjinn",
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "specialAttack": 58,
      "specialDefense": 75,
      "speed": 84
    },
    "totalStats": 494,
    "height": 0.9,
    "weight": 12.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kürbis-Pokémon",
    "flavorText": "Unter unheimlichen Gesängen durchstreift es in Neumondnächten Städte und Dörfer. Wer dem unheilvollen Gesang lauscht, wird verflucht."
  },
  {
    "id": 712,
    "name": "bergmite",
    "germanName": "Arktip",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 55,
      "attack": 69,
      "defense": 85,
      "specialAttack": 32,
      "specialDefense": 35,
      "speed": 28
    },
    "totalStats": 304,
    "height": 1,
    "weight": 99.5,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisklumpen-Pokémon",
    "flavorText": "Es wehrt gegnerische Angriffe mit seinem in Eis gehüllten Körper ab. Bruchstellen bessert es mit aus kalter Luft gewonnenem neuen Eis aus."
  },
  {
    "id": 713,
    "name": "avalugg",
    "germanName": "Arktilas",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "specialAttack": 44,
      "specialDefense": 46,
      "speed": 28
    },
    "totalStats": 514,
    "height": 2,
    "weight": 505,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisberg-Pokémon",
    "flavorText": "Sein eisbedeckter Körper ist so hart wie Stahl. Es nutzt diese stahlharte Hülle, um Hindernisse zu zerschmettern und sich so seinen Weg zu bahnen."
  },
  {
    "id": 714,
    "name": "noibat",
    "germanName": "eF-eM",
    "types": [
      "flying",
      "dragon"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 55
    },
    "totalStats": 245,
    "height": 0.5,
    "weight": 8,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schallwellen-Pokémon",
    "flavorText": "Es lebt im Inneren pechschwarzer Höhlen. Seine riesigen Ohren setzen Ultraschallwellen von 200 000 Hz frei."
  },
  {
    "id": 715,
    "name": "noivern",
    "germanName": "UHaFnir",
    "types": [
      "flying",
      "dragon"
    ],
    "stats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "specialAttack": 97,
      "specialDefense": 80,
      "speed": 123
    },
    "totalStats": 535,
    "height": 1.5,
    "weight": 85,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schallwellen-Pokémon",
    "flavorText": "Es fliegt in finsterer, mondloser Nacht umher und macht Jagd auf achtlose Beute. Ist bei Dunkelheit jedem Gegner überlegen."
  },
  {
    "id": 716,
    "name": "xerneas",
    "germanName": "Xerneas",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "specialAttack": 131,
      "specialDefense": 98,
      "speed": 99
    },
    "totalStats": 680,
    "height": 3,
    "weight": 215,
    "generation": 6,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Lebens-Pokémon",
    "flavorText": "Legenden nach kann dieses Pokémon ewiges Leben spenden. In Gestalt eines Baumes ist es aus seinem tausendjährigen Schlaf erwacht."
  },
  {
    "id": 717,
    "name": "yveltal",
    "germanName": "Yveltal",
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "specialAttack": 131,
      "specialDefense": 98,
      "speed": 99
    },
    "totalStats": 680,
    "height": 5.8,
    "weight": 203,
    "generation": 6,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Zerstörungs-Pokémon",
    "flavorText": "Wenn Schwingen und Schwanzgefieder dieses Legendären Pokémon rot leuchten, entzieht es Lebewesen deren Energie."
  },
  {
    "id": 718,
    "name": "zygarde-50",
    "germanName": "Zygarde",
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 100,
      "defense": 121,
      "specialAttack": 81,
      "specialDefense": 95,
      "speed": 95
    },
    "totalStats": 600,
    "height": 5,
    "weight": 305,
    "generation": 6,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Ordnungs-Pokémon",
    "flavorText": "Wenn das Ökosystem der Kalos-Region kippt, erscheint dieses Pokémon und offenbart seine geheimen Kräfte."
  },
  {
    "id": 719,
    "name": "diancie",
    "germanName": "Diancie",
    "types": [
      "rock",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 100,
      "defense": 150,
      "specialAttack": 100,
      "specialDefense": 150,
      "speed": 50
    },
    "totalStats": 600,
    "height": 0.7,
    "weight": 8.8,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Edelstein-Pokémon",
    "flavorText": "Dieses Pokémon ist eine Mutation von Rocara. Sein rosafarben schimmernder Körper gilt als schönster Anblick überhaupt."
  },
  {
    "id": 720,
    "name": "hoopa",
    "germanName": "Hoopa",
    "types": [
      "psychic",
      "ghost"
    ],
    "stats": {
      "hp": 80,
      "attack": 110,
      "defense": 60,
      "specialAttack": 150,
      "specialDefense": 130,
      "speed": 70
    },
    "totalStats": 600,
    "height": 0.5,
    "weight": 9,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Schabernack",
    "flavorText": "Mittels seiner Ringe, die Raumkrümmungen verursachen, verfrachtet dieser Unruhestifter alles und jeden an die entlegensten Orte."
  },
  {
    "id": 721,
    "name": "volcanion",
    "germanName": "Volcanion",
    "types": [
      "fire",
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 110,
      "defense": 120,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 70
    },
    "totalStats": 600,
    "height": 1.7,
    "weight": 195,
    "generation": 6,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Dampf-Pokémon",
    "flavorText": "Es stößt Wasserdampf aus und versteckt sich im dadurch entstehenden dichten Nebel. Es lebt in Bergen, die von Menschen gemieden werden."
  },
  {
    "id": 722,
    "name": "rowlet",
    "germanName": "Bauz",
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 68,
      "attack": 55,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 42
    },
    "totalStats": 320,
    "height": 0.3,
    "weight": 1.5,
    "generation": 7,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Laubflügel-Pokémon",
    "flavorText": "Ein wachsames und nachtaktives Pokémon. Tagsüber sammelt es per Photosynthese Kräfte, um fit für die Nacht zu sein."
  },
  {
    "id": 723,
    "name": "dartrix",
    "germanName": "Arboretoss",
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 75,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 52
    },
    "totalStats": 420,
    "height": 0.7,
    "weight": 16,
    "generation": 7,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Flügelklingen-Pokémon",
    "flavorText": "Dieses affektierte Pokémon pflegt sein Gefieder, wann immer es kann. Mit verschmutzten Federn hat es nämlich oft keine Lust zu kämpfen."
  },
  {
    "id": 724,
    "name": "decidueye",
    "germanName": "Silvarro",
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 70
    },
    "totalStats": 530,
    "height": 1.6,
    "weight": 36.6,
    "generation": 7,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pfeilflügel-Pokémon",
    "flavorText": "Dieses Pokémon kann die Federn seiner Flügel wie Pfeile verschießen. Dabei ist es so präzise, dass es einen Kiesel auf 100 m durchbohrt."
  },
  {
    "id": 725,
    "name": "litten",
    "germanName": "Flamiau",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 70
    },
    "totalStats": 320,
    "height": 0.4,
    "weight": 4.3,
    "generation": 7,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerkatzen-Pokémon",
    "flavorText": "Es verbrennt Haare, die es bei der Körperpflege verschluckt hat, indem es Feuer speit. Die Flammen variieren je nach Art des Speiens."
  },
  {
    "id": 726,
    "name": "torracat",
    "germanName": "Miezunder",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 50,
      "specialAttack": 80,
      "specialDefense": 50,
      "speed": 90
    },
    "totalStats": 420,
    "height": 0.7,
    "weight": 25,
    "generation": 7,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerkatzen-Pokémon",
    "flavorText": "Es trägt ein feuriges Glöckchen um den Hals. Immer, wenn es Flammen ausstößt, ertönt ein helles Läuten."
  },
  {
    "id": 727,
    "name": "incineroar",
    "germanName": "Fuegro",
    "types": [
      "fire",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 60
    },
    "totalStats": 530,
    "height": 1.8,
    "weight": 83,
    "generation": 7,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fieslings-Pokémon",
    "flavorText": "Ein raues und selbstsüchtiges Pokémon. Wenn es keine Lust hat, ignoriert es auch schon mal die Befehle seines Trainers."
  },
  {
    "id": 728,
    "name": "popplio",
    "germanName": "Robball",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 54,
      "defense": 54,
      "specialAttack": 66,
      "specialDefense": 56,
      "speed": 40
    },
    "totalStats": 320,
    "height": 0.4,
    "weight": 7.5,
    "generation": 7,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seehund-Pokémon",
    "flavorText": "Dieses Pokémon ist für seine Willensstärke bekannt. Bläst es Körperflüssigkeit durch die Nase, entsteht eine Blase, die als Waffe fungiert."
  },
  {
    "id": 729,
    "name": "brionne",
    "germanName": "Marikeck",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 60,
      "attack": 69,
      "defense": 69,
      "specialAttack": 91,
      "specialDefense": 81,
      "speed": 50
    },
    "totalStats": 420,
    "height": 0.6,
    "weight": 17.5,
    "generation": 7,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Popsternchen-Pokémon",
    "flavorText": "Dieser begnadete Tänzer erzeugt beim Tanzen eine Wasserblase nach der anderen und greift damit seine Feinde an."
  },
  {
    "id": 730,
    "name": "primarina",
    "germanName": "Primarene",
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "specialAttack": 126,
      "specialDefense": 116,
      "speed": 60
    },
    "totalStats": 530,
    "height": 1.8,
    "weight": 44,
    "generation": 7,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Solisten-Pokémon",
    "flavorText": "Es kontrolliert mit seinem Gesang Wasserblasen. Die Melodie, die über Generationen im Rudel überliefert wird, lernt es von seinen Kameraden."
  },
  {
    "id": 731,
    "name": "pikipek",
    "germanName": "Peppeck",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 35,
      "attack": 75,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 65
    },
    "totalStats": 265,
    "height": 0.3,
    "weight": 1.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Specht",
    "flavorText": "Pickt 16-mal pro Sekunde auf Bäume ein, um Löcher ins Holz zu schlagen. Diese nutzt es dann als Futterspeicher oder Nest."
  },
  {
    "id": 732,
    "name": "trumbeak",
    "germanName": "Trompeck",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75
    },
    "totalStats": 355,
    "height": 0.6,
    "weight": 14.8,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Trompete",
    "flavorText": "Sammelt Beerensamen in seinem Schnabel. Begegnet es Feinden oder Beute, kann es alle auf einmal verschießen."
  },
  {
    "id": 733,
    "name": "toucannon",
    "germanName": "Tukanon",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "specialAttack": 75,
      "specialDefense": 75,
      "speed": 60
    },
    "totalStats": 485,
    "height": 1.1,
    "weight": 26,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kanone",
    "flavorText": "Erhitzt vor jedem Kampf seinen Schnabel auf über 100 °C. Dadurch erleiden Gepiesackte schwere Verbrennungen."
  },
  {
    "id": 734,
    "name": "yungoos",
    "germanName": "Mangunior",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 48,
      "attack": 70,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 45
    },
    "totalStats": 253,
    "height": 0.4,
    "weight": 6,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Patrouille",
    "flavorText": "Mit seinen scharfen Zähnen schnappt es nach allem. Es lebte ursprünglich nicht in Alola und wurde aus einer anderen Region eingeführt."
  },
  {
    "id": 735,
    "name": "gumshoos",
    "germanName": "Manguspektor",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 88,
      "attack": 110,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 45
    },
    "totalStats": 418,
    "height": 0.7,
    "weight": 14.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Beschattung",
    "flavorText": "Findet es Spuren potenzieller Beute, legt es sich sofort auf die Lauer. Spätestens bei Sonnenuntergang nickt es aber ein."
  },
  {
    "id": 736,
    "name": "grubbin",
    "germanName": "Mabula",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 47,
      "attack": 62,
      "defense": 45,
      "specialAttack": 55,
      "specialDefense": 45,
      "speed": 46
    },
    "totalStats": 300,
    "height": 0.4,
    "weight": 4.4,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Larven-Pokémon",
    "flavorText": "Mit seinem robusten Kiefer schabt es an Bäumen, um an ihren Pflanzensaft zu gelangen. Es lebt normalerweise im Erdreich."
  },
  {
    "id": 737,
    "name": "charjabug",
    "germanName": "Akkup",
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 57,
      "attack": 82,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 36
    },
    "totalStats": 400,
    "height": 0.5,
    "weight": 10.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Batterie-Pokémon",
    "flavorText": "Speichert Elektrizität in seinem Körper. Bei einem Campingausflug kann man wohl kein praktischeres Pokémon dabeihaben!"
  },
  {
    "id": 738,
    "name": "vikavolt",
    "germanName": "Donarion",
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 77,
      "attack": 70,
      "defense": 90,
      "specialAttack": 145,
      "specialDefense": 75,
      "speed": 43
    },
    "totalStats": 500,
    "height": 1.5,
    "weight": 45,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kneifkäfer-Pokémon",
    "flavorText": "Es fliegt umher und wartet auf seine Chance. In seinem großen Kiefer speichert es elektrische Energie, die es auf Feinde abfeuern kann."
  },
  {
    "id": 739,
    "name": "crabrawler",
    "germanName": "Krabbox",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 47,
      "attack": 82,
      "defense": 57,
      "specialAttack": 42,
      "specialDefense": 47,
      "speed": 63
    },
    "totalStats": 338,
    "height": 0.6,
    "weight": 7,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Boxkampf",
    "flavorText": "Schützt mit den Scheren seine Schwachstellen und bereitet einen Gegenschlag vor. Verliert es, bläst es Trübsal."
  },
  {
    "id": 740,
    "name": "crabominable",
    "germanName": "Krawell",
    "types": [
      "fighting",
      "ice"
    ],
    "stats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "specialAttack": 62,
      "specialDefense": 67,
      "speed": 43
    },
    "totalStats": 478,
    "height": 1.7,
    "weight": 180,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fellkrabbe",
    "flavorText": "Es wollte auf eine verschneite Bergspitze, hat sich aber verlaufen. In der Kälte wuchs ihm dann ein Fell und es entwickelte sich weiter."
  },
  {
    "id": 741,
    "name": "oricorio-baile",
    "germanName": "Choreogel",
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "specialAttack": 98,
      "specialDefense": 70,
      "speed": 93
    },
    "totalStats": 476,
    "height": 0.6,
    "weight": 3.4,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tanz",
    "flavorText": "Schlägt es mit den Flügeln, gibt es Zunder! Mit eleganten Ausfallschritten lässt es dann Feuer auf seine Gegner herabregnen."
  },
  {
    "id": 742,
    "name": "cutiefly",
    "germanName": "Wommel",
    "types": [
      "bug",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 84
    },
    "totalStats": 304,
    "height": 0.1,
    "weight": 0.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hummelfliegen-Pokémon",
    "flavorText": "Es ernährt sich von Blütenstaub und Honig. Da es die Aura von Lebewesen wahrnehmen kann, spürt es, wenn eine Blume bald blühen wird."
  },
  {
    "id": 743,
    "name": "ribombee",
    "germanName": "Bandelby",
    "types": [
      "bug",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 124
    },
    "totalStats": 464,
    "height": 0.2,
    "weight": 0.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hummelfliegen-Pokémon",
    "flavorText": "Dieses Pokémon rollt Blütenstaub zu Kugeln. Manche dieser Pollenknödel dienen als Nahrung, andere setzt es aber auch im Kampf ein."
  },
  {
    "id": 744,
    "name": "rockruff",
    "germanName": "Wuffels",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 60
    },
    "totalStats": 280,
    "height": 0.5,
    "weight": 9.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Welpen-Pokémon",
    "flavorText": "Dieses sehr zutrauliche Pokémon wird oft frischgebackenen Trainern empfohlen. Mit dem Alter wird es jedoch immer wilder."
  },
  {
    "id": 745,
    "name": "lycanroc-midday",
    "germanName": "Wolwerock",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 112
    },
    "totalStats": 487,
    "height": 0.8,
    "weight": 25,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wolfs-Pokémon",
    "flavorText": "Irritiert seine Feinde mit schnellen Bewegungen. Als Waffen hat es nicht nur Krallen und Hauer, sondern auch die spitzen Felsen seiner Mähne."
  },
  {
    "id": 746,
    "name": "wishiwashi-solo",
    "germanName": "Lusardin",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 45,
      "attack": 20,
      "defense": 20,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 40
    },
    "totalStats": 175,
    "height": 0.2,
    "weight": 0.3,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kleinfisch-Pokémon",
    "flavorText": "Gerät es in Not, tränen seine Augen. Ihr Glänzen lockt Artgenossen an, mit denen es dann im Verbund den Feind angreift."
  },
  {
    "id": 747,
    "name": "mareanie",
    "germanName": "Garstella",
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "specialAttack": 43,
      "specialDefense": 52,
      "speed": 45
    },
    "totalStats": 305,
    "height": 0.4,
    "weight": 8,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Quäl-Stern-Pokémon",
    "flavorText": "Mit seinem Giftstachel am Kopf attackiert es Beute. Ist diese geschwächt, umschlingt es sie mit seinen zehn Tentakeln und gibt ihr den Rest."
  },
  {
    "id": 748,
    "name": "toxapex",
    "germanName": "Aggrostella",
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "specialAttack": 53,
      "specialDefense": 142,
      "speed": 35
    },
    "totalStats": 495,
    "height": 0.7,
    "weight": 14.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Quäl-Stern-Pokémon",
    "flavorText": "Kriecht mit seinen zwölf Beinen über den Meeresboden. Es hinterlässt oft etliche Überreste von Corasonn."
  },
  {
    "id": 749,
    "name": "mudbray",
    "germanName": "Pampuli",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 45
    },
    "totalStats": 385,
    "height": 1,
    "weight": 110,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Packesel-Pokémon",
    "flavorText": "Der ganze Schlamm an seinen Füßen sorgt für die nötige Bodenhaftung, die es für seinen kraftvollen Lauf braucht."
  },
  {
    "id": 750,
    "name": "mudsdale",
    "germanName": "Pampross",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 85,
      "speed": 35
    },
    "totalStats": 500,
    "height": 2.5,
    "weight": 920,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zugpferd-Pokémon",
    "flavorText": "Der Schlamm, den es ausspuckt, schützt gegen Wind und Wetter, wenn er hart wird. Deshalb hat man früher auch Hauswände damit verstärkt."
  },
  {
    "id": 751,
    "name": "dewpider",
    "germanName": "Araqua",
    "types": [
      "water",
      "bug"
    ],
    "stats": {
      "hp": 38,
      "attack": 40,
      "defense": 52,
      "specialAttack": 40,
      "specialDefense": 72,
      "speed": 27
    },
    "totalStats": 269,
    "height": 0.3,
    "weight": 4,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wasserblasen-Pokémon",
    "flavorText": "Die Futtersuche treibt es an Land. Eine Wasserblase versorgt es mit Atemluft und schützt zugleich seinen weichen Kopf."
  },
  {
    "id": 752,
    "name": "araquanid",
    "germanName": "Aranestro",
    "types": [
      "water",
      "bug"
    ],
    "stats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "specialAttack": 50,
      "specialDefense": 132,
      "speed": 42
    },
    "totalStats": 454,
    "height": 1.8,
    "weight": 82,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wasserblasen-Pokémon",
    "flavorText": "Es verteilt mit seiner Wasserblase Kopfstöße. Kleine Pokémon werden dabei hineingezogen und ertrinken."
  },
  {
    "id": 753,
    "name": "fomantis",
    "germanName": "Imantis",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 35,
      "speed": 35
    },
    "totalStats": 250,
    "height": 0.3,
    "weight": 1.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Grassichel-Pokémon",
    "flavorText": "Mittags badet es in der Sonne und hält Nickerchen. Nachts muss es sich aber einen sichereren Schlafplatz suchen und zieht los."
  },
  {
    "id": 754,
    "name": "lurantis",
    "germanName": "Mantidea",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 45
    },
    "totalStats": 480,
    "height": 0.9,
    "weight": 18.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blumensichel-Pokémon",
    "flavorText": "Es erfordert viel Arbeit, seine Farbenpracht zu erhalten, doch zum Glück gibt es Passionierte, die den hohen Aufwand nicht scheuen."
  },
  {
    "id": 755,
    "name": "morelull",
    "germanName": "Bubungus",
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 15
    },
    "totalStats": 285,
    "height": 0.2,
    "weight": 1.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lumineszenz-Pokémon",
    "flavorText": "Es streut blinkende Sporen aus. Jeder, der dieses Licht sieht, schläft fest ein."
  },
  {
    "id": 756,
    "name": "shiinotic",
    "germanName": "Lamellux",
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 30
    },
    "totalStats": 405,
    "height": 1,
    "weight": 11.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lumineszenz-Pokémon",
    "flavorText": "Nachts sollte man Wälder meiden, in denen Lamellux leben. Ihr unheimliches Licht raubt jedem die Orientierung."
  },
  {
    "id": 757,
    "name": "salandit",
    "germanName": "Molunk",
    "types": [
      "poison",
      "fire"
    ],
    "stats": {
      "hp": 48,
      "attack": 44,
      "defense": 40,
      "specialAttack": 71,
      "specialDefense": 40,
      "speed": 77
    },
    "totalStats": 320,
    "height": 0.6,
    "weight": 4.8,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftechsen-Pokémon",
    "flavorText": "Durch Verbrennung von Körperflüssigkeit erzeugt es ein Gas, das Feinde schwindelig und so zu leichten Zielen macht."
  },
  {
    "id": 758,
    "name": "salazzle",
    "germanName": "Amfira",
    "types": [
      "poison",
      "fire"
    ],
    "stats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "specialAttack": 111,
      "specialDefense": 60,
      "speed": 117
    },
    "totalStats": 480,
    "height": 1.2,
    "weight": 22.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftechsen-Pokémon",
    "flavorText": "Bisher wurden nur Weibchen entdeckt. Sie werden von männlichen Molunk verehrt und leben mit einer Gruppe von ihnen zusammen."
  },
  {
    "id": 759,
    "name": "stufful",
    "germanName": "Velursi",
    "types": [
      "normal",
      "fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 50
    },
    "totalStats": 340,
    "height": 0.5,
    "weight": 6.8,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wildfang-Pokémon",
    "flavorText": "Es sieht sehr süß aus, aber wehe, es wird wütend. Mit seinen Armen wirbelnd haut es selbst den stärksten Wrestler um."
  },
  {
    "id": 760,
    "name": "bewear",
    "germanName": "Kosturso",
    "types": [
      "normal",
      "fighting"
    ],
    "stats": {
      "hp": 120,
      "attack": 125,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 60
    },
    "totalStats": 500,
    "height": 2.1,
    "weight": 135,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kraftarme-Pokémon",
    "flavorText": "Dieses Pokémon verfügt über immense Muskelkraft und ist äußerst gefährlich. Sein Habitat ist generell Sperrgebiet."
  },
  {
    "id": 761,
    "name": "bounsweet",
    "germanName": "Frubberl",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 42,
      "attack": 30,
      "defense": 38,
      "specialAttack": 30,
      "specialDefense": 38,
      "speed": 32
    },
    "totalStats": 210,
    "height": 0.3,
    "weight": 3.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Obst-Pokémon",
    "flavorText": "Sein Körper verströmt einen köstlichen Duft, der leider seinen Fressfeind Tukanon anlockt. Dem kommt ein aromatischer Snack höchst gelegen."
  },
  {
    "id": 762,
    "name": "steenee",
    "germanName": "Frubaila",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 52,
      "attack": 40,
      "defense": 48,
      "specialAttack": 40,
      "specialDefense": 48,
      "speed": 62
    },
    "totalStats": 290,
    "height": 0.7,
    "weight": 8.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Obst-Pokémon",
    "flavorText": "Seinen Blütenkelch hat es zum Selbstschutz ausgebildet. Er ist so hart, dass selbst das Picken von Vogel-Pokémon es nicht stört."
  },
  {
    "id": 763,
    "name": "tsareena",
    "germanName": "Fruyal",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "specialAttack": 50,
      "specialDefense": 98,
      "speed": 72
    },
    "totalStats": 510,
    "height": 1.2,
    "weight": 21.4,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Obst-Pokémon",
    "flavorText": "Dieses Pokémon ist für seine heftigen Tritte bekannt. Oft tritt es auch noch nach und lacht, um seinen Sieg an die große Glocke zu hängen."
  },
  {
    "id": 764,
    "name": "comfey",
    "germanName": "Curelei",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 51,
      "attack": 52,
      "defense": 90,
      "specialAttack": 82,
      "specialDefense": 110,
      "speed": 100
    },
    "totalStats": 485,
    "height": 0.1,
    "weight": 0.3,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blumenkranz-Pokémon",
    "flavorText": "Dieses Pokémon sieht aus, als hätte man Blüten an einer nahrhaften Ranke angebracht. Diese blühen auf und sind äußerst wohlriechend."
  },
  {
    "id": 765,
    "name": "oranguru",
    "germanName": "Kommandutan",
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 110,
      "speed": 60
    },
    "totalStats": 490,
    "height": 1.5,
    "weight": 76,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Weisheits-Pokémon",
    "flavorText": "Es ist als extrem schlaues Pokémon bekannt. Nicht so beliebt bei unerfahrenen Trainern, doch Veteranen wissen es zu schätzen."
  },
  {
    "id": 766,
    "name": "passimian",
    "germanName": "Quartermak",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 80
    },
    "totalStats": 490,
    "height": 2,
    "weight": 82.8,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Teamwork-Pokémon",
    "flavorText": "Es gründet Gruppen von etwa 20 Exemplaren. Der Zusammenhalt der Gruppe ist extrem stark, kein Kamerad wird jemals im Stich gelassen."
  },
  {
    "id": 767,
    "name": "wimpod",
    "germanName": "Reißlaus",
    "types": [
      "bug",
      "water"
    ],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 40,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 80
    },
    "totalStats": 230,
    "height": 0.5,
    "weight": 12,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Laufschritt-Pokémon",
    "flavorText": "Es ist so feige, dass es wild mit seinen vielen Füßen herumschlägt und verzweifelt davonläuft. Nach seiner Flucht glänzt der Boden herrlich."
  },
  {
    "id": 768,
    "name": "golisopod",
    "germanName": "Tectass",
    "types": [
      "bug",
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 140,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 40
    },
    "totalStats": 530,
    "height": 2,
    "weight": 108,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rüstungs-Pokémon",
    "flavorText": "Mithilfe seiner riesigen, glitzernden Klauen zerteilt es selbst Luft und Salzwasser mit einem Hieb."
  },
  {
    "id": 769,
    "name": "sandygast",
    "germanName": "Sankabuh",
    "types": [
      "ghost",
      "ground"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 45,
      "speed": 15
    },
    "totalStats": 320,
    "height": 0.5,
    "weight": 70,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sandhaufen-Pokémon",
    "flavorText": "Der Groll eines verstorbenen Reisenden fuhr in einen Sandhügel, den ein Kind gebaut hatte, und brachte dieses Pokémon in die Welt."
  },
  {
    "id": 770,
    "name": "palossand",
    "germanName": "Colossand",
    "types": [
      "ghost",
      "ground"
    ],
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 110,
      "specialAttack": 100,
      "specialDefense": 75,
      "speed": 35
    },
    "totalStats": 480,
    "height": 1.3,
    "weight": 250,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sandschloss-Pokémon",
    "flavorText": "Brachte Menschen dazu, den Sandhügel zu einer stattlichen Sandburg auszubauen. Auch seine Flüche haben an Stärke gewonnen."
  },
  {
    "id": 771,
    "name": "pyukumuku",
    "germanName": "Gufa",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 60,
      "defense": 130,
      "specialAttack": 30,
      "specialDefense": 130,
      "speed": 5
    },
    "totalStats": 410,
    "height": 0.3,
    "weight": 1.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seegurken-Pokémon",
    "flavorText": "Es lebt an Stränden oder in flachen Gewässern. Im Kampf und zum Schnappen von Beute lässt es seine Organe hervorschnellen."
  },
  {
    "id": 772,
    "name": "type-null",
    "germanName": "Typ:Null",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 59
    },
    "totalStats": 534,
    "height": 1.9,
    "weight": 120.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Modifikations-Pokémon",
    "flavorText": "Seine schwere Maske unterdrückt seine wahre Macht. In ihm schlummern nämlich besondere Kräfte."
  },
  {
    "id": 773,
    "name": "silvally",
    "germanName": "Amigento",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 95
    },
    "totalStats": 570,
    "height": 2.3,
    "weight": 100.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Modifikations-Pokémon",
    "flavorText": "Das Vertrauen zu seinem Trainer weckt seine Kräfte. Es kann seinen Typ im Kampf nach Belieben wechseln."
  },
  {
    "id": 774,
    "name": "minior-red-meteor",
    "germanName": "Meteno",
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 60
    },
    "totalStats": 440,
    "height": 0.3,
    "weight": 40,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Meteor",
    "flavorText": "Eigentlich lebt es in der Ozonschicht, doch wenn seine Schale zu schwer wird, stürzt es auf die Erde."
  },
  {
    "id": 775,
    "name": "komala",
    "germanName": "Koalelu",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 115,
      "defense": 65,
      "specialAttack": 75,
      "specialDefense": 95,
      "speed": 65
    },
    "totalStats": 480,
    "height": 0.4,
    "weight": 19.9,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Halbschlaf",
    "flavorText": "Es wird schlafend geboren und stirbt schlafend. Sein ganzes Leben ist ein Traum, seine einzige körperliche Aktivität das Umdrehen im Schlaf."
  },
  {
    "id": 776,
    "name": "turtonator",
    "germanName": "Tortunator",
    "types": [
      "fire",
      "dragon"
    ],
    "stats": {
      "hp": 60,
      "attack": 78,
      "defense": 135,
      "specialAttack": 91,
      "specialDefense": 85,
      "speed": 36
    },
    "totalStats": 485,
    "height": 2,
    "weight": 212,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Knallkröten-Pokémon",
    "flavorText": "Sein Rückenpanzer ist explosiv, man sollte ihm also niemals auf den Rücken klopfen. Das Loch in seinem Bauch ist seine Schwachstelle."
  },
  {
    "id": 777,
    "name": "togedemaru",
    "germanName": "Togedemaru",
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 65,
      "attack": 98,
      "defense": 63,
      "specialAttack": 40,
      "specialDefense": 73,
      "speed": 96
    },
    "totalStats": 435,
    "height": 0.3,
    "weight": 3.3,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Einigler-Pokémon",
    "flavorText": "Normalerweise liegen seine Stacheln am Rücken an, aber wenn es sich aufregt, stellen sie sich auf und stechen angreifende Gegner."
  },
  {
    "id": 778,
    "name": "mimikyu-disguised",
    "germanName": "Mimigma",
    "types": [
      "ghost",
      "fairy"
    ],
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 96
    },
    "totalStats": 476,
    "height": 0.2,
    "weight": 0.7,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kostümspuk-Pokémon",
    "flavorText": "Niemand weiß, wie es wirklich aussieht. Ein Forscher, der unter seinen Lumpen blickte, soll sich buchstäblich zu Tode erschreckt haben."
  },
  {
    "id": 779,
    "name": "bruxish",
    "germanName": "Knirfish",
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 68,
      "attack": 105,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 92
    },
    "totalStats": 475,
    "height": 0.9,
    "weight": 19,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Knirschzahn",
    "flavorText": "Wenn es über den Fortsatz an seinem Kopf Psycho-Kräfte freisetzt, ertönt in seiner Umgebung ein unangenehmes Zähneknirschen."
  },
  {
    "id": 780,
    "name": "drampa",
    "germanName": "Sen-Long",
    "types": [
      "normal",
      "dragon"
    ],
    "stats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "specialAttack": 135,
      "specialDefense": 91,
      "speed": 36
    },
    "totalStats": 485,
    "height": 3,
    "weight": 185,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gelassenheits-Pokémon",
    "flavorText": "Es hat ein freundliches Wesen, aber wenn es zur Weißglut gebracht wird, zerstört es mit einem heftigen Hauch die gesamte Umgebung."
  },
  {
    "id": 781,
    "name": "dhelmise",
    "germanName": "Moruda",
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 131,
      "defense": 100,
      "specialAttack": 86,
      "specialDefense": 90,
      "speed": 40
    },
    "totalStats": 517,
    "height": 3.9,
    "weight": 210,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seetang-Pokémon",
    "flavorText": "Wenn es seinen riesigen Anker schwingt, kann es sogar ein Wailord mit einem Schlag K.O. hauen. Der grüne Seetang ist sein Körper."
  },
  {
    "id": 782,
    "name": "jangmo-o",
    "germanName": "Miniras",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 45
    },
    "totalStats": 300,
    "height": 0.6,
    "weight": 29.7,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schuppentier-Pokémon",
    "flavorText": "Es übermittelt seine Gefühle durch das Rasseln seiner Schuppen, wodurch im Hochgebirge, in dem es lebt, ein metallisches Geräusch erhallt."
  },
  {
    "id": 783,
    "name": "hakamo-o",
    "germanName": "Mediras",
    "types": [
      "dragon",
      "fighting"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 90,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 65
    },
    "totalStats": 420,
    "height": 1.2,
    "weight": 47,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schuppentier-Pokémon",
    "flavorText": "Mit einem Kampfschrei stürzt es sich auf seine Beute und reißt sie mithilfe seiner Schuppen in kleine Stücke."
  },
  {
    "id": 784,
    "name": "kommo-o",
    "germanName": "Grandiras",
    "types": [
      "dragon",
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "specialAttack": 100,
      "specialDefense": 105,
      "speed": 85
    },
    "totalStats": 600,
    "height": 1.6,
    "weight": 78.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schuppentier-Pokémon",
    "flavorText": "Wenn es einen Gegner sieht, rasselt es drohend mit seinen Schwanzschuppen. Schwache Gegner verlieren dadurch die Fassung und fliehen."
  },
  {
    "id": 785,
    "name": "tapu-koko",
    "germanName": "Kapu-Riki",
    "types": [
      "electric",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 85,
      "specialAttack": 95,
      "specialDefense": 75,
      "speed": 130
    },
    "totalStats": 570,
    "height": 1.8,
    "weight": 20.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Schutzpatron-Pokémon",
    "flavorText": "Der neugierige und lebhafte Schutzpatron von Mele-Mele. Es kann Gewitterwolken rufen und Blitze in seinem Körper speichern."
  },
  {
    "id": 786,
    "name": "tapu-lele",
    "germanName": "Kapu-Fala",
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 75,
      "specialAttack": 130,
      "specialDefense": 115,
      "speed": 95
    },
    "totalStats": 570,
    "height": 1.2,
    "weight": 18.6,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Schutzpatron-Pokémon",
    "flavorText": "Der arglose, doch unbarmherzige Schutzpatron von Akala. Seine Energie zieht es aus dem lieblichen Duft von Blumen."
  },
  {
    "id": 787,
    "name": "tapu-bulu",
    "germanName": "Kapu-Toro",
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 115,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 75
    },
    "totalStats": 570,
    "height": 1.9,
    "weight": 45.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Schutzpatron-Pokémon",
    "flavorText": "Dieses Pokémon entwurzelt große Bäume und schwingt sie herum. Es lässt Pflanzen üppig gedeihen und absorbiert dann ihre Energie."
  },
  {
    "id": 788,
    "name": "tapu-fini",
    "germanName": "Kapu-Kime",
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 115,
      "specialAttack": 95,
      "specialDefense": 130,
      "speed": 85
    },
    "totalStats": 570,
    "height": 1.3,
    "weight": 21.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Schutzpatron-Pokémon",
    "flavorText": "Es führt Gegner mit dichtem Nebel in die Irre und schickt sie so in ihren Untergang. Seine Energie gewinnt es aus der Meeresströmung."
  },
  {
    "id": 789,
    "name": "cosmog",
    "germanName": "Cosmog",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 43,
      "attack": 29,
      "defense": 31,
      "specialAttack": 29,
      "specialDefense": 31,
      "speed": 37
    },
    "totalStats": 200,
    "height": 0.2,
    "weight": 0.1,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Nebula-Pokémon",
    "flavorText": "Sein Körper besteht aus flüchtigem Gas. Es wächst durch das Sammeln von Staub aus der Luft."
  },
  {
    "id": 790,
    "name": "cosmoem",
    "germanName": "Cosmovum",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 43,
      "attack": 29,
      "defense": 131,
      "specialAttack": 29,
      "specialDefense": 131,
      "speed": 37
    },
    "totalStats": 400,
    "height": 0.1,
    "weight": 999.9,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Urgestirns-Pokémon",
    "flavorText": "Es ist völlig reglos, als wäre es tot. Berührt man es, fühlt es sich jedoch leicht warm an. Vor langer Zeit wurde es „Sternenkokon“ genannt."
  },
  {
    "id": 791,
    "name": "solgaleo",
    "germanName": "Solgaleo",
    "types": [
      "psychic",
      "steel"
    ],
    "stats": {
      "hp": 137,
      "attack": 137,
      "defense": 107,
      "specialAttack": 113,
      "specialDefense": 89,
      "speed": 97
    },
    "totalStats": 680,
    "height": 3.4,
    "weight": 230,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Sonnenkreis-Pokémon",
    "flavorText": "Es heißt, es komme aus einer anderen Welt. Sein ganzer Körper leuchtet strahlend hell und macht die finsterste Nacht zum Tage."
  },
  {
    "id": 792,
    "name": "lunala",
    "germanName": "Lunala",
    "types": [
      "psychic",
      "ghost"
    ],
    "stats": {
      "hp": 137,
      "attack": 113,
      "defense": 89,
      "specialAttack": 137,
      "specialDefense": 107,
      "speed": 97
    },
    "totalStats": 680,
    "height": 4,
    "weight": 120,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Mondscheiben-Pokémon",
    "flavorText": "Es heißt, es sei die weibliche Endstufe der Entwicklungsreihe von Cosmog. Ist sein drittes Auge aktiviert, zieht es in eine andere Welt."
  },
  {
    "id": 793,
    "name": "nihilego",
    "germanName": "Anego",
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 109,
      "attack": 53,
      "defense": 47,
      "specialAttack": 127,
      "specialDefense": 131,
      "speed": 103
    },
    "totalStats": 570,
    "height": 1.2,
    "weight": 55.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Parasiten-Pokémon",
    "flavorText": "Eine rätselhafte Ultrabestie. Einigen Berichten zufolge verwandelt sie harmlose Stadtbewohner per Symbiose in äußerst aggressive Menschen."
  },
  {
    "id": 794,
    "name": "buzzwole",
    "germanName": "Masskito",
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 107,
      "attack": 139,
      "defense": 139,
      "specialAttack": 53,
      "specialDefense": 53,
      "speed": 79
    },
    "totalStats": 570,
    "height": 2.4,
    "weight": 333.6,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ausdehnungs-Pokémon",
    "flavorText": "Eine Ultrabestie aus einer anderen Welt. Niemand weiß, ob sie ihren Körper aus Stolz oder zur Abschreckung stählt."
  },
  {
    "id": 795,
    "name": "pheromosa",
    "germanName": "Schabelle",
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 71,
      "attack": 137,
      "defense": 37,
      "specialAttack": 137,
      "specialDefense": 37,
      "speed": 151
    },
    "totalStats": 570,
    "height": 1.8,
    "weight": 25,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eleganz-Pokémon",
    "flavorText": "Diese bedrohliche Ultrabestie wurde dabei beobachtet, wie sie mit ungeheuerlicher Geschwindigkeit über die Erde hinwegfegt."
  },
  {
    "id": 796,
    "name": "xurkitree",
    "germanName": "Voltriant",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 83,
      "attack": 89,
      "defense": 71,
      "specialAttack": 173,
      "specialDefense": 71,
      "speed": 83
    },
    "totalStats": 570,
    "height": 3.8,
    "weight": 100,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Illuminations-Pokémon",
    "flavorText": "Eine geheimnisvolle Ultrabestie, aus deren Körper furchterregende Mengen an elektrischer Energie strömen."
  },
  {
    "id": 797,
    "name": "celesteela",
    "germanName": "Kaguron",
    "types": [
      "steel",
      "flying"
    ],
    "stats": {
      "hp": 97,
      "attack": 101,
      "defense": 103,
      "specialAttack": 107,
      "specialDefense": 101,
      "speed": 61
    },
    "totalStats": 570,
    "height": 9.2,
    "weight": 999.9,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Raketenstart-Pokémon",
    "flavorText": "Eine Ultrabestie, die mit extremer Geschwindigkeit durch die Lüfte rast. Sie ist durch die Ultrapforte gekommen."
  },
  {
    "id": 798,
    "name": "kartana",
    "germanName": "Katagami",
    "types": [
      "grass",
      "steel"
    ],
    "stats": {
      "hp": 59,
      "attack": 181,
      "defense": 131,
      "specialAttack": 59,
      "specialDefense": 31,
      "speed": 109
    },
    "totalStats": 570,
    "height": 0.3,
    "weight": 0.1,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwertkunst-Pokémon",
    "flavorText": "Eine Ultrabestie, die zwar nicht von sich aus anzugreifen scheint, deren rasiermesserscharfer Körper aber eine gefährliche Waffe darstellt."
  },
  {
    "id": 799,
    "name": "guzzlord",
    "germanName": "Schlingking",
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 223,
      "attack": 101,
      "defense": 53,
      "specialAttack": 97,
      "specialDefense": 53,
      "speed": 43
    },
    "totalStats": 570,
    "height": 5.5,
    "weight": 888,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gaumenfolter-Pokémon",
    "flavorText": "Eine Ultrabestie, die einigen Berichten zufolge ganze Berge vertilgt und selbst mehrstöckige Gebäude verschlingen kann."
  },
  {
    "id": 800,
    "name": "necrozma",
    "germanName": "Necrozma",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 97,
      "attack": 107,
      "defense": 101,
      "specialAttack": 127,
      "specialDefense": 89,
      "speed": 79
    },
    "totalStats": 600,
    "height": 2.4,
    "weight": 230,
    "generation": 7,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Prisma-Pokémon",
    "flavorText": "Diese einer Ultrabestie ähnelnde Kreatur ist wohl vor Urzeiten aus einer anderen Welt gekommen und ruhte lange Zeit unter der Erde."
  },
  {
    "id": 801,
    "name": "magearna",
    "germanName": "Magearna",
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 115,
      "specialAttack": 130,
      "specialDefense": 115,
      "speed": 65
    },
    "totalStats": 600,
    "height": 1,
    "weight": 80.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Fabrikats-Pokémon",
    "flavorText": "Dieses Pokémon wurde vor über 500 Jahren künstlich erschaffen. Es versteht die Sprache der Menschen, ohne sie selbst zu sprechen."
  },
  {
    "id": 802,
    "name": "marshadow",
    "germanName": "Marshadow",
    "types": [
      "fighting",
      "ghost"
    ],
    "stats": {
      "hp": 90,
      "attack": 125,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 125
    },
    "totalStats": 600,
    "height": 0.7,
    "weight": 22.2,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Dunkelwesen-Pokémon",
    "flavorText": "Da es sich im Schatten verbergen und so für menschliche Augen unsichtbar werden kann, war seine Existenz lange bezweifelt worden."
  },
  {
    "id": 803,
    "name": "poipole",
    "germanName": "Venicro",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 67,
      "attack": 73,
      "defense": 67,
      "specialAttack": 73,
      "specialDefense": 67,
      "speed": 73
    },
    "totalStats": 420,
    "height": 0.6,
    "weight": 1.8,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftdorn-Pokémon",
    "flavorText": "Diese Ultrabestie wird in der Welt, aus der sie kommt, so gemocht, dass sie oft als Partner für Reisen gewählt wird."
  },
  {
    "id": 804,
    "name": "naganadel",
    "germanName": "Agoyon",
    "types": [
      "poison",
      "dragon"
    ],
    "stats": {
      "hp": 73,
      "attack": 73,
      "defense": 73,
      "specialAttack": 127,
      "specialDefense": 73,
      "speed": 121
    },
    "totalStats": 540,
    "height": 3.6,
    "weight": 150,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftdorn-Pokémon",
    "flavorText": "Eines der Lebewesen, die Ultrabestien genannt werden. In seinem Körper bewahrt es Hunderte Liter giftiger Flüssigkeit auf."
  },
  {
    "id": 805,
    "name": "stakataka",
    "germanName": "Muramura",
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 61,
      "attack": 131,
      "defense": 211,
      "specialAttack": 53,
      "specialDefense": 101,
      "speed": 13
    },
    "totalStats": 570,
    "height": 5.5,
    "weight": 820,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Steinmauer-Pokémon",
    "flavorText": "Diese Kreatur kam durch eine Ultrapforte. Sie besteht anscheinend aus mehreren aufeinandergestapelten Wesen."
  },
  {
    "id": 806,
    "name": "blacephalon",
    "germanName": "Kopplosio",
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 53,
      "attack": 127,
      "defense": 53,
      "specialAttack": 151,
      "specialDefense": 79,
      "speed": 107
    },
    "totalStats": 570,
    "height": 1.8,
    "weight": 13,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerwerks-Pokémon",
    "flavorText": "Dieses Wesen ist vermutlich eine Ultrabestie. Es nähert sich Menschen tänzelnd, nur um dann plötzlich seinen Kopf explodieren zu lassen."
  },
  {
    "id": 807,
    "name": "zeraora",
    "germanName": "Zeraora",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 88,
      "attack": 112,
      "defense": 75,
      "specialAttack": 102,
      "specialDefense": 80,
      "speed": 143
    },
    "totalStats": 600,
    "height": 1.5,
    "weight": 44.5,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Blitzsturm-Pokémon",
    "flavorText": "Mit seinen elektrisierten Krallen reißt es Gegner in Stücke. Selbst wenn sie ausweichen, werden sie von elektrisch geladenen Funken getroffen."
  },
  {
    "id": 808,
    "name": "meltan",
    "germanName": "Meltan",
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 46,
      "attack": 65,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 35,
      "speed": 34
    },
    "totalStats": 300,
    "height": 0.2,
    "weight": 8,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Mutter-Pokémon",
    "flavorText": "Sein Körper besteht aus geschmolzenem Stahl. Es bringt Eisen und andere Metalle im Boden zum Schmelzen, um sie dann zu absorbieren."
  },
  {
    "id": 809,
    "name": "melmetal",
    "germanName": "Melmetal",
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 135,
      "attack": 143,
      "defense": 143,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 34
    },
    "totalStats": 600,
    "height": 2.5,
    "weight": 800,
    "generation": 7,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Mutter-Pokémon",
    "flavorText": "Einst wurde es für seine Fähigkeit verehrt, Eisen erschaffen zu können. Nach 3 000 Jahren ist es aus einem unerfindlichen Grund wieder erwacht."
  },
  {
    "id": 810,
    "name": "grookey",
    "germanName": "Chimpep",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 65
    },
    "totalStats": 310,
    "height": 0.3,
    "weight": 5,
    "generation": 8,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schimpansen-Pokémon",
    "flavorText": "Der Rhythmus, den es mit seinem besonderen Schlägel erzeugt, verbreitet Schallwellen, die Pflanzen neue Vitalität verleihen können."
  },
  {
    "id": 811,
    "name": "thwackey",
    "germanName": "Chimstix",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 80
    },
    "totalStats": 420,
    "height": 0.7,
    "weight": 14,
    "generation": 8,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Beat-Pokémon",
    "flavorText": "Je wilder der Beat, den ein Chimstix mit seinen zwei Schlägeln erzeugt, desto mehr wird es von seinen Artgenossen respektiert."
  },
  {
    "id": 812,
    "name": "rillaboom",
    "germanName": "Gortrom",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 85
    },
    "totalStats": 530,
    "height": 2.1,
    "weight": 90,
    "generation": 8,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Drummer-Pokémon",
    "flavorText": "Es kontrolliert die Macht seines speziellen Baumstumpfes durch Trommeln. Im Kampf manipuliert es damit Wurzeln."
  },
  {
    "id": 813,
    "name": "scorbunny",
    "germanName": "Hopplo",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 71,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 69
    },
    "totalStats": 310,
    "height": 0.3,
    "weight": 4.5,
    "generation": 8,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hasen-Pokémon",
    "flavorText": "Erhöht es durch Rennen seine Körpertemperatur, strömt Feuer-Energie durch seinen Körper. Dann kann es seine wahre Kraft entfesseln."
  },
  {
    "id": 814,
    "name": "raboot",
    "germanName": "Kickerlo",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 86,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 94
    },
    "totalStats": 420,
    "height": 0.6,
    "weight": 9,
    "generation": 8,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hasen-Pokémon",
    "flavorText": "Sein flauschiges Fell schützt es vor Kälte und ermöglicht es ihm, noch heißere Feuer-Attacken auszuteilen."
  },
  {
    "id": 815,
    "name": "cinderace",
    "germanName": "Liberlo",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 80,
      "attack": 116,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 119
    },
    "totalStats": 530,
    "height": 1.4,
    "weight": 33,
    "generation": 8,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Torschützen-Pokémon",
    "flavorText": "Es jongliert kleine Steine mit den Füßen und erschafft daraus einen Flammenfußball. Seine Gegner verbrennt es mit scharfen Schüssen."
  },
  {
    "id": 816,
    "name": "sobble",
    "germanName": "Memmeon",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 40,
      "speed": 70
    },
    "totalStats": 310,
    "height": 0.3,
    "weight": 4,
    "generation": 8,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wasserechsen-Pokémon",
    "flavorText": "Hat es Angst, vergießt es Tränen, die Reizstoffe enthalten, welche andere ebenfalls zum Weinen bringen. Sie sind so stark wie 100 Zwiebeln."
  },
  {
    "id": 817,
    "name": "drizzile",
    "germanName": "Phlegleon",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 55,
      "specialAttack": 95,
      "specialDefense": 55,
      "speed": 90
    },
    "totalStats": 420,
    "height": 0.7,
    "weight": 11.5,
    "generation": 8,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wasserechsen-Pokémon",
    "flavorText": "Das Sekret, das aus seinen Handflächen austritt, formt es zu Wasserkugeln. Diese nutzt es im Kampf für taktisch ausgeklügelte Angriffe."
  },
  {
    "id": 818,
    "name": "inteleon",
    "germanName": "Intelleon",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 65,
      "speed": 120
    },
    "totalStats": 530,
    "height": 1.9,
    "weight": 45.2,
    "generation": 8,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Geheimagenten-Pokémon",
    "flavorText": "Zu seinen vielen geheimen Talenten gehört es, Wasser aus den Fingern zu schießen und mit der Membran am Rücken durch die Lüfte zu segeln."
  },
  {
    "id": 819,
    "name": "skwovet",
    "germanName": "Raffel",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 25
    },
    "totalStats": 275,
    "height": 0.3,
    "weight": 2.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Raffbacken-Pokémon",
    "flavorText": "Es ist überall in der Galar-Region anzutreffen. Hat es keine Beeren, die es in seinen beiden Backen horten kann, wird es unruhig."
  },
  {
    "id": 820,
    "name": "greedent",
    "germanName": "Schlaraffel",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 120,
      "attack": 95,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 20
    },
    "totalStats": 460,
    "height": 0.6,
    "weight": 6,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gierschlund-Pokémon",
    "flavorText": "Es hortet in seinem Schweif Beeren. Versucht es, zu viele unterzubringen, fallen sie heraus. Da es jedoch nicht allzu clever ist, bemerkt es das nicht."
  },
  {
    "id": 821,
    "name": "rookidee",
    "germanName": "Meikro",
    "types": [
      "flying"
    ],
    "stats": {
      "hp": 38,
      "attack": 47,
      "defense": 35,
      "specialAttack": 33,
      "specialDefense": 35,
      "speed": 57
    },
    "totalStats": 245,
    "height": 0.2,
    "weight": 1.8,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kleinvogel-Pokémon",
    "flavorText": "Es ist von Natur aus sehr mutig und fordert daher jeden noch so starken Feind heraus. Selbst wenn es den Kürzeren zieht, dient dies seinem Training."
  },
  {
    "id": 822,
    "name": "corvisquire",
    "germanName": "Kranoviz",
    "types": [
      "flying"
    ],
    "stats": {
      "hp": 68,
      "attack": 67,
      "defense": 55,
      "specialAttack": 43,
      "specialDefense": 55,
      "speed": 77
    },
    "totalStats": 365,
    "height": 0.8,
    "weight": 16,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Krähen-Pokémon",
    "flavorText": "Es weiß Objekte geschickt einzusetzen. So greift und wirft es zum Beispiel kleine Steine mit seinen Krallen oder wickelt Seile um Gegner."
  },
  {
    "id": 823,
    "name": "corviknight",
    "germanName": "Krarmor",
    "types": [
      "flying",
      "steel"
    ],
    "stats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "specialAttack": 53,
      "specialDefense": 85,
      "speed": 67
    },
    "totalStats": 495,
    "height": 2.2,
    "weight": 75,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Krähen-Pokémon",
    "flavorText": "Niemand wagt es, ihm den Himmel über Galar streitig zu machen. Sein schwarz glänzendes, stählernes Äußeres schüchtert jeden Gegner ein."
  },
  {
    "id": 824,
    "name": "blipbug",
    "germanName": "Sensect",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 20,
      "specialAttack": 25,
      "specialDefense": 45,
      "speed": 45
    },
    "totalStats": 180,
    "height": 0.4,
    "weight": 8,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Larven-Pokémon",
    "flavorText": "Sensect ist ein schlaues Pokémon, da es immer fleißig Informationen sammelt. Seine Stärke lässt jedoch zu wünschen übrig."
  },
  {
    "id": 825,
    "name": "dottler",
    "germanName": "Keradar",
    "types": [
      "bug",
      "psychic"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 30
    },
    "totalStats": 335,
    "height": 0.4,
    "weight": 19.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Radarkuppel-Pokémon",
    "flavorText": "Obwohl es sich fast nie bewegt, ist es am Leben. Es sollen Psycho-Kräfte in ihm erwacht sein, als es ohne Nahrung in seinem Panzer ausharrte."
  },
  {
    "id": 826,
    "name": "orbeetle",
    "germanName": "Maritellit",
    "types": [
      "bug",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 110,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 90
    },
    "totalStats": 505,
    "height": 0.4,
    "weight": 40.8,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Siebensterne-Pokémon",
    "flavorText": "Es ist allseits als sehr schlaues Pokémon bekannt. Sein großes Gehirn ist ein Indiz dafür, dass es über mächtige Psycho-Kräfte verfügt."
  },
  {
    "id": 827,
    "name": "nickit",
    "germanName": "Kleptifux",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 40,
      "attack": 28,
      "defense": 28,
      "specialAttack": 47,
      "specialDefense": 52,
      "speed": 50
    },
    "totalStats": 245,
    "height": 0.6,
    "weight": 8.9,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fuchs-Pokémon",
    "flavorText": "Es stibitzt Futter, das andere Pokémon gefunden haben. Dank der samtweichen Ballen an seinen Pfoten ist sein Gang lautlos."
  },
  {
    "id": 828,
    "name": "thievul",
    "germanName": "Gaunux",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 58,
      "defense": 58,
      "specialAttack": 87,
      "specialDefense": 92,
      "speed": 90
    },
    "totalStats": 455,
    "height": 1.2,
    "weight": 19.9,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fuchs-Pokémon",
    "flavorText": "Es markiert heimlich die Beute, auf die es ein Auge geworfen hat. Dann folgt es dem Geruch und stiehlt sie, wenn sich die Gelegenheit bietet."
  },
  {
    "id": 829,
    "name": "gossifleur",
    "germanName": "Cottini",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 10
    },
    "totalStats": 250,
    "height": 0.4,
    "weight": 2.2,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Blumenzier-Pokémon",
    "flavorText": "Steckt es sein Beinchen fest in den Boden und badet dann ausgiebig im Sonnenlicht, nimmt seine Blüte eine kräftigere Farbe an."
  },
  {
    "id": 830,
    "name": "eldegoss",
    "germanName": "Cottomi",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 60
    },
    "totalStats": 460,
    "height": 0.5,
    "weight": 2.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Baumwollzier-Pokémon",
    "flavorText": "Die Saat seines Wollflaums steckt voller Nährstoffe. Es verstreut sie im Wind und heilt damit Pflanzen und Pokémon."
  },
  {
    "id": 831,
    "name": "wooloo",
    "germanName": "Wolly",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 42,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 48
    },
    "totalStats": 270,
    "height": 0.6,
    "weight": 6,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schaf-Pokémon",
    "flavorText": "Sein stark gelocktes Fell hat eine sehr polsternde Wirkung. Selbst eine Klippe hinunterzufallen macht ihm nichts aus."
  },
  {
    "id": 832,
    "name": "dubwool",
    "germanName": "Zwollock",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 72,
      "attack": 80,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 88
    },
    "totalStats": 490,
    "height": 1.3,
    "weight": 43,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schaf-Pokémon",
    "flavorText": "Spannt man einen aus den elastischen Haaren von Zwollock gewobenen Teppich auf, kann man darauf hüpfen wie auf einem Trampolin."
  },
  {
    "id": 833,
    "name": "chewtle",
    "germanName": "Kamehaps",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "specialAttack": 38,
      "specialDefense": 38,
      "speed": 44
    },
    "totalStats": 284,
    "height": 0.3,
    "weight": 8.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schnapp-Pokémon",
    "flavorText": "Es schnappt sofort nach allem, was ihm unterkommt. Der Grund dafür ist anscheinend, dass seine wachsenden Vorderzähne jucken."
  },
  {
    "id": 834,
    "name": "drednaw",
    "germanName": "Kamalm",
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 90,
      "attack": 115,
      "defense": 90,
      "specialAttack": 48,
      "specialDefense": 68,
      "speed": 74
    },
    "totalStats": 485,
    "height": 1,
    "weight": 115.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Biss-Pokémon",
    "flavorText": "Dieses von Natur aus aggressive Pokémon beißt seine Beute mit seinem kräftigen Kiefer, der selbst Eisenstangen zermalmen kann."
  },
  {
    "id": 835,
    "name": "yamper",
    "germanName": "Voldi",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 59,
      "attack": 45,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 26
    },
    "totalStats": 270,
    "height": 0.3,
    "weight": 13.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Welpen-Pokémon",
    "flavorText": "Beim Rennen erzeugt es Elektrizität in seinem Schwanzansatz. In der Galar-Region erfreut es sich bei Hirten großer Beliebtheit."
  },
  {
    "id": 836,
    "name": "boltund",
    "germanName": "Bellektro",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 69,
      "attack": 90,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 60,
      "speed": 121
    },
    "totalStats": 490,
    "height": 1,
    "weight": 34,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hunde-Pokémon",
    "flavorText": "Es generiert Strom und lässt ihn zur Unterstützung beim Rennen in seine Beine fließen. Dadurch kann es drei Tage und Nächte ohne Pause rennen."
  },
  {
    "id": 837,
    "name": "rolycoly",
    "germanName": "Klonkett",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 30
    },
    "totalStats": 240,
    "height": 0.3,
    "weight": 12,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kohle-Pokémon",
    "flavorText": "Es wurde vor circa 400 Jahren in einer Kohlemine entdeckt. Sein Körper besteht fast aus denselben Komponenten wie Steinkohle."
  },
  {
    "id": 838,
    "name": "carkol",
    "germanName": "Wagong",
    "types": [
      "rock",
      "fire"
    ],
    "stats": {
      "hp": 80,
      "attack": 60,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    },
    "totalStats": 410,
    "height": 1.1,
    "weight": 78,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kohle-Pokémon",
    "flavorText": "Es produziert Steinkohle in seinem Körper. Die von ihm abfallende Kohle wurde früher in der Galar-Region fürs tägliche Leben genutzt."
  },
  {
    "id": 839,
    "name": "coalossal",
    "germanName": "Montecarbo",
    "types": [
      "rock",
      "fire"
    ],
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 120,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 30
    },
    "totalStats": 510,
    "height": 2.8,
    "weight": 310.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kohle-Pokémon",
    "flavorText": "Meist ist es friedfertig, aber wenn Menschen eine Mine zugrunde richten, sieht es rot und verbrennt sie mit 1 500 ºC heißen Flammen."
  },
  {
    "id": 840,
    "name": "applin",
    "germanName": "Knapfel",
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 20
    },
    "totalStats": 260,
    "height": 0.2,
    "weight": 0.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Apfelhaus-Pokémon",
    "flavorText": "Es verbringt sein ganzes Leben im Inneren eines Apfels. Um sich vor Vogel-Pokémon, seinen Fressfeinden, zu schützen, imitiert es einen Apfel."
  },
  {
    "id": 841,
    "name": "flapple",
    "germanName": "Drapfel",
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 70
    },
    "totalStats": 485,
    "height": 0.3,
    "weight": 1,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Apfelflügel-Pokémon",
    "flavorText": "Nach dem Verzehr eines sauren Apfels hat es sich entwickelt. In den Backentaschen speichert es eine saure Substanz, die zu Verbrennungen führt."
  },
  {
    "id": 842,
    "name": "appletun",
    "germanName": "Schlapfel",
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30
    },
    "totalStats": 485,
    "height": 0.4,
    "weight": 13,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Apfelnektar-Pokémon",
    "flavorText": "Nach dem Verzehr eines süßen Apfels hat es sich entwickelt. Es verströmt einen süßen Duft und lockt damit sein Futter an: Käfer-Pokémon."
  },
  {
    "id": 843,
    "name": "silicobra",
    "germanName": "Salanga",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 52,
      "attack": 57,
      "defense": 75,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 46
    },
    "totalStats": 315,
    "height": 2.2,
    "weight": 7.6,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sandschlangen-Pokémon",
    "flavorText": "Den Sand, den es beim Graben von Löchern verzehrt, speichert es in einem Beutel in seinem Hals. Dieser kann bis zu 8 kg Sand aufnehmen."
  },
  {
    "id": 844,
    "name": "sandaconda",
    "germanName": "Sanaconda",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 71
    },
    "totalStats": 510,
    "height": 3.8,
    "weight": 65.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sandschlangen-Pokémon",
    "flavorText": "Zieht es seinen ganzen Körper zusammen, kann es 100 kg Sand aus seinen Nasenlöchern feuern. Geht ihm der Sand aus, verliert es den Mut."
  },
  {
    "id": 845,
    "name": "cramorant",
    "germanName": "Urgl",
    "types": [
      "flying",
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 85
    },
    "totalStats": 475,
    "height": 0.8,
    "weight": 18,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schling-Pokémon",
    "flavorText": "Es ist so stark, dass es seine Gegner mit einem Angriff vernichten könnte, aber zerstreut wie es ist, vergisst es öfters, wen es gerade bekämpft."
  },
  {
    "id": 846,
    "name": "arrokuda",
    "germanName": "Pikuda",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 41,
      "attack": 63,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 66
    },
    "totalStats": 280,
    "height": 0.5,
    "weight": 1,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rempler-Pokémon",
    "flavorText": "Sein spitz zulaufender Kiefer ist sein ganzer Stolz. Erblickt es etwas, das sich auch nur ein bisschen bewegt, setzt es geradewegs zum Stoßangriff an."
  },
  {
    "id": 847,
    "name": "barraskewda",
    "germanName": "Barrakiefa",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 61,
      "attack": 123,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 136
    },
    "totalStats": 490,
    "height": 1.3,
    "weight": 30,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Spieß-Pokémon",
    "flavorText": "Sein Kiefer ist spitz wie ein Speer und hart wie Stahl. Außerdem soll Barrakiefa überraschend deliziös sein."
  },
  {
    "id": 848,
    "name": "toxel",
    "germanName": "Toxel",
    "types": [
      "electric",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 38,
      "defense": 35,
      "specialAttack": 54,
      "specialDefense": 35,
      "speed": 40
    },
    "totalStats": 242,
    "height": 0.4,
    "weight": 11,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Baby-Pokémon",
    "flavorText": "Das Gift aus dem Giftsack in seinem Körper sondert es über die Haut ab. Berührt man es, bekommt man einen lähmenden Schock verpasst."
  },
  {
    "id": 849,
    "name": "toxtricity-amped",
    "germanName": "Riffex",
    "types": [
      "electric",
      "poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "specialAttack": 114,
      "specialDefense": 70,
      "speed": 75
    },
    "totalStats": 502,
    "height": 1.6,
    "weight": 40,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Punk-Pokémon",
    "flavorText": "Wenn es am Fortsatz an seiner Brust kratzt und dadurch Strom erzeugt, dann erklingt in der Umgebung ein Ton wie von einer Gitarre."
  },
  {
    "id": 850,
    "name": "sizzlipede",
    "germanName": "Thermopod",
    "types": [
      "fire",
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 45
    },
    "totalStats": 305,
    "height": 0.7,
    "weight": 1,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Exotherm-Pokémon",
    "flavorText": "Mit dem entzündlichen Gas in seinem Körper erzeugt es Hitze. Die gelben Stellen an seinem Bauch werden besonders heiß."
  },
  {
    "id": 851,
    "name": "centiskorch",
    "germanName": "Infernopod",
    "types": [
      "fire",
      "bug"
    ],
    "stats": {
      "hp": 100,
      "attack": 115,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 65
    },
    "totalStats": 525,
    "height": 3,
    "weight": 120,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Exotherm-Pokémon",
    "flavorText": "Wenn es Hitze erzeugt, beträgt seine Temperatur etwa 800 ºC. Es bewegt seinen Körper wie eine Peitsche, um dann den Gegner anzuspringen."
  },
  {
    "id": 852,
    "name": "clobbopus",
    "germanName": "Klopptopus",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 68,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 32
    },
    "totalStats": 310,
    "height": 0.6,
    "weight": 4,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Balg-Pokémon",
    "flavorText": "Zur Futtersuche kommt es an Land. Es ist sehr neugierig, weshalb es alles, was es sieht, zunächst einmal mit seinen Tentakeln haut."
  },
  {
    "id": 853,
    "name": "grapploct",
    "germanName": "Kaocto",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 118,
      "defense": 90,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 42
    },
    "totalStats": 480,
    "height": 1.6,
    "weight": 39,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Jiu-Jitsu-Pokémon",
    "flavorText": "Sein Körper besteht gänzlich aus Muskeln. Die schiere Stärke seines Würgegriffs, bei dem es seine Tentakel einsetzt, ist sagenhaft."
  },
  {
    "id": 854,
    "name": "sinistea",
    "germanName": "Fatalitee",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 54,
      "speed": 50
    },
    "totalStats": 308,
    "height": 0.1,
    "weight": 0.2,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwarztee-Pokémon",
    "flavorText": "Es heißt, eine einsame Seele habe Besitz von einer abgestellten, kalten Tasse Schwarztee ergriffen und sei zu diesem Pokémon geworden."
  },
  {
    "id": 855,
    "name": "polteageist",
    "germanName": "Mortipot",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "specialAttack": 134,
      "specialDefense": 114,
      "speed": 70
    },
    "totalStats": 508,
    "height": 0.2,
    "weight": 0.4,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwarztee-Pokémon",
    "flavorText": "Sie lassen sich in alten Teekannen nieder. Die meisten dieser Kannen sind billige Fälschungen, aber es gibt auch ein paar sehr seltene Originale."
  },
  {
    "id": 856,
    "name": "hatenna",
    "germanName": "Brimova",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 42,
      "attack": 30,
      "defense": 45,
      "specialAttack": 56,
      "specialDefense": 53,
      "speed": 39
    },
    "totalStats": 265,
    "height": 0.4,
    "weight": 3.4,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Geruhsam-Pokémon",
    "flavorText": "Mit dem Fortsatz an seinem Kopf kann es die Gefühle von Lebewesen wahrnehmen. Es öffnet nur geruhsam veranlagten Leuten sein Herz."
  },
  {
    "id": 857,
    "name": "hattrem",
    "germanName": "Brimano",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 57,
      "attack": 40,
      "defense": 65,
      "specialAttack": 86,
      "specialDefense": 73,
      "speed": 49
    },
    "totalStats": 370,
    "height": 0.6,
    "weight": 4.8,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ruhe-Pokémon",
    "flavorText": "Empfindet jemand starke Emotionen, bringt es ihn auf gewaltsame Art zum Schweigen, egal, um wen es sich dabei handelt."
  },
  {
    "id": 858,
    "name": "hatterene",
    "germanName": "Silembrim",
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "specialAttack": 136,
      "specialDefense": 103,
      "speed": 29
    },
    "totalStats": 510,
    "height": 2.1,
    "weight": 5.1,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stille-Pokémon",
    "flavorText": "Die starken Psycho-Kräfte, die es ausstrahlt, rufen Kopfschmerzen hervor. So hält es andere Lebewesen von sich fern."
  },
  {
    "id": 859,
    "name": "impidimp",
    "germanName": "Bähmon",
    "types": [
      "dark",
      "fairy"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 50
    },
    "totalStats": 265,
    "height": 0.4,
    "weight": 5.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hinterlist-Pokémon",
    "flavorText": "Es wird kräftiger, indem es die von unzufriedenen Menschen und Pokémon ausgestoßene negative Energie einatmet."
  },
  {
    "id": 860,
    "name": "morgrem",
    "germanName": "Pelzebub",
    "types": [
      "dark",
      "fairy"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 45,
      "specialAttack": 75,
      "specialDefense": 55,
      "speed": 70
    },
    "totalStats": 370,
    "height": 0.8,
    "weight": 12.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schelm-Pokémon",
    "flavorText": "Es nutzt eine Taktik, bei der es sich niederwirft und vorgibt, sich zu entschuldigen, nur um dann mit seinem speerartigen Haar zuzustoßen."
  },
  {
    "id": 861,
    "name": "grimmsnarl",
    "germanName": "Olangaar",
    "types": [
      "dark",
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 120,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 75,
      "speed": 60
    },
    "totalStats": 510,
    "height": 1.5,
    "weight": 61,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Muskelaufbau-Pokémon",
    "flavorText": "Wickelt es seine Haare um den ganzen Körper, verstärkt dies seine Muskelkraft. Das macht es so stark, dass es sogar Machomei bezwingen könnte."
  },
  {
    "id": 862,
    "name": "obstagoon",
    "germanName": "Barrikadax",
    "types": [
      "dark",
      "normal"
    ],
    "stats": {
      "hp": 93,
      "attack": 90,
      "defense": 101,
      "specialAttack": 60,
      "specialDefense": 81,
      "speed": 95
    },
    "totalStats": 520,
    "height": 1.6,
    "weight": 46,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Barrikaden-Pokémon",
    "flavorText": "Es verfügt über eine beeindruckende Stimmkraft. Sein von Schreien begleitetes Drohverhalten nennt man auch „Abblocker“."
  },
  {
    "id": 863,
    "name": "perrserker",
    "germanName": "Mauzinger",
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 100,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 50
    },
    "totalStats": 440,
    "height": 0.8,
    "weight": 28,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wikinger-Pokémon",
    "flavorText": "Die Haare auf seinem Kopf haben sich zu etwas verhärtet, das an einen eisernen Helm erinnert. Es ist von Natur aus kriegerisch veranlagt."
  },
  {
    "id": 864,
    "name": "cursola",
    "germanName": "Gorgasonn",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 50,
      "specialAttack": 145,
      "specialDefense": 130,
      "speed": 30
    },
    "totalStats": 510,
    "height": 1,
    "weight": 0.4,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Korallen-Pokémon",
    "flavorText": "In ihm wuchs eine mysteriöse Kraft und so löste es sich von seinem Panzer los. Sein geisterhaftes Ektoplasma schützt die Seele im Kern."
  },
  {
    "id": 865,
    "name": "sirfetchd",
    "germanName": "Lauchzelot",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 62,
      "attack": 135,
      "defense": 95,
      "specialAttack": 68,
      "specialDefense": 82,
      "speed": 65
    },
    "totalStats": 507,
    "height": 0.8,
    "weight": 117,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wildenten-Pokémon",
    "flavorText": "Porenta, die viele Schlachten überstanden haben, entwickeln sich zu Lauchzelot. Verwelkt seine Lauchstange, zieht es sich vom Kämpfen zurück."
  },
  {
    "id": 866,
    "name": "mr-rime",
    "germanName": "Pantifrost",
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 100,
      "speed": 70
    },
    "totalStats": 520,
    "height": 1.5,
    "weight": 58.2,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Komiker-Pokémon",
    "flavorText": "Dieser begnadete Stepptänzer schwingt einen aus Eis geformten Gehstock und gibt mit leichtem Fuß seinen Tanz zum Besten."
  },
  {
    "id": 867,
    "name": "runerigus",
    "germanName": "Oghnatoll",
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 30
    },
    "totalStats": 483,
    "height": 1.6,
    "weight": 66.6,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Gram-Pokémon",
    "flavorText": "Eine antike Malerei, die mit einem mächtigen Fluch versehen wurde, nahm die Seele eines Makabaja auf und erwachte zum Leben."
  },
  {
    "id": 868,
    "name": "milcery",
    "germanName": "Hokumil",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 45,
      "attack": 40,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 34
    },
    "totalStats": 270,
    "height": 0.2,
    "weight": 0.3,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sahne-Pokémon",
    "flavorText": "Sein Körper besteht aus Sahne. Es entstand aus einer Ansammlung süßer Geruchspartikel in der Luft."
  },
  {
    "id": 869,
    "name": "alcremie",
    "germanName": "Pokusan",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 121,
      "speed": 64
    },
    "totalStats": 495,
    "height": 0.3,
    "weight": 0.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sahne-Pokémon",
    "flavorText": "Es macht einem Trainer, dem es vertraut, mit Beeren samt Sahnedekoration eine Freude."
  },
  {
    "id": 870,
    "name": "falinks",
    "germanName": "Legios",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 75
    },
    "totalStats": 470,
    "height": 3,
    "weight": 62,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Formations-Pokémon",
    "flavorText": "Dieses Pokémon besteht aus fünf Untergebenen und einem Anführer. Die Befehle des Anführers werden nie in Frage gestellt."
  },
  {
    "id": 871,
    "name": "pincurchin",
    "germanName": "Britzigel",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 48,
      "attack": 101,
      "defense": 95,
      "specialAttack": 91,
      "specialDefense": 85,
      "speed": 15
    },
    "totalStats": 435,
    "height": 0.3,
    "weight": 1,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Seeigel-Pokémon",
    "flavorText": "Aus den Spitzen seiner Stacheln setzt es Elektrizität frei. Mit seinen scharfen Zähnen schabt es Algen von Steinen ab und frisst sie."
  },
  {
    "id": 872,
    "name": "snom",
    "germanName": "Snomnom",
    "types": [
      "ice",
      "bug"
    ],
    "stats": {
      "hp": 30,
      "attack": 25,
      "defense": 35,
      "specialAttack": 45,
      "specialDefense": 30,
      "speed": 20
    },
    "totalStats": 185,
    "height": 0.3,
    "weight": 3.8,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wurm-Pokémon",
    "flavorText": "Es spinnt einen eiskalten Faden, mit dem es sich an einen Ast hängt. Dabei tut es so, als wäre es ein Eiszapfen, um in Ruhe schlafen zu können."
  },
  {
    "id": 873,
    "name": "frosmoth",
    "germanName": "Mottineva",
    "types": [
      "ice",
      "bug"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 65
    },
    "totalStats": 475,
    "height": 1.3,
    "weight": 42,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eismotten-Pokémon",
    "flavorText": "Seine Flügel sind -180 ºC kalt. Während es über Felder und Berge fliegt, verstreut es mit Kälte versetzten Flügelstaub, der wie Schnee aussieht."
  },
  {
    "id": 874,
    "name": "stonjourner",
    "germanName": "Humanolith",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 135,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 70
    },
    "totalStats": 470,
    "height": 2.5,
    "weight": 520,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Megalithen-Pokémon",
    "flavorText": "Es verweilt auf weitläufigen Wiesen und beobachtet den Lauf der Sonne. Dynamische Trittangriffe sind sein Spezialgebiet."
  },
  {
    "id": 875,
    "name": "eiscue-ice",
    "germanName": "Kubuin",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 110,
      "specialAttack": 65,
      "specialDefense": 90,
      "speed": 50
    },
    "totalStats": 470,
    "height": 1.4,
    "weight": 89,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pinguin-Pokémon",
    "flavorText": "Es kam von einem extrem kalten Ort, indem es sich treiben ließ und schließlich angespült wurde. Es kühlt unablässig sein Gesicht mit Eis."
  },
  {
    "id": 876,
    "name": "indeedee-male",
    "germanName": "Servol",
    "types": [
      "psychic",
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 55,
      "specialAttack": 105,
      "specialDefense": 95,
      "speed": 95
    },
    "totalStats": 475,
    "height": 0.9,
    "weight": 28,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Emotions-Pokémon",
    "flavorText": "Mit den Hörnern auf seinem Kopf erfasst es die Gefühle seines Gegenübers. Männchen kümmern sich wie Bedienstete um ihren Trainer."
  },
  {
    "id": 877,
    "name": "morpeko-full-belly",
    "germanName": "Morpeko",
    "types": [
      "electric",
      "dark"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "specialAttack": 70,
      "specialDefense": 58,
      "speed": 97
    },
    "totalStats": 436,
    "height": 0.3,
    "weight": 3,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Alter Ego-Pokémon",
    "flavorText": "Dieses immerzu hungrige Pokémon frisst Samen, die es in seinen beutelartigen Taschen verwahrt, und produziert so Elektrizität."
  },
  {
    "id": 878,
    "name": "cufant",
    "germanName": "Kupfanti",
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 72,
      "attack": 80,
      "defense": 49,
      "specialAttack": 40,
      "specialDefense": 49,
      "speed": 40
    },
    "totalStats": 330,
    "height": 1.2,
    "weight": 100,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kupferfant-Pokémon",
    "flavorText": "Dieses Pokémon verfügt über eine Stärke, mit der es problemlos fünf Tonnen stemmen kann. Es nutzt seinen Rüssel, um in der Erde zu graben."
  },
  {
    "id": 879,
    "name": "copperajah",
    "germanName": "Patinaraja",
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 122,
      "attack": 130,
      "defense": 69,
      "specialAttack": 80,
      "specialDefense": 69,
      "speed": 30
    },
    "totalStats": 500,
    "height": 3,
    "weight": 650,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kupferfant-Pokémon",
    "flavorText": "Seine grüne Haut ist wasserresistent. Es kam vor langer Zeit aus einer anderen Region und verrichtete mit den Menschen Arbeiten."
  },
  {
    "id": 880,
    "name": "dracozolt",
    "germanName": "Lectragon",
    "types": [
      "electric",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 75
    },
    "totalStats": 505,
    "height": 1.8,
    "weight": 190,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fossil-Pokémon",
    "flavorText": "Dank seines kräftigen Unterkörpers war es in der Urzeit unbesiegbar, doch es fraß seine Pflanzennahrung restlos auf und starb daher aus."
  },
  {
    "id": 881,
    "name": "arctozolt",
    "germanName": "Lecryodon",
    "types": [
      "electric",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 55
    },
    "totalStats": 505,
    "height": 2.3,
    "weight": 150,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fossil-Pokémon",
    "flavorText": "Durch das Zittern seines gefrorenen Oberkörpers entsteht Elektrizität. Das Laufen fällt ihm äußerst schwer."
  },
  {
    "id": 882,
    "name": "dracovish",
    "germanName": "Pescragon",
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 75
    },
    "totalStats": 505,
    "height": 2.3,
    "weight": 215,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fossil-Pokémon",
    "flavorText": "Dank der enormen Kraft seiner Beine und seines Kiefers war es in der Urzeit unbesiegbar, doch es fing seine Beute restlos weg und starb daher aus."
  },
  {
    "id": 883,
    "name": "arctovish",
    "germanName": "Pescryodon",
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 55
    },
    "totalStats": 505,
    "height": 2,
    "weight": 175,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fossil-Pokémon",
    "flavorText": "Es fängt seine Beute, indem es seine Umgebung einfriert, doch da sich sein Maul oben auf seinem Kopf befindet, ist Fressen für es sehr umständlich."
  },
  {
    "id": 884,
    "name": "duraludon",
    "germanName": "Duraludon",
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 70,
      "attack": 95,
      "defense": 115,
      "specialAttack": 120,
      "specialDefense": 50,
      "speed": 85
    },
    "totalStats": 535,
    "height": 1.8,
    "weight": 40,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Legierungs-Pokémon",
    "flavorText": "Sein an aufpoliertes Metall erinnernder Körper ist nicht nur leicht, sondern auch robust. Er hat jedoch den Nachteil, schnell zu rosten."
  },
  {
    "id": 885,
    "name": "dreepy",
    "germanName": "Grolldra",
    "types": [
      "dragon",
      "ghost"
    ],
    "stats": {
      "hp": 28,
      "attack": 60,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 82
    },
    "totalStats": 270,
    "height": 0.5,
    "weight": 2,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Missgunst-Pokémon",
    "flavorText": "In der Urzeit lebte es im Meer. Nun ist es als Geister-Pokémon wiedererwacht und irrt rastlos durch seinen früheren Lebensraum."
  },
  {
    "id": 886,
    "name": "drakloak",
    "germanName": "Phandra",
    "types": [
      "dragon",
      "ghost"
    ],
    "stats": {
      "hp": 68,
      "attack": 80,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 102
    },
    "totalStats": 410,
    "height": 1.4,
    "weight": 11,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Betreuer-Pokémon",
    "flavorText": "Beim Fliegen ist es bis zu 200 km/h schnell. Es kämpft gemeinsam mit Grolldra und kümmert sich bis zu dessen Entwicklung um es."
  },
  {
    "id": 887,
    "name": "dragapult",
    "germanName": "Katapuldra",
    "types": [
      "dragon",
      "ghost"
    ],
    "stats": {
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "specialAttack": 100,
      "specialDefense": 75,
      "speed": 142
    },
    "totalStats": 600,
    "height": 3,
    "weight": 50,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tarnkünstler-Pokémon",
    "flavorText": "Es transportiert Grolldra in den Löchern an seinen Hörnern. Kommt es zum Kampf, schießt es diese mit Mach-Geschwindigkeit ab."
  },
  {
    "id": 888,
    "name": "zacian",
    "germanName": "Zacian",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "specialAttack": 80,
      "specialDefense": 115,
      "speed": 138
    },
    "totalStats": 660,
    "height": 2.8,
    "weight": 110,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Krieger-Pokémon",
    "flavorText": "Dieses Pokémon gilt als legendärer Held. Es nimmt Metall auf, wandelt dies in eine Waffe um und kämpft damit."
  },
  {
    "id": 889,
    "name": "zamazenta",
    "germanName": "Zamazenta",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "specialAttack": 80,
      "specialDefense": 115,
      "speed": 138
    },
    "totalStats": 660,
    "height": 2.9,
    "weight": 210,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Krieger-Pokémon",
    "flavorText": "Dieses Pokémon vereinte seine Kräfte mit einem Menschenkönig und rettete die Galar-Region. Es nimmt Metall in sich auf und kämpft damit."
  },
  {
    "id": 890,
    "name": "eternatus",
    "germanName": "Endynalos",
    "types": [
      "poison",
      "dragon"
    ],
    "stats": {
      "hp": 140,
      "attack": 85,
      "defense": 95,
      "specialAttack": 145,
      "specialDefense": 95,
      "speed": 130
    },
    "totalStats": 690,
    "height": 20,
    "weight": 950,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Giganten-Pokémon",
    "flavorText": "Indem der Kern in seinem Brustkorb die Energie absorbiert, die aus dem Boden der Galar-Region strömt, wird es aktiv."
  },
  {
    "id": 891,
    "name": "kubfu",
    "germanName": "Dakuma",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 60,
      "specialAttack": 53,
      "specialDefense": 50,
      "speed": 72
    },
    "totalStats": 385,
    "height": 0.6,
    "weight": 12,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Kung-Fu-Pokémon",
    "flavorText": "Durch rigoroses Training perfektioniert es seine Kampftechnik. Diese bestimmt, welche Form Dakuma nach der Entwicklung annimmt."
  },
  {
    "id": 892,
    "name": "urshifu-single-strike",
    "germanName": "Wulaosu",
    "types": [
      "fighting",
      "dark"
    ],
    "stats": {
      "hp": 100,
      "attack": 130,
      "defense": 100,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 97
    },
    "totalStats": 550,
    "height": 1.9,
    "weight": 105,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Kung-Fu-Pokémon",
    "flavorText": "Es ist darauf spezialisiert, Gegner mit nur einem Treffer zu bezwingen, indem es sie schlagartig anfällt und einen fokussierten Hieb austeilt."
  },
  {
    "id": 893,
    "name": "zarude",
    "germanName": "Zarude",
    "types": [
      "dark",
      "grass"
    ],
    "stats": {
      "hp": 105,
      "attack": 120,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 105
    },
    "totalStats": 600,
    "height": 1.8,
    "weight": 70,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Finsteraffen-Pokémon",
    "flavorText": "Zarude leben gruppenweise in dichten Wäldern und werden von den anderen Pokémon dort gefürchtet, da sie sehr aggressiv sind."
  },
  {
    "id": 894,
    "name": "regieleki",
    "germanName": "Regieleki",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 200
    },
    "totalStats": 580,
    "height": 1.2,
    "weight": 145,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Elektronen-Pokémon",
    "flavorText": "Es besteht aus gebündelter elektrischer Energie. Werden die Ringe an seinem Körper entfernt, setzt das angeblich seine verborgenen Kräfte frei."
  },
  {
    "id": 895,
    "name": "regidrago",
    "germanName": "Regidrago",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 200,
      "attack": 100,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 80
    },
    "totalStats": 580,
    "height": 2.1,
    "weight": 200,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Drachenkugel-Pokémon",
    "flavorText": "Einer unbestätigten Theorie zufolge sind seine Arme wie der Kopf eines urzeitlichen Drachen-Pokémon geformt."
  },
  {
    "id": 896,
    "name": "glastrier",
    "germanName": "Polaross",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 100,
      "attack": 145,
      "defense": 130,
      "specialAttack": 65,
      "specialDefense": 110,
      "speed": 30
    },
    "totalStats": 580,
    "height": 2.2,
    "weight": 800,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Wildblut-Pokémon",
    "flavorText": "Aus seinen Hufen verströmt es eisige Kälte. Dieses ungestüme Pokémon nimmt sich alles, was es will, mit roher Gewalt."
  },
  {
    "id": 897,
    "name": "spectrier",
    "germanName": "Phantoross",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 100,
      "attack": 65,
      "defense": 60,
      "specialAttack": 145,
      "specialDefense": 80,
      "speed": 130
    },
    "totalStats": 580,
    "height": 2,
    "weight": 44.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Flinkblut-Pokémon",
    "flavorText": "Um sein Umfeld zu erkunden, nutzt es all seine Sinne – bis auf den Sehsinn. Wer von Phantoross getreten wird, verliert angeblich seine Seele."
  },
  {
    "id": 898,
    "name": "calyrex",
    "germanName": "Coronospa",
    "types": [
      "psychic",
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80
    },
    "totalStats": 500,
    "height": 1.1,
    "weight": 7.7,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Königs-Pokémon",
    "flavorText": "Ein warmherziges Pokémon, das über heilende und segnende Kräfte verfügt. In längst vergangenen Zeiten herrschte es über Galar."
  },
  {
    "id": 899,
    "name": "wyrdeer",
    "germanName": "Damythir",
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 103,
      "attack": 105,
      "defense": 72,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 65
    },
    "totalStats": 525,
    "height": 1.8,
    "weight": 95.1,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Vielender-Pokémon",
    "flavorText": ""
  },
  {
    "id": 900,
    "name": "kleavor",
    "germanName": "Axantor",
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "specialAttack": 45,
      "specialDefense": 70,
      "speed": 85
    },
    "totalStats": 500,
    "height": 1.8,
    "weight": 89,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Axt-Pokémon",
    "flavorText": ""
  },
  {
    "id": 901,
    "name": "ursaluna",
    "germanName": "Ursaluna",
    "types": [
      "ground",
      "normal"
    ],
    "stats": {
      "hp": 130,
      "attack": 140,
      "defense": 105,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 50
    },
    "totalStats": 550,
    "height": 2.4,
    "weight": 290,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Torf-Pokémon",
    "flavorText": ""
  },
  {
    "id": 902,
    "name": "basculegion-male",
    "germanName": "Salmagnis",
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 120,
      "attack": 112,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 75,
      "speed": 78
    },
    "totalStats": 530,
    "height": 3,
    "weight": 110,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Großfisch-Pokémon",
    "flavorText": ""
  },
  {
    "id": 903,
    "name": "sneasler",
    "germanName": "Snieboss",
    "types": [
      "fighting",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 130,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 120
    },
    "totalStats": 510,
    "height": 1.3,
    "weight": 43,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Kletterei-Pokémon",
    "flavorText": ""
  },
  {
    "id": 904,
    "name": "overqwil",
    "germanName": "Myriador",
    "types": [
      "dark",
      "poison"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 95,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 85
    },
    "totalStats": 510,
    "height": 2.5,
    "weight": 60.5,
    "generation": 8,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tausenddorn-Pokémon",
    "flavorText": ""
  },
  {
    "id": 905,
    "name": "enamorus-incarnate",
    "germanName": "Cupidos",
    "types": [
      "fairy",
      "flying"
    ],
    "stats": {
      "hp": 74,
      "attack": 115,
      "defense": 70,
      "specialAttack": 135,
      "specialDefense": 80,
      "speed": 106
    },
    "totalStats": 580,
    "height": 1.6,
    "weight": 48,
    "generation": 8,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Hassliebe-Pokémon",
    "flavorText": ""
  },
  {
    "id": 906,
    "name": "sprigatito",
    "germanName": "Felori",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 61,
      "defense": 54,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 65
    },
    "totalStats": 310,
    "height": 0.4,
    "weight": 4.1,
    "generation": 9,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 907,
    "name": "floragato",
    "germanName": "Feliospa",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 61,
      "attack": 80,
      "defense": 63,
      "specialAttack": 60,
      "specialDefense": 63,
      "speed": 83
    },
    "totalStats": 410,
    "height": 0.9,
    "weight": 12.2,
    "generation": 9,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 908,
    "name": "meowscarada",
    "germanName": "Maskagato",
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 76,
      "attack": 110,
      "defense": 70,
      "specialAttack": 81,
      "specialDefense": 70,
      "speed": 123
    },
    "totalStats": 530,
    "height": 1.5,
    "weight": 31.2,
    "generation": 9,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Magier",
    "flavorText": ""
  },
  {
    "id": 909,
    "name": "fuecoco",
    "germanName": "Krokel",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 67,
      "attack": 45,
      "defense": 59,
      "specialAttack": 63,
      "specialDefense": 40,
      "speed": 36
    },
    "totalStats": 310,
    "height": 0.4,
    "weight": 9.8,
    "generation": 9,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerkroko",
    "flavorText": ""
  },
  {
    "id": 910,
    "name": "crocalor",
    "germanName": "Lokroko",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 81,
      "attack": 55,
      "defense": 78,
      "specialAttack": 90,
      "specialDefense": 58,
      "speed": 49
    },
    "totalStats": 411,
    "height": 1,
    "weight": 30.7,
    "generation": 9,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerkroko",
    "flavorText": ""
  },
  {
    "id": 911,
    "name": "skeledirge",
    "germanName": "Skelokrok",
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 104,
      "attack": 75,
      "defense": 100,
      "specialAttack": 110,
      "specialDefense": 75,
      "speed": 66
    },
    "totalStats": 530,
    "height": 1.6,
    "weight": 326.5,
    "generation": 9,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sänger",
    "flavorText": ""
  },
  {
    "id": 912,
    "name": "quaxly",
    "germanName": "Kwaks",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 45,
      "speed": 50
    },
    "totalStats": 310,
    "height": 0.5,
    "weight": 6.1,
    "generation": 9,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Jungente",
    "flavorText": ""
  },
  {
    "id": 913,
    "name": "quaxwell",
    "germanName": "Fuentente",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 65
    },
    "totalStats": 410,
    "height": 1.2,
    "weight": 21.5,
    "generation": 9,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Übung",
    "flavorText": ""
  },
  {
    "id": 914,
    "name": "quaquaval",
    "germanName": "Bailonda",
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 85
    },
    "totalStats": 530,
    "height": 1.8,
    "weight": 61.9,
    "generation": 9,
    "isStarter": true,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Tänzer",
    "flavorText": ""
  },
  {
    "id": 915,
    "name": "lechonk",
    "germanName": "Ferkuli",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 35
    },
    "totalStats": 254,
    "height": 0.5,
    "weight": 10.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwein",
    "flavorText": ""
  },
  {
    "id": 916,
    "name": "oinkologne-male",
    "germanName": "Fragrunz",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 110,
      "attack": 100,
      "defense": 75,
      "specialAttack": 59,
      "specialDefense": 80,
      "speed": 65
    },
    "totalStats": 489,
    "height": 1,
    "weight": 120,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schwein",
    "flavorText": ""
  },
  {
    "id": 917,
    "name": "tarountula",
    "germanName": "Tarundel",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 35,
      "attack": 41,
      "defense": 45,
      "specialAttack": 29,
      "specialDefense": 40,
      "speed": 20
    },
    "totalStats": 210,
    "height": 0.3,
    "weight": 4,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fadenkugel",
    "flavorText": ""
  },
  {
    "id": 918,
    "name": "spidops",
    "germanName": "Spinsidias",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 60,
      "attack": 79,
      "defense": 92,
      "specialAttack": 52,
      "specialDefense": 86,
      "speed": 35
    },
    "totalStats": 404,
    "height": 1,
    "weight": 16.5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Falle",
    "flavorText": ""
  },
  {
    "id": 919,
    "name": "nymble",
    "germanName": "Micrick",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 33,
      "attack": 46,
      "defense": 40,
      "specialAttack": 21,
      "specialDefense": 25,
      "speed": 45
    },
    "totalStats": 210,
    "height": 0.2,
    "weight": 1,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Heuschrecke",
    "flavorText": ""
  },
  {
    "id": 920,
    "name": "lokix",
    "germanName": "Lextremo",
    "types": [
      "bug",
      "dark"
    ],
    "stats": {
      "hp": 71,
      "attack": 102,
      "defense": 78,
      "specialAttack": 52,
      "specialDefense": 55,
      "speed": 92
    },
    "totalStats": 450,
    "height": 1,
    "weight": 17.5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Heuschrecke",
    "flavorText": ""
  },
  {
    "id": 921,
    "name": "pawmi",
    "germanName": "Pamo",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 20,
      "specialAttack": 40,
      "specialDefense": 25,
      "speed": 60
    },
    "totalStats": 240,
    "height": 0.3,
    "weight": 2.5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maus",
    "flavorText": ""
  },
  {
    "id": 922,
    "name": "pawmo",
    "germanName": "Pamamo",
    "types": [
      "electric",
      "fighting"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 85
    },
    "totalStats": 350,
    "height": 0.4,
    "weight": 6.5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Maus",
    "flavorText": ""
  },
  {
    "id": 923,
    "name": "pawmot",
    "germanName": "Pamomamo",
    "types": [
      "electric",
      "fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 105
    },
    "totalStats": 490,
    "height": 0.9,
    "weight": 41,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Behandlung",
    "flavorText": ""
  },
  {
    "id": 924,
    "name": "tandemaus",
    "germanName": "Zwieps",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 75
    },
    "totalStats": 305,
    "height": 0.3,
    "weight": 1.8,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paar",
    "flavorText": ""
  },
  {
    "id": 925,
    "name": "maushold-family-of-four",
    "germanName": "Famieps",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 111
    },
    "totalStats": 470,
    "height": 0.3,
    "weight": 2.3,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Familie",
    "flavorText": ""
  },
  {
    "id": 926,
    "name": "fidough",
    "germanName": "Hefel",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 37,
      "attack": 55,
      "defense": 70,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 65
    },
    "totalStats": 312,
    "height": 0.3,
    "weight": 10.9,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Welpe",
    "flavorText": ""
  },
  {
    "id": 927,
    "name": "dachsbun",
    "germanName": "Backel",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 95
    },
    "totalStats": 477,
    "height": 0.5,
    "weight": 14.9,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hund",
    "flavorText": ""
  },
  {
    "id": 928,
    "name": "smoliv",
    "germanName": "Olini",
    "types": [
      "grass",
      "normal"
    ],
    "stats": {
      "hp": 41,
      "attack": 35,
      "defense": 45,
      "specialAttack": 58,
      "specialDefense": 51,
      "speed": 30
    },
    "totalStats": 260,
    "height": 0.3,
    "weight": 6.5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Olive",
    "flavorText": ""
  },
  {
    "id": 929,
    "name": "dolliv",
    "germanName": "Olivinio",
    "types": [
      "grass",
      "normal"
    ],
    "stats": {
      "hp": 52,
      "attack": 53,
      "defense": 60,
      "specialAttack": 78,
      "specialDefense": 78,
      "speed": 33
    },
    "totalStats": 354,
    "height": 0.6,
    "weight": 11.9,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Olive",
    "flavorText": ""
  },
  {
    "id": 930,
    "name": "arboliva",
    "germanName": "Olithena",
    "types": [
      "grass",
      "normal"
    ],
    "stats": {
      "hp": 78,
      "attack": 69,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 109,
      "speed": 39
    },
    "totalStats": 510,
    "height": 1.4,
    "weight": 48.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Olive",
    "flavorText": ""
  },
  {
    "id": 931,
    "name": "squawkabilly-green-plumage",
    "germanName": "Krawalloro",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "specialAttack": 45,
      "specialDefense": 51,
      "speed": 92
    },
    "totalStats": 417,
    "height": 0.6,
    "weight": 2.4,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sittich",
    "flavorText": ""
  },
  {
    "id": 932,
    "name": "nacli",
    "germanName": "Geosali",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 75,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 25
    },
    "totalStats": 280,
    "height": 0.4,
    "weight": 16,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Steinsalz",
    "flavorText": ""
  },
  {
    "id": 933,
    "name": "naclstack",
    "germanName": "Sedisal",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 35
    },
    "totalStats": 355,
    "height": 0.6,
    "weight": 105,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Steinsalz",
    "flavorText": ""
  },
  {
    "id": 934,
    "name": "garganacl",
    "germanName": "Saltigant",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 130,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 35
    },
    "totalStats": 500,
    "height": 2.3,
    "weight": 240,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Steinsalz",
    "flavorText": ""
  },
  {
    "id": 935,
    "name": "charcadet",
    "germanName": "Knarbon",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 35
    },
    "totalStats": 255,
    "height": 0.6,
    "weight": 10.5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerkind",
    "flavorText": ""
  },
  {
    "id": 936,
    "name": "armarouge",
    "germanName": "Crimanzo",
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 100,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 75
    },
    "totalStats": 525,
    "height": 1.5,
    "weight": 85,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerrüstung",
    "flavorText": ""
  },
  {
    "id": 937,
    "name": "ceruledge",
    "germanName": "Azugladis",
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 85
    },
    "totalStats": 525,
    "height": 1.6,
    "weight": 62,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Feuerklingen",
    "flavorText": ""
  },
  {
    "id": 938,
    "name": "tadbulb",
    "germanName": "Blipp",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 61,
      "attack": 31,
      "defense": 41,
      "specialAttack": 59,
      "specialDefense": 35,
      "speed": 45
    },
    "totalStats": 272,
    "height": 0.3,
    "weight": 0.4,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stromquappe",
    "flavorText": ""
  },
  {
    "id": 939,
    "name": "bellibolt",
    "germanName": "Wampitz",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 109,
      "attack": 64,
      "defense": 91,
      "specialAttack": 103,
      "specialDefense": 83,
      "speed": 45
    },
    "totalStats": 495,
    "height": 1.2,
    "weight": 113,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Stromfrosch",
    "flavorText": ""
  },
  {
    "id": 940,
    "name": "wattrel",
    "germanName": "Voltrel",
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 70
    },
    "totalStats": 280,
    "height": 0.4,
    "weight": 3.6,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Sturmvogel",
    "flavorText": ""
  },
  {
    "id": 941,
    "name": "kilowattrel",
    "germanName": "Voltrean",
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 125
    },
    "totalStats": 490,
    "height": 1.4,
    "weight": 38.6,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Fregattvogel",
    "flavorText": ""
  },
  {
    "id": 942,
    "name": "maschiff",
    "germanName": "Mobtiff",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 60,
      "attack": 78,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 51,
      "speed": 51
    },
    "totalStats": 340,
    "height": 0.5,
    "weight": 16,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Halbstark",
    "flavorText": ""
  },
  {
    "id": 943,
    "name": "mabosstiff",
    "germanName": "Mastifioso",
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 85
    },
    "totalStats": 505,
    "height": 1.1,
    "weight": 61,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Oberhaupt",
    "flavorText": ""
  },
  {
    "id": 944,
    "name": "shroodle",
    "germanName": "Sproxi",
    "types": [
      "poison",
      "normal"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 35,
      "speed": 75
    },
    "totalStats": 290,
    "height": 0.2,
    "weight": 0.7,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftmaus",
    "flavorText": ""
  },
  {
    "id": 945,
    "name": "grafaiai",
    "germanName": "Affiti",
    "types": [
      "poison",
      "normal"
    ],
    "stats": {
      "hp": 63,
      "attack": 95,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 72,
      "speed": 110
    },
    "totalStats": 485,
    "height": 0.7,
    "weight": 27.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Giftaffe",
    "flavorText": ""
  },
  {
    "id": 946,
    "name": "bramblin",
    "germanName": "Weherba",
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 30,
      "specialAttack": 45,
      "specialDefense": 35,
      "speed": 60
    },
    "totalStats": 275,
    "height": 0.6,
    "weight": 0.6,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rollgras",
    "flavorText": ""
  },
  {
    "id": 947,
    "name": "brambleghast",
    "germanName": "Horrerba",
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 55,
      "attack": 115,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 90
    },
    "totalStats": 480,
    "height": 1.2,
    "weight": 6,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rollgras",
    "flavorText": ""
  },
  {
    "id": 948,
    "name": "toedscool",
    "germanName": "Tentagra",
    "types": [
      "ground",
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 70
    },
    "totalStats": 335,
    "height": 0.9,
    "weight": 33,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Quallenpilz",
    "flavorText": ""
  },
  {
    "id": 949,
    "name": "toedscruel",
    "germanName": "Tenterra",
    "types": [
      "ground",
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 100
    },
    "totalStats": 515,
    "height": 1.9,
    "weight": 58,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Quallenpilz",
    "flavorText": ""
  },
  {
    "id": 950,
    "name": "klawf",
    "germanName": "Klibbe",
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "specialAttack": 35,
      "specialDefense": 55,
      "speed": 75
    },
    "totalStats": 450,
    "height": 1.3,
    "weight": 79,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Lauer",
    "flavorText": ""
  },
  {
    "id": 951,
    "name": "capsakid",
    "germanName": "Chilingel",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 62,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 40,
      "speed": 50
    },
    "totalStats": 304,
    "height": 0.3,
    "weight": 3,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Habanero",
    "flavorText": ""
  },
  {
    "id": 952,
    "name": "scovillain",
    "germanName": "Halupenjo",
    "types": [
      "grass",
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 108,
      "defense": 65,
      "specialAttack": 108,
      "specialDefense": 65,
      "speed": 75
    },
    "totalStats": 486,
    "height": 0.9,
    "weight": 15,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Habanero",
    "flavorText": ""
  },
  {
    "id": 953,
    "name": "rellor",
    "germanName": "Relluk",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 41,
      "attack": 50,
      "defense": 60,
      "specialAttack": 31,
      "specialDefense": 58,
      "speed": 30
    },
    "totalStats": 270,
    "height": 0.2,
    "weight": 1,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wälz",
    "flavorText": ""
  },
  {
    "id": 954,
    "name": "rabsca",
    "germanName": "Skarabaks",
    "types": [
      "bug",
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 85,
      "specialAttack": 115,
      "specialDefense": 100,
      "speed": 45
    },
    "totalStats": 470,
    "height": 0.3,
    "weight": 3.5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Wälz",
    "flavorText": ""
  },
  {
    "id": 955,
    "name": "flittle",
    "germanName": "Flattutu",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 30,
      "speed": 75
    },
    "totalStats": 255,
    "height": 0.2,
    "weight": 1.5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Rüschen",
    "flavorText": ""
  },
  {
    "id": 956,
    "name": "espathra",
    "germanName": "Psiopatra",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 60,
      "specialAttack": 101,
      "specialDefense": 60,
      "speed": 105
    },
    "totalStats": 481,
    "height": 1.9,
    "weight": 90,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Strauß",
    "flavorText": ""
  },
  {
    "id": 957,
    "name": "tinkatink",
    "germanName": "Forgita",
    "types": [
      "fairy",
      "steel"
    ],
    "stats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 64,
      "speed": 58
    },
    "totalStats": 297,
    "height": 0.4,
    "weight": 8.9,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schmied",
    "flavorText": ""
  },
  {
    "id": 958,
    "name": "tinkatuff",
    "germanName": "Tafforgita",
    "types": [
      "fairy",
      "steel"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 82,
      "speed": 78
    },
    "totalStats": 380,
    "height": 0.7,
    "weight": 59.1,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hammer",
    "flavorText": ""
  },
  {
    "id": 959,
    "name": "tinkaton",
    "germanName": "Granforgita",
    "types": [
      "fairy",
      "steel"
    ],
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 77,
      "specialAttack": 70,
      "specialDefense": 105,
      "speed": 94
    },
    "totalStats": 506,
    "height": 0.7,
    "weight": 112.8,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Hammer",
    "flavorText": ""
  },
  {
    "id": 960,
    "name": "wiglett",
    "germanName": "Schligda",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "specialAttack": 35,
      "specialDefense": 25,
      "speed": 95
    },
    "totalStats": 245,
    "height": 1.2,
    "weight": 1.8,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Meeraal",
    "flavorText": ""
  },
  {
    "id": 961,
    "name": "wugtrio",
    "germanName": "Schligdri",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 120
    },
    "totalStats": 425,
    "height": 1.2,
    "weight": 5.4,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Meeraal",
    "flavorText": ""
  },
  {
    "id": 962,
    "name": "bombirdier",
    "germanName": "Adebom",
    "types": [
      "flying",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 103,
      "defense": 85,
      "specialAttack": 60,
      "specialDefense": 85,
      "speed": 82
    },
    "totalStats": 485,
    "height": 1.5,
    "weight": 42.9,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Abwurf",
    "flavorText": ""
  },
  {
    "id": 963,
    "name": "finizen",
    "germanName": "Normifin",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 75
    },
    "totalStats": 315,
    "height": 1.3,
    "weight": 60.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Delfin",
    "flavorText": ""
  },
  {
    "id": 964,
    "name": "palafin-zero",
    "germanName": "Delfinator",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 72,
      "specialAttack": 53,
      "specialDefense": 62,
      "speed": 100
    },
    "totalStats": 457,
    "height": 1.3,
    "weight": 60.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Delfin",
    "flavorText": ""
  },
  {
    "id": 965,
    "name": "varoom",
    "germanName": "Knattox",
    "types": [
      "steel",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 70,
      "defense": 63,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 47
    },
    "totalStats": 300,
    "height": 1,
    "weight": 35,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Einzylinder",
    "flavorText": ""
  },
  {
    "id": 966,
    "name": "revavroom",
    "germanName": "Knattatox",
    "types": [
      "steel",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 119,
      "defense": 90,
      "specialAttack": 54,
      "specialDefense": 67,
      "speed": 90
    },
    "totalStats": 500,
    "height": 1.8,
    "weight": 120,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Mehrzylinder",
    "flavorText": ""
  },
  {
    "id": 967,
    "name": "cyclizar",
    "germanName": "Mopex",
    "types": [
      "dragon",
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 95,
      "defense": 65,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 121
    },
    "totalStats": 501,
    "height": 1.6,
    "weight": 63,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Ritt",
    "flavorText": ""
  },
  {
    "id": 968,
    "name": "orthworm",
    "germanName": "Schlurm",
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 145,
      "specialAttack": 60,
      "specialDefense": 55,
      "speed": 65
    },
    "totalStats": 480,
    "height": 2.5,
    "weight": 310,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Regenwurm",
    "flavorText": ""
  },
  {
    "id": 969,
    "name": "glimmet",
    "germanName": "Lumispross",
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 48,
      "attack": 35,
      "defense": 42,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 60
    },
    "totalStats": 350,
    "height": 0.7,
    "weight": 8,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Erz",
    "flavorText": ""
  },
  {
    "id": 970,
    "name": "glimmora",
    "germanName": "Lumiflora",
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 83,
      "attack": 55,
      "defense": 90,
      "specialAttack": 130,
      "specialDefense": 81,
      "speed": 86
    },
    "totalStats": 525,
    "height": 1.5,
    "weight": 45,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Erz",
    "flavorText": ""
  },
  {
    "id": 971,
    "name": "greavard",
    "germanName": "Gruff",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 61,
      "defense": 60,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 34
    },
    "totalStats": 290,
    "height": 0.6,
    "weight": 35,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Geisterhund",
    "flavorText": ""
  },
  {
    "id": 972,
    "name": "houndstone",
    "germanName": "Friedwuff",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 72,
      "attack": 101,
      "defense": 100,
      "specialAttack": 50,
      "specialDefense": 97,
      "speed": 68
    },
    "totalStats": 488,
    "height": 2,
    "weight": 15,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Geisterhund",
    "flavorText": ""
  },
  {
    "id": 973,
    "name": "flamigo",
    "germanName": "Flaminkno",
    "types": [
      "flying",
      "fighting"
    ],
    "stats": {
      "hp": 82,
      "attack": 115,
      "defense": 74,
      "specialAttack": 75,
      "specialDefense": 64,
      "speed": 90
    },
    "totalStats": 500,
    "height": 1.6,
    "weight": 37,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Synchron",
    "flavorText": ""
  },
  {
    "id": 974,
    "name": "cetoddle",
    "germanName": "Flaniwal",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 108,
      "attack": 68,
      "defense": 45,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 43
    },
    "totalStats": 334,
    "height": 1.2,
    "weight": 45,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Landwal",
    "flavorText": ""
  },
  {
    "id": 975,
    "name": "cetitan",
    "germanName": "Kolowal",
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 170,
      "attack": 113,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 73
    },
    "totalStats": 521,
    "height": 4.5,
    "weight": 700,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Landwal",
    "flavorText": ""
  },
  {
    "id": 976,
    "name": "veluza",
    "germanName": "Agiluza",
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 102,
      "defense": 73,
      "specialAttack": 78,
      "specialDefense": 65,
      "speed": 70
    },
    "totalStats": 478,
    "height": 2.5,
    "weight": 90,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Abtrennung",
    "flavorText": ""
  },
  {
    "id": 977,
    "name": "dondozo",
    "germanName": "Heerashai",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 150,
      "attack": 100,
      "defense": 115,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 35
    },
    "totalStats": 530,
    "height": 12,
    "weight": 220,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Großwels",
    "flavorText": ""
  },
  {
    "id": 978,
    "name": "tatsugiri-curly",
    "germanName": "Nigiragi",
    "types": [
      "dragon",
      "water"
    ],
    "stats": {
      "hp": 68,
      "attack": 50,
      "defense": 60,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 82
    },
    "totalStats": 475,
    "height": 0.3,
    "weight": 8,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Mimesen",
    "flavorText": ""
  },
  {
    "id": 979,
    "name": "annihilape",
    "germanName": "Epitaff",
    "types": [
      "fighting",
      "ghost"
    ],
    "stats": {
      "hp": 110,
      "attack": 115,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 90
    },
    "totalStats": 535,
    "height": 1.2,
    "weight": 56,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Zornaffe",
    "flavorText": ""
  },
  {
    "id": 980,
    "name": "clodsire",
    "germanName": "Suelord",
    "types": [
      "poison",
      "ground"
    ],
    "stats": {
      "hp": 130,
      "attack": 75,
      "defense": 60,
      "specialAttack": 45,
      "specialDefense": 100,
      "speed": 20
    },
    "totalStats": 430,
    "height": 1.8,
    "weight": 223,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Dornfisch",
    "flavorText": ""
  },
  {
    "id": 981,
    "name": "farigiraf",
    "germanName": "Farigiraf",
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 120,
      "attack": 90,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 70,
      "speed": 60
    },
    "totalStats": 520,
    "height": 3.2,
    "weight": 160,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Langhals",
    "flavorText": ""
  },
  {
    "id": 982,
    "name": "dudunsparce-two-segment",
    "germanName": "Dummimisel",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 125,
      "attack": 100,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 55
    },
    "totalStats": 520,
    "height": 3.6,
    "weight": 39.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Erdschlange",
    "flavorText": ""
  },
  {
    "id": 983,
    "name": "kingambit",
    "germanName": "Gladimperio",
    "types": [
      "dark",
      "steel"
    ],
    "stats": {
      "hp": 100,
      "attack": 135,
      "defense": 120,
      "specialAttack": 60,
      "specialDefense": 85,
      "speed": 50
    },
    "totalStats": 550,
    "height": 2,
    "weight": 120,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Langschwert",
    "flavorText": ""
  },
  {
    "id": 984,
    "name": "great-tusk",
    "germanName": "Riesenzahn",
    "types": [
      "ground",
      "fighting"
    ],
    "stats": {
      "hp": 115,
      "attack": 131,
      "defense": 131,
      "specialAttack": 53,
      "specialDefense": 53,
      "speed": 87
    },
    "totalStats": 570,
    "height": 2.2,
    "weight": 320,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 985,
    "name": "scream-tail",
    "germanName": "Brüllschweif",
    "types": [
      "fairy",
      "psychic"
    ],
    "stats": {
      "hp": 115,
      "attack": 65,
      "defense": 99,
      "specialAttack": 65,
      "specialDefense": 115,
      "speed": 111
    },
    "totalStats": 570,
    "height": 1.2,
    "weight": 8,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 986,
    "name": "brute-bonnet",
    "germanName": "Wutpilz",
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 111,
      "attack": 127,
      "defense": 99,
      "specialAttack": 79,
      "specialDefense": 99,
      "speed": 55
    },
    "totalStats": 570,
    "height": 1.2,
    "weight": 21,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 987,
    "name": "flutter-mane",
    "germanName": "Flatterhaar",
    "types": [
      "ghost",
      "fairy"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "specialAttack": 135,
      "specialDefense": 135,
      "speed": 135
    },
    "totalStats": 570,
    "height": 1.4,
    "weight": 4,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 988,
    "name": "slither-wing",
    "germanName": "Kriechflügel",
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 85,
      "attack": 135,
      "defense": 79,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 81
    },
    "totalStats": 570,
    "height": 3.2,
    "weight": 92,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 989,
    "name": "sandy-shocks",
    "germanName": "Sandfell",
    "types": [
      "electric",
      "ground"
    ],
    "stats": {
      "hp": 85,
      "attack": 81,
      "defense": 97,
      "specialAttack": 121,
      "specialDefense": 85,
      "speed": 101
    },
    "totalStats": 570,
    "height": 2.3,
    "weight": 60,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 990,
    "name": "iron-treads",
    "germanName": "Eisenrad",
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 90,
      "attack": 112,
      "defense": 120,
      "specialAttack": 72,
      "specialDefense": 70,
      "speed": 106
    },
    "totalStats": 570,
    "height": 0.9,
    "weight": 240,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 991,
    "name": "iron-bundle",
    "germanName": "Eisenbündel",
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 56,
      "attack": 80,
      "defense": 114,
      "specialAttack": 124,
      "specialDefense": 60,
      "speed": 136
    },
    "totalStats": 570,
    "height": 0.6,
    "weight": 11,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 992,
    "name": "iron-hands",
    "germanName": "Eisenhand",
    "types": [
      "fighting",
      "electric"
    ],
    "stats": {
      "hp": 154,
      "attack": 140,
      "defense": 108,
      "specialAttack": 50,
      "specialDefense": 68,
      "speed": 50
    },
    "totalStats": 570,
    "height": 1.8,
    "weight": 380.7,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 993,
    "name": "iron-jugulis",
    "germanName": "Eisenhals",
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 94,
      "attack": 80,
      "defense": 86,
      "specialAttack": 122,
      "specialDefense": 80,
      "speed": 108
    },
    "totalStats": 570,
    "height": 1.3,
    "weight": 111,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 994,
    "name": "iron-moth",
    "germanName": "Eisenfalter",
    "types": [
      "fire",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 60,
      "specialAttack": 140,
      "specialDefense": 110,
      "speed": 110
    },
    "totalStats": 570,
    "height": 1.2,
    "weight": 36,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 995,
    "name": "iron-thorns",
    "germanName": "Eisendorn",
    "types": [
      "rock",
      "electric"
    ],
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "specialAttack": 70,
      "specialDefense": 84,
      "speed": 72
    },
    "totalStats": 570,
    "height": 1.6,
    "weight": 303,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 996,
    "name": "frigibax",
    "germanName": "Frospino",
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 55
    },
    "totalStats": 320,
    "height": 0.5,
    "weight": 17,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisfinne",
    "flavorText": ""
  },
  {
    "id": 997,
    "name": "arctibax",
    "germanName": "Cryospino",
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 66,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 62
    },
    "totalStats": 423,
    "height": 0.8,
    "weight": 30,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisfinne",
    "flavorText": ""
  },
  {
    "id": 998,
    "name": "baxcalibur",
    "germanName": "Espinodon",
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 115,
      "attack": 145,
      "defense": 92,
      "specialAttack": 75,
      "specialDefense": 86,
      "speed": 87
    },
    "totalStats": 600,
    "height": 2.1,
    "weight": 210,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Eisdrache",
    "flavorText": ""
  },
  {
    "id": 999,
    "name": "gimmighoul",
    "germanName": "Gierspenst",
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 10
    },
    "totalStats": 300,
    "height": 0.3,
    "weight": 5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schatztruhe",
    "flavorText": ""
  },
  {
    "id": 1000,
    "name": "gholdengo",
    "germanName": "Monetigo",
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 87,
      "attack": 60,
      "defense": 95,
      "specialAttack": 133,
      "specialDefense": 91,
      "speed": 84
    },
    "totalStats": 550,
    "height": 1.2,
    "weight": 30,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Schatzwesen",
    "flavorText": ""
  },
  {
    "id": 1001,
    "name": "wo-chien",
    "germanName": "Chongjian",
    "types": [
      "dark",
      "grass"
    ],
    "stats": {
      "hp": 85,
      "attack": 85,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 135,
      "speed": 70
    },
    "totalStats": 570,
    "height": 1.5,
    "weight": 74.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Unheil",
    "flavorText": ""
  },
  {
    "id": 1002,
    "name": "chien-pao",
    "germanName": "Baojian",
    "types": [
      "dark",
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 65,
      "speed": 135
    },
    "totalStats": 570,
    "height": 1.9,
    "weight": 152.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Unheil",
    "flavorText": ""
  },
  {
    "id": 1003,
    "name": "ting-lu",
    "germanName": "Dinglu",
    "types": [
      "dark",
      "ground"
    ],
    "stats": {
      "hp": 155,
      "attack": 110,
      "defense": 125,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 45
    },
    "totalStats": 570,
    "height": 2.7,
    "weight": 699.7,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Unheil",
    "flavorText": ""
  },
  {
    "id": 1004,
    "name": "chi-yu",
    "germanName": "Yuyu",
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 55,
      "attack": 80,
      "defense": 80,
      "specialAttack": 135,
      "specialDefense": 120,
      "speed": 100
    },
    "totalStats": 570,
    "height": 0.4,
    "weight": 4.9,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Unheil",
    "flavorText": ""
  },
  {
    "id": 1005,
    "name": "roaring-moon",
    "germanName": "Donnersichel",
    "types": [
      "dragon",
      "dark"
    ],
    "stats": {
      "hp": 105,
      "attack": 139,
      "defense": 71,
      "specialAttack": 55,
      "specialDefense": 101,
      "speed": 119
    },
    "totalStats": 590,
    "height": 2,
    "weight": 380,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 1006,
    "name": "iron-valiant",
    "germanName": "Eisenkrieger",
    "types": [
      "fairy",
      "fighting"
    ],
    "stats": {
      "hp": 74,
      "attack": 130,
      "defense": 90,
      "specialAttack": 120,
      "specialDefense": 60,
      "speed": 116
    },
    "totalStats": 590,
    "height": 1.4,
    "weight": 35,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 1007,
    "name": "koraidon",
    "germanName": "Koraidon",
    "types": [
      "fighting",
      "dragon"
    ],
    "stats": {
      "hp": 100,
      "attack": 135,
      "defense": 115,
      "specialAttack": 85,
      "specialDefense": 100,
      "speed": 135
    },
    "totalStats": 670,
    "height": 2.5,
    "weight": 303,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 1008,
    "name": "miraidon",
    "germanName": "Miraidon",
    "types": [
      "electric",
      "dragon"
    ],
    "stats": {
      "hp": 100,
      "attack": 85,
      "defense": 100,
      "specialAttack": 135,
      "specialDefense": 115,
      "speed": 135
    },
    "totalStats": 670,
    "height": 3.5,
    "weight": 240,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 1009,
    "name": "walking-wake",
    "germanName": "Windewoge",
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 99,
      "attack": 83,
      "defense": 91,
      "specialAttack": 125,
      "specialDefense": 83,
      "speed": 109
    },
    "totalStats": 590,
    "height": 3.5,
    "weight": 280,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 1010,
    "name": "iron-leaves",
    "germanName": "Eisenblatt",
    "types": [
      "grass",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 88,
      "specialAttack": 70,
      "specialDefense": 108,
      "speed": 104
    },
    "totalStats": 590,
    "height": 1.5,
    "weight": 125,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Paradox",
    "flavorText": ""
  },
  {
    "id": 1011,
    "name": "dipplin",
    "germanName": "Sirapfel",
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 110,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 40
    },
    "totalStats": 485,
    "height": 0.4,
    "weight": 9.7,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1012,
    "name": "poltchageist",
    "germanName": "Mortcha",
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 54,
      "speed": 50
    },
    "totalStats": 308,
    "height": 0.1,
    "weight": 1.1,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1013,
    "name": "sinistcha",
    "germanName": "Fatalitcha",
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "specialAttack": 121,
      "specialDefense": 80,
      "speed": 70
    },
    "totalStats": 508,
    "height": 0.2,
    "weight": 2.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1014,
    "name": "okidogi",
    "germanName": "Boninu",
    "types": [
      "poison",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 128,
      "defense": 115,
      "specialAttack": 58,
      "specialDefense": 86,
      "speed": 80
    },
    "totalStats": 555,
    "height": 1.8,
    "weight": 92.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1015,
    "name": "munkidori",
    "germanName": "Benesaru",
    "types": [
      "poison",
      "psychic"
    ],
    "stats": {
      "hp": 88,
      "attack": 75,
      "defense": 66,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 106
    },
    "totalStats": 555,
    "height": 1,
    "weight": 12.2,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1016,
    "name": "fezandipiti",
    "germanName": "Beatori",
    "types": [
      "poison",
      "fairy"
    ],
    "stats": {
      "hp": 88,
      "attack": 91,
      "defense": 82,
      "specialAttack": 70,
      "specialDefense": 125,
      "speed": 99
    },
    "totalStats": 555,
    "height": 1.4,
    "weight": 30.1,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1017,
    "name": "ogerpon",
    "germanName": "Ogerpon",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 84,
      "specialAttack": 60,
      "specialDefense": 96,
      "speed": 110
    },
    "totalStats": 550,
    "height": 1.2,
    "weight": 39.8,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1018,
    "name": "archaludon",
    "germanName": "Briduradon",
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 105,
      "defense": 130,
      "specialAttack": 125,
      "specialDefense": 65,
      "speed": 85
    },
    "totalStats": 600,
    "height": 2,
    "weight": 60,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1019,
    "name": "hydrapple",
    "germanName": "Hydrapfel",
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 106,
      "attack": 80,
      "defense": 110,
      "specialAttack": 120,
      "specialDefense": 80,
      "speed": 44
    },
    "totalStats": 540,
    "height": 1.8,
    "weight": 93,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1020,
    "name": "gouging-fire",
    "germanName": "Keilflamme",
    "types": [
      "fire",
      "dragon"
    ],
    "stats": {
      "hp": 105,
      "attack": 115,
      "defense": 121,
      "specialAttack": 65,
      "specialDefense": 93,
      "speed": 91
    },
    "totalStats": 590,
    "height": 3.5,
    "weight": 590,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1021,
    "name": "raging-bolt",
    "germanName": "Furienblitz",
    "types": [
      "electric",
      "dragon"
    ],
    "stats": {
      "hp": 125,
      "attack": 73,
      "defense": 91,
      "specialAttack": 137,
      "specialDefense": 89,
      "speed": 75
    },
    "totalStats": 590,
    "height": 5.2,
    "weight": 480,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1022,
    "name": "iron-boulder",
    "germanName": "Eisenfels",
    "types": [
      "rock",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 80,
      "specialAttack": 68,
      "specialDefense": 108,
      "speed": 124
    },
    "totalStats": 590,
    "height": 1.5,
    "weight": 162.5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1023,
    "name": "iron-crown",
    "germanName": "Eisenhaupt",
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 72,
      "defense": 100,
      "specialAttack": 122,
      "specialDefense": 108,
      "speed": 98
    },
    "totalStats": 590,
    "height": 1.6,
    "weight": 156,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1024,
    "name": "terapagos",
    "germanName": "Terapagos",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 85,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 60
    },
    "totalStats": 450,
    "height": 0.2,
    "weight": 6.5,
    "generation": 9,
    "isStarter": false,
    "isLegendary": true,
    "isMythical": false,
    "genus": "Pokémon",
    "flavorText": ""
  },
  {
    "id": 1025,
    "name": "pecharunt",
    "germanName": "Infamomo",
    "types": [
      "poison",
      "ghost"
    ],
    "stats": {
      "hp": 88,
      "attack": 88,
      "defense": 160,
      "specialAttack": 88,
      "specialDefense": 88,
      "speed": 88
    },
    "totalStats": 600,
    "height": 0.3,
    "weight": 0.3,
    "generation": 9,
    "isStarter": false,
    "isLegendary": false,
    "isMythical": true,
    "genus": "Pokémon",
    "flavorText": ""
  }
];

export const ALL_POKEMON: PokemonSummary[] = ALL_RAW_POKEMON.map((p) => ({
  ...p,
  sprite: getSpriteUrl(p.id),
  artwork: getArtworkUrl(p.id),
  animatedSprite: getAnimatedSpriteUrl(p.id),
  shinyArtwork: getShinyArtworkUrl(p.id),
  shinySprite: getShinySpriteUrl(p.id),
}));

export const PRELOADED_POKEMON: PokemonSummary[] = ALL_POKEMON;
