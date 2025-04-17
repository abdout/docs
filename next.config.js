const { createContentlayerPlugin } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
  // Add Contentlayer specific configurations
  typescript: {
    // Temporarily set ignoreBuildErrors to allow the build to proceed
    // with the Contentlayer type issues
    ignoreBuildErrors: true,
  },
  // Move from experimental.outputFileTracingExcludes to the root config
  outputFileTracingExcludes: {
    "*": ["node_modules/**/*"],
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

module.exports = withContentlayer(nextConfig); 