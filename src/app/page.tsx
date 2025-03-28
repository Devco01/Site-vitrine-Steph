import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import ContactCTA from "./components/home/ContactCTA";
import PageWrapper from "./components/layout/PageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Stéphane Bernard, expert en portails sur mesure. Découvrez nos solutions élégantes, durables et personnalisées pour sublimer l'entrée de votre propriété."
};

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Features />
      <ContactCTA />
    </PageWrapper>
  );
}
