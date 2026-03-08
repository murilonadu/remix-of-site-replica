import { Zap } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-expandix-dark via-expandix-dark/95 to-expandix-dark relative overflow-hidden noise-overlay">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-expandix-yellow/8 rounded-full blur-3xl animate-glow-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <button
            onClick={() => {
              const offersSection = document.getElementById('ofertas');
              if (offersSection) {
                const offset = 80;
                const targetPosition = offersSection.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
              }
            }}
            className="inline-block mb-6 px-8 py-3 font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 cursor-pointer text-expandix-dark bg-gradient-to-r from-expandix-yellow to-expandix-green shadow-glow-yellow hover:shadow-glow-green animate-bounce relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
            </div>
            <span className="relative z-10">🎁 RESGATAR BÔNUS EXCLUSIVOS! 🎁</span>
          </button>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-expandix-yellow to-expandix-green bg-clip-text text-transparent text-shimmer">
            Acesse os projetos por onde quiser
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="group relative rounded-2xl p-5 md:p-6 glass-premium glow-border-yellow transition-all duration-500 hover:scale-105 animate-fade-in max-w-xs">
            <div className="absolute inset-0 bg-gradient-to-br from-expandix-green/10 to-expandix-yellow/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 text-center space-y-3">
              <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-expandix-yellow to-expandix-green shadow-glow-yellow animate-glow-pulse">
                <Zap className="w-7 h-7 text-expandix-dark" />
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
    </section>
  );
};

export default GuaranteeSection;
