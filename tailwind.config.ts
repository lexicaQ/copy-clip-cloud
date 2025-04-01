
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
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "fade-in-out": "fade-in-out 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-bottom": "slide-in-bottom 0.5s ease-out",
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
        "glow": {
          "0%": {
            boxShadow: "0 0 5px rgba(255, 255, 255, 0.1)",
          },
          "100%": {
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
          },
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        "bounce-gentle": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
        "fade-in-out": {
          "0%, 100%": {
            opacity: "0.6",
          },
          "50%": {
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-sm': '0 0 5px rgba(255, 255, 255, 0.3)',
        'glow-md': '0 0 10px rgba(255, 255, 255, 0.5)',
        'glow-lg': '0 0 15px rgba(255, 255, 255, 0.7)',
        'inner-glow': 'inset 0 0 10px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
