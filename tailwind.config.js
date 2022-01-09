const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./content/**/*.html", "./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Alegreya", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    plugin(function ({ addBase }) {
      addBase({
        ".stroke-array-20": {
          "stroke-dashoffset": "20",
          transition: "stroke-dashoffset .2s",
        },
        "[x-cloak]": {
          display: "none !important",
        },
      });
    }),
  ],
};
