const path = require('path');

module.exports = {
  turbopack: {}, // Enable Turbopack with an empty configuration
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};