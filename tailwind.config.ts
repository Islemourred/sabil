import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Tajawal", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
        tajawal: ["Tajawal", "system-ui", "sans-serif"],
        futura: [["var(--font-jost)", "sans-serif"], { fontFeatureSettings: '"ss01"' }],
      },
      colors: {
        // Primary Brand Color
        sabil: {
          DEFAULT: "#00FF95",
          light: "#66FFB8",
          dark: "#00CC77",
          muted: "#00FF9520",
        },
        // Dark mode backgrounds
        dark: {
          DEFAULT: "#0A0F1A",
          light: "#111827",
          lighter: "#1F2937",
        },
        // Neutrals
        cream: "#FAF9F6",
        silver: "#8A9AA9",
        border: "#E8E8E8",
        // Semantic
        success: "#22C55E",
        star: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },
      backgroundImage: {
        "gradient-sabil": "linear-gradient(135deg, #00FF95, #66FFB8)",
        "gradient-dark": "linear-gradient(135deg, #0A0F1A, #111827)",
        "gradient-glow": "linear-gradient(135deg, #00FF9530, #00FF9510)",
      },
    },
  },
  plugins: [],
};

export default config;
