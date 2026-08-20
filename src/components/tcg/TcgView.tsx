import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  Sparkles,
  BookOpen,
  Swords,
  Search,
  Filter,
  Package,
  Heart,
  RotateCcw,
  Trophy,
  DollarSign,
  Star,
  CheckCircle,
  Gift,
  Lock,
  Crown,
  Ticket,
  Share2,
} from 'lucide-react';
import { TcgCard, TcgBoosterPack, TcgDeck, TcgUserCollection } from '../../types/tcg';
import { POKEMON_TCG_CARDS, POKEMON_BOOSTER_PACKS } from '../../data/tcgCardsData';
import { TcgCardItem } from './TcgCardItem';
import { TcgCardModal } from './TcgCardModal';
import { TcgBoosterPackModal } from './TcgBoosterPackModal';
import { TcgDeckBuilder } from './TcgDeckBuilder';
import { soundFx } from '../../utils/audio';
import { MembershipState, canOpenBoosterPack, getMaxDailyPacks } from '../../utils/membership';

type TcgSubTab = 'catalog' | 'packs' | 'binder' | 'decks';

interface TcgViewProps {
  onClose?: () => void;
  language: 'de' | 'en';
  isPro?: boolean;
  membershipState?: MembershipState;
  onUseDailyPack?: () => void;
  onOpenPaywall?: (reason?: string) => void;
}

export const TcgView: React.FC<TcgViewProps> = ({
  language,
  isPro = false,
  membershipState,
  onUseDailyPack,
  onOpenPaywall,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<TcgSubTab>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSupertype, setSelectedSupertype] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
  const [selectedSet, setSelectedSet] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'value' | 'name' | 'number'>('value');

  // Selected Card for 3D Inspector Modal
  const [inspectedCard, setInspectedCard] = useState<TcgCard | null>(null);

  // Selected Booster Pack for Opening Modal
  const [activePackOpening, setActivePackOpening] = useState<TcgBoosterPack | null>(null);

  // User TCG Collection Persistence in localStorage
  const [collection, setCollection] = useState<TcgUserCollection>(() => {
    try {
      const saved = localStorage.getItem('pokedex_tcg_collection');
      if (saved) return JSON.parse(saved);
    } catch {}
    // Initial Starter Collection
    return {
      ownedCards: {
        'sv3pt5-173': 2,
        'sv3pt5-143': 1,
        'sv1-189': 3,
        'sv1-196': 4,
        'sve-2': 10,
        'sve-4': 10,
      },
      favoriteCardIds: ['sv3pt5-199', 'swsh7-215'],
      openedPacksCount: 0,
      decks: [
        {
          id: 'deck-charizard-vstar',
          name: 'Glurak Pyro-Power Deck',
          cardIds: [
            'sv3pt5-199',
            'sv3pt5-199',
            'sv3pt5-173',
            'sv3pt5-173',
            'sv3pt5-143',
            'sv1-189',
            'sv1-189',
            'sv1-196',
            'sv1-196',
            'sv1-191',
            'sve-2',
            'sve-2',
            'sve-2',
            'sve-2',
            'sve-2',
          ],
          createdAt: Date.now(),
          format: 'Standard',
        },
      ],
    };
  });

  // Save collection to storage
  useEffect(() => {
    localStorage.setItem('pokedex_tcg_collection', JSON.stringify(collection));
  }, [collection]);

  const handleToggleFavorite = (cardId: string) => {
    setCollection((prev) => {
      const isFav = prev.favoriteCardIds.includes(cardId);
      return {
        ...prev,
        favoriteCardIds: isFav
          ? prev.favoriteCardIds.filter((id) => id !== cardId)
          : [...prev.favoriteCardIds, cardId],
      };
    });
  };

  const handlePackOpened = (openedCards: TcgCard[]) => {
    setCollection((prev) => {
      const newOwned = { ...prev.ownedCards };
      openedCards.forEach((c) => {
        newOwned[c.id] = (newOwned[c.id] || 0) + 1;
      });
      return {
        ...prev,
        ownedCards: newOwned,
        openedPacksCount: prev.openedPacksCount + 1,
      };
    });
  };

  const handleAddToDeck = (cardId: string) => {
    setCollection((prev) => {
      const decks = [...prev.decks];
      if (decks.length === 0) {
        decks.push({
          id: 'deck-1',
          name: 'Mein Pokémon Deck',
          cardIds: [cardId],
          createdAt: Date.now(),
          format: 'Standard',
        });
      } else {
        decks[0] = {
          ...decks[0],
          cardIds: [...decks[0].cardIds, cardId],
        };
      }
      return { ...prev, decks };
    });
  };

  const handleUpdateActiveDeck = (updatedDeck: TcgDeck) => {
    setCollection((prev) => {
      const decks = prev.decks.map((d) => (d.id === updatedDeck.id ? updatedDeck : d));
      return { ...prev, decks };
    });
  };

  // Filtered Cards for Catalog & Binder
  const filteredCards = useMemo(() => {
    return POKEMON_TCG_CARDS.filter((card) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName =
          card.name.toLowerCase().includes(q) ||
          card.germanName.toLowerCase().includes(q) ||
          (card.artist && card.artist.toLowerCase().includes(q)) ||
          card.number.toLowerCase().includes(q);
        if (!matchesName) return false;
      }

      // Supertype
      if (selectedSupertype && card.supertype !== selectedSupertype) {
        return false;
      }

      // Type
      if (selectedType && (!card.types || !card.types.includes(selectedType))) {
        return false;
      }

      // Rarity
      if (selectedRarity && card.rarity !== selectedRarity) {
        return false;
      }

      // Set
      if (selectedSet && card.set.id !== selectedSet) {
        return false;
      }

      // Binder tab filter (only show owned or favorites)
      if (activeSubTab === 'binder') {
        const isOwned = (collection.ownedCards[card.id] || 0) > 0;
        const isFav = collection.favoriteCardIds.includes(card.id);
        if (!isOwned && !isFav) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'value') {
        return (b.estimatedValueEur || 0) - (a.estimatedValueEur || 0);
      }
      if (sortBy === 'name') {
        return (a.germanName || a.name).localeCompare(b.germanName || b.name);
      }
      return a.number.localeCompare(b.number);
    });
  }, [
    searchQuery,
    selectedSupertype,
    selectedType,
    selectedRarity,
    selectedSet,
    sortBy,
    activeSubTab,
    collection,
  ]);

  // Total Portfolio Stats for Binder
  const binderStats = useMemo(() => {
    let totalCardsCount = 0;
    let totalEstimatedValue = 0;
    let uniqueCount = 0;

    Object.entries(collection.ownedCards).forEach(([cardId, count]) => {
      const card = POKEMON_TCG_CARDS.find((c) => c.id === cardId);
      if (card && count > 0) {
        totalCardsCount += count;
        uniqueCount += 1;
        totalEstimatedValue += (card.estimatedValueEur || 1) * count;
      }
    });

    const completionRate = Math.min(
      100,
      Math.round((uniqueCount / POKEMON_TCG_CARDS.length) * 100)
    );

    return {
      totalCardsCount,
      uniqueCount,
      totalEstimatedValue,
      completionRate,
    };
  }, [collection]);

  const isMasterPro = isPro || membershipState?.tier === 'master' || membershipState?.isPro;
  const isCommunity = membershipState?.tier === 'community';
  const maxPacksAllowed = membershipState ? getMaxDailyPacks(membershipState.tier) : 1;
  const packsUsedToday = membershipState?.dailyPacksCount || 0;
  const remainingToday = Math.max(0, maxPacksAllowed - packsUsedToday);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* TCG Hero Header & Sub-Navigation */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#1a1a1a] via-[#222222] to-[#1a1a1a] border-4 border-[#333333] shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3.5 rounded-2xl bg-[#DC0A2D] text-white shadow-lg border-2 border-[#8B0000]">
              <Sparkles className="w-7 h-7 text-[#FFCC00]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                <span>Pokémon TCG Sammelkarten-Zentrale</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-black bg-[#FFCC00] text-[#222222]">
                  3D HOLO
                </span>
              </h2>
              <p className="text-xs text-gray-400 font-mono">
                Sammle Karten, öffne Booster-Packs, baue 60-Karten-Turnierdecks & betrachte 3D-Holo-Glanz.
              </p>
            </div>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-[#111111] px-4 py-2 rounded-2xl border-2 border-[#333333] text-xs font-mono">
            <div className="flex items-center gap-1.5 text-white">
              <BookOpen className="w-4 h-4 text-[#00D1FF]" />
              <span>
                Album: <strong className="text-[#00D1FF]">{binderStats.uniqueCount}</strong>/{POKEMON_TCG_CARDS.length}
              </span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-1.5 text-[#49B65F]">
              <DollarSign className="w-4 h-4" />
              <strong>~{binderStats.totalEstimatedValue.toFixed(2)} €</strong>
            </div>
          </div>
        </div>

        {/* Sub Tabs Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-t-2 border-[#333333] pt-4">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              soundFx.playSelect();
              setActiveSubTab('catalog');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 border-2 transition-all ${
              activeSubTab === 'catalog'
                ? 'bg-[#FFCC00] text-[#222222] border-[#cca300] shadow-[0_0_12px_rgba(255,204,0,0.4)]'
                : 'bg-[#111111] text-gray-300 border-[#333333] hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Kartenkatalog & Suche</span>
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              soundFx.playSelect();
              setActiveSubTab('packs');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 border-2 transition-all ${
              activeSubTab === 'packs'
                ? 'bg-[#DC0A2D] text-white border-[#8B0000] shadow-[0_0_12px_rgba(220,10,45,0.4)]'
                : 'bg-[#111111] text-gray-300 border-[#333333] hover:text-white'
            }`}
          >
            <Package className="w-4 h-4 text-[#FFCC00]" />
            <span>Booster-Packs Öffnen</span>
            <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-[#FFCC00] text-[#222222]">
              SIMULATOR
            </span>
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              soundFx.playSelect();
              setActiveSubTab('binder');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 border-2 transition-all ${
              activeSubTab === 'binder'
                ? 'bg-[#00D1FF] text-[#222222] border-[#0099cc] shadow-[0_0_12px_rgba(0,209,255,0.4)]'
                : 'bg-[#111111] text-gray-300 border-[#333333] hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Mein Sammelalbum</span>
            <span className="text-[10px] font-mono">({binderStats.totalCardsCount})</span>
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              soundFx.playSelect();
              setActiveSubTab('decks');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 border-2 transition-all ${
              activeSubTab === 'decks'
                ? 'bg-[#49B65F] text-[#222222] border-[#368b47] shadow-[0_0_12px_rgba(73,182,95,0.4)]'
                : 'bg-[#111111] text-gray-300 border-[#333333] hover:text-white'
            }`}
          >
            <Swords className="w-4 h-4" />
            <span>Deck-Builder</span>
          </motion.button>
        </div>
      </div>

      {/* TAB 1: CARD CATALOG & SEARCH */}
      {activeSubTab === 'catalog' && (
        <div className="space-y-6">
          {/* Search & Filter Toolbar */}
          <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333] space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Karte suchen (z.B. Glurak, Nachtara, Mewtu, Enigmara, Arita)..."
                  className="w-full bg-[#111111] border-2 border-[#333333] focus:border-[#FFCC00] rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white outline-none"
                />
              </div>

              {/* Supertype Filter */}
              <select
                value={selectedSupertype || ''}
                onChange={(e) => setSelectedSupertype(e.target.value || null)}
                className="bg-[#111111] border-2 border-[#333333] text-gray-200 text-xs font-mono rounded-xl px-3 py-2 outline-none w-full sm:w-auto"
              >
                <option value="">Alle Kartentypen</option>
                <option value="Pokémon">Nur Pokémon</option>
                <option value="Trainer">Nur Trainer</option>
                <option value="Energy">Nur Energien</option>
              </select>

              {/* Energy Type Filter */}
              <select
                value={selectedType || ''}
                onChange={(e) => setSelectedType(e.target.value || null)}
                className="bg-[#111111] border-2 border-[#333333] text-gray-200 text-xs font-mono rounded-xl px-3 py-2 outline-none w-full sm:w-auto"
              >
                <option value="">Alle Elemente</option>
                <option value="Fire">Feuer 🔥</option>
                <option value="Water">Wasser 💧</option>
                <option value="Grass">Pflanze 🌿</option>
                <option value="Lightning">Elektro ⚡</option>
                <option value="Psychic">Psycho 🔮</option>
                <option value="Darkness">Unlicht 🌑</option>
                <option value="Dragon">Drache 🐉</option>
                <option value="Colorless">Farblos ⚪</option>
              </select>

              {/* Sort selector */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#111111] border-2 border-[#333333] text-gray-200 text-xs font-mono rounded-xl px-3 py-2 outline-none w-full sm:w-auto"
              >
                <option value="value">Sortieren nach Wert (€)</option>
                <option value="name">Sortieren nach Name</option>
                <option value="number">Sortieren nach Kartennummer</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredCards.map((card) => (
              <TcgCardItem
                key={card.id}
                card={card}
                isFavorite={collection.favoriteCardIds.includes(card.id)}
                onToggleFavorite={handleToggleFavorite}
                onSelectCard={(c) => setInspectedCard(c)}
                onAddToDeck={handleAddToDeck}
                ownedCount={collection.ownedCards[card.id] || 0}
              />
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: BOOSTER PACK OPENING SIMULATOR */}
      {activeSubTab === 'packs' && (
        <div className="space-y-6">
          {/* Header & Ticket Status Banner */}
          <div className="text-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-white">Wähle dein Booster-Pack</h3>
            <p className="text-xs font-mono text-gray-400 max-w-xl mx-auto">
              Öffne echte Pokémon Sammelkartenspiel Booster-Packs mit authentischen Holo-Chancen und speichere alle gezogenen Karten in deiner Sammlung!
            </p>

            {/* Daily Ticket Status Pill */}
            <div className="flex items-center justify-center">
              {isMasterPro ? (
                <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-[#FFCC00]/20 to-[#FFA000]/20 border-2 border-[#FFCC00] text-[#FFCC00] font-black text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(255,204,0,0.3)]">
                  <Crown className="w-4 h-4 text-[#FFCC00]" />
                  <span>Meister-Pass Aktiv: <strong>Unbegrenzte Booster-Pack Openings</strong></span>
                </div>
              ) : isCommunity ? (
                <div className="px-4 py-2.5 rounded-2xl bg-[#142330] border-2 border-[#00D1FF] text-xs flex flex-col sm:flex-row items-center gap-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-[#00D1FF]" />
                    <span className="text-gray-300">
                      Community-Pass:{' '}
                      <strong className={remainingToday > 0 ? 'text-[#49B65F]' : 'text-[#FFCC00]'}>
                        {remainingToday} von 3 Packs heute noch übrig
                      </strong>
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      soundFx.playSelect();
                      if (onOpenPaywall) onOpenPaywall('Gib einen Gutschein-Code ein, um unbegrenzt viele Booster-Packs zu öffnen!');
                    }}
                    className="px-2.5 py-1 rounded-xl bg-[#FFCC00] hover:bg-[#FFD700] text-[#222222] font-black text-[11px] flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                  >
                    <Gift className="w-3.5 h-3.5" />
                    <span>Gutschein eingeben (Unbegrenzt)</span>
                  </button>
                </div>
              ) : (
                <div className="px-4 py-2.5 rounded-2xl bg-[#1e1e1e] border-2 border-[#444] text-xs flex flex-col sm:flex-row items-center gap-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-[#00D1FF]" />
                    <span className="text-gray-300">
                      Gratis Tages-Ticket:{' '}
                      {membershipState && canOpenBoosterPack(membershipState) ? (
                        <strong className="text-[#49B65F]">1/1 Pack heute verfügbar</strong>
                      ) : (
                        <strong className="text-[#FF0000]">0/1 heute verbraucht (Morgen wieder da)</strong>
                      )}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      soundFx.playSelect();
                      if (onOpenPaywall) onOpenPaywall('Teile die App mit 5 Freunden für 3 Packs/Tag oder gib einen Gutschein-Code ein!');
                    }}
                    className="px-2.5 py-1 rounded-xl bg-[#00D1FF] hover:bg-[#33ddff] text-[#111111] font-black text-[11px] flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Mehr Packs freischalten (Gratis)</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Booster Packs Selection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POKEMON_BOOSTER_PACKS.map((pack) => {
              const hasTicket = isMasterPro || (membershipState ? canOpenBoosterPack(membershipState) : true);

              return (
                <motion.div
                  key={pack.id}
                  whileHover={{ scale: 1.03 }}
                  className="p-5 rounded-3xl bg-[#1a1a1a] border-3 border-[#333333] hover:border-[#FFCC00] transition-all shadow-xl flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={pack.coverArt}
                      alt={pack.name}
                      className="w-16 h-20 object-contain rounded-lg drop-shadow"
                    />
                    <div>
                      <div className="text-base font-black text-white">{pack.name}</div>
                      <div className="text-xs text-gray-400 font-mono">{pack.setName} ({pack.releaseYear})</div>
                      <div className="text-[10px] text-[#49B65F] font-bold mt-1">10 Spielkarten pro Pack</div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {language === 'de' ? pack.descriptionDe : pack.descriptionEn}
                  </p>

                  {/* Highlights */}
                  <div className="p-3 rounded-2xl bg-[#111111] border border-[#333333] space-y-1">
                    <div className="text-[10px] uppercase font-mono font-bold text-[#FFCC00]">Top-Hits im Set:</div>
                    <div className="text-xs font-bold text-gray-200">
                      {pack.featuredPokemon.join(' • ')}
                    </div>
                  </div>

                  {/* Open Pack Button */}
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (!hasTicket) {
                        soundFx.playSelect();
                        if (onOpenPaywall) {
                          onOpenPaywall('Du hast deine heutigen Gratis-Packs aufgebraucht. Teile die App mit 5 Freunden (3 Packs/Tag) oder löse einen Gutschein ein!');
                        }
                        return;
                      }

                      if (!isMasterPro && onUseDailyPack) {
                        onUseDailyPack();
                      }

                      soundFx.playSelect();
                      setActivePackOpening(pack);
                    }}
                    className={`w-full py-3 rounded-2xl border-2 font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                      hasTicket
                        ? 'bg-[#DC0A2D] hover:bg-red-600 border-[#8B0000] text-white hover:brightness-110 cursor-pointer'
                        : 'bg-[#222222] border-[#444444] text-gray-300 hover:border-[#FFCC00] cursor-pointer'
                    }`}
                  >
                    {hasTicket ? (
                      <>
                        <Package className="w-4 h-4 text-[#FFCC00]" />
                        <span>Booster-Pack Öffnen</span>
                        {!isMasterPro && <span className="text-[10px] opacity-80">({remainingToday} übrig)</span>}
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-[#FFCC00]" />
                        <span>Tages-Limit erreicht (Pass freischalten)</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: BINDER / MY COLLECTION */}
      {activeSubTab === 'binder' && (
        <div className="space-y-6">
          {/* Portfolio Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
              <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Gesamte Karten</div>
              <div className="text-2xl font-mono font-black text-[#00D1FF] mt-1">
                {binderStats.totalCardsCount}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
              <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Einzigartige Karten</div>
              <div className="text-2xl font-mono font-black text-[#FFCC00] mt-1">
                {binderStats.uniqueCount} <span className="text-xs text-gray-400 font-normal">/ {POKEMON_TCG_CARDS.length}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
              <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Sammlungsvollständigkeit</div>
              <div className="text-2xl font-mono font-black text-[#49B65F] mt-1">
                {binderStats.completionRate}%
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1a1a] border-2 border-[#333333]">
              <div className="text-[10px] uppercase font-mono font-bold text-gray-400">Geschätzter Albumwert</div>
              <div className="text-2xl font-mono font-black text-[#49B65F] mt-1">
                ~{binderStats.totalEstimatedValue.toFixed(2)} €
              </div>
            </div>
          </div>

          {/* Cards in Binder */}
          <div className="space-y-3">
            <h3 className="text-sm font-black font-mono text-[#FFCC00] uppercase tracking-wider">
              Deine gesammelten Karten ({filteredCards.length})
            </h3>

            {filteredCards.length === 0 ? (
              <div className="p-12 rounded-3xl bg-[#1a1a1a] border-2 border-dashed border-[#444444] text-center space-y-3">
                <BookOpen className="w-10 h-10 mx-auto text-gray-500" />
                <h4 className="text-base font-bold text-gray-300">Dein Sammelalbum ist noch leer!</h4>
                <p className="text-xs text-gray-400 max-w-md mx-auto">
                  Öffne ein paar kostenlose Booster-Packs im "Booster-Packs" Tab, um deine Sammlung zu starten.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSubTab('packs')}
                  className="px-6 py-2.5 rounded-xl bg-[#DC0A2D] text-white font-black text-xs inline-flex items-center gap-2 cursor-pointer"
                >
                  <Package className="w-4 h-4 text-[#FFCC00]" />
                  <span>Jetzt erstes Pack öffnen</span>
                </motion.button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredCards.map((card) => (
                  <TcgCardItem
                    key={card.id}
                    card={card}
                    isFavorite={collection.favoriteCardIds.includes(card.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onSelectCard={(c) => setInspectedCard(c)}
                    onAddToDeck={handleAddToDeck}
                    ownedCount={collection.ownedCards[card.id] || 0}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: DECK BUILDER */}
      {activeSubTab === 'decks' && (
        <TcgDeckBuilder
          deck={collection.decks[0] || { id: 'deck-1', name: 'Standard Deck', cardIds: [], createdAt: Date.now(), format: 'Standard' }}
          onUpdateDeck={handleUpdateActiveDeck}
          onSelectCard={(c) => setInspectedCard(c)}
        />
      )}

      {/* 3D CARD INSPECTOR MODAL */}
      <TcgCardModal
        card={inspectedCard}
        onClose={() => setInspectedCard(null)}
        isFavorite={inspectedCard ? collection.favoriteCardIds.includes(inspectedCard.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onAddToDeck={handleAddToDeck}
      />

      {/* BOOSTER PACK OPENING MODAL */}
      <TcgBoosterPackModal
        pack={activePackOpening}
        onClose={() => setActivePackOpening(null)}
        onPackOpened={handlePackOpened}
        onSelectCard={(c) => setInspectedCard(c)}
      />
    </div>
  );
};
