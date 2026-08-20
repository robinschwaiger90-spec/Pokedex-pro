import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Swords,
  Trash2,
  Play,
  RotateCcw,
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  Layers,
  Zap,
} from 'lucide-react';
import { TcgCard, TcgDeck } from '../../types/tcg';
import { POKEMON_TCG_CARDS } from '../../data/tcgCardsData';
import { soundFx } from '../../utils/audio';

interface TcgDeckBuilderProps {
  deck: TcgDeck;
  onUpdateDeck: (updatedDeck: TcgDeck) => void;
  onSelectCard: (card: TcgCard) => void;
}

export const TcgDeckBuilder: React.FC<TcgDeckBuilderProps> = ({
  deck,
  onUpdateDeck,
  onSelectCard,
}) => {
  const [deckName, setDeckName] = useState(deck.name || 'Mein Glurak Deck');
  const [testHand, setTestHand] = useState<TcgCard[]>([]);
  const [showTestModal, setShowTestModal] = useState(false);

  // Map card IDs to full card objects
  const cardObjects: TcgCard[] = deck.cardIds
    .map((id) => POKEMON_TCG_CARDS.find((c) => c.id === id))
    .filter(Boolean) as TcgCard[];

  // Stats Breakdown
  const pokemonCards = cardObjects.filter((c) => c.supertype === 'Pokémon');
  const trainerCards = cardObjects.filter((c) => c.supertype === 'Trainer');
  const energyCards = cardObjects.filter((c) => c.supertype === 'Energy');
  const basicPokemon = pokemonCards.filter((c) => c.subtypes.includes('Basic'));

  // Grouped cards for clean list
  const cardCounts: { [id: string]: { card: TcgCard; count: number } } = {};
  cardObjects.forEach((c) => {
    if (!cardCounts[c.id]) {
      cardCounts[c.id] = { card: c, count: 0 };
    }
    cardCounts[c.id].count += 1;
  });

  const handleRemoveCard = (cardId: string) => {
    soundFx.playSelect();
    const idx = deck.cardIds.indexOf(cardId);
    if (idx !== -1) {
      const newIds = [...deck.cardIds];
      newIds.splice(idx, 1);
      onUpdateDeck({ ...deck, cardIds: newIds });
    }
  };

  const handleClearDeck = () => {
    soundFx.playSelect();
    onUpdateDeck({ ...deck, cardIds: [] });
  };

  const handleNameChange = (newName: string) => {
    setDeckName(newName);
    onUpdateDeck({ ...deck, name: newName });
  };

  // 7-card Test Hand Opening Draw Simulator
  const handleDrawTestHand = () => {
    if (deck.cardIds.length < 7) return;
    soundFx.playCardFlip();
    const shuffled = [...cardObjects].sort(() => Math.random() - 0.5);
    const hand = shuffled.slice(0, 7);
    setTestHand(hand);
    setShowTestModal(true);
  };

  const isDeckLegal = deck.cardIds.length === 60 && basicPokemon.length >= 1;

  return (
    <div className="space-y-6">
      {/* Deck Header Bar */}
      <div className="p-5 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1 space-y-1">
          <input
            type="text"
            value={deckName}
            onChange={(e) => handleNameChange(e.target.value)}
            className="text-lg font-black bg-transparent border-b border-[#444444] focus:border-[#FFCC00] outline-none text-white w-full max-w-sm px-1 py-0.5"
            placeholder="Deck Name eingeben..."
          />
          <div className="text-xs font-mono text-gray-400">
            Format: <span className="text-[#00D1FF] font-bold">{deck.format || 'Standard'}</span> • 60-Karten TCG Deck
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDrawTestHand}
            disabled={deck.cardIds.length < 7}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md ${
              deck.cardIds.length >= 7
                ? 'bg-[#00D1FF] text-[#222222] hover:brightness-110'
                : 'bg-[#333333] text-gray-500 cursor-not-allowed'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Starthand Testen (7 Karten)</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClearDeck}
            className="p-2 rounded-xl bg-[#222222] border-2 border-[#444444] text-rose-400 hover:bg-[#333333]"
            title="Deck leeren"
          >
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Deck Composition Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Total cards */}
        <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
          <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Deckgröße</div>
          <div className="text-xl font-mono font-black mt-1 flex items-center gap-2">
            <span className={deck.cardIds.length === 60 ? 'text-[#49B65F]' : 'text-[#FFCC00]'}>
              {deck.cardIds.length}
            </span>
            <span className="text-xs text-gray-400 font-normal">/ 60</span>
          </div>
        </div>

        {/* Pokémon Count */}
        <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
          <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Pokémon</div>
          <div className="text-xl font-mono font-black text-[#00D1FF] mt-1">
            {pokemonCards.length}{' '}
            <span className="text-[10px] text-gray-400 font-normal font-sans">
              ({basicPokemon.length} Basis)
            </span>
          </div>
        </div>

        {/* Trainer Count */}
        <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
          <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Trainer</div>
          <div className="text-xl font-mono font-black text-[#FFCC00] mt-1">
            {trainerCards.length}
          </div>
        </div>

        {/* Energy Count */}
        <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
          <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Energien</div>
          <div className="text-xl font-mono font-black text-[#49B65F] mt-1">
            {energyCards.length}
          </div>
        </div>
      </div>

      {/* Deck Validation Notice */}
      <div
        className={`p-3.5 rounded-2xl border-2 flex items-center gap-3 text-xs font-mono ${
          isDeckLegal
            ? 'bg-[#49B65F]/20 border-[#49B65F] text-[#49B65F]'
            : 'bg-[#FFCC00]/20 border-[#FFCC00] text-[#FFCC00]'
        }`}
      >
        {isDeckLegal ? (
          <>
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Turnier-Legales 60-Karten Deck mit mindestens 1 Basis-Pokémon!</span>
          </>
        ) : (
          <>
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <span>
              {deck.cardIds.length < 60
                ? `Füge noch ${60 - deck.cardIds.length} Karte(n) hinzu, um ein volles 60-Karten-Deck zu bauen.`
                : deck.cardIds.length > 60
                ? `Das Deck hat ${deck.cardIds.length - 60} Karte(n) zu viel für ein Standard-Deck.`
                : 'Füge mindestens 1 Basis-Pokémon hinzu.'}
            </span>
          </>
        )}
      </div>

      {/* Cards in Deck Grid */}
      <div className="space-y-3">
        <h4 className="text-xs font-black font-mono text-[#FFCC00] uppercase tracking-wider">
          Karten im Deck ({Object.keys(cardCounts).length} verschiedene)
        </h4>

        {deck.cardIds.length === 0 ? (
          <div className="p-8 rounded-2xl bg-[#1a1a1a] border-2 border-dashed border-[#444444] text-center space-y-2">
            <Layers className="w-8 h-8 mx-auto text-gray-500" />
            <p className="text-sm font-bold text-gray-300">Dein Deck ist noch leer!</p>
            <p className="text-xs text-gray-500">
              Wähle Karten aus dem "Kartenkatalog" oder deinen Booster-Packs aus und klicke auf "+ Deck".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {Object.values(cardCounts).map(({ card, count }) => (
              <div
                key={card.id}
                onClick={() => onSelectCard(card)}
                className="group relative rounded-xl border-2 border-[#333333] hover:border-[#FFCC00] bg-[#1a1a1a] overflow-hidden cursor-pointer shadow-md transition-all hover:scale-105"
              >
                <img
                  src={card.images.small}
                  alt={card.germanName}
                  className="w-full h-auto object-contain"
                />

                {/* Card Count Pill */}
                <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-md bg-[#222222] border border-[#FFCC00] text-[10px] font-black text-[#FFCC00]">
                  x{count}
                </div>

                {/* Remove 1 button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveCard(card.id);
                  }}
                  className="absolute bottom-1.5 right-1.5 p-1 rounded-md bg-rose-600 hover:bg-rose-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  title="1 entfernen"
                >
                  <Trash2 className="w-3 h-3" />
                </motion.button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Opening Hand Test Modal */}
      {showTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl bg-[#1a1a1a] border-4 border-[#333333] rounded-3xl p-6 space-y-5 text-white"
          >
            <div className="flex items-center justify-between border-b-2 border-[#333333] pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00D1FF]" />
                <h4 className="text-base font-black">7-Karten Starthand-Simulation</h4>
              </div>
              <button
                onClick={() => setShowTestModal(false)}
                className="p-1.5 rounded-xl bg-[#222222] hover:bg-[#333333] text-gray-300"
              >
                ✕
              </button>
            </div>

            {/* Hand Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
              {testHand.map((card, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-[#444444] shadow">
                  <img src={card.images.small} alt={card.germanName} className="w-full h-auto object-contain" />
                </div>
              ))}
            </div>

            {/* Hand Analysis */}
            <div className="p-3.5 rounded-2xl bg-[#222222] border-2 border-[#333333] flex items-center justify-between text-xs font-mono">
              <div>
                Basis-Pokémon gezogen:{' '}
                <strong
                  className={
                    testHand.some((c) => c.supertype === 'Pokémon' && c.subtypes.includes('Basic'))
                      ? 'text-[#49B65F]'
                      : 'text-rose-400'
                  }
                >
                  {testHand.filter((c) => c.supertype === 'Pokémon' && c.subtypes.includes('Basic')).length}
                </strong>{' '}
                {testHand.every((c) => !c.subtypes.includes('Basic')) && '(Mulligan! Kein Basis-Pokémon)'}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDrawTestHand}
                className="px-3.5 py-1.5 rounded-xl bg-[#FFCC00] text-[#222222] font-black flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Neu mischen</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
