const plugin = require("tailwindcss/plugin");
const settingsCore = require("./tailwind.settings.core.js");
const settingsColors = require("./tailwind.settings.colors.js");
const settingsScreens = require("./extensions/tailwind.settings.screens.js");
const settingsFontSizes = require("./extensions/tailwind.settings.fontSizes.js");

// --------------------------------------------------------------------------------------------

module.exports = {
  // Set a dark mode preference: https://tailwindcss.com/docs/dark-mode
  darkMode: "",

  // Watch these files to generate CSS from markup: https://tailwindcss.com/docs/configuration
  // Add more / less as required below
  content: [
    "./_includes/**/*.{njk,md}",
    "./_templates/**/*.{njk,md,json,js}",
    "./_data/**/*.json",
    "./_layouts/**/*.njk",
    "./_shortcodes/**/*.js",
    "./assets/svg**/*.svg",
    "./assets/icons**/*.svg",
    "./styles/**/*.css",
  ],

  // Safelist (defined in tailwind.settings.js)
  // You can extend in this file if you wish
  safelist: [...settingsCore.safelist],

  // Disable container (unless you want it)
  // https://tailwindcss.com/docs/container
  corePlugins: {
    container: false,
  },

  // -------------------------------------------
  // Theme base requirements
  // -------------------------------------------

  theme: {
    // -------------------------------------------------
    // Import primitives into the project
    // THESE SHOULD NOT BE CHANGED OR EDITED
    // You can extend in this file if you wish
    // -------------------------------------------------
    colors: { ...settingsColors.colors },
    lineHeight: { ...settingsCore.lineHeight },
    letterSpacing: { ...settingsCore.letterSpacing },
    fontFamily: { ...settingsCore.fontFamily },
    fontWeight: { ...settingsCore.fontWeight },

    // -------------------------------------------------
    // If you want to use dynamic text scaling (CSS clamp)
    // these two files control type sizes and responsive breakpoints.
    // If not, you can define your own in this file instead
    // -------------------------------------------------
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    // -------------------------------------------------

    extend: {
      // If you're using the tailwind typography plugin
      // you can set styling here (see examples)
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "",
            color: theme("colors.neutral.800"),
            pre: {
              borderRadius: "0",
              backgroundColor: theme("colors.neutral.black"),
            },
            a: {
              color: theme("colors.red.DEFAULT"),
              "&:hover": {
                color: theme("colors.neutral.800"),
              },
              "&:focus": {
                color: theme("colors.neutral.800"),
              },
            },
          },
        },
      }),
    },

    // Set preferences for Tailwind config viewer
    configViewer: {},
  },

  plugins: [
    // Add Tailwind typography plugin (if you're using it)
    require("@tailwindcss/typography"),

    // Set some sensible defaults and resets for the project as a whole
    plugin(function ({ addBase, theme }) {
      addBase({
        html: {
          "scroll-behavior": "smooth",
          "font-synthesis": "none",
          fontFamily: theme("fontFamily.sans"),
          fontWeight: theme("fontWeight.300"),
        },
        select: {
          appearance: "none !important",
          "background-image":
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC);",
          "background-position": "right 3px center",
          "background-repeat": "no-repeat",
        },
      });
    }),
  ],
};
