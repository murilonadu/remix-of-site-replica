import { Zap } from "lucide-react";

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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-expandix-yellow to-expandix-green bg-clip-text text-transparent">
            HOJE VOCÊ AINDA LEVA TUDO ISSO DE PRESENTE
          </h2>
        </div>

        



















      </div>
    </section>);

};

export default GuaranteeSection;