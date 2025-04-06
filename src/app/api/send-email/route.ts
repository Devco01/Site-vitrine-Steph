import { NextResponse } from 'next/server';

// Fonction utilitaire pour envoyer une réponse d'erreur
function sendErrorResponse(message: string, status: number = 500) {
  console.error(`Erreur API: ${message}`);
  return NextResponse.json(
    { message, success: false },
    { status }
  );
}

export async function POST(request: Request) {
  // Entourer toute la logique dans un try-catch global
  try {
    console.log('API: Début de traitement de la requête');
    
    // Vérifier que le corps de la requête existe
    if (!request.body) {
      return sendErrorResponse('Corps de la requête vide', 400);
    }

    // Analyser le corps de la requête avec gestion d'erreur
    let body;
    try {
      body = await request.json();
      console.log('API: Corps de la requête analysé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'analyse du JSON:', error);
      return sendErrorResponse('Format de requête invalide', 400);
    }

    // Vérifier que le corps contient bien toutes les propriétés attendues
    if (!body || typeof body !== 'object') {
      return sendErrorResponse('Corps de la requête invalide', 400);
    }

    const { nom, email, telephone, sujet, message } = body;

    // Validation de base
    if (!nom || !email || !message) {
      return sendErrorResponse('Les champs nom, email et message sont obligatoires', 400);
    }

    // Configuration d'EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    
    // Vérifier que les configurations sont présentes
    if (!serviceId || !templateId || !publicKey) {
      console.error('Configuration EmailJS manquante:', { 
        serviceId: serviceId ? 'défini' : 'non défini', 
        templateId: templateId ? 'défini' : 'non défini', 
        publicKey: publicKey ? 'défini' : 'non défini' 
      });
      return sendErrorResponse('Erreur de configuration du serveur d\'email', 500);
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
    console.log('API: Tentative d\'envoi d\'email avec les paramètres', { 
      serviceId, 
      templateId, 
      hasPublicKey: !!publicKey 
    });
    
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

      console.log('API: Réponse EmailJS reçue', { 
        status: response.status, 
        statusText: response.statusText 
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
        return sendErrorResponse(`Erreur lors de l'envoi de l'email: ${errorDetail}`);
      }
      
      console.log('API: Email envoyé avec succès');
      return NextResponse.json(
        { 
          message: 'Message envoyé avec succès',
          success: true
        },
        { status: 200 }
      );
    } catch (apiError) {
      console.error('Erreur lors de l\'appel à l\'API EmailJS:', apiError);
      return sendErrorResponse(`Erreur lors de l'appel à l'API EmailJS: ${apiError instanceof Error ? apiError.message : 'Erreur inconnue'}`);
    }
  } catch (error) {
    // Capturer toute erreur non gérée 
    console.error('Erreur non gérée lors du traitement de la requête:', error);
    return sendErrorResponse('Erreur inattendue lors du traitement de la requête');
  }
} 