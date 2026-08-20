/**
 * Pokédex Master-Pass & Membership Management
 * Supports:
 * - Free tier: Gen 1-3, 1 daily pack, locked Quiz, Rotom AI, and Camera Scanner
 * - Referral / Community Pass: Unlocked Rotom AI, unlocked Quiz, 3 daily packs (Scanner & Gen 4-9 remain locked)
 * - Full Master Pass (Voucher Code): Everything unlocked (All Gen 1-9, Rotom AI, Quiz, Camera Scanner, Unlimited Packs)
 */

export type PassTier = 'free' | 'community' | 'master';

export interface MembershipState {
  tier: PassTier; // 'free' | 'community' | 'master'
  isPro: boolean; // true if master tier
  unlockedAt?: number;
  lastDailyPackDate?: string;
  dailyPacksCount: number;
  referralsSentCount: number; // tracks invitations sent (goal: 5)
  submittedVouchers: Array<{
    code: string;
    type: string;
    date: number;
    status: 'approved' | 'pending';
  }>;
}

const STORAGE_KEY = 'pokedex_membership_v2';

export function getTodayDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function loadMembershipState(): MembershipState {
  if (typeof window === 'undefined') {
    return {
      tier: 'free',
      isPro: false,
      dailyPacksCount: 0,
      referralsSentCount: 0,
      submittedVouchers: [],
    };
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      const today = getTodayDateString();
      if (parsed.lastDailyPackDate !== today) {
        parsed.dailyPacksCount = 0;
      }
      return {
        tier: parsed.tier || (parsed.isPro ? 'master' : 'free'),
        isPro: parsed.tier === 'master' || !!parsed.isPro,
        unlockedAt: parsed.unlockedAt,
        lastDailyPackDate: parsed.lastDailyPackDate,
        dailyPacksCount: parsed.dailyPacksCount || 0,
        referralsSentCount: parsed.referralsSentCount || 0,
        submittedVouchers: parsed.submittedVouchers || [],
      };
    }
  } catch {}

  return {
    tier: 'free',
    isPro: false,
    dailyPacksCount: 0,
    referralsSentCount: 0,
    submittedVouchers: [],
  };
}

export function saveMembershipState(state: MembershipState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export const MAX_FREE_GEN = 3;
export const MAX_FREE_POKEMON_ID = 386; // End of Gen 3 (Deoxys)

export function getMaxDailyPacks(tier: PassTier): number {
  if (tier === 'master') return 9999;
  if (tier === 'community') return 3; // 3 packs per day for community referral tier
  return 1; // 1 pack for free
}

export function isGenRestricted(genId: number, state: MembershipState): boolean {
  if (state.tier === 'master' || state.isPro) return false;
  return genId > MAX_FREE_GEN;
}

export function isPokemonRestricted(pokemonId: number, generation: number | undefined, state: MembershipState): boolean {
  if (state.tier === 'master' || state.isPro) return false;
  if (generation && generation > MAX_FREE_GEN) return true;
  return pokemonId > MAX_FREE_POKEMON_ID;
}

export function isFeatureUnlocked(feature: 'quiz' | 'rotom' | 'scanner' | 'gen4_9', state: MembershipState): boolean {
  if (state.tier === 'master' || state.isPro) return true;

  if (state.tier === 'community') {
    if (feature === 'quiz' || feature === 'rotom') return true;
    if (feature === 'scanner' || feature === 'gen4_9') return false;
  }

  return false;
}

export function unlockFullMasterPass(state: MembershipState, voucherCode?: string, voucherType: string = 'steam'): MembershipState {
  const next: MembershipState = {
    ...state,
    tier: 'master',
    isPro: true,
    unlockedAt: Date.now(),
  };

  if (voucherCode) {
    next.submittedVouchers = [
      ...(state.submittedVouchers || []),
      {
        code: voucherCode,
        type: voucherType,
        date: Date.now(),
        status: 'approved',
      },
    ];
  }

  saveMembershipState(next);
  return next;
}

export function unlockCommunityPass(state: MembershipState): MembershipState {
  const next: MembershipState = {
    ...state,
    tier: state.tier === 'master' ? 'master' : 'community',
    isPro: state.tier === 'master',
    referralsSentCount: 5,
  };
  saveMembershipState(next);
  return next;
}

export function recordReferralShare(state: MembershipState): { nextState: MembershipState; unlockedNow: boolean } {
  const count = (state.referralsSentCount || 0) + 1;
  const unlockedNow = count >= 5 && state.tier === 'free';
  const next: MembershipState = {
    ...state,
    referralsSentCount: count,
    tier: count >= 5 && state.tier === 'free' ? 'community' : state.tier,
  };
  saveMembershipState(next);
  return { nextState: next, unlockedNow };
}

export function useDailyBoosterPack(state: MembershipState): MembershipState {
  const today = getTodayDateString();
  const currentCount = state.lastDailyPackDate === today ? state.dailyPacksCount : 0;
  const next: MembershipState = {
    ...state,
    lastDailyPackDate: today,
    dailyPacksCount: currentCount + 1,
  };
  saveMembershipState(next);
  return next;
}

export function canOpenBoosterPack(state: MembershipState): boolean {
  if (state.tier === 'master' || state.isPro) return true;
  const maxAllowed = getMaxDailyPacks(state.tier);
  const today = getTodayDateString();
  if (state.lastDailyPackDate === today && state.dailyPacksCount >= maxAllowed) {
    return false;
  }
  return true;
}

// Backward compatibility helper
export function purchaseMasterPass(state: MembershipState): MembershipState {
  return unlockFullMasterPass(state);
}
