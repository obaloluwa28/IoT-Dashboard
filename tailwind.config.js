/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        "micro_screen": { max: "500px"},
        "phone_screen": { max: "700px"},
        "tablet_screen": { max: "900px"},
        "big_screen": { max: "1000px"},
        "big_less_screen": { min: "1000px"},
        "large_screen": { max: "1200px"},
        
        "800px": { min: "800px"},
        // => @media (min-width: 640px and max-width: 767px) { ... }

        "1200px": { min: "1200px"},
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        "1350px": { min: "1350px"},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
      },
      backgroundImage: {
        estlayout_1: "url('/src/assets/hero.jpg')",
        estlayout_2: "url('/src/assets/heros.png')",
        estlayout_3: "url('/src/assets/heros1.png')",
        estlayout_4: "url('/src/assets/Police.png')",
      },
    },
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      blue: colors.blueGray,
      white: colors.white,
      'black-rgba': 'rgba(255, 255, 255, 0.98)',
    },
  },
  plugins: [],
};
