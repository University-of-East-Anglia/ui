const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-light": "#B1B1B2",
        "gray-dark": "#363738",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: colors.red,
      black: colors.black,
      white: colors.white,
      orange: "#FAA61A",
      blue: "#00aef0",
      green: "#8DC63F",
      lilac: "#B781CA",
      pink: "#ED61BA",
      gray: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
