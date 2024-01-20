/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
  // hostname: ["media.dev.to"],
};

module.exports = nextConfig;
