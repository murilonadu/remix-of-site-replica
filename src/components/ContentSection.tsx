import { memo } from "react";
import projetosGrid from "@/assets/projetos-grid.webp";
import carrosselModulos1 from "@/assets/carrossel-modulos-1.png";
import carrosselModulos2 from "@/assets/carrossel-modulos-2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Fixed dimensions to prevent CLS
const PROJETOS_IMAGE_WIDTH = 1200;
const PROJETOS_IMAGE_HEIGHT = 600;

const carrosselImages = [
  { src: carrosselModulos1, alt: "Módulos 1 a 3 - Lista de Materiais, Ferramentas, Planos de Montagem" },
  { src: carrosselModulos2, alt: "Módulos 4 a 6 - Técnicas de Corte, Juntas e Fixação, Acabamento Final" },
];

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

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-calm-green text-lg flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-bold text-calm-green">Corte Perfeito™</span>
                    <p className="text-foreground/80 text-sm">Medidas exatas e planos de corte otimizados — zero erro, zero desperdício.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-calm-green text-lg flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-bold text-calm-green">Blueprint de Lucro™</span>
                    <p className="text-foreground/80 text-sm">Projetos organizados por rentabilidade. Escolha o que dá mais lucro e execute em menos tempo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-calm-green text-lg flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-bold text-calm-green">Plug & Lucre™</span>
                    <p className="text-foreground/80 text-sm">Arquivos prontos pra usar: baixe, corte e venda — ajuste se quiser.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-calm-green text-lg flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-bold text-calm-green">Biblioteca Inteligente™</span>
                    <p className="text-foreground/80 text-sm">Projetos modernos, atualizados e testados por profissionais reais.</p>
                  </div>
                </div>
              </div>
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
          decoding="async"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-1.5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-calm-green/10 border-calm-green/20 rounded-lg p-2 border transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:bg-calm-green/15 hover:border-calm-green/30 animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-calm-green to-calm-green-vibrant rounded flex items-center justify-center text-white font-bold text-[10px] shadow-md">
                    {feature.icon}
                  </div>
                  <p className="text-foreground font-medium leading-tight text-xs group-hover:text-calm-green transition-colors duration-300">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ContentSection.displayName = "ContentSection";

export default ContentSection;
