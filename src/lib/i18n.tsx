"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

type Locale = "fr" | "en" | "ar";
type Dir = "ltr" | "rtl";
type Messages = Record<string, unknown>;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: Dir;
  messages: Messages;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

const LOCALE_KEY = "sabil-locale";
const DEFAULT_LOCALE: Locale = "fr";

function getDirection(locale: Locale): Dir {
  return locale === "ar" ? "rtl" : "ltr";
}

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

async function loadMessages(locale: Locale): Promise<Messages> {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default || messages;
  } catch {
    console.warn(`Failed to load messages for locale: ${locale}`);
    return {};
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [messages, setMessages] = useState<Messages>({});
  const [isLoading, setIsLoading] = useState(true);

  const dir = useMemo(() => getDirection(locale), [locale]);

  const setLocale = useCallback(async (newLocale: Locale) => {
    setIsLoading(true);
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_KEY, newLocale);

    const newDir = getDirection(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newDir;

    const msgs = await loadMessages(newLocale);
    setMessages(msgs);
    setIsLoading(false);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(messages, key);
    },
    [messages],
  );

  useEffect(() => {
    const savedLocale =
      (typeof window !== "undefined" &&
        (localStorage.getItem(LOCALE_KEY) as Locale)) ||
      DEFAULT_LOCALE;

    const validLocales: Locale[] = ["fr", "en", "ar"];
    const initialLocale = validLocales.includes(savedLocale)
      ? savedLocale
      : DEFAULT_LOCALE;

    // Use a microtask to avoid synchronous setState in effect
    Promise.resolve().then(() => setLocale(initialLocale));
  }, [setLocale]);

  const value = useMemo(
    () => ({ locale, setLocale, t, dir, messages, isLoading }),
    [locale, setLocale, t, dir, messages, isLoading],
  );

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-dark">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-sabil border-t-transparent" />
          <span className="text-sm text-gray-400">Loading...</span>
        </div>
      </div>
    );
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

export function useTranslations(namespace: string) {
  const { t, messages } = useI18n();

  const scopedT = useCallback(
    (key: string): string => {
      return t(`${namespace}.${key}`);
    },
    [t, namespace],
  );

  const scopedMessages = useMemo(() => {
    return getNestedValue(messages, namespace);
  }, [messages, namespace]);

  return { t: scopedT, messages: scopedMessages };
}
