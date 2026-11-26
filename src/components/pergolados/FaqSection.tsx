import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const faqs = [
    { question: "É pagamento único ou tem mensalidade?", answer: "Pagamento único. Você paga uma vez e o acesso é seu para sempre. Não tem mensalidade nem cobrança escondida." },
    { question: "Esse pacote serve pra qualquer tipo de marcenaria?", answer: "Serve para quem faz pergolado de madeira: são modelos em madeira serrada e eucalipto, encostados na parede ou independentes, de 3x3 a 6x5." },
    { question: "Eu preciso saber usar algum programa específico?", answer: "Não! Tudo vem em PDF, com a lista de material de cada pergolado. Dá para abrir no celular na obra ou imprimir." },
    { question: "E se o cliente quiser uma medida diferente?", answer: "Você pega o projeto de medida mais próxima e ajusta. O espaçamento dos caibros e das ripas vem indicado em cada projeto, então fica fácil recalcular a quantidade de peças." },
    { question: "Os projetos são atualizados e modernos?", answer: "Sim! São modelos atuais para área gourmet, garagem, varanda e piscina, do rústico ao moderno." },
    { question: "Posso usar esses projetos para vender para meus clientes?", answer: "Sim! Você pode mostrar os modelos aos seus clientes e executar os serviços à vontade." },
    { question: "Recebo na hora?", answer: "Sim! O acesso é 100% digital e imediato. Assim que o pagamento for confirmado, você recebe por e-mail e WhatsApp." },
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
