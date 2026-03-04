"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n";

const partners = [
  "Visa", "Mastercard", "PayPal", "Google Pay", "Apple Pay", "Stripe", "Amazon Pay", "Samsung Pay",
  "Visa", "Mastercard", "PayPal", "Google Pay", "Apple Pay", "Stripe", "Amazon Pay", "Samsung Pay",
];

const PartnerLogo = ({ name }: { name: string }) => {
  switch (name) {
    case "Visa":
      return (
        <svg className="h-8 w-auto" viewBox="0 0 1000 324" fill="currentColor">
          <path d="M431.7 0L364.5 224.2 326.4 4.8C323 -8.6 312-0.4 299 0H209.5L207.4 10C254.2 21 295.4 40 328.8 66L417.6 324H479.8L554 0H431.7zM180 324L243.9 0H169.6L105.7 324H180zM730.3 0C705 0 687.5 12 678 32.8L564 324H626.3L638.4 290H714.4L721.6 324H776L728.2 0H730.3zM653.9 243.8L685.4 82.4 704 243.8H653.9zM873.4 78C873.4 60 886 50 908 50 922 50 940 56 954 66L966 8C948 0 926 0 910 0 852 0 812 32 812 78C812 150 908 156 908 192C908 212 892 224 868 224 848 224 824 214 808 202L794 262C814 274 840 280 868 280C930 280 970 248 970 198C970 120 873.4 118 873.4 78z"/>
        </svg>
      );
    case "Mastercard":
      return (
        <div className="flex items-center gap-1">
          <svg className="h-10 w-auto" viewBox="0 0 152 108" fill="none">
            <circle cx="48" cy="54" r="48" fill="#EB001B" opacity="0.8"/>
            <circle cx="104" cy="54" r="48" fill="#F79E1B" opacity="0.8"/>
            <path d="M76 18.2c11.3 9.4 18.5 23.5 18.5 39.3s-7.2 29.9-18.5 39.3C64.7 87.4 57.5 73.3 57.5 57.5S64.7 27.6 76 18.2z" fill="#FF5F00" opacity="0.9"/>
          </svg>
        </div>
      );
    case "PayPal":
      return (
        <span className="text-2xl font-bold tracking-tight">
          <span style={{ fontStyle: "italic" }}>Pay</span><span className="text-sabil" style={{ fontStyle: "italic" }}>Pal</span>
        </span>
      );
    case "Google Pay":
      return (
        <div className="flex items-center gap-1">
          <span className="text-xl font-medium">
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC04" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
          </span>
          <span className="text-xl font-medium ml-1">Pay</span>
        </div>
      );
    case "Apple Pay":
      return (
        <div className="flex items-center gap-1.5">
          <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          <span className="text-xl font-medium">Pay</span>
        </div>
      );
    case "Stripe":
      return (
        <span className="text-2xl font-bold tracking-tight">stripe</span>
      );
    case "Amazon Pay":
      return (
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold tracking-tight">amazon</span>
          <span className="text-lg font-light text-sabil">pay</span>
        </div>
      );
    case "Samsung Pay":
      return (
        <div className="flex items-center gap-1">
          <span className="text-lg font-medium tracking-widest uppercase">Samsung</span>
          <span className="text-lg font-light">Pay</span>
        </div>
      );
    default:
      return <span className="text-xl font-bold">{name}</span>;
  }
};

export function Partners() {
  const { t } = useTranslations("partners");

  const totalWidth = 250 * partners.length;

  return (
    <section id="partners" className="relative py-20 lg:py-28 overflow-hidden bg-white dark:bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </motion.div>
      </div>

      {/* Infinite Scroll Container — REAL LOGOS */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white dark:from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white dark:from-dark to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos */}
        <motion.div
          animate={{ x: [0, -totalWidth / 2] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex items-center gap-16 md:gap-24 py-8"
        >
          {[...partners, ...partners].map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center text-gray-400 dark:text-white/40 hover:text-sabil transition-all duration-500 cursor-default"
            >
              <PartnerLogo name={name} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary">
            {t("cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
