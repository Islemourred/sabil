"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XMarkIcon as X } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setDownloadModalOpen } from "@/store/slices/uiSlice";
import { useEffect } from "react";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.ovresko.sabil";
const APP_STORE_URL = "https://apps.apple.com/dz/app/sabil/id6751124161";

export function DownloadModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.downloadModalOpen);

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
                  Choose your platform to start your digital journey.
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
                    <svg className="w-6 h-6 text-[#3DDC84]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.523 15.3414L20.355 17.1714L17.523 15.3414ZM3.65698 2.09641C3.39967 2.34863 3.25056 2.69971 3.25198 3.06541V20.9344C3.25056 21.3001 3.39967 21.6512 3.65698 21.9034L12.551 13.0014L3.65698 2.09641ZM13.881 14.3324L17.203 16.2484L13.881 14.3324ZM14.956 11.9424L4.85698 2.18541L13.847 11.1714L14.956 11.9424ZM13.882 11.9994L20.353 8.26141L21.144 7.80541C21.4981 7.60156 21.72 7.22858 21.72 6.82141C21.72 6.41424 21.4981 6.04126 21.144 5.83741L20.353 5.38141L3.93198 1.40841C3.83788 1.38379 3.73977 1.37397 3.64198 1.37941C3.33306 1.40578 3.05193 1.57147 2.87198 1.83241C2.86311 1.84478 2.85496 1.85764 2.84758 1.87091L12.551 11.5714L13.882 11.9994ZM12.551 12.4314L3.10298 21.8784C3.25883 22.0838 3.48682 22.222 3.73898 22.2634C3.84545 22.2774 3.95349 22.274 4.05898 22.2534L18.432 13.9874L12.551 12.4314Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-1">Get it on</p>
                    <p className="text-lg font-semibold text-white leading-none">Google Play</p>
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
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.77-3.27.82-1.31.05-2.32-1.32-3.15-2.53C4.25 17 2.94 12.45 4.07 10.46c.56-.98 1.58-1.6 2.69-1.61 1.05-.02 2.03.69 2.68.69.66 0 1.86-.87 3.12-.74.53.02 2.03.22 2.98 1.61-.08.05-1.78 1.04-1.76 3.14.02 2.53 2.19 3.42 2.22 3.44-.02.06-.35 1.2-1.29 2.5zM13.38 5.45c.54-.65.9-1.55.8-2.45-.77.03-1.7.51-2.25 1.15-.49.57-.92 1.48-.8 2.38.86.06 1.71-.44 2.25-1.08z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-1">Download on the</p>
                    <p className="text-lg font-semibold text-white leading-none">App Store</p>
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
