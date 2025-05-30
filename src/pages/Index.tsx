
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AdvantagesSection />
      <DevelopmentProcess />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
