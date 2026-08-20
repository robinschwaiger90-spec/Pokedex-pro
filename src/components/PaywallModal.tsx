import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  CheckCircle2,
  Lock,
  Share2,
  Gift,
  Copy,
  Check,
  Zap,
  HelpCircle,
  Camera,
  Layers,
  Send,
  Gamepad2,
  Info,
  ShieldCheck,
  AlertCircle,
  Key,
  Clock,
  XCircle,
} from 'lucide-react';
import { soundFx } from '../utils/audio';
import {
  MembershipState,
  recordReferralShare,
  unlockFullMasterPass,
} from '../utils/membership';
import {
  VoucherProvider,
  VOUCHER_RULES,
  validateVoucherCode,
  addSubmittedVoucher,
  getUserActiveTicket,
  clearUserActiveTicket,
  SubmittedVoucherRecord,
} from '../utils/voucherValidation';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockSuccess?: () => void;
  onVoucherSuccess?: (code: string, provider: string) => void;
  onShareReferral?: () => void;
  triggerReason?: string;
  language: 'de' | 'en';
  membershipState: MembershipState;
  setMembershipState?: React.Dispatch<React.SetStateAction<MembershipState>>;
  onOpenAdminPanel?: () => void;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  onUnlockSuccess,
  onVoucherSuccess,
  onShareReferral,
  triggerReason,
  language: _language,
  membershipState,
  setMembershipState,
  onOpenAdminPanel,
}) => {
  const [activeTab, setActiveTab] = useState<'voucher' | 'referral' | 'vip'>('voucher');
  const [voucherType, setVoucherType] = useState<VoucherProvider>('steam');
  const [voucherCode, setVoucherCode] = useState('');
  const [trainerContact, setTrainerContact] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [activeTicket, setActiveTicket] = useState<SubmittedVoucherRecord | null>(() => getUserActiveTicket());
  const [copiedLink, setCopiedLink] = useState(false);

  // Poll active ticket status every 2.5 seconds while modal is open
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      const current = getUserActiveTicket();
      setActiveTicket(current);

      if (current && current.status === 'approved') {
        soundFx.playSuccess();
        if (onVoucherSuccess) {
          onVoucherSuccess(current.code, current.provider);
        } else if (setMembershipState) {
          const next = unlockFullMasterPass(membershipState, current.code, current.provider as any);
          setMembershipState(next);
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isOpen, membershipState, onVoucherSuccess, setMembershipState]);

  if (!isOpen) return null;

  const appShareUrl = typeof window !== 'undefined' ? window.location.origin : 'https://pokedex-app.live';
  const shareMessage = `Schau dir diesen ultimativen 1025 Pokédex an! Mit TCG Karten Packs, 3D Modellen und KI: ${appShareUrl}`;

  const handleCopyShareLink = () => {
    soundFx.playSelect();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareMessage);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleShareToFriend = () => {
    soundFx.playSelect();
    if (onShareReferral) {
      onShareReferral();
    } else if (setMembershipState) {
      const { nextState, unlockedNow } = recordReferralShare(membershipState);
      setMembershipState(nextState);
      if (unlockedNow) {
        soundFx.playSuccess();
      }
    }

    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: 'Pokémon Meister Pokédex',
          text: shareMessage,
          url: appShareUrl,
        })
        .catch(() => {});
    } else {
      handleCopyShareLink();
    }
  };

  const handleSubmitVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    const targetProvider = activeTab === 'vip' ? 'vip_code' : voucherType;
    const result = validateVoucherCode(voucherCode, targetProvider);

    if (!result.isValid) {
      soundFx.playError();
      setValidationError(result.errorMessage || 'Ungültiger Gutschein-Code.');
      return;
    }

    setIsVerifying(true);
    soundFx.playSelect();

    // If it's Robin's Instant VIP Key -> Unlock immediately
    if (result.isInstantVip) {
      setTimeout(() => {
        setIsVerifying(false);
        soundFx.playSuccess();
        if (onVoucherSuccess) {
          onVoucherSuccess(result.normalizedCode, 'vip_code');
        } else if (setMembershipState) {
          const next = unlockFullMasterPass(membershipState, result.normalizedCode, 'vip_code');
          setMembershipState(next);
        }
        if (onUnlockSuccess) onUnlockSuccess();
        onClose();
      }, 1000);
      return;
    }

    // Regular Voucher (Steam, Nintendo, etc.):
    setTimeout(() => {
      setIsVerifying(false);
      soundFx.playSuccess();
      const record = addSubmittedVoucher(result.normalizedCode, voucherType, trainerContact);
      setActiveTicket(record);
    }, 1200);
  };

  const handleResetTicket = () => {
    soundFx.playSelect();
    clearUserActiveTicket();
    setActiveTicket(null);
    setVoucherCode('');
  };

  const currentRule = VOUCHER_RULES[voucherType] || VOUCHER_RULES.steam;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#1C1C1E] border-4 border-[#333333] rounded-3xl shadow-2xl overflow-hidden text-white my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-[#DC0A2D] via-[#B00020] to-[#8B0000] p-5 sm:p-6 border-b-4 border-[#333333] shrink-0">
            <button
              onClick={() => {
                soundFx.playSelect();
                onClose();
              }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 border border-white/30 text-white flex items-center justify-center transition-all cursor-pointer z-10 active:scale-90"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFCC00] text-[#222222] flex items-center justify-center shadow-lg border-2 border-white">
                <Gift className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    Gutschein &amp; Pass Einlösen
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-[#FFCC00] text-[#222222] font-black text-[10px] uppercase font-mono">
                    100% KOSTENLOS
                  </span>
                </div>
                <p className="text-xs text-red-100 font-mono mt-0.5">
                  Gutschein-Code eingeben oder mit 5 Freunden teilen.
                </p>
              </div>
            </div>

            {triggerReason && (
              <div className="mt-3 px-3 py-1.5 rounded-xl bg-black/40 border border-white/20 text-xs text-yellow-200 flex items-center gap-2">
                <Info className="w-4 h-4 shrink-0 text-[#FFCC00]" />
                <span>{triggerReason}</span>
              </div>
            )}
          </div>

          {/* Tab Selector */}
          <div className="grid grid-cols-3 p-2 bg-[#141416] border-b-2 border-[#333333] gap-2 shrink-0">
            <button
              onClick={() => {
                soundFx.playSelect();
                setActiveTab('voucher');
                setValidationError('');
              }}
              className={`py-2.5 px-2 rounded-2xl font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'voucher'
                  ? 'bg-[#FFCC00] text-[#222222] shadow-[0_0_15px_rgba(255,204,0,0.4)]'
                  : 'bg-[#222222] text-gray-300 hover:bg-[#2a2a2a]'
              }`}
            >
              <Gift className="w-3.5 h-3.5" />
              <span>1. Gutschein</span>
            </button>

            <button
              onClick={() => {
                soundFx.playSelect();
                setActiveTab('referral');
                setValidationError('');
              }}
              className={`py-2.5 px-2 rounded-2xl font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'referral'
                  ? 'bg-[#00D1FF] text-[#222222] shadow-[0_0_15px_rgba(0,209,255,0.4)]'
                  : 'bg-[#222222] text-gray-300 hover:bg-[#2a2a2a]'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>2. 5 Freunde</span>
            </button>

            <button
              onClick={() => {
                soundFx.playSelect();
                setActiveTab('vip');
                setValidationError('');
              }}
              className={`py-2.5 px-2 rounded-2xl font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'vip'
                  ? 'bg-[#49B65F] text-[#222222] shadow-[0_0_15px_rgba(73,182,95,0.4)]'
                  : 'bg-[#222222] text-gray-300 hover:bg-[#2a2a2a]'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>3. VIP-Code</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
            {activeTicket && activeTab === 'voucher' ? (
              <div className="space-y-4">
                {activeTicket.status === 'pending' && (
                  <div className="p-6 rounded-3xl bg-[#1A1A24] border-3 border-[#FFCC00] text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#FFCC00]/20 border-2 border-[#FFCC00] text-[#FFCC00] flex items-center justify-center mx-auto shadow-lg">
                      <Clock className="w-8 h-8 animate-spin" />
                    </div>

                    <div className="space-y-1">
                      <span className="px-3 py-1 rounded-full bg-[#FFCC00] text-[#222222] font-black text-xs uppercase font-mono">
                        WIRD VON ROBIN GEPRÜFT
                      </span>
                      <h3 className="text-xl font-black text-white mt-2">
                        Dein Code wurde an Robin übermittelt!
                      </h3>
                      <p className="text-xs font-mono text-[#00D1FF]">
                        Ticket-ID: <strong>#{activeTicket.id}</strong> &bull; Anbieter: {activeTicket.provider.toUpperCase()}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#111114] border border-white/10 text-xs text-gray-300 font-mono text-left space-y-1.5 max-w-md mx-auto">
                      <div className="text-gray-400">Eingereichter Code:</div>
                      <div className="text-[#FFCC00] font-black text-sm">{activeTicket.code}</div>
                      <div className="text-gray-400 pt-1">Kontakt: <span className="text-white">{activeTicket.contact}</span></div>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed max-w-md mx-auto">
                      Robin testet den Code im Store. <strong>Sobald Robin auf &quot;Freigeben&quot; klickt, schaltet sich deine App hier automatisch frei!</strong>
                    </p>

                    <div className="flex justify-center gap-3 pt-2">
                      <button
                        onClick={handleResetTicket}
                        className="px-4 py-2 rounded-xl bg-[#222222] hover:bg-[#333] text-gray-400 hover:text-white text-xs font-mono cursor-pointer"
                      >
                        Anderen Code eingeben
                      </button>
                    </div>
                  </div>
                )}

                {activeTicket.status === 'approved' && (
                  <div className="p-6 rounded-3xl bg-[#18241C] border-3 border-[#49B65F] text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#49B65F] text-[#222222] flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-black uppercase text-white">
                        Code bestätigt &amp; Meister-Pass freigeschaltet!
                      </h3>
                      <p className="text-xs font-mono text-[#49B65F]">
                        Robin hat dein Ticket <strong>#{activeTicket.id}</strong> bestätigt.
                      </p>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed max-w-md mx-auto">
                      Alle 9 Generationen, Scanner, Rotom-KI und unbegrenzte TCG Booster-Packs sind jetzt für dich aktiv!
                    </p>

                    <button
                      onClick={() => {
                        soundFx.playSuccess();
                        onClose();
                      }}
                      className="px-8 py-3 rounded-2xl bg-[#49B65F] hover:bg-green-400 text-[#222222] font-black text-xs uppercase tracking-wider cursor-pointer active:scale-95 shadow-lg"
                    >
                      Jetzt Pokédex starten
                    </button>
                  </div>
                )}

                {activeTicket.status === 'rejected' && (
                  <div className="p-6 rounded-3xl bg-[#241818] border-3 border-red-500 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center mx-auto shadow-lg">
                      <XCircle className="w-10 h-10" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-black uppercase text-red-200">
                        Code ungültig oder abgelaufen
                      </h3>
                      <p className="text-xs text-gray-300 max-w-md mx-auto">
                        {activeTicket.rejectionReason || 'Der eingegebene Code konnte im Store nicht eingelöst werden.'}
                      </p>
                    </div>

                    <button
                      onClick={handleResetTicket}
                      className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase cursor-pointer"
                    >
                      Neuen Code versuchen
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* OPTION 1: GUTSCHEIN CODE */}
                {activeTab === 'voucher' && (
                  <div className="space-y-5">
                    <div className="p-4 rounded-2xl bg-[#242426] border-2 border-[#333333] space-y-3">
                      <div className="flex items-center gap-2 text-[#FFCC00] font-black text-sm uppercase">
                        <Sparkles className="w-4 h-4" />
                        <span>Gutschein-Code eingeben</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        Wähle die Karte (<strong>Steam, Nintendo eShop, Google Play, PlayStation, Roblox</strong>) und gib den Code ein. Der Code wird übermittelt, von Robin geprüft und freigegeben.
                      </p>

                      {/* Card Type Selector */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                        {[
                          { id: 'steam', label: 'Steam' },
                          { id: 'nintendo', label: 'Nintendo eShop' },
                          { id: 'google_play', label: 'Google Play' },
                          { id: 'playstation', label: 'PlayStation' },
                          { id: 'roblox', label: 'Roblox' },
                          { id: 'other', label: 'Andere' },
                        ].map((card) => (
                          <button
                            key={card.id}
                            type="button"
                            onClick={() => {
                              soundFx.playSelect();
                              setVoucherType(card.id as VoucherProvider);
                              setValidationError('');
                            }}
                            className={`p-2 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                              voucherType === card.id
                                ? 'bg-[#FFCC00] text-[#222222] border-white font-black'
                                : 'bg-[#181818] text-gray-300 border-[#333333] hover:border-gray-500'
                            }`}
                          >
                            <Gamepad2 className="w-3.5 h-3.5" />
                            <span className="truncate">{card.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleSubmitVoucher} className="space-y-4">
                      {/* Format Pattern Info */}
                      <div className="p-3 rounded-xl bg-[#141416] border border-white/10 text-xs font-mono text-gray-400 space-y-1">
                        <div className="flex items-center gap-1.5 text-[#00D1FF] font-bold">
                          <Info className="w-3.5 h-3.5" />
                          <span>Format für {currentRule.name}:</span>
                        </div>
                        <p className="text-[11px] text-gray-300">{currentRule.descriptionDe}</p>
                        <p className="text-[10px] text-gray-500">
                          Beispiel: <span className="text-[#FFCC00]">{currentRule.example}</span>
                        </p>
                      </div>

                      {/* Code Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase text-gray-300 flex items-center justify-between">
                          <span>{currentRule.name} Code:</span>
                          <span className="text-[10px] text-[#FFCC00]">Beliebiger Betrag</span>
                        </label>
                        <input
                          type="text"
                          value={voucherCode}
                          onChange={(e) => {
                            setVoucherCode(e.target.value.toUpperCase());
                            if (validationError) setValidationError('');
                          }}
                          placeholder={currentRule.placeholder}
                          className="w-full px-4 py-3 bg-[#111111] border-2 border-[#444444] focus:border-[#FFCC00] rounded-2xl text-white font-mono text-sm tracking-wider uppercase placeholder:text-gray-600 outline-none transition-all"
                        />
                      </div>

                      {/* Contact Handle */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-gray-400">
                          Dein Trainername oder Discord-Tag:
                        </label>
                        <input
                          type="text"
                          value={trainerContact}
                          onChange={(e) => setTrainerContact(e.target.value)}
                          placeholder="z. B. AshKetchum oder Discord-Tag"
                          className="w-full px-3.5 py-2.5 bg-[#141414] border border-[#333333] focus:border-[#00D1FF] rounded-xl text-white font-mono text-xs placeholder:text-gray-600 outline-none"
                        />
                      </div>

                      {validationError && (
                        <div className="p-3 rounded-xl bg-red-950/80 border-2 border-red-500 text-xs text-red-200 flex items-center gap-2 font-bold animate-shake">
                          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                          <span>{validationError}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isVerifying}
                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#FFCC00] via-[#FFD700] to-[#FFA000] hover:brightness-110 text-[#222222] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,204,0,0.5)] transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                      >
                        {isVerifying ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-[#222222] border-t-transparent rounded-full animate-spin" />
                            Format wird geprüft &amp; an Robin gesendet...
                          </span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Code an Robin zur Prüfung einreichen</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}

                {/* OPTION 2: REFERRAL (AN 5 FREUNDE SENDEN) */}
                {activeTab === 'referral' && (
                  <div className="space-y-5">
                    <div className="p-4 rounded-2xl bg-[#1e2a38] border-2 border-[#00D1FF]/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[#00D1FF] font-black text-sm uppercase">
                          <Share2 className="w-4 h-4" />
                          <span>Empfehle die App an 5 Freunde</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#00D1FF] text-[#111111] font-black font-mono text-xs">
                          {membershipState.referralsSentCount} / 5 geteilt
                        </span>
                      </div>

                      <p className="text-xs text-gray-300 leading-relaxed">
                        Teile deinen Empfehlungs-Link mit <strong>5 Freunden</strong>. Sobald du den Link 5-mal geteilt hast, erhältst du die <strong>Rotom-K.I. gratis</strong>, das <strong>Quiz gratis</strong> und <strong>3 TCG Booster-Packs pro Tag</strong>!
                      </p>

                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="h-3 w-full bg-[#111111] rounded-full overflow-hidden border border-white/20">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#00D1FF] to-[#49B65F]"
                            initial={{ width: 0 }}
                            animate={{
                              width: `${Math.min(100, (membershipState.referralsSentCount / 5) * 100)}%`,
                            }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-gray-400">
                          <span>
                            Noch {Math.max(0, 5 - membershipState.referralsSentCount)} Einladungen nötig
                          </span>
                          <span>
                            {membershipState.referralsSentCount >= 5
                              ? '100% Freigeschaltet!'
                              : `${membershipState.referralsSentCount * 20}%`}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features breakdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-[#18241c] border border-[#49B65F]/40 space-y-1.5">
                        <div className="text-[11px] font-black uppercase text-[#49B65F] flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Gratis mit 5 Freunden:</span>
                        </div>
                        <ul className="text-xs text-gray-300 space-y-1 pl-1 font-mono">
                          <li className="flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-[#00D1FF]" />
                            <span>Rotom-K.I. &amp; Chatbot</span>
                          </li>
                          <li className="flex items-center gap-1.5">
                            <HelpCircle className="w-3.5 h-3.5 text-[#FFCC00]" />
                            <span>Pokémon Quiz Modus</span>
                          </li>
                          <li className="flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-[#49B65F]" />
                            <span>3 TCG Packs pro Tag</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#241818] border border-red-500/30 space-y-1.5">
                        <div className="text-[11px] font-black uppercase text-red-400 flex items-center gap-1.5">
                          <Lock className="w-4 h-4" />
                          <span>Gutschein nötig für:</span>
                        </div>
                        <ul className="text-xs text-gray-300 space-y-1 pl-1 font-mono">
                          <li className="flex items-center gap-1.5">
                            <Camera className="w-3.5 h-3.5 text-red-400" />
                            <span>Kamera-Scanner</span>
                          </li>
                          <li className="flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 text-red-400" />
                            <span>Gen 4 bis Gen 9</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <button
                        onClick={handleShareToFriend}
                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#00D1FF] to-[#0099FF] hover:brightness-110 text-[#111111] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all cursor-pointer active:scale-95"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>Jetzt an Freund senden (+1 Zähler)</span>
                      </button>

                      <button
                        onClick={handleCopyShareLink}
                        className="w-full py-2.5 rounded-xl bg-[#222222] hover:bg-[#2e2e2e] border border-white/20 text-xs font-mono text-gray-300 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                      >
                        {copiedLink ? (
                          <Check className="w-3.5 h-3.5 text-[#49B65F]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>{copiedLink ? 'Link kopiert!' : 'Link in Zwischenablage kopieren'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* OPTION 3: VIP CODE */}
                {activeTab === 'vip' && (
                  <div className="space-y-5">
                    <div className="p-4 rounded-2xl bg-[#1A261C] border-2 border-[#49B65F]/40 space-y-3">
                      <div className="flex items-center gap-2 text-[#49B65F] font-black text-sm uppercase">
                        <Key className="w-4 h-4" />
                        <span>Persönlicher VIP-Code von Robin</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        Gib deinen persönlichen VIP-Code von Robin hier ein, um die App <strong>sofort komplett freizuschalten</strong>.
                      </p>
                    </div>

                    <form onSubmit={handleSubmitVoucher} className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase text-gray-300 flex items-center justify-between">
                          <span>VIP-Code:</span>
                          <span className="text-[10px] text-[#49B65F]">Sofortige Freischaltung</span>
                        </label>
                        <input
                          type="text"
                          value={voucherCode}
                          onChange={(e) => {
                            setVoucherCode(e.target.value.toUpperCase());
                            if (validationError) setValidationError('');
                          }}
                          placeholder="CODE HIER EINGEBEN"
                          className="w-full px-4 py-3 bg-[#111111] border-2 border-[#444444] focus:border-[#49B65F] rounded-2xl text-white font-mono text-sm tracking-wider uppercase placeholder:text-gray-600 outline-none transition-all"
                        />
                      </div>

                      {validationError && (
                        <div className="p-3 rounded-xl bg-red-950/80 border-2 border-red-500 text-xs text-red-200 flex items-center gap-2 font-bold animate-shake">
                          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                          <span>{validationError}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isVerifying}
                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#49B65F] to-[#2E8B57] hover:brightness-110 text-[#111111] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(73,182,95,0.4)] transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                      >
                        {isVerifying ? (
                          <span>VIP-Code wird geprüft...</span>
                        ) : (
                          <>
                            <Key className="w-4 h-4" />
                            <span>VIP-Code aktivieren</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </>
            )}

            {/* Admin shortcut in footer */}
            {onOpenAdminPanel && (
              <div className="pt-2 border-t border-white/10 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playSelect();
                    onOpenAdminPanel();
                  }}
                  className="text-[10px] font-mono text-gray-500 hover:text-[#FFCC00] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <ShieldCheck className="w-3 h-3" />
                  <span>Robin&apos;s Admin &amp; Gutschein-Prüfstelle öffnen</span>
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
