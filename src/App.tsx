import React from 'react';
import { TopUrgencyBar } from './components/TopUrgencyBar';
import { Header } from './components/Header';
import { UrgencyRibbon } from './components/UrgencyRibbon';
import { HeroSection } from './components/HeroSection';
import { PainVsSolution } from './components/PainVsSolution';
import { ArsenalSection } from './components/ArsenalSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { goToHotmartCheckout } from './config/checkout';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e] font-sans antialiased selection:bg-[#fea619] selection:text-[#131b2e] pb-14 sm:pb-0">
      {/* 1. Top Urgency Banner with 22-Hour Countdown and R$ 59,90 -> R$ 19,90 */}
      <TopUrgencyBar />

      {/* 2. Main Navigation Header with 3D Rota Planet & Brand */}
      <Header onOpenCheckout={goToHotmartCheckout} />

      {/* 3. Secondary Urgency Ribbon (The 4 Steps: Entender -> Aplicar -> Corrigir -> Revisar) */}
      <UrgencyRibbon />

      {/* 4. Main Hero Section with 3D Planet Centerpiece, VSL and Hotmart CTA */}
      <main className="flex-1">
        <HeroSection onOpenCheckout={goToHotmartCheckout} />

        {/* 5. Pain Points vs Solution Comparison */}
        <PainVsSolution />

        {/* 6. The Core Practical Modules Bento Grid */}
        <ArsenalSection onOpenCheckout={goToHotmartCheckout} />

        {/* 7. Student Testimonials & Proof */}
        <TestimonialsSection />

        {/* 8. Offer Section & Price Breakdown (R$ 19,90) */}
        <OfferSection onOpenCheckout={goToHotmartCheckout} />

        {/* 9. 7-Day Unconditional Guarantee */}
        <GuaranteeSection />

        {/* 10. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 11. Final High-Conversion Urgency CTA */}
        <FinalCtaSection onOpenCheckout={goToHotmartCheckout} />
      </main>

      {/* 12. Comprehensive Footer */}
      <Footer />

      {/* 13. Mobile Bottom Sticky Conversion Bar */}
      <StickyMobileBar onOpenCheckout={goToHotmartCheckout} />
    </div>
  );
}


