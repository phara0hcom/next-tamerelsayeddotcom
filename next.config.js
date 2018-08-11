const withSass = require('@zeit/next-sass');
const nextImages = require('next-images');

module.exports = nextImages(withSass());
