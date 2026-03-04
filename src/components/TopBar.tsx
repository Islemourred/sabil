"use client";

import { useTranslations } from "@/lib/i18n";
import {
  MagnifyingGlassIcon as Search,
  EnvelopeIcon as Mail,
} from "@heroicons/react/24/outline";

export function TopBar() {
  const { t } = useTranslations("topBar");

  const leftLinks = [
    { key: "howToPay", href: "#" },
    { key: "openStore", href: "#" },
    { key: "partnerWithUs", href: "#" },
    { key: "terms", href: "#" },
    { key: "sabilPro", href: "#" },
  ];

  return (
    <div className="hidden bg-dark-light text-white/60 text-xs py-2 lg:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left links */}
          <div className="flex items-center gap-1">
            {leftLinks.map((link, index) => (
              <span key={link.key} className="flex items-center">
                <a
                  href={link.href}
                  className="hover:text-sabil transition-colors duration-200 px-2"
                >
                  {t(link.key)}
                </a>
                {index < leftLinks.length - 1 && (
                  <span className="text-white/20">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Right links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-1.5 hover:text-sabil transition-colors duration-200"
            >
              <Search className="h-3.5 w-3.5" />
              <span>{t("help")}</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1.5 hover:text-sabil transition-colors duration-200"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{t("contactUs")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
