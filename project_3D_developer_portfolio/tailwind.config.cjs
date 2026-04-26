/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0B1120",
        secondary: "#94A3B8",
        tertiary: "#111827",

        "black-100": "#1E293B",
        "black-200": "#0F172A",

        "white-100": "#E2E8F0",
      },

      boxShadow: {
        card: "0px 20px 60px rgba(0, 0, 0, 0.35)",
      },

      screens: {
        xs: "450px",
      },

      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};