const TopBanner = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-expandix-green via-expandix-yellow to-expandix-green opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
      
      {/* Shine sweep effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
      </div>
      
      <div className="container mx-auto relative z-10 py-3 px-4">
        <div className="text-center">
          <span className="font-bold text-lg text-expandix-dark drop-shadow-sm tracking-wide">
            🔥 APENAS HOJE {formattedDate} 🔥
          </span>
        </div>
      </div>
      
      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-expandix-yellow to-transparent opacity-60" />
    </div>
  );
};
export default TopBanner;
