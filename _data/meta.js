module.exports = {
  // Site globals
  url:
    process.env.ELEVENTY_ENV === "development"
      ? ""
      : process.env.ELEVENTY_ENV === "staging"
      ? "https://eqx-platypus.surge.sh"
      : "",

  // Global settings
  title: "Equinix Platypus",
  description: "Framework for Equinix Blueprints",
  theme: "#e91c24",
  siteicon: "favicon-16x16.png",
  componentRoot: "components",
};
