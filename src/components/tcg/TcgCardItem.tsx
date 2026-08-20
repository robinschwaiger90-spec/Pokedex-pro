import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Heart, Plus, Sparkles, ZoomIn, RotateCw } from 'lucide-react';
import { TcgCard } from '../../types/tcg';
import { soundFx } from '../../utils/audio';

interface TcgCardItemProps {
  card: TcgCard;
  isFavorite?: boolean;
  onToggleFavorite?: (cardId: string) => void;
  onSelectCard?: (card: TcgCard) => void;
  onAddToDeck?: (cardId: string) => void;
  ownedCount?: number;
  showDeckButton?: boolean;
}

export const TcgCardItem: React.FC<TcgCardItemProps> = ({
  card,
  isFavorite = false,
  onToggleFavorite,
  onSelectCard,
  onAddToDeck,
  ownedCount,
  showDeckButton = true,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 16;
    const rotY = ((x - centerX) / centerX) * 16;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: card.isHolo ? 0.75 : 0.25,
    });
  };

  const handleMouseEnter = () => {
    if (card.isHolo) {
      soundFx.playHoloShimmer();
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playCardFlip();
    setIsFlipped(!isFlipped);
  };

  // Holo shine gradient styling based on rarity and pattern
  const getHoloStyle = () => {
    if (!card.isHolo || glarePos.opacity === 0) return {};

    if (card.holoPattern === 'gold') {
      return {
        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,215,0,0.85) 0%, rgba(255,180,0,0.35) 45%, transparent 70%)`,
        mixBlendMode: 'color-dodge' as const,
        opacity: glarePos.opacity,
      };
    }

    if (card.holoPattern === 'rainbow' || card.rarity.includes('Special Illustration') || card.rarity === 'Hyper Rare') {
      return {
        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.9) 0%, rgba(255,0,128,0.4) 25%, rgba(0,209,255,0.4) 50%, rgba(255,204,0,0.4) 75%, transparent 95%)`,
        mixBlendMode: 'overlay' as const,
        opacity: glarePos.opacity,
      };
    }

    if (card.holoPattern === 'glitter') {
      return {
        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.95) 0%, rgba(0,209,255,0.5) 30%, rgba(220,10,45,0.3) 60%, transparent 85%)`,
        mixBlendMode: 'color-dodge' as const,
        opacity: glarePos.opacity,
      };
    }

    // Default galaxy / cosmic holo
    return {
      background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.8) 0%, rgba(0,209,255,0.3) 40%, transparent 80%)`,
      mixBlendMode: 'color-dodge' as const,
      opacity: glarePos.opacity,
    };
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer select-none perspective-[1000px]"
    >
      <motion.div
        className="w-full relative transition-transform duration-100 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY + (isFlipped ? 180 : 0)}deg)`,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.04 }}
      >
        {/* FRONT SIDE */}
        <div
          className="relative rounded-2xl overflow-hidden border-2 border-[#333333] group-hover:border-[#FFCC00] shadow-xl bg-[#1a1a1a] transition-colors"
          style={{ backfaceVisibility: 'hidden' }}
          onClick={() => onSelectCard && onSelectCard(card)}
        >
          {/* Card Image */}
          <img
            src={card.images.small || card.images.large}
            alt={card.germanName || card.name}
            className="w-full h-auto object-contain rounded-2xl block"
            loading="lazy"
          />

          {/* 3D Holographic Foil Layer */}
          {card.isHolo && (
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-150"
              style={getHoloStyle()}
            />
          )}

          {/* Rarity & Holo Badge */}
          {card.isHolo && (
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#222222]/90 border border-[#FFCC00] text-[9px] font-black text-[#FFCC00] flex items-center gap-1 shadow-md backdrop-blur-xs">
              <Sparkles className="w-2.5 h-2.5 text-[#FFCC00]" />
              <span>{card.rarity}</span>
            </div>
          )}

          {/* Owned Count Badge (if passed) */}
          {typeof ownedCount === 'number' && (
            <div
              className={`absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold shadow-md border ${
                ownedCount > 0
                  ? 'bg-[#49B65F] text-[#222222] border-[#49B65F]'
                  : 'bg-[#222222]/80 text-gray-400 border-[#444444]'
              }`}
            >
              x{ownedCount}
            </div>
          )}

          {/* Hover Quick Action Buttons Bar */}
          <div className="absolute bottom-2 inset-x-2 flex items-center justify-between gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-[#111111]/90 backdrop-blur-xs p-1.5 rounded-xl border border-[#444444]">
            {/* Flip Card Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={handleFlip}
              className="p-1.5 rounded-lg bg-[#222222] hover:bg-[#333333] text-gray-300 hover:text-white"
              title="Karte umdrehen"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </motion.button>

            {/* Favorite / Binder Toggle */}
            {onToggleFavorite && (
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  soundFx.playSelect();
                  onToggleFavorite(card.id);
                }}
                className={`p-1.5 rounded-lg border ${
                  isFavorite
                    ? 'bg-[#FF0000]/20 border-[#FF0000] text-[#FF0000]'
                    : 'bg-[#222222] border-[#333333] text-gray-300 hover:text-white'
                }`}
                title="Favorit"
              >
                <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-[#FF0000]' : ''}`} />
              </motion.button>
            )}

            {/* Add to Deck */}
            {showDeckButton && onAddToDeck && (
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  soundFx.playSelect();
                  onAddToDeck(card.id);
                }}
                className="px-2 py-1 rounded-lg bg-[#49B65F] text-[#222222] text-[10px] font-black flex items-center gap-1 hover:brightness-110"
                title="Zum Deck hinzufügen"
              >
                <Plus className="w-3 h-3" />
                <span>Deck</span>
              </motion.button>
            )}

            {/* Zoom / Inspector */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectCard) onSelectCard(card);
              }}
              className="p-1.5 rounded-lg bg-[#00D1FF] text-[#222222] hover:brightness-110 font-bold"
              title="Große Ansicht"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

        {/* BACK SIDE (Iconic Pokémon TCG Blue Back) */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-[#00D1FF] shadow-2xl bg-[#0d1f38] flex flex-col items-center justify-center p-4 text-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          onClick={handleFlip}
        >
          {/* Classic TCG Pokeball graphic */}
          <div className="w-24 h-24 rounded-full border-4 border-[#FFCC00] flex flex-col overflow-hidden shadow-[0_0_20px_rgba(0,209,255,0.6)]">
            <div className="flex-1 bg-[#DC0A2D]" />
            <div className="h-2 bg-[#222222]" />
            <div className="flex-1 bg-white" />
          </div>
          <div className="mt-4 text-xs font-black text-[#FFCC00] tracking-widest uppercase">
            Pokémon TCG
          </div>
          <div className="text-[10px] text-gray-400 font-mono mt-1">Klicken zum Umdrehen</div>
        </div>
      </motion.div>

      {/* Card Info Footer */}
      <div className="mt-2 text-center">
        <div className="text-xs font-bold text-white truncate group-hover:text-[#FFCC00]">
          {card.germanName || card.name}
        </div>
        <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-mono mt-0.5">
          <span>{card.set.name}</span>
          <span>•</span>
          <span className="text-[#49B65F] font-bold">~{card.estimatedValueEur?.toFixed(2) || '1.00'} €</span>
        </div>
      </div>
    </div>
  );
};
