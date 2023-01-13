/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["naszsklep-api.vercel.app"],
  },
  async redirects() {
    return [
      { source: "/products", destination: "/products/page/0", permanent: true },
      {
        source: "/products/page",
        destination: "/products/page/0",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
