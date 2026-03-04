"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n";

const partners = [
  { name: "Ooredoo", initials: "OO" },
  { name: "Algérie Télécom", initials: "AT" },
  { name: "Al Baraka Bank", initials: "AB" },
  { name: "SACOMI", initials: "SC" },
  { name: "Ooredoo", initials: "OO" },
  { name: "Algérie Télécom", initials: "AT" },
  { name: "Al Baraka Bank", initials: "AB" },
  { name: "SACOMI", initials: "SC" },
];

// Authentic Brand Logos (Responsive for Light/Dark)
const PartnerLogo = ({ index }: { index: number }) => {
  const logos = [
    // Visa
    <svg key="0" className="h-5 w-auto" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M49.6 0l-5.6 24.3h7.2L55.8 0h-6.2zm25.9 0l-9.1 24.3h5.9l1.6-4.5h8.3l.8 4.5h5.3L82.9 0H75.5zm-1 15.3l3-8.6 1.7 8.6h-4.7zM19.7 0L13.8 17 12.3 3.6c-.2-1.9-1.5-3.6-4.1-3.6H0v1.2c5.1 1.3 8.3 4.2 9.6 8.7L14.7 24.3h6.3L30.9 0h-11.2zm73.9 0h-5.9c-1.8 0-3.2 1.1-3.9 2.7L86.9 24.3h6.2l1.6-4.5h8.3l.8 4.5h5.3L102.9 0h-9.3z"/></svg>,
    // Mastercard
    <svg key="1" className="h-10 w-auto" viewBox="0 0 82 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M57 25c0-8-3.4-15.3-8.9-20.3-3.1-2.9-7-4.7-11.3-4.7-4.3 0-8.2 1.8-11.3 4.7C20 9.7 16.6 17 16.6 25s3.4 15.3 8.9 20.3c3.1 2.9 7 4.7 11.3 4.7 4.3 0 8.2-1.8 11.3-4.7 5.5-5 8.9-12.3 8.9-20.3z" opacity=".4"/><path d="M36.8 0c-13.8 0-25 11.2-25 25s11.2 25 25 25c4.3 0 8.2-1.8 11.3-4.7-5.5-5-8.9-12.3-8.9-20.3s3.4-15.3 8.9-20.3C45 1.8 41.1 0 36.8 0zm34 0c-4.3 0-8.2 1.8-11.3 4.7 5.5 5 8.9 12.3 8.9 20.3s-3.4 15.3-8.9 20.3c3.1 2.9 7 4.7 11.3 4.7 13.8 0 25-11.2 25-25s-11.2-25-25-25z"/></svg>,
    // Apple Pay
    <svg key="2" className="h-8 w-auto px-2" viewBox="0 0 100 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.9 14.8c-.1 3.9 3.2 5.8 3.3 5.9-.1.1-5.1 17.4-11.3 17.4-3.1 0-5.6-1.9-5.6-1.9s-2.6 1.9-5.1 1.9c-5.7 0-10.4-16.7-10.4-23.7 0-11 7.1-16.8 14-16.8 3.6 0 6.1 1.9 6.1 1.9s2.1-1.9 5.8-1.9c2.9 0 11.1 1.6 13.2 17.2zm-7.6-14.8c-.8.1-1.7.3-2.5.7-.8.4-1.5.9-2.1 1.6-.6.6-1.1 1.4-1.4 2.2-.3.9-.5 1.8-.4 2.8.9.1 1.8-.1 2.6-.4.8-.3 1.6-.7 2.2-1.3.6-.6 1.1-1.4 1.4-2.2.3-.9.4-1.8.3-2.7-.1-.2-.1-.5-.1-.7z"/><path d="M38 12h5v15h-5v-15zm9 5h5v10h-5v-10zm0-5h5v3h-5v-3zm9 5h5v10h-5v-10z"/></svg>,
    // Stripe
    <svg key="3" className="h-8 w-auto" viewBox="0 0 100 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M96 17.4c0-4.7-3.2-8.4-8.1-8.4-4.7 0-8 3.6-8 8.8 0 5.6 3.8 8.8 8.8 8.8 2.5 0 4.5-.6 6-1.6V20c-1.5.8-3.2 1.3-5.2 1.3-2.3 0-3.9-1-4.2-3.1h10.6c.1-.4.1-.6.1-.8zm-10.5-3c.2-2 1.7-2.9 3.6-2.9 2 0 3.2 1 3.4 3h-7zm-17 13.8V9.3h-5.4v1.8c-1-1.2-2.5-1.9-4.4-1.9-4.4 0-7.7 3.6-7.7 8.7 0 5.4 3.3 8.9 8.1 8.9 1.8 0 3.3-.7 4.3-2v1.4l5.1-1.2zm-7.3-11.3c2.3 0 3.9 1.9 3.9 4.3s-1.6 4.3-3.9 4.3c-2.3 0-3.9-1.9-3.9-4.3s1.6-4.3 3.9-4.3zm-17.6-7.8c-1.8 0-3 .7-3.9 1.6V1.3l-5.4 1.2v25.7l5.4-1.2v-10c1.1-2.2 3.8-3.3 5.9-3.3 4.5 0 7.3 2.7 7.3 7.3v8l5.4-1.2v-7.8c0-8.4-4.3-14.2-15-14.2zM15 9.3v10.5c0 6.2 3.1 7.9 8.3 7.9 2.1 0 4.1-.4 5.4-1.1V21c-1 .4-2.2.7-3.3.7-2.3 0-4.7-1-4.7-4.1V12.3h10v-5.2h-10V1.3L15 2.5v6.8H8.3v5.2h6.7z"/></svg>,
    // Amazon style
    <svg key="4" className="h-9 w-auto" viewBox="0 0 100 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 25c-5 0-8-3-8-8s3-8 8-8 8 3 8 8-3 8-8 8zm0-12c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4zm15-4h4v16h-4V9zm10 0h4v16h-4V9zm10 0h4c4 0 7 3 7 7s-3 7-7 7h-4V9zm4 10h3c2 0 3-1 3-3s-1-3-3-3h-3v6z"/><path d="M10 28c15 5 40 5 60 0-5 2-15 5-30 5-15 0-25-3-30-5z"/></svg>,
    // Ooredoo/Telecom
    <svg key="5" className="h-10 w-auto" viewBox="0 0 100 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="10"/><circle cx="50" cy="20" r="10"/><circle cx="80" cy="20" r="10"/></svg>
  ];
  return logos[index % logos.length];
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
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center text-gray-400 dark:text-white/40 hover:text-sabil transition-all duration-500 cursor-default"
            >
              <PartnerLogo index={index} />
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
