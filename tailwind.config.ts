import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: "#1a1612",
          surface: "#241f1a",
          card: "#2c2720",
          border: "#3d362e",
          text: "#f5efe6",
          muted: "#a89f94",
          accent: "#d4a84b",
          "accent-dim": "#8b6914",
          highlight: "#e8c97a",
        },
      },
      fontFamily: {
        serif: ["Merriweather", "Lora", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
