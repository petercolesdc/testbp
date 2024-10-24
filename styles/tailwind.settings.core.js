module.exports = {
  lineHeight: {
    none: "100%",
    tightest: "120%",
    tight: "130%",
    normal: "140%",
  },

  letterSpacing: {
    normal: "0",
    tight: "-0.06rem",
    wide: "0.06rem",
    xwide: "0.09rem",
  },

  fontFamily: {
    sans: ["NexaText", "ui-sans-serif", "system-ui", "sans-serif"],
    mono: ["Hack", "ui-monospace", "SFMono-Regular", "monospace"],
  },

  fontWeight: {
    light: "300",
    normal: "400",
    bold: "700",
  },

  // -----------------------------------------------------------------------
  // These classes will always output to CSS regardless on markup
  // Great for primitives, and utility classes we always require
  // https://tailwindcss.com/docs/content-configuration#safelisting-classes
  // -----------------------------------------------------------------------

  safelist: [
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "text-7xl",
    "font-light",
    "font-normal",
    "font-bold",
    "leading-none",
    "leading-normal",
    "leading-tight",
    "leading-tightest",
    "tracking-normal",
    "tracking-tight",
    "tracking-wide",
    "cursor-not-allowed",
  ],
};
