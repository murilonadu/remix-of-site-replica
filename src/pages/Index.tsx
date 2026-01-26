import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import TopBanner from "@/components/TopBanner";
import PurchaseNotifications from "@/components/PurchaseNotifications";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

// Lazy load components below the fold
const BonusSection = lazy(() => import("@/components/BonusSection"));
const ContentSection = lazy(() => import("@/components/ContentSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const FinalCtaSection = lazy(() => import("@/components/FinalCtaSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const Footer = lazy(() => import("@/components/Footer"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const TimedOfferPopup = lazy(() => import("@/components/TimedOfferPopup"));

// Simple loading fallback
const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Suspense fallback={null}>
        <ExitIntentPopup />
        <TimedOfferPopup />
      </Suspense>
      <TopBanner />
      <PurchaseNotifications />
      <div className="pt-12">
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <ScrollAnimationWrapper>
            <BonusSection />
          </ScrollAnimationWrapper>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ScrollAnimationWrapper delay={0.1}>
            <ContentSection />
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
