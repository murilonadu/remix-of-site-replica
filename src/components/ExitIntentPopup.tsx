import { useState, useEffect, memo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import marceineiroPopup from "@/assets/marceneiro-popup.png";
const redirectWithParams = (baseUrl: string) => {
  const currentParams = window.location.search;
  const separator = baseUrl.includes('?') ? '&' : '?';
  const finalUrl = currentParams ? `${baseUrl}${separator}${currentParams.substring(1)}` : baseUrl;
  window.location.href = finalUrl;
};
const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  useEffect(() => {
    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem('exitIntentShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    // Handle back button / popstate
    const handlePopState = (e: PopStateEvent) => {
      if (!hasShown) {
        e.preventDefault();
        // Push state back to prevent actual navigation
        window.history.pushState(null, '', window.location.href);
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Handle mouse leave (desktop exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Push initial state to enable popstate detection
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);
  const handleAccept = () => {
    // Back redirect - R$ 14,90
    redirectWithParams("https://pagamento-seguro.omanual.site/checkout/v5/6fDFPOhbYLW4DSKo8skP");
  };
  const handleDecline = () => {
    setIsOpen(false);
  };
  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%-1rem)] max-w-[380px] max-h-[85vh] overflow-y-auto p-0 border-0 bg-gradient-to-br from-background via-card to-secondary shadow-2xl rounded-2xl z-[100] [&>button]:text-foreground/60 [&>button]:hover:text-foreground [&>button]:z-[101]">
        <div className="relative overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-primary via-calm-green-glow to-primary py-3 px-4 text-center">
            <h2 className="relative text-lg font-bold text-primary-foreground drop-shadow-sm">
              ⚡ NÃO saia de mãos vazias ⚡
            </h2>
          </div>

          <div className="relative p-4 space-y-3">
            {/* Main offer text */}
            <div className="text-center">
              <p className="text-base text-foreground font-medium">Leve o Pacote Premium + Bônus        </p>
              <p className="text-calm-green-vibrant font-bold text-base">2 vagas restantes....</p>
            </div>

            {/* Discount highlight */}
            <div className="bg-gradient-to-br from-primary/10 via-calm-green-glow/10 to-primary/5 rounded-xl p-3 border border-primary/30 shadow-lg">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Pacote PREMIUM </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg line-through text-muted-foreground/60">R$ 29,90</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary via-calm-green-glow to-calm-green-vibrant bg-clip-text text-transparent">R$ 14,90</span>
                </div>
                <div className="mt-1 inline-block bg-primary/20 text-primary-foreground px-3 py-0.5 rounded-full">
                  <p className="font-bold text-xs"> 👀  4 Pessoas vendo esta oferta agora!</p>
                </div>
              </div>
            </div>

            {/* What's included */}
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-3 border border-border/50 space-y-2">
              <div className="flex justify-center mb-2">
                
              </div>
              <p className="font-bold text-foreground text-center text-xs">O que você vai receber:</p>
              <div className="grid grid-cols-1 gap-1.5 text-xs">
                {["2000 Projetos Prontos", "Bônus: 100 Móveis Mais Vendidos", "Bônus: Contrato AntiFraude", "Bônus: Suporte VIP WhatsApp"].map((item, index) => <div key={index} className="flex items-center gap-2 bg-secondary/50 rounded-lg px-2 py-1.5">
                    <span className="flex-shrink-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-[10px] font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </div>)}
              </div>
            </div>

            {/* Urgency */}
            <div className="text-center bg-destructive/10 rounded-lg p-2 border border-destructive/30">
              <p className="text-destructive font-bold text-xs">⏰ Essa oferta só aparece UMA VEZ!</p>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <Button onClick={handleAccept} size="default" className="w-full bg-gradient-to-r from-primary via-calm-green-glow to-primary hover:from-calm-green-vibrant hover:via-primary hover:to-calm-green-vibrant text-primary-foreground font-bold text-sm py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-pulse">
                QUERO RESGATAR AGORA
              </Button>

              <Button onClick={handleDecline} size="sm" variant="ghost" className="w-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 py-2 rounded-lg text-xs font-medium transition-colors">
                Não, prefiro sair sem essa oferta
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default ExitIntentPopup;