import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, sujet, message } = body;

    // Validation de base
    if (!nom || !email || !message) {
      return NextResponse.json(
        { message: 'Les champs nom, email et message sont obligatoires' },
        { status: 400 }
      );
    }

    // Configuration d'EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    
    // Préparation des paramètres du template
    const templateParams = {
      from_name: nom,
      reply_to: email,
      telephone: telephone || 'Non fourni',
      sujet: sujet,
      message: message,
    };
    
    // Appel à l'API EmailJS depuis le serveur
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi de l\'email via EmailJS');
    }
    
    return NextResponse.json(
      { 
        message: 'Message envoyé avec succès',
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