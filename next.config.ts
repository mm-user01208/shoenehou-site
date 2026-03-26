import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/shoenehou-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
