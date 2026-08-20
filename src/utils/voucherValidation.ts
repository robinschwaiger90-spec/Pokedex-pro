/**
 * Voucher Format Validator & Two-Step Verification System
 * Flow:
 * 1. User submits voucher code (Steam, Nintendo, Google Play, etc.) with format validation.
 * 2. Status is set to 'pending' (Ticket is generated). The app is NOT unlocked yet.
 * 3. Code is forwarded to Robin's Admin Review Station.
 * 4. Robin tests the code on Steam / Nintendo.
 * 5. Robin clicks "Bestätigen & Freischalten" in the Admin panel.
 * 6. User's app detects the approval and unlocks the Master Pass!
 */

export type VoucherProvider = 'steam' | 'nintendo' | 'google_play' | 'playstation' | 'roblox' | 'vip_code' | 'other';

export interface VoucherFormatRule {
  provider: VoucherProvider;
  name: string;
  placeholder: string;
  regex: RegExp;
  descriptionDe: string;
  descriptionEn: string;
  example: string;
}

export const VOUCHER_RULES: Record<VoucherProvider, VoucherFormatRule> = {
  steam: {
    provider: 'steam',
    name: 'Steam Guthaben',
    placeholder: 'XXXXX-XXXXX-XXXXX',
    regex: /^([A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}|[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}|[A-Z0-9]{15}|[A-Z0-9]{25})$/i,
    descriptionDe: 'Steam-Codes bestehen aus 15 oder 25 Zeichen in 5er-Blöcken (z.B. AAAAA-BBBBB-CCCCC).',
    descriptionEn: 'Steam codes consist of 15 or 25 characters in 5-character blocks.',
    example: 'A1B2C-D3E4F-G5H6J',
  },
  nintendo: {
    provider: 'nintendo',
    name: 'Nintendo eShop',
    placeholder: 'B0XXXXXXXXXXXXXX (16 Zeichen)',
    regex: /^([A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}|[A-Z0-9]{16})$/i,
    descriptionDe: 'Nintendo eShop Codes haben genau 16 Zeichen (z.B. B0XX-XXXX-XXXX-XXXX).',
    descriptionEn: 'Nintendo eShop codes are exactly 16 alphanumeric characters.',
    example: 'B0X4-8K92-LM19-P021',
  },
  google_play: {
    provider: 'google_play',
    name: 'Google Play',
    placeholder: 'XXXX-XXXX-XXXX-XXXX-XXXX',
    regex: /^([A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}(-[A-Z0-9]{4})?|[A-Z0-9]{16,20})$/i,
    descriptionDe: 'Google Play Codes bestehen aus 16 bis 20 Zeichen (oft in 4er-Blöcken getrennt).',
    descriptionEn: 'Google Play codes consist of 16 to 20 alphanumeric characters.',
    example: 'GPLY-4921-8842-9901',
  },
  playstation: {
    provider: 'playstation',
    name: 'PlayStation Network',
    placeholder: 'XXXX-XXXX-XXXX (12 Zeichen)',
    regex: /^([A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}|[A-Z0-9]{12})$/i,
    descriptionDe: 'PlayStation Network Codes bestehen aus 12 Zeichen in 4er-Blöcken.',
    descriptionEn: 'PlayStation Network codes consist of 12 alphanumeric characters in 3 blocks.',
    example: 'PSN1-4829-AB44',
  },
  roblox: {
    provider: 'roblox',
    name: 'Roblox Karte',
    placeholder: 'XXXXXXXXXX (10-16 Ziffern)',
    regex: /^([A-Z0-9]{3,5}-[A-Z0-9]{3,5}-[A-Z0-9]{3,5}|[A-Z0-9]{10,16})$/i,
    descriptionDe: 'Roblox Geschenkkarten bestehen aus 10 bis 16 Zeichen.',
    descriptionEn: 'Roblox gift card codes consist of 10 to 16 characters.',
    example: 'RBLX-9942-8819',
  },
  vip_code: {
    provider: 'vip_code',
    name: 'VIP Freischalt-Code',
    placeholder: 'XXXX-XXXX-XXXX',
    regex: /^[A-Z0-9_-]{4,24}$/i,
    descriptionDe: 'Persönlicher VIP-Code von Robin zur sofortigen Freischaltung.',
    descriptionEn: 'Personal VIP unlock code provided directly by Robin.',
    example: 'XXXX-XXXX-XXXX',
  },
  other: {
    provider: 'other',
    name: 'Sonstiger Gutschein',
    placeholder: 'Gutschein-Code eingeben',
    regex: /^[A-Z0-9_-]{6,32}$/i,
    descriptionDe: 'Beliebiger Geschenkkarten-Code (mindestens 6 Zeichen).',
    descriptionEn: 'Any gift card code (at least 6 characters).',
    example: 'CARD-1234-5678',
  },
};

/**
 * Secret VIP Master Codes that ALWAYS unlock instantly (Robin's Master keys)
 */
