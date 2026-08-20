import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  Sparkles,
  Star,
  CheckCircle2,
  Mic,
  Square,
  ChevronLeft,
  ChevronRight,
  Radio,
} from 'lucide-react';
import { PokemonSummary } from '../types/pokemon';
import { POKEMON_TYPES } from '../data/pokemonTypes';
import { soundFx } from '../utils/audio';
import { pokedexNarrator } from '../utils/narrator';
import { hapticFeedback } from '../utils/haptics';
import { TypeBadge } from './TypeBadge';

interface ClassicDexFrameProps {
  pokemonList: PokemonSummary[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onOpenDetails: (pokemon: PokemonSummary) => void;
  isFavorite: boolean;
  isCaught: boolean;
  onToggleFavorite: (id: number) => void;
  onToggleCaught: (id: number) => void;
  onAddToTeam: (pokemon: PokemonSummary) => void;
  language: 'de' | 'en';
}

export const ClassicDexFrame: React.FC<ClassicDexFrameProps> = ({
  pokemonList,
  currentIndex,
  onSelectIndex,
  onOpenDetails,
  isFavorite,
  isCaught,
  onToggleFavorite,
  onToggleCaught,
  language,
}) => {
  const [isShiny, setIsShiny] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);

  useEffect(() => {
    const unsub = pokedexNarrator.addListener((speaking) => {
      setIsNarrating(speaking);
    });
    return () => {
      unsub();
      pokedexNarrator.stop();
    };
  }, []);

  const pokemon = pokemonList[currentIndex] || pokemonList[0];
  if (!pokemon) return null;

  const handleNext = () => {
    soundFx.playBeep();
    hapticFeedback.light();
    pokedexNarrator.stop();
    if (currentIndex < pokemonList.length - 1) {
      onSelectIndex(currentIndex + 1);
    } else {
      onSelectIndex(0);
    }
  };

  const handlePrev = () => {
    soundFx.playBeep();
    hapticFeedback.light();
    pokedexNarrator.stop();
    if (currentIndex > 0) {
      onSelectIndex(currentIndex - 1);
    } else {
      onSelectIndex(pokemonList.length - 1);
    }
  };

  const handleToggleVoiceNarration = () => {
    hapticFeedback.light();
    pokedexNarrator.toggleSpeak(pokemon, language);
  };

  const handlePlayCry = () => {
    soundFx.playCry(undefined, pokemon.id);
  };

  const currentArtwork = isShiny
    ? pokemon.shinyArtwork || pokemon.artwork
    : pokemon.artwork;

  const formattedId = `#${pokemon.id.toString().padStart(4, '0')}`;
  const displayName = language === 'de' ? pokemon.germanName : pokemon.name.toUpperCase();
  const primaryType = pokemon.types[0] || 'normal';
  const typeInfo = POKEMON_TYPES[primaryType] || POKEMON_TYPES.normal;

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-2 sm:py-6">
      {/* Handheld Physical Device Chassis - Vibrant Palette (#DC0A2D) */}
      <div
        id="classic-pokedex-chassis"
        className="relative bg-[#DC0A2D] text-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-6px_12px_rgba(0,0,0,0.7)] border-4 sm:border-8 border-[#8B0000] flex flex-col gap-4 sm:gap-6"
      >
        {/* TOP STATUS HARDWARE (Blue Scanner Orb + 3 LED indicators + Voice Visualizer) */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b-2 sm:border-b-4 border-[#8B0000] gap-2">
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Glowing Blue Scanner Lens with speaking wave effect */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12 sm:w-16 sm:h-16 bg-[#00D1FF] border-3 sm:border-4 border-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.9),0_0_30px_#00D1FF] flex items-center justify-center cursor-pointer overflow-hidden shrink-0"
              onClick={handleToggleVoiceNarration}
              title="Pokédex-Stimme aktivieren"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/70 blur-[1px] -translate-x-1 -translate-y-1" />
              {isNarrating && (
                <motion.div
                  className="absolute inset-0 bg-white/40"
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Tri-Color LEDs with animated pulse when speaking */}
            <div className="flex gap-2 sm:gap-2.5">
              <motion.div
                className="w-3 h-3 sm:w-4 sm:h-4 bg-[#FF0000] border-2 border-[#8B0000] rounded-full shadow-[0_0_8px_#FF0000]"
                animate={{ opacity: isNarrating ? [0.4, 1, 0.4] : 1 }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
              <motion.div
                className="w-3 h-3 sm:w-4 sm:h-4 bg-[#FFCC00] border-2 border-[#8B0000] rounded-full shadow-[0_0_8px_#FFCC00]"
                animate={{ opacity: isNarrating ? [1, 0.4, 1] : 1 }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-3 h-3 sm:w-4 sm:h-4 bg-[#49B65F] border-2 border-[#8B0000] rounded-full shadow-[0_0_8px_#49B65F]"
                animate={{ opacity: isNarrating ? [0.4, 1, 0.4] : 1 }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </div>

          {/* Device Title & Voice Indicator */}
          <div className="text-right flex flex-col items-end">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-white drop-shadow">
              POKÉDEX
            </h2>
            {isNarrating ? (
              <span className="text-[10px] font-mono text-[#FFCC00] font-black tracking-wider animate-pulse flex items-center gap-1">
                <Radio className="w-3 h-3" />
                <span>SPRACHAUSGABE AKTIV</span>
              </span>
            ) : (
              <span className="text-[9px] sm:text-[10px] font-mono text-red-200 font-bold">
                RETRO KANTO MODEL
              </span>
            )}
          </div>
        </div>

        {/* MAIN BODY: 2-Column on desktop, 1-Column stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* LEFT SECTION: #DEDEDE Bezel with CRT display & physical controls */}
          <section className="lg:col-span-5 bg-[#DEDEDE] border-4 sm:border-8 border-[#333333] rounded-2xl sm:rounded-3xl p-3 sm:p-5 flex flex-col justify-between shadow-2xl space-y-4">
            {/* CRT Screen Frame */}
            <div className="bg-[#222222] rounded-xl sm:rounded-2xl relative flex flex-col items-center justify-between p-3 sm:p-5 border-3 sm:border-4 border-[#333333] shadow-inner min-h-[260px] sm:min-h-[320px]">
              {/* Top red dots & Dex number */}
              <div className="w-full flex items-center justify-between z-20">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 bg-[#FF0000] rounded-full shadow-[0_0_4px_#FF0000]" />
                  <div className="w-2.5 h-2.5 bg-[#FF0000] rounded-full shadow-[0_0_4px_#FF0000]" />
                </div>
                <span className="text-[#49B65F] font-mono text-xs sm:text-sm font-black tracking-widest">
                  {formattedId}
                </span>
              </div>

              {/* Glowing Pokemon Artwork Area */}
              <div className="relative my-2 sm:my-3 flex items-center justify-center">
                <div
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center shadow-[0_0_35px_rgba(255,204,0,0.35)] opacity-90"
                  style={{
                    background: `radial-gradient(circle, ${typeInfo.color} 0%, rgba(34,34,34,0.1) 70%)`,
                  }}
                />
                <img
                  src={currentArtwork}
                  alt={displayName}
                  className="absolute w-28 h-28 sm:w-36 sm:h-36 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] animate-float"
                />
              </div>

              {/* Pokemon Name, Genus, & Type Badges */}
              <div className="text-center w-full z-10">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide truncate">
                  {displayName}
                </h3>
                <p className="text-gray-400 italic text-xs mt-0.5">{pokemon.genus || 'Pokémon'}</p>

                <div className="flex items-center justify-center gap-1.5 mt-2 flex-wrap">
                  {pokemon.types.map((type) => (
                    <TypeBadge key={type} type={type} size="sm" language={language} />
                  ))}
                </div>
              </div>

              {/* Bottom Speaker vents & Red Light */}
              <div className="w-full flex items-center justify-between mt-2 pt-2 border-t border-[#333333]">
                <div className="w-3.5 h-3.5 bg-[#FF0000] rounded-full border-2 border-[#333333]" />
                <div className="flex gap-1.5">
                  <div className="w-4 sm:w-6 h-1 bg-gray-600 rounded" />
                  <div className="w-4 sm:w-6 h-1 bg-gray-600 rounded" />
                  <div className="w-4 sm:w-6 h-1 bg-gray-600 rounded" />
                </div>
              </div>
            </div>

            {/* Mobile Touch Quick Navigation Bar (Prev / Next buttons for easy thumb tapping) */}
            <div className="flex sm:hidden items-center justify-between gap-2 bg-[#222222] p-1.5 rounded-xl border-2 border-[#333333]">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={handlePrev}
                className="flex-1 py-2 rounded-lg bg-[#333333] text-white font-black text-xs flex items-center justify-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Zurück</span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={handleToggleVoiceNarration}
                className={`px-3 py-2 rounded-lg font-black text-xs flex items-center justify-center gap-1 ${
                  isNarrating ? 'bg-[#FF0000] text-white' : 'bg-[#FFCC00] text-[#222222]'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                <span>{isNarrating ? 'Stop' : 'Dex-Stimme'}</span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={handleNext}
                className="flex-1 py-2 rounded-lg bg-[#333333] text-white font-black text-xs flex items-center justify-center gap-1"
              >
                <span>Weiter</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Controls Below Screen: D-Pad, Voice/Audio Buttons, and Green OK Button */}
            <div className="flex justify-between items-center gap-2 pt-1">
              {/* Classic D-Pad */}
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 bg-[#333333] rounded-full flex items-center justify-center shadow-lg border-2 border-[#222222] shrink-0">
                <div className="w-4 h-12 sm:h-14 bg-[#222222] absolute rounded-sm" />
                <div className="w-12 sm:w-14 h-4 bg-[#222222] absolute rounded-sm" />

                <button
                  id="classic-dpad-up"
                  onClick={handlePrev}
                  className="absolute top-0 w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white active:scale-90"
                  title="Vorheriges Pokémon"
                >
                  ▲
                </button>
                <button
                  id="classic-dpad-down"
                  onClick={handleNext}
                  className="absolute bottom-0 w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white active:scale-90"
                  title="Nächstes Pokémon"
                >
                  ▼
                </button>
                <button
                  id="classic-dpad-left"
                  onClick={handlePrev}
                  className="absolute left-0 w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white active:scale-90"
                  title="Vorheriges Pokémon"
                >
                  ◀
                </button>
                <button
                  id="classic-dpad-right"
                  onClick={handleNext}
                  className="absolute right-0 w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white active:scale-90"
                  title="Nächstes Pokémon"
                >
                  ▶
                </button>
              </div>

              {/* Voice, Shiny & Cry Mini Buttons */}
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  {/* Pokédex Voice Synthesizer Button */}
                  <motion.button
                    id="classic-voice-narrator-btn"
                    whileTap={{ scale: 0.9 }}
                    onClick={handleToggleVoiceNarration}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                      isNarrating
                        ? 'bg-[#FF0000] border-white text-white shadow-[0_0_12px_#FF0000]'
                        : 'bg-[#333333] border-[#222] text-[#FFCC00] hover:bg-[#444]'
                    }`}
                    title={isNarrating ? 'Stimme stoppen' : 'Pokédex Stimme abspielen (Dexter)'}
                  >
                    {isNarrating ? <Square className="w-3.5 h-3.5 fill-current" /> : <Mic className="w-4 h-4" />}
                  </motion.button>

                  {/* Shiny Toggle */}
                  <motion.button
                    id="classic-shiny-btn"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      soundFx.playBeep();
                      setIsShiny(!isShiny);
                    }}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                      isShiny
                        ? 'bg-[#FFCC00] text-[#222222] border-white shadow'
                        : 'bg-[#333333] border-[#222] text-[#FFCC00] hover:bg-[#444]'
                    }`}
                    title="Shiny Ansicht"
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.button>

                  {/* Cry Button */}
                  <motion.button
                    id="classic-cry-btn"
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePlayCry}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#333333] border-2 border-[#222] flex items-center justify-center text-[#00D1FF] hover:bg-[#444]"
                    title="Pokémon-Ruf"
                  >
                    <Volume2 className="w-4 h-4" />
                  </motion.button>
                </div>

                <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
                  <div className="h-1.5 sm:h-2 bg-[#FF0000] rounded" />
                  <div className="h-1.5 sm:h-2 bg-[#00D1FF] rounded" />
                </div>
              </div>

              {/* OK Green Inspection Button */}
              <motion.button
                id="classic-ok-inspect-btn"
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  soundFx.playSelect();
                  onOpenDetails(pokemon);
                }}
                className="w-18 sm:w-22 md:w-24 h-12 sm:h-14 bg-[#49B65F] hover:bg-emerald-400 border-3 sm:border-4 border-[#333333] rounded-xl sm:rounded-2xl text-[#222222] flex items-center justify-center font-mono font-black text-lg sm:text-xl shadow-lg active:scale-95 transition-all cursor-pointer shrink-0"
                title="Vollständige Detailansicht öffnen"
              >
                OK
              </motion.button>
            </div>
          </section>

          {/* RIGHT SECTION: DATA ANALYSIS, BASE STATS, and LORE TEXT */}
          <section className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {/* Data Analysis Panel */}
            <div className="bg-[#333333] border-3 sm:border-4 border-[#222222] rounded-2xl sm:rounded-3xl p-3 sm:p-5 flex flex-col gap-3 shadow-xl">
              <div className="flex items-center justify-between border-b-2 border-[#444444] pb-2 flex-wrap gap-2">
                <h3 className="text-[#FFCC00] text-sm sm:text-lg font-black uppercase tracking-widest font-mono">
                  DATA ANALYSIS
                </h3>
                <div className="flex gap-2">
                  <button
                    id="classic-fav-btn"
                    onClick={() => {
                      soundFx.playSelect();
                      onToggleFavorite(pokemon.id);
                    }}
                    className={`px-2.5 sm:px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 border ${
                      isFavorite ? 'bg-[#FFCC00] text-[#222] border-[#B8860B]' : 'bg-[#222] text-gray-300 border-[#444]'
                    }`}
                  >
                    <Star className={`w-3.5 h-3.5 ${isFavorite ? 'fill-[#222]' : ''}`} />
                    <span>Favorit</span>
                  </button>
                  <button
                    id="classic-caught-btn"
                    onClick={() => {
                      if (!isCaught) soundFx.playCatch();
                      else soundFx.playSelect();
                      onToggleCaught(pokemon.id);
                    }}
                    className={`px-2.5 sm:px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 border ${
                      isCaught ? 'bg-[#49B65F] text-[#222] border-[#333]' : 'bg-[#222] text-gray-300 border-[#444]'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isCaught ? 'Gefangen' : 'Fangen'}</span>
                  </button>
                </div>
              </div>

              {/* 4 Stats Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                <div className="bg-[#222222] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border-l-4 border-[#00D1FF]">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-mono font-bold">Typ</span>
                  <p className="text-xs sm:text-sm font-black text-white capitalize truncate">{typeInfo.germanName}</p>
                </div>
                <div className="bg-[#222222] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border-l-4 border-[#FF0000]">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-mono font-bold">Größe</span>
                  <p className="text-xs sm:text-sm font-black text-white">{pokemon.height} m</p>
                </div>
                <div className="bg-[#222222] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border-l-4 border-[#49B65F]">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-mono font-bold">Gewicht</span>
                  <p className="text-xs sm:text-sm font-black text-white">{pokemon.weight} kg</p>
                </div>
                <div className="bg-[#222222] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border-l-4 border-[#FFCC00]">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-mono font-bold">BST</span>
                  <p className="text-xs sm:text-sm font-black text-[#FFCC00] font-mono">{pokemon.totalStats}</p>
                </div>
              </div>
            </div>

            {/* Base Stats Panel */}
            <div className="bg-[#333333] border-3 sm:border-4 border-[#222222] rounded-2xl sm:rounded-3xl p-3 sm:p-5 flex flex-col gap-3 shadow-xl">
              <h3 className="text-[#FFCC00] text-sm sm:text-lg font-black uppercase tracking-widest font-mono">
                BASE STATS
              </h3>

              <div className="space-y-2 sm:space-y-2.5">
                {/* HP Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs uppercase font-mono">
                    <span className="text-gray-300 font-bold">HP / KP</span>
                    <span className="font-black text-white">{pokemon.stats.hp}</span>
                  </div>
                  <div className="w-full h-2.5 sm:h-3 bg-[#222222] rounded-full overflow-hidden border border-[#444]">
                    <div
                      className="h-full bg-[#FF0000] rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (pokemon.stats.hp / 255) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Attack Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs uppercase font-mono">
                    <span className="text-gray-300 font-bold">Angriff</span>
                    <span className="font-black text-white">{pokemon.stats.attack}</span>
                  </div>
                  <div className="w-full h-2.5 sm:h-3 bg-[#222222] rounded-full overflow-hidden border border-[#444]">
                    <div
                      className="h-full bg-[#FFCC00] rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (pokemon.stats.attack / 255) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Defense Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs uppercase font-mono">
                    <span className="text-gray-300 font-bold">Verteidigung</span>
                    <span className="font-black text-white">{pokemon.stats.defense}</span>
                  </div>
                  <div className="w-full h-2.5 sm:h-3 bg-[#222222] rounded-full overflow-hidden border border-[#444]">
                    <div
                      className="h-full bg-[#49B65F] rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (pokemon.stats.defense / 255) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Speed Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs uppercase font-mono">
                    <span className="text-gray-300 font-bold">Initiative / Speed</span>
                    <span className="font-black text-white">{pokemon.stats.speed}</span>
                  </div>
                  <div className="w-full h-2.5 sm:h-3 bg-[#222222] rounded-full overflow-hidden border border-[#444]">
                    <div
                      className="h-full bg-[#00D1FF] rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (pokemon.stats.speed / 255) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Flavor Text & Voice Read-out Button */}
            <div className="flex flex-col sm:flex-row gap-3 min-h-[80px]">
              <div className="flex-1 bg-[#222222] border-3 sm:border-4 border-[#555555] rounded-xl sm:rounded-2xl flex flex-col justify-center text-xs p-3.5 sm:p-4 text-gray-200 shadow-inner relative group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-[#FFCC00] uppercase tracking-wider">
                    POKÉDEX ERKLÄRTEXT (ANIME)
                  </span>
                  <button
                    onClick={handleToggleVoiceNarration}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono flex items-center gap-1 border transition-all ${
                      isNarrating
                        ? 'bg-[#FF0000] text-white border-white animate-pulse'
                        : 'bg-[#333333] text-[#00D1FF] border-[#444] hover:border-[#00D1FF]'
                    }`}
                  >
                    <Mic className="w-3 h-3" />
                    <span>{isNarrating ? 'Stoppen' : 'Vorlesen'}</span>
                  </button>
                </div>
                <p className="italic leading-relaxed">
                  {pokemon.flavorText ||
                    'Dieses Pokémon wurde im Pokédex registriert. Klicke auf die Pokédex-Stimme oder das Fragezeichen für alle Details.'}
                </p>
              </div>

              {/* Big Question Mark Inspect Button */}
              <motion.button
                id="classic-big-inspect-question-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  soundFx.playSelect();
                  onOpenDetails(pokemon);
                }}
                className="w-full sm:w-20 md:w-24 py-3 sm:py-0 bg-[#FFCC00] hover:bg-yellow-300 border-3 sm:border-4 border-[#B8860B] rounded-xl sm:rounded-2xl flex items-center justify-center text-[#222222] font-black text-2xl sm:text-3xl shadow-xl active:scale-95 transition-all cursor-pointer shrink-0"
                title="Vollständigen Eintrag öffnen"
              >
                ?
              </motion.button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
