import { memo } from "react";
import projetosGrid from "@/assets/pergolados/pergolados-grade.webp";
import oQueVoceRecebera from "@/assets/pergolados/o-que-voce-recebera.webp";
import bonusTablets from "@/assets/pergolados/bonus-tablets.webp";

// Fixed dimensions to prevent CLS
const PROJETOS_IMAGE_WIDTH = 1080;
const PROJETOS_IMAGE_HEIGHT = 846;
const RECEBERA_WIDTH = 1080;
const RECEBERA_HEIGHT = 746;

const ContentSection = memo(() => {
  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-primary bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-all duration-500 cursor-default">
              📘 O que você receberá:
            </h2>

            <div className="mt-6 space-y-4 text-left bg-gradient-to-br from-calm-green/5 to-calm-green-vibrant/5 rounded-xl p-4 md:p-6 border border-calm-green/20">
              <p className="text-foreground/90 text-sm md:text-base font-medium leading-relaxed">
                É um sistema completo de produção e lucro, que combina:
              </p>
              <img
                src={oQueVoceRecebera}
                alt="Facilidade, profissionalismo, tempo de volta e autoridade"
                width={RECEBERA_WIDTH}
                height={RECEBERA_HEIGHT}
                className="w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async" />
            </div>

          </div>
        </div>
      </div>

      {/* Imagem de exemplos de projetos - full width */}
      <div className="mt-8" style={{ aspectRatio: `${PROJETOS_IMAGE_WIDTH}/${PROJETOS_IMAGE_HEIGHT}` }}>
        <img
          src={projetosGrid}
          alt="Pergolados de madeira prontos: varanda, área gourmet, deck, rústico, cobertura e garagem"
          width={PROJETOS_IMAGE_WIDTH}
          height={PROJETOS_IMAGE_HEIGHT}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async" />
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="max-w-xl mx-auto">
          <img
            src={bonusTablets}
            alt="+4 bônus grátis levando hoje"
            width={900}
            height={1362}
            className="w-full h-auto"
            loading="lazy"
            decoding="async" />
        </div>
      </div>
    </section>);
});

ContentSection.displayName = "ContentSection";

export default ContentSection;
