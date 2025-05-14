import React from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AdvantagesSection from "@/components/landing/AdvantagesSection";
import PricesSection from "@/components/landing/PricesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <HeroSection />
        <AdvantagesSection />
        <PricesSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
