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
  const { t: tp } = useTranslations("phoneMockup");

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
                {/* Phone body */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-[#2a2d35] to-[#1a1d25] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_60px_-10px_rgba(0,0,0,0.5),0_0_80px_-20px_rgba(0,255,149,0.08)]" />
                
                {/* Inner bezel */}
                <div className="absolute inset-[3px] rounded-[2.8rem] bg-gradient-to-b from-[#1e2028] to-[#14161e] overflow-hidden">
                  
                  {/* Screen area */}
                  <div className="absolute inset-[3px] rounded-[2.6rem] bg-gray-50 dark:bg-dark overflow-hidden">
                    
                    {/* Status bar + Dynamic Island row */}
                    <div className="absolute top-2 inset-x-0 z-20 px-6 flex items-center justify-between">
                      <span className="font-semibold text-gray-500 dark:text-white/60 text-[10px]">9:41</span>
                      <div className="w-[90px] h-[28px] bg-black rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1a1d25] ml-8" />
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-white/60">
                        <Wifi className="h-3 w-3" />
                        <div className="w-5 h-2.5 rounded-[2px] border border-gray-400 dark:border-white/40 relative">
                          <div className="absolute inset-[1px] right-[2px] w-3/4 bg-sabil rounded-[1px]" />
                        </div>
                      </div>
                    </div>

                    {/* Screen content */}
                    <div className="absolute inset-0 pt-10 flex flex-col">

                      {/* App header */}
                      <div className="flex items-start justify-between px-4 mb-3">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <Image
                              src="/logo.png"
                              alt="Sabil"
                              width={20}
                              height={20}
                              className="rounded-md"
                            />
                            <h3 className="text-gray-900 dark:text-white font-semibold text-sm font-futura flex items-baseline" dir="ltr">
                              S<span className="lowercase text-[1.15em] leading-none">a</span>bil
                            </h3>
                          </div>
                          <p className="text-gray-400 dark:text-white/30 text-[9px] mt-0.5 ml-[26px]">{tp("providedBy")}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="relative w-7 h-7 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-200">
                              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full text-[7px] font-bold text-white flex items-center justify-center ring-2 ring-gray-50 dark:ring-dark">3</span>
                              <svg className="h-3.5 w-3.5 text-gray-500 dark:text-white/50" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="w-7 h-7 rounded-full bg-sabil/10 flex items-center justify-center cursor-pointer hover:bg-sabil/20 hover:scale-110 active:scale-95 transition-all duration-200">
                              <svg className="h-3.5 w-3.5 text-sabil" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Wallet Card */}
                      <div className="mx-4 bg-gradient-to-br from-[#0d4a3a] to-[#0a3028] rounded-2xl p-3.5 mb-3 relative overflow-hidden cursor-pointer hover:from-[#0f5544] hover:to-[#0c3830] hover:shadow-lg hover:shadow-sabil/10 active:scale-[0.98] transition-all duration-200">
                        {/* Card background pattern */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-sabil/10 rounded-full blur-2xl" />
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white/80 text-[11px] font-medium">Sabil</span>
                          <div className="flex items-center gap-1 text-white/60 text-[9px] cursor-pointer hover:text-sabil transition-colors">
                            <span>{tp("topUp")}</span>
                            <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-white text-lg font-bold tracking-widest mb-2">** **** **</p>
                        <p className="text-white/30 text-[8px] font-mono truncate mb-0.5">anK5Zg2wfTRMbZigSPUG5m</p>
                        <p className="text-white/50 text-[10px]">{tp("cardName")}</p>
                      </div>

                      {/* Transfer / Spend buttons */}
                      <div className="mx-4 flex items-center gap-2 mb-3">
                        <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/[0.06] cursor-pointer hover:bg-sabil/10 hover:border-sabil/20 active:scale-95 transition-all duration-200 group">
                          <svg className="h-3.5 w-3.5 text-gray-600 dark:text-white/60 group-hover:text-sabil transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                          </svg>
                          <span className="text-gray-700 dark:text-white/70 text-[10px] font-medium group-hover:text-sabil transition-colors">{tp("transfer")}</span>
                        </button>
                        <div className="w-9 h-9 rounded-full bg-sabil flex items-center justify-center shadow-md shadow-sabil/20 -my-1 cursor-pointer hover:bg-sabil-light hover:scale-110 hover:shadow-lg hover:shadow-sabil/30 active:scale-95 transition-all duration-200">
                          <svg className="h-[18px] w-[18px] text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="8" height="8" rx="2" />
                            <rect x="5" y="5" width="2" height="2" rx="0.5" fill="currentColor" />
                            <rect x="14" y="2" width="8" height="8" rx="2" />
                            <rect x="17" y="5" width="2" height="2" rx="0.5" fill="currentColor" />
                            <rect x="2" y="14" width="8" height="8" rx="2" />
                            <rect x="5" y="17" width="2" height="2" rx="0.5" fill="currentColor" />
                            <path d="M14 14h3v3h-3z" />
                            <path d="M21 14v3h-1" />
                            <path d="M14 20h3" />
                            <path d="M21 20v1h-3" />
                            <path d="M14 17h1" />
                          </svg>
                        </div>
                        <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/[0.06] cursor-pointer hover:bg-sabil/10 hover:border-sabil/20 active:scale-95 transition-all duration-200 group">
                          <svg className="h-3.5 w-3.5 text-gray-600 dark:text-white/60 group-hover:text-sabil transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                          </svg>
                          <span className="text-gray-700 dark:text-white/70 text-[10px] font-medium group-hover:text-sabil transition-colors">{tp("spend")}</span>
                        </button>
                      </div>

                      {/* Notifications */}
                      <div className="flex-1 px-4 overflow-hidden">
                        <p className="text-gray-500 dark:text-white/30 text-[10px] font-medium mb-2">{tp("notifications")}</p>
                        <div className="space-y-2">
                          {[
                            { title: tp("rechargeTitle"), desc: tp("rechargeDesc"), time: tp("rechargeTime"), unread: true, color: "bg-sabil/10", iconColor: "text-sabil", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { title: tp("transferTitle"), desc: tp("transferDesc"), time: tp("transferTime"), unread: true, color: "bg-blue-500/10", iconColor: "text-blue-400", icon: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" },
                            { title: tp("billTitle"), desc: tp("billDesc"), time: tp("billTime"), unread: false, color: "bg-orange-500/10", iconColor: "text-orange-400", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { title: tp("promoTitle"), desc: tp("promoDesc"), time: tp("promoTime"), unread: false, color: "bg-purple-500/10", iconColor: "text-purple-400", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
                            { title: tp("cardTitle"), desc: tp("cardDesc"), time: tp("cardTime"), unread: false, color: "bg-emerald-500/10", iconColor: "text-emerald-400", icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" },
                          ].map((notif) => (
                            <div
                              key={notif.title}
                              className={`flex items-center gap-2.5 p-2 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-white/[0.06] active:scale-[0.98] transition-all duration-200 ${notif.unread ? "bg-sabil/[0.04] dark:bg-sabil/[0.03]" : "bg-gray-50 dark:bg-white/[0.03]"}`}
                            >
                              <div className={`relative w-7 h-7 rounded-lg ${notif.color} flex items-center justify-center flex-shrink-0`}>
                                {notif.unread && (
                                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-sabil rounded-full ring-1 ring-gray-50 dark:ring-dark" />
                                )}
                                <svg className={`h-3.5 w-3.5 ${notif.iconColor}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d={notif.icon} />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-[10px] truncate ${notif.unread ? "text-gray-900 dark:text-white font-semibold" : "text-gray-800 dark:text-white/80 font-medium"}`}>{notif.title}</p>
                                <p className="text-gray-400 dark:text-white/30 text-[8px] truncate">{notif.desc}</p>
                              </div>
                              <span className={`text-[7px] flex-shrink-0 ${notif.unread ? "text-sabil font-medium" : "text-gray-300 dark:text-white/20"}`}>{notif.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Nav */}
                      <div className="px-2 pb-2 pt-1">
                        <div className="flex items-center justify-around py-2 border-t border-gray-200 dark:border-white/[0.06]">
                          {[
                            { label: tp("home"), active: true, badge: 0, icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
                            { label: tp("services"), active: false, badge: -1, icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zm9.75-9.75A2.25 2.25 0 0115.75 3.75H18a2.25 2.25 0 012.25 2.25v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 15.75V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" },
                            { label: tp("chat"), active: false, badge: 2, icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" },
                            { label: tp("account"), active: false, badge: 0, icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
                          ].map((nav) => (
                            <div key={nav.label} className="relative flex flex-col items-center gap-0.5 cursor-pointer hover:scale-110 active:scale-90 transition-all duration-200 group">
                              {nav.badge > 0 && (
                                <span className="absolute -top-1.5 left-1/2 ml-1 w-3.5 h-3.5 bg-red-500 rounded-full text-[7px] font-bold text-white flex items-center justify-center ring-1 ring-gray-50 dark:ring-dark">{nav.badge}</span>
                              )}
                              {nav.badge === -1 && (
                                <span className="absolute -top-0.5 left-1/2 ml-1.5 w-2 h-2 bg-sabil rounded-full ring-1 ring-gray-50 dark:ring-dark" />
                              )}
                              <svg className={`h-4 w-4 transition-colors ${nav.active ? "text-sabil" : "text-gray-400 dark:text-white/30 group-hover:text-sabil"}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d={nav.icon} />
                              </svg>
                              <span className={`text-[8px] transition-colors ${nav.active ? "text-sabil font-semibold" : "text-gray-400 dark:text-white/30 group-hover:text-sabil"}`}>{nav.label}</span>
                            </div>
                          ))}
                        </div>
                        {/* Home indicator */}
                        <div className="flex justify-center pt-1">
                          <div className="w-24 h-1 rounded-full bg-gray-300 dark:bg-white/20" />
                        </div>
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
                  {tp("secure")}
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
                  {tp("instant")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
