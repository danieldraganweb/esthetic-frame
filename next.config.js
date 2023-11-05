/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["v5.airtableusercontent.com", "airtableusercontent.com"],
    deviceSizes: [640, 750, 1200],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
