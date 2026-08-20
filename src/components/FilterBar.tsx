import React, { useState } from 'react';
import {
  Search,
  X,
  Dices,
  SlidersHorizontal,
  ArrowUpDown,
  Star,
  CheckCircle2,
  Crown,
  Flame,
  RotateCcw,
  Camera,
  Lock,
  Gift,
} from 'lucide-react';
import { GENERATIONS } from '../data/generations';
import { ALL_POKEMON_TYPES } from '../data/pokemonTypes';
import { PokemonType } from '../types/pokemon';
import { TypeBadge } from './TypeBadge';
import { soundFx } from '../utils/audio';
import { MembershipState, isGenRestricted } from '../utils/membership';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedGen: number | null;
  setSelectedGen: (gen: number | null) => void;
  selectedType: PokemonType | null;
  setSelectedType: (type: PokemonType | null) => void;
  sortBy: 'id' | 'name' | 'stats' | 'height' | 'weight';
  setSortBy: (sort: 'id' | 'name' | 'stats' | 'height' | 'weight') => void;
  filterFavorites: boolean;
  setFilterFavorites: (val: boolean) => void;
  filterCaught: boolean;
  setFilterCaught: (val: boolean) => void;
  filterSpecial: 'all' | 'starter' | 'legendary' | 'mythical';
  setFilterSpecial: (val: 'all' | 'starter' | 'legendary' | 'mythical') => void;
  onRandomPick: () => void;
  onOpenScanner?: () => void;
  totalFiltered: number;
  language: 'de' | 'en';
  membershipState: MembershipState;
  onOpenPaywall?: (reason?: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedGen,
  setSelectedGen,
  selectedType,
  setSelectedType,
  sortBy,
  setSortBy,
  filterFavorites,
  setFilterFavorites,
  filterCaught,
  setFilterCaught,
  filterSpecial,
  setFilterSpecial,
  onRandomPick,
  onOpenScanner,
  totalFiltered,
  language,
  membershipState,
  onOpenPaywall,
}) => {
  const [showTypeDrawer, setShowTypeDrawer] = useState(false);
  const isPro = membershipState.tier === 'master' || membershipState.isPro;

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedGen !== null ||
    selectedType !== null ||
    filterFavorites ||
    filterCaught ||
    filterSpecial !== 'all';

  const handleResetFilters = () => {
    soundFx.playSelect();
    setSearchQuery('');
    setSelectedGen(null);
    setSelectedType(null);
    setFilterFavorites(false);
    setFilterCaught(false);
    setFilterSpecial('all');
  };

  return (
    <div className="bg-[#222222] border-b-4 border-[#333333] shadow-xl text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-3">
        {/* Row 1: Search, Random & Sort */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00D1FF]" />
            <input
              id="pokemon-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'de'
                  ? 'Pokémon suchen (z.B. Glurak, #25, Lucario)...'
                  : 'Search Pokémon (e.g. Charizard, #25, Lucario)...'
              }
              className="w-full pl-10 pr-10 py-2.5 bg-[#1a1a1a] border-2 border-[#444444] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/40 text-sm font-medium transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                id="clear-search-btn"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Randomizer & Sort controls */}
          <div className="flex items-center gap-2">
            {onOpenScanner && (
              <button
                id="filterbar-scanner-btn"
                onClick={() => {
                  soundFx.playSelect();
                  onOpenScanner();
                }}
                className="px-3.5 py-2.5 bg-[#DC0A2D] hover:bg-red-600 border-2 border-white text-white font-black rounded-xl text-xs flex items-center gap-1.5 transition-all active:scale-95 whitespace-nowrap shadow-md cursor-pointer"
                title={language === 'de' ? 'Pokémon mit Kamera scannen' : 'Scan Pokémon with Camera'}
              >
                <Camera className="w-4 h-4 text-[#00D1FF]" />
                <span>{language === 'de' ? 'Scannen' : 'Scan'}</span>
              </button>
            )}

            <button
              id="random-pokemon-btn"
              onClick={() => {
                soundFx.playSelect();
                onRandomPick();
              }}
              className="px-3.5 py-2.5 bg-[#FFCC00] hover:bg-yellow-300 border-2 border-[#B8860B] text-[#222222] font-black rounded-xl text-xs flex items-center gap-1.5 transition-all active:scale-95 whitespace-nowrap shadow-md"
              title={language === 'de' ? 'Zufälliges Pokémon auswählen' : 'Pick Random Pokémon'}
            >
              <Dices className="w-4 h-4 text-[#222222]" />
              <span>{language === 'de' ? 'Würfeln' : 'Random'}</span>
            </button>

            {/* Sort selector */}
            <div className="relative flex items-center bg-[#1a1a1a] border-2 border-[#444444] rounded-xl px-2 py-1 shadow-inner">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#00D1FF] ml-1 mr-1" />
              <select
                id="sort-by-select"
                value={sortBy}
                onChange={(e) => {
                  soundFx.playSelect();
                  setSortBy(e.target.value as any);
                }}
                aria-label={language === 'de' ? 'Sortierung' : 'Sort by'}
                className="bg-transparent text-xs font-bold text-white py-1.5 pr-2 focus:outline-none cursor-pointer"
              >
                <option value="id" className="bg-[#222222] text-white">
                  {language === 'de' ? 'Nummer (#)' : 'Number (#)'}
                </option>
                <option value="name" className="bg-[#222222] text-white">
                  {language === 'de' ? 'Name (A-Z)' : 'Name (A-Z)'}
                </option>
                <option value="stats" className="bg-[#222222] text-white">
                  {language === 'de' ? 'Basiswerte (BST)' : 'Base Stats (BST)'}
                </option>
                <option value="height" className="bg-[#222222] text-white">
                  {language === 'de' ? 'Größe (Höhe)' : 'Height'}
                </option>
                <option value="weight" className="bg-[#222222] text-white">
                  {language === 'de' ? 'Gewicht' : 'Weight'}
                </option>
              </select>
            </div>

            {/* Toggle Types Drawer */}
            <button
              id="toggle-types-drawer-btn"
              onClick={() => setShowTypeDrawer(!showTypeDrawer)}
              className={`px-3 py-2.5 rounded-xl border-2 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${
                selectedType
                  ? 'bg-[#DC0A2D] border-[#8B0000] text-white'
                  : 'bg-[#333333] border-[#444444] text-gray-200 hover:bg-[#444444]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>{language === 'de' ? 'Typen' : 'Types'}</span>
              {selectedType && (
                <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse"></span>
              )}
            </button>
          </div>
        </div>

        {/* Row 2: Generation selection pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <button
            id="gen-filter-all"
            onClick={() => {
              soundFx.playSelect();
              setSelectedGen(null);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap border-2 ${
              selectedGen === null
                ? 'bg-[#DC0A2D] text-white border-[#8B0000] shadow-md'
                : 'bg-[#1a1a1a] text-gray-300 border-[#333333] hover:text-white hover:bg-[#333333]'
            }`}
          >
            {language === 'de' ? (isPro ? 'Alle Gen (1-9)' : 'Gen 1-3 (Gratis)') : (isPro ? 'All Gens (1-9)' : 'Gen 1-3 (Free)')}
          </button>
          {GENERATIONS.map((gen) => {
            const isLocked = isGenRestricted(gen.id, membershipState);

            return (
              <button
                key={gen.id}
                id={`gen-filter-${gen.id}`}
                onClick={() => {
                  if (isLocked) {
                    soundFx.playSelect();
                    if (onOpenPaywall) {
                      onOpenPaywall(`Generation ${gen.id} (${gen.germanRegion}) wird mit einem Gutschein-Code (Steam, Nintendo etc.) freigeschaltet.`);
                    }
                    return;
                  }
                  soundFx.playSelect();
                  setSelectedGen(selectedGen === gen.id ? null : gen.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 border-2 relative ${
                  selectedGen === gen.id
                    ? 'bg-[#DC0A2D] text-white border-[#8B0000] font-black shadow-md'
                    : isLocked
                    ? 'bg-[#141414] text-gray-400 border-[#2a2a2a] hover:border-[#FFCC00]/50 hover:text-gray-200'
                    : 'bg-[#1a1a1a] text-gray-300 border-[#333333] hover:text-white hover:bg-[#333333]'
                }`}
              >
                <span>Gen {gen.id}</span>
                <span className="text-[10px] opacity-70">({gen.germanRegion})</span>
                {isLocked && (
                  <span className="ml-0.5 px-1 py-0.2 rounded text-[9px] font-black bg-[#FFCC00]/20 text-[#FFCC00] border border-[#FFCC00]/40 flex items-center gap-0.5">
                    <Lock className="w-2.5 h-2.5" />
                    <span>GUTSCHEIN</span>
                  </span>
                )}
              </button>
            );
          })}

          {!isPro && (
            <button
              onClick={() => {
                soundFx.playSelect();
                if (onOpenPaywall) {
                  onOpenPaywall('Schalte alle 9 Generationen mit einem beliebigen Gutschein-Code frei.');
                }
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-[#FFCC00] to-[#FFA000] text-[#222222] border-2 border-[#cca300] shadow-[0_0_12px_rgba(255,204,0,0.3)] flex items-center gap-1 whitespace-nowrap active:scale-95 transition-all cursor-pointer"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Gen 4-9 mit Gutschein freischalten</span>
            </button>
          )}
        </div>

        {/* Row 3: Expanded Type Filter Palette */}
        {showTypeDrawer && (
          <div className="p-3.5 bg-[#1a1a1a] rounded-2xl border-2 border-[#333333] space-y-2 animate-fadeIn shadow-inner">
            <div className="flex items-center justify-between text-xs text-gray-400 font-mono font-bold">
              <span className="text-[#FFCC00] uppercase">{language === 'de' ? 'Nach Typ filtern:' : 'Filter by Type:'}</span>
              {selectedType && (
                <button
                  onClick={() => setSelectedType(null)}
                  className="text-xs text-[#DC0A2D] hover:text-red-400 flex items-center gap-1 font-bold"
                >
                  <X className="w-3 h-3" />
                  {language === 'de' ? 'Typ-Filter aufheben' : 'Clear type filter'}
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-1.5">
              {ALL_POKEMON_TYPES.map((type) => (
                <TypeBadge
                  key={type}
                  type={type}
                  size="sm"
                  language={language}
                  isSelected={selectedType === type}
                  onClick={() => {
                    soundFx.playSelect();
                    setSelectedType(selectedType === type ? null : type);
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Row 4: Category Quick Tags (Favorites, Caught, Starter, Legendary, Mythical) & Reset */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Favorites toggle */}
            <button
              id="filter-favorites-btn"
              onClick={() => {
                soundFx.playSelect();
                setFilterFavorites(!filterFavorites);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border-2 ${
                filterFavorites
                  ? 'bg-[#FFCC00] border-[#B8860B] text-[#222222] font-black shadow-md'
                  : 'bg-[#1a1a1a] border-[#333333] text-gray-300 hover:text-white'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${filterFavorites ? 'fill-[#222222] text-[#222222]' : 'text-[#FFCC00]'}`} />
              <span>{language === 'de' ? 'Favoriten' : 'Favorites'}</span>
            </button>

            {/* Caught toggle */}
            <button
              id="filter-caught-btn"
              onClick={() => {
                soundFx.playSelect();
                setFilterCaught(!filterCaught);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border-2 ${
                filterCaught
                  ? 'bg-[#49B65F] border-[#333333] text-[#222222] font-black shadow-md'
                  : 'bg-[#1a1a1a] border-[#333333] text-gray-300 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'de' ? 'Gefangen' : 'Caught'}</span>
            </button>

            {/* Starter filter */}
            <button
              id="filter-starter-btn"
              onClick={() => {
                soundFx.playSelect();
                setFilterSpecial(filterSpecial === 'starter' ? 'all' : 'starter');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border-2 ${
                filterSpecial === 'starter'
                  ? 'bg-[#00D1FF] border-white text-[#222222] font-black shadow-md'
                  : 'bg-[#1a1a1a] border-[#333333] text-gray-300 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Starter</span>
            </button>

            {/* Legendary filter */}
            <button
              id="filter-legendary-btn"
              onClick={() => {
                soundFx.playSelect();
                setFilterSpecial(filterSpecial === 'legendary' ? 'all' : 'legendary');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border-2 ${
                filterSpecial === 'legendary'
                  ? 'bg-[#DC0A2D] border-[#8B0000] text-white font-black shadow-md'
                  : 'bg-[#1a1a1a] border-[#333333] text-gray-300 hover:text-white'
              }`}
            >
              <Crown className="w-3.5 h-3.5 text-[#FFCC00]" />
              <span>{language === 'de' ? 'Legendär' : 'Legendary'}</span>
            </button>

            {/* Mythical filter */}
            <button
              id="filter-mythical-btn"
              onClick={() => {
                soundFx.playSelect();
                setFilterSpecial(filterSpecial === 'mythical' ? 'all' : 'mythical');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border-2 ${
                filterSpecial === 'mythical'
                  ? 'bg-pink-600 border-pink-800 text-white font-black shadow-md'
                  : 'bg-[#1a1a1a] border-[#333333] text-gray-300 hover:text-white'
              }`}
            >
              <span>{language === 'de' ? 'Mystisch' : 'Mythical'}</span>
            </button>
          </div>

          {/* Filter results count & reset */}
          <div className="flex items-center gap-3 text-xs text-gray-300 font-mono">
            <span className="text-[#49B65F] font-bold">
              {totalFiltered} {language === 'de' ? 'Einträge' : 'Entries'}
            </span>
            {hasActiveFilters && (
              <button
                id="reset-all-filters-btn"
                onClick={handleResetFilters}
                className="text-[#FFCC00] hover:underline flex items-center gap-1 font-bold"
              >
                <RotateCcw className="w-3 h-3" />
                {language === 'de' ? 'Zurücksetzen' : 'Reset'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
