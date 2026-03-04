"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "@/lib/i18n";
import { ChevronUpIcon as ChevronUp } from "@heroicons/react/24/outline";

// Custom SVG social icons (Heroicons doesn't include brand icons)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  { name: "Facebook", icon: FacebookIcon, href: "#" },
  { name: "Twitter", icon: TwitterIcon, href: "#" },
  { name: "YouTube", icon: YouTubeIcon, href: "#" },
];

export function Footer() {
  const { t } = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: t("links.products"),
      items: [
        { name: t("links.sabilApp"), href: "#products" },
        { name: t("links.sabilStore"), href: "#products" },
        { name: t("links.sabilGo"), href: "#products" },
        { name: t("links.sabilPay"), href: "#products" },
      ],
    },
    {
      title: t("links.company"),
      items: [
        { name: t("links.about"), href: "#" },
        { name: t("links.careers"), href: "#" },
        { name: t("links.news"), href: "#" },
        { name: t("links.contact"), href: "#contact" },
      ],
    },
    {
      title: t("links.legal"),
      items: [
        { name: t("links.privacy"), href: "#" },
        { name: t("links.terms"), href: "#" },
        { name: t("links.cookies"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-dark border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Logo + Description */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Sabil Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-2xl font-medium tracking-wide text-white font-futura flex items-baseline" dir="ltr">
                S<span className="lowercase text-[1.25em] leading-none">a</span>BIL
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t("description")}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-sabil/10 border border-white/5 hover:border-sabil/20 flex items-center justify-center text-gray-400 hover:text-sabil transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-5">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-sabil transition-colors text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                {t("newsletter.title")}
              </h4>
              <p className="text-gray-400 text-sm">
                {t("newsletter.subtitle")}
              </p>
            </div>
            <form className="relative max-w-md group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-sabil/50 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-sabil hover:bg-sabil-light text-dark font-semibold text-xs px-4 rounded-lg transition-colors"
              >
                {t("newsletter.button")}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
          <p className="text-sm text-gray-500 order-2 sm:order-1">
            {t("copyright")}
          </p>
          
          <div className="flex items-center gap-8 order-1 sm:order-2">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-sabil/10 flex items-center justify-center transition-colors">
                <ChevronUp className="h-4 w-4 text-gray-400 group-hover:text-sabil" />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-sabil transition-colors">
                {t("backToTop")}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
