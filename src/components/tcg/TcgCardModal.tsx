import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Heart,
  Plus,
  Sparkles,
  ExternalLink,
  Shield,
  Zap,
  Info,
  DollarSign,
  User,
  Calendar,
} from 'lucide-react';
import { TcgCard } from '../../types/tcg';
import { soundFx } from '../../utils/audio';

interface TcgCardModalProps {
  card: TcgCard | null;
  onClose: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (cardId: string) => void;
  onAddToDeck?: (cardId: string) => void;
}

export const TcgCardModal: React.FC<TcgCardModalProps> = ({
  card,
  onClose,
  isFavorite = false,
  onToggleFavorite,
  onAddToDeck,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  if (!card) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateX(-((y - centerY) / centerY) * 18);
    setRotateY(((x - centerX) / centerX) * 18);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: card.isHolo ? 0.85 : 0.3,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#1a1a1a] border-4 border-[#333333] rounded-3xl overflow-hidden shadow-2xl my-8 text-white"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#DC0A2D] border-b-4 border-[#8B0000]">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#FFCC00]" />
              <div>
                <h3 className="text-lg sm:text-xl font-black tracking-wide text-white">
                  {card.germanName || card.name}
                </h3>
                <div className="text-xs font-mono text-white/80">
                  {card.set.name} • {card.number} • {card.rarity}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {onToggleFavorite && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    soundFx.playSelect();
                    onToggleFavorite(card.id);
                  }}
                  className={`p-2.5 rounded-xl border-2 transition-all ${
                    isFavorite
                      ? 'bg-white text-[#FF0000] border-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                      : 'bg-[#8B0000] text-white border-[#8B0000] hover:bg-[#600000]'
                  }`}
                  title="Zu Favoriten hinzufügen"
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-[#FF0000]' : ''}`} />
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  soundFx.playSelect();
                  onClose();
                }}
                className="p-2.5 rounded-xl bg-[#222222] border-2 border-[#444444] text-white hover:bg-[#333333] transition-all"
                title="Schließen"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column: 3D Holographic Card View */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-2xl overflow-hidden cursor-pointer select-none perspective-[1000px] w-full max-w-[320px] shadow-2xl border-2 border-[#444444]"
              >
                <motion.div
                  className="w-full relative transition-transform duration-75 ease-out"
                  style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={card.images.large || card.images.small}
                    alt={card.germanName || card.name}
                    className="w-full h-auto object-contain rounded-2xl block"
                  />

                  {/* Dynamic Shimmer Glare */}
                  {card.isHolo && (
                    <div
                      className="absolute inset-0 pointer-events-none rounded-2xl"
                      style={{
                        background:
                          card.holoPattern === 'gold'
                            ? `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,215,0,0.85) 0%, transparent 65%)`
                            : `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.85) 0%, rgba(255,0,128,0.4) 30%, rgba(0,209,255,0.4) 60%, transparent 90%)`,
                        mixBlendMode: 'color-dodge',
                        opacity: glarePos.opacity,
                      }}
                    />
                  )}
                </motion.div>
              </div>

              <div className="text-[11px] font-mono text-gray-400 mt-3 text-center">
                Bewege die Maus über die Karte für den 3D-Holo-Glanz
              </div>

              {onAddToDeck && (
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    soundFx.playSuccess();
                    onAddToDeck(card.id);
                  }}
                  className="mt-4 w-full max-w-[320px] py-3 rounded-2xl bg-[#49B65F] border-2 border-[#368b47] text-[#222222] font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:brightness-110"
                >
                  <Plus className="w-4 h-4" />
                  <span>Zum aktiven Deck hinzufügen</span>
                </motion.button>
              )}
            </div>

            {/* Right Column: Card Attributes & Gameplay Data */}
            <div className="md:col-span-7 space-y-4">
              {/* Top Stats Box */}
              <div className="p-4 rounded-2xl bg-[#222222] border-2 border-[#333333] flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-gray-400">Typ & Subtyp</span>
                  <div className="text-sm font-black text-[#00D1FF] flex items-center gap-2">
                    <span>{card.supertype}</span>
                    {card.subtypes && card.subtypes.length > 0 && (
                      <span className="text-gray-300 font-bold">• {card.subtypes.join(' / ')}</span>
                    )}
                  </div>
                </div>

                {card.hp && (
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono font-bold text-gray-400">Kraftpunkte (HP)</span>
                    <div className="text-xl font-mono font-black text-[#49B65F]">{card.hp} HP</div>
                  </div>
                )}
              </div>

              {/* Attacks Section */}
              {card.attacks && card.attacks.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-black font-mono text-[#FFCC00] uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#FFCC00]" />
                    <span>Attacken & Fähigkeiten</span>
                  </h4>

                  <div className="space-y-2">
                    {card.attacks.map((att, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#222222] border-2 border-[#333333] space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {/* Energy Cost Badges */}
                            <div className="flex items-center gap-1">
                              {att.cost.length > 0 ? (
                                att.cost.map((c, cIdx) => (
                                  <span
                                    key={cIdx}
                                    className="px-1.5 py-0.5 rounded text-[10px] font-mono font-black bg-[#333333] text-gray-200 border border-[#555555]"
                                  >
                                    {c}
                                  </span>
                                ))
                              ) : (
                                <span className="text-[10px] font-mono text-gray-400">Kostenlos</span>
                              )}
                            </div>
                            <span className="text-sm font-black text-white">
                              {att.germanName || att.name}
                            </span>
                          </div>

                          {att.damage && (
                            <span className="text-sm font-mono font-black text-[#FFCC00]">
                              {att.damage} DMG
                            </span>
                          )}
                        </div>

                        {(att.germanText || att.text) && (
                          <p className="text-xs text-gray-300 leading-relaxed">
                            {att.germanText || att.text}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trainer Text (for Trainer cards) */}
              {card.supertype === 'Trainer' && (
                <div className="p-4 rounded-2xl bg-[#222222] border-2 border-[#333333] space-y-2">
                  <div className="text-xs font-mono font-bold text-[#00D1FF]">Trainereffekt</div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {card.germanFlavorText || card.flavorText || 'Setze diese Trainerkarte ein, um taktische Vorteile im Kampf zu erlangen.'}
                  </p>
                </div>
              )}

              {/* Weakness / Resistance / Retreat */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-2xl bg-[#222222] border-2 border-[#333333] text-center">
                  <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Schwäche</div>
                  <div className="text-xs font-bold text-[#FF0000] mt-1">
                    {card.weaknesses && card.weaknesses.length > 0
                      ? `${card.weaknesses[0].type} ${card.weaknesses[0].value}`
                      : 'Keine'}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#222222] border-2 border-[#333333] text-center">
                  <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Resistenz</div>
                  <div className="text-xs font-bold text-[#49B65F] mt-1">
                    {card.resistances && card.resistances.length > 0
                      ? `${card.resistances[0].type} ${card.resistances[0].value}`
                      : 'Keine'}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#222222] border-2 border-[#333333] text-center">
                  <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Rückzug</div>
                  <div className="text-xs font-bold text-gray-300 mt-1">
                    {card.retreatCost && card.retreatCost.length > 0
                      ? `${card.retreatCost.length} Energie(n)`
                      : 'Kostenlos'}
                  </div>
                </div>
              </div>

              {/* Market Value & Collector Specs */}
              <div className="p-4 rounded-2xl bg-[#111111] border-2 border-[#333333] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#49B65F]" />
                    <span>Geschätzter Sammlerwert:</span>
                  </span>
                  <span className="text-base font-black text-[#49B65F] font-mono">
                    ~{card.estimatedValueEur?.toFixed(2) || '1.00'} €
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-[#2a2a2a] pt-2">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#00D1FF]" />
                    <span>Illustrator / Künstler:</span>
                  </span>
                  <span className="font-bold text-white">{card.artist || 'Unbekannt'}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-[#2a2a2a] pt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#FFCC00]" />
                    <span>Kartenserie:</span>
                  </span>
                  <span className="font-bold text-white">{card.set.series} ({card.set.releaseDate})</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
