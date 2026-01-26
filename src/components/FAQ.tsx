import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Esse pacote serve pra qualquer tipo de marcenaria?",
    answer: "Sim! Os projetos cobrem desde móveis simples até projetos mais complexos. Serve para marcenaria residencial, comercial, artesanal e industrial.",
  },
  {
    question: "Eu preciso saber usar algum programa específico?",
    answer: "Não! Os projetos são em PDF, com medidas claras e detalhadas. Você pode visualizar em qualquer dispositivo ou imprimir.",
  },
  {
    question: "Os projetos são atualizados e modernos?",
    answer: "Sim! A biblioteca é atualizada semanalmente com novos projetos seguindo as tendências do mercado.",
  },
  {
    question: "Posso usar esses projetos para vender para meus clientes?",
    answer: "Com certeza! Você pode usar todos os projetos comercialmente e cobrar dos seus clientes normalmente.",
  },
  {
    question: "Recebo na hora?",
    answer: "Sim! Após a confirmação do pagamento, você recebe acesso imediato por email e WhatsApp.",
  },
  {
    question: "E se eu não gostar do projeto?",
    answer: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Aqui estão as dúvidas mais frequentes
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl border border-border/30 px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
