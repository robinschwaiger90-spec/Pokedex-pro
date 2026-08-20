import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, Volume2, Plus, Sparkles, Lock, Crown } from 'lucide-react';
import { POKEMON_TYPES } from '../data/pokemonTypes';
import { PokemonSummary } from '../types/pokemon';
import { soundFx } from '../utils/audio';
import { TypeBadge } from './TypeBadge';

interface PokemonCardProps {
  pokemon: PokemonSummary;
  isFavorite: boolean;
  isCaught: boolean;
  onToggleFavorite: (id: number) => void;
  onToggleCaught: (id: number) => void;
  onSelect: (pokemon: PokemonSummary) => void;
  onAddToTeam?: (pokemon: PokemonSummary) => void;
  language: 'de' | 'en';
  isLocked?: boolean;
  onOpenPaywall?: (reason?: string) => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  isFavorite,
  isCaught,
  onToggleFavorite,
  onToggleCaught,
  onSelect,
  onAddToTeam,
  language,
  isLocked = false,
  onOpenPaywall,
}) => {
  const [isShiny, setIsShiny] = useState(false);
  const [isPlayingCry, setIsPlayingCry] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const primaryType = pokemon.types[0] || 'normal';
  const typeConfig = POKEMON_TYPES[primaryType] || POKEMON_TYPES.normal;

  const formattedId = `#${pokemon.id.toString().padStart(4, '0')}`;
  const displayName = language === 'de' ? pokemon.germanName : pokemon.name.toUpperCase();
  const secondaryName = language === 'de' ? pokemon.name.toUpperCase() : pokemon.germanName;

  const currentArtwork = isShiny
    ? pokemon.shinyArtwork || pokemon.artwork
    : pokemon.artwork;

  const handleCardClick = () => {
    if (isLocked) {
      soundFx.playSelect();
      if (onOpenPaywall) {
        onOpenPaywall(`${displayName} (#${pokemon.id}) ist Teil von Generation ${pokemon.generation || 4} (Meister-Pass 5,00 €).`);
      }
      return;
    }
    soundFx.playSelect();
    onSelect(pokemon);
  };

  const handlePlayCry = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLocked) return;
    setIsPlayingCry(true);
    await soundFx.playCry(undefined, pokemon.id);
    setIsPlayingCry(false);
  };

  const handleToggleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLocked) {
      if (onOpenPaywall) onOpenPaywall('Favoriten für Gen 4-9 sind im Meister-Pass (5,00 €) enthalten.');
      return;
    }
    soundFx.playSelect();
    onToggleFavorite(pokemon.id);
  };

  const handleToggleCaught = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLocked) {
      if (onOpenPaywall) onOpenPaywall('Fangen für Gen 4-9 ist im Meister-Pass (5,00 €) enthalten.');
      return;
    }
    if (!isCaught) {
      soundFx.playCatch();
    } else {
      soundFx.playSelect();
    }
    onToggleCaught(pokemon.id);
  };

  const handleAddTeam = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLocked) {
      if (onOpenPaywall) onOpenPaywall('Team-Zusammenstellung mit Gen 4-9 erfordert den Meister-Pass (5,00 €).');
      return;
    }
    soundFx.playSelect();
    if (onAddToTeam) onAddToTeam(pokemon);
  };

  return (
    <motion.div
      id={`pokemon-card-${pokemon.id}`}
      layout
      initial={{ opacity: 0, y: 15, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={handleCardClick}
      className={`group relative bg-[#222222] hover:bg-[#1a1a1a] border-4 rounded-3xl p-4 cursor-pointer transition-colors duration-300 flex flex-col justify-between overflow-hidden ${
        isLocked
          ? 'border-[#333333] hover:border-[#FFCC00]/70 opacity-80 hover:opacity-100'
          : 'border-[#333333] hover:border-[#FFCC00] hover:shadow-[0_0_25px_rgba(255,204,0,0.35)]'
      }`}
    >
      {/* Dynamic ambient color glow */}
      <motion.div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-45 transition-opacity pointer-events-none"
        style={{ backgroundColor: typeConfig.color }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Top Header: ID (Vibrant Green #49B65F), Controls (Shiny, Cry, Favorite, Caught) */}
      <div className="flex items-center justify-between z-10">
        <span className="font-mono text-xs font-black text-[#49B65F] tracking-wider px-2 py-0.5 bg-[#111111] rounded-lg border border-[#333333] shadow-inner">
          {formattedId}
        </span>

        <div className="flex items-center gap-1">
          {/* Shiny Toggle */}
          <motion.button
            id={`shiny-toggle-${pokemon.id}`}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.15 }}
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playSelect();
              setIsShiny(!isShiny);
            }}
            className={`p-1.5 rounded-lg text-xs transition-all ${
              isShiny
                ? 'bg-[#FFCC00] text-[#222222] font-black shadow-[0_0_10px_#FFCC00]'
                : 'text-gray-400 hover:text-[#FFCC00] hover:bg-[#333333]'
            }`}
            title={isShiny ? 'Normales Aussehen' : 'Schillernd / Shiny'}
          >
            <motion.div
              animate={{ rotate: isShiny ? 360 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </motion.div>
          </motion.button>

          {/* Cry Audio */}
          <motion.button
            id={`cry-btn-${pokemon.id}`}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.15 }}
            onClick={handlePlayCry}
            className={`p-1.5 rounded-lg text-xs transition-all ${
              isPlayingCry
                ? 'bg-[#DC0A2D] text-white shadow-[0_0_10px_#DC0A2D]'
                : 'text-gray-400 hover:text-[#00D1FF] hover:bg-[#333333]'
            }`}
            title="Ruf abspielen"
          >
            <motion.div
              animate={isPlayingCry ? { scale: [1, 1.25, 0.9, 1.2, 1] } : {}}
              transition={{ duration: 0.4, repeat: isPlayingCry ? Infinity : 0 }}
            >
              <Volume2 className="w-3.5 h-3.5" />
            </motion.div>
          </motion.button>

          {/* Caught Pokeball Toggle */}
          <motion.button
            id={`caught-btn-${pokemon.id}`}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.15 }}
            onClick={handleToggleCaught}
            className={`p-1.5 rounded-lg transition-all ${
              isCaught
                ? 'bg-[#49B65F] text-[#222222] shadow-[0_0_10px_#49B65F]'
                : 'text-gray-500 hover:text-[#49B65F] hover:bg-[#333333]'
            }`}
            title={isCaught ? 'Gefangen!' : 'Als gefangen markieren'}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${isCaught ? 'fill-[#222222]' : ''}`} />
          </motion.button>

          {/* Favorite Star */}
          <motion.button
            id={`fav-btn-${pokemon.id}`}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.15 }}
            onClick={handleToggleFav}
            className={`p-1.5 rounded-lg transition-all ${
              isFavorite
                ? 'text-[#FFCC00] fill-[#FFCC00] shadow-[0_0_10px_rgba(255,204,0,0.5)]'
                : 'text-gray-500 hover:text-[#FFCC00] hover:bg-[#333333]'
            }`}
            title={isFavorite ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
          >
            <Star className={`w-3.5 h-3.5 ${isFavorite ? 'fill-[#FFCC00]' : ''}`} />
          </motion.button>
        </div>
      </div>

      {/* Pokémon Artwork Container with Animated Aura & Floating Effect */}
      <div className="relative py-3 flex items-center justify-center min-h-[140px] z-10">
        {isLocked && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded-2xl flex flex-col items-center justify-center gap-1 z-20">
            <div className="p-2 rounded-full bg-[#111111] border-2 border-[#FFCC00] text-[#FFCC00] shadow-[0_0_15px_rgba(255,204,0,0.5)]">
              <Lock className="w-5 h-5" />
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-black font-mono bg-[#FFCC00] text-[#222222] uppercase tracking-wider">
              Meister-Pass 5 €
            </span>
          </div>
        )}

        <motion.div
          className="absolute w-28 h-28 rounded-full opacity-30 group-hover:opacity-60"
          style={{
            background: `radial-gradient(circle, ${typeConfig.color} 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.img
          key={`${pokemon.id}-${isShiny}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: imageLoaded ? 1 : 0,
            scale: 1,
            y: [0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.2 },
            scale: { duration: 0.3 },
            y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
          }}
          whileHover={{ scale: 1.12 }}
          src={currentArtwork}
          alt={displayName}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className="w-28 h-28 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] z-10"
        />

        {!imageLoaded && (
          <div className="w-20 h-20 rounded-full bg-[#333333] animate-pulse" />
        )}
      </div>

      {/* Pokémon Details (Names, Types, BST) */}
      <div className="mt-2 space-y-2 z-10">
        <div className="text-center">
          <h3 className="text-base font-black text-white tracking-wide uppercase group-hover:text-[#FFCC00] transition-colors">
            {displayName}
          </h3>
          <p className="text-[10px] text-gray-400 font-medium italic">
            {secondaryName}
          </p>
        </div>

        {/* Type Badges */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type} size="sm" language={language} />
          ))}
        </div>

        {/* Base Stat Total (BST) Indicator with Animated Vibrant Bar */}
        <div className="pt-2 border-t border-[#333333]">
          <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1">
            <span>BST</span>
            <span className="font-bold text-[#FFCC00]">{pokemon.totalStats}</span>
          </div>
          <div className="w-full bg-[#111111] h-2 rounded-full overflow-hidden border border-[#333333]">
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(100, (pokemon.totalStats / 720) * 100)}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                backgroundColor:
                  pokemon.totalStats >= 600
                    ? '#00D1FF' // Cyan Super-tier
                    : pokemon.totalStats >= 500
                    ? '#FFCC00' // Yellow Strong
                    : pokemon.totalStats >= 400
                    ? '#49B65F' // Green Mid
                    : '#FF0000', // Red Base
              }}
            />
          </div>
        </div>

        {/* Quick Add To Team Button */}
        {onAddToTeam && (
          <motion.button
            id={`add-team-btn-${pokemon.id}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddTeam}
            className="w-full py-1.5 mt-1 bg-[#49B65F] hover:bg-emerald-400 text-[#222222] rounded-xl text-xs font-black flex items-center justify-center gap-1 transition-all opacity-0 group-hover:opacity-100 shadow-md"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{language === 'de' ? 'Ins Team' : 'Add to Team'}</span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

