const colors = require("tailwindcss/colors");
console.log("Tailwind config successfully detected");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-light": "#B1B1B2",
        "gray-dark": "#363738",
      },
    },
    fontFamily: {
      sans: ['"BrandonText"'],
      brandon: ['"BrandonText"'],
      "brandon-medium": ['"BrandonText-Medium"'],
      "brandon-bold": ['"BrandonText-Bold"'],
      "brandon-black": ['"BrandonText-Black"'],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: colors.red,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
