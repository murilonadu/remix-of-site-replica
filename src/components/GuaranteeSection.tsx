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
            HOJE VOCÊ ainda LEVA TUDO ISSO DE PRESENTE
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="group relative bg-gradient-to-br from-expandix-dark/60 to-expandix-dark/40 rounded-2xl p-5 md:p-6 border border-expandix-yellow shadow-2xl shadow-expandix-yellow/20 transition-all duration-500 hover:scale-105 animate-fade-in backdrop-blur-md max-w-xs">
            <div className="absolute inset-0 bg-gradient-to-br from-expandix-green/10 to-expandix-yellow/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 text-center space-y-3">
              <div className="mx-auto w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-expandix-yellow to-expandix-green scale-110 animate-pulse">
                <Zap className="w-6 h-6 md:w-7 md:h-7 text-expandix-dark" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-expandix-yellow transition-colors duration-300">
                  Acesso Imediato
                </h3>
                <p className="text-sm md:text-base text-green-400/90">
                  Receba na hora após o pagamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default GuaranteeSection;