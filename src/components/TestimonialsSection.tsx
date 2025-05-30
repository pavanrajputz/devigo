
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Devigo transformed our outdated systems with cutting-edge AI solutions. Their expertise and dedication exceeded our expectations. The team delivered on time and within budget.",
      name: "Sarah Johnson",
      company: "TechCorp",
      position: "CEO",
      logo: "🏢",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      text: "The team at Devigo delivered a scalable platform that has revolutionized how we serve our customers. Their innovative approach and technical skills are unmatched.",
      name: "Michael Chen",
      company: "InnovateLab",
      position: "CTO",
      logo: "🚀",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      text: "Working with Devigo was a game-changer. Their strategic approach and technical excellence helped us achieve our digital transformation goals faster than we imagined.",
      name: "Emily Rodriguez",
      company: "FutureStart",
      position: "Product Director",
      logo: "⭐",
      rating: 5,
      avatar: "👩‍🔬"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative">
          <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Left side - Testimonial content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                      ))}
                    </div>
                    <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic mb-6">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-blue-600 font-medium">
                        {testimonials[currentTestimonial].position}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Company logo and decoration */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-white">
                    <div className="text-8xl mb-4 animate-pulse">
                      {testimonials[currentTestimonial].logo}
                    </div>
                    <div className="text-2xl font-bold opacity-90">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? "bg-blue-600 scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
