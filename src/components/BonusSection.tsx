import { memo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import project1 from "@/assets/projeto-guarda-roupa.webp";
import project2 from "@/assets/projeto-sala-estar.webp";
import project3 from "@/assets/projeto-bancadas.webp";
import project4 from "@/assets/projeto-cuba-esculpida.webp";
import project5 from "@/assets/projeto-cozinha.webp";

const PROJECT_IMAGE_WIDTH = 400;
const PROJECT_IMAGE_HEIGHT = 256;

const BonusSection = memo(() => {
  const projects = [
    { image: project1, alt: "Detalhamento de Guarda Roupa" },
    { image: project2, alt: "Projeto Sala de Estar" },
    { image: project3, alt: "Projetos de Bancadas e Móveis" },
    { image: project4, alt: "Cuba Esculpida - Detalhamento" },
    { image: project5, alt: "Projeto de Cozinha Completo" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-expandix-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-expandix-yellow/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-glow bg-clip-text text-transparent text-shimmer">
              Um pouco dos nossos projetos na prática 👇🏻
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-expandix-green to-expandix-yellow mx-auto rounded-full" />
          </div>

          <div className="mt-16">
            <div className="relative max-w-4xl mx-auto">
              <Carousel
                plugins={[Autoplay({ delay: 3000 })]}
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {projects.map((project, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div className="rounded-xl overflow-hidden shadow-premium hover:shadow-glow-green transition-all duration-500 hover:scale-[1.03] group border border-calm-green/10 hover:border-calm-green/30">
                          <div className="relative overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.alt}
                              width={PROJECT_IMAGE_WIDTH}
                              height={PROJECT_IMAGE_HEIGHT}
                              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                              decoding="async"
                            />
                            {/* Overlay gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-expandix-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
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

      <div className="absolute bottom-0 left-0 right-0 h-px divider-glow" />
    </section>
  );
});

BonusSection.displayName = "BonusSection";
export default BonusSection;
