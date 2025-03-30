import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,
  async generateRobots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/'
        }
      ],
      host: 'https://stephane-bernard-portails.fr',
      sitemap: 'https://stephane-bernard-portails.fr/sitemap.xml'
    }
  },
  async generateSitemaps() {
    return [
      {
        url: 'https://stephane-bernard-portails.fr/sitemap.xml',
        changeFrequency: 'weekly',
        priority: 1,
      }
    ]
  }
};

export default nextConfig;
