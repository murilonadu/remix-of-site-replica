import { memo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import marcenieiroUpsell from "@/assets/marceneiro-upsell.png";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
  selectedPlan?: 'basic' | 'premium';
}
const redirectWithParams = (baseUrl: string) => {
  const currentParams = window.location.search;
  const separator = baseUrl.includes('?') ? '&' : '?';
  const finalUrl = currentParams ? `${baseUrl}${separator}${currentParams.substring(1)}` : baseUrl;
  window.location.href = finalUrl;
};
const UpsellModal = ({
  isOpen,
  onClose,
  onAccept,
  onDecline,
  selectedPlan = 'basic'
}: UpsellModalProps) => {
  const handleAcceptClick = () => {
    if (selectedPlan === 'premium') {
      redirectWithParams("https://www.ggcheckout.com/checkout/v5/1TMlLGIlBL86oXifTspo");
    } else {
      redirectWithParams("https://www.ggcheckout.com/checkout/v5/wd9P6h8Tff6K2A1F2FFt");
    }
  };
  const handleDeclineClick = () => {
    if (selectedPlan === 'premium') {
      redirectWithParams("https://www.ggcheckout.com/checkout/v5/1TMlLGIlBL86oXifTspo");
    } else {
      redirectWithParams("https://www.ggcheckout.com/checkout/v5/tKt9vSrCBlVBoTUOW44e");
    }
  };

  // Se for pacote premium, redireciona direto sem modal
  if (selectedPlan === 'premium' && isOpen) {
    redirectWithParams("https://www.ggcheckout.com/checkout/v5/1TMlLGIlBL86oXifTspo");
    return null;
  }
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[94vw] max-w-[360px] max-h-[90vh] overflow-y-auto p-0 border-0 bg-white shadow-2xl rounded-xl [&>button]:text-gray-500 [&>button]:hover:text-gray-700">
        {/* Main Light Card */}
        <div className="relative bg-white rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 py-2.5 px-3 text-center">
            <h2 className="text-base font-bold text-white">
              🎉 Espere, veja esta oferta única! 🎉
            </h2>
          </div>

          <div className="p-4 space-y-3">
            {/* Main offer text */}
            <p className="text-center text-sm text-gray-700">Leve o meu melhor pacote por apenas:</p>

            {/* Bonus highlight */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-[2px]">
              <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-lg p-3">
                {/* Header do pacote */}
                <div className="text-center mb-3">
                  <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    👑 PACOTE PREMIUM
                  </div>
                  
                  {/* Destaque de preço */}
                  <div className="mt-2 bg-gradient-to-b from-[#2d4a3e] to-[#1a3028] rounded-lg py-3 px-4">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/70">de</span>
                        <span className="text-lg text-white/80 line-through">R$ 29,90</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-amber-400">por apenas</span>
                        <span className="text-2xl font-black text-amber-400">R$ 22,90</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Itens inclusos */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 bg-white/80 rounded-md px-2 py-1.5 border border-orange-200">
                    <span>📐</span>
                    <span className="text-gray-700 flex-1 font-medium">2.000 Projetos Prontos</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="inline-block bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      🎁 + 4 Bônus Exclusivos
                    </span>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-1.5 space-y-1 border border-green-200/50">
                    <div className="flex items-center gap-2 bg-white/90 rounded-md px-2 py-1">
                      <span>🎁</span>
                      <span className="text-gray-700 flex-1">Os 100 Móveis Mais Vendidos</span>
                      <span className="text-green-500 line-through text-[10px]">R$ 57</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/90 rounded-md px-2 py-1">
                      <span>🎁</span>
                      <span className="text-gray-700 flex-1">Contrato AntiFraude</span>
                      <span className="text-green-500 line-through text-[10px]">R$ 47</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/90 rounded-md px-2 py-1">
                      <span>⭐</span>
                      <span className="text-gray-700 flex-1">50 Dicas de Performance</span>
                      <span className="text-green-500 line-through text-[10px]">R$ 47</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/90 rounded-md px-2 py-1">
                      <span>💬</span>
                      <span className="text-gray-700 flex-1">Suporte VIP WhatsApp</span>
                      <span className="text-green-500 line-through text-[10px]">R$ 87</span>
                    </div>
                  </div>
                </div>
                
                {/* Total */}
                <div className="mt-2 pt-1.5 border-t border-orange-300/50 text-center">
                  <p className="text-xs text-gray-500">
                    Economia de <span className="text-green-600 font-bold">R$ 238</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Persuasion text */}
            <div className="text-center bg-orange-50 rounded-xl p-3 border border-orange-200">
              <p className="text-gray-700 text-sm">
                É pouco no preço… e <span className="text-orange-600 font-semibold">enorme na vantagem</span>.
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <Button onClick={handleAcceptClick} size="default" className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white font-bold text-base py-4 rounded-xl shadow-md animate-bounce">
                SIM, QUERO O PREMIUM
              </Button>

              <Button onClick={handleDeclineClick} size="sm" variant="ghost" className="w-full text-gray-500 hover:text-gray-700 py-3 rounded-xl text-xs">
                Não, quero apenas o pacote básico
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default UpsellModal;