import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Volume2,
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
  ShieldAlert,
  Swords,
  Layers,
  Info,
  Activity,
  Image as ImageIcon,
  Scale,
  Ruler,
  Mic,
  Square,
  Radio,
} from 'lucide-react';
import { POKEMON_TYPES } from '../data/pokemonTypes';
import { FullPokemonDetail, PokemonSummary } from '../types/pokemon';
import { fetchFullPokemonDetail } from '../services/pokeApi';
import { soundFx } from '../utils/audio';
import { pokedexNarrator } from '../utils/narrator';
import { TypeBadge } from './TypeBadge';

interface PokemonDetailModalProps {
  pokemon: PokemonSummary | null;
  onClose: () => void;
  onSelectPokemon: (pokemon: PokemonSummary) => void;
  isFavorite: boolean;
  isCaught: boolean;
  onToggleFavorite: (id: number) => void;
  onToggleCaught: (id: number) => void;
  onAddToTeam: (pokemon: PokemonSummary) => void;
  language: 'de' | 'en';
  allPokemonList: PokemonSummary[];
}

export const PokemonDetailModal: React.FC<PokemonDetailModalProps> = ({
  pokemon,
  onClose,
  onSelectPokemon,
  isFavorite,
  isCaught,
  onToggleFavorite,
  onToggleCaught,
  onAddToTeam,
  language,
  allPokemonList,
}) => {
  const [detail, setDetail] = useState<FullPokemonDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'about' | 'stats' | 'evolution' | 'defenses' | 'moves' | 'sprites'>('about');
  const [isShiny, setIsShiny] = useState(false);
  const [useAnimatedSprite, setUseAnimatedSprite] = useState(false);
  const [isPlayingCry, setIsPlayingCry] = useState(false);
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

  useEffect(() => {
    pokedexNarrator.stop();
  }, [pokemon?.id]);

  useEffect(() => {
    if (!pokemon) return;
    let isCancelled = false;
    setIsLoading(true);

    fetchFullPokemonDetail(pokemon.id)
      .then((data) => {
        if (!isCancelled) {
          setDetail(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching details', err);
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [pokemon?.id]);

  if (!pokemon) return null;

  const primaryType = pokemon.types[0] || 'normal';
  const typeConfig = POKEMON_TYPES[primaryType] || POKEMON_TYPES.normal;
  const formattedId = `#${pokemon.id.toString().padStart(4, '0')}`;
  const displayName = language === 'de' ? (detail?.germanName || pokemon.germanName) : pokemon.name.toUpperCase();
  const secondaryName = language === 'de' ? pokemon.name.toUpperCase() : (detail?.germanName || pokemon.germanName);

  const handlePlayCry = async () => {
    setIsPlayingCry(true);
    await soundFx.playCry(detail?.cryUrl, pokemon.id);
    setIsPlayingCry(false);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    soundFx.playSelect();
    const currentIndex = allPokemonList.findIndex((p) => p.id === pokemon.id);
    if (currentIndex === -1) return;

    if (direction === 'prev' && currentIndex > 0) {
      onSelectPokemon(allPokemonList[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < allPokemonList.length - 1) {
      onSelectPokemon(allPokemonList[currentIndex + 1]);
    }
  };

  const activeArtwork = isShiny
    ? (detail?.sprites.officialShinyArtwork || pokemon.shinyArtwork || pokemon.artwork)
    : (detail?.sprites.officialArtwork || pokemon.artwork);

  const activeAnimated = isShiny
    ? (detail?.sprites.animatedShiny || pokemon.shinySprite || pokemon.sprite)
    : (detail?.sprites.animatedFront || pokemon.animatedSprite || pokemon.sprite);

  // Stat metadata configuration - Vibrant Palette
  const statConfig = [
    { key: 'hp', labelDe: 'KP', labelEn: 'HP', val: detail?.stats.hp || pokemon.stats.hp, max: 255, color: '#FF0000' },
    { key: 'attack', labelDe: 'Angriff', labelEn: 'Attack', val: detail?.stats.attack || pokemon.stats.attack, max: 190, color: '#FFCC00' },
    { key: 'defense', labelDe: 'Verteidigung', labelEn: 'Defense', val: detail?.stats.defense || pokemon.stats.defense, max: 230, color: '#49B65F' },
    { key: 'specialAttack', labelDe: 'Sp.-Angr.', labelEn: 'Sp. Atk', val: detail?.stats.specialAttack || pokemon.stats.specialAttack, max: 194, color: '#00D1FF' },
    { key: 'specialDefense', labelDe: 'Sp.-Vert.', labelEn: 'Sp. Def', val: detail?.stats.specialDefense || pokemon.stats.specialDefense, max: 230, color: '#A7DB8D' },
    { key: 'speed', labelDe: 'Initiative', labelEn: 'Speed', val: detail?.stats.speed || pokemon.stats.speed, max: 200, color: '#00D1FF' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        id="pokemon-detail-modal"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl bg-[#222222] border-4 border-[#8B0000] rounded-3xl shadow-[0_0_50px_rgba(220,10,45,0.4)] overflow-hidden my-auto flex flex-col max-h-[92vh]"
      >
        {/* Top Header - Vibrant Pokédex Red Bar */}
        <div className="relative px-6 py-4 bg-[#DC0A2D] border-b-4 border-[#8B0000] flex items-center justify-between z-10 text-white">
          <div className="flex items-center gap-3">
            <motion.button
              id="modal-prev-pokemon-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleNavigate('prev')}
              className="p-1.5 rounded-xl bg-[#222222] text-white hover:bg-[#333333] border-2 border-[#333333] transition-all"
              title="Vorheriges Pokémon"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-black text-[#49B65F] bg-[#222222] px-2 py-0.5 rounded-lg border border-[#333333]">
                  {formattedId}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase drop-shadow">
                  {displayName}
                </h2>
                {detail?.isStarter && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#00D1FF] text-[#222222]">
                    Starter
                  </span>
                )}
                {detail?.isLegendary && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#FFCC00] text-[#222222]">
                    Legendär
                  </span>
                )}
              </div>
              <p className="text-xs text-red-100 font-mono font-medium italic">
                {secondaryName} • {detail?.genusDe || detail?.genusEn || 'Pokémon'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Pokédex Anime Voice Synthesizer Button */}
            <motion.button
              id="modal-voice-narrator-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => pokedexNarrator.toggleSpeak(pokemon, language)}
              className={`p-2 rounded-xl border-2 flex items-center gap-1.5 transition-all ${
                isNarrating
                  ? 'bg-[#FF0000] text-white border-white shadow-[0_0_15px_#FF0000] animate-pulse'
                  : 'bg-[#222222] text-[#FFCC00] hover:bg-[#333333] border-[#333333]'
              }`}
              title={isNarrating ? 'Stimme stoppen' : 'Pokédex-Stimme anhören (Anime Dexter)'}
            >
              {isNarrating ? <Square className="w-4 h-4 fill-current" /> : <Mic className="w-4 h-4" />}
            </motion.button>

            {/* Play Cry with animated equalizer bars */}
            <motion.button
              id="modal-cry-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handlePlayCry}
              className={`p-2 rounded-xl border-2 flex items-center gap-1.5 transition-all ${
                isPlayingCry
                  ? 'bg-[#00D1FF] text-[#222222] border-white shadow-[0_0_15px_#00D1FF]'
                  : 'bg-[#222222] text-[#00D1FF] hover:bg-[#333333] border-[#333333]'
              }`}
              title="Pokémon Ruf anhören"
            >
              <Volume2 className="w-4 h-4" />
              {isPlayingCry && (
                <div className="flex items-end gap-0.5 h-3">
                  <motion.div
                    animate={{ height: ['20%', '100%', '30%'] }}
                    transition={{ duration: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-1 bg-[#222222] rounded-full"
                  />
                  <motion.div
                    animate={{ height: ['60%', '20%', '90%'] }}
                    transition={{ duration: 0.25, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
                    className="w-1 bg-[#222222] rounded-full"
                  />
                  <motion.div
                    animate={{ height: ['30%', '90%', '40%'] }}
                    transition={{ duration: 0.35, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                    className="w-1 bg-[#222222] rounded-full"
                  />
                </div>
              )}
            </motion.button>

            {/* Shiny Toggle */}
            <motion.button
              id="modal-shiny-toggle-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                soundFx.playSelect();
                setIsShiny(!isShiny);
              }}
              className={`p-2 rounded-xl border-2 transition-all ${
                isShiny
                  ? 'bg-[#FFCC00] text-[#222222] border-[#B8860B] font-black shadow-[0_0_15px_#FFCC00]'
                  : 'bg-[#222222] text-[#FFCC00] hover:bg-[#333333] border-[#333333]'
              }`}
              title={isShiny ? 'Normales Aussehen' : 'Shiny Form'}
            >
              <motion.div
                animate={{ rotate: isShiny ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
            </motion.button>

            {/* Caught */}
            <motion.button
              id="modal-caught-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                if (!isCaught) soundFx.playCatch();
                else soundFx.playSelect();
                onToggleCaught(pokemon.id);
              }}
              className={`p-2 rounded-xl border-2 transition-all ${
                isCaught
                  ? 'bg-[#49B65F] text-[#222222] border-white shadow-[0_0_15px_#49B65F]'
                  : 'bg-[#222222] text-[#49B65F] hover:bg-[#333333] border-[#333333]'
              }`}
              title={isCaught ? 'Gefangen!' : 'Als gefangen markieren'}
            >
              <CheckCircle2 className="w-4 h-4" />
            </motion.button>

            {/* Favorite */}
            <motion.button
              id="modal-fav-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                soundFx.playSelect();
                onToggleFavorite(pokemon.id);
              }}
              className={`p-2 rounded-xl border-2 transition-all ${
                isFavorite
                  ? 'bg-[#FFCC00] text-[#222222] border-[#B8860B] shadow-[0_0_15px_#FFCC00]'
                  : 'bg-[#222222] text-[#FFCC00] hover:bg-[#333333] border-[#333333]'
              }`}
              title="Favorit"
            >
              <Star className={`w-4 h-4 ${isFavorite ? 'fill-[#222222]' : ''}`} />
            </motion.button>

            {/* Add to Team */}
            <motion.button
              id="modal-add-team-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                soundFx.playSelect();
                onAddToTeam(pokemon);
              }}
              className="px-3.5 py-2 rounded-xl bg-[#49B65F] hover:bg-emerald-400 text-[#222222] text-xs font-black flex items-center gap-1.5 transition-all shadow-md"
              title="Zum Team hinzufügen"
            >
              <Users className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ins Team</span>
            </motion.button>

            <motion.button
              id="modal-next-pokemon-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleNavigate('next')}
              className="p-1.5 rounded-xl bg-[#222222] text-white hover:bg-[#333333] border-2 border-[#333333] transition-all"
              title="Nächstes Pokémon"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>

            {/* Close Button */}
            <motion.button
              id="modal-close-btn"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                pokedexNarrator.stop();
                soundFx.playSelect();
                onClose();
              }}
              className="p-2 ml-1 text-white hover:bg-[#8B0000] rounded-xl transition-all"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Modal Body with Left Visual Stage and Right Tabbed Information */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-y-auto bg-[#222222] text-white">
          {/* Left Column: Visual Showcase */}
          <div
            className="md:col-span-5 p-6 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r-4 border-[#333333] relative overflow-hidden bg-[#1a1a1a]"
          >
            {/* Type Badges */}
            <div className="flex items-center gap-2 z-10">
              {pokemon.types.map((type) => (
                <TypeBadge key={type} type={type} size="md" language={language} />
              ))}
            </div>

            {/* Main Image Stage */}
            <div className="relative my-6 flex items-center justify-center min-h-[220px] w-full">
              {/* Background Aura Glow */}
              <motion.div
                className="absolute w-48 h-48 rounded-full blur-3xl opacity-40"
                style={{ backgroundColor: typeConfig.color }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              <AnimatePresence mode="wait">
                {useAnimatedSprite ? (
                  <motion.img
                    key={`sprite-${pokemon.id}-${isShiny}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    src={activeAnimated}
                    alt={displayName}
                    className="w-36 h-36 object-contain z-10 filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.8)]"
                  />
                ) : (
                  <motion.img
                    key={`art-${pokemon.id}-${isShiny}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -6, 0],
                    }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{
                      y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                      duration: 0.3,
                    }}
                    src={activeArtwork}
                    alt={displayName}
                    className="w-52 h-52 object-contain z-10 filter drop-shadow-[0_14px_24px_rgba(0,0,0,0.9)]"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Visual Controls */}
            <div className="flex items-center gap-2 z-10">
              <motion.button
                id="modal-toggle-sprite-art"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUseAnimatedSprite(!useAnimatedSprite)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black border-2 transition-all shadow-md ${
                  useAnimatedSprite
                    ? 'bg-[#DC0A2D] border-[#8B0000] text-white'
                    : 'bg-[#222222] border-[#444444] text-gray-300 hover:text-white'
                }`}
              >
                {useAnimatedSprite ? 'Animierter Sprite' : 'Offizielles Artwork'}
              </motion.button>
            </div>

            {/* Physical specs chips */}
            <div className="grid grid-cols-2 gap-3 w-full mt-4 z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-3 rounded-2xl bg-[#222222] border-l-4 border-[#49B65F] border-y border-r border-[#333333] flex items-center gap-2.5 shadow-sm"
              >
                <Ruler className="w-4 h-4 text-[#49B65F]" />
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono font-bold">Größe</div>
                  <div className="text-sm font-black text-white">{pokemon.height} m</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-3 rounded-2xl bg-[#222222] border-l-4 border-[#00D1FF] border-y border-r border-[#333333] flex items-center gap-2.5 shadow-sm"
              >
                <Scale className="w-4 h-4 text-[#00D1FF]" />
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono font-bold">Gewicht</div>
                  <div className="text-sm font-black text-white">{pokemon.weight} kg</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Tabbed Data */}
          <div className="md:col-span-7 flex flex-col bg-[#222222]">
            {/* Tabs Bar */}
            <div className="flex items-center border-b-2 border-[#333333] bg-[#1a1a1a] overflow-x-auto no-scrollbar px-4 pt-2">
              <motion.button
                id="modal-tab-about"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  soundFx.playSelect();
                  setActiveTab('about');
                }}
                className={`px-3.5 py-2.5 text-xs font-black border-b-2 flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'about'
                    ? 'border-[#FFCC00] text-[#FFCC00] bg-[#222222]/60'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>{language === 'de' ? 'Übersicht' : 'About'}</span>
              </motion.button>

              <motion.button
                id="modal-tab-stats"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  soundFx.playSelect();
                  setActiveTab('stats');
                }}
                className={`px-3.5 py-2.5 text-xs font-black border-b-2 flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'stats'
                    ? 'border-[#FFCC00] text-[#FFCC00] bg-[#222222]/60'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>{language === 'de' ? 'Basiswerte' : 'Stats'}</span>
              </motion.button>

              <motion.button
                id="modal-tab-evolution"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  soundFx.playSelect();
                  setActiveTab('evolution');
                }}
                className={`px-3.5 py-2.5 text-xs font-black border-b-2 flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'evolution'
                    ? 'border-[#FFCC00] text-[#FFCC00] bg-[#222222]/60'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{language === 'de' ? 'Entwicklung' : 'Evolution'}</span>
              </motion.button>

              <motion.button
                id="modal-tab-defenses"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  soundFx.playSelect();
                  setActiveTab('defenses');
                }}
                className={`px-3.5 py-2.5 text-xs font-black border-b-2 flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'defenses'
                    ? 'border-[#FFCC00] text-[#FFCC00] bg-[#222222]/60'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{language === 'de' ? 'Typ-Schwächen' : 'Matchups'}</span>
              </motion.button>

              <motion.button
                id="modal-tab-moves"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  soundFx.playSelect();
                  setActiveTab('moves');
                }}
                className={`px-3.5 py-2.5 text-xs font-black border-b-2 flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'moves'
                    ? 'border-[#FFCC00] text-[#FFCC00] bg-[#222222]/60'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Swords className="w-3.5 h-3.5" />
                <span>{language === 'de' ? 'Attacken' : 'Moves'}</span>
              </motion.button>

              <motion.button
                id="modal-tab-sprites"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  soundFx.playSelect();
                  setActiveTab('sprites');
                }}
                className={`px-3.5 py-2.5 text-xs font-black border-b-2 flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'sprites'
                    ? 'border-[#FFCC00] text-[#FFCC00] bg-[#222222]/60'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{language === 'de' ? 'Galerie' : 'Sprites'}</span>
              </motion.button>
            </div>

            {/* Tab Contents Area */}
            <div className="p-6 flex-1 overflow-y-auto space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  {/* TAB 1: ABOUT */}
                  {activeTab === 'about' && (
                    <div className="space-y-5">
                      {/* Pokédex Entry Lore */}
                      <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] space-y-2 shadow-inner">
                        <div className="flex items-center justify-between text-xs font-mono font-bold text-gray-400">
                          <span className="text-[#FFCC00] flex items-center gap-1.5">
                            <Radio className="w-3.5 h-3.5" />
                            {language === 'de' ? 'POKÉDEX-EINTRAG (SERIE / SPIEL)' : 'POKÉDEX ENTRY'}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => pokedexNarrator.toggleSpeak(pokemon, language)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono flex items-center gap-1.5 border transition-all ${
                                isNarrating
                                  ? 'bg-[#FF0000] text-white border-white animate-pulse'
                                  : 'bg-[#222222] text-[#FFCC00] border-[#444444] hover:border-[#FFCC00]'
                              }`}
                            >
                              <Mic className="w-3.5 h-3.5" />
                              <span>{isNarrating ? (language === 'de' ? 'Stoppen' : 'Stop') : (language === 'de' ? 'Vorlesen' : 'Speak')}</span>
                            </button>
                            <span className="text-[#00D1FF]">Gen {pokemon.generation}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-200 leading-relaxed italic">
                          "{detail?.flavorTexts?.[0]?.textDe || detail?.flavorText || pokemon.flavorText || 'Ein faszinierendes Pokémon.'}"
                        </p>
                      </div>

                      {/* Abilities */}
                      <div>
                        <h4 className="text-xs font-black font-mono text-[#FFCC00] uppercase tracking-wider mb-2.5">
                          {language === 'de' ? 'Fähigkeiten' : 'Abilities'}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {(detail?.abilities || [
                            { name: 'Standard', germanName: 'Standard', description: 'Standard-Fähigkeit', isHidden: false },
                          ]).map((ab, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.02 }}
                              className="p-3.5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] space-y-1"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white">
                                  {language === 'de' ? ab.germanName : ab.name}
                                </span>
                                {ab.isHidden && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-[#FFCC00] text-[#222222]">
                                    Versteckt
                                  </span>
                                )}
                              </div>
                              {ab.description && (
                                <p className="text-[11px] text-gray-400 leading-snug">
                                  {ab.description}
                                </p>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Breeding & Capture details */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                        {/* Capture rate */}
                        <div className="p-3.5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
                          <div className="text-[10px] text-gray-400 font-mono uppercase font-bold">Fangrate</div>
                          <div className="text-sm font-black text-[#49B65F] mt-0.5">
                            {detail?.captureRate ?? 45} <span className="text-[10px] text-gray-400 font-normal">/ 255</span>
                          </div>
                        </div>

                        {/* Base happiness */}
                        <div className="p-3.5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
                          <div className="text-[10px] text-gray-400 font-mono uppercase font-bold">Basis-Zutraulichkeit</div>
                          <div className="text-sm font-black text-rose-400 mt-0.5">
                            {detail?.baseHappiness ?? 70} <span className="text-[10px] text-gray-400 font-normal">/ 255</span>
                          </div>
                        </div>

                        {/* Gender distribution */}
                        <div className="p-3.5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] col-span-2 sm:col-span-1">
                          <div className="text-[10px] text-gray-400 font-mono uppercase font-bold">Geschlecht</div>
                          {detail?.genderRatio?.genderless ? (
                            <div className="text-xs font-bold text-gray-300 mt-0.5">Geschlechtslos</div>
                          ) : (
                            <div className="text-xs font-black flex items-center gap-2 mt-0.5">
                              <span className="text-[#00D1FF]">♂ {detail?.genderRatio?.male ?? 50}%</span>
                              <span className="text-pink-400">♀ {detail?.genderRatio?.female ?? 50}%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: BASE STATS */}
                  {activeTab === 'stats' && (
                    <div className="space-y-4">
                      {/* BST Score Badge */}
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
                        <div>
                          <span className="text-xs text-gray-400 font-mono font-bold">Basiswert-Summe (BST)</span>
                          <div className="text-2xl font-black text-[#FFCC00] font-mono">
                            {detail?.totalStats || pokemon.totalStats}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-gray-400 font-mono font-bold">Kampfklasse</span>
                          <div className="text-sm font-black text-[#00D1FF]">
                            {(detail?.totalStats || pokemon.totalStats) >= 600
                              ? 'Legendär / Pseudo-Legendär'
                              : (detail?.totalStats || pokemon.totalStats) >= 520
                              ? 'Vollentwickelt / Stark'
                              : (detail?.totalStats || pokemon.totalStats) >= 400
                              ? 'Mittlere Stufe'
                              : 'Basis-Stufe'}
                          </div>
                        </div>
                      </div>

                      {/* Individual Stat Bars with Animated Filling */}
                      <div className="space-y-3 pt-2">
                        {statConfig.map((st) => (
                          <div key={st.key} className="space-y-1">
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span className="text-gray-300 font-bold w-24">
                                {language === 'de' ? st.labelDe : st.labelEn}
                              </span>
                              <span className="text-white font-black">{st.val}</span>
                              <span className="text-gray-500 text-[10px] hidden sm:inline">
                                Min: {Math.floor(st.val * 2 * 0.9)} | Max: {Math.floor(st.val * 2 + 99)}
                              </span>
                            </div>
                            <div className="w-full bg-[#111111] h-3 rounded-full overflow-hidden border border-[#333333]">
                              <motion.div
                                className="h-full rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min(100, (st.val / st.max) * 100)}%` }}
                                transition={{ duration: 0.65, ease: 'easeOut' }}
                                style={{ backgroundColor: st.color }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="text-[11px] text-gray-400 font-mono pt-2">
                        * Minimum und Maximum berechnet für Level 100 (ohne/mit vollen EVs & Wesen).
                      </p>
                    </div>
                  )}

                  {/* TAB 3: EVOLUTION CHAIN */}
                  {activeTab === 'evolution' && (
                    <div className="space-y-4">
                      <h4 className="text-xs font-black font-mono text-[#FFCC00] uppercase tracking-wider">
                        {language === 'de' ? 'Entwicklungsreihe' : 'Evolution Chain'}
                      </h4>

                      {detail?.evolutionChain ? (
                        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 p-5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
                          <EvolutionNodeView
                            node={detail.evolutionChain}
                            currentId={pokemon.id}
                            onSelectPokemon={onSelectPokemon}
                            allPokemonList={allPokemonList}
                          />
                        </div>
                      ) : (
                        <div className="p-6 text-center text-gray-400 text-sm">
                          Dieses Pokémon besitzt keine bekannten Entwicklungen oder die Daten werden geladen.
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 4: DEFENSIVE TYPE MATCHUPS */}
                  {activeTab === 'defenses' && (
                    <div className="space-y-4">
                      <div className="p-3.5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] text-xs text-gray-200 leading-relaxed">
                        Schadensmultiplikator bei gegnerischen Angriffen dieser Typen auf{' '}
                        <strong className="text-[#FFCC00]">{displayName}</strong>:
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {Object.entries(detail?.typeDefenses || {}).map(([typeKey, multiplier]) => {
                          const tInfo = POKEMON_TYPES[typeKey as any] || POKEMON_TYPES.normal;
                          let badgeBg = 'bg-[#1a1a1a] text-gray-300 border-[#333333]';
                          let label = '1x';

                          if (multiplier === 4) {
                            badgeBg = 'bg-[#FF0000]/20 text-[#FF5959] border-[#FF0000] font-black';
                            label = '4x (Sehr Schwach)';
                          } else if (multiplier === 2) {
                            badgeBg = 'bg-orange-500/20 text-orange-400 border-orange-500 font-bold';
                            label = '2x (Schwach)';
                          } else if (multiplier === 0.5) {
                            badgeBg = 'bg-[#49B65F]/20 text-[#49B65F] border-[#49B65F] font-semibold';
                            label = '½x (Resistent)';
                          } else if (multiplier === 0.25) {
                            badgeBg = 'bg-[#00D1FF]/20 text-[#00D1FF] border-[#00D1FF] font-black';
                            label = '¼x (Super Resistent)';
                          } else if (multiplier === 0) {
                            badgeBg = 'bg-purple-500/20 text-purple-300 border-purple-500 font-black';
                            label = '0x (Immun)';
                          }

                          return (
                            <motion.div
                              key={typeKey}
                              whileHover={{ scale: 1.03 }}
                              className={`p-2.5 rounded-xl border-2 flex items-center justify-between text-xs ${badgeBg}`}
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs">{tInfo.iconSymbol}</span>
                                <span className="font-bold">{tInfo.germanName}</span>
                              </div>
                              <span className="font-mono text-xs">{label}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* TAB 5: MOVESET */}
                  {activeTab === 'moves' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400 font-bold">
                        <span className="text-[#FFCC00]">Erlernbare Attacken</span>
                        <span>Methode</span>
                      </div>

                      <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                        {(detail?.moves || []).map((m, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.01 }}
                            className="p-3 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] flex items-center justify-between text-xs"
                          >
                            <div>
                              <div className="font-black text-white">{m.germanName}</div>
                              <div className="text-[10px] text-gray-400 font-mono">
                                {m.learnMethod === 'level-up'
                                  ? `Level ${m.levelLearnedAt || 1}`
                                  : m.learnMethod === 'machine'
                                  ? 'TM / VM'
                                  : 'Zucht'}
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-1 rounded-xl bg-[#222222] text-[#00D1FF] border border-[#333333] font-mono text-xs font-bold">
                                PP: {m.pp}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 6: SPRITES GALLERY */}
                  {activeTab === 'sprites' && (
                    <div className="space-y-4">
                      <h4 className="text-xs font-black font-mono text-[#FFCC00] uppercase tracking-wider">
                        Formen & Sprites
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="p-3.5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] text-center space-y-2"
                        >
                          <div className="text-xs font-bold text-gray-200">Standard Artwork</div>
                          <img
                            src={detail?.sprites.officialArtwork || pokemon.artwork}
                            alt="Standard"
                            className="w-24 h-24 mx-auto object-contain drop-shadow"
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="p-3.5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] text-center space-y-2"
                        >
                          <div className="text-xs font-bold text-[#FFCC00]">Shiny Artwork ✨</div>
                          <img
                            src={detail?.sprites.officialShinyArtwork || pokemon.shinyArtwork || pokemon.artwork}
                            alt="Shiny"
                            className="w-24 h-24 mx-auto object-contain drop-shadow"
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="p-3.5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] text-center space-y-2"
                        >
                          <div className="text-xs font-bold text-gray-200">Pixel Sprite</div>
                          <img
                            src={detail?.sprites.frontDefault || pokemon.sprite}
                            alt="Sprite"
                            className="w-24 h-24 mx-auto object-contain pixelated"
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="p-3.5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] text-center space-y-2"
                        >
                          <div className="text-xs font-bold text-[#FFCC00]">Shiny Pixel Sprite ✨</div>
                          <img
                            src={detail?.sprites.frontShiny || pokemon.shinySprite || pokemon.sprite}
                            alt="Shiny Sprite"
                            className="w-24 h-24 mx-auto object-contain pixelated"
                          />
                        </motion.div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Recursive Evolution Tree Renderer Component with Vibrant Palette & Animations
function EvolutionNodeView({
  node,
  currentId,
  onSelectPokemon,
  allPokemonList,
}: {
  node: any;
  currentId: number;
  onSelectPokemon: (p: PokemonSummary) => void;
  allPokemonList: PokemonSummary[];
}) {
  const isCurrent = node.id === currentId;

  const handleClick = () => {
    soundFx.playSelect();
    const found = allPokemonList.find((p) => p.id === node.id);
    if (found) {
      onSelectPokemon(found);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      {/* Current Node Card */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={`p-3.5 rounded-2xl border-2 text-center cursor-pointer transition-all ${
          isCurrent
            ? 'bg-[#DC0A2D]/30 border-[#DC0A2D] shadow-[0_0_15px_rgba(220,10,45,0.5)] ring-2 ring-[#DC0A2D]'
            : 'bg-[#222222] hover:bg-[#2a2a2a] border-[#444444]'
        }`}
      >
        <img
          src={node.artwork || node.sprite}
          alt={node.germanName}
          className="w-16 h-16 mx-auto object-contain drop-shadow"
        />
        <div className="text-xs font-black text-white mt-1">{node.germanName}</div>
        <div className="text-[10px] text-[#49B65F] font-mono font-bold">#{node.id}</div>
      </motion.div>

      {/* Children branches */}
      {node.evolvesTo && node.evolvesTo.length > 0 && (
        <div className="flex flex-col gap-3 items-center">
          {node.evolvesTo.map((childNode: any, idx: number) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="flex flex-col items-center px-1">
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-[#00D1FF] text-sm font-bold"
                >
                  →
                </motion.span>
                <span className="text-[9px] font-mono text-[#FFCC00] font-black max-w-[80px] text-center">
                  {childNode.minLevel
                    ? `Lv. ${childNode.minLevel}`
                    : childNode.item
                    ? childNode.item
                    : childNode.trigger || 'Entwicklung'}
                </span>
              </div>
              <EvolutionNodeView
                node={childNode}
                currentId={currentId}
                onSelectPokemon={onSelectPokemon}
                allPokemonList={allPokemonList}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
