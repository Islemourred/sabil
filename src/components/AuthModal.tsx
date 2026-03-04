"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XMarkIcon as X } from "@heroicons/react/24/outline";
import { useTranslations } from "@/lib/i18n";
import { useEffect, useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export function AuthModal({ isOpen, onClose, serviceName }: AuthModalProps) {
  const { t } = useTranslations("authModal");
  const [country, setCountry] = useState("algeria");
  const [phone, setPhone] = useState("");

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white dark:bg-dark-light rounded-2xl border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Green accent line */}
            <div className="h-1 bg-gradient-to-r from-sabil via-sabil-light to-sabil" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 end-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Sabil"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold text-dark dark:text-white">
                    {t("title")}
                  </h3>
                  {serviceName && (
                    <p className="text-xs text-sabil font-medium">{serviceName}</p>
                  )}
                </div>
              </div>

              {/* Country select */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  {t("country")}
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark border border-gray-200 dark:border-white/10 text-dark dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sabil/40 focus:border-sabil transition-all duration-200 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "16px",
                  }}
                >
                  <option value="algeria">{t("algeria")}</option>
                  <option value="france">{t("france")}</option>
                </select>
              </div>

              {/* Phone number */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  {t("phoneNumber")}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("phonePlaceholder") as string}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark border border-gray-200 dark:border-white/10 text-dark dark:text-white placeholder-gray-400 dark:placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-sabil/40 focus:border-sabil transition-all duration-200"
                />
              </div>

              {/* Submit */}
              <button className="w-full py-3.5 rounded-xl bg-sabil hover:bg-sabil-light text-dark font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-sabil/25 active:scale-[0.98]">
                {t("sendCode")}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
