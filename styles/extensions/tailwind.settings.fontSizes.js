// Ref: See https://davidhellmann.com/blog/development/tailwindcss-fluid-typography-with-css-clamp
// Generate text sizes as Clamp to allow dynamic scaling. Here comes the maths

// Set vars
const settings = require("./tailwind.settings.vars.js");
const fsMin = settings.typography.fontSizeMin;
const fsMax = settings.typography.fontSizeMax;
const msFactorMin = settings.typography.msFactorMin;
const msFactorMax = settings.typography.msFactorMax;
const screenMin = settings.screensRem.min;
const screenMax = settings.screensRem["2xl"];

// Calc Min and Max Fontsize
const calcMulti = (multiMin = 0, multiMax = null) => {
  return {
    fsMin: fsMin * Math.pow(msFactorMin, multiMin),
    fsMax: fsMax * Math.pow(msFactorMax, multiMax || multiMin),
  };
};

// Build the clamp property
const clamp = (multiMin = 0, multiMax = null) => {
  const _calcMulti = calcMulti(multiMin, multiMax || multiMin);
  const _fsMin = _calcMulti.fsMin;
  const _fsMax = _calcMulti.fsMax;
  return `clamp(${_fsMin}rem, calc(${_fsMin}rem + (${_fsMax} - ${_fsMin}) * ((100vw - ${screenMin}rem) / (${screenMax} - ${screenMin}))), ${_fsMax}rem)`;
};

// Set the font sizes here
module.exports = {
  xs: clamp(-2.5),
  sm: clamp(-1.75),
  base: clamp(0),
  lg: clamp(0.75),
  xl: clamp(1.66),
  "2xl": clamp(3),
  "3xl": clamp(4),
  "4xl": clamp(5),
  "5xl": clamp(6),
  "6xl": clamp(7),
  "7xl": clamp(8),
};
