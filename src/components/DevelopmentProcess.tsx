
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const DevelopmentProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: "Discover",
      icon: "🔍",
      description: "We dive deep into your business needs, target audience, and project requirements to create a comprehensive roadmap.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Design",
      icon: "🎨",
      description: "Our design team creates intuitive, user-centered interfaces that align with your brand and business objectives.",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Develop",
      icon: "💻",
      description: "We build scalable, secure applications using cutting-edge technologies and best development practices.",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Testing",
      icon: "🧪",
      description: "Rigorous quality assurance and testing ensure your product works flawlessly across all platforms and devices.",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Launch",
      icon: "🚀",
      description: "We deploy your product with comprehensive launch support and performance monitoring for a smooth go-live.",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Support",
      icon: "🛡️",
      description: "Ongoing maintenance, updates, and 24/7 support ensure your product continues to evolve and perform optimally.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (sectionHeight + viewportHeight)));
          setProgress(scrollProgress * 100);
          
          const currentStep = Math.min(steps.length - 1, Math.floor(scrollProgress * steps.length));
          setActiveStep(currentStep);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch and beyond
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden lg:block">
            <div 
              className="bg-gradient-to-b from-blue-500 to-purple-600 w-full transition-all duration-500 ease-out"
              style={{ height: `${progress}%` }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-16 gap-8`}
              >
                {/* Content Card */}
                <div className="lg:w-1/2 w-full">
                  <Card className={`transform transition-all duration-700 ${
                    activeStep >= index 
                      ? 'scale-100 opacity-100 translate-y-0' 
                      : 'scale-95 opacity-50 translate-y-8'
                  } hover:scale-105 hover:shadow-xl`}>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl mr-4 shadow-lg`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <div className="text-sm text-gray-500">Step {index + 1} of {steps.length}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Circle (Desktop only) */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 items-center justify-center">
                  <div className={`w-6 h-6 rounded-full transition-all duration-500 ${
                    activeStep >= index 
                      ? `bg-gradient-to-r ${step.color} scale-110 shadow-lg` 
                      : 'bg-gray-300 scale-100'
                  }`} />
                </div>

                {/* Spacer for alignment */}
                <div className="lg:w-1/2 w-full hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="text-sm font-medium text-gray-600">Progress:</div>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-sm font-bold text-gray-900">{Math.round(progress)}%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
