
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      text: "Devigo completely transformed our digital presence with their AI-powered solutions. The team's expertise in machine learning and software architecture is truly exceptional. They delivered beyond our expectations and within budget.",
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      position: "CEO & Founder",
      logo: "🏢",
      rating: 5,
      avatar: "👩‍💼",
      projectValue: "$250K",
      timeframe: "3 months",
      industry: "FinTech"
    },
    {
      text: "Working with Devigo was a game-changer for our startup. Their innovative approach to product development and scalable architecture helped us grow from 1K to 100K users. Outstanding technical leadership and execution.",
      name: "Michael Chen",
      company: "InnovateLab",
      position: "CTO",
      logo: "🚀",
      rating: 5,
      avatar: "👨‍💻",
      projectValue: "$180K",
      timeframe: "4 months",
      industry: "SaaS"
    },
    {
      text: "The level of professionalism and technical expertise Devigo brings is unmatched. They built our entire e-commerce platform from scratch, integrating AI recommendations that increased our sales by 300%. Highly recommended!",
      name: "Emily Rodriguez",
      company: "FutureCommerce",
      position: "Product Director",
      logo: "⭐",
      rating: 5,
      avatar: "👩‍🔬",
      projectValue: "$320K",
      timeframe: "5 months",
      industry: "E-commerce"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length, isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const handleNavigation = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    if (direction === 'prev') {
      setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
    } else {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
            ⭐ Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the visionaries who trusted us with their digital transformation
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden transform transition-all duration-700 hover:scale-[1.02]">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 min-h-[400px]">
                {/* Left side - Client info and metrics */}
                <div className="bg-gradient-to-br from-slate-50 to-white p-8 lg:p-12 flex flex-col justify-center border-r border-gray-100">
                  <div className="text-center lg:text-left">
                    <div className="text-6xl mb-4 animate-bounce">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-1">
                        {testimonials[currentTestimonial].position}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>

                    {/* Project Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].projectValue}</div>
                        <div className="text-xs text-gray-500">Project Value</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].timeframe}</div>
                        <div className="text-xs text-gray-500">Delivery Time</div>
                      </div>
                    </div>

                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {testimonials[currentTestimonial].industry}
                    </div>
                  </div>
                </div>

                {/* Center - Testimonial content */}
                <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                      ))}
                      <span className="ml-3 text-gray-500 text-sm font-medium">5.0 out of 5</span>
                    </div>
                    
                    <div className="text-4xl text-blue-600 mb-4">"</div>
                    <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium mb-6">
                      {testimonials[currentTestimonial].text}
                    </blockquote>
                  </div>
                  
                  {/* Company logo area */}
                  <div className="flex items-center">
                    <div className="text-5xl mr-4 opacity-50">
                      {testimonials[currentTestimonial].logo}
                    </div>
                    <div className="text-2xl font-bold text-gray-400">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            {/* Previous Button */}
            <button
              className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 border border-white/20"
              onClick={() => handleNavigation('prev')}
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial 
                      ? "w-12 h-4 bg-white" 
                      : "w-4 h-4 bg-white/40 hover:bg-white/60"
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 border border-white/20"
              onClick={() => handleNavigation('next')}
            >
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
