/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { PokedexHeader } from './components/PokedexHeader';
import { FilterBar } from './components/FilterBar';
import { PokemonCard } from './components/PokemonCard';
import { PokemonDetailModal } from './components/PokemonDetailModal';
import { ClassicDexFrame } from './components/ClassicDexFrame';
import { TeamBuilderModal } from './components/TeamBuilderModal';
import { TypeCalculatorModal } from './components/TypeCalculatorModal';
import { PokemonQuizModal } from './components/PokemonQuizModal';
import { ChatBotView } from './components/ChatBotView';
import { FloatingRotomWidget } from './components/FloatingRotomWidget';
import { PokemonScannerModal } from './components/PokemonScannerModal';
import { TcgView } from './components/tcg/TcgView';
import { PaywallModal } from './components/PaywallModal';
import { AdminVoucherModal } from './components/AdminVoucherModal';
import { AccountModal } from './components/AccountModal';
import { LockedFeatureView } from './components/LockedFeatureView';
import { useAuth, UserTrainerProfile } from './contexts/AuthContext';
import { PRELOADED_POKEMON } from './data/preloadedPokemon';
import { GENERATIONS } from './data/generations';
import { fetchPokemonSummary, searchPokemon } from './services/pokeApi';
import { ActiveTab, PokemonSummary, PokemonType, TeamMember, ViewMode } from './types/pokemon';
import { soundFx } from './utils/audio';
import { hapticFeedback } from './utils/haptics';
import {
  MembershipState,
  loadMembershipState,
  saveMembershipState,
  unlockFullMasterPass,
  unlockCommunityPass,
  recordReferralShare,
  useDailyBoosterPack,
  isFeatureUnlocked,
  isGenRestricted,
  isPokemonRestricted,
} from './utils/membership';

