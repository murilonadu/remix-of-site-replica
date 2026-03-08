import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";

const redirectWithParams = (baseUrl: string) => {
  const currentParams = window.location.search;
  const separator = baseUrl.includes('?') ? '&' : '?';
  const finalUrl = currentParams ? `${baseUrl}${separator}${currentParams.substring(1)}` : baseUrl;
  window.location.href = finalUrl;
};

const Footer = () => {
  const scrollToOffer = () => {
    const targetSection = document.getElementById('ofertas');
    if (targetSection) {
      const offset = 80;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-green-cta hover:bg-green-cta-hover text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 glow-green hover:scale-105 h-auto"
          >
            <Book className="w-6 h-6" />
            ACESSAR PROJETOS
          </Button>
          <p className="text-background/80 text-sm">© 2025 Manual da Marcenaria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
