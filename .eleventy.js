const now = String(Date.now());
const Image = require("@11ty/eleventy-img");
const path = require("path");
const slugify = require("slugify");
const fs = require("fs");
const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const imageResize = require("./_functions/imageResize.js");

module.exports = function (eleventyConfig) {
  // ********************************************************************** //
  // Attach stories controllers for Story book to components on export
  // Define one for every component type, and match paths accordingly
  // ********************************************************************** //
  eleventyConfig.addPassthroughCopy({
    "./_templates/components/buttons/*.{js,mdx}": "./components/buttons",
    "./_templates/components/icons/*.{js,mdx}": "./components/icons",
    "./_templates/components/typography/*.{js,mdx}": "./components/typography",
    "./_templates/components/spacing/*.{js,mdx}": "./components/spacing",
  });

  // ********************************************************************** //
  // Site wide assets copy control
  // ********************************************************************** //
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");
  eleventyConfig.addWatchTarget("./assets/icons/**");
  eleventyConfig.addWatchTarget("./assets/svg/**");
  eleventyConfig.addPassthroughCopy({ "js/": "./js/" });
  eleventyConfig.addPassthroughCopy({
    "assets/fonts/": "./assets/fonts/",
  });

  if (
    process.env.ELEVENTY_ENV === "production" ||
    process.env.ELEVENTY_ENV === "staging"
  ) {
    eleventyConfig.addPassthroughCopy({
      "assets/display/": "./assets/display/",
    });
    eleventyConfig.addPassthroughCopy({
      "assets/avatars/": "./assets/avatars/",
    });
    eleventyConfig.addPassthroughCopy({
      "assets/video/": "./assets/video/",
    });
  }

  return {
    dir: {
      input: "_templates",
      includes: "../_includes",
      layouts: "../_layouts",
      data: "../_data",
      output: "_site",
    },
  };

  //-----------------------------------------------------
  // Filters
  //-----------------------------------------------------

  // Date format
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Markdown includes
  const md = new markdownIt({
    html: true,
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  //-----------------------------------------------------
  // Deep functions
  //-----------------------------------------------------

  eleventyConfig.setServerOptions({
    liveReload: true,
    port: 8080,
    showAllHosts: true,
  });
};
