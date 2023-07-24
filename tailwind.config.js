const colors = require("tailwindcss/colors");

module.exports = (isProd) => ({
  prefix: "",
  purge: {
    enabled: isProd,
    content: ["**/*.html", "**/*.ts"]
  },
  darkMode: false, // or 'media' or 'classfddfdf'
  theme: {
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
});
