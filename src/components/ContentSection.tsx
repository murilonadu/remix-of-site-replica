import { memo } from "react";
import projetosGrid from "@/assets/projetos-grid.webp";
import oQueVoceTera from "@/assets/o-que-voce-tera.png";
import carrosselModulos1 from "@/assets/carrossel-modulos-1.png";
import carrosselModulos2 from "@/assets/carrossel-modulos-2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious } from
"@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Fixed dimensions to prevent CLS
const PROJETOS_IMAGE_WIDTH = 1200;
const PROJETOS_IMAGE_HEIGHT = 600;

const carrosselImages = [
{ src: carrosselModulos1, alt: "Módulos 1 a 3 - Lista de Materiais, Ferramentas, Planos de Montagem" },
{ src: carrosselModulos2, alt: "Módulos 4 a 6 - Técnicas de Corte, Juntas e Fixação, Acabamento Final" }];


const ContentSection = memo(() => {
  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-primary bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-all duration-500 cursor-default">
              📘 O que você terá acesso:
            </h2>

            <div className="mt-6 space-y-4 text-left bg-gradient-to-br from-calm-green/5 to-calm-green-vibrant/5 rounded-xl p-4 md:p-6 border border-calm-green/20">
              <p className="text-foreground/90 text-sm md:text-base font-medium leading-relaxed">
                ​<br />
                É um sistema completo de produção e lucro, que combina:
              </p>

              <img
                src={oQueVoceTera}
                alt="Módulos: Medidas Exatas, Planos de Corte, Projetos Lucrativos, Prontos para Produção"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async" />
              

              































              
            </div>
          </div>
        </div>
      </div>
      
      {/* Imagem de exemplos de projetos - full width */}
      <div className="my-8" style={{ aspectRatio: `${PROJETOS_IMAGE_WIDTH}/${PROJETOS_IMAGE_HEIGHT}` }}>
        <img
          src={projetosGrid}
          alt="Exemplos de projetos de marcenaria"
          width={PROJETOS_IMAGE_WIDTH}
          height={PROJETOS_IMAGE_HEIGHT}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async" />
        
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="w-full">
            
            <CarouselContent>
              {carrosselImages.map((img, index) =>
              <CarouselItem key={index}>
                  <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain rounded-xl"
                  loading="lazy"
                  decoding="async" />
                
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>);

});

ContentSection.displayName = "ContentSection";

export default ContentSection;