/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // needed for Next.js + Docker -- https://github.com/vercel/next.js/tree/canary/examples/with-docker#using-docker
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
