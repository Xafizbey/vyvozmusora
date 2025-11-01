/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Закомментировано для dev режима с network IP
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
