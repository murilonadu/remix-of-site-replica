import { memo, useEffect, useMemo, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import pagFicha from "@/assets/chapa/pag-ficha.webp";
import pagMontagem from "@/assets/chapa/pag-montagem.webp";
import pagCorte from "@/assets/chapa/pag-corte.webp";
import pagQuanto from "@/assets/chapa/pag-quanto-cobrar.webp";
import bonus1 from "@/assets/chapa/bonus-1.webp";
import bonus2 from "@/assets/chapa/bonus-2.webp";
import bonus3 from "@/assets/chapa/bonus-3.webp";
import bonus4 from "@/assets/chapa/bonus-4.webp";
import m01 from "@/assets/chapa/movel-01.webp";
import m02 from "@/assets/chapa/movel-02.webp";
import m03 from "@/assets/chapa/movel-03.webp";
import m04 from "@/assets/chapa/movel-04.webp";
import m05 from "@/assets/chapa/movel-05.webp";
import m06 from "@/assets/chapa/movel-06.webp";
import m07 from "@/assets/chapa/movel-07.webp";
import m08 from "@/assets/chapa/movel-08.webp";
import m09 from "@/assets/chapa/movel-09.webp";
import m10 from "@/assets/chapa/movel-10.webp";
import m11 from "@/assets/chapa/movel-11.webp";
import m12 from "@/assets/chapa/movel-12.webp";
import m13 from "@/assets/chapa/movel-13.webp";
import m14 from "@/assets/chapa/movel-14.webp";
import m15 from "@/assets/chapa/movel-15.webp";
import m16 from "@/assets/chapa/movel-16.webp";
import m17 from "@/assets/chapa/movel-17.webp";
import m18 from "@/assets/chapa/movel-18.webp";
import m19 from "@/assets/chapa/movel-19.webp";
import m20 from "@/assets/chapa/movel-20.webp";
import m21 from "@/assets/chapa/movel-21.webp";
import m22 from "@/assets/chapa/movel-22.webp";
import m23 from "@/assets/chapa/movel-23.webp";
import m24 from "@/assets/chapa/movel-24.webp";
import m25 from "@/assets/chapa/movel-25.webp";

const MOVEIS = [
  { img: m01, nome: "Par de criados-mudos com 2 gavetas", amb: "Quarto" },
  { img: m02, nome: "Cômoda 3 gavetas", amb: "Quarto" },
  { img: m03, nome: "Sapateira 2 portas basculantes", amb: "Quarto" },
  { img: m04, nome: "Escrivaninha com gaveta e nicho", amb: "Quarto" },
  { img: m05, nome: "Cabeceira com criados suspensos", amb: "Quarto" },
  { img: m06, nome: "Cama de solteiro com estrado em MDF", amb: "Quarto" },
  { img: m07, nome: "Rack 1,80 m com 2 portas e nicho", amb: "Sala" },
  { img: m08, nome: "Painel de TV com prateleira e nichos", amb: "Sala" },
  { img: m09, nome: "Estante de nichos", amb: "Sala" },
  { img: m10, nome: "Aparador com 2 gavetas", amb: "Sala" },
  { img: m11, nome: "Mesa de centro + 2 mesas laterais", amb: "Sala" },
  { img: m12, nome: "Banco baú de entrada", amb: "Sala" },
  { img: m13, nome: "Balcão de pia 1,20 m (2 portas)", amb: "Cozinha" },
  { img: m14, nome: "Armário aéreo 1,20 m (3 portas)", amb: "Cozinha" },
  { img: m15, nome: "Balcão de gavetas 60 cm", amb: "Cozinha" },
  { img: m16, nome: "Paneleiro / torre 60 cm", amb: "Cozinha" },
  { img: m17, nome: "Nicho de micro-ondas + armário aéreo 80 cm", amb: "Cozinha" },
  { img: m18, nome: "Kit banheiro: gabinete + espelheira + torre", amb: "Banheiro" },
  { img: m19, nome: "Armário de lavanderia 2 portas", amb: "Área de serviço" },
  { img: m20, nome: "Gabinete de tanque + aéreo de lavanderia", amb: "Área de serviço" },
  { img: m21, nome: "Guarda-roupa infantil 2 portas", amb: "Infantil" },
  { img: m22, nome: "Estante montessoriana baixa", amb: "Infantil" },
  { img: m23, nome: "Cama montessoriana casinha (solteiro)", amb: "Infantil" },
  { img: m24, nome: "Mesa de home office com nicho", amb: "Escritório" },
  { img: m25, nome: "Kit 4 prateleiras + 2 nichos suspensos", amb: "Escritório" }
];

const PAGINAS = [
  { src: pagFicha, titulo: "Ficha do projeto", texto: "Imagem do móvel, medidas e lista de peças numerada, pronta para levar para a serra." },
  { src: pagMontagem, titulo: "Montagem passo a passo", texto: "Cada etapa com imagem: as peças da vez aparecem em destaque verde." },
  { src: pagCorte, titulo: "Plano de corte", texto: "Como encaixar todas as peças em uma única chapa de 2,75 x 1,85 m." },
  { src: pagQuanto, titulo: "Quanto cobrar", texto: "Custo de material e preço sugerido de cada um dos 25 móveis." },
];

const ITENS = [
  { icon: "📐", t: "Lista de peças com medidas", d: "Cada peça numerada, com largura, altura e quantidade." },
  { icon: "🪚", t: "Plano de corte de 1 chapa", d: "Todas as peças do móvel cabem em uma chapa de MDF 15 mm." },
  { icon: "🧩", t: "Montagem passo a passo", d: "Imagens de cada etapa, da estrutura ao acabamento." },
  { icon: "🔩", t: "Lista de ferragens", d: "Corrediças, dobradiças, puxadores e parafusos de cada projeto." },
];

const BONUS = [
  { src: bonus1, t: "Quanto Cobrar por Cada Móvel" },
  { src: bonus2, t: "O Que Fazer com as Sobras da Chapa" },
  { src: bonus3, t: "Guia de Ferragens" },
  { src: bonus4, t: "Mapa de Medidas Padrão" },
];

const ContentSection = memo(() => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayPlugin = useMemo(() => Autoplay({ delay: 3500, stopOnInteraction: false }), []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) autoplayPlugin.play(); else autoplayPlugin.stop();
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [autoplayPlugin]);

  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-primary bg-clip-text text-transparent">
              📘 O que você terá acesso:
            </h2>
            <p className="text-foreground/80 text-sm md:text-base">25 projetos completos. Cada móvel sai inteiro de <b>uma única chapa de MDF</b>.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {ITENS.map((it) => (
              <div key={it.t} className="flex gap-3 items-start bg-card rounded-xl p-4 border border-calm-green/20 shadow-sm">
                <span className="text-2xl leading-none">{it.icon}</span>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">{it.t}</p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-0.5">{it.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div ref={carouselRef} className="mt-10">
            <h3 className="text-center text-xl md:text-2xl font-bold text-foreground mb-4">Por dentro do material</h3>
            <Carousel opts={{ loop: true }} plugins={[autoplayPlugin]} className="w-full">
              <CarouselContent>
                {PAGINAS.map((p) => (
                  <CarouselItem key={p.titulo} className="basis-full md:basis-1/2">
                    <div className="p-1">
                      <div className="rounded-xl overflow-hidden shadow-lg border border-black/5 bg-white">
                        <img src={p.src} alt={p.titulo} width={900} height={1273} className="w-full h-auto" loading="lazy" decoding="async" />
                      </div>
                      <p className="mt-3 font-semibold text-center text-foreground">{p.titulo}</p>
                      <p className="text-center text-sm text-muted-foreground">{p.texto}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-2">Os 25 móveis</h3>
          <p className="text-center text-sm text-muted-foreground mb-6">Quarto, sala, cozinha, banheiro, lavanderia, infantil e escritório.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {MOVEIS.map((mv, i) => (
              <div key={mv.nome} className="bg-card rounded-xl overflow-hidden border border-black/5 shadow-sm">
                <img src={mv.img} alt={mv.nome} width={800} height={600} className="w-full aspect-[4/3] object-cover bg-[#F4F1EC]" loading="lazy" decoding="async" />
                <div className="p-2.5">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{String(i + 1).padStart(2, "0")} · {mv.amb}</p>
                  <p className="text-xs md:text-sm font-semibold text-foreground leading-snug">{mv.nome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-14">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-6">🎁 4 bônus no Pacote Premium</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {BONUS.map((b) => (
              <div key={b.t} className="text-center">
                <img src={b.src} alt={b.t} width={500} height={707} className="w-full h-auto rounded-lg shadow-md" loading="lazy" decoding="async" />
                <p className="mt-2 text-xs md:text-sm font-semibold text-foreground">{b.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ContentSection.displayName = "ContentSection";

export default ContentSection;
