import { memo, useRef, useEffect, useState, useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import info1 from "@/assets/chapa/info-02-comoda-3-gavetas.webp";
import info2 from "@/assets/chapa/info-07-rack-1-80.webp";
import info3 from "@/assets/chapa/info-09-estante-de-nichos.webp";
import info4 from "@/assets/chapa/info-13-balcao-de-pia.webp";

const PROJECT_IMAGE_WIDTH = 1080;
const PROJECT_IMAGE_HEIGHT = 1440;

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
    { image: info1, alt: "Cômoda 3 gavetas - projeto completo feito com uma chapa de MDF" },
    { image: info2, alt: "Rack 1,80 m - projeto completo feito com uma chapa de MDF" },
    { image: info3, alt: "Estante de nichos - projeto completo feito com uma chapa de MDF" },
    { image: info4, alt: "Balcão de pia 1,20 m - projeto completo feito com uma chapa de MDF" },
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
                        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                          <img
                            src={project.image}
                            alt={project.alt}
                            width={PROJECT_IMAGE_WIDTH}
                            height={PROJECT_IMAGE_HEIGHT}
                            className="w-full h-auto aspect-[3/4] object-cover bg-[#FBF7F1]"
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
