import { Clock, AlertTriangle, Users, TreePine, Calculator } from "lucide-react";

const costItems = [
  { icon: Clock, text: "3 a 6 horas desenhando" },
  { icon: AlertTriangle, text: "Risco de erro de cálculo" },
  { icon: Users, text: "Cliente pedindo alteração" },
  { icon: TreePine, text: "Madeira desperdiçada" },
  { icon: Calculator, text: "Orçamento demorado" },
];

const CostSection = () => {
  return (
    <section className="py-10 md:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-2 bg-gradient-title-glow bg-clip-text text-transparent">
          O custo invisível de criar do zero
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Cada projeto feito do zero custa:
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {costItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-destructive/5 border border-destructive/15 rounded-full px-4 py-2"
            >
              <item.icon className="w-4 h-4 text-destructive shrink-0" />
              <span className="text-sm text-foreground font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Multiplica isso por <span className="font-bold text-foreground">4 projetos/semana</span>.{" "}
          <span className="font-bold text-destructive">Você está perdendo tempo e dinheiro.</span>
        </p>
      </div>
    </section>
  );
};

export default CostSection;
