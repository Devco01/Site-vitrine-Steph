import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; connect-src 'self' https://vercel.live https://api.emailjs.com; frame-src 'self' https://www.google.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.googleapis.com https://*.gstatic.com https://vercel.com https://images.unsplash.com;"
          }
        ]
      }
    ];
  },
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
