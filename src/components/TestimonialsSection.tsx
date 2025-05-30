
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Devigo transformed our outdated systems with cutting-edge AI solutions. Their expertise and dedication exceeded our expectations.",
      name: "Sarah Johnson",
      company: "TechCorp",
      logo: "🏢"
    },
    {
      text: "The team at Devigo delivered a scalable platform that has revolutionized how we serve our customers. Highly recommended!",
      name: "Michael Chen",
      company: "InnovateLab",
      logo: "🚀"
    },
    {
      text: "Working with Devigo was a game-changer. Their strategic approach and technical excellence helped us achieve our digital transformation goals.",
      name: "Emily Rodriguez",
      company: "FutureStart",
      logo: "⭐"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="relative">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-6">{testimonials[currentTestimonial].logo}</div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="font-semibold text-gray-900">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-blue-600">
                {testimonials[currentTestimonial].company}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
