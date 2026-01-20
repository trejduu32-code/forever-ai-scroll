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
import TimelineSection from "@/components/TimelineSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HardwareSection />
      <FeaturesSection />
      <LanguagesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <ParallaxSection />
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
