import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/lib/i18n";
import { ReduxProvider } from "@/store/provider";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { DownloadModal } from "@/components/DownloadModal";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "SABIL Your All in One Digital Companion",
  description:
    "Sabil is your everyday digital partner. Mobile recharge, money transfer, bill payments, ecommerce, VTC rides, and fintech all in one secure platform.",
  keywords: [
    "Sabil",
    "mobile recharge",
    "money transfer",
    "bill payment",
    "Algeria",
    "fintech",
    "ecommerce",
    "VTC",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <body className={`${jost.variable} antialiased`} suppressHydrationWarning>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <I18nProvider>
              <AnimatedBackground />
              <DownloadModal />
              {children}
            </I18nProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
