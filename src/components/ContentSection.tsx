import { memo } from "react";
import projetosGrid from "@/assets/projetos-grid.webp";

const PROJETOS_IMAGE_WIDTH = 1200;
const PROJETOS_IMAGE_HEIGHT = 600;

const ContentSection = memo(() => {
  const features = [
    { icon: "✅", text: "Lista Completa de Materiais" },
    { icon: "✅", text: "Detalhamento das Ferramentas" },
    { icon: "✅", text: "Planos de Montagem" },
    { icon: "✅", text: "Projeto Para Móveis com Medidas" },
    { icon: "✅", text: "Planos de Corte" },
    { icon: "✅", text: "Projetos para Marcenaria" },
    { icon: "✅", text: "Planilha de Controle de Custos" },
    { icon: "✅", text: "Móveis para Áreas Externas" },
    { icon: "✅", text: "Projetos de Grande Porte" },
    { icon: "✅", text: "Pequenos Artesanatos" },
    { icon: "✅", text: "Projetos para Escritórios" },
    { icon: "✅", text: "Projetos Para CNS" },
  ];

  return (
    <section className="py-8 md:py-12 bg-muted/30 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-calm-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-expandix-yellow/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-primary bg-clip-text text-transparent text-shimmer">
              📘 O que você terá acesso:
            </h2>

            <div className="mt-6 space-y-4 text-left bg-gradient-to-br from-calm-green/5 to-calm-green-vibrant/5 rounded-2xl p-4 md:p-6 border border-calm-green/20 shadow-premium relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-calm-green/10 rounded-full blur-3xl" />
              
              <p className="text-foreground/90 text-sm md:text-base font-medium leading-relaxed relative z-10">
                ​<br />
                É um sistema completo de produção e lucro, que combina:
              </p>

              <div className="space-y-3 relative z-10">
                {[
                  { name: "Corte Perfeito™", desc: "Medidas exatas e planos de corte otimizados — zero erro, zero desperdício." },
                  { name: "Blueprint de Lucro™", desc: "Projetos organizados por rentabilidade. Escolha o que dá mais lucro e execute em menos tempo." },
                  { name: "Plug & Lucre™", desc: "Arquivos prontos pra usar: baixe, corte e venda — ajuste se quiser." },
                  { name: "Biblioteca Inteligente™", desc: "Projetos modernos, atualizados e testados por profissionais reais." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 group">
                    <span className="text-calm-green text-lg flex-shrink-0 group-hover:scale-110 transition-transform">🔹</span>
                    <div>
                      <span className="font-bold text-calm-green">{item.name}</span>
                      <p className="text-foreground/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project grid image */}
      <div className="my-8 relative group" style={{ aspectRatio: `${PROJETOS_IMAGE_WIDTH}/${PROJETOS_IMAGE_HEIGHT}` }}>
        <img
          src={projetosGrid}
          alt="Exemplos de projetos de marcenaria"
          width={PROJETOS_IMAGE_WIDTH}
          height={PROJETOS_IMAGE_HEIGHT}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* Premium overlay on edges */}
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.1)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-calm-green/8 to-calm-green/3 border border-calm-green/15 rounded-xl p-2.5 transition-all duration-500 hover:scale-[1.03] hover:shadow-glow-green hover:border-calm-green/30 group cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-calm-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="flex items-center gap-2 relative z-10">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-calm-green to-calm-green-vibrant rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md">
                    {feature.icon}
                  </div>
                  <p className="text-foreground font-medium leading-tight text-xs group-hover:text-calm-green transition-colors duration-300">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 h-px divider-glow" />
    </section>
  );
});

ContentSection.displayName = "ContentSection";
export default ContentSection;
