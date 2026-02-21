import { useState, memo } from "react";
import { Button } from "@/components/ui/button";
import hotmartSecure from "@/assets/hotmart-compra-segura.png";
import matrixHands from "@/assets/matrix-hands.png";
import packMockupPremium from "@/assets/MOCKUP_1.webp";
import UpsellModal from "@/components/UpsellModal";

// Fixed dimensions to prevent CLS
const HOTMART_BADGE_HEIGHT = 28;
const PACK_MOCKUP_WIDTH = 350;
const PACK_MOCKUP_HEIGHT = 280;
const redirectWithParams = (baseUrl: string) => {
  const currentParams = window.location.search;
  const separator = baseUrl.includes('?') ? '&' : '?';
  const finalUrl = currentParams ? `${baseUrl}${separator}${currentParams.substring(1)}` : baseUrl;
  window.location.href = finalUrl;
};
const FinalCtaSection = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');
  const handleBuyNowClick = (plan: 'basic' | 'premium') => {
    setSelectedPlan(plan);
    setIsUpsellModalOpen(true);
  };
  return <section className="py-20 bg-gradient-to-br from-expandix-dark via-expandix-dark/95 to-expandix-dark relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-expandix-green/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-expandix-yellow/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-expandix-green/15 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-8 animate-fade-in">
              <div className="w-24 h-24 bg-gradient-to-r from-expandix-green/30 to-expandix-yellow/30 rounded-full flex items-center justify-center mx-auto backdrop-blur-md border border-expandix-green/30 shadow-lg shadow-expandix-green/20 animate-float bg-green-900">
                <span className="text-4xl">🏆</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-poppins animate-fade-in hover:scale-105 transition-all duration-500 cursor-default leading-tight">
                Escolha a melhor <span className="bg-gradient-to-r from-expandix-yellow via-expandix-green to-expandix-yellow bg-clip-text text-transparent animate-pulse">opção para você:</span>
              </h2>

              
            </div>

            {/* Enhanced Pricing highlight with animations - Two options */}
            <div id="ofertas" className="flex flex-col items-center gap-8 max-w-6xl mx-auto px-4">
              {/* Option 1 - R$ 17,00 - Less highlighted */}
              <div className="relative group animate-scale-in animation-delay-500 w-full max-w-xl">
                {/* Subtle background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Main pricing card */}
                <div className="relative bg-gradient-to-br from-expandix-dark/90 to-expandix-dark/95 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-500/30 backdrop-blur-md overflow-hidden h-full" style={{
                backgroundImage: `
                      radial-gradient(circle at 20% 50%, rgba(156, 163, 175, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(107, 114, 128, 0.08) 0%, transparent 50%),
                      linear-gradient(135deg, rgba(156, 163, 175, 0.03) 0%, rgba(107, 114, 128, 0.03) 100%)
                    `
              }}>
                  {/* Animated background particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gray-400 rounded-full animate-ping opacity-40"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-gray-500 rounded-full animate-pulse opacity-30 animation-delay-1000"></div>

                  <div className="space-y-4 lg:space-y-6 relative z-10 flex flex-col h-full">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-full px-3 lg:px-4 py-2 border border-gray-500/30 mb-3 lg:mb-4">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                        <span className="text-gray-300 font-semibold text-xs lg:text-sm">PACOTE BÁSICO </span>
                      </div>
                    </div>

                    <div className="space-y-3 lg:space-y-4 text-center">
                      <div className="flex items-center justify-center gap-2 lg:gap-3">
                        
                        
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl lg:rounded-2xl blur-sm opacity-20"></div>
                        <div className="relative bg-expandix-dark/80 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-gray-500/40">
                          <div className="text-3xl lg:text-4xl font-bold hover-scale bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-primary">R$ 10,00</div>
                          <p className="text-xs lg:text-sm mt-1 text-gray-400">ou 3x de R$ 6,37 no cartão</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs lg:text-sm flex-grow">
                      {/* Base features */}
                      <div className="space-y-2.5 text-transparent">
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-gray-400">✓</span>
                          <span className="font-medium text-primary">1.000 Projetos Passo a Passo</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-gray-400">✓</span>
                          <span className="font-medium text-left text-primary">Acesso imediato em PDF pelo seu  WhatsApp</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-gray-400">✓</span>
                          <span className="font-medium text-primary">Atualizações semanais</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-gray-400">✓</span>
                          <span className="font-medium text-primary">Garantia de 7 dias</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-500/20 pt-3 mt-2"></div>

                      {/* Bonuses Title */}
                      <div className="text-center mb-3">
                        
                      </div>

                      {/* Exclusive Bonuses Section */}
                      
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="relative group/btn">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl lg:rounded-2xl blur-lg opacity-50 group-hover/btn:opacity-80 transition-opacity duration-300 animate-pulse"></div>
                        <Button size="lg" className="relative w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold text-base lg:text-lg py-3 lg:py-4 rounded-xl lg:rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 animate-bounce" onClick={() => handleBuyNowClick('basic')}>
                          PEGAR O BÁSICO
                        </Button>
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <img src={hotmartSecure} alt="Compra Segura" height={HOTMART_BADGE_HEIGHT} className="h-7 w-auto" loading="lazy" decoding="async" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Option 2 - R$ 29,90 - MAIS ESCOLHIDO */}
              <div className="relative group animate-scale-in animation-delay-700 w-full max-w-xl">
                {/* MAIS ESCOLHIDO Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  
                </div>

                {/* Glowing background effect - More prominent */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/40 to-orange-500/40 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                {/* Main pricing card with more prominent border */}
                <div className="relative bg-gradient-to-br from-expandix-dark/90 to-expandix-dark/95 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl border-2 border-yellow-500/70 backdrop-blur-md overflow-hidden h-full ring-2 ring-yellow-500/30 ring-offset-2 ring-offset-expandix-dark" style={{
                backgroundImage: `
                      radial-gradient(circle at 20% 50%, rgba(255, 193, 7, 0.12) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 152, 0, 0.12) 0%, transparent 50%),
                      linear-gradient(135deg, rgba(255, 193, 7, 0.06) 0%, rgba(255, 152, 0, 0.06) 100%)
                    `
              }}>
                  {/* Animated background particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-orange-500 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
                  <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-50 animation-delay-500"></div>

                  <div className="space-y-4 lg:space-y-6 relative z-10 flex flex-col h-full">
                    <div className="text-center pt-2">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/25 to-orange-500/25 rounded-full px-3 lg:px-4 py-2 border border-yellow-500/40 mb-3 lg:mb-4">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                        <span className="text-yellow-400 font-bold text-xs lg:text-sm">PACOTE PREMIUM  </span>
                      </div>
                      <div className="flex justify-center">
                        <img
                        src={packMockupPremium}
                        alt="Pack Marceneiro Rico Premium"
                        width={PACK_MOCKUP_WIDTH}
                        height={PACK_MOCKUP_HEIGHT}
                        className="max-w-[280px] md:max-w-[350px] mb-4"
                        loading="lazy"
                        decoding="async" />

                      </div>
                    </div>

                    <div className="space-y-3 lg:space-y-4 text-center">
                      <div className="flex items-center justify-center gap-2 lg:gap-3">
                        <span className="line-through text-base lg:text-lg font-medium text-red-500">R$ 197,00</span>
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                          -81% DESCONTO
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl lg:rounded-2xl blur-sm opacity-40"></div>
                        <div className="relative bg-expandix-dark/80 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-yellow-500/60">
                          <div className="text-3xl lg:text-4xl font-bold hover-scale bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">R$ 29,90</div>
                          <p className="text-xs lg:text-sm mt-1 text-gray-300">ou 3x de R$ 11,17 no cartão</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs lg:text-sm flex-grow">
                      {/* Base features - Same as basic */}
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-yellow-300">
                          <span className="text-yellow-500">✓</span>
                          <span className="font-medium">2.000 Projetos Passo a Passo</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-300">
                          <span className="text-yellow-500">✓</span>
                          <span className="font-medium text-left">Acesso imediato em PDF pelo seu  WhatsApp</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-300">
                          <span className="text-yellow-500">✓</span>
                          <span className="font-medium">Atualizações semanais</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-300">
                          <span className="text-yellow-500">✓</span>
                          <span className="font-medium">Garantia de 7 dias</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-yellow-500/30 pt-3 mt-2"></div>

                      {/* Bonuses Title */}
                      <div className="text-center mb-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-yellow-300">TODOS OS BÔNUS + EXTRAS</p>
                      </div>

                      {/* Exclusive Bonuses Section */}
                      <div className="space-y-2">
                        {/* Bonus 1 */}
                        <div className="rounded-lg bg-gradient-to-br from-yellow-500/15 to-orange-500/15 border border-yellow-500/30 shadow-md">
                          <div className="p-2.5 backdrop-blur-sm">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/40 to-orange-500/40 flex items-center justify-center flex-shrink-0 border border-yellow-500/30">
                                <span className="text-base">🎁</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-[11px] font-semibold text-yellow-100 leading-tight">
                                  Os 100 Móveis Mais Vendidos e Lucrativos <span className="line-through ml-1 text-red-400">R$ 97,00</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bonus 2 */}
                        <div className="rounded-lg bg-gradient-to-br from-yellow-500/15 to-orange-500/15 border border-yellow-500/30 shadow-md">
                          <div className="p-2.5 backdrop-blur-sm">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/40 to-orange-500/40 flex items-center justify-center flex-shrink-0 border border-yellow-500/30">
                                <span className="text-base">🎁</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-[11px] font-semibold leading-tight text-yellow-100">
                                  Contrato de Serviço AntiFraude <span className="line-through ml-1 text-red-400">R$ 47,00</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bonus 3 - EXTRA */}
                        <div className="rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 shadow-md">
                          <div className="p-2.5 backdrop-blur-sm">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/50 to-orange-500/50 flex items-center justify-center flex-shrink-0 border border-yellow-500/40">
                                <span className="text-base">⭐</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-[11px] font-bold leading-tight text-destructive-foreground">
                                  50 Dicas de Performance <span className="line-through ml-1 text-red-400">R$ 67,00</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bonus 4 - EXTRA */}
                        <div className="rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 shadow-md">
                          <div className="p-2.5 backdrop-blur-sm">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/50 to-orange-500/50 flex items-center justify-center flex-shrink-0 border border-yellow-500/40">
                                <span className="text-base">⭐</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-[11px] font-bold leading-tight text-yellow-300">
                                  Suporte VIP via WhatsApp <span className="line-through ml-1 text-red-400">R$ 97,00</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="relative group/btn">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl lg:rounded-2xl blur-lg opacity-50 group-hover/btn:opacity-80 transition-opacity duration-300 animate-pulse"></div>
                        <Button size="lg" className="relative w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold text-base lg:text-lg py-3 lg:py-4 rounded-xl lg:rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 animate-bounce" onClick={() => redirectWithParams("https://www.ggcheckout.com/checkout/v5/1TMlLGIlBL86oXifTspo")}>
                          QUERO O PREMIUM
                        </Button>
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <img src={hotmartSecure} alt="Compra Segura" className="h-7 w-auto" loading="lazy" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* Matrix Pills Section */}
              <div className="flex flex-col items-center py-8 animate-fade-in w-full">
                {/* Arrow up for R$17 */}
                <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/40 mb-4">
                  <span className="text-2xl text-orange-400 animate-bounce">↑</span>
                </div>
                <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/40 mb-4">
                  {/* Orange Pill */}
                  <div className="w-8 h-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg shadow-orange-500/50 flex-shrink-0"></div>
                  <p className="text-sm md:text-base font-bold text-orange-400">R$17: Facilidade pra quem quer parar de sofrer.</p>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-poppins mb-6">
                  Escolha seu <span className="bg-gradient-to-r from-expandix-yellow via-expandix-green to-expandix-yellow bg-clip-text text-transparent animate-pulse">Acesso</span>
                </h3>
                
                <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-[#4a8c4a]/20 to-[#3d7a3d]/20 border border-[#4a8c4a]/40">
                  {/* Green Pill */}
                  <div className="w-8 h-4 rounded-full bg-gradient-to-r from-[#4a8c4a] to-[#7ec97e] shadow-lg shadow-[#4a8c4a]/50 flex-shrink-0"></div>
                  <p className="text-sm md:text-base font-bold text-[#7ec97e]">R$29,90  Atalho pra quem quer ficar na frente da concorrência.</p>
                </div>
              </div>
            </div>

            {/* Enhanced Urgency elements */}
            <div className="bg-gradient-to-r from-expandix-green/20 to-expandix-yellow/20 rounded-3xl p-6 border border-expandix-green/30 backdrop-blur-md shadow-lg shadow-expandix-green/10 animate-pulse">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-expandix-yellow to-expandix-green rounded-full flex items-center justify-center text-expandix-dark shadow-lg animate-bounce">
                  <span className="text-2xl">⏰</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-50">O pacote ainda está sendo atualizado.
Quando finalizar a próxima atualização, o preço sobe.</p>
                </div>
              </div>
            </div>

            {/* Enhanced Final emotional appeal */}
            <div className="space-y-6 animate-fade-in animation-delay-1500">
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-expandix-yellow to-expandix-green rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UpsellModal isOpen={isUpsellModalOpen} onClose={() => setIsUpsellModalOpen(false)} onAccept={() => {}} onDecline={() => {}} selectedPlan={selectedPlan} />
    </section>;
};
export default FinalCtaSection;