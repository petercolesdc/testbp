// Images
function imageShortcode(src, alt, sizes = "100vw") {
  //console.log(`Generating image(s) from:  ${src}`)
  let options = {
    widths: [600, 1200, 1900, 2400],
    formats: ["webp"],
    sharpWebpOptions: {
      quality: 95,
    },
    urlPath: "/assets/img/",
    outputDir: "./_site/assets/img/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      //return `${name}-${width}w.${format}`
    },
  };
  // Generate images
  Image(src, options);
  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  // Get metadata
  metadata = Image.statsSync(src, options);
  return Image.generateHTML(metadata, imageAttributes);
}

// Image thumb
function imageThumbShortcode(src, alt, sizes = "100vw") {
  //console.log(`Generating image(s) from:  ${src}`)
  let options = {
    widths: [700],
    formats: ["webp"],
    urlPath: "/assets/img/",
    outputDir: "./_site/assets/img/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      //return `${name}-${width}w.${format}`
    },
  };
  // Generate images
  Image(src, options);
  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  // Get metadata
  metadata = Image.statsSync(src, options);
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  // Images
  eleventyConfig.addShortcode("image", imageShortcode);
  eleventyConfig.addShortcode("imageThumb", imageThumbShortcode);
};
