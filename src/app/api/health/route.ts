import { NextResponse } from 'next/server';

/**
 * Endpoint de vérification de la santé de l'application.
 * Utilisé par les services de monitoring et pour vérifier que l'application fonctionne correctement.
 */
export async function GET() {
  // On pourrait ajouter ici des vérifications plus avancées
  // comme la connexion à une base de données, l'état des services externes, etc.
  const healthStatus = {
    status: 'online',
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION || 'unknown',
    environment: process.env.NODE_ENV,
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  };

  return NextResponse.json(healthStatus, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, max-age=0'
    }
  });
} 