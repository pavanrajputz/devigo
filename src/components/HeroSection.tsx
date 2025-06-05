
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative pt-16 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Dark space-like background with 3D scene */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* 3D Scene as main background */}
        <div className="absolute inset-0">
          <Scene3D />
        </div>
        
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-8">
          <div className="animate-fade-in space-y-6">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium rounded-full animate-pulse">
                🚀 Building the Future of Digital Products
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                <span className="block">THRESHOLD</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  OF INNOVATION
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Transcending boundaries of digital innovation through immersive technology experiences
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white px-10 py-4 text-lg font-semibold group transform transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 rounded-full"
                size="lg"
              >
                ENTER THE VOID
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-white/5 rounded-full"
                size="lg"
              >
                EXPLORE WORK
              </Button>
            </div>

            {/* Stats with futuristic styling */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">150+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
