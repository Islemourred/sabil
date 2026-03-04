"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { Send, UnlockKeyhole } from "lucide-react";

const featureItems = [
  {
    key: "recharge",
    icon: <ArrowsUpDownIcon className="h-7 w-7" />,
  },
  {
    key: "send",
    icon: <Send className="h-7 w-7" />,
  },
  {
    key: "access",
    icon: <UnlockKeyhole className="h-7 w-7" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export function Features() {
  const { t } = useTranslations("features");

  return (
    <section id="features" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {featureItems.map((item) => (
            <motion.div
              key={item.key}
              variants={cardVariants}
              className="group card p-8 hover:border-sabil/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-sabil/10 group-hover:bg-sabil/20 flex items-center justify-center text-sabil transition-colors duration-300 mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">
                {t(`items.${item.key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-silver dark:text-gray-400 leading-relaxed">
                {t(`items.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
