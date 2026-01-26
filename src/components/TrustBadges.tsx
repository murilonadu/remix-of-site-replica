import { Lock, Shield, Clock, Users, Star, Headphones } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className="w-full py-4">
      {/* Left badges */}
      <div className="fixed left-4 top-20 z-50 hidden lg:flex flex-col gap-4">
        <div className="bg-secondary/80 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 border border-border/30">
          <Lock className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">100% Seguro</p>
            <p className="text-xs text-muted-foreground">SSL Criptografado</p>
          </div>
        </div>
        <div className="bg-secondary/80 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 border border-border/30">
          <Clock className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">Acesso Imediato</p>
            <p className="text-xs text-muted-foreground">Download instantâneo</p>
          </div>
        </div>
      </div>

      {/* Right badges */}
      <div className="fixed right-4 top-20 z-50 hidden lg:flex flex-col gap-4">
        <div className="bg-secondary/80 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 border border-border/30">
          <Shield className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">Garantido</p>
            <p className="text-xs text-muted-foreground">7 dias</p>
          </div>
        </div>
      </div>

      {/* Top center stats */}
      <div className="flex justify-center gap-2 md:gap-4 flex-wrap px-4">
        <div className="bg-secondary/60 backdrop-blur-sm rounded-xl px-4 py-2 md:px-6 md:py-3 text-center border border-border/30">
          <p className="text-primary font-bold text-lg md:text-xl">+1.2k</p>
          <p className="text-xs text-muted-foreground">Pessoas transformadas</p>
        </div>
        <div className="bg-secondary/60 backdrop-blur-sm rounded-xl px-4 py-2 md:px-6 md:py-3 text-center border border-border/30">
          <p className="text-primary font-bold text-lg md:text-xl">97%</p>
          <p className="text-xs text-muted-foreground">Satisfação</p>
        </div>
        <div className="bg-secondary/60 backdrop-blur-sm rounded-xl px-4 py-2 md:px-6 md:py-3 text-center border border-border/30">
          <p className="text-primary font-bold text-lg md:text-xl">24h</p>
          <p className="text-xs text-muted-foreground">Suporte</p>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
