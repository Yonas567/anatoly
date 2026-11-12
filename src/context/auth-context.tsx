"use client";

import {
  findDemoUser,
  homePathForRole,
  type AuthSession,
} from "@/lib/demo-auth";
import { useRouter } from "@/i18n/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "security-services-demo-session";

interface AuthContextValue {
  session: AuthSession | null;
  isReady: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function readSession(): AuthSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
}

function writeSession(session: AuthSession | null) {
  if (typeof window === "undefined") return;
  if (session) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setSession(readSession());
    setIsReady(true);
  }, []);

  const signIn = useCallback(
    async (email: string, password: string) => {
      const user = findDemoUser(email, password);
      if (!user) return false;

      const next: AuthSession = {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          phone: user.phone,
          organization: user.organization,
          employeeNo: user.employeeNo,
        },
        signedInAt: new Date().toISOString(),
      };
      writeSession(next);
      setSession(next);
      router.push(homePathForRole(user.role));
      return true;
    },
    [router],
  );

  const signOut = useCallback(() => {
    writeSession(null);
    setSession(null);
    router.push("/signin");
  }, [router]);

  const value = useMemo(
    () => ({ session, isReady, signIn, signOut }),
    [session, isReady, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
