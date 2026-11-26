import { memo } from "react";
import AntesDepois from "@/components/pergolados/AntesDepois";
import projetosGrid from "@/assets/pergolados/pergolados-grade.webp";
import bonusTablets from "@/assets/pergolados/bonus-tablets-v3.webp";

const AMBIENTES = ["Lateral da casa", "Varanda", "Deck e piscina", "Jardim", "Quintal", "Garagem"];

const ITENS = [
  { n: 1, t: "Desenho com medidas", d: "O pergolado pronto, com altura, largura, pilar, viga e caimento marcados." },
  { n: 2, t: "Lista de material", d: "Quantidade, bitola e comprimento de cada peça. É só levar na loja." },
  { n: 3, t: "Montagem em 6 passos", d: "Da base ao acabamento, com o desenho de cada etapa." },
  { n: 4, t: "Erro comum x como fazer certo", d: "O que dá goteira e retrabalho, e como evitar." },
  { n: 5, t: "No verso: prancha técnica", d: "Vista frontal, corte e os encaixes da base, da viga e do caibro." },
];

// Fixed dimensions to prevent CLS
const PROJETOS_IMAGE_WIDTH = 1080;
const PROJETOS_IMAGE_HEIGHT = 846;

const ContentSection = memo(() => {
  return (
    <section className="pb-8 md:pb-12 bg-muted/30">
      <div className="bg-[linear-gradient(180deg,#FBE3C6_0%,#FFF1E0_55%,rgba(255,248,240,0)_100%)] pt-10 md:pt-14 pb-6">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-primary bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-all duration-500 cursor-default pb-6 md:pb-8">
              📘 O que você receberá:
            </h2>

            <div className="mt-8 text-left">
              <div className="text-center">
                <span className="inline-block bg-[#5A3416] text-white text-[11px] md:text-xs font-bold tracking-wide px-3 py-1 rounded-full">CADA PROJETO VEM ASSIM</span>
                <p className="mt-3 text-lg md:text-xl font-bold font-poppins text-[#5A3416] leading-snug">É só abrir, comprar <span className="text-[#E07A1F]">o material</span> e montar</p>
              </div>
              <div className="mt-7 max-w-xl mx-auto">
                <ol className="relative ml-4 border-l-2 border-dashed border-[#D9AE7E]">
                  {ITENS.map((it, i) => (
                    <li key={it.n} className={`relative pl-7 ${i < ITENS.length - 1 ? "pb-5" : ""}`}>
                      <span className="absolute -left-[16px] top-0 w-[30px] h-[30px] rounded-md bg-[#5A3416] text-[#FFC46B] text-sm font-extrabold flex items-center justify-center shadow-[2px_2px_0_#E07A1F] -rotate-3">{it.n}</span>
                      <p className="font-bold text-[#5A3416] text-[15px] md:text-base leading-tight">{it.t}</p>
                      <p className="text-[13px] md:text-sm text-[#6b4a2b] mt-1 leading-snug">{it.d}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3 max-w-xl mx-auto">
                <div className="bg-[#5A3416] text-white rounded-lg px-3 py-2.5 text-xs md:text-sm font-semibold leading-snug">📱 Em <span className="text-[#FFC46B]">PDF</span>: abre no celular ou imprime</div>
                <div className="bg-[#5A3416] text-white rounded-lg px-3 py-2.5 text-xs md:text-sm font-semibold leading-snug">🏡 Separados em <span className="text-[#FFC46B]">6 ambientes</span> da casa</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>

      {/* Imagem de exemplos de projetos - full width */}
      <div className="mt-8 relative" style={{ aspectRatio: `${PROJETOS_IMAGE_WIDTH}/${PROJETOS_IMAGE_HEIGHT}` }}>
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 pointer-events-none z-10">
          {AMBIENTES.map((a) => (
            <div key={a} className="flex items-end justify-start p-2 md:p-4">
              <span className="bg-[#5A3416]/90 text-white text-[11px] md:text-sm font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-md shadow">{a}</span>
            </div>
          ))}
        </div>
        <img
          src={projetosGrid}
          alt="Pergolados de madeira prontos: varanda, área gourmet, deck, rústico, cobertura e garagem"
          width={PROJETOS_IMAGE_WIDTH}
          height={PROJETOS_IMAGE_HEIGHT}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async" />
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="w-[82%] max-w-md mx-auto">
          <img
            src={bonusTablets}
            alt="+4 bônus grátis levando hoje"
            width={900}
            height={1350}
            className="w-full h-auto"
            loading="lazy"
            decoding="async" />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <AntesDepois />
      </div>
    </section>);
});

ContentSection.displayName = "ContentSection";

export default ContentSection;
