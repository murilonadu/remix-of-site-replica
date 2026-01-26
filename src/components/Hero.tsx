import { Book } from "lucide-react";
import marceneiroTablet from "@/assets/marceneiro-tablet.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToTarget = () => {
    const targetSection = document.getElementById('pra-quem');
    if (targetSection) {
      const offset = 80;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-8 md:py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-foreground">1.000 Projetos Prontos Profissionais de Marcenaria</span>
          <span className="text-accent"> +2 BÔNUS</span>
        </h1>

        {/* Decorative line */}
        <div className="w-32 h-1 bg-primary mx-auto mb-8" />

        {/* Subheadline */}
        <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mb-8 border border-border/30">
          <p className="text-lg md:text-xl text-foreground/90">
            Enquanto você perde horas criando do zero, seu concorrente já entregou o projeto, fechou a venda e tá enchendo o bolso.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-8">
          <img
            src={marceneiroTablet}
            alt="Pack Marceneiro Rico"
            className="mx-auto max-w-md md:max-w-lg w-full animate-float"
          />
        </div>

        {/* CTA Button */}
        <Button
          onClick={scrollToTarget}
          className="inline-flex items-center gap-3 bg-green-cta hover:bg-green-cta-hover text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 glow-green hover:scale-105 h-auto"
        >
          <Book className="w-6 h-6" />
          ACESSAR PROJETOS
        </Button>

        <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Compra 100% segura e protegida
        </p>
      </div>
    </section>
  );
};

export default Hero;
