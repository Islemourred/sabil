"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useI18n, useTranslations } from "@/lib/i18n";
import { useAppDispatch } from "@/store/hooks";
import { setDownloadModalOpen } from "@/store/slices/uiSlice";
import { cn } from "@/lib/utils";
import {
  Bars3Icon as Menu,
  XMarkIcon as X,
  SunIcon as Sun,
  MoonIcon as Moon,
  ComputerDesktopIcon as Monitor,
  ChevronDownIcon as ChevronDown,
  ArrowDownTrayIcon as Download,
  GlobeAltIcon as Globe,
} from "@heroicons/react/24/outline";

const navLinks = [
  { key: "home", href: "/" },
  { key: "sabilApp", href: "#products" },
  { key: "sabilStore", href: "#products" },
  { key: "sabilGo", href: "#products" },
  { key: "sabilPay", href: "#products" },
  { key: "services", href: "/services" },
  { key: "contact", href: "#contact" },
];

const localeLabels: Record<string, string> = {
  fr: "FR",
  en: "EN",
  ar: "AR",
};

export function Header() {
  const dispatch = useAppDispatch();
  const { t } = useTranslations("nav");
  const { locale, setLocale, dir } = useI18n();
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node))
        setLangOpen(false);
      if (themeRef.current && !themeRef.current.contains(e.target as Node))
        setThemeOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const themeIcon =
    resolvedTheme === "dark" ? (
      <Moon className="h-5 w-5" />
    ) : (
      <Sun className="h-5 w-5" />
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-dark/95 backdrop-blur-lg shadow-sm border-b border-gray-100 dark:border-white/5"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Sabil Logo"
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
            <span className="text-xl font-medium tracking-wide text-[#1B2033] dark:text-white font-futura flex items-baseline" dir="ltr">
              S<span className="lowercase text-[1.25em] leading-none">a</span>BIL
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-sabil dark:hover:text-sabil transition-colors duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => {
                  setLangOpen(!langOpen);
                  setThemeOpen(false);
                }}
                className="flex items-center gap-1.5 px-2.5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-sabil dark:hover:text-sabil transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <Globe className="h-4 w-4" />
                <span>{localeLabels[locale]}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                      "absolute top-full mt-1 w-28 rounded-lg border border-gray-100 dark:border-white/10 bg-white dark:bg-dark-light shadow-lg overflow-hidden",
                      dir === "rtl" ? "start-0" : "end-0",
                    )}
                  >
                    {(["fr", "en", "ar"] as const).map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setLocale(loc);
                          setLangOpen(false);
                        }}
                        className={cn(
                          "w-full px-3 py-2 text-sm text-start hover:bg-gray-50 dark:hover:bg-white/5 transition-colors",
                          locale === loc
                            ? "text-sabil font-medium"
                            : "text-gray-600 dark:text-gray-300",
                        )}
                      >
                        {loc === "fr"
                          ? "Français"
                          : loc === "en"
                            ? "English"
                            : "العربية"}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <div ref={themeRef} className="relative">
              <button
                onClick={() => {
                  setThemeOpen(!themeOpen);
                  setLangOpen(false);
                }}
                className="flex items-center justify-center w-9 h-9 text-gray-600 dark:text-gray-300 hover:text-sabil dark:hover:text-sabil transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-white/5"
              >
                {themeIcon}
              </button>
              <AnimatePresence>
                {themeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                      "absolute top-full mt-1 w-32 rounded-lg border border-gray-100 dark:border-white/10 bg-white dark:bg-dark-light shadow-lg overflow-hidden",
                      dir === "rtl" ? "start-0" : "end-0",
                    )}
                  >
                    {[
                      { key: "light", icon: <Sun className="h-4 w-4" /> },
                      { key: "dark", icon: <Moon className="h-4 w-4" /> },
                      {
                        key: "system",
                        icon: <Monitor className="h-4 w-4" />,
                      },
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => {
                          setTheme(item.key);
                          setThemeOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center gap-2 px-3 py-2 text-sm text-start hover:bg-gray-50 dark:hover:bg-white/5 transition-colors",
                          resolvedTheme === item.key ||
                            (item.key === "system" && !resolvedTheme)
                            ? "text-sabil font-medium"
                            : "text-gray-600 dark:text-gray-300",
                        )}
                      >
                        {item.icon}
                        <span>{t(item.key)}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Download CTA */}
            <button
              onClick={() => dispatch(setDownloadModalOpen(true))}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-dark bg-sabil rounded-lg hover:bg-sabil-light transition-colors duration-200"
            >
              <Download className="h-4 w-4" />
              <span>{t("download")}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 text-gray-600 dark:text-gray-300 hover:text-sabil rounded-lg"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-gray-100 dark:border-white/5 bg-white dark:bg-dark-light overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-sabil hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  dispatch(setDownloadModalOpen(true));
                }}
                className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-dark bg-sabil rounded-lg hover:bg-sabil-light transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>{t("download")}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
