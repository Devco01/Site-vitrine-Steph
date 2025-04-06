import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Vérifier que le corps de la requête existe
    if (!request.body) {
      return NextResponse.json(
        { message: 'Corps de la requête vide', success: false },
        { status: 400 }
      );
    }

    // Analyser le corps de la requête avec gestion d'erreur
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error('Erreur lors de l\'analyse du JSON:', error);
      return NextResponse.json(
        { message: 'Format de requête invalide', success: false },
        { status: 400 }
      );
    }

    const { nom, email, telephone, sujet, message } = body;

    // Validation de base
    if (!nom || !email || !message) {
      return NextResponse.json(
        { message: 'Les champs nom, email et message sont obligatoires', success: false },
        { status: 400 }
      );
    }

    // Configuration d'EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    
    // Vérifier que les configurations sont présentes
    if (!serviceId || !templateId || !publicKey) {
      console.error('Configuration EmailJS manquante:', { serviceId, templateId, publicKey });
      return NextResponse.json(
        { message: 'Erreur de configuration du serveur d\'email', success: false },
        { status: 500 }
      );
    }
    
    // Préparation des paramètres du template
    const templateParams = {
      from_name: nom,
      reply_to: email,
      telephone: telephone || 'Non fourni',
      sujet: sujet || 'Sans sujet',
      message: message,
    };
    
    // Log pour le débogage
    console.log('Tentative d\'envoi d\'email avec:', { serviceId, templateId, publicKey: '***' });
    
    try {
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

      // Vérifier le statut de la réponse
      if (!response.ok) {
        // Tenter de lire le corps de la réponse pour plus de détails
        let errorDetail = '';
        try {
          const errorJson = await response.json();
          errorDetail = JSON.stringify(errorJson);
        } catch {
          // Ignorer l'erreur de parsing et utiliser le statut HTTP
          errorDetail = `Statut: ${response.status} ${response.statusText}`;
        }
        
        console.error('Erreur API EmailJS:', errorDetail);
        throw new Error(`Erreur lors de l'envoi de l'email: ${errorDetail}`);
      }
      
      return NextResponse.json(
        { 
          message: 'Message envoyé avec succès',
          success: true
        },
        { status: 200 }
      );
    } catch (apiError) {
      console.error('Erreur lors de l\'appel à l\'API EmailJS:', apiError);
      throw apiError; // propager l'erreur pour la gestion globale
    }
  } catch (error) {
    console.error('Erreur lors du traitement de la requête:', error);
    return NextResponse.json(
      { message: 'Erreur lors du traitement de la requête', success: false },
      { status: 500 }
    );
  }
} 