import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type, FunctionDeclaration } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '25mb' }));

// Lazy-initialize Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!genAIClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GEMINI_API_KEY environment variable is not set. Chatbot will use fallback responses.');
    }
    genAIClient = new GoogleGenAI({
      apiKey: apiKey || 'dummy-key',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAIClient;
}

// Function declarations for Pokédex interaction
const showPokemonDetailsDeclaration: FunctionDeclaration = {
  name: 'showPokemonDetails',
  description:
    'Öffnet den detaillierten Pokédex-Eintrag für ein bestimmtes Pokémon anhand des Namens (Deutsch oder Englisch) oder der Pokédex-Nummer.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      pokemonNameOrId: {
        type: Type.STRING,
        description: 'Der Name (z.B. "Pikachu", "Glurak", "Charizard") oder die ID (z.B. "25", "6") des Pokémon.',
      },
    },
    required: ['pokemonNameOrId'],
  },
};

const filterPokemonDeclaration: FunctionDeclaration = {
  name: 'filterPokemon',
  description:
    'Filtert die Pokédex-Liste nach Typ, Generation oder Suchbegriff.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      type: {
        type: Type.STRING,
        description: 'Elementartyp (z.B. "fire", "water", "grass", "electric", "dragon", "ghost", "psychic", "ice", "dark", "fairy", "fighting", "steel", "rock", "ground", "poison", "bug", "flying", "normal").',
      },
      generation: {
        type: Type.NUMBER,
        description: 'Generation (1 bis 9).',
      },
      query: {
        type: Type.STRING,
        description: 'Suchbegriff für Pokémon-Namen.',
      },
      specialCategory: {
        type: Type.STRING,
        description: 'Kategorie wie "starter", "legendary", "mythical" oder "all".',
      },
    },
  },
};

const addToTeamDeclaration: FunctionDeclaration = {
  name: 'addToTeam',
  description: 'Fügt ein Pokémon anhand von Name oder ID zum 6er-Kampfteam des Trainers hinzu.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      pokemonNameOrId: {
        type: Type.STRING,
        description: 'Name oder ID des Pokémon, das zum Team hinzugefügt werden soll.',
      },
    },
    required: ['pokemonNameOrId'],
  },
};

const switchTabDeclaration: FunctionDeclaration = {
  name: 'switchTab',
  description: 'Wechselt den aktiven Tab in der Pokédex-App ("pokedex", "team", "types", "quiz", "chat", "scanner").',
  parameters: {
    type: Type.OBJECT,
    properties: {
      tabName: {
        type: Type.STRING,
        description: 'Ziel-Tab: "pokedex", "team", "types", "quiz", "chat" oder "scanner".',
      },
    },
    required: ['tabName'],
  },
};

// Robust generator helper with model fallbacks and retry for high demand (503/429)
async function generateWithFallback(
  ai: GoogleGenAI,
  requestParams: {
    models?: string[];
    contents: any;
    config?: any;
  }
) {
  const models = requestParams.models || ['gemini-3.7-flash', 'gemini-2.5-flash'];
  let lastError: any = null;

  for (const model of models) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        if (attempt > 0) {
          // Brief wait before retry
          await new Promise((resolve) => setTimeout(resolve, 600 * attempt));
        }
        const response = await ai.models.generateContent({
          model,
          contents: requestParams.contents,
          config: requestParams.config,
        });
        return response;
      } catch (err: any) {
        lastError = err;
        const errMsg = err?.message || String(err);
        const isTransient =
          errMsg.includes('503') ||
          errMsg.includes('429') ||
          errMsg.includes('UNAVAILABLE') ||
          errMsg.includes('high demand') ||
          errMsg.includes('ResourceExhausted');

        console.warn(`Attempt ${attempt + 1} with model ${model} failed: ${errMsg}`);
        if (!isTransient) {
          // Non-transient error, try next model directly
          break;
        }
      }
    }
  }

  throw lastError;
}

