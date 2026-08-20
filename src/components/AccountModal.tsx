import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  User,
  Mail,
  Lock,
  Sparkles,
  Cloud,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Shield,
  Zap,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { soundFx } from '../utils/audio';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onManualSyncTrigger?: () => void;
  onOpenAdminPanel?: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onManualSyncTrigger,
  onOpenAdminPanel,
}) => {
  const { currentUser, userProfile, login, signup, logout } = useAuth();

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [trainerName, setTrainerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email || !password) {
      setError('Bitte gib deine E-Mail und ein Passwort ein.');
      return;
    }

    if (password.length < 6) {
      setError('Das Passwort muss mindestens 6 Zeichen lang sein.');
      return;
    }

    try {
      setLoading(true);
      if (isRegisterMode) {
        await signup(email, password, trainerName || email.split('@')[0]);
        soundFx.playSuccess();
        setSuccess('🎉 Account erfolgreich erstellt! Dein Pokédex wird nun sicher synchronisiert.');
      } else {
        await login(email, password);
        soundFx.playSuccess();
        setSuccess('👋 Willkommen zurück! Dein Spielstand wurde geladen.');
      }
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err: any) {
      soundFx.playError();
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('Diese E-Mail-Adresse wird bereits verwendet. Bitte melde dich an.');
      } else if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('E-Mail oder Passwort ist nicht korrekt.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Ungültiges E-Mail-Format.');
      } else {
        setError(err.message || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    soundFx.playSelect();
    try {
      await logout();
      setSuccess('Du hast dich erfolgreich abgemeldet.');
      setTimeout(() => onClose(), 1000);
    } catch (err: any) {
      setError('Abmeldung fehlgeschlagen.');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-[#18181A] border-4 border-[#00D1FF] rounded-3xl shadow-2xl overflow-hidden text-white my-auto"
        >
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-[#1A2530] via-[#1E2E3D] to-[#1A2530] border-b-2 border-[#2A3B4D] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#00D1FF] text-[#111111] flex items-center justify-center font-black shadow-[0_0_15px_rgba(0,209,255,0.4)]">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-black uppercase text-white tracking-wide flex items-center gap-2">
                  <span>Trainer-Cloud-Konto</span>
                </h2>
                <p className="text-xs text-cyan-200/80 font-mono">
                  Fortschritt, Team &amp; Pass sicher speichern
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.playSelect();
                onClose();
              }}
              className="p-2 rounded-xl bg-[#111111] hover:bg-black text-gray-300 hover:text-white border border-[#333] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-5">
            {/* Feedback Messages */}
            {error && (
              <div className="p-3 bg-red-950/80 border border-red-500/60 rounded-xl text-red-200 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="p-3 bg-[#49B65F]/20 border border-[#49B65F] rounded-xl text-[#49B65F] text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{success}</span>
              </div>
            )}

            {currentUser ? (
              /* LOGGED IN VIEW */
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#111111] border-2 border-[#222222] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#222222] border border-[#00D1FF] flex items-center justify-center text-[#00D1FF] font-black">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">
                          {userProfile?.trainerName || currentUser.displayName || 'Trainer'}
                        </div>
                        <div className="text-[11px] font-mono text-gray-400">{currentUser.email}</div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-[#49B65F]/20 text-[#49B65F] border border-[#49B65F]/50 text-[10px] font-mono font-bold">
                      Aktiv Synchronisiert
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
                    <div className="bg-[#18181A] p-2 rounded-xl">
                      <div className="text-[10px] text-gray-400 uppercase">Gefangen</div>
                      <div className="text-sm font-black text-[#49B65F]">
                        {userProfile?.caughtPokemon?.length || 0}
                      </div>
                    </div>
                    <div className="bg-[#18181A] p-2 rounded-xl">
                      <div className="text-[10px] text-gray-400 uppercase">Favoriten</div>
                      <div className="text-sm font-black text-[#FF0000]">
                        {userProfile?.favorites?.length || 0}
                      </div>
                    </div>
                    <div className="bg-[#18181A] p-2 rounded-xl">
                      <div className="text-[10px] text-gray-400 uppercase">Meister-Pass</div>
                      <div className="text-sm font-black text-[#FFCC00]">
                        {userProfile?.isMasterPass ? 'Aktiv' : 'Free'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#112211] border border-[#49B65F]/40 rounded-xl text-[11px] text-gray-300 space-y-1">
                  <div className="font-bold text-[#49B65F] flex items-center gap-1.5">
                    <Cloud className="w-3.5 h-3.5" />
                    <span>Cloud-Speicherstand ist aktiv</span>
                  </div>
                  <p>
                    Dein Fortschritt wird automatisch in deiner Trainer-Cloud gespeichert. Wenn du dich auf einem anderen Gerät einloggst, ist alles direkt da!
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  {onManualSyncTrigger && (
                    <button
                      onClick={() => {
                        soundFx.playSelect();
                        onManualSyncTrigger();
                        setSuccess('Spielstand manuell in die Cloud hochgeladen!');
                        setTimeout(() => setSuccess(null), 2500);
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-[#00D1FF] hover:bg-cyan-400 text-[#111111] font-black text-xs uppercase tracking-wider cursor-pointer active:scale-95 transition-all shadow"
                    >
                      Jetzt Sichern
                    </button>
                  )}

                  <button
                    onClick={handleLogout}
                    className="px-4 py-2.5 rounded-xl bg-[#222222] hover:bg-red-950 hover:text-red-300 text-gray-400 font-bold text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer border border-[#333] transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Abmelden</span>
                  </button>
                </div>
              </div>
            ) : (
              /* LOGIN / REGISTER FORM */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Tabs: Einloggen vs Registrieren */}
                <div className="flex bg-[#111111] p-1 rounded-xl border border-[#333333]">
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playSelect();
                      setIsRegisterMode(false);
                      setError(null);
                    }}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                      !isRegisterMode
                        ? 'bg-[#00D1FF] text-[#111111] shadow font-black'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Anmelden
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playSelect();
                      setIsRegisterMode(true);
                      setError(null);
                    }}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                      isRegisterMode
                        ? 'bg-[#00D1FF] text-[#111111] shadow font-black'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Konto Erstellen
                  </button>
                </div>

                {isRegisterMode && (
                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                      Trainer-Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={trainerName}
                        onChange={(e) => setTrainerName(e.target.value)}
                        placeholder="z. B. Ash Ketchum"
                        className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border-2 border-[#333] focus:border-[#00D1FF] rounded-xl text-white text-sm outline-none"
                      />
                      <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                    E-Mail Adresse
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="trainer@example.com"
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border-2 border-[#333] focus:border-[#00D1FF] rounded-xl text-white text-sm outline-none"
                    />
                    <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-300 uppercase mb-1">
                    Passwort
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mindestens 6 Zeichen"
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border-2 border-[#333] focus:border-[#00D1FF] rounded-xl text-white text-sm outline-none"
                    />
                    <Lock className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div className="p-3 bg-[#131A22] rounded-xl border border-[#223344] text-[11px] text-gray-300 space-y-1">
                  <div className="font-bold text-[#00D1FF] flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Warum ein Konto erstellen?</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-0.5 text-gray-400">
                    <li>Gefangene Pokémon &amp; Teams gehen nie verloren</li>
                    <li>Meister-Pass &amp; Gutscheine geräteübergreifend gesichert</li>
                    <li>Sammelkarten &amp; TCG-Booster online synchronisiert</li>
                  </ul>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#00D1FF] to-[#0099FF] hover:brightness-110 text-[#111111] font-black text-xs uppercase tracking-wider cursor-pointer shadow-lg active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>{loading ? 'Wird verarbeitet...' : isRegisterMode ? 'Kostenlos Registrieren' : 'Jetzt Anmelden'}</span>
                </button>
              </form>
            )}

            {/* Subtle Admin link in Account Modal */}
            {onOpenAdminPanel && (
              <div className="pt-2 border-t border-white/5 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playSelect();
                    onOpenAdminPanel();
                  }}
                  className="text-[10px] font-mono text-gray-600 hover:text-gray-400 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Lock className="w-2.5 h-2.5" />
                  <span>Robin&apos;s Prüfstelle</span>
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
