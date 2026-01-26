import { Button } from "@/components/ui/button";
import { Shield, Award, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import productMockup from "@/assets/MOCKUP_1-3.png";
const HeroSection = () => {
  const [peopleCount, setPeopleCount] = useState(0);
  const targetCount = 1247;
  useEffect(() => {
    const duration = 2000;
    const increment = targetCount / (duration / 50);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setPeopleCount(targetCount);
        clearInterval(timer);
      } else {
        setPeopleCount(Math.floor(current));
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);
  return <section className="relative min-h-screen bg-gradient-to-br from-expandix-dark via-expandix-dark/95 to-expandix-dark overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-expandix-green rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-expandix-yellow rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-expandix-green rounded-full animate-pulse opacity-50 animation-delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-expandix-yellow rounded-full animate-ping opacity-30 animation-delay-2000"></div>
        <div className="absolute top-1/6 right-1/2 w-2 h-2 bg-expandix-green/40 rounded-full animate-pulse opacity-40 animation-delay-3000"></div>
      </div>

      {/* Background with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-expandix-green/20 via-expandix-green/10 to-transparent"></div>

      {/* Trust indicators floating */}
      <div className="absolute top-20 left-8 bg-expandix-green/20 backdrop-blur-md rounded-2xl p-4 border border-expandix-green/30 animate-float hidden lg:block">
        <div className="flex items-center gap-3 text-expandix-green">
          <Shield className="w-5 h-5 text-expandix-green" />
          <div>
            <div className="text-sm font-semibold">100% Seguro</div>
            <div className="text-xs opacity-80">SSL Criptografado</div>
          </div>
        </div>
      </div>

      <div className="absolute top-40 right-8 bg-expandix-yellow/20 backdrop-blur-md rounded-2xl p-4 border border-expandix-yellow/30 animate-float animation-delay-1000 hidden lg:block">
        <div className="flex items-center gap-3 text-expandix-yellow">
          <Award className="w-5 h-5 text-expandix-yellow" />
          <div>
            <div className="text-sm font-semibold">Garantido</div>
            <div className="text-xs opacity-80">7 dias</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 left-12 bg-expandix-green/20 backdrop-blur-md rounded-2xl p-4 border border-expandix-green/30 animate-float animation-delay-2000 hidden lg:block">
        <div className="flex items-center gap-3 text-expandix-green">
          <Clock className="w-5 h-5 text-expandix-green" />
          <div>
            <div className="text-sm font-semibold">Acesso Imediato</div>
            <div className="text-xs opacity-80">Download instantâneo</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Top stats/metrics */}
          <div className="flex justify-center gap-1.5 md:gap-2 mb-4 md:mb-6 flex-wrap">
            <div className="bg-gradient-to-r from-expandix-green/30 to-expandix-green/20 backdrop-blur-md rounded-lg p-1.5 md:p-2 text-expandix-green border border-expandix-green/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-expandix-green/20">
              <div className="text-sm md:text-base font-bold bg-gradient-to-r from-expandix-green to-expandix-yellow bg-clip-text text-transparent">+1.2k</div>
              <div className="text-[10px] opacity-90 font-medium">Pessoas transformadas</div>
            </div>
            <div className="bg-gradient-to-r from-expandix-yellow/30 to-expandix-yellow/20 backdrop-blur-md rounded-lg p-1.5 md:p-2 text-expandix-dark border border-expandix-yellow/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-expandix-yellow/20">
              <div className="text-sm md:text-base font-bold bg-gradient-to-r from-expandix-yellow to-expandix-green bg-clip-text text-transparent">97%</div>
              <div className="text-[10px] opacity-90 font-medium">Satisfação</div>
            </div>
            <div className="bg-gradient-to-r from-expandix-green/30 to-expandix-green/20 backdrop-blur-md rounded-lg p-1.5 md:p-2 text-expandix-green border border-expandix-green/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-expandix-green/20">
              <div className="text-sm md:text-base font-bold bg-gradient-to-r from-expandix-green to-expandix-yellow bg-clip-text text-transparent">24h</div>
              <div className="text-[10px] opacity-90 font-medium">Suporte</div>
            </div>
          </div>

          {/* Brand Name with animation */}
          <div className="mb-6 md:mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-scale-in text-center">
              <span className="bg-gradient-to-r from-expandix-yellow to-expandix-green bg-clip-text text-transparent text-justify">Pare de criar do zero com 1.000 Projetos Prontos de Marcenaria em PDF     </span>{" "}
              <span className="text-expandix-yellow drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">​ </span>
            </h1>
            <div className="w-40 h-1 bg-gradient-to-r from-expandix-yellow to-expandix-green mx-auto mt-4 rounded-full animate-slide-in-right"></div>
          </div>

          {/* Main headline */}
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in animation-delay-500">
            <div className="bg-expandix-dark/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-8 border border-expandix-yellow/30 shadow-2xl">
              <h2 className="text-base md:text-lg lg:text-xl leading-relaxed hover-scale transition-colors duration-300 text-slate-50">Foi feito para otimizar o seu tempo e aumentar seu lucro sem desperdiçar madeira por calculo errado!</h2>
            </div>
          </div>

          {/* Product Mockup */}
          <div className="mt-8 md:mt-12 flex justify-center animate-fade-in animation-delay-1000">
            <img 
              src={productMockup} 
              alt="Pack Marceneiro Rico" 
              width={500}
              height={400}
              className="w-80 md:w-[420px] lg:w-[500px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
              loading="eager" 
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Enhanced CTA Button */}
          <div className="mt-8 md:mt-12 animate-fade-in animation-delay-1500">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Button size="lg" className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold text-lg md:text-xl py-6 md:py-8 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 border-2 border-green-400/50 px-4 md:px-[25px] animate-bounce" onClick={() => {
              const targetSection = document.getElementById('para-quem');
              if (targetSection) {
                const offset = 80;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                });
              }
            }}>
                <span className="flex items-center gap-3">
                  <span className="hidden md:inline">📖 ACESSAR PROJETOS</span>
                  <span className="md:hidden">OBTER ACESSO VITALÍCIO  

  </span>
                </span>
              </Button>
            </div>
            <p className="mt-4 text-sm flex items-center justify-center gap-2 text-slate-50">
              <Shield className="w-4 h-4 text-expandix-green" />
              Compra 100% segura e protegida
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-expandix-yellow/20 to-expandix-green/20 rounded-full blur-2xl animate-pulse opacity-60 hidden md:block"></div>
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-expandix-green/30 to-expandix-yellow/20 rounded-full blur-xl animate-pulse opacity-50 animation-delay-1000 hidden md:block"></div>
      <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-expandix-yellow/15 rounded-full blur-xl animate-pulse opacity-40 animation-delay-2000 hidden md:block"></div>
      <div className="absolute bottom-1/4 right-1/6 w-36 h-36 bg-gradient-to-br from-expandix-green/20 to-expandix-yellow/15 rounded-full blur-2xl animate-pulse opacity-30 animation-delay-3000 hidden md:block"></div>
    </section>;
};
export default HeroSection;