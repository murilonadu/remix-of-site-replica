const AboutSection = () => {
  const scrollToOffer = () => {
    const targetSection = document.getElementById('ofertas');
    if (targetSection) {
      const offset = 80;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const items = [
    { emoji: "🧠", text: "Quer parar de criar projeto do zero" },
    { emoji: "💭", text: "Quer mostrar, orçar e fechar mais rápido" },
    { emoji: "⚡", text: "Quer evitar erro de medida e desperdício" },
    { emoji: "🌱", text: "Quer ganhar mais sem trabalhar mais" },
  ];

  return (
    <section id="para-quem" className="py-6 md:py-10 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Subtle ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-expandix-green/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-3 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins bg-gradient-title-primary bg-clip-text text-transparent text-shimmer">
              Pack do Marceneiro Rico é para você se:
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-expandix-green to-expandix-yellow mx-auto rounded-full" />
          </div>

          <div className="grid gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-gradient-to-r from-expandix-green/8 to-expandix-yellow/3 border border-expandix-green/15 hover:border-expandix-green/30 hover:shadow-glow-green transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute right-0 top-0 w-20 h-20 bg-expandix-green/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-8 h-8 bg-gradient-to-r from-expandix-green to-expandix-yellow rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-glow-green transition-shadow duration-500">
                  <span className="text-expandix-dark text-sm font-bold">{item.emoji}</span>
                </div>
                <p className="text-sm md:text-base text-foreground leading-relaxed font-medium relative z-10">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
