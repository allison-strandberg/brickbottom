const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg', 'webp'],
  optimizeImagesInDev: true,
  target: 'serverless',
});
