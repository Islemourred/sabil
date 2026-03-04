"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n";
import {
  CalendarDaysIcon as Calendar,
  ArrowLongRightIcon as ArrowRight,
} from "@heroicons/react/24/outline";
import { Newspaper, Car, Landmark } from "lucide-react";

const newsItems = [
  {
    key: "classifieds",
    icon: <Newspaper className="h-6 w-6" />,
    color: "from-sabil/20 to-emerald-500/10",
  },
  {
    key: "go",
    icon: <Car className="h-6 w-6" />,
    color: "from-sabil/20 to-teal-500/10",
  },
  {
    key: "albaraka",
    icon: <Landmark className="h-6 w-6" />,
    color: "from-sabil/20 to-cyan-500/10",
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

export function News() {
  const { t } = useTranslations("news");

  return (
    <section id="news" className="relative py-20 lg:py-28">
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
        </motion.div>

        {/* News Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.key}
              variants={cardVariants}
              className="group card overflow-hidden hover:border-sabil/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/20 dark:bg-white/10 flex items-center justify-center text-sabil backdrop-blur-sm">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-silver dark:text-gray-500 mb-3">
                  <Calendar className="h-3.5 w-3.5" />
                  <time>{t(`items.${item.key}.date`)}</time>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-dark dark:text-white mb-2 group-hover:text-sabil transition-colors duration-200">
                  {t(`items.${item.key}.title`)}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-silver dark:text-gray-400 leading-relaxed line-clamp-3">
                  {t(`items.${item.key}.excerpt`)}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-sabil hover:text-sabil-light transition-colors"
                >
                  <span>{t("readMore")} »</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-dark dark:text-white border border-gray-200 dark:border-white/10 rounded-xl hover:border-sabil/30 hover:text-sabil dark:hover:text-sabil transition-all duration-200"
          >
            <span>{t("viewAll")}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
