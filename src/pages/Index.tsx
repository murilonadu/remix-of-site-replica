import { lazy, Suspense, useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import TopBanner from "@/components/TopBanner";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

// Lazy load components below the fold
const CostSection = lazy(() => import("@/components/CostSection"));
const BonusSection = lazy(() => import("@/components/BonusSection"));
const ContentSection = lazy(() => import("@/components/ContentSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const FinalCtaSection = lazy(() => import("@/components/FinalCtaSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Lazy load extras (popups and notifications) - deferred loading
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const TimedOfferPopup = lazy(() => import("@/components/TimedOfferPopup"));
const PurchaseNotifications = lazy(() => import("@/components/PurchaseNotifications"));

// Simple loading fallback
const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  // Deferred loading state - only render extras after critical content is painted
  const [isReadyForExtras, setIsReadyForExtras] = useState(false);

  useEffect(() => {
    // Wait 2.5 seconds after mount before loading popups and notifications
    // This ensures the browser prioritizes rendering HeroSection and TopBanner first
    const timer = setTimeout(() => {
      setIsReadyForExtras(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-inter">
      {/* Deferred extras - only load after 2.5s to prioritize critical rendering */}
      {isReadyForExtras && (
        <Suspense fallback={null}>
          <ExitIntentPopup />
          <TimedOfferPopup />
          <PurchaseNotifications />
        </Suspense>
      )}
      
      {/* Critical above-the-fold content - loads immediately */}
      <TopBanner />
      <div className="pt-12">
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <ScrollAnimationWrapper>
            <CostSection />
          </ScrollAnimationWrapper>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ScrollAnimationWrapper delay={0.1}>
            <ContentSection />
          </ScrollAnimationWrapper>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ScrollAnimationWrapper>
            <BonusSection />
          </ScrollAnimationWrapper>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ScrollAnimationWrapper delay={0.1}>
            <TestimonialsSection />
          </ScrollAnimationWrapper>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ScrollAnimationWrapper delay={0.1}>
            <AboutSection />
          </ScrollAnimationWrapper>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ScrollAnimationWrapper delay={0.1}>
            <GuaranteeSection />
          </ScrollAnimationWrapper>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ScrollAnimationWrapper delay={0.1}>
            <FinalCtaSection />
          </ScrollAnimationWrapper>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ScrollAnimationWrapper delay={0.1}>
            <FaqSection />
          </ScrollAnimationWrapper>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
