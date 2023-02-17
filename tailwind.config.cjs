/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito-sans", "sans-serif"],
      },
    },
    colors: {
      firefly: {
        50: "#f0fafd",
        100: "#cceffb",
        200: "#9adbf5",
        300: "#5fbee9",
        400: "#2e9bd3",
        500: "#157db7",
        600: "#0e6193",
        700: "#104e75",
        800: "#123e5d",
        900: "#050e14",
      },
      gold: {
        50: "#ffffe7",
        100: "#feffc1",
        200: "#fffd86",
        300: "#fff341",
        400: "#ffe40d",
        500: "#ffd500",
        600: "#d19c00",
        700: "#a67002",
        800: "#89570a",
        900: "#74470f",
      },
      punch: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fdcbcb",
        300: "#fba6a6",
        400: "#f67373",
        500: "#ed4646",
        600: "#dc3535",
        700: "#b71e1e",
        800: "#971d1d",
        900: "#7e1e1e",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eAFxNBriFW8k0jCNOTCe6gHaHs%26pid%3DApi&f=1')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
