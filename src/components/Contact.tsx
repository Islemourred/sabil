"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n";
import {
  PaperAirplaneIcon as SendIcon,
  UserIcon as User,
  EnvelopeIcon as Mail,
  ChatBubbleLeftEllipsisIcon as Message,
} from "@heroicons/react/24/outline";
import { Handshake } from "lucide-react";

export function Contact() {
  const { t } = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card p-8 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-dark dark:text-gray-300 mb-2">
                  {t("name")}
                </label>
                <div className="relative">
                  <User className="absolute start-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full ps-10 pe-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-lighter border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sabil/30 focus:border-sabil transition-all"
                    placeholder={t("name")}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-dark dark:text-gray-300 mb-2">
                  {t("email")}
                </label>
                <div className="relative">
                  <Mail className="absolute start-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full ps-10 pe-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-lighter border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sabil/30 focus:border-sabil transition-all"
                    placeholder={t("email")}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-dark dark:text-gray-300 mb-2">
                  {t("message")}
                </label>
                <div className="relative">
                  <Message className="absolute start-3 top-4 h-5 w-5 text-gray-400" />
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full ps-10 pe-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-lighter border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sabil/30 focus:border-sabil transition-all resize-none"
                    placeholder={t("message")}
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-primary py-3 text-base gap-2"
              >
                <SendIcon className="h-5 w-5 rtl:-scale-x-100" />
                <span>{t("send")}</span>
              </button>
            </form>
          </motion.div>

          {/* Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div className="card p-8 bg-gradient-to-br from-sabil/5 to-transparent border-sabil/10 dark:border-sabil/10">
              <div className="w-14 h-14 rounded-2xl bg-sabil/10 flex items-center justify-center text-sabil mb-6">
                <Handshake className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">
                {t("partnerTitle")}
              </h3>
              <p className="text-silver dark:text-gray-400 leading-relaxed mb-6">
                {t("partnerDescription")}
              </p>
              <a href="#" className="btn-primary inline-flex">
                {t("partnerTitle")}
              </a>
            </div>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card p-5 text-center">
                <div className="w-10 h-10 rounded-xl bg-sabil/10 flex items-center justify-center text-sabil mx-auto mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-dark dark:text-white">
                  contact@sabil.app
                </p>
              </div>
              <div className="card p-5 text-center">
                <div className="w-10 h-10 rounded-xl bg-sabil/10 flex items-center justify-center text-sabil mx-auto mb-3">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-dark dark:text-white">
                  Algiers, Algeria
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
