"use client";

import { useState, useMemo, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";
import { useTranslations } from "@/lib/i18n";
import {
  MagnifyingGlassIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  TvIcon,
  ShoppingCartIcon,
  TruckIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  WifiIcon,
  BoltIcon,
  GiftIcon,
  TicketIcon,
  QrCodeIcon,
  IdentificationIcon,
  UserPlusIcon,
  BuildingLibraryIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

/* ── service definitions with category + icon color ── */
interface ServiceDef {
  key: string;
  category: string;
  color: string;
  icon: ReactNode;
}

const servicesList: ServiceDef[] = [
  {
    key: "ade",
    category: "bills",
    color: "#3B82F6",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2.25c-.74 1.12-5.25 7.9-5.25 11.25a5.25 5.25 0 0010.5 0c0-3.35-4.51-10.13-5.25-11.25z"
        />
      </svg>
    ),
  },
  {
    key: "agentForm",
    category: "other",
    color: "#10B981",
    icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
  },
  {
    key: "agents",
    category: "finance",
    color: "#8B5CF6",
    icon: <UserGroupIcon className="h-6 w-6" />,
  },
  {
    key: "atFactures",
    category: "telecom",
    color: "#06B6D4",
    icon: <SignalIcon className="h-6 w-6" />,
  },
  {
    key: "cib",
    category: "finance",
    color: "#F59E0B",
    icon: <CreditCardIcon className="h-6 w-6" />,
  },
  {
    key: "facilite",
    category: "finance",
    color: "#EF4444",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    key: "flexy",
    category: "telecom",
    color: "#10B981",
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
  },
  {
    key: "carteCadeaux",
    category: "other",
    color: "#EC4899",
    icon: <GiftIcon className="h-6 w-6" />,
  },
  {
    key: "internet",
    category: "telecom",
    color: "#6366F1",
    icon: <GlobeAltIcon className="h-6 w-6" />,
  },
  {
    key: "servicesShop",
    category: "other",
    color: "#F97316",
    icon: <ShoppingCartIcon className="h-6 w-6" />,
  },
  {
    key: "iptv",
    category: "telecom",
    color: "#14B8A6",
    icon: <TvIcon className="h-6 w-6" />,
  },
  {
    key: "sabilPos",
    category: "finance",
    color: "#00FF95",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72"
        />
      </svg>
    ),
  },
  {
    key: "seaal",
    category: "bills",
    color: "#0EA5E9",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
  {
    key: "sonelgaz",
    category: "bills",
    color: "#F97316",
    icon: <BoltIcon className="h-6 w-6" />,
  },
  {
    key: "timbresFiscaux",
    category: "bills",
    color: "#8B5CF6",
    icon: <DocumentTextIcon className="h-6 w-6" />,
  },
  {
    key: "vignetteAuto",
    category: "transport",
    color: "#EF4444",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM3 11V9l2.5-5h13l2.5 5v2M3 11h18v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z"
        />
      </svg>
    ),
  },
  {
    key: "eVoucher",
    category: "finance",
    color: "#10B981",
    icon: <TicketIcon className="h-6 w-6" />,
  },
  {
    key: "zteBonus",
    category: "other",
    color: "#3B82F6",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
  },
  {
    key: "zteScan",
    category: "other",
    color: "#6366F1",
    icon: <QrCodeIcon className="h-6 w-6" />,
  },
  {
    key: "zteSignup",
    category: "other",
    color: "#14B8A6",
    icon: <UserPlusIcon className="h-6 w-6" />,
  },
  {
    key: "gestimmo",
    category: "bills",
    color: "#F59E0B",
    icon: <BuildingOfficeIcon className="h-6 w-6" />,
  },
  {
    key: "seor",
    category: "bills",
    color: "#0EA5E9",
    icon: <BuildingLibraryIcon className="h-6 w-6" />,
  },
  {
    key: "sogral",
    category: "transport",
    color: "#8B5CF6",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8a3 3 0 013-3h12a3 3 0 013 3v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm0 4h18M8 18v2m8-2v2M8 8h.01M16 8h.01"
        />
      </svg>
    ),
  },
];

const categoryKeys = [
  "all",
  "telecom",
  "bills",
  "finance",
  "transport",
  "other",
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

export default function ServicesPage() {
  const { t } = useTranslations("servicesPage");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [authOpen, setAuthOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

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
      <Header />

      <main className="min-h-screen pb-20">
        {/* Hero header */}
        <section className="relative py-8 lg:py-10 overflow-hidden">
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
                  onClick={() => {
                    setSelectedService(
                      t(`services.${service.key}.name`) as string,
                    );
                    setAuthOpen(true);
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${service.color}15`,
                      color: service.color,
                    }}
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

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        serviceName={selectedService}
      />
    </>
  );
}
