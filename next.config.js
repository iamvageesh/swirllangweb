/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
