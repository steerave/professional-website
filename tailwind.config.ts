import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0e14",
        surface: "#131720",
        elevated: "#1a1f2b",
        border: "#252d3a",
        "text-primary": "#ffffff",
        "text-body": "#b0b8c4",
        "text-muted": "#6b7a8d",
        accent: "#4A6FA5",
        "accent-light": "#5a8abf",
      },
      maxWidth: {
        content: "1200px",
        about: "680px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
