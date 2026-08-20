import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Key,
  Gamepad2,
  Trash2,
  Sparkles,
  RefreshCw,
  Clock,
  Lock,
  AlertCircle,
} from 'lucide-react';
import { soundFx } from '../utils/audio';
import {
  SubmittedVoucherRecord,
  getSubmittedVouchers,
  saveSubmittedVouchers,
  approveVoucherTicket,
  rejectVoucherTicket,
  ROBIN_ADMIN_PIN,
} from '../utils/voucherValidation';
import { MembershipState, unlockFullMasterPass } from '../utils/membership';

interface AdminVoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
  membershipState: MembershipState;
  setMembershipState: React.Dispatch<React.SetStateAction<MembershipState>>;
}

export const AdminVoucherModal: React.FC<AdminVoucherModalProps> = ({
  isOpen,
  onClose,
  membershipState,
  setMembershipState,
}) => {
  // Always start locked when opened
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState('');

  const [vouchers, setVouchers] = useState<SubmittedVoucherRecord[]>(() => getSubmittedVouchers());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Reset authentication and input when modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setIsAuthenticated(false);
      setEnteredPin('');
      setPinError('');
      setVouchers(getSubmittedVouchers());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPin.trim() === ROBIN_ADMIN_PIN) {
      soundFx.playSuccess();
      setIsAuthenticated(true);
      setPinError('');
    } else {
      soundFx.playError();
      setPinError('Falsches Admin-Passwort! Zugriff verweigert.');
    }
  };

  const handleCopy = (text: string, id: string) => {
    soundFx.playSelect();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleApproveAndUnlock = (vouchId: string) => {
    soundFx.playSuccess();
    const approved = approveVoucherTicket(vouchId);
    setVouchers(getSubmittedVouchers());

    if (approved) {
      const next = unlockFullMasterPass(membershipState, approved.code, approved.provider as any);
      setMembershipState(next);

      setSuccessToast(`Ticket #${approved.id} freigegeben! Meister-Pass aktiviert.`);
      setTimeout(() => setSuccessToast(null), 4000);
    }
  };

  const handleReject = (vouchId: string) => {
    soundFx.playError();
    rejectVoucherTicket(vouchId, 'Gutscheincode ungültig oder bereits eingelöst');
    setVouchers(getSubmittedVouchers());
    setSuccessToast(`Ticket #${vouchId} als ungültig markiert.`);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleDelete = (vouchId: string) => {
    soundFx.playSelect();
    const updated = vouchers.filter((v) => v.id !== vouchId);
    setVouchers(updated);
    saveSubmittedVouchers(updated);
  };

  const handleQuickUnlockSelf = () => {
    soundFx.playSuccess();
    const next = unlockFullMasterPass(membershipState, 'ADMIN-ROBIN-DIRECT', 'steam');
    setMembershipState(next);
    setSuccessToast('Meister-Pass für Robin sofort aktiviert!');
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const pendingCount = vouchers.filter((v) => v.status === 'pending').length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-[#18181A] border-4 border-[#FFCC00] rounded-3xl shadow-2xl overflow-hidden text-white my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-[#222222] via-[#2A2A2E] to-[#222222] border-b-2 border-[#333333] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFCC00] text-[#222222] flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-black uppercase text-white flex items-center gap-2">
                  <span>Robin's Gutschein-Prüfstelle</span>
                  {isAuthenticated && pendingCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-[#DC0A2D] text-white text-[10px] font-mono animate-pulse">
                      {pendingCount} NEU ZU PRÜFEN
                    </span>
                  )}
                </h2>
                <p className="text-xs text-gray-400 font-mono">
                  {isAuthenticated ? 'Codes prüfen, im Store testen & freigeben.' : 'Geschützter Admin-Bereich.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.playSelect();
                setIsAuthenticated(false);
                onClose();
              }}
              className="p-2 rounded-xl bg-[#111111] hover:bg-black text-gray-300 hover:text-white border border-[#333] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* IF NOT AUTHENTICATED -> SHOW PASSWORD PROMPT */}
          {!isAuthenticated ? (
            <div className="p-8 sm:p-12 text-center space-y-6 flex-1 flex flex-col justify-center items-center">
              <div className="w-16 h-16 rounded-3xl bg-[#222222] border-2 border-[#FFCC00] text-[#FFCC00] flex items-center justify-center shadow-lg">
                <Lock className="w-8 h-8" />
              </div>

              <div className="space-y-1 max-w-sm">
                <h3 className="text-lg font-black text-white uppercase">Admin-Passwort erforderlich</h3>
                <p className="text-xs text-gray-400">
                  Dieser Bereich ist nur für Robin zugänglich. Bitte gib dein Admin-Passwort ein.
                </p>
              </div>

              <form onSubmit={handlePinSubmit} className="space-y-3 w-full max-w-xs">
                <input
                  type="password"
                  maxLength={40}
                  value={enteredPin}
                  onChange={(e) => {
                    setEnteredPin(e.target.value);
                    if (pinError) setPinError('');
                  }}
                  placeholder="Passwort eingeben..."
                  className="w-full px-4 py-3 bg-[#111111] border-2 border-[#444444] focus:border-[#FFCC00] rounded-2xl text-center font-mono text-base tracking-wider text-white outline-none"
                  autoFocus
                />

                {pinError && (
                  <div className="text-xs text-red-400 font-bold flex items-center justify-center gap-1.5 animate-shake">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{pinError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-[#FFCC00] hover:bg-yellow-300 text-[#222222] font-black text-xs uppercase tracking-wider cursor-pointer shadow active:scale-95 transition-all"
                >
                  Entsperren
                </button>
              </form>
            </div>
          ) : (
            /* AUTHENTICATED ADMIN CONTENT */
            <>
              {/* Toast Banner */}
              {successToast && (
                <div className="p-3 bg-[#49B65F] text-[#111111] text-xs font-black flex items-center justify-between px-5">
                  <span>{successToast}</span>
                  <button onClick={() => setSuccessToast(null)} className="font-mono text-sm">&times;</button>
                </div>
              )}

              {/* Quick Admin Actions */}
              <div className="p-4 bg-[#141416] border-b-2 border-[#333333] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-[#49B65F]" />
                  <span className="text-xs font-mono text-gray-300">
                    Admin-Status: <strong className="text-[#49B65F]">Eingeloggt als Robin</strong>
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setVouchers(getSubmittedVouchers())}
                    className="px-3 py-1.5 rounded-xl bg-[#222222] hover:bg-[#333] text-gray-300 text-xs font-mono flex items-center gap-1 cursor-pointer"
                    title="Aktualisieren"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Aktualisieren</span>
                  </button>

                  <button
                    onClick={handleQuickUnlockSelf}
                    className="px-3 py-1.5 rounded-xl bg-[#FFCC00] hover:bg-yellow-300 text-[#222222] font-black text-xs uppercase flex items-center gap-1.5 cursor-pointer shadow active:scale-95"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Für mich freischalten</span>
                  </button>
                </div>
              </div>

              {/* Submissions List */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Eingereichte Gutscheine ({vouchers.length})</span>
                  <span>Klicke auf &quot;Code kopieren&quot;, um ihn im Store einzulösen</span>
                </div>

                {vouchers.length === 0 ? (
                  <div className="p-8 rounded-2xl bg-[#202024] border-2 border-dashed border-[#333333] text-center space-y-2 text-gray-400">
                    <Gamepad2 className="w-8 h-8 mx-auto text-gray-500" />
                    <p className="text-sm font-bold text-gray-300">Noch keine Gutschein-Codes eingereicht.</p>
                    <p className="text-xs max-w-md mx-auto">
                      Sobald ein Nutzer im Freischalt-Fenster einen Code (Steam, Nintendo etc.) abschickt, landet er hier im Status <strong>&quot;Wartet auf Prüfung&quot;</strong>.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {vouchers.map((v) => (
                      <div
                        key={v.id}
                        className={`p-4 rounded-2xl border-2 transition-all space-y-3 ${
                          v.status === 'approved'
                            ? 'bg-[#18241C] border-[#49B65F]/60'
                            : v.status === 'rejected'
                            ? 'bg-[#241818] border-red-500/50'
                            : 'bg-[#222226] border-[#FFCC00] shadow-[0_0_15px_rgba(255,204,0,0.2)]'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded-md bg-[#111111] text-[11px] font-mono font-bold text-[#FFCC00] border border-[#444]">
                              {v.provider.toUpperCase()}
                            </span>
                            <span className="text-xs font-mono font-bold text-white">#{v.id}</span>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-black uppercase font-mono flex items-center gap-1 ${
                                v.status === 'approved'
                              ? 'bg-[#49B65F] text-[#222222]'
                              : v.status === 'rejected'
                              ? 'bg-red-500 text-white'
                              : 'bg-[#FFCC00] text-[#222222] animate-pulse'
                          }`}
                        >
                          {v.status === 'approved' ? (
                            <>
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Eingelöst &amp; Freigeschaltet</span>
                            </>
                          ) : v.status === 'rejected' ? (
                            <>
                              <XCircle className="w-3 h-3" />
                              <span>Abgelehnt (Ungültig)</span>
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3" />
                              <span>Wartet auf Robins Prüfung</span>
                            </>
                          )}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono text-gray-400">
                        {new Date(v.date).toLocaleString('de-DE')}
                      </span>
                    </div>

                    {/* The Voucher Code with Copy button */}
                    <div className="flex items-center justify-between bg-[#111111] px-4 py-3 rounded-xl border-2 border-[#333333]">
                      <div className="space-y-0.5">
                        <span className="text-[9px] uppercase font-mono text-gray-500 font-bold">Gutschein-Code:</span>
                        <div className="font-mono text-base font-black tracking-wider text-[#FFCC00] select-all">
                          {v.code}
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopy(v.code, v.id)}
                        className="px-3 py-1.5 rounded-xl bg-[#222222] hover:bg-[#333] text-xs font-mono text-[#FFCC00] border border-[#444] flex items-center gap-1.5 cursor-pointer active:scale-95"
                      >
                        {copiedId === v.id ? <Check className="w-4 h-4 text-[#49B65F]" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedId === v.id ? 'Kopiert!' : 'Code kopieren'}</span>
                      </button>
                    </div>

                    {/* Trainer / Contact Info */}
                    <div className="text-xs font-mono text-gray-300 flex items-center gap-2 bg-[#141416] p-2.5 rounded-xl">
                      <span className="text-gray-400">Trainer / Kontakt:</span>
                      <strong className="text-[#00D1FF]">{v.contact}</strong>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div className="text-[11px] font-mono text-gray-400">
                        {v.status === 'pending' ? '👉 Teste den Code im Store und klicke auf Freigeben:' : 'Aktion ändern:'}
                      </div>

                      <div className="flex items-center gap-2">
                        {v.status !== 'approved' && (
                          <button
                            onClick={() => handleApproveAndUnlock(v.id)}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#49B65F] to-[#2E8B57] hover:brightness-110 text-[#111111] font-black text-xs uppercase tracking-wide flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
                            title="Code war echt -> Meister-Pass für den Nutzer freischalten"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Code ist echt &bull; Freigeben!</span>
                          </button>
                        )}

                        {v.status !== 'rejected' && (
                          <button
                            onClick={() => handleReject(v.id)}
                            className="px-3 py-2 rounded-xl bg-[#331818] hover:bg-red-900 border border-red-500 text-red-300 font-bold text-xs flex items-center gap-1 cursor-pointer active:scale-95"
                            title="Code ist ungültig oder fake"
                          >
                            <XCircle className="w-3.5 h-3.5" />
                            <span>Ungültig</span>
                          </button>
                        )}

                        <button
                          onClick={() => handleDelete(v.id)}
                          className="p-2 rounded-xl bg-[#222222] hover:bg-black text-gray-500 hover:text-red-400 cursor-pointer"
                          title="Löschen"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
