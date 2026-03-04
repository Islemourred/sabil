"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { useTranslations } from "@/lib/i18n";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

/* ── service definitions with category + icon color ── */
const servicesList = [
  { key: "ade", category: "bills", color: "#3B82F6", icon: "💧" },
  { key: "agentForm", category: "other", color: "#10B981", icon: "📝" },
  { key: "agents", category: "finance", color: "#8B5CF6", icon: "🔄" },
  { key: "atFactures", category: "telecom", color: "#06B6D4", icon: "📡" },
  { key: "cib", category: "finance", color: "#F59E0B", icon: "💳" },
  { key: "facilite", category: "finance", color: "#EF4444", icon: "🤝" },
  { key: "flexy", category: "telecom", color: "#10B981", icon: "📱" },
  { key: "carteCadeaux", category: "other", color: "#EC4899", icon: "🎁" },
  { key: "internet", category: "telecom", color: "#6366F1", icon: "🌐" },
  { key: "servicesShop", category: "other", color: "#F97316", icon: "🛒" },
  { key: "iptv", category: "telecom", color: "#14B8A6", icon: "📺" },
  { key: "sabilPos", category: "finance", color: "#00FF95", icon: "🏪" },
  { key: "seaal", category: "bills", color: "#0EA5E9", icon: "🚰" },
  { key: "sonelgaz", category: "bills", color: "#F97316", icon: "⚡" },
  { key: "timbresFiscaux", category: "bills", color: "#8B5CF6", icon: "📋" },
  { key: "vignetteAuto", category: "transport", color: "#EF4444", icon: "🚗" },
  { key: "eVoucher", category: "finance", color: "#10B981", icon: "🎟️" },
  { key: "zteBonus", category: "other", color: "#3B82F6", icon: "🎯" },
  { key: "zteScan", category: "other", color: "#6366F1", icon: "📷" },
  { key: "zteSignup", category: "other", color: "#14B8A6", icon: "✍️" },
  { key: "gestimmo", category: "bills", color: "#F59E0B", icon: "🏢" },
  { key: "seor", category: "bills", color: "#0EA5E9", icon: "💧" },
  { key: "sogral", category: "transport", color: "#8B5CF6", icon: "🚌" },
];

const categoryKeys = ["all", "telecom", "bills", "finance", "transport", "other"];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

export default function ServicesPage() {
  const { t } = useTranslations("servicesPage");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = useMemo(() => {
    return servicesList.filter((s) => {
      const matchesCategory =
        activeCategory === "all" || s.category === activeCategory;
      const name = t(`services.${s.key}.name`) as string;
      const desc = t(`services.${s.key}.desc`) as string;
      const matchesSearch =
        search === "" ||
        name.toLowerCase().includes(search.toLowerCase()) ||
        desc.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory, t]);

  return (
    <>
      <TopBar />
      <Header />

      <main className="min-h-screen pt-8 pb-20">
        {/* Hero header */}
        <section className="relative py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-sabil/[0.04] to-transparent dark:from-sabil/[0.06]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-dark dark:text-white tracking-tight mb-4">
                {t("title")}
              </h1>
              <p className="text-lg text-silver dark:text-gray-400 mb-10">
                {t("subtitle")}
              </p>

              {/* Search bar */}
              <div className="relative max-w-md mx-auto">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t("searchPlaceholder") as string}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-dark-light border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-sabil/40 focus:border-sabil transition-all duration-200 text-sm"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category tabs */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {categoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-sabil text-dark shadow-md shadow-sabil/20"
                    : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
                }`}
              >
                {t(`categories.${cat}`)}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Service cards grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.key}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    duration: 0.35,
                    delay: index * 0.03,
                    layout: { duration: 0.3 },
                  }}
                  className="group relative bg-white dark:bg-dark-light rounded-2xl border border-gray-100 dark:border-white/[0.06] p-6 cursor-pointer hover:border-sabil/30 hover:shadow-xl hover:shadow-sabil/5 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    {service.icon}
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-semibold text-dark dark:text-white mb-1.5 group-hover:text-sabil transition-colors duration-300">
                    {t(`services.${service.key}.name`)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-silver dark:text-gray-400 leading-relaxed line-clamp-2">
                    {t(`services.${service.key}.desc`)}
                  </p>

                  {/* Hover arrow */}
                  <div className="absolute top-5 end-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="h-4 w-4 text-sabil"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl mb-2">🔍</p>
              <p className="text-silver dark:text-gray-400">
                No services found
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
