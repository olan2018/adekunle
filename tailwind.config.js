/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        ink: {
          950: "#f5f0e8",
          900: "#faf8f2",
          850: "#f2ede2",
          800: "#ede7d5",
          700: "#c8bfaa",
          600: "#b3a890",
          500: "#7a7468",
        },
        mist: {
          100: "#0d0d0b",
          200: "#3a3730",
          300: "#55503f",
          400: "#7a7468",
          500: "#968c79",
        },
        accent: {
          300: "#d9685a",
          400: "#c8392b",
          500: "#9c2a20",
          600: "#7a2018",
        },
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #f5f0e8 85%), repeating-linear-gradient(0deg, rgba(13,13,11,0.05) 0px, rgba(13,13,11,0.05) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(13,13,11,0.05) 0px, rgba(13,13,11,0.05) 1px, transparent 1px, transparent 40px)",
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
