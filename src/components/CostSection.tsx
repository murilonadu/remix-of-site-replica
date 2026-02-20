import { Clock, AlertTriangle, Users, TreePine, Calculator, X } from "lucide-react";

const costItems = [
  { icon: Clock, text: "3 a 6 horas desenhando" },
  { icon: AlertTriangle, text: "Risco de erro de cálculo" },
  { icon: Users, text: "Cliente pedindo alteração" },
  { icon: TreePine, text: "Madeira desperdiçada" },
  { icon: Calculator, text: "Orçamento demorado" },
];

const CostSection = () => {
  return (
    <section className="py-10 md:py-14 px-4 bg-gradient-to-br from-expandix-dark via-expandix-dark/95 to-expandix-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-2 bg-gradient-to-r from-expandix-yellow to-expandix-green bg-clip-text text-transparent">
          O custo invisível de criar do zero
        </h2>
        <p className="text-sm text-slate-400 text-center mb-6">
          Cada projeto feito do zero custa:
        </p>

        <div className="flex flex-col gap-2.5 mb-6">
          {costItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-red-950/40 border border-red-500/20 rounded-xl px-5 py-3 backdrop-blur-sm group hover:border-red-500/40 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center shrink-0">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <span className="text-sm text-slate-200 font-medium flex-1">{item.text}</span>
              <item.icon className="w-4 h-4 text-red-400/50 shrink-0" />
            </div>
          ))}
        </div>

        <div className="text-center bg-expandix-dark/60 border border-expandix-yellow/20 rounded-2xl p-4 backdrop-blur-sm">
          <p className="text-sm text-slate-300">
            Multiplica isso por <span className="font-bold text-expandix-yellow">4 projetos/semana</span>.{" "}
          </p>
          <p className="text-base font-bold mt-1 bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
            Você está perdendo tempo e dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CostSection;
