
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions that transform your business processes and drive intelligent automation.",
      icon: "🤖"
    },
    {
      title: "Software Engineering",
      description: "Scalable, robust software development with modern technologies and best practices.",
      icon: "💻"
    },
    {
      title: "Product Strategy",
      description: "Strategic guidance to align your digital products with market demands and user needs.",
      icon: "📊"
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
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-gray-200 hover:border-blue-300"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">
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
