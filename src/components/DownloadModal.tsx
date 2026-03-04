"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XMarkIcon as X } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setDownloadModalOpen } from "@/store/slices/uiSlice";
import { useTranslations } from "@/lib/i18n";
import { useEffect } from "react";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.ovresko.sabil";
const APP_STORE_URL = "https://apps.apple.com/dz/app/sabil/id6751124161";

export function DownloadModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.downloadModalOpen);
  const { t } = useTranslations("downloadModal");

  const close = () => dispatch(setDownloadModalOpen(false));

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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
            onClick={close}
            className="absolute inset-0 bg-dark/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-dark-light border border-white/10 p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={close}
              className="absolute right-4 top-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="SaBIL Logo"
                    width={40}
                    height={40}
                    className="rounded-xl"
                  />
                  <h3 className="text-2xl font-medium tracking-wide text-white font-futura flex items-baseline" dir="ltr">
                    S<span className="lowercase text-[1.25em] leading-none">a</span>BIL
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  {t("subtitle")}
                </p>
              </div>

              <div className="grid gap-4 pt-4">
                {/* Play Store Button */}
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sabil/50 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-dark rounded-xl group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                      <path d="M7.2 4.8L27.6 24 7.2 43.2c-.5-.5-.8-1.2-.8-2V6.8c0-.8.3-1.5.8-2z" fill="#4285F4"/>
                      <path d="M33.6 18L7.2 4.8 27.6 24l6-6z" fill="#EA4335"/>
                      <path d="M7.2 43.2L27.6 24l6 6L7.2 43.2z" fill="#34A853"/>
                      <path d="M41.4 22l-7.8-4L27.6 24l6 6 7.8-4c1.2-.7 1.2-2.7 0-4z" fill="#FBBC04"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-1">{t("getItOn")}</p>
                    <p className="text-lg font-semibold text-white leading-none">{t("googlePlay")}</p>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sabil/50 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-dark rounded-xl group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-1">{t("downloadOnThe")}</p>
                    <p className="text-lg font-semibold text-white leading-none">{t("appStore")}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-sabil/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-sabil/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
