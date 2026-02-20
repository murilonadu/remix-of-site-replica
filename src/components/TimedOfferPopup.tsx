import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const redirectWithParams = (baseUrl: string) => {
  const currentParams = window.location.search;
  const separator = baseUrl.includes('?') ? '&' : '?';
  const finalUrl = currentParams ? `${baseUrl}${separator}${currentParams.substring(1)}` : baseUrl;
  window.location.href = finalUrl;
};

const TimedOfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem('timedOfferShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    // Show popup after 2 minutes (120000ms)
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('timedOfferShown', 'true');
      }
    }, 120000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleAccept = () => {
    // Premium pelo preço do básico - R$ 17
    redirectWithParams("https://www.ggcheckout.com/checkout/v5/1ldT1NuAXSix71HG43We");
  };

  const handleDecline = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[320px] max-w-[90vw] p-0 border-2 border-primary/40 bg-card shadow-2xl rounded-2xl z-[100] [&>button]:text-foreground/60 [&>button]:hover:text-foreground [&>button]:z-[101]">
        <div className="overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary via-calm-green-glow to-primary py-3 px-4 text-center">
            <h2 className="text-base font-bold text-primary-foreground">
              ⚡ Oferta Especial ⚡
            </h2>
          </div>

          <div className="p-4 space-y-3">
            {/* Main offer */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Pacote PREMIUM por</p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-base line-through text-muted-foreground/60">R$ 29,90</span>
                <span className="text-3xl font-bold text-primary">R$ 17</span>
              </div>
              <p className="text-xs text-calm-green-vibrant font-semibold mt-1">Mesmo preço do básico!</p>
            </div>

            {/* Urgency */}
            <p className="text-center text-destructive font-bold text-xs">⏰ Oferta única!</p>

            {/* Buttons */}
            <div className="space-y-2">
              <Button 
                onClick={handleAccept} 
                size="default" 
                className="w-full bg-gradient-to-r from-primary to-calm-green-glow hover:from-calm-green-vibrant hover:to-primary text-primary-foreground font-bold text-sm py-3 rounded-lg shadow-md animate-pulse"
              >
                PEGAR{"\n"}O PREMIUM
              </Button>

              <Button 
                onClick={handleDecline} 
                size="sm" 
                variant="ghost" 
                className="w-full text-muted-foreground hover:text-foreground text-xs py-2"
              >
                Não, obrigado
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TimedOfferPopup;
