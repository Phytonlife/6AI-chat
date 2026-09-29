import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { TopTurnkeyBanner } from './components/TopTurnkeyBanner.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { StatusAndPrestige } from './components/StatusAndPrestige.tsx';
import { CostComparison } from './components/CostComparison.tsx';
import { PainPoints } from './components/PainPoints.tsx';
import { SixToolsSection } from './components/SixToolsSection.tsx';
import { TargetAdsCombo } from './components/TargetAdsCombo.tsx';
import { RetailSection } from './components/RetailSection.tsx';
import { DeepFeatures } from './components/DeepFeatures.tsx';
import { BigAnalyticsSection } from './components/BigAnalyticsSection.tsx';
import { CabinetPreview } from './components/CabinetPreview.tsx';
import { CustomizationAndLocal } from './components/CustomizationAndLocal.tsx';
import { TargetAudienceAndCases } from './components/TargetAudienceAndCases.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { Promo20Clients } from './components/Promo20Clients.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCta } from './components/FinalCta.tsx';
import { InteractiveDemoModal } from './components/InteractiveDemoModal.tsx';
import { StickyMobileBar } from './components/StickyMobileBar.tsx';

function MainLanding() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#111111] overflow-x-hidden pb-16 lg:pb-0">
      {/* 1. Top Turnkey Automation Banner */}
      <TopTurnkeyBanner />

      {/* 2. Header with Top Bar Contract & KZ / RU Switcher */}
      <Header onOpenDemo={() => setIsDemoOpen(true)} />

      {/* 3. Hero Section with Kazakh Dialogue & Multilingual Badge */}
      <Hero onOpenDemo={() => setIsDemoOpen(true)} />

      {/* 4. Brand Status & Consumer Trust Section */}
      <StatusAndPrestige />

      {/* 5. Cost Comparison Section: Salaries vs 6 AI */}
      <CostComparison />

      {/* 6. Section "Знакомо?" (Pain Points) */}
      <PainPoints />

      {/* 7. Section "6 AI — 6 инструментов в одном" */}
      <SixToolsSection onOpenDemo={() => setIsDemoOpen(true)} />

      {/* 8. Ads & Target Integration (Instagram, TikTok, Context) */}
      <TargetAdsCombo />

      {/* 9. Retail & E-commerce Showcase (Storefront + Cart + Order + Operator) */}
      <RetailSection />

      {/* 10. Deep Dive Features: Admin, Seller, Storefront, Hot Leads, Feedback */}
      <DeepFeatures onOpenDemo={() => setIsDemoOpen(true)} />

      {/* 11. Big Analytics Section: Metrics, Days Chart, Funnel, Barriers */}
      <BigAnalyticsSection />

      {/* 12. Cabinet Preview (Sidebar & Desktop screen) */}
      <CabinetPreview />

      {/* 13. Customization & Local Launch (Atyrau & Kazakhstan) */}
      <CustomizationAndLocal />

      {/* 14. Target Audience, Real Scenarios & Case Pilots (Shakira, Triumph) */}
      <TargetAudienceAndCases />

      {/* 15. Engineering Team */}
      <TeamSection />

      {/* 16. Pricing, Launch Promo, Onboarding Fee, 7 Days Test */}
      <PricingSection onOpenDemo={() => setIsDemoOpen(true)} />

      {/* 17. Special Promo for First 20 Clients (15 000 ₸ / month) */}
      <Promo20Clients />

      {/* 18. FAQ Section */}
      <FaqSection />

      {/* 19. Final CTA Block & Footer */}
      <FinalCta onOpenDemo={() => setIsDemoOpen(true)} />

      {/* 20. Interactive Instant Demo Modal (No registration needed) */}
      <InteractiveDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

      {/* 21. Sticky Mobile Bar */}
      <StickyMobileBar onOpenDemo={() => setIsDemoOpen(true)} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLanding />
    </LanguageProvider>
  );
}
