import { memo, useRef, useEffect, useState, useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import project1 from "@/assets/chapa/movel-02.webp";
import project2 from "@/assets/chapa/movel-13.webp";
import project3 from "@/assets/chapa/movel-07.webp";
import project4 from "@/assets/chapa/movel-21.webp";
import project5 from "@/assets/chapa/movel-09.webp";
import project6 from "@/assets/chapa/movel-18.webp";
import project7 from "@/assets/chapa/movel-23.webp";
import project8 from "@/assets/chapa/movel-10.webp";

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
    { image: project1, alt: "Cômoda 3 gavetas" },
    { image: project2, alt: "Balcão de pia 1,20 m" },
    { image: project3, alt: "Rack 1,80 m com 2 portas e nicho" },
    { image: project4, alt: "Guarda-roupa infantil 2 portas" },
    { image: project5, alt: "Estante de nichos" },
    { image: project6, alt: "Kit banheiro: gabinete + espelheira + torre" },
    { image: project7, alt: "Cama montessoriana casinha" },
    { image: project8, alt: "Aparador com 2 gavetas" },
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
                            className="w-full h-64 object-contain bg-[#E9E2D6]"
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
