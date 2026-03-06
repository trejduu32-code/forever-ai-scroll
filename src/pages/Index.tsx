import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HardwareSection from "@/components/HardwareSection";
import FeaturesSection from "@/components/FeaturesSection";
import LanguagesSection from "@/components/LanguagesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UseCasesSection from "@/components/UseCasesSection";
import ParallaxSection from "@/components/ParallaxSection";
import ComparisonSection from "@/components/ComparisonSection";
import CompetitorRoastSection from "@/components/CompetitorRoastSection";
import TimelineSection from "@/components/TimelineSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParallaxBreak1 from "@/components/ParallaxBreak1";
import ParallaxBreak2 from "@/components/ParallaxBreak2";
import ParallaxBreak3 from "@/components/ParallaxBreak3";
import ParallaxBreak4 from "@/components/ParallaxBreak4";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ParallaxBreak1 />
      <HardwareSection />
      <FeaturesSection />
      <ParallaxBreak2 />
      <LanguagesSection />
      <HowItWorksSection />
      <ParallaxBreak3 />
      <UseCasesSection />
      <ParallaxSection />
      <CompetitorRoastSection />
      <ParallaxBreak4 />
      <ComparisonSection />
      <TimelineSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
