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
            
            🎁 RESGATAR BÔNUS EXCLUSIVOS! 🎁
          </button>

          {/* Acesso info */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-expandix-yellow to-expandix-green bg-clip-text text-transparent">
              Acesse os projetos por onde quiser
            </h2>
            <div className="relative group rounded-2xl p-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-expandix-green/10 to-expandix-yellow/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center gap-2 text-slate-50">
                <Zap className="w-5 h-5 text-expandix-yellow" />
                <span className="font-bold">Acesso Imediato</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-300">Receba na hora após o pagamento</span>
              </div>
            </div>
          </div>

          {/* Bonus section */}
          <div className="max-w-lg mx-auto mb-10">
            

            
            











            
          </div>

          

          
        </div>

        


















        
      </div>
    </section>);

};

export default GuaranteeSection;