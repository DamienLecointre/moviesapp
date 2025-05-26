/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // ou false si tu veux que ce soit temporaire (utile en dev)
      },
    ];
  },
};

module.exports = nextConfig;
