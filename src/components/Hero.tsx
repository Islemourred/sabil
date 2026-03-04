"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "@/lib/i18n";
import { useAppDispatch } from "@/store/hooks";
import { setDownloadModalOpen } from "@/store/slices/uiSlice";
import { PlayIcon as Play } from "@heroicons/react/24/outline";
import { Smartphone, Wifi, CreditCard, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  const dispatch = useAppDispatch();
  const { t } = useTranslations("hero");

  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-20 lg:pt-8 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-start"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sabil opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sabil" />
              </span>
              <span className="text-sm font-medium text-gray-400 dark:text-gray-500 tracking-wide uppercase">
                {t("label")}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark dark:text-white leading-tight tracking-tight whitespace-pre-line"
            >
              {t("title")
                .split(" ")
                .map((word, i) => (
                  <span key={i}>
                    {i >= t("title").split(" ").length - 2 ? (
                      <span className="text-sabil">{word} </span>
                    ) : (
                      <span>{word} </span>
                    )}
                  </span>
                ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg text-silver dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {t("subtitle")}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => dispatch(setDownloadModalOpen(true))}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-dark bg-sabil rounded-xl hover:bg-sabil-light transition-all duration-300 hover:shadow-lg hover:shadow-sabil/25"
              >
                <Play className="h-5 w-5 fill-current" />
                <span>{t("cta")}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-sabil/10 blur-[80px]" />
            </div>

            {/* Phone mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              {/* Outer phone shell */}
              <div
                className="relative w-[270px] sm:w-[290px] h-[540px] sm:h-[580px]"
                style={{
                  transform: "rotateY(-5deg) rotateX(2deg)",
                }}
              >
                {/* Phone body with layered borders for realism */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-[#2a2d35] to-[#1a1d25] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_60px_-10px_rgba(0,0,0,0.5),0_0_80px_-20px_rgba(0,255,149,0.08)]" />
                
                {/* Inner bezel */}
                <div className="absolute inset-[3px] rounded-[2.8rem] bg-gradient-to-b from-[#1e2028] to-[#14161e] overflow-hidden">
                  
                  {/* Screen area */}
                  <div className="absolute inset-[3px] rounded-[2.6rem] bg-dark overflow-hidden">
                    
                    {/* Dynamic Island */}
                    <div className="absolute top-3 inset-x-0 flex justify-center z-20">
                      <div className="w-[90px] h-[28px] bg-black rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1a1d25] ml-8" />
                      </div>
                    </div>

                    {/* Screen content */}
                    <div className="absolute inset-0 p-4 pt-14">
                      {/* Status bar */}
                      <div className="flex items-center justify-between text-white/60 text-xs mb-5 px-1">
                        <span className="font-semibold">9:41</span>
                        <div className="flex items-center gap-1">
                          <Wifi className="h-3.5 w-3.5" />
                          <div className="w-6 h-3 rounded-[2px] border border-white/40 relative">
                            <div className="absolute inset-[1px] right-[2px] w-3/4 bg-sabil rounded-[1px]" />
                          </div>
                        </div>
                      </div>

                      {/* App header */}
                      <div className="text-center mb-5 flex flex-col items-center">
                        <Image
                          src="/logo.png"
                          alt="Sabil"
                          width={44}
                          height={44}
                          className="rounded-2xl mb-2.5"
                        />
                        <h3 className="text-white font-medium text-base font-futura flex items-baseline justify-center" dir="ltr">
                          S<span className="lowercase text-[1.25em] leading-none">a</span>BIL
                        </h3>
                        <p className="text-white/40 text-[11px] mt-0.5">Welcome back</p>
                      </div>

                      {/* Balance card */}
                      <div className="bg-gradient-to-br from-sabil/15 to-sabil/5 rounded-2xl p-3.5 mb-3.5 border border-sabil/15">
                        <p className="text-white/50 text-[11px]">Balance</p>
                        <p className="text-sabil text-xl font-bold mt-0.5">
                          12,500 DA
                        </p>
                      </div>

                      {/* Quick actions */}
                      <div className="grid grid-cols-3 gap-2.5 mb-3.5">
                        {[
                          {
                            icon: <Smartphone className="h-5 w-5" />,
                            label: "Recharge",
                          },
                          {
                            icon: <CreditCard className="h-5 w-5" />,
                            label: "Transfer",
                          },
                          {
                            icon: <ShieldCheck className="h-5 w-5" />,
                            label: "Pay",
                          },
                        ].map((action) => (
                          <div
                            key={action.label}
                            className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                          >
                            <div className="text-sabil">{action.icon}</div>
                            <span className="text-white/60 text-[10px]">
                              {action.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Recent transactions */}
                      <div className="space-y-1.5">
                        <p className="text-white/40 text-[11px] font-medium px-0.5">
                          Recent
                        </p>
                        {[
                          { name: "Ooredoo", amount: "500 DA" },
                          { name: "AT Internet", amount: "2,000 DA" },
                        ].map((tx) => (
                          <div
                            key={tx.name}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03]"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-sabil/10 flex items-center justify-center">
                                <CreditCard className="h-3.5 w-3.5 text-sabil" />
                              </div>
                              <span className="text-white/70 text-xs">
                                {tx.name}
                              </span>
                            </div>
                            <span className="text-white/50 text-xs">
                              {tx.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side buttons — Volume */}
                <div className="absolute -left-[2px] top-[120px] w-[3px] h-8 bg-[#2a2d35] rounded-l-sm" />
                <div className="absolute -left-[2px] top-[160px] w-[3px] h-8 bg-[#2a2d35] rounded-l-sm" />
                {/* Side button — Power */}
                <div className="absolute -right-[2px] top-[140px] w-[3px] h-10 bg-[#2a2d35] rounded-r-sm" />
              </div>
            </motion.div>

            {/* Orbiting badges */}
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-10 end-0 sm:end-4 hidden sm:block bg-white dark:bg-dark-lighter rounded-xl px-3 py-2 shadow-lg border border-gray-100 dark:border-white/10"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-sabil" />
                <span className="text-xs font-medium text-dark dark:text-white">
                  Secure
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-16 start-0 sm:start-4 hidden sm:block bg-white dark:bg-dark-lighter rounded-xl px-3 py-2 shadow-lg border border-gray-100 dark:border-white/10"
            >
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-sabil" />
                <span className="text-xs font-medium text-dark dark:text-white">
                  Instant
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
