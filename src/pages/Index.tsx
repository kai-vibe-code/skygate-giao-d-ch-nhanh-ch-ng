import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PartnersSection from "@/components/landing/PartnersSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <PartnersSection />
      <HowItWorksSection />
      <FooterSection />
    </main>
  );
};

export default Index;