export const INSTANT_VIP_CODES = [
  'MEISTER-ROBIN-2025',
  'POKE-VIP-MASTER',
  'ROTOM-UNLIMITED-DEX',
  'PIKACHU-LEGEND-PASS',
  'MEISTER-PASS-FREE',
  'POKEDEX-PRO-UNLOCKED',
];

/**
 * Secret Admin Password for Robin's Prüfstelle
 */
export const ROBIN_ADMIN_PIN = '18.04.2011Robi';

export interface ValidationResult {
  isValid: boolean;
  isInstantVip: boolean;
  normalizedCode: string;
  errorMessage?: string;
}

export function validateVoucherCode(code: string, provider: VoucherProvider): ValidationResult {
  const clean = code.trim().toUpperCase().replace(/\s+/g, '');

  if (!clean || clean.length < 4) {
    return {
      isValid: false,
      isInstantVip: false,
      normalizedCode: clean,
      errorMessage: 'Bitte gib mindestens 4 Zeichen ein.',
    };
  }

  // Check if it's an Instant VIP / Robin Master Code
  if (INSTANT_VIP_CODES.some((vip) => vip === clean || clean === vip.replace(/-/g, ''))) {
    return {
      isValid: true,
      isInstantVip: true,
      normalizedCode: clean,
    };
  }

  // If user selected VIP Code provider and it wasn't matched above
  if (provider === 'vip_code') {
    return {
      isValid: false,
      isInstantVip: false,
      normalizedCode: clean,
      errorMessage: 'Dieser VIP-Code ist ungültig. Bitte frage Robin nach einem gültigen VIP-Code.',
    };
  }

  // Validate format against provider rules
  const rule = VOUCHER_RULES[provider] || VOUCHER_RULES.other;
  const matches = rule.regex.test(clean);

  if (!matches) {
    return {
      isValid: false,
      isInstantVip: false,
      normalizedCode: clean,
      errorMessage: `Ungültiges Format für ${rule.name}! ${rule.descriptionDe} Beispiel: ${rule.example}`,
    };
  }

  return {
    isValid: true,
    isInstantVip: false,
    normalizedCode: clean,
  };
}

export interface SubmittedVoucherRecord {
  id: string;
  code: string;
  provider: VoucherProvider;
  contact: string;
  date: number;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  approvedDate?: number;
}

const VOUCHER_STORAGE_KEY = 'pokedex_submitted_vouchers_list';
const USER_PENDING_TICKET_KEY = 'pokedex_user_active_voucher_ticket';

export function getSubmittedVouchers(): SubmittedVoucherRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(VOUCHER_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveSubmittedVouchers(records: SubmittedVoucherRecord[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(VOUCHER_STORAGE_KEY, JSON.stringify(records));
  } catch {}
}

export function addSubmittedVoucher(code: string, provider: VoucherProvider, contact: string): SubmittedVoucherRecord {
  const newRecord: SubmittedVoucherRecord = {
    id: `TICKET-${Math.floor(100000 + Math.random() * 900000)}`,
    code: code.trim().toUpperCase(),
    provider,
    contact: contact.trim() || 'Unbekannter Trainer',
    date: Date.now(),
    status: 'pending',
  };

  const current = getSubmittedVouchers();
  saveSubmittedVouchers([newRecord, ...current]);
  saveUserActiveTicket(newRecord);

  return newRecord;
}

export function getUserActiveTicket(): SubmittedVoucherRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const ticketId = localStorage.getItem(USER_PENDING_TICKET_KEY);
    if (!ticketId) return null;
    const all = getSubmittedVouchers();
    return all.find((r) => r.id === ticketId) || null;
  } catch {
    return null;
  }
}

export function saveUserActiveTicket(record: SubmittedVoucherRecord): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(USER_PENDING_TICKET_KEY, record.id);
  } catch {}
}

export function clearUserActiveTicket(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(USER_PENDING_TICKET_KEY);
  } catch {}
}

export function approveVoucherTicket(ticketId: string): SubmittedVoucherRecord | null {
  const all = getSubmittedVouchers();
  let approvedRecord: SubmittedVoucherRecord | null = null;
  const updated = all.map((item) => {
    if (item.id === ticketId) {
      approvedRecord = { ...item, status: 'approved' as const, approvedDate: Date.now() };
      return approvedRecord;
    }
    return item;
  });
  saveSubmittedVouchers(updated);
  return approvedRecord;
}

export function rejectVoucherTicket(ticketId: string, reason?: string): SubmittedVoucherRecord | null {
  const all = getSubmittedVouchers();
  let rejectedRecord: SubmittedVoucherRecord | null = null;
  const updated = all.map((item) => {
    if (item.id === ticketId) {
      rejectedRecord = { ...item, status: 'rejected' as const, rejectionReason: reason || 'Code ungültig oder bereits eingelöst' };
      return rejectedRecord;
    }
    return item;
  });
  saveSubmittedVouchers(updated);
  return rejectedRecord;
}
