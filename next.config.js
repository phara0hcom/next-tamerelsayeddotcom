const nextImages = require('next-images');
const Dotenv = require('dotenv-webpack');

module.exports = nextImages({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  // Have to list all the environment variables used here to make it available
  // to the client side code
  env: {
    GA_KEY: process.env.GA_KEY,
  },
});
