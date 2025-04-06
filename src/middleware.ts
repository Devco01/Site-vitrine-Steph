import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone la réponse
  const response = NextResponse.next();

  // Ajoute les en-têtes de sécurité
  const securityHeaders = new Headers(response.headers);

  // En-têtes de sécurité communs
  securityHeaders.set('X-DNS-Prefetch-Control', 'on');
  securityHeaders.set('X-XSS-Protection', '1; mode=block');
  securityHeaders.set('X-Frame-Options', 'SAMEORIGIN');
  securityHeaders.set('X-Content-Type-Options', 'nosniff');
  securityHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  securityHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Content Security Policy - mise à jour pour autoriser Google Maps et EmailJS
  securityHeaders.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.googleapis.com https://*.gstatic.com https://vercel.com https://images.unsplash.com; font-src 'self'; connect-src 'self' https://vercel.live https://api.emailjs.com; frame-src 'self' https://www.google.com;"
  );

  // Empêche les accès directs aux routes d'API
  if (request.nextUrl.pathname.startsWith('/api/') && 
      request.nextUrl.pathname !== '/api/contact' &&
      request.nextUrl.pathname !== '/api/send-email' &&
      request.nextUrl.pathname !== '/api/sitemap' &&
      request.nextUrl.pathname !== '/api/robots') {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
    headers: securityHeaders,
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/* (images in the public folder)
     * - public/* (public assets)
     */
    {
      source: '/((?!_next/static|_next/image|favicon.ico|images/|public/).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}; 