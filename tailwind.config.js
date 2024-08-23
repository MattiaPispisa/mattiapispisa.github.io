/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdeaea",
          100: "#facccc",
          200: "#f39999",
          300: "#eb6666",
          400: "#e63333",
          500: "#D04848",
          600: "#b04040",
          700: "#8f3333",
          800: "#6e2626",
          900: "#4d1a1a",
          DEFAULT: "#D04848",
          dark: "#822727",
        },
        light: "#f3f4f6",
        dark: "#000000",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
