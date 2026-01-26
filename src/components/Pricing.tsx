import { useState } from "react";
import { Check, Gift, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import compraSegura from "@/assets/compra-segura.png";
import UpsellModal from "@/components/UpsellModal";

const Pricing = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);

  const handleBuyNowClick = () => {
    setIsUpsellModalOpen(true);
  };

  return (
    <section className="py-16 px-4 bg-secondary/20" id="pricing">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <span className="text-4xl mb-4 block">🏆</span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Escolha seu Acesso</h2>
          <p className="text-muted-foreground">
            Clique no botão abaixo, tenha acesso agora mesmo aos projetos!
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-card rounded-3xl p-8 border-2 border-primary shadow-xl">
          {/* Badge */}
          <div className="bg-primary text-primary-foreground font-bold px-6 py-2 rounded-full inline-block mb-6">
            PACOTE RELÂMPAGO ⚡
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl text-muted-foreground line-through">R$ 137,00</span>
              <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                -89% DESCONTO
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-black text-foreground">R$ 17,00</span>
            </div>
            <p className="text-muted-foreground mt-2">ou 3x de R$ 6,37 no cartão</p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-foreground">1.000 Projetos Passo a Passo</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-foreground">Acesso imediato em PDF pelo seu email e WhatsApp</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-foreground">Atualizações semanais</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-foreground">Garantia de 7 dias</span>
            </div>
          </div>

          {/* Bonuses */}
          <div className="bg-secondary/50 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-primary mb-3">Bônus de GRAÇA APENAS HOJE</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-accent" />
                <span className="text-foreground text-sm">
                  Os 100 Móveis Mais Vendidos e Lucrativos{" "}
                  <span className="line-through text-muted-foreground">R$ 97,00</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-accent" />
                <span className="text-foreground text-sm">
                  Contrato de Serviço AntiFraude{" "}
                  <span className="line-through text-muted-foreground">R$ 47,00</span>
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button
            onClick={handleBuyNowClick}
            className="w-full bg-green-cta hover:bg-green-cta-hover text-white font-bold text-xl py-5 rounded-full text-center transition-all duration-300 glow-green hover:scale-105 mb-4 h-auto"
          >
            COMPRAR AGORA
          </Button>

          {/* Security badge */}
          <img
            src={compraSegura}
            alt="Compra Segura"
            className="mx-auto h-12 opacity-80"
          />
        </div>

        {/* Urgency */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-destructive/20 text-destructive rounded-full px-6 py-3 border border-destructive/30">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Essa oportunidade não se abrirá novamente!</span>
          </div>
        </div>
      </div>

      <UpsellModal 
        isOpen={isUpsellModalOpen} 
        onClose={() => setIsUpsellModalOpen(false)} 
        onAccept={() => {}} 
        onDecline={() => {}} 
      />
    </section>
  );
};

export default Pricing;
