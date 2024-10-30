/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'loremflickr.com'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
