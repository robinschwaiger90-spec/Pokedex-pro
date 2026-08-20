import React from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Users,
  Swords,
  HelpCircle,
  Volume2,
  VolumeX,
  Smartphone,
  Tv,
  CheckCircle2,
  Heart,
  Zap,
  Camera,
  Layers,
  Crown,
  Lock,
  Gift,
  Cloud,
  UserCheck,
  User,
} from 'lucide-react';
import { ActiveTab, ViewMode } from '../types/pokemon';
import { soundFx } from '../utils/audio';
import { MembershipState, isFeatureUnlocked } from '../utils/membership';
import { useAuth } from '../contexts/AuthContext';

interface PokedexHeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
  caughtCount: number;
  totalVisible: number;
  favoriteCount: number;
  teamCount: number;
  membershipState: MembershipState;
  onOpenPaywall?: (reason?: string) => void;
  onOpenAccount?: () => void;
}

export const PokedexHeader: React.FC<PokedexHeaderProps> = ({
  activeTab,
  setActiveTab,
  viewMode,
  setViewMode,
  isMuted,
  setIsMuted,
  language,
  setLanguage,
  caughtCount,
  favoriteCount,
  teamCount,
  membershipState,
  onOpenPaywall,
  onOpenAccount,
}) => {
  const { currentUser, userProfile } = useAuth();
  const isPro = membershipState.tier === 'master' || membershipState.isPro;
  const isCommunity = membershipState.tier === 'community';

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundFx.isMuted = next;
    if (!next) soundFx.playSelect();
  };

  const handleTabChange = (tab: ActiveTab) => {
    soundFx.playSelect();
    setActiveTab(tab);
  };

  const handleModeChange = (mode: ViewMode) => {
    soundFx.playSelect();
    setViewMode(mode);
  };

  const isQuizOpen = isFeatureUnlocked('quiz', membershipState);
  const isRotomOpen = isFeatureUnlocked('rotom', membershipState);
  const isScannerOpen = isFeatureUnlocked('scanner', membershipState);

  return (
    <header className="sticky top-0 z-40 bg-[#DC0A2D] text-white shadow-2xl border-b-4 border-[#8B0000]">
      {/* Top status bar with hardware LEDs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between border-b-2 border-[#8B0000]/60">
        <div className="flex items-center gap-4">
          {/* Classic Pokédex Glowing Blue Lens with animated pulse waves */}
          <motion.div
            className="relative flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => soundFx.playBeep()}
          >
            {/* Outer expanding pulse ring */}
            <motion.div
              className="absolute w-16 h-16 rounded-full bg-[#00D1FF]/40 -z-10"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="w-13 h-13 sm:w-14 sm:h-14 bg-[#00D1FF] border-4 border-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.9),0_0_30px_#00D1FF] flex items-center justify-center relative overflow-hidden">
              {/* Specular highlight glint */}
              <div className="w-5 h-5 rounded-full bg-white/80 blur-[1px] -translate-x-1.5 -translate-y-1.5" />
              {/* Rotating radar line */}
              <motion.div
                className="absolute inset-0 border-r-2 border-white/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          {/* Tri-color status indicators with authentic staggered blink animations (Yellow LED acts as subtle secret Admin trigger) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <motion.div
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#FF0000] border-2 border-[#8B0000] rounded-full shadow-[0_0_8px_#FF0000]"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Secret Admin-Prüfstelle access: Discreet click on the Yellow Status LED */}
            <motion.button
              id="secret-admin-led"
              type="button"
              onClick={() => {
                soundFx.playBeep();
                if (onOpenPaywall) onOpenPaywall('Robin-Admin');
              }}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              title="Statusanzeige • Wartung"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#FFCC00] border-2 border-[#8B0000] rounded-full shadow-[0_0_8px_#FFCC00] cursor-pointer outline-none"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            />
            <motion.div
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#49B65F] border-2 border-[#8B0000] rounded-full shadow-[0_0_8px_#49B65F]"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            />
          </div>

          <div className="ml-2 hidden sm:block">
            <motion.h1
              className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-sans flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <span>POKÉDEX</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-black tracking-normal font-mono ${
                isPro
                  ? 'bg-[#FFCC00] text-[#222222] shadow-[0_0_10px_rgba(255,204,0,0.5)]'
                  : isCommunity
                  ? 'bg-[#00D1FF] text-[#111111]'
                  : 'bg-[#222222] text-gray-300 border border-white/20'
              }`}>
                {isPro ? 'MEISTER PRO' : isCommunity ? 'COMMUNITY PASS' : 'FREE EDITION'}
              </span>
            </motion.h1>
            <p className="text-[11px] text-red-100/90 font-mono font-bold tracking-wider uppercase">
              {language === 'de'
                ? (isPro ? 'Offizielles Trainer-Nachschlagewerk (Gen 1-9 • Unbegrenzt)' : isCommunity ? 'Community Trainer (Gen 1-3 • KI & Quiz Aktiv)' : 'Trainer-Nachschlagewerk (Gen 1-3 Kostenlos)')
                : (isPro ? 'Official Trainer Database (Gen 1-9 • Unlimited)' : isCommunity ? 'Community Trainer (Gen 1-3 • AI & Quiz Active)' : 'Trainer Database (Gen 1-3 Free)')}
            </p>
          </div>
        </div>

        {/* Global Controls: Audio, Language, ViewMode, Caught stats, Master Pass CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Trainer Account Cloud Sync Button */}
          <motion.button
            id="header-account-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              soundFx.playSelect();
              if (onOpenAccount) onOpenAccount();
            }}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl border-2 font-mono text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer transition-all ${
              currentUser
                ? 'bg-[#11221A] border-[#49B65F] text-[#49B65F]'
                : 'bg-[#111B24] border-[#00D1FF] text-[#00D1FF] hover:bg-[#162736]'
            }`}
            title={currentUser ? 'Trainer-Konto synchronisiert' : 'Konto erstellen / Einloggen für Cloud-Speicher'}
          >
            {currentUser ? <UserCheck className="w-3.5 h-3.5" /> : <Cloud className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">
              {currentUser ? (userProfile?.trainerName || 'Mein Konto') : 'Konto / Login'}
            </span>
          </motion.button>

          {/* Master Pass Free Voucher / Invite CTA Button */}
          {!isPro ? (
            <motion.button
              id="header-upgrade-masterpass-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                soundFx.playSelect();
                if (onOpenPaywall) onOpenPaywall();
              }}
              className="px-3 sm:px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#FFCC00] via-[#FFD700] to-[#FFA000] border-2 border-white text-[#222222] font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,204,0,0.6)] cursor-pointer active:scale-95 animate-pulse"
            >
              <Gift className="w-4 h-4" />
              <span>Gutschein Einlösen</span>
            </motion.button>
          ) : (
            <motion.button
              id="header-pro-badge-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                soundFx.playSelect();
                if (onOpenPaywall) onOpenPaywall();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#222222] border-2 border-[#FFCC00] text-xs font-mono font-black text-[#FFCC00] shadow-[0_0_12px_rgba(255,204,0,0.3)] cursor-pointer"
              title="Pass-Status & VIP-Codes öffnen"
            >
              <Crown className="w-3.5 h-3.5 text-[#FFCC00]" />
              <span>MEISTER PASS</span>
            </motion.button>
          )}

          {/* Caught stats pill */}
          <motion.div
            id="header-caught-counter"
            whileHover={{ scale: 1.04 }}
            className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#222222] border-2 border-[#333333] text-xs font-mono text-white shadow-md"
            title="Gefangene Pokémon"
          >
            <CheckCircle2 className="w-4 h-4 text-[#49B65F]" />
            <span>
              {language === 'de' ? 'Gefangen' : 'Caught'}:{' '}
              <strong className="text-[#49B65F] font-bold">{caughtCount}</strong>
            </span>
            <span className="text-gray-600">|</span>
            <Heart className="w-4 h-4 text-[#FF0000] fill-[#FF0000]" />
            <strong className="text-white font-bold">{favoriteCount}</strong>
          </motion.div>

          {/* View Mode toggle (Modern vs Retro Handheld) */}
          <div className="flex bg-[#222222] p-1 rounded-xl border-2 border-[#333333] shadow-md">
            <motion.button
              id="viewmode-modern-btn"
              whileTap={{ scale: 0.92 }}
              onClick={() => handleModeChange('modern')}
              className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'modern'
                  ? 'bg-[#49B65F] text-[#222222] shadow font-black'
                  : 'text-gray-300 hover:text-white'
              }`}
              title={language === 'de' ? 'Moderne Ansicht' : 'Modern View'}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Modern</span>
            </motion.button>
            <motion.button
              id="viewmode-classic-btn"
              whileTap={{ scale: 0.92 }}
              onClick={() => handleModeChange('classic')}
              className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'classic'
                  ? 'bg-[#FFCC00] text-[#222222] shadow font-black'
                  : 'text-gray-300 hover:text-white'
              }`}
              title={language === 'de' ? 'Klassischer Retro Pokédex' : 'Classic Retro Dex'}
            >
              <Tv className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Retro Dex</span>
            </motion.button>
          </div>

          {/* Language toggle (DE / EN) */}
          <motion.button
            id="language-toggle-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              const next = language === 'de' ? 'en' : 'de';
              setLanguage(next);
              soundFx.playSelect();
            }}
            className="px-2.5 py-1.5 rounded-xl bg-[#222222] border-2 border-[#333333] text-xs font-mono font-black text-[#FFCC00] hover:bg-[#333333] transition-all shadow-md"
            title="Sprache / Language"
          >
            {language.toUpperCase()}
          </motion.button>

          {/* Sound Toggle */}
          <motion.button
            id="audio-mute-toggle-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className={`p-2 rounded-xl border-2 transition-all shadow-md ${
              isMuted
                ? 'bg-[#222222] border-[#333333] text-gray-500 hover:text-gray-300'
                : 'bg-[#222222] border-[#00D1FF] text-[#00D1FF] hover:bg-[#333333] shadow-[0_0_10px_rgba(0,209,255,0.4)]'
            }`}
            title={isMuted ? 'Ton einschalten' : 'Ton stummschalten'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>

      {/* Main navigation tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between overflow-x-auto no-scrollbar py-2">
        <nav className="flex items-center gap-2 sm:gap-3">
          <motion.button
            id="nav-tab-pokedex"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange('pokedex')}
            className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap border-2 ${
              activeTab === 'pokedex'
                ? 'bg-[#222222] text-[#FFCC00] border-[#FFCC00] shadow-[0_0_15px_rgba(255,204,0,0.4)]'
                : 'bg-[#8B0000]/60 text-white border-transparent hover:bg-[#8B0000]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#00D1FF]" />
            <span>{language === 'de' ? 'Pokédex' : 'Pokédex'}</span>
          </motion.button>

          <motion.button
            id="nav-tab-team"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange('team')}
            className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap border-2 relative ${
              activeTab === 'team'
                ? 'bg-[#222222] text-[#49B65F] border-[#49B65F] shadow-[0_0_15px_rgba(73,182,95,0.4)]'
                : 'bg-[#8B0000]/60 text-white border-transparent hover:bg-[#8B0000]'
            }`}
          >
            <Users className="w-4 h-4 text-[#49B65F]" />
            <span>{language === 'de' ? 'Mein Team' : 'My Team'}</span>
            {teamCount > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-[#49B65F] text-[#222222] text-xs font-black rounded-full shadow">
                {teamCount}/6
              </span>
            )}
          </motion.button>

          <motion.button
            id="nav-tab-types"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange('types')}
            className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap border-2 ${
              activeTab === 'types'
                ? 'bg-[#222222] text-[#00D1FF] border-[#00D1FF] shadow-[0_0_15px_rgba(0,209,255,0.4)]'
                : 'bg-[#8B0000]/60 text-white border-transparent hover:bg-[#8B0000]'
            }`}
          >
            <Swords className="w-4 h-4 text-[#00D1FF]" />
            <span>{language === 'de' ? 'Typ-Matrix' : 'Type Matchups'}</span>
          </motion.button>

          <motion.button
            id="nav-tab-quiz"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange('quiz')}
            className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap border-2 ${
              activeTab === 'quiz'
                ? 'bg-[#222222] text-[#FFCC00] border-[#FFCC00] shadow-[0_0_15px_rgba(255,204,0,0.4)]'
                : 'bg-[#8B0000]/60 text-white border-transparent hover:bg-[#8B0000]'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-[#FFCC00]" />
            <span>{language === 'de' ? 'Pokémon Quiz' : 'Trainer Quiz'}</span>
            {!isQuizOpen ? (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-[#111111] text-[#FFCC00] border border-[#FFCC00]/50 flex items-center gap-0.5">
                <Lock className="w-2.5 h-2.5" />
                <span>FREISCHALTEN</span>
              </span>
            ) : (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-[#49B65F] text-[#222222]">
                AKTIV
              </span>
            )}
          </motion.button>

          <motion.button
            id="nav-tab-chat"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange('chat')}
            className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap border-2 ${
              activeTab === 'chat'
                ? 'bg-[#222222] text-[#00D1FF] border-[#00D1FF] shadow-[0_0_15px_rgba(0,209,255,0.4)]'
                : 'bg-[#8B0000]/60 text-white border-transparent hover:bg-[#8B0000]'
            }`}
          >
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Zap className="w-4 h-4 text-[#FFCC00]" />
            </motion.div>
            <span>{language === 'de' ? 'Rotom-KI' : 'Rotom AI'}</span>
            {!isRotomOpen ? (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-[#111111] text-[#00D1FF] border border-[#00D1FF]/50 flex items-center gap-0.5">
                <Lock className="w-2.5 h-2.5" />
                <span>PASS</span>
              </span>
            ) : (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-[#00D1FF] text-[#111111]">
                AKTIV
              </span>
            )}
          </motion.button>

          <motion.button
            id="nav-tab-scanner"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange('scanner')}
            className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap border-2 ${
              activeTab === 'scanner'
                ? 'bg-[#222222] text-[#FF0000] border-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.4)]'
                : 'bg-[#8B0000]/60 text-white border-transparent hover:bg-[#8B0000]'
            }`}
          >
            <Camera className="w-4 h-4 text-[#00D1FF] animate-pulse" />
            <span>{language === 'de' ? 'Kamera-Scanner' : 'Vision Scanner'}</span>
            {!isScannerOpen ? (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-[#111111] text-red-400 border border-red-400/50 flex items-center gap-0.5">
                <Lock className="w-2.5 h-2.5" />
                <span>GUTSCHEIN</span>
              </span>
            ) : (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-[#FFCC00] text-[#222222]">
                KI-VISION
              </span>
            )}
          </motion.button>

          <motion.button
            id="nav-tab-tcg"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange('tcg')}
            className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap border-2 ${
              activeTab === 'tcg'
                ? 'bg-[#222222] text-[#FFCC00] border-[#FFCC00] shadow-[0_0_15px_rgba(255,204,0,0.4)]'
                : 'bg-[#8B0000]/60 text-white border-transparent hover:bg-[#8B0000]'
            }`}
          >
            <Layers className="w-4 h-4 text-[#FFCC00]" />
            <span>{language === 'de' ? 'TCG Karten' : 'TCG Cards'}</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-[#00D1FF] text-[#222222]">
              {isPro ? 'UNLIMITED' : isCommunity ? '3 PACKS/TAG' : '1 PACK/TAG'}
            </span>
          </motion.button>
        </nav>
      </div>
    </header>
  );
};
