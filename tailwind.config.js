/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    fontFamily: {
      'mono': ['Share Tech Mono', 'monospace'],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: colors,
      backgroundImage: {
        "shapes": "url(./shapes.jpg)"
      }
    },
  },
  plugins: [],
};
