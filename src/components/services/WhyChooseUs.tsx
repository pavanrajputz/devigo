
import { Check, Globe, Zap, Shield, Users, Code2, Award } from "lucide-react";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Capabilities",
      description: "MERN, MEAN, Laravel, Flutter - we master all modern tech stacks",
      color: "text-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agile & Scalable Development",
      description: "Rapid iterations with scalable architecture for future growth",
      color: "text-yellow-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Footprint",
      description: "Development centers in India & France for 24/7 support",
      color: "text-green-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Domain Expertise",
      description: "Specialized in healthcare, e-commerce, fintech, and enterprise solutions",
      color: "text-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Teams",
      description: "Expert developers, designers, and project managers for your success",
      color: "text-indigo-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure excellence",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Why Choose Devigo
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Success is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with deep industry knowledge to deliver solutions that drive real business results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`${advantage.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {advantage.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
              
              <div className="mt-6 flex items-center text-green-600">
                <Check className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Proven Track Record</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Process Flow */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Development Process</h3>
            <p className="text-blue-100 text-lg">Streamlined workflow that ensures quality and timely delivery</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Design", desc: "Creating wireframes and user experiences" },
              { step: "03", title: "Development", desc: "Building with cutting-edge technologies" },
              { step: "04", title: "Deployment", desc: "Launch and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
                <p className="text-blue-100 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
