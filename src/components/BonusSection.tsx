import { memo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

// Fixed dimensions to prevent CLS
const PROJECT_IMAGE_WIDTH = 400;
const PROJECT_IMAGE_HEIGHT = 256;

const BonusSection = memo(() => {
  const projects = [{
    image: project1,
    alt: "Detalhamento de Guarda Roupa"
  }, {
    image: project2,
    alt: "Projeto Sala de Estar"
  }, {
    image: project3,
    alt: "Detalhamento de Armário"
  }, {
    image: project4,
    alt: "Projetos de Móveis"
  }, {
    image: project5,
    alt: "Cuba Esculpida"
  }, {
    image: project6,
    alt: "Projeto de Cozinha"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-glow bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-all duration-500 cursor-default">Um pouco dos nossos projetos na prática 👇🏻</h2>
          </div>

          {/* Carrossel de Projetos */}
          <div className="mt-16">
            <div className="relative max-w-4xl mx-auto">
              <Carousel plugins={[Autoplay({
              delay: 3000
            })]} opts={{
              align: "start",
              loop: true
            }} className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {projects.map((project, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                          <img 
                            src={project.image} 
                            alt={project.alt} 
                            width={PROJECT_IMAGE_WIDTH}
                            height={PROJECT_IMAGE_HEIGHT}
                            className="w-full h-64 object-cover" 
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>;
});

BonusSection.displayName = "BonusSection";

export default BonusSection;