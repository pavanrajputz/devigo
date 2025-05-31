
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Calendar, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      link: "/case-studies/blood-bank-system",
      year: "2023",
      duration: "6 months"
    },
    {
      title: "E-commerce Platform",
      client: "RetailMax",
      description: "Scalable multi-vendor marketplace with advanced analytics, payment integration, and mobile-first design approach.",
      outcome: "250% increase in sales, 40% better user engagement",
      tech: ["Next.js", "Laravel", "MySQL", "Stripe"],
      image: "bg-gradient-to-br from-blue-100 to-cyan-100",
      accent: "from-blue-500 to-cyan-500",
      link: "/case-studies/ecommerce-platform",
      year: "2023",
      duration: "8 months"
    },
    {
      title: "Corporate CRM System",
      client: "TechCorp Industries",
      description: "Custom CRM solution that revolutionized sales process and customer relationship management with automation and analytics.",
      outcome: "180% increase in lead conversion, 60% faster sales cycles",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      image: "bg-gradient-to-br from-green-100 to-emerald-100",
      accent: "from-green-500 to-emerald-500",
      link: "/case-studies/corporate-crm",
      year: "2022",
      duration: "10 months"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Success Stories
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore detailed insights into how we've helped businesses achieve digital transformation 
              and drive measurable results through innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl text-gray-600">
              See how we've transformed businesses across various industries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`${study.image} flex items-center justify-center relative overflow-hidden h-64 lg:h-auto`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${study.accent} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                    <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                      {index === 0 ? "🏥" : index === 1 ? "🛒" : "📊"}
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-3 h-3 bg-gradient-to-r ${study.accent} rounded-full`}></div>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{study.client}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {study.year}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
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
                    
                    <Link to={study.link}>
                      <Button variant="outline" className="w-full group/btn hover:bg-blue-600 hover:text-white hover:border-blue-600">
                        Read Full Case Study
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create something amazing together and achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
