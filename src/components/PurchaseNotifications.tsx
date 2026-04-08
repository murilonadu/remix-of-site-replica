import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const PurchaseNotifications = () => {
  const [notifications, setNotifications] = useState<Array<{id: number, name: string, city: string}>>([]);

  const names = [
    "João Silva", "Maria Santos", "Pedro Costa", "Ana Oliveira", "Carlos Souza",
    "Fernanda Lima", "Rafael Alves", "Juliana Rocha", "Gabriel Santos", "Camila Ferreira",
    "Bruno Carvalho", "Larissa Martins", "Thiago Barbosa", "Priscila Gomes", "André Ribeiro"
  ];

  const cities = [
    "São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", "Salvador - BA",
    "Fortaleza - CE", "Brasília - DF", "Curitiba - PR", "Recife - PE", "Porto Alegre - RS",
    "Manaus - AM", "Belém - PA", "Goiânia - GO", "Campinas - SP", "São Luís - MA"
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const id = Date.now();

      setNotifications(prev => [...prev, { id, name: randomName, city: randomCity }]);

      setTimeout(() => {
        setNotifications(prev => prev.filter(notif => notif.id !== id));
      }, 4000);
    };

    // Primeira notificação após 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);

    // Depois a cada 15-25 segundos
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 10000 + 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-green-500 text-white p-4 rounded-lg shadow-lg max-w-sm animate-slide-in-left"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <div className="text-sm">
                <div className="font-semibold">{notification.name}</div>
                <div className="text-xs opacity-75">acabou de comprar</div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseNotifications;