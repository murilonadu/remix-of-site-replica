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
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-expandix-dark text-white relative overflow-hidden noise-overlay">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-expandix-green/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <Button
              onClick={scrollToOffer}
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 h-auto border border-green-400/30 overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
              </div>
              <Book className="w-6 h-6 relative z-10" />
              <span className="relative z-10">ACESSAR PROJETOS</span>
            </Button>
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-expandix-green/40 to-transparent mx-auto" />
          <p className="text-slate-500 text-sm">© 2025 Manual da Marcenaria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
