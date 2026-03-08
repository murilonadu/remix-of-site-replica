import { Button } from "@/components/ui/button";
import { Shield, Award, Clock, Star } from "lucide-react";
import { useState, useEffect } from "react";
import productMockup from "@/assets/MOCKUP_1.webp";

const HERO_IMAGE_WIDTH = 500;
const HERO_IMAGE_HEIGHT = 400;

const HeroSection = () => {
  const [peopleCount, setPeopleCount] = useState(1247);
  const targetCount = 1247;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setPeopleCount(targetCount);
      return;
    }
    const duration = 2000;
    const increment = targetCount / (duration / 150);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setPeopleCount(targetCount);
        clearInterval(timer);
      } else {
        setPeopleCount(Math.floor(current));
      }
    }, 150);
    return () => clearInterval(timer);
  }, [isMobile]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-expandix-dark via-expandix-dark/95 to-expandix-dark overflow-hidden noise-overlay">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-expandix-green/8 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-expandix-yellow/6 rounded-full blur-3xl animate-glow-pulse animation-delay-1500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-expandix-green/5 to-expandix-yellow/5 rounded-full blur-3xl" />
      </div>

      {/* Floating trust badges - desktop only */}
      <div className="absolute top-24 left-8 glass-premium rounded-2xl p-4 hidden lg:block animate-fade-in glow-border-green">
        <div className="flex items-center gap-3 text-expandix-green">
          <Shield className="w-5 h-5" />
          <div>
            <div className="text-sm font-semibold">100% Seguro</div>
            <div className="text-xs opacity-70">SSL Criptografado</div>
          </div>
        </div>
      </div>

      <div className="absolute top-44 right-8 glass-premium rounded-2xl p-4 hidden lg:block animate-fade-in animation-delay-500 glow-border-yellow">
        <div className="flex items-center gap-3 text-expandix-yellow">
          <Award className="w-5 h-5" />
          <div>
            <div className="text-sm font-semibold">Garantido</div>
            <div className="text-xs opacity-70">7 dias</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 left-12 glass-premium rounded-2xl p-4 hidden lg:block animate-fade-in animation-delay-1000 glow-border-green">
        <div className="flex items-center gap-3 text-expandix-green">
          <Clock className="w-5 h-5" />
          <div>
            <div className="text-sm font-semibold">Acesso Imediato</div>
            <div className="text-xs opacity-70">Download instantâneo</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Top stats */}
          <div className="flex justify-center gap-2 md:gap-3 mb-4 md:mb-6 flex-wrap">
            {[
              { value: "+1.2k", label: "Pessoas transformadas", color: "expandix-green" },
              { value: "97%", label: "Satisfação", color: "expandix-yellow" },
              { value: "24h", label: "Suporte", color: "expandix-green" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-premium rounded-xl p-2 md:p-3 hover:scale-105 transition-all duration-300 group cursor-default"
              >
                <div className={`text-sm md:text-base font-bold bg-gradient-to-r from-${stat.color} to-expandix-yellow bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-[10px] text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Main headline */}
          <div className="mb-6 md:mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-scale-in text-center leading-tight">
              <span className="bg-gradient-to-r from-expandix-yellow via-expandix-green to-expandix-yellow bg-clip-text text-transparent text-shimmer">
                Pare de criar do zero com 1.000 Projetos Prontos de Marcenaria em PDF
              </span>
            </h1>
            <div className="w-40 h-1 bg-gradient-to-r from-expandix-yellow to-expandix-green mx-auto mt-6 rounded-full" />
          </div>

          {/* Subheadline card */}
          <div className="max-w-5xl mx-auto">
            <div className="glass-premium rounded-2xl md:rounded-3xl p-4 md:p-8 glow-border-yellow animate-fade-in">
              <h2 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-200">
                Foi feito para otimizar o seu tempo e aumentar seu lucro sem desperdiçar madeira por calculo errado!
              </h2>
            </div>
          </div>

          {/* Product Mockup */}
          <div className="mt-8 md:mt-12 flex justify-center relative">
            {/* Glow behind mockup */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-expandix-green/20 to-expandix-yellow/20 rounded-full blur-3xl animate-glow-pulse" />
            </div>
            <img
              src={productMockup}
              alt="Pack Marceneiro Rico"
              width={HERO_IMAGE_WIDTH}
              height={HERO_IMAGE_HEIGHT}
              className="w-80 md:w-[420px] lg:w-[500px] h-auto drop-shadow-2xl relative z-10"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </div>

          {/* CTA Button */}
          <div className="mt-8 md:mt-12">
            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse" />
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold text-lg md:text-xl py-6 md:py-8 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 border border-green-400/30 px-6 md:px-10 overflow-hidden"
                onClick={() => {
                  const targetSection = document.getElementById('para-quem');
                  if (targetSection) {
                    const offset = 80;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                  }
                }}
              >
                {/* Shine effect on button */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                </div>
                <span className="flex items-center gap-3 relative z-10">
                  <span className="hidden md:inline">📖 ACESSAR PROJETOS</span>
                  <span className="md:hidden">OBTER ACESSO VITALÍCIO</span>
                </span>
              </Button>
            </div>
            <p className="mt-4 text-sm flex items-center justify-center gap-2 text-slate-400">
              <Shield className="w-4 h-4 text-expandix-green" />
              Compra 100% segura e protegida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
