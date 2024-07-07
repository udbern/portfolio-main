/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1280px"
    },
    container: {
      screens: {
          sm: "600px",
          md: "900px",
          lg: "1200px"
      },
    },
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
        dancing: ['"Dancing Script"', "sans-serif"],
        merienda: ['"Merienda"', "cursive"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(
    nextui({
      themes: {
        mytheme: {
          colors: {
           primary: "#FF4900",
          },
        },
      },
    }),
  )]
}