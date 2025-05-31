
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Blood Bank Management System",
      client: "HealthCare Plus",
      description: "Complete digital transformation of blood bank operations with real-time inventory tracking, donor management, and automated notifications.",
      outcome: "90% reduction in manual errors, 3x faster processing time",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "bg-gradient-to-br from-red-100 to-pink-100",
      accent: "from-red-500 to-pink-500",
      link: "/case-studies/blood-bank-system"
    },
    {
      title: "E-commerce Platform",
      client: "RetailMax",
      description: "Scalable multi-vendor marketplace with advanced analytics, payment integration, and mobile-first design approach.",
      outcome: "250% increase in sales, 40% better user engagement",
      tech: ["Next.js", "Laravel", "MySQL", "Stripe"],
      image: "bg-gradient-to-br from-blue-100 to-cyan-100",
      accent: "from-blue-500 to-cyan-500",
      link: "/case-studies/ecommerce-platform"
    },
    {
      title: "Corporate CRM System",
      client: "TechCorp Industries",
      description: "Custom CRM solution that revolutionized sales process and customer relationship management with automation and analytics.",
      outcome: "180% increase in lead conversion, 60% faster sales cycles",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      image: "bg-gradient-to-br from-green-100 to-emerald-100",
      accent: "from-green-500 to-emerald-500",
      link: "/case-studies/corporate-crm"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results for Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve their digital transformation goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Link key={index} to={study.link}>
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className={`h-48 ${study.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${study.accent} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                    {index === 0 ? "🏥" : index === 1 ? "🛒" : "📊"}
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-3 h-3 bg-gradient-to-r ${study.accent} rounded-full`}></div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{study.client}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="text-sm font-medium text-green-800 mb-1">Key Results:</div>
                    <div className="text-green-700">{study.outcome}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group/btn hover:bg-blue-600 hover:text-white hover:border-blue-600">
                    Read Full Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/case-studies">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
