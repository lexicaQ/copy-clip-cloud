
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        border: "rgba(255, 255, 255, 0.1)",
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#A1A1A1",
        },
        accent: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
      },
      animation: {
        "border-move": "border-move 3s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fade-in 1s ease-out",
        "pulse-subtle": "pulse-subtle 3s infinite ease-in-out",
      },
      keyframes: {
        "border-move": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulse-subtle": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.7",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
