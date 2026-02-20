import { Clock, AlertTriangle, Users, TreePine, Calculator } from "lucide-react";

const costItems = [
{ icon: Clock, text: "3 a 6 horas desenhando" },
{ icon: AlertTriangle, text: "Risco de erro de cálculo" },
{ icon: Users, text: "Cliente pedindo alteração" },
{ icon: TreePine, text: "Madeira desperdiçada" },
{ icon: Calculator, text: "Orçamento demorado" }];


const CostSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins bg-gradient-title-glow bg-clip-text text-transparent">
            O custo invisível de criar do zero
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Cada projeto feito do zero custa:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {costItems.map((item, index) =>
          <div
            key={index}
            className="flex items-center gap-3 bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl px-5 py-4 hover:border-destructive/30 transition-colors duration-300">

              <item.icon className="w-5 h-5 text-destructive shrink-0" />
              <span className="text-sm md:text-base text-foreground font-medium">
                {item.text}
              </span>
            </div>
          )}
        </div>

        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm md:text-base">
            Agora multiplica isso por <span className="font-bold text-foreground">4 projetos por semana</span>.
          </p>
          <p className="text-lg md:text-xl font-bold text-destructive">Você está perdendo tempo e dinheiro 

          </p>
        </div>
      </div>
    </section>);

};

export default CostSection;