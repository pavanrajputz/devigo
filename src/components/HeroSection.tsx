
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleEnterVoid = () => {
    navigate("/contact", { state: { scrollToForm: true } });
  };

  const handleExploreWork = () => {
    navigate("/work");
  };

  return (
    <section id="home" className="relative pt-16 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated background elements */}
        <div 
          className="absolute w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            right: `${mousePosition.x * 0.015}px`,
            bottom: `${mousePosition.y * 0.015}px`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-8">
          <div className="animate-fade-in space-y-6">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-blue-100 border border-blue-200 text-blue-800 text-sm font-medium rounded-full">
                🚀 Design - Develop - Deploy
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
                <span className="block">THRESHOLD</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  OF INNOVATION
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Transcending boundaries of digital innovation through immersive technology experiences
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                onClick={handleEnterVoid}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-10 py-4 text-lg font-semibold group transform transition-all duration-300 hover:scale-105"
                size="lg"
              >
                ENTER THE VOID
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              
              <Button 
                onClick={handleExploreWork}
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-10 py-4 text-lg font-semibold transition-all duration-300"
                size="lg"
              >
                EXPLORE WORK
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">150+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">98%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text">24/7</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
