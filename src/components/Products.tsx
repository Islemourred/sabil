"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n";
import {
  DevicePhoneMobileIcon as Phone,
  BuildingStorefrontIcon as Store,
  TruckIcon as Truck,
  CreditCardIcon as Card,
} from "@heroicons/react/24/outline";

const productItems = [
  {
    key: "sabilApp",
    icon: <Phone className="h-8 w-8" />,
    gradient: "from-sabil/20 to-emerald-500/10",
  },
  {
    key: "sabilStore",
    icon: <Store className="h-8 w-8" />,
    gradient: "from-sabil/20 to-teal-500/10",
  },
  {
    key: "sabilGo",
    icon: <Truck className="h-8 w-8" />,
    gradient: "from-sabil/20 to-cyan-500/10",
  },
  {
    key: "sabilPay",
    icon: <Card className="h-8 w-8" />,
    gradient: "from-sabil/20 to-green-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Products() {
  const { t } = useTranslations("products");

  return (
    <section id="products" className="relative py-20 lg:py-28">
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

        {/* Product Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {productItems.map((item) => (
            <motion.div
              key={item.key}
              variants={cardVariants}
              className="group card p-6 hover:border-sabil/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Icon with gradient background */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-sabil mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                {t(`${item.key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-sm text-silver dark:text-gray-400 leading-relaxed">
                {t(`${item.key}.description`)}
              </p>

              {/* Hover indicator */}
              <div className="mt-5 flex items-center gap-1 text-sabil opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg
                  className="h-4 w-4 rtl:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
