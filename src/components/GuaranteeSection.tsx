import { Zap } from "lucide-react";
import bonus1 from "@/assets/bonus-1.webp";
import bonus2 from "@/assets/bonus-2.webp";
import bonus3 from "@/assets/bonus-3.webp";
import bonus4 from "@/assets/bonus-4.webp";

const bonusImages = [
{ image: bonus1, alt: "Os 100 Móveis Mais Vendidos e Lucrativos" },
{ image: bonus2, alt: "Contrato de Serviço AntiFraude" },
{ image: bonus3, alt: "50 Dicas de Performance" },
{ image: bonus4, alt: "Suporte VIP via WhatsApp" }];


const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-expandix-dark via-expandix-dark/95 to-expandix-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <button
            onClick={() => {
              const offersSection = document.getElementById('ofertas');
              if (offersSection) {
                const offset = 80;
                const targetPosition = offersSection.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-block mb-6 px-8 py-3 bg-gradient-to-r from-expandix-yellow to-expandix-green font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-expandix-yellow/50 cursor-pointer text-slate-50 animate-bounce bg-transparent">
            
            🎁 RESGATAR TODOS ESSES BÔNUS ABAIXO! 🎁
          </button>

          {/* Bonus section */}
          <div className="max-w-2xl mx-auto mb-10">
            

            
            <div className="space-y-4">
              {bonusImages.map((bonus, index) =>
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <img
                  src={bonus.image}
                  alt={bonus.alt}
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                  decoding="async" />
                
                </div>
              )}
            </div>
          </div>

          

          
        </div>

        


















        
      </div>
    </section>);

};

export default GuaranteeSection;