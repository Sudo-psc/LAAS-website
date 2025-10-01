import HeroSection from '@/components/sections/HeroSection';
import TrustBadgesSection from '@/components/sections/TrustBadgesSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import PlansSection from '@/components/sections/PlansSection';
import PromotionsSection from '@/components/sections/PromotionsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AboutClinicSection from '@/components/sections/AboutClinicSection';
import ClinicServicesSection from '@/components/sections/ClinicServicesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import DifferentialsSection from '@/components/sections/DifferentialsSection';
import WebsiteReferenceSection from '@/components/sections/WebsiteReferenceSection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';
import CookieBanner from '@/components/compliance/CookieBanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TrustBadgesSection />
      <ProblemSolutionSection />
      <CalculatorSection />
      <PlansSection />
      <PromotionsSection />
      <TestimonialsSection />
      <AboutClinicSection />
      <ClinicServicesSection />
      <WebsiteReferenceSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <FAQSection />
      <Footer />
      <CookieBanner />
    </main>
  );
}
