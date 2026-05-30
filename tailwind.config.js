/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6EFE6",
        latte: "#E8D8C3",
        mocha: "#7A5237",
        espresso: "#3B2418",
        caramel: "#B07A4A",
        ink: "#1C140E",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
