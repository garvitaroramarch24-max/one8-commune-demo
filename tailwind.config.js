/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0a09",
          900: "#12100e",
          800: "#1a1714",
          700: "#25211c",
          600: "#3a342c",
        },
        cream: {
          50: "#f7f1e6",
          100: "#efe6d4",
          200: "#d9ccb2",
          400: "#a89c85",
        },
        olive: {
          300: "#9aa27a",
          500: "#6b7352",
          700: "#454b33",
          900: "#262a1c",
        },
        gold: {
          300: "#d9bd84",
          400: "#c4a35f",
          500: "#a8873f",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
