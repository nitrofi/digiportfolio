/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  prefix: "",
  theme: {
    extend: {
      colors: {
        lime: "#D2E10A",
        dark: "#222222",
      },
      fontFamily: {
        rigid: ["Rigid Square", "sans-serif"],
        darmaGothic: ["dharma-gothic-m", "sans-serif"],
      },
    },
  },
}
