import carpinteiroLado from "@/assets/pergolados/carpinteiro-bracos-lado.webp";
import carpinteiroLadoSm from "@/assets/pergolados/carpinteiro-bracos-lado-180.webp";

const AboutSection = () => {
  const scrollToOffer = () => {
    const targetSection = document.getElementById('ofertas');
    if (targetSection) {
      const offset = 80;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
  return <section id="para-quem" className="py-6 md:py-10 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-end justify-center gap-2 animate-fade-in">
            <img src={carpinteiroLado} srcSet={`${carpinteiroLadoSm} 180w, ${carpinteiroLado} 363w`} sizes="(min-width: 768px) 80px, 60px" alt="Carpinteiro de braços cruzados" width={363} height={491} className="flex-none w-[60px] md:w-[80px] h-auto" loading="lazy" decoding="async" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins bg-gradient-title-primary bg-clip-text text-transparent text-left pb-1">
               Pack do Carpinteiro Rico é para você se:
            </h2>
          </div>

          <div className="grid gap-2.5">
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gradient-to-r from-expandix-green/10 to-expandix-yellow/5 border border-expandix-green/20 hover:scale-[1.02] transition-all duration-300">
              <div className="w-7 h-7 bg-gradient-to-r from-expandix-green to-expandix-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-expandix-dark text-xs font-bold">🧠</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed font-medium">Cansou de <strong>cobrar no chute</strong> e descobrir no fim da obra que trabalhou de graça</p>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gradient-to-r from-expandix-green/10 to-expandix-yellow/5 border border-expandix-green/20 hover:scale-[1.02] transition-all duration-300">
              <div className="w-7 h-7 bg-gradient-to-r from-expandix-green to-expandix-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-expandix-dark text-xs font-bold">💭</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed font-medium">Perde serviço porque o cliente <strong>não consegue imaginar o pergolado</strong> e some com o famoso "vou pensar"</p>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gradient-to-r from-expandix-green/10 to-expandix-yellow/5 border border-expandix-green/20 hover:scale-[1.02] transition-all duration-300">
              <div className="w-7 h-7 bg-gradient-to-r from-expandix-green to-expandix-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-expandix-dark text-xs font-bold">⚡</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed font-medium">Não aguenta mais <strong>voltar na obra pra consertar goteira</strong> sem receber um centavo a mais</p>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gradient-to-r from-expandix-green/10 to-expandix-yellow/5 border border-expandix-green/20 hover:scale-[1.02] transition-all duration-300">
              <div className="w-7 h-7 bg-gradient-to-r from-expandix-green to-expandix-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-expandix-dark text-xs font-bold">🌱</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed font-medium">Já pagou <strong>do próprio bolso</strong> a viga que sobrou, o caibro que faltou e o parafuso que ficou na loja</p>
            </div>
          </div>

          {/* Botão RESGATAR BÔNUS EXCLUSIVOS */}
          <div className="mt-8">
            
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;