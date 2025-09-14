module.exports = function(eleventyConfig) {
   eleventyConfig.addPassthroughCopy("assets");
}
{
  return {
    // ...existing config...
    browserSync: {
      host: "0.0.0.0",
      port: 8081
    }
  };
};