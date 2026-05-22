/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFF3EA",
          400: "#FF8C42",
          500: "#FF6B00",
          600: "#E55F00",
        },
        ink: {
          900: "#0F172A",
          800: "#111827",
          700: "#1E293B",
          600: "#334155",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #FF6B00, #FF8C42)",
        "ink-gradient": "linear-gradient(180deg, #0F172A, #111827)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(255,107,0,0.55)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,107,0,0.6)" },
          "50%": { boxShadow: "0 0 0 18px rgba(255,107,0,0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
