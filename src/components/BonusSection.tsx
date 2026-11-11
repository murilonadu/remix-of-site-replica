import { memo, useRef, useEffect, useState, useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import m02 from "@/assets/chapa/movel-02.webp";
import m13 from "@/assets/chapa/movel-13.webp";
import m07 from "@/assets/chapa/movel-07.webp";
import m21 from "@/assets/chapa/movel-21.webp";
import m09 from "@/assets/chapa/movel-09.webp";
import m18 from "@/assets/chapa/movel-18.webp";
import m23 from "@/assets/chapa/movel-23.webp";
import m10 from "@/assets/chapa/movel-10.webp";

const PROJECT_IMAGE_WIDTH = 400;
const PROJECT_IMAGE_HEIGHT = 256;

const BonusSection = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const autoplayPlugin = useMemo(() => Autoplay({ delay: 3000 }), []);

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
    return () => observer.disconnect();
  }, [autoplayPlugin]);

  const projects = [
    { image: m02, alt: "Cômoda 3 gavetas" },
    { image: m13, alt: "Balcão de pia 1,20 m" },
    { image: m07, alt: "Rack 1,80 m com 2 portas e nicho" },
    { image: m21, alt: "Guarda-roupa infantil 2 portas" },
    { image: m09, alt: "Estante de nichos" },
    { image: m18, alt: "Kit banheiro: gabinete + espelheira + torre" },
    { image: m23, alt: "Cama montessoriana casinha" },
    { image: m10, alt: "Aparador com 2 gavetas" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-glow bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-all duration-500 cursor-default">
              Alguns dos 25 móveis que saem de uma única chapa 👇🏻
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
                        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                          <img
                            src={project.image}
                            alt={project.alt}
                            width={PROJECT_IMAGE_WIDTH}
                            height={PROJECT_IMAGE_HEIGHT}
                            className="w-full h-64 object-cover bg-[#F4F1EC]"
                            loading="lazy"
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
