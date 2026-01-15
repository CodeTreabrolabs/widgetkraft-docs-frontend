const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",           // Static export for Netlify
  images: {
    unoptimized: true,        // Required for static export
  },

  // Explicitly disable Turbopack
  turbopack: {},

  // Use webpack (stable)
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};
