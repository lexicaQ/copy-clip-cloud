
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
        primary: {
          DEFAULT: "#3b82f6", // Blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8b5cf6", // Purple
          foreground: "#FFFFFF",
        },
      },
      animation: {
        "border-move": "border-move 3s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fade-in 1s ease-out",
        "pulse-subtle": "pulse-subtle 3s infinite ease-in-out",
        "gradient-x": "gradient-x 10s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "morph": "morph 8s ease-in-out infinite",
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
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "shimmer": {
          "0%": {
            "background-position": "-500px 0",
          },
          "100%": {
            "background-position": "500px 0",
          },
        },
        "morph": {
          "0%, 100%": {
            "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "25%": {
            "border-radius": "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "50%": {
            "border-radius": "40% 60% 30% 70% / 30% 40% 70% 60%",
          },
          "75%": {
            "border-radius": "60% 40% 70% 30% / 70% 30% 40% 60%",
          },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'inner-glow': 'inset 0 0 10px rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-angular': 'conic-gradient(from 180deg at 50% 50%, #3b82f6, #8b5cf6, #3b82f6)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
