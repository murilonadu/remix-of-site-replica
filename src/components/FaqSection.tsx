import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const faqs = [
    { question: "Esse pacote serve pra qualquer tipo de marcenaria?", answer: "Sim! Os projetos incluem desde móveis residenciais até projetos comerciais e industriais. São mais de 1.000 projetos que abrangem todos os segmentos da marcenaria." },
    { question: "Eu preciso saber usar algum programa específico?", answer: "Não! Todos os projetos vêm em formatos universais (PDF, DWG) que podem ser abertos em qualquer programa de design ou até mesmo impressos diretamente." },
    { question: "Os projetos são atualizados e modernos?", answer: "Absolutamente! Nossa equipe atualiza constantemente a biblioteca com tendências atuais do mercado." },
    { question: "Posso usar esses projetos para vender para meus clientes?", answer: "Sim! Você tem total liberdade para usar os projetos comercialmente." },
    { question: "Recebo na hora?", answer: "Sim! O acesso é 100% digital e imediato. Assim que o pagamento for confirmado, você receberá por email o link para download." },
    { question: "E se eu não gostar do projeto?", answer: "Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro." }
  ];
  const toggleItem = (index: number) => setOpenItems(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      {/* Ambient decoration */}
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />
      <div className="absolute top-20 right-0 w-60 h-60 bg-expandix-green/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-expandix-green to-expandix-yellow bg-clip-text text-transparent text-shimmer">
              Perguntas Frequentes
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-expandix-green to-expandix-yellow mx-auto rounded-full mb-3" />
            <p className="text-muted-foreground">Aqui estão as dúvidas mais frequentes</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-soft border border-expandix-green/10 overflow-hidden hover:shadow-glow-green hover:border-expandix-green/25 transition-all duration-500 group"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 md:p-5 text-left flex items-center justify-between hover:bg-expandix-green/5 transition-colors"
                >
                  <h3 className="text-base font-semibold text-foreground pr-4 group-hover:text-calm-green transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-expandix-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-expandix-green/20 transition-colors">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-4 h-4 text-expandix-green" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-expandix-green" />
                    )}
                  </div>
                </button>
                {openItems.includes(index) && (
                  <div className="px-4 md:px-5 pb-4 md:pb-5 animate-fade-in">
                    <div className="h-px bg-gradient-to-r from-expandix-green/20 via-expandix-yellow/20 to-transparent mb-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
