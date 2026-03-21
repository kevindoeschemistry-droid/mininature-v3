import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary greens
        "reserve-green": "#1B4332",
        "deep-forest": "#0D2B1F",
        "forest-mid": "#2D6A4F",

        // Accent / action
        "hummingbird-gold": "#E8A838",
        "california-poppy": "#E86A2E",
        "sage": "#8FAF7E",
        "adoptable": "#52B788",

        // Backgrounds / surfaces
        "fog-white": "#F5F3EE",
        "lichen-cream": "#EAE8E0",
        "mint-mist": "#E8F1EC",

        // Map & UI
        "map-water": "#B3D4E8",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      borderRadius: {
        "organic": "24px",
        "organic-lg": "32px",
        "organic-xl": "48px",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.14)",
        "map-popup": "0 8px 32px rgba(27,67,50,0.18)",
      },
      animation: {
        "count-up": "countUp 2s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "hummingbird": "hummingbird 3s ease-in-out infinite",
        "pulse-pin": "pulsePin 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        hummingbird: {
          "0%, 100%": { transform: "translateY(0) rotate(-5deg)" },
          "50%": { transform: "translateY(-8px) rotate(5deg)" },
        },
        pulsePin: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.3)", opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
