import { Scissors, TrendingUp, Zap, Library, Check } from "lucide-react";

const features = [
  {
    icon: Scissors,
    title: "Corte Perfeito™",
    description: "Medidas exatas e planos de corte otimizados — zero erro, zero desperdício.",
  },
  {
    icon: TrendingUp,
    title: "Blueprint de Lucro™",
    description: "Projetos organizados por rentabilidade. Escolha o que dá mais lucro e execute em menos tempo.",
  },
  {
    icon: Zap,
    title: "Plug & Lucre™",
    description: "Arquivos prontos pra usar: baixe, corte e venda — ajuste se quiser.",
  },
  {
    icon: Library,
    title: "Biblioteca Inteligente™",
    description: "Projetos modernos, atualizados e testados por profissionais reais.",
  },
];

const benefits = [
  "Lista Completa de Materiais",
  "Detalhamento das Ferramentas",
  "Planos de Montagem",
  "Projeto Para Móveis com Medidas",
  "Planos de Corte",
  "Projetos para Marcenaria",
  "Planilha de Controle de Custos",
  "Móveis para Áreas Externas",
  "Projetos de Grande Porte",
  "Pequenos Artesanatos",
  "Projetos para Escritórios",
  "Projetos Para CNS",
];

const Features = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          <span className="text-primary">📘</span> O que você terá acesso:
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          É um sistema completo de produção e lucro, que combina:
        </p>

        {/* Main features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 rounded-lg p-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-secondary/30 rounded-xl px-4 py-3 border border-border/20"
            >
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
