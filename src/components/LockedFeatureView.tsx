import React from 'react';
import { motion } from 'motion/react';
import { Crown, Lock, Sparkles, Star, ArrowRight, HelpCircle, Bot, Camera, Gift, Share2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface LockedFeatureViewProps {
  feature?: 'quiz' | 'chat' | 'scanner' | string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onUnlock?: () => void;
  onOpenPaywall?: () => void;
  language: 'de' | 'en';
}

export const LockedFeatureView: React.FC<LockedFeatureViewProps> = ({
  feature = 'quiz',
  title,
  description,
  icon,
  onUnlock,
  onOpenPaywall,
  language,
}) => {
  const handleOpen = onUnlock || onOpenPaywall || (() => {});

  let displayTitle = title;
  let displayDesc = description;
  let displayIcon = icon;

  if (!displayTitle) {
    if (feature === 'quiz') {
      displayTitle = language === 'de' ? 'Trainer-Quiz Gesperrt' : 'Trainer Quiz Locked';
      displayDesc = language === 'de'
        ? 'Teste dein Pokémon-Wissen in Quiz-Duellen mit verschiedenen Schwierigkeitsgraden. Schalte das Quiz kostenlos frei, indem du den App-Link an 5 Freunde sendest, oder gib einen Gutschein-Code ein.'
        : 'Test your Pokémon knowledge with interactive quizzes across all 9 generations. Unlock for free by sharing with 5 friends or entering a voucher code.';
      displayIcon = <HelpCircle className="w-10 h-10 text-[#FFCC00]" />;
    } else if (feature === 'chat') {
      displayTitle = language === 'de' ? 'Rotom-K.I. Assistent Gesperrt' : 'Rotom AI Assistant Locked';
      displayDesc = language === 'de'
        ? 'Erhalte intelligente Team-Empfehlungen, Strategie-Tipps und Antworten auf jede Frage. Schalte Rotom-KI kostenlos frei, indem du die App an 5 Freunde empfiehlst!'
        : 'Get AI team recommendations, battle strategies, and lore answers. Unlock Rotom AI for free by referring 5 friends!';
      displayIcon = <Bot className="w-10 h-10 text-[#00D1FF]" />;
    } else if (feature === 'scanner') {
      displayTitle = language === 'de' ? 'Kamera-Scanner Gesperrt' : 'Vision Scanner Locked';
      displayDesc = language === 'de'
        ? 'Scanne Sammelkarten, Merchandise oder Pokémon auf deinem Bildschirm direkt mit deiner Kamera. Der Kamera-Scanner wird mit einem beliebigen Gutschein-Code (Steam, Nintendo, Google Play etc.) freigeschaltet.'
        : 'Scan real cards and merch using your camera with AI vision. Unlocked with any voucher code (Steam, Nintendo, Google Play).';
      displayIcon = <Camera className="w-10 h-10 text-red-400" />;
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-[#1E1E20] border-3 sm:border-4 border-[#FFCC00] rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(255,204,0,0.25)] space-y-6 overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#FFCC00]/15 blur-3xl pointer-events-none rounded-full" />

        {/* Feature Icon + Lock Badge */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#2A2A2C] border-2 border-[#444444] flex items-center justify-center text-gray-300 shadow-inner">
            {displayIcon || <Lock className="w-10 h-10 text-[#FFCC00]" />}
          </div>
          <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#DC0A2D] border-2 border-white flex items-center justify-center text-white shadow-lg">
            <Lock className="w-4 h-4" />
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/40 text-[#FFCC00] text-xs font-mono font-bold">
            <Gift className="w-3.5 h-3.5" />
            <span>KOSTENLOS FREISCHALTBAR</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            {displayTitle}
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {displayDesc}
          </p>
        </div>

        {/* Unlock Methods Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left">
          <div className="p-3.5 rounded-2xl bg-[#141416] border border-[#00D1FF]/40 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#00D1FF] uppercase">
              <Share2 className="w-3.5 h-3.5" />
              <span>Methode 1: An 5 Freunde senden</span>
            </div>
            <p className="text-[11px] text-gray-300">
              Rotom-KI & Quiz gratis + 3 TCG Packs pro Tag freischalten.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#141416] border border-[#FFCC00]/40 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#FFCC00] uppercase">
              <Gift className="w-3.5 h-3.5" />
              <span>Methode 2: Gutschein-Code</span>
            </div>
            <p className="text-[11px] text-gray-300">
              Steam / Nintendo / Play Code eingeben für 100% Komplett-Freischaltung.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              soundFx.playSelect();
              handleOpen();
            }}
            className="px-8 py-3.5 bg-gradient-to-r from-[#FFCC00] to-[#FFA000] text-[#222222] font-black text-sm uppercase tracking-wider rounded-2xl shadow-[0_0_25px_rgba(255,204,0,0.5)] flex items-center gap-2 mx-auto cursor-pointer"
          >
            <Gift className="w-4 h-4" />
            <span>Jetzt kostenlos freischalten</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <p className="text-[10px] text-gray-400 font-mono mt-2">
            Keine Kreditkarte • Kein Geld erforderlich
          </p>
        </div>
      </motion.div>
    </div>
  );
};