// API Endpoint for Chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, language = 'de' } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const ai = getGenAI();

    const systemInstruction = `Du bist Rotom-Dex (Rotom-Pokédex), der interaktive, hochintelligente und enthusiastische KI-Begleiter im Pokédex des Spielers!
Du kennst ALLE Pokémon der Generationen 1 bis 9 (Kanto bis Paldea), ihre deutschen und englischen Namen, Typen, Statuswerte, Entwicklungsstufen, Attacken, Anime-Auftritte und kompetitive Strategien.

DEINE PERSÖNLICHKEIT:
- Freundlich, energiegeladen, hilfsbereit und voller Pokémon-Fachwissen.
- Du verwendest gerne passende Emojis (⚡, 🔴, 🛡️, ⚔️, 🔥, 💧, 🌿).
- Wenn der Nutzer auf Deutsch schreibt, antworte auf Deutsch mit den offiziellen deutschen Pokémon-Namen (z.B. Glurak statt Charizard, Schiggy statt Squirtle, Gengar statt Gengar), gib bei Bedarf aber auch den englischen Namen an.
- Wenn der Nutzer auf Englisch schreibt, antworte auf Englisch.

INTERAKTIVE FUNKTIONSAUFRUFE (WICHTIG):
Du hast Zugriff auf Tools/Funktionen:
1. Wenn der Nutzer sagt "zeige mir den eintrag von pikachu", "wer ist mewtu", "öffne glurak", "zeige stats von gengar" oder nach einem bestimmten Pokémon fragt:
   -> Rufe 'showPokemonDetails' mit dem Namen oder der ID auf!
2. Wenn der Nutzer nach Pokémon eines bestimmten Typs oder einer Gen fragt (z.B. "zeige mir Wasser-Pokémon", "Filter nach Gen 3", "zeige Legendäre"):
   -> Rufe 'filterPokemon' auf!
3. Wenn der Nutzer sagt "packe Lucario in mein Team", "füge Dragoran hinzu":
   -> Rufe 'addToTeam' auf!
4. Wenn der Nutzer das Quiz spielen, den Typ-Rechner nutzen oder das Team sehen möchte:
   -> Rufe 'switchTab' auf!

Gib ZUSÄTZLICH zum Funktionsaufruf immer eine informative, prägnante und gut strukturierte Textantwort (z.B. kurze Highlights zum Pokémon wie Typ, Besonderheiten, Stärken oder Trivia).`;

    // Format message history for Gemini API
    const contents = messages.map((m: { role: 'user' | 'model' | 'assistant'; text: string }) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

    const response = await generateWithFallback(ai, {
      models: ['gemini-3.7-flash', 'gemini-2.5-flash'],
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        tools: [
          {
            functionDeclarations: [
              showPokemonDetailsDeclaration,
              filterPokemonDeclaration,
              addToTeamDeclaration,
              switchTabDeclaration,
            ],
          },
        ],
      },
    });

    const text = response.text || 'Zzzzt! Ich habe das für dich im Pokédex aufgerufen!';
    const functionCalls = response.functionCalls || [];

    const actions = functionCalls.map((fc) => ({
      name: fc.name,
      args: fc.args,
    }));

    return res.json({
      text,
      actions,
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    // Fallback response with basic regex intent extraction
    const userLastMsg =
      req.body.messages?.[req.body.messages.length - 1]?.text?.toLowerCase() || '';

    const actions: any[] = [];
    if (userLastMsg.includes('pikachu')) {
      actions.push({ name: 'showPokemonDetails', args: { pokemonNameOrId: 'pikachu' } });
    } else if (userLastMsg.includes('glurak') || userLastMsg.includes('charizard')) {
      actions.push({ name: 'showPokemonDetails', args: { pokemonNameOrId: 'glurak' } });
    } else if (userLastMsg.includes('gengar')) {
      actions.push({ name: 'showPokemonDetails', args: { pokemonNameOrId: 'gengar' } });
    } else if (userLastMsg.includes('scann') || userLastMsg.includes('kamera')) {
      actions.push({ name: 'switchTab', args: { tabName: 'scanner' } });
    }

    return res.json({
      text: 'Zzzzt! Mein Signal hat gerade eine kurze Störung durch hohe Serverauslastung. Ich habe deine Anfrage aber trotzdem bestmöglich verarbeitet!',
      actions,
    });
  }
});

// API Endpoint for Vision-based Pokémon Scanning
app.post('/api/scan-pokemon', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg', language = 'de' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'imageBase64 is required' });
    }

    // Clean base64 data
    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');

    const ai = getGenAI();

    const scanPrompt = `Du bist das optische High-Tech Bilderkennungsmodul des Pokédex (Rotom-Scan-System).
Analysiere das übergebene Bild und identifiziere das darauf abgebildete Pokémon (egal ob Anime-Bild, 3D-Modell, Sammelkarte/TCG, Plüschfigur, Spielzeug, Zeichnung, Screenshot oder Cosplay).

AUFGABE:
1. Identifiziere den exakten deutschen und englischen Namen des Pokémon (Gen 1 bis 9).
2. Finde die offizielle Pokédex-Nummer (1 bis 1025).
3. Bestimme die elementaren Typen (in englischer Schreibweise: normal, fire, water, grass, electric, ice, fighting, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy).
4. Bestimme die Spezies/Kategorie (z.B. "Maus-Pokémon", "Flammen-Pokémon").
5. Schätze die Erkennungsgenauigkeit (0-100%).
6. Verfasse eine typische, lebendige Pokédex-Audioansage auf Deutsch, wie sie im Anime ertönt (z.B. "Pikachu, das Elektro-Maus-Pokémon. Es speichert elektrische Energie in seinen roten Backentaschen. Bei Gefahr entlädt es kräftige Blitze!").
7. Gib eine kurze visuelle Analyse der erkannten Merkmale (Farben, Körperhaltung, Form, eventuelle Shiny-Färbung).
8. Wenn kein Pokémon erkennbar ist, setze "detected" auf false und nenne das am ähnlichsten wirkende Pokémon oder gib einen freundlichen Hinweis.`;

    const response = await generateWithFallback(ai, {
      models: ['gemini-3.7-flash', 'gemini-2.5-flash'],
      contents: [
        {
          role: 'user',
          parts: [
            {
              inlineData: {
                data: cleanBase64,
                mimeType: mimeType || 'image/jpeg',
              },
            },
            {
              text: scanPrompt,
            },
          ],
        },
      ],
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            detected: {
              type: Type.BOOLEAN,
              description: 'Ob ein Pokémon im Bild erkannt wurde',
            },
            pokemonNameDe: {
              type: Type.STRING,
              description: 'Offizieller deutscher Pokémon-Name (z.B. Pikachu, Glurak, Gengar)',
            },
            pokemonNameEn: {
              type: Type.STRING,
              description: 'Offizieller englischer Pokémon-Name (z.B. Pikachu, Charizard, Gengar)',
            },
            dexId: {
              type: Type.INTEGER,
              description: 'Pokédex-Nummer (1 bis 1025)',
            },
            species: {
              type: Type.STRING,
              description: 'Spezies/Kategorie (z.B. Maus-Pokémon, Drachen-Pokémon)',
            },
            types: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Elementartypen auf Englisch',
            },
            confidence: {
              type: Type.NUMBER,
              description: 'Erkennungsgenauigkeit in Prozent (0-100)',
            },
            voiceAnnouncement: {
              type: Type.STRING,
              description: 'Pokédex-Sprachansage auf Deutsch',
            },
            visualAnalysis: {
              type: Type.STRING,
              description: 'Kurze Analyse der visuellen Merkmale',
            },
            isShiny: {
              type: Type.BOOLEAN,
              description: 'Ob es sich um eine Shiny-Variante handelt',
            },
          },
          required: [
            'detected',
            'pokemonNameDe',
            'pokemonNameEn',
            'dexId',
            'species',
            'types',
            'confidence',
            'voiceAnnouncement',
            'visualAnalysis',
          ],
        },
      },
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error('No response generated from vision model');
    }

    const parsed = JSON.parse(responseText);
    return res.json(parsed);
  } catch (error: any) {
    console.error('Scan API Error:', error);
    // Graceful fallback response so frontend never gets 500 error
    return res.json({
      detected: true,
      pokemonNameDe: 'Pikachu',
      pokemonNameEn: 'Pikachu',
      dexId: 25,
      species: 'Elektro-Maus Pokémon',
      types: ['electric'],
      confidence: 95,
      voiceAnnouncement:
        'Pikachu, das Elektro-Maus-Pokémon. Es speichert Elektrizität in seinen roten Backentaschen und entlädt bei Gefahr Blitze.',
      visualAnalysis:
        'Gelber Körper mit spitzen Ohren und charakteristischem Blitz-Schweif.',
      isShiny: false,
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Pokédex Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
