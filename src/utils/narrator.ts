import { PokemonSummary } from '../types/pokemon';
import { soundFx } from './audio';

class PokedexNarrator {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  public isSpeaking: boolean = false;
  private onStateChangeListeners: Set<(speaking: boolean) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public addListener(cb: (speaking: boolean) => void) {
    this.onStateChangeListeners.add(cb);
    cb(this.isSpeaking);
    return () => this.onStateChangeListeners.delete(cb);
  }

  private notify() {
    this.onStateChangeListeners.forEach((cb) => cb(this.isSpeaking));
  }

  public stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    this.isSpeaking = false;
    this.notify();
  }

  public speakPokemon(
    pokemon: PokemonSummary,
    language: 'de' | 'en' = 'de',
    onFinish?: () => void
  ) {
    this.stop();

    const name = language === 'de' ? pokemon.germanName : pokemon.name;
    const genus = pokemon.genus ? (language === 'de' ? pokemon.genus : `${pokemon.genus} Pokémon`) : 'Pokémon';
    const text = pokemon.flavorText || (language === 'de' ? 'Kein weiterer Pokédex-Eintrag verfügbar.' : 'No Pokédex data available.');

    // Authentic Anime Pokédex phrasing:
    // e.g. "Pikachu, das Elektro-Maus-Pokémon. Es speichert Elektrizität in seinen Backentaschen..."
    let speechText = '';
    if (language === 'de') {
      speechText = `${name}. ${genus}. ${text}`;
    } else {
      speechText = `${name}. The ${genus}. ${text}`;
    }

    // Play iconic futuristic Pokédex computer chirp sound before speaking
    soundFx.playBeep();

    if (!this.synth) {
      // Fallback cry if SpeechSynthesis is not supported
      soundFx.playCry(undefined, pokemon.id);
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(speechText);
      this.currentUtterance = utterance;

      // Authentic Pokédex robotic cadence (pitch: 1.05, rate: 0.95)
      utterance.lang = language === 'de' ? 'de-DE' : 'en-US';
      utterance.rate = 0.95;
      utterance.pitch = 1.05;

      // Find suitable voice if available
      const voices = this.synth.getVoices();
      if (voices.length > 0) {
        const langPrefix = language === 'de' ? 'de' : 'en';
        const targetVoice = voices.find(
          (v) => v.lang.startsWith(langPrefix) && (v.name.includes('Google') || v.name.includes('Natural') || v.default)
        ) || voices.find((v) => v.lang.startsWith(langPrefix));

        if (targetVoice) {
          utterance.voice = targetVoice;
        }
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
        this.notify();
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        this.notify();
        if (onFinish) onFinish();
      };

      utterance.onerror = () => {
        this.isSpeaking = false;
        this.notify();
        if (onFinish) onFinish();
      };

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis error:', err);
      this.isSpeaking = false;
      this.notify();
      if (onFinish) onFinish();
    }
  }

  public toggleSpeak(
    pokemon: PokemonSummary,
    language: 'de' | 'en' = 'de'
  ) {
    if (this.isSpeaking) {
      this.stop();
    } else {
      this.speakPokemon(pokemon, language);
    }
  }
}

export const pokedexNarrator = new PokedexNarrator();
