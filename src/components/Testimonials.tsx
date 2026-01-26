import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonialCarlos from "@/assets/testimonial-carlos.png";
import testimonialAndre from "@/assets/testimonial-andre.png";
import testimonialFelipe from "@/assets/testimonial-felipe.png";

const testimonials = [
  {
    name: "Carlos Santos",
    image: testimonialCarlos,
    text: "Os projetos são precisos e profissionais. Zero erro de medida. Só quem é do ramo entende o valor disso",
  },
  {
    name: "André Galdino",
    image: testimonialAndre,
    text: "Fiz essa semana o projeto que esta em alta e realmente vendeu muito fácil e o melhor foi que fui bem rápido de produzir já tendo as medidas, obrigado amigo!",
  },
  {
    name: "Felipe Leal",
    image: testimonialFelipe,
    text: "Cara, que material F@&#! Nunca mais perdi tempo quebrando cabeça pra criar do zero. É só escolher o projeto, produzir e faturar. Quem trabalha com marcenaria precisa ter isso aqui AGORA!",
  },
];

const Testimonials = () => {
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
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          <span className="text-primary">💬</span> Depoimentos de quem já usa nossos projetos:
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-semibold text-foreground">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full px-8 py-4 border border-primary/30">
            <span className="text-3xl">🌟</span>
            <p className="text-lg font-semibold text-foreground">
              Mais de 500 marceneiros já pararam de perder tempo criando do zero
            </p>
          </div>
          
          <Button
            onClick={scrollToOffers}
            className="mt-6 bg-green-cta hover:bg-green-cta-hover text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 glow-green hover:scale-105 h-auto"
          >
            ACESSAR AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
