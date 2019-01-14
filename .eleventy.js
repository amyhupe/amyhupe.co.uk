const moment = require('moment');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
const MarkdownNunjucksExtension = require('nunjucks-markdown/lib/markdown_tag');
const marked = require('marked');

module.exports = eleventyConfig => {

  const cacheBusterOptions = {
    outputDirectory: 'dist'
  };

  eleventyConfig.addNunjucksTag("markdown", function(nunjucksEngine) {
    return new MarkdownNunjucksExtension(nunjucksEngine, marked);
  });

  eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions));

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter('permalink', str => {
    return str.replace(/\.html/g, '');
  });

  eleventyConfig.addFilter("date", function(value) {
    return moment(value).format('D MMM YYYY');
  });

  eleventyConfig.addFilter("year", function(value) {
    return moment(value).format('YYYY');
  });

  eleventyConfig.addFilter('strip_html', str => {
    return str.replace(
      /<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,
      ''
    )
  });

  eleventyConfig
  .addPassthroughCopy('src/assets/fonts/')
  .addPassthroughCopy('src/site.webmanifest')

  return {
    templateFormats: ['njk', 'md', 'html', 'png', 'ico', 'svg', 'xml', 'jpg', 'jpeg', 'gif'],
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
