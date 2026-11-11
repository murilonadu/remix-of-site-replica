import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const faqs = [
    { question: "Esse pacote serve pra qualquer tipo de marcenaria?", answer: "Sim! São 25 móveis para quarto, sala, cozinha, banheiro, lavanderia, quarto infantil e escritório, e cada um sai inteiro de uma única chapa de MDF." },
    { question: "Eu preciso saber usar algum programa específico?", answer: "Não! Todos os projetos vêm em PDF, com lista de peças, plano de corte e montagem passo a passo. Dá para abrir no celular ou imprimir." },
    { question: "Os projetos são atualizados e modernos?", answer: "Sim! São móveis com medidas padrão de mercado e acabamento atual: corpo branco com frentes amadeiradas." },
    { question: "Posso usar esses projetos para vender para meus clientes?", answer: "Sim! Você tem total liberdade para usar os projetos comercialmente." },
    { question: "Recebo na hora?", answer: "Sim! O acesso é 100% digital e imediato. Assim que o pagamento for confirmado, você receberá por email o link para download." },
    { question: "E se eu não gostar do projeto?", answer: "Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro." }
  ];
  const toggleItem = (index: number) => setOpenItems(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-expandix-green to-expandix-yellow bg-clip-text text-transparent">Perguntas Frequentes</h2>
            <p className="text-muted-foreground">Aqui estão as dúvidas mais frequentes</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl shadow-md border border-expandix-green/10 overflow-hidden">
                <button onClick={() => toggleItem(index)} className="w-full p-4 text-left flex items-center justify-between hover:bg-expandix-green/5 transition-colors">
                  <h3 className="text-base font-semibold text-foreground pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? <ChevronUp className="w-5 h-5 text-expandix-green" /> : <ChevronDown className="w-5 h-5 text-expandix-green" />}
                </button>
                {openItems.includes(index) && <div className="px-4 pb-4"><p className="text-sm text-muted-foreground">{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
