import { Brain, MessageCircle, Zap, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Brain,
    text: "Pra quem cansou de perder tempo desenhando e quer começar a vender.",
  },
  {
    icon: MessageCircle,
    text: "Pra quem quer dobrar a produção sem precisar trabalhar dobrado.",
  },
  {
    icon: Zap,
    text: "Pra quem quer impressionar o cliente com projetos modernos e bem acabados.",
  },
  {
    icon: Leaf,
    text: "Pra quem quer parar de desperdiçar material e aumentar o lucro.",
  },
];

const TargetAudience = () => {
  const scrollToOffers = () => {
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

  return (
    <section id="pra-quem" className="py-16 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Pra quem é o Pack do Marceneiro Rico:
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border/30"
            >
              <div className="bg-primary/20 rounded-lg p-3 flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToOffers}
            className="bg-green-cta hover:bg-green-cta-hover text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 glow-green hover:scale-105 h-auto"
          >
            RESGATAR BÔNUS EXCLUSIVOS!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
