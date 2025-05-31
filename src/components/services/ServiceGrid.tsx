
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Building, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceGrid = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks and best practices.",
      icon: <Code className="w-8 h-8" />,
      link: "/services/web-development"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      icon: <Smartphone className="w-8 h-8" />,
      link: "/services/mobile-app-development"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences.",
      icon: <Palette className="w-8 h-8" />,
      link: "/services/ui-ux-design"
    },
    {
      title: "Enterprise Software Solutions",
      description: "Scalable enterprise applications designed to streamline operations and drive growth.",
      icon: <Building className="w-8 h-8" />,
      link: "/services/enterprise-software"
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to grow your online presence and reach.",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/services/digital-marketing"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Expert technology consulting to guide your digital transformation journey.",
      icon: <Users className="w-8 h-8" />,
      link: "/services/it-consulting"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive sustainable growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg cursor-pointer h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
