import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: [
            'localhost:3000', // localhost
            'https://ubiquitous-space-acorn-jpjwvxp564gc575q-3000.app.github.dev', // Codespaces
          ],
        },
      },
};

export default nextConfig;
