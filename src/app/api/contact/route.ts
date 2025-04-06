import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, message } = body;

    // Validation basique des entrées
    if (!nom || !email || !message) {
      return NextResponse.json(
        { message: 'Les champs nom, email et message sont obligatoires' },
        { status: 400 }
      );
    }

    // Avec EmailJS, le traitement des emails se fait côté client
    // Cette route API est conservée pour validation des données et pour une possibilité
    // d'extension future (journalisation, analyse anti-spam, etc.)
    
    return NextResponse.json(
      { 
        message: 'Requête valide, le message sera traité par EmailJS',
        success: true
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors du traitement de la requête:', error);
    return NextResponse.json(
      { message: 'Erreur lors du traitement de la requête', success: false },
      { status: 500 }
    );
  }
} 