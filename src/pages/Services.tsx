
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import CaseStudies from "@/components/services/CaseStudies";
import TechStack from "@/components/services/TechStack";
import ServicesCTA from "@/components/services/ServicesCTA";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ServicesHero />
      <ServiceGrid />
      <WhyChooseUs />
      <CaseStudies />
      <TechStack />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Services;
