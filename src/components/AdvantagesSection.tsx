
import { Card, CardContent } from "@/components/ui/card";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Rapid development cycles with agile methodologies to get your product to market quickly"
    },
    {
      icon: "🎯",
      title: "Custom Solutions", 
      description: "Tailored software solutions designed specifically for your business needs and requirements"
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Competitive pricing with transparent costs and flexible payment options for all budgets"
    },
    {
      icon: "🕐",
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly"
    },
    {
      icon: "🚀",
      title: "Scalable Architecture",
      description: "Future-proof solutions built to scale with your business growth and evolving needs"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security measures and compliance standards to protect your valuable data"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Devigo?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver exceptional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 hover:border-blue-300 text-center"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
