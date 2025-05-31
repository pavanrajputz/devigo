
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Wrench, Layers, Globe, TrendingUp, Code2 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies and frameworks.",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Web Design & Development",
      description: "Custom website design and development tailored to your business needs.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging experiences.",
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: "Website Maintenance & Optimization",
      description: "Ongoing support and optimization to keep your website running at peak performance.",
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built to solve your unique business challenges.",
      icon: <Layers className="w-8 h-8" />
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to grow your online presence and reach.",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and complete website solutions.",
      icon: <Code2 className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-gray-200 hover:border-blue-300"
            >
              <CardHeader className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
