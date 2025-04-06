import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://stephane-bernard-portails.fr';

export async function GET() {
  const robotsTxt = `# robots.txt
User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/api/sitemap

# Interdiction d'accès à certains répertoires
User-agent: *
Disallow: /api/
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
} 