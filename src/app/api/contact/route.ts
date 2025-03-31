import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, sujet, message } = body;

    // Configuration du transporteur d'email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Nouveau message de contact - ${sujet}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Sujet :</strong> ${sujet}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
} 