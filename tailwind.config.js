/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D04848",
          dark: "#822727",
        },
        light: "#f3f4f6",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};

