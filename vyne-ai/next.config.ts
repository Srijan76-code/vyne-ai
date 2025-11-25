import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/main/:path*',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: `${process.env.BACKEND_URL || 'http://localhost:4000'}/api/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
