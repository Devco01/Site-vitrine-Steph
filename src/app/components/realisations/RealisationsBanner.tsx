"use client";

import FadeIn from '../animations/FadeIn';

const RealisationsBanner = () => {
  return (
    <FadeIn delay={0.2}>
      <div className="relative h-[50vh] max-h-[500px] w-full flex items-center justify-center"
           style={{
             backgroundImage: 'url(/Logo.png)',
             backgroundSize: 'contain',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             backgroundColor: '#f5f5f5'
           }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez l&apos;excellence et le savoir-faire artisanal de Stéphane Bernard 
            à travers nos projets de portails sur mesure réalisés pour nos clients.
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

export default RealisationsBanner; 