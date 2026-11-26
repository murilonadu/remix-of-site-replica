import { memo, useRef, useEffect, useState, useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import f1 from "@/assets/pergolados/ficha-01-frente.webp";
import v1 from "@/assets/pergolados/ficha-01-verso.webp";
import f2 from "@/assets/pergolados/ficha-02-frente.webp";
import v2 from "@/assets/pergolados/ficha-02-verso.webp";
import f3 from "@/assets/pergolados/ficha-03-frente.webp";
import v3 from "@/assets/pergolados/ficha-03-verso.webp";
import f4 from "@/assets/pergolados/ficha-04-frente.webp";
import v4 from "@/assets/pergolados/ficha-04-verso.webp";
import f5 from "@/assets/pergolados/ficha-05-frente.webp";
import v5 from "@/assets/pergolados/ficha-05-verso.webp";
import f6 from "@/assets/pergolados/ficha-06-frente.webp";
import v6 from "@/assets/pergolados/ficha-06-verso.webp";

const PROJECT_IMAGE_WIDTH = 1000;
const PROJECT_IMAGE_HEIGHT = 1414;

const BonusSection = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Só baixa as fichas 3 a 12 quando o carrossel estiver chegando na tela,
  // para não disputar banda com a imagem principal e o vídeo no topo.
  const [loadAll, setLoadAll] = useState(false);

  const autoplayPlugin = useMemo(() => Autoplay({ delay: 1400, stopOnInteraction: false }), []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          autoplayPlugin.play();
        } else {
          autoplayPlugin.stop();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    const near = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadAll(true);
          near.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    near.observe(el);
    return () => {
      observer.disconnect();
      near.disconnect();
    };
  }, [autoplayPlugin]);

  const projects = [
    { image: f1, alt: "Projeto 01: pergolado encostado com policarbonato, frente" },
    { image: v1, alt: "Projeto 01: prancha técnica com planta, cotas e detalhes" },
    { image: f2, alt: "Projeto 02: pergolado independente vazado, frente" },
    { image: v2, alt: "Projeto 02: prancha técnica com planta, cotas e detalhes" },
    { image: f3, alt: "Projeto 03: pergolado com telha termoacústica para área gourmet" },
    { image: v3, alt: "Projeto 03: prancha técnica com planta, cotas e detalhes" },
    { image: f4, alt: "Projeto 04: cobertura de garagem com policarbonato" },
    { image: v4, alt: "Projeto 04: prancha técnica com planta, cotas e detalhes" },
    { image: f5, alt: "Projeto 05: pergolado vazado para beira de piscina" },
    { image: v5, alt: "Projeto 05: prancha técnica com planta, cotas e detalhes" },
    { image: f6, alt: "Projeto 06: pergolado encostado com policarbonato para quintal" },
    { image: v6, alt: "Projeto 06: prancha técnica com planta, cotas e detalhes" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-glow bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-all duration-500 cursor-default">
              Um pouco dos nossos projetos na prática 👇🏻
            </h2>
          </div>

          <div className="mt-16">
            <div className="relative max-w-4xl mx-auto">
              <Carousel
                plugins={[autoplayPlugin]}
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {projects.map((project, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div className="rounded-xl overflow-hidden border-[3px] border-[#C08A57] bg-[#C08A57] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                          <img
                            src={loadAll || index < 2 ? project.image : undefined}
                            alt={project.alt}
                            width={PROJECT_IMAGE_WIDTH}
                            height={PROJECT_IMAGE_HEIGHT}
                            className="w-full h-auto aspect-[1000/1414] object-contain bg-[#FFF9F0]"
                            loading={loadAll ? "eager" : "lazy"}
                            decoding="async"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

BonusSection.displayName = "BonusSection";

export default BonusSection;
