// Ref: See https://davidhellmann.com/blog/development/tailwindcss-fluid-typography-with-css-clamp

const settings = require("./tailwind.settings.vars.js");

// Convert rem to pixels to measure the screen width in pixels
const remToPx = (rem) => {
  return `${rem * 16}px`;
};

// Set the screen references here (for responsive breakpoints)
// These are defined in tailwind.settings.js
module.exports = {
  xs: remToPx(settings.screensRem.min),
  sm: remToPx(settings.screensRem.sm),
  md: remToPx(settings.screensRem.md),
  lg: remToPx(settings.screensRem.lg),
  xl: remToPx(settings.screensRem.xl),
  "2xl": remToPx(settings.screensRem["2xl"]),
};
