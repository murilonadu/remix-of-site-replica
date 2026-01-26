import { Monitor, Smartphone, Printer, Clock, Shield, Zap } from "lucide-react";

const accessMethods = [
  {
    icon: Monitor,
    title: "Computador",
  },
  {
    icon: Smartphone,
    title: "Celular",
  },
  {
    icon: Printer,
    title: "Impressão",
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "Acesso Vitalício",
    subtitle: "Para sempre em sua conta",
  },
  {
    icon: Shield,
    title: "Garantia de 7 Dias",
    subtitle: "Risco zero para você",
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    subtitle: "Receba na hora após o pagamento",
  },
];

const AccessInfo = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Acesse os projetos pelo Computador, celular ou você pode imprimir!
        </h2>

        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-12">
          {accessMethods.map((method, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center border border-border/30"
            >
              <method.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
              <p className="font-semibold text-foreground">{method.title}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 text-center border border-primary/20"
            >
              <guarantee.icon className="w-10 h-10 mx-auto mb-3 text-accent" />
              <h3 className="font-bold text-foreground mb-1">{guarantee.title}</h3>
              <p className="text-sm text-muted-foreground">{guarantee.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessInfo;
