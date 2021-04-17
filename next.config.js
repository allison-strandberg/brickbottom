const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg'],
  optimizeImagesInDev: true,
  target: 'serverless',
});