import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://stephane-bernard-portails.fr';

// Liste des pages du site
const pages = [
  { url: '/', lastModified: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
  { url: '/realisations', lastModified: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', lastModified: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
  { url: '/mentions-legales', lastModified: new Date().toISOString(), changefreq: 'yearly', priority: 0.3 },
  { url: '/politique-de-confidentialite', lastModified: new Date().toISOString(), changefreq: 'yearly', priority: 0.3 },
  { url: '/cgv', lastModified: new Date().toISOString(), changefreq: 'yearly', priority: 0.3 },
];

export async function GET() {
  // Génération du XML pour le sitemap
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
} 