import Autoplay from "embla-carousel-autoplay";
import bonusMoveisPraticos from "@/assets/bonus-moveis-praticos.png";
import bonusSelagemPerfeita from "@/assets/bonus-selagem-perfeita.png";
import bonus100Moveis from "@/assets/bonus-100-moveis.png";
import bonusContratoAntifraude from "@/assets/bonus-contrato-antifraude.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const bonusImages = [
  { src: bonusMoveisPraticos, alt: "Bônus Móveis Práticos" },
  { src: bonusSelagemPerfeita, alt: "Bônus Selagem Perfeita" },
  { src: bonus100Moveis, alt: "Bônus 100 Móveis + Lucrativos" },
  { src: bonusContratoAntifraude, alt: "Bônus Contrato Anti-Fraude" },
];

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-expandix-dark via-expandix-dark/95 to-expandix-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <button
            onClick={() => {
              const offersSection = document.getElementById('ofertas');
              if (offersSection) {
                const offset = 80;
                const targetPosition = offersSection.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
              }
            }}
            className="inline-block mb-6 px-8 py-3 bg-gradient-to-r from-expandix-yellow to-expandix-green font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-expandix-yellow/50 cursor-pointer text-slate-50 animate-bounce bg-transparent"
          >
            🎁 RESGATAR BÔNUS EXCLUSIVOS! 🎁
          </button>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-expandix-yellow to-expandix-green bg-clip-text text-transparent">
            HOJE VOCÊ AINDA LEVA TUDO ISSO DE PRESENTE
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 1800, stopOnInteraction: false })]}
          >
            <CarouselContent className="-ml-3">
              {bonusImages.map((bonus, index) => (
                <CarouselItem key={index} className="pl-3 basis-[85%] sm:basis-[70%] md:basis-1/2">
                  <img
                    src={bonus.src}
                    alt={bonus.alt}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
