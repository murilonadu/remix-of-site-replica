import { lazy, Suspense, memo } from "react";
import testimonialCarlos from "@/assets/testimonial-carlos.png";
import testimonialAndre from "@/assets/testimonial-andre.png";
import testimonialFelipe from "@/assets/testimonial-felipe.png";
import marceNeiroHero from "@/assets/marceneiro-hero.webp";

// Fixed dimensions to prevent CLS
const TESTIMONIAL_IMAGE_SIZE = 40;
const HERO_IMAGE_WIDTH = 180;
const HERO_IMAGE_HEIGHT = 180;

// Lazy load the Wistia video component
const LazyWistiaVideo = lazy(() => import("@/components/LazyWistiaVideo"));

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Santos",
      image: testimonialCarlos,
      text: "Os projetos são precisos e profissionais. Zero erro de medida. Só quem é do ramo entende o valor disso",
      rating: 5,
      highlight: "Zero erro de medida"
    },
    {
      name: "André Galdino",
      image: testimonialAndre,
      text: "Fiz essa semana o projeto que esta em alta e realmente vendeu muito fácil e o melhor foi que fui bem rápido de produzir já tendo as medidas, obrigado amigo!",
      rating: 5,
      highlight: "bem rápido de produzir já tendo as medidas",
      hasVideo: true,
      wistiaId: "oskx27z7e0"
    },
    {
      name: "Felipe Leal",
      image: testimonialFelipe,
      text: "Cara, que material F@&#! Nunca mais perdi tempo quebrando cabeça pra criar do zero. É só escolher o projeto, produzir e faturar. Quem trabalha com marcenaria precisa ter isso aqui AGORA!",
      rating: 5,
      highlight: "escolher o projeto, produzir e faturar"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Imagem do marceneiro + Botão ACESSAR AGORA no topo */}
          <div className="text-center mb-8">
            <img 
              src={marceNeiroHero} 
              alt="Marceneiro com Pack Marceneiro Rico" 
              width={HERO_IMAGE_WIDTH}
              height={HERO_IMAGE_HEIGHT}
              className="mx-auto max-w-[150px] md:max-w-[180px] mb-4"
              loading="lazy"
              decoding="async"
            />
            <div className="relative group inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <button
                className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 border-2 border-green-400/50 animate-bounce"
                onClick={() => {
                  const offersSection = document.getElementById('ofertas');
                  if (offersSection) {
                    const offset = 80;
                    const targetPosition = offersSection.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <span className="flex items-center gap-3">
                  <span>ACESSAR AGORA!</span>
                </span>
              </button>
            </div>
          </div>

          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-accent bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-all duration-500 cursor-default">
              💬 Depoimentos de quem já usa nossos projetos:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 border border-border/50 shadow-soft hover:shadow-gentle transition-all duration-300 hover:scale-[1.02] animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-3">
                  {/* Wistia Video for André Galdino - Lazy Loaded */}
                  {testimonial.hasVideo && testimonial.wistiaId && (
                    <Suspense fallback={<div className="bg-muted animate-pulse rounded-lg" style={{ paddingTop: "55.21%" }} />}>
                      <LazyWistiaVideo mediaId={testimonial.wistiaId} />
                    </Suspense>
                  )}

                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-base">⭐</span>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-foreground text-sm leading-relaxed">
                    "{testimonial.text.split(testimonial.highlight)[0]}
                    <span className="font-semibold text-calm-green">{testimonial.highlight}</span>
                    {testimonial.text.split(testimonial.highlight)[1]}"
                  </p>

                  {/* Author info */}
                  <div className="border-t border-border/30 pt-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-calm-green/50">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          width={TESTIMONIAL_IMAGE_SIZE}
                          height={TESTIMONIAL_IMAGE_SIZE}
                          className="w-full h-full object-cover" 
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center space-y-8">
            <div className="inline-flex items-center gap-4 bg-calm-green/10 rounded-full px-8 py-4 border border-calm-green/20">
              <span className="text-2xl">🌟</span>
              <div className="text-left">
                <p className="font-semibold text-foreground">Mais de 500 marceneiros já pararam de perder tempo criando do zero</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <button
                className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 border-2 border-green-400/50 animate-bounce"
                onClick={() => {
                  const offersSection = document.getElementById('ofertas');
                  if (offersSection) {
                    const offset = 80;
                    const targetPosition = offersSection.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <span className="flex items-center gap-3">
                  <span>ACESSAR AGORA!</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