export default function App() {
  const [allPokemonList] = useState<PokemonSummary[]>(PRELOADED_POKEMON);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGen, setSelectedGen] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<PokemonType | null>(null);
  const [sortBy, setSortBy] = useState<'id' | 'name' | 'stats' | 'height' | 'weight'>('id');
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [filterCaught, setFilterCaught] = useState(false);
  const [filterSpecial, setFilterSpecial] = useState<'all' | 'starter' | 'legendary' | 'mythical'>('all');
  const [visibleCount, setVisibleCount] = useState(60);

  const [activeTab, setActiveTab] = useState<ActiveTab>('pokedex');
  const [viewMode, setViewMode] = useState<ViewMode>('modern');
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonSummary | null>(null);
  const [classicIndex, setClassicIndex] = useState(0);

  const [isMuted, setIsMuted] = useState(false);
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Membership & Pass State (Voucher & Referral System)
  const [membershipState, setMembershipState] = useState<MembershipState>(() => loadMembershipState());
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [paywallTriggerReason, setPaywallTriggerReason] = useState<string | undefined>(undefined);

  const { currentUser, userProfile, syncLocalToCloud } = useAuth();

  const handleOpenPaywall = useCallback((reason?: string) => {
    if (reason === 'Robin-Admin') {
      setIsAdminPanelOpen(true);
      return;
    }
    setPaywallTriggerReason(reason);
    setIsPaywallOpen(true);
  }, []);

  const handleVoucherUnlocked = useCallback((code: string, provider: string) => {
    const validProvider = (provider === 'steam' || provider === 'nintendo' || provider === 'google_play') ? provider : 'other';
    const updated = unlockFullMasterPass(membershipState, code, validProvider);
    setMembershipState(updated);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
    setToastMessage(
      language === 'de'
        ? `🎉 Meister-Pass freigeschaltet mit ${validProvider.toUpperCase()} Code!`
        : `🎉 Master Pass unlocked with ${validProvider.toUpperCase()} code!`
    );
    setTimeout(() => setToastMessage(null), 5000);
  }, [membershipState, language]);

  const handleReferralShared = useCallback(() => {
    const { nextState, unlockedNow } = recordReferralShare(membershipState);
    setMembershipState(nextState);
    if (unlockedNow) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
      setToastMessage(
        language === 'de'
          ? '🎉 Glückwunsch! Community-Pass freigeschaltet: Rotom-KI & Quiz sind jetzt aktiv!'
          : '🎉 Congrats! Community Pass unlocked: Rotom AI & Quiz are now active!'
      );
    } else {
      setToastMessage(
        language === 'de'
          ? `Link geteilt! (${nextState.referralsSentCount}/5 für Community-Pass)`
          : `Link shared! (${nextState.referralsSentCount}/5 for Community Pass)`
      );
    }
    setTimeout(() => setToastMessage(null), 4000);
  }, [membershipState, language]);

  const handleUseDailyPack = useCallback(() => {
    const updated = useDailyBoosterPack(membershipState);
    setMembershipState(updated);
  }, [membershipState]);

  // Reset pagination when search or filters change
  useEffect(() => {
    setVisibleCount(60);
  }, [searchQuery, selectedGen, selectedType, sortBy, filterFavorites, filterCaught, filterSpecial]);

  // Favorites & Caught Persistence
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('pokedex_favorites');
      return saved ? JSON.parse(saved) : [25, 6, 150];
    } catch {
      return [25, 6, 150];
    }
  });

  const [caughtIds, setCaughtIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('pokedex_caught');
      return saved ? JSON.parse(saved) : [1, 4, 7, 25];
    } catch {
      return [1, 4, 7, 25];
    }
  });

  // Team Persistence
  const [team, setTeam] = useState<TeamMember[]>(() => {
    try {
      const saved = localStorage.getItem('pokedex_team');
      if (saved) return JSON.parse(saved);
      // Pre-seed with starter team
      const initialStarters = [PRELOADED_POKEMON[0], PRELOADED_POKEMON[3], PRELOADED_POKEMON[6], PRELOADED_POKEMON[9]].filter(Boolean);
      return initialStarters.map((p, idx) => ({
        id: `slot-${idx}-${p.id}`,
        pokemonId: p.id,
        pokemon: p,
      }));
    } catch {
      return [];
    }
  });

  // Sync profile data when loaded from Cloud (only once per user switch)
  const lastLoadedUidRef = useRef<string | null>(null);
  useEffect(() => {
    if (userProfile && currentUser && lastLoadedUidRef.current !== currentUser.uid) {
      lastLoadedUidRef.current = currentUser.uid;
      if (userProfile.caughtPokemon && userProfile.caughtPokemon.length > 0) {
        setCaughtIds((prev) => Array.from(new Set([...prev, ...userProfile.caughtPokemon])));
      }
      if (userProfile.favorites && userProfile.favorites.length > 0) {
        setFavoriteIds((prev) => Array.from(new Set([...prev, ...userProfile.favorites])));
      }
      if (userProfile.team && userProfile.team.length > 0) {
        setTeam(userProfile.team);
      }
      if (userProfile.isMasterPass && !membershipState.isPro) {
        setMembershipState((prev) => unlockFullMasterPass(prev, userProfile.unlockedVoucherCode || 'CLOUD-SYNC', 'other'));
      }
    } else if (!currentUser) {
      lastLoadedUidRef.current = null;
    }
  }, [userProfile, currentUser]);

  // Save favorites to storage and sync
  useEffect(() => {
    localStorage.setItem('pokedex_favorites', JSON.stringify(favoriteIds));
    if (currentUser) {
      syncLocalToCloud(caughtIds, favoriteIds, team, membershipState);
    }
  }, [favoriteIds, currentUser]);

  // Save caught to storage and sync
  useEffect(() => {
    localStorage.setItem('pokedex_caught', JSON.stringify(caughtIds));
    if (currentUser) {
      syncLocalToCloud(caughtIds, favoriteIds, team, membershipState);
    }
  }, [caughtIds, currentUser]);

  // Save team to storage and sync
  useEffect(() => {
    localStorage.setItem('pokedex_team', JSON.stringify(team));
    if (currentUser) {
      syncLocalToCloud(caughtIds, favoriteIds, team, membershipState);
    }
  }, [team, currentUser]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  }, []);

  const handleToggleFavorite = useCallback((id: number) => {
    hapticFeedback.light();
    setFavoriteIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        return prev.filter((i) => i !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  const handleToggleCaught = useCallback((id: number) => {
    setCaughtIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        hapticFeedback.light();
        return prev.filter((i) => i !== id);
      } else {
        hapticFeedback.catchSuccess();
        showToast('Pokémon im Pokédex gefangen!');
        return [...prev, id];
      }
    });
  }, [showToast]);

  const handleAddToTeam = useCallback((pokemon: PokemonSummary) => {
    if (team.length >= 6) {
      soundFx.playError();
      hapticFeedback.medium();
      showToast('Team ist bereits voll (6/6 Pokémon)!');
      return;
    }

    const newMember: TeamMember = {
      id: `slot-${Date.now()}-${pokemon.id}`,
      pokemonId: pokemon.id,
      pokemon,
    };

    setTeam((prev) => [...prev, newMember]);
    soundFx.playSelect();
    hapticFeedback.teamAdded();
    showToast(`${pokemon.germanName} zum Team hinzugefügt!`);

    if (team.length === 5) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    }
  }, [team.length, showToast]);

  const handleRemoveFromTeam = useCallback((slotId: string) => {
    hapticFeedback.light();
    setTeam((prev) => prev.filter((m) => m.id !== slotId));
    showToast('Pokémon aus dem Team entfernt.');
  }, [showToast]);

  const handleClearTeam = useCallback(() => {
    setTeam([]);
    showToast('Team geleert.');
  }, [showToast]);

  const handleRandomPick = useCallback(() => {
    if (allPokemonList.length === 0) return;
    const randomIdx = Math.floor(Math.random() * allPokemonList.length);
    const target = allPokemonList[randomIdx];
    setSelectedPokemon(target);
  }, [allPokemonList]);

  // Bot Action: Open Pokémon entry by name or ID
  const handleShowPokemonByNameOrId = useCallback(
    async (nameOrId: string) => {
      const clean = nameOrId.replace('#', '').trim().toLowerCase();
      const numId = parseInt(clean, 10);

      // Search in existing list
      let found: PokemonSummary | undefined;
      if (!isNaN(numId)) {
        found = allPokemonList.find((p) => p.id === numId);
      } else {
        found = allPokemonList.find(
          (p) =>
            p.germanName.toLowerCase() === clean ||
            p.name.toLowerCase() === clean ||
            p.germanName.toLowerCase().includes(clean) ||
            p.name.toLowerCase().includes(clean)
        );
      }

      if (found) {
        setSelectedPokemon(found);
        showToast(`Eintrag geöffnet: ${found.germanName} (#${found.id})`);
        return;
      }

      // If not in local list, attempt fetch via PokeAPI
      if (!isNaN(numId) && numId > 0 && numId <= 1025) {
        const fetched = await fetchPokemonSummary(numId);
        if (fetched) {
          setSelectedPokemon(fetched);
          showToast(`Eintrag geladen: ${fetched.germanName} (#${fetched.id})`);
        }
      }
    },
    [allPokemonList, showToast]
  );

  // Bot Action: Apply filters
  const handleFilterPokemonFromBot = useCallback(
    (filters: { type?: string; generation?: number; query?: string; specialCategory?: string }) => {
      if (filters.type) {
        setSelectedType(filters.type as PokemonType);
      }
      if (filters.generation) {
        setSelectedGen(filters.generation);
      }
      if (filters.query) {
        setSearchQuery(filters.query);
      }
      if (filters.specialCategory) {
        setFilterSpecial(filters.specialCategory as any);
      }
      setActiveTab('pokedex');
      showToast('Pokédex-Filter angewendet!');
    },
    [showToast]
  );

  // Bot Action: Add to team by name or ID
  const handleAddToTeamByNameOrId = useCallback(
    async (nameOrId: string) => {
      const clean = nameOrId.replace('#', '').trim().toLowerCase();
      const numId = parseInt(clean, 10);

      let found = allPokemonList.find((p) => {
        if (!isNaN(numId)) return p.id === numId;
        return (
          p.germanName.toLowerCase() === clean ||
          p.name.toLowerCase() === clean ||
          p.germanName.toLowerCase().includes(clean)
        );
      });

      if (!found && !isNaN(numId) && numId > 0 && numId <= 1025) {
        found = (await fetchPokemonSummary(numId)) || undefined;
      }

      if (found) {
        handleAddToTeam(found);
      } else {
        showToast(`Pokémon "${nameOrId}" nicht gefunden.`);
      }
    },
    [allPokemonList, handleAddToTeam, showToast]
  );

  // Filtered Pokémon list
  const filteredPokemon = useMemo(() => {
    return searchPokemon(
      allPokemonList,
      searchQuery,
      selectedGen,
      selectedType,
      sortBy,
      filterFavorites,
      favoriteIds,
      filterCaught,
      caughtIds,
      filterSpecial
    );
  }, [
    allPokemonList,
    searchQuery,
    selectedGen,
    selectedType,
    sortBy,
    filterFavorites,
    favoriteIds,
    filterCaught,
    caughtIds,
    filterSpecial,
  ]);

  // Paginated visible list for smooth high performance rendering
  const displayedPokemon = useMemo(() => {
    return filteredPokemon.slice(0, visibleCount);
  }, [filteredPokemon, visibleCount]);

  const isQuizUnlocked = isFeatureUnlocked('quiz', membershipState);
  const isChatUnlocked = isFeatureUnlocked('rotom', membershipState);
  const isScannerUnlocked = isFeatureUnlocked('scanner', membershipState);

  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col font-sans selection:bg-[#FFCC00] selection:text-[#222222]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-[#222222] border-2 border-[#FFCC00] text-white rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-bold animate-fadeIn">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00D1FF] animate-pulse"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <PokedexHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        viewMode={viewMode}
        setViewMode={setViewMode}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        language={language}
        setLanguage={setLanguage}
        caughtCount={caughtIds.length}
        totalVisible={filteredPokemon.length}
        favoriteCount={favoriteIds.length}
        teamCount={team.length}
        membershipState={membershipState}
        onOpenPaywall={handleOpenPaywall}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      {/* Main Content Area based on Active Tab */}
      <main className="flex-1 pb-16">
        {/* TAB 1: POKEDEX BROWSER */}
        {activeTab === 'pokedex' && (
          <div>
            {/* Filter & Search Bar */}
            <FilterBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedGen={selectedGen}
              setSelectedGen={setSelectedGen}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              sortBy={sortBy}
              setSortBy={setSortBy}
              filterFavorites={filterFavorites}
              setFilterFavorites={setFilterFavorites}
              filterCaught={filterCaught}
              setFilterCaught={setFilterCaught}
              filterSpecial={filterSpecial}
              setFilterSpecial={setFilterSpecial}
              onRandomPick={handleRandomPick}
              onOpenScanner={() => setActiveTab('scanner')}
              totalFiltered={filteredPokemon.length}
              language={language}
              membershipState={membershipState}
              onOpenPaywall={handleOpenPaywall}
            />

            {/* Pokédex Mode: Modern Grid vs Retro Classic Dex */}
            {viewMode === 'modern' ? (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {filteredPokemon.length > 0 ? (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                      {displayedPokemon.map((pokemon) => (
                        <PokemonCard
                          key={pokemon.id}
                          pokemon={pokemon}
                          isFavorite={favoriteIds.includes(pokemon.id)}
                          isCaught={caughtIds.includes(pokemon.id)}
                          onToggleFavorite={handleToggleFavorite}
                          onToggleCaught={handleToggleCaught}
                          onSelect={setSelectedPokemon}
                          onAddToTeam={handleAddToTeam}
                          language={language}
                          isLocked={isPokemonRestricted(pokemon.id, pokemon.generation, membershipState)}
                          onOpenPaywall={handleOpenPaywall}
                        />
                      ))}
                    </div>

                    {/* Pagination & Infinite Load controls */}
                    {filteredPokemon.length > displayedPokemon.length && (
                      <div className="flex flex-col items-center justify-center p-6 bg-[#222222] rounded-3xl border-2 border-[#333333] shadow-lg max-w-xl mx-auto space-y-4">
                        <div className="text-center space-y-1">
                          <p className="text-xs font-bold text-gray-300">
                            {language === 'de'
                              ? `Zeige ${displayedPokemon.length} von ${filteredPokemon.length} Pokémon`
                              : `Showing ${displayedPokemon.length} of ${filteredPokemon.length} Pokémon`}
                          </p>
                          <div className="w-64 h-2 bg-[#111111] rounded-full overflow-hidden border border-[#444444] mx-auto">
                            <div
                              className="h-full bg-gradient-to-r from-[#DC0A2D] via-[#FFCC00] to-[#49B65F] transition-all duration-300 rounded-full"
                              style={{
                                width: `${(displayedPokemon.length / filteredPokemon.length) * 100}%`,
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center">
                          <button
                            id="load-more-pokemon-btn"
                            onClick={() => {
                              soundFx.playSelect();
                              setVisibleCount((prev) => Math.min(prev + 60, filteredPokemon.length));
                            }}
                            className="px-6 py-2.5 bg-[#DC0A2D] hover:bg-red-600 border-2 border-white text-white font-black text-xs rounded-xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                          >
                            <span>+ 60 {language === 'de' ? 'weitere laden' : 'load more'}</span>
                          </button>

                          <button
                            id="load-all-pokemon-btn"
                            onClick={() => {
                              soundFx.playSuccess();
                              setVisibleCount(filteredPokemon.length);
                            }}
                            className="px-6 py-2.5 bg-[#1a1a1a] hover:bg-[#333333] border-2 border-[#00D1FF] text-[#00D1FF] font-black text-xs rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                          >
                            <span>
                              {language === 'de'
                                ? `Alle ${filteredPokemon.length} anzeigen`
                                : `Show all ${filteredPokemon.length}`}
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-[#222222] rounded-3xl border-4 border-[#333333] max-w-lg mx-auto p-8 space-y-3 shadow-2xl">
                    <div className="text-4xl">🔍</div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wide">
                      Keine Pokémon gefunden
                    </h3>
                    <p className="text-xs text-gray-400">
                      Kein Pokémon entspricht deinen aktuellen Filtern. Probiere einen anderen Suchbegriff oder setze die Filter zurück.
                    </p>
                    <button
                      id="empty-reset-filters-btn"
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedGen(null);
                        setSelectedType(null);
                        setFilterFavorites(false);
                        setFilterCaught(false);
                        setFilterSpecial('all');
                      }}
                      className="px-5 py-2.5 bg-[#DC0A2D] hover:bg-red-500 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      Filter zurücksetzen
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Retro Handheld Kanto Pokédex Mode */
              <ClassicDexFrame
                pokemonList={filteredPokemon.length > 0 ? filteredPokemon : allPokemonList}
                currentIndex={classicIndex}
                onSelectIndex={setClassicIndex}
                onOpenDetails={setSelectedPokemon}
                isFavorite={favoriteIds.includes((filteredPokemon[classicIndex] || allPokemonList[0])?.id)}
                isCaught={caughtIds.includes((filteredPokemon[classicIndex] || allPokemonList[0])?.id)}
                onToggleFavorite={handleToggleFavorite}
                onToggleCaught={handleToggleCaught}
                onAddToTeam={handleAddToTeam}
                language={language}
              />
            )}
          </div>
        )}

        {/* TAB 2: MEIN TEAM (TEAM BUILDER) */}
        {activeTab === 'team' && (
          <TeamBuilderModal
            team={team}
            onRemoveFromTeam={handleRemoveFromTeam}
            onAddToTeam={handleAddToTeam}
            onClearTeam={handleClearTeam}
            onSelectPokemon={setSelectedPokemon}
            allPokemonList={allPokemonList}
            language={language}
          />
        )}

        {/* TAB 3: TYP-RECHNER */}
        {activeTab === 'types' && (
          <TypeCalculatorModal
            allPokemonList={allPokemonList}
            onSelectPokemon={setSelectedPokemon}
            language={language}
          />
        )}

        {/* TAB 4: POKÉMON QUIZ */}
        {activeTab === 'quiz' && (
          !isQuizUnlocked ? (
            <LockedFeatureView
              feature="quiz"
              onUnlock={() => handleOpenPaywall(language === 'de' ? 'Das Pokémon Quiz wird mit dem Community-Pass (an 5 Freunde senden) oder per Gutschein-Code freigeschaltet!' : 'The Pokémon Quiz is unlocked with the Community Pass (refer 5 friends) or via voucher code!')}
              language={language}
            />
          ) : (
            <PokemonQuizModal
              allPokemonList={allPokemonList}
              language={language}
            />
          )
        )}

        {/* TAB 5: ROTOM-KI CHATBOT */}
        {activeTab === 'chat' && (
          !isChatUnlocked ? (
            <LockedFeatureView
              feature="chat"
              onUnlock={() => handleOpenPaywall(language === 'de' ? 'Die Rotom-K.I. wird mit dem Community-Pass (an 5 Freunde senden) oder per Gutschein-Code freigeschaltet!' : 'Rotom AI is unlocked with the Community Pass (refer 5 friends) or via voucher code!')}
              language={language}
            />
          ) : (
            <ChatBotView
              onShowPokemonDetails={handleShowPokemonByNameOrId}
              onFilterPokemon={handleFilterPokemonFromBot}
              onAddToTeam={handleAddToTeamByNameOrId}
              onSwitchTab={setActiveTab}
              allPokemonList={allPokemonList}
              language={language}
            />
          )
        )}

        {/* TAB 6: POKÉMON KAMERA-SCANNER */}
        {activeTab === 'scanner' && (
          !isScannerUnlocked ? (
            <LockedFeatureView
              feature="scanner"
              onUnlock={() => handleOpenPaywall(language === 'de' ? 'Der KI-Kamera-Scanner wird mit einem Gutschein-Code (Steam, Nintendo, Play) freigeschaltet!' : 'The AI Camera Scanner is unlocked with any voucher code (Steam, Nintendo, Google Play)!')}
              language={language}
            />
          ) : (
            <PokemonScannerModal
              allPokemonList={allPokemonList}
              onShowPokemonDetails={handleShowPokemonByNameOrId}
              onAddToTeam={handleAddToTeam}
              onToggleCaught={handleToggleCaught}
              caughtIds={caughtIds}
              language={language}
              isMuted={isMuted}
            />
          )
        )}

        {/* TAB 7: POKÉMON TCG SAMMELKARTEN */}
        {activeTab === 'tcg' && (
          <TcgView
            language={language}
            isPro={membershipState.tier === 'master'}
            membershipState={membershipState}
            onUseDailyPack={handleUseDailyPack}
            onOpenPaywall={handleOpenPaywall}
          />
        )}
      </main>

      {/* Floating Rotom AI Quick Widget */}
      <FloatingRotomWidget
        onShowPokemonDetails={handleShowPokemonByNameOrId}
        onFilterPokemon={handleFilterPokemonFromBot}
        onAddToTeam={handleAddToTeamByNameOrId}
        onSwitchTab={setActiveTab}
        allPokemonList={allPokemonList}
        language={language}
        currentTab={activeTab}
        isPro={isChatUnlocked}
        onOpenPaywall={handleOpenPaywall}
      />

      {/* Deep Inspection Detail Modal */}
      {selectedPokemon && (
        <PokemonDetailModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
          onSelectPokemon={setSelectedPokemon}
          isFavorite={favoriteIds.includes(selectedPokemon.id)}
          isCaught={caughtIds.includes(selectedPokemon.id)}
          onToggleFavorite={handleToggleFavorite}
          onToggleCaught={handleToggleCaught}
          onAddToTeam={handleAddToTeam}
          language={language}
          allPokemonList={allPokemonList}
        />
      )}

      {/* Paywall & Voucher / Referral Modal */}
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={() => setIsPaywallOpen(false)}
        onUnlockSuccess={() => {}}
        onVoucherSuccess={handleVoucherUnlocked}
        onShareReferral={handleReferralShared}
        triggerReason={paywallTriggerReason}
        language={language}
        membershipState={membershipState}
        setMembershipState={setMembershipState}
        onOpenAdminPanel={() => {
          setIsPaywallOpen(false);
          setIsAdminPanelOpen(true);
        }}
      />

      {/* Trainer Cloud Account & Sync Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onManualSyncTrigger={() => {
          if (currentUser) {
            syncLocalToCloud(caughtIds, favoriteIds, team, membershipState);
          }
        }}
        onOpenAdminPanel={() => {
          setIsAccountOpen(false);
          setIsAdminPanelOpen(true);
        }}
      />

      {/* Robin's Admin & Gutschein-Prüfstelle */}
      <AdminVoucherModal
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
        membershipState={membershipState}
        setMembershipState={setMembershipState}
      />
    </div>
  );
}
