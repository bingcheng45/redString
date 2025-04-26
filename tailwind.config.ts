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
        primary: "#D83546", // Deep red
        secondary: "#FFBEC9", // Soft pink
        accent: "#F2A649", // Gold/Amber
        "neutral-dark": "#1A2B47", // Deep blue
        "neutral-light": "#FFFFFF", // Clean white
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-poppins)", "Poppins", "sans-serif"],
        accent: ["var(--font-dancing-script)", "Dancing Script", "cursive"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #FFE6EA 0%, #FFF 100%)",
        "gradient-dark": "linear-gradient(135deg, #1A0A0D 0%, #0A121F 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "glow": "0 0 15px rgba(216, 53, 70, 0.5)",
        "glow-accent": "0 0 15px rgba(242, 166, 73, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config; 