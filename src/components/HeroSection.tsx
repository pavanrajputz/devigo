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
      {/* Animated background with 3D scene */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          <div 
            className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-200 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>
        {/* 3D Scene */}
        <div className="absolute inset-0 opacity-80">
          <Scene3D />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100/90 backdrop-blur-sm text-blue-600 text-sm font-medium rounded-full animate-bounce">
                🚀 Building the Future of Digital Products
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Empowering Digital Products with{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                  AI & Innovation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                We help startups and enterprises build scalable, intelligent software that transforms businesses and delights users.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold group transform transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                size="lg"
              >
                Let's Talk
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-white/80"
                size="lg"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50">
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in lg:hidden">
            {/* Keep existing illustration for mobile fallback */}
            <div className="relative w-full h-96 lg:h-[500px]">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl transform rotate-6 opacity-20 animate-pulse"
                style={{
                  transform: `rotate(6deg) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              />
              
              <div 
                className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center transform -rotate-2"
                style={{
                  transform: `rotate(-2deg) translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <div className="space-y-6 p-8">
                  {/* Code snippet visualization */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-2 font-mono text-sm">
                      <div className="text-purple-600">const innovation = {`{`}</div>
                      <div className="text-blue-600 ml-4">ai: 'cutting-edge',</div>
                      <div className="text-green-600 ml-4">development: 'scalable',</div>
                      <div className="text-orange-600 ml-4">delivery: 'fast'</div>
                      <div className="text-purple-600">{`};`}</div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center animate-bounce">
                      <div className="text-2xl mb-2">🤖</div>
                      <div className="text-xs font-semibold text-blue-700">AI Powered</div>
                    </div>
                    <div 
                      className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg text-center animate-bounce" 
                      style={{animationDelay: '0.5s'}}
                    >
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-xs font-semibold text-purple-700">Lightning Fast</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating decoration elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
