import React, { createContext, useContext, useState, useEffect } from 'react';
import { MembershipState, unlockFullMasterPass } from '../utils/membership';

export interface UserTrainerProfile {
  id: string;
  email: string;
  trainerName: string;
  caughtPokemon: number[];
  favorites: number[];
  team: any[];
  isMasterPass: boolean;
  unlockedVoucherCode?: string;
  savedCardsCount?: number;
  createdAt: string;
  updatedAt: string;
}

interface AccountRecord {
  profile: UserTrainerProfile;
  passwordHash: string;
}

interface AuthContextType {
  currentUser: { uid: string; email: string; displayName: string } | null;
  userProfile: UserTrainerProfile | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  signup: (email: string, pass: string, trainerName: string) => Promise<void>;
  logout: () => Promise<void>;
  syncLocalToCloud: (
    caught: number[],
    favs: number[],
    teamMembers: any[],
    memState: MembershipState
  ) => Promise<void>;
  exportSaveData: () => string;
  importSaveData: (jsonStr: string) => boolean;
}

const LOCAL_ACCOUNTS_KEY = 'pokemon_trainer_accounts_v2';
const ACTIVE_SESSION_KEY = 'pokemon_trainer_active_session_v2';

// Helper functions for durable trainer persistence
function getStoredAccounts(): Record<string, AccountRecord> {
  try {
    const raw = localStorage.getItem(LOCAL_ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveStoredAccounts(accs: Record<string, AccountRecord>) {
  try {
    localStorage.setItem(LOCAL_ACCOUNTS_KEY, JSON.stringify(accs));
  } catch {}
}

function hashPassword(pass: string): string {
  // Simple fast reversible hash for trainer accounts
  return btoa(encodeURIComponent(pass));
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{
  children: React.ReactNode;
  onCloudSyncLoaded?: (profile: UserTrainerProfile) => void;
}> = ({ children, onCloudSyncLoaded }) => {
  const [currentUser, setCurrentUser] = useState<{
    uid: string;
    email: string;
    displayName: string;
  } | null>(null);
  const [userProfile, setUserProfile] = useState<UserTrainerProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore active session on mount
  useEffect(() => {
    try {
      const activeEmail = localStorage.getItem(ACTIVE_SESSION_KEY);
      if (activeEmail) {
        const accs = getStoredAccounts();
        const found = accs[activeEmail.toLowerCase()];
        if (found) {
          setUserProfile(found.profile);
          setCurrentUser({
            uid: found.profile.id,
            email: found.profile.email,
            displayName: found.profile.trainerName,
          });
          if (onCloudSyncLoaded) {
            onCloudSyncLoaded(found.profile);
          }
        }
      }
    } catch (e) {
      console.warn('Session restore note:', e);
    } finally {
      setLoading(false);
    }
  }, [onCloudSyncLoaded]);

  const login = async (email: string, pass: string): Promise<void> => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = pass.trim();

    if (!cleanEmail || !cleanPass) {
      throw new Error('Bitte gib deine E-Mail und dein Passwort ein.');
    }

    const accs = getStoredAccounts();
    const existing = accs[cleanEmail];

    if (!existing) {
      throw new Error('Kein Trainer-Konto mit dieser E-Mail gefunden. Bitte erstelle zuerst ein Konto.');
    }

    if (existing.passwordHash !== hashPassword(cleanPass)) {
      throw new Error('Das eingegebene Passwort ist leider nicht korrekt.');
    }

    // Login successful
    localStorage.setItem(ACTIVE_SESSION_KEY, cleanEmail);
    setUserProfile(existing.profile);
    setCurrentUser({
      uid: existing.profile.id,
      email: existing.profile.email,
      displayName: existing.profile.trainerName,
    });
  };

  const signup = async (email: string, pass: string, trainerName: string): Promise<void> => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = pass.trim();
    const cleanName = trainerName.trim() || cleanEmail.split('@')[0];

    if (!cleanEmail || !cleanPass) {
      throw new Error('Bitte gib eine gültige E-Mail-Adresse und ein Passwort ein.');
    }

    if (cleanPass.length < 6) {
      throw new Error('Das Passwort muss mindestens 6 Zeichen lang sein.');
    }

    const accs = getStoredAccounts();
    if (accs[cleanEmail]) {
      throw new Error('Ein Trainer-Konto mit dieser E-Mail existiert bereits. Bitte melde dich an.');
    }

    // Read current local state to initialize profile with current trainer progress
    let initialCaught: number[] = [1, 4, 7, 25];
    let initialFavs: number[] = [25, 6, 150];
    let initialTeam: any[] = [];
    try {
      const c = localStorage.getItem('pokedex_caught');
      if (c) initialCaught = JSON.parse(c);
      const f = localStorage.getItem('pokedex_favorites');
      if (f) initialFavs = JSON.parse(f);
      const t = localStorage.getItem('pokedex_team');
      if (t) initialTeam = JSON.parse(t);
    } catch {}

    const generatedId = 'trainer_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
    const newProfile: UserTrainerProfile = {
      id: generatedId,
      email: cleanEmail,
      trainerName: cleanName,
      caughtPokemon: initialCaught,
      favorites: initialFavs,
      team: initialTeam,
      isMasterPass: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    accs[cleanEmail] = {
      profile: newProfile,
      passwordHash: hashPassword(cleanPass),
    };
    saveStoredAccounts(accs);
    localStorage.setItem(ACTIVE_SESSION_KEY, cleanEmail);

    setUserProfile(newProfile);
    setCurrentUser({
      uid: generatedId,
      email: cleanEmail,
      displayName: cleanName,
    });
  };

  const logout = async (): Promise<void> => {
    localStorage.removeItem(ACTIVE_SESSION_KEY);
    setCurrentUser(null);
    setUserProfile(null);
  };

  const syncLocalToCloud = async (
    caught: number[],
    favs: number[],
    teamMembers: any[],
    memState: MembershipState
  ): Promise<void> => {
    if (!currentUser) return;
    try {
      const updateData: Partial<UserTrainerProfile> = {
        id: currentUser.uid,
        email: currentUser.email,
        trainerName: userProfile?.trainerName || currentUser.displayName || 'Trainer',
        caughtPokemon: caught,
        favorites: favs,
        team: teamMembers,
        isMasterPass: memState.isPro,
        unlockedVoucherCode: memState.submittedVouchers?.[0]?.code || '',
        updatedAt: new Date().toISOString(),
      };

      const accs = getStoredAccounts();
      const existing = accs[currentUser.email.toLowerCase()];
      if (existing) {
        existing.profile = { ...existing.profile, ...updateData };
        saveStoredAccounts(accs);
      }
    } catch (err) {
      console.error('Error saving trainer data:', err);
    }
  };

  const exportSaveData = (): string => {
    const exportObj = {
      version: '2.0',
      profile: userProfile,
      caught: localStorage.getItem('pokedex_caught'),
      favs: localStorage.getItem('pokedex_favorites'),
      team: localStorage.getItem('pokedex_team'),
      vouchers: localStorage.getItem('pokedex_submitted_vouchers'),
      masterPass: localStorage.getItem('pokemon_pokedex_membership'),
      exportedAt: new Date().toISOString(),
    };
    return JSON.stringify(exportObj, null, 2);
  };

  const importSaveData = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.caught) localStorage.setItem('pokedex_caught', data.caught);
      if (data.favs) localStorage.setItem('pokedex_favorites', data.favs);
      if (data.team) localStorage.setItem('pokedex_team', data.team);
      if (data.vouchers) localStorage.setItem('pokedex_submitted_vouchers', data.vouchers);
      if (data.masterPass) localStorage.setItem('pokemon_pokedex_membership', data.masterPass);
      if (data.profile) {
        setUserProfile(data.profile);
        setCurrentUser({
          uid: data.profile.id,
          email: data.profile.email,
          displayName: data.profile.trainerName,
        });
        localStorage.setItem(ACTIVE_SESSION_KEY, data.profile.email.toLowerCase());
      }
      return true;
    } catch {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        login,
        signup,
        logout,
        syncLocalToCloud,
        exportSaveData,
        importSaveData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
