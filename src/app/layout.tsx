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
  title: "Portails sur mesure Arvert - Stéphane Bernard | 17530 Charente-Maritime",
  description: "Entreprise spécialisée dans les portails sur mesure à Arvert (17530). Installation, réparation et dépannage de portails aluminium en Charente-Maritime. Devis gratuit.",
  keywords: "portails, portails sur mesure, portails Arvert, entreprise portails Arvert, portails aluminium, Charente-Maritime, 17530, Stéphane Bernard, installation portail, réparation portail",
  robots: "index, follow",
  alternates: {
    canonical: "https://stephane-bernard-portails.fr/",
  },
  openGraph: {
    title: "Portails sur mesure Arvert - Stéphane Bernard | 17530",
    description: "Entreprise spécialisée dans les portails sur mesure à Arvert (17530). Installation, réparation et dépannage de portails aluminium en Charente-Maritime.",
    url: "https://stephane-bernard-portails.fr/",
    siteName: "Stéphane Bernard Portails",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
