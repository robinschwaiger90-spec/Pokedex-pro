import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
  Scissors,
  ChevronRight,
  Eye,
  CheckCircle2,
  Trophy,
  DollarSign,
} from 'lucide-react';
import { TcgBoosterPack, TcgCard } from '../../types/tcg';
import { POKEMON_TCG_CARDS } from '../../data/tcgCardsData';
import { TcgCardItem } from './TcgCardItem';
import { soundFx } from '../../utils/audio';
import { hapticFeedback } from '../../utils/haptics';

interface TcgBoosterPackModalProps {
  pack: TcgBoosterPack | null;
  onClose: () => void;
  onPackOpened: (openedCards: TcgCard[]) => void;
  onSelectCard: (card: TcgCard) => void;
}

export const TcgBoosterPackModal: React.FC<TcgBoosterPackModalProps> = ({
  pack,
  onClose,
  onPackOpened,
  onSelectCard,
}) => {
  const [stage, setStage] = useState<'sealed' | 'opening' | 'revealing' | 'summary'>('sealed');
  const [packCards, setPackCards] = useState<TcgCard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  if (!pack) return null;

  // Generate 10-card pack with realistic pull algorithm
  const generatePackCards = (): TcgCard[] => {
    const pool = POKEMON_TCG_CARDS.filter((c) =>
      pack.availableCardIds.includes(c.id)
    );
    const availablePool = pool.length >= 8 ? pool : POKEMON_TCG_CARDS;

    const cards: TcgCard[] = [];

    // 1. Commons (3 cards)
    const commons = availablePool.filter((c) => c.rarity === 'Common' || c.supertype === 'Trainer');
    for (let i = 0; i < 3; i++) {
      const pick = commons[Math.floor(Math.random() * commons.length)] || availablePool[0];
      cards.push(pick);
    }

    // 2. Uncommons (3 cards)
    const uncommons = availablePool.filter((c) => c.rarity === 'Uncommon' || c.subtypes.includes('Basic'));
    for (let i = 0; i < 3; i++) {
      const pick = uncommons[Math.floor(Math.random() * uncommons.length)] || availablePool[1];
      cards.push(pick);
    }

    // 3. Energy Card (1 card)
    const energies = availablePool.filter((c) => c.supertype === 'Energy');
    cards.push(energies[Math.floor(Math.random() * energies.length)] || availablePool[2]);

    // 4. Reverse Holo / Foil Slot (1 card)
    const foilPool = availablePool.filter((c) => c.supertype === 'Pokémon');
    const reverseHolo = { ...foilPool[Math.floor(Math.random() * foilPool.length)], isHolo: true, holoPattern: 'galaxy' as const };
    cards.push(reverseHolo);

    // 5. The BIG HIT Slot (Rare / Double Rare / Ultra Rare / Secret Rare)
    const rareHits = availablePool.filter(
      (c) =>
        c.rarity === 'Special Illustration Rare' ||
        c.rarity === 'Secret Rare' ||
        c.rarity === 'Hyper Rare' ||
        c.rarity === 'Double Rare' ||
        c.rarity === 'Rare Holo'
    );
    const hit = rareHits.length > 0
      ? rareHits[Math.floor(Math.random() * rareHits.length)]
      : availablePool[0];
    cards.push(hit);

    return cards;
  };

  const handleRipPack = () => {
    soundFx.playPackRip();
    hapticFeedback.packRip();
    setStage('opening');

    const generated = generatePackCards();
    setPackCards(generated);
    onPackOpened(generated);

    setTimeout(() => {
      setStage('revealing');
      setCurrentCardIndex(0);
      soundFx.playCardFlip();
      hapticFeedback.light();
    }, 700);
  };

  const handleNextCard = () => {
    if (currentCardIndex < packCards.length - 1) {
      const nextIdx = currentCardIndex + 1;
      setCurrentCardIndex(nextIdx);
      soundFx.playCardFlip();
      hapticFeedback.light();

      // If revealing the big hit (last card) and it's super rare, shoot confetti & fanfare!
      const nextCard = packCards[nextIdx];
      if (
        nextIdx === packCards.length - 1 &&
        (nextCard.rarity === 'Special Illustration Rare' ||
          nextCard.rarity === 'Secret Rare' ||
          nextCard.rarity === 'Hyper Rare')
      ) {
        soundFx.playRareHit();
        hapticFeedback.rareHit();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FFCC00', '#00D1FF', '#DC0A2D', '#FFFFFF', '#49B65F'],
        });
      }
    } else {
      // Finished all cards -> summary
      soundFx.playSuccess();
      hapticFeedback.medium();
      setStage('summary');
    }
  };

  const handleRevealAll = () => {
    soundFx.playSuccess();
    setStage('summary');
  };

  const totalPackValue = packCards.reduce(
    (acc, card) => acc + (card.estimatedValueEur || 1),
    0
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-2xl bg-[#1a1a1a] border-4 border-[#333333] rounded-3xl overflow-hidden shadow-2xl my-6 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#DC0A2D] border-b-4 border-[#8B0000]">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#FFCC00]" />
              <h3 className="text-base sm:text-lg font-black">{pack.name} Booster Pack</h3>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-1.5 rounded-xl bg-[#222222] border-2 border-[#444444] hover:bg-[#333333]"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="p-6">
            {/* STAGE 1: SEALED BOOSTER PACK */}
            {stage === 'sealed' && (
              <div className="flex flex-col items-center justify-center text-center space-y-6 py-4">
                {/* 3D Booster Pack Wrapper */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: [0, -1, 1, 0] }}
                  className="relative w-56 h-88 rounded-2xl bg-gradient-to-b from-[#DC0A2D] via-[#8B0000] to-[#222222] border-4 border-[#FFCC00] shadow-[0_0_35px_rgba(220,10,45,0.6)] flex flex-col items-center justify-between p-4 overflow-hidden"
                >
                  {/* Foil Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  <div className="text-center z-10">
                    <div className="text-[10px] font-mono tracking-widest text-[#FFCC00] font-black uppercase">
                      Pokémon Sammelkartenspiel
                    </div>
                    <div className="text-sm font-black text-white">{pack.series}</div>
                  </div>

                  {/* Pack Cover Art Image */}
                  <img
                    src={pack.coverArt}
                    alt={pack.name}
                    className="w-40 h-48 object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] z-10"
                  />

                  <div className="text-center z-10 bg-[#111111]/80 px-3 py-1 rounded-xl border border-[#444444]">
                    <div className="text-xs font-black text-[#FFCC00]">{pack.setName}</div>
                    <div className="text-[10px] text-gray-300 font-mono">10 Zusätzliche Spielkarten</div>
                  </div>
                </motion.div>

                {/* Rip Open Button */}
                <div className="space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRipPack}
                    className="px-8 py-3.5 rounded-2xl bg-[#FFCC00] border-2 border-[#cca300] text-[#222222] font-black text-base flex items-center gap-2 shadow-xl hover:brightness-110"
                  >
                    <Scissors className="w-5 h-5 text-[#DC0A2D]" />
                    <span>Booster-Pack Aufreißen!</span>
                  </motion.button>
                  <p className="text-xs font-mono text-gray-400">
                    Garantierte Holo- & Rareslot-Karten in jedem Pack!
                  </p>
                </div>
              </div>
            )}

            {/* STAGE 2: OPENING ANIMATION */}
            {stage === 'opening' && (
              <div className="flex flex-col items-center justify-center min-h-[350px] space-y-4">
                <motion.div
                  animate={{ rotateZ: [0, -10, 10, -5, 5, 0], scale: [1, 1.15, 0.8] }}
                  transition={{ duration: 0.7 }}
                  className="w-48 h-72 rounded-2xl bg-[#DC0A2D] border-4 border-[#FFCC00] flex items-center justify-center shadow-2xl"
                >
                  <Sparkles className="w-16 h-16 text-[#FFCC00] animate-spin" />
                </motion.div>
                <div className="text-sm font-black text-[#FFCC00] font-mono animate-pulse">
                  Öffne Booster-Pack...
                </div>
              </div>
            )}

            {/* STAGE 3: CARD BY CARD REVEAL */}
            {stage === 'revealing' && packCards.length > 0 && (
              <div className="flex flex-col items-center justify-center space-y-5 py-2">
                <div className="flex items-center justify-between w-full max-w-md px-2 text-xs font-mono">
                  <span className="text-gray-400">
                    Karte <strong className="text-white">{currentCardIndex + 1}</strong> von 10
                  </span>
                  <span className="text-[#FFCC00] font-bold">
                    {packCards[currentCardIndex].rarity}
                  </span>
                </div>

                {/* Main Revealed Card Display */}
                <div className="w-64 sm:w-72">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentCardIndex}
                      initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                      exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <TcgCardItem
                        card={packCards[currentCardIndex]}
                        onSelectCard={onSelectCard}
                        showDeckButton={false}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNextCard}
                    className="px-6 py-2.5 rounded-xl bg-[#49B65F] text-[#222222] font-black text-sm flex items-center gap-1.5 shadow-lg"
                  >
                    <span>
                      {currentCardIndex < packCards.length - 1 ? 'Nächste Karte' : 'Zur Zusammenfassung'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRevealAll}
                    className="px-4 py-2.5 rounded-xl bg-[#222222] border-2 border-[#444444] text-gray-300 hover:text-white text-xs font-bold flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Alle aufdecken</span>
                  </motion.button>
                </div>
              </div>
            )}

            {/* STAGE 4: PACK SUMMARY & BINDER REWARD */}
            {stage === 'summary' && (
              <div className="space-y-6 py-2">
                <div className="text-center space-y-1">
                  <div className="flex items-center justify-center gap-2 text-[#FFCC00]">
                    <Trophy className="w-5 h-5" />
                    <h4 className="text-lg font-black">Pack Geöffnet!</h4>
                  </div>
                  <p className="text-xs font-mono text-gray-300">
                    Alle 10 Karten wurden zu deinem Sammelalbum hinzugefügt.
                  </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-h-80 overflow-y-auto pr-1">
                  {packCards.map((card, idx) => (
                    <div
                      key={idx}
                      onClick={() => onSelectCard(card)}
                      className="cursor-pointer group relative rounded-xl border-2 border-[#333333] hover:border-[#FFCC00] overflow-hidden bg-[#222222] transition-all hover:scale-105"
                    >
                      <img
                        src={card.images.small}
                        alt={card.germanName}
                        className="w-full h-auto object-contain"
                      />
                      <div className="p-1 text-center bg-[#111111] text-[9px] font-bold truncate">
                        {card.germanName}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pack Value Banner */}
                <div className="p-4 rounded-2xl bg-[#222222] border-2 border-[#333333] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <DollarSign className="w-4 h-4 text-[#49B65F]" />
                    <span className="text-gray-300">Geschätzter Gesamtwert des Packs:</span>
                  </div>
                  <div className="text-lg font-black text-[#49B65F] font-mono">
                    ~{totalPackValue.toFixed(2)} €
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-[#00D1FF] text-[#222222] font-black text-sm flex items-center gap-1.5 shadow-lg"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Fertig & Schließen</span>
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
