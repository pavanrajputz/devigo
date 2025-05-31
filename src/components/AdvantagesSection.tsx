
import { Card, CardContent } from "@/components/ui/card";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Rapid development cycles with agile methodologies to get your product to market quickly",
      color: "bg-gradient-to-br from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100",
      iconBg: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      icon: "🎯",
      title: "Custom Solutions", 
      description: "Tailored software solutions designed specifically for your business needs and requirements",
      color: "bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100",
      iconBg: "bg-gradient-to-r from-blue-400 to-cyan-500"
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Competitive pricing with transparent costs and flexible payment options for all budgets",
      color: "bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100",
      iconBg: "bg-gradient-to-r from-green-400 to-emerald-500"
    },
    {
      icon: "🕐",
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly",
      color: "bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100",
      iconBg: "bg-gradient-to-r from-purple-400 to-pink-500"
    },
    {
      icon: "🚀",
      title: "Scalable Architecture",
      description: "Future-proof solutions built to scale with your business growth and evolving needs",
      color: "bg-gradient-to-br from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100",
      iconBg: "bg-gradient-to-r from-indigo-400 to-blue-500"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security measures and compliance standards to protect your valuable data",
      color: "bg-gradient-to-br from-red-50 to-rose-50 hover:from-red-100 hover:to-rose-100",
      iconBg: "bg-gradient-to-r from-red-400 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
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
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden ${advantage.color}`}
            >
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className={`w-16 h-16 ${advantage.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-2xl filter drop-shadow-sm">
                    {advantage.icon}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {advantage.description}
                </p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-blue-600 font-medium">
            <span>Ready to get started?</span>
            <div className="w-6 h-0.5 bg-blue-600 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
