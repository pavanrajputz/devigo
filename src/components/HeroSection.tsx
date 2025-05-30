
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Empowering Digital Products with{" "}
              <span className="text-blue-600">AI & Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We help startups and enterprises build scalable, intelligent software.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              size="lg"
            >
              Let's Talk
            </Button>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="w-full h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <svg 
                className="w-64 h-64 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
