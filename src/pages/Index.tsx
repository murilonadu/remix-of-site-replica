import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContentSection from "@/components/ContentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import PurchaseNotifications from "@/components/PurchaseNotifications";
import FaqSection from "@/components/FaqSection";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import TimedOfferPopup from "@/components/TimedOfferPopup";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <ExitIntentPopup />
      <TimedOfferPopup />
      <TopBanner />
      <PurchaseNotifications />
      <div className="pt-12">
        <HeroSection />
        
        <ScrollAnimationWrapper>
          <BonusSection />
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper delay={0.1}>
          <ContentSection />
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper delay={0.1}>
          <TestimonialsSection />
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper delay={0.1}>
          <AboutSection />
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper delay={0.1}>
          <GuaranteeSection />
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper delay={0.1}>
          <FinalCtaSection />
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper delay={0.1}>
          <FaqSection />
        </ScrollAnimationWrapper>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;