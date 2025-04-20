"use client";

import FadeIn from '../animations/FadeIn';
import StaggerContainer from '../animations/StaggerContainer';
import StaggerItem from '../animations/StaggerItem';

const testimonialsData = [
  {
    id: 1,
    content: "Je suis extrêmement satisfait de mon portail motorisé. L'équipe de Stéphane Bernard a été professionnelle du début à la fin. Installation rapide et soignée, le résultat est à la hauteur de mes attentes.",
    name: "Pierre Durand",
    location: "Bordeaux",
    rating: 5
  },
  {
    id: 2,
    content: "Notre portail battant s'intègre parfaitement dans notre propriété. Les conseils de M. Bernard nous ont permis de faire le bon choix tant au niveau esthétique que pratique. Je recommande vivement !",
    name: "Marie Lefort",
    location: "Lyon",
    rating: 5
  },
  {
    id: 3,
    content: "Service impeccable ! Des délais respectés et un portail coulissant qui fonctionne parfaitement depuis 3 ans. Le SAV est également très réactif quand j'ai eu besoin d'un réglage.",
    name: "Thomas Roux",
    location: "Nantes",
    rating: 4
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ce Que Disent Nos Clients
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits qui ont fait confiance à Stéphane Bernard pour leur projet de portail.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <StaggerItem 
                key={testimonial.id} 
                direction="up"
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <FadeIn delay={0.1} duration={0.4} className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </FadeIn>
                <blockquote className="italic text-gray-700 mb-4">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <FadeIn direction="right" delay={0.2} duration={0.4}>
                  <div className="flex items-center">
                    <div className="bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </FadeIn>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials; 