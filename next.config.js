/** @format */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
