
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Palette, Smartphone, Wrench, Layers, Globe, TrendingUp, Code2 } from "lucide-react";

const ServicesSection = () => {
  const serviceCategories = {
    "development": {
      title: "Development Services",
      services: [
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
          title: "Custom Software Development",
          description: "Tailored software solutions built to solve your unique business challenges.",
          icon: <Layers className="w-8 h-8" />
        },
        {
          title: "WordPress Development",
          description: "Custom WordPress themes, plugins, and complete website solutions.",
          icon: <Code2 className="w-8 h-8" />
        }
      ]
    },
    "design": {
      title: "Design & UX",
      services: [
        {
          title: "UI/UX Design",
          description: "User-centered design solutions that create intuitive and engaging experiences.",
          icon: <Palette className="w-8 h-8" />
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android.",
          icon: <Smartphone className="w-8 h-8" />
        }
      ]
    },
    "marketing": {
      title: "Marketing & Optimization",
      services: [
        {
          title: "Digital Marketing",
          description: "Strategic digital marketing campaigns to grow your online presence and reach.",
          icon: <TrendingUp className="w-8 h-8" />
        },
        {
          title: "Website Maintenance & Optimization",
          description: "Ongoing support and optimization to keep your website running at peak performance.",
          icon: <Wrench className="w-8 h-8" />
        }
      ]
    }
  };

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
        
        <Tabs defaultValue="development" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>
          
          {Object.entries(serviceCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.services.map((service, index) => (
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
