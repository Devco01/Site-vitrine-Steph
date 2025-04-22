import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portails Aluminium sur mesure Arvert - Stéphane Bernard | Charente-Maritime (17)",
  description: "Fabrication et installation de portails sur mesure à Arvert et alentours (17530). Stéphane Bernard, expert en portails aluminium en Charente-Maritime. Devis gratuit, intervention rapide.",
  keywords: "portails Arvert, portails aluminium 17, Stéphane Bernard portails, portails sur mesure Charente-Maritime, installation portail Arvert, réparation portail 17530, portails Royan, portails La Tremblade, portails Marennes, artisan portails 17",
  robots: "index, follow",
  alternates: {
    canonical: "https://stephane-bernard.com/",
  },
  openGraph: {
    title: "Portails Aluminium sur mesure à Arvert - Stéphane Bernard | 17530",
    description: "Expert en fabrication et installation de portails aluminium sur mesure à Arvert et dans toute la Charente-Maritime. Devis gratuit et conseils personnalisés.",
    url: "https://stephane-bernard.com/",
    siteName: "Stéphane Bernard Portails",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://stephane-bernard.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Stéphane Bernard Portails Aluminium",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portails Aluminium sur mesure à Arvert - Stéphane Bernard",
    description: "Expert en fabrication et installation de portails aluminium sur mesure en Charente-Maritime.",
    images: ["https://stephane-bernard.com/Logo.png"],
  },
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
    apple: '/Logo.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/Logo.png',
    },
  },
  verification: {
    google: "à_remplacer_par_votre_code_de_vérification_google",
  },
  abstract: "Stéphane Bernard, artisan spécialisé en portails aluminium sur mesure à Arvert et en Charente-Maritime.",
  category: "Artisan, Portails, Menuiserie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/Logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/Logo.png" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
