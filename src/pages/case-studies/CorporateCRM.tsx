
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, TrendingUp, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CorporateCRM = () => {
  const challenges = [
    "Fragmented customer data across systems",
    "Manual sales process management",
    "Lack of sales pipeline visibility",
    "Poor customer communication tracking",
    "Inefficient lead management"
  ];

  const solutions = [
    "Unified customer data management",
    "Automated sales workflow system",
    "Real-time pipeline dashboard",
    "Integrated communication platform",
    "Advanced lead scoring system"
  ];

  const results = [
    { metric: "180%", description: "Increase in lead conversion" },
    { metric: "60%", description: "Faster sales cycles" },
    { metric: "95%", description: "Customer data accuracy" },
    { metric: "45%", description: "Revenue growth" }
  ];

  const techStack = ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                Enterprise CRM
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Corporate CRM System
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Custom CRM solution for TechCorp Industries that revolutionized their sales process 
                and customer relationship management.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-600">10 months project</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-600">TechCorp Industries</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-600">2022</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-600">180% conversion boost</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-8xl opacity-30">📊</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 mb-8">
                TechCorp Industries was facing challenges with scattered customer data, 
                manual processes, and lack of visibility into their sales pipeline.
              </p>
              
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <p className="text-lg text-gray-600 mb-8">
                We developed a comprehensive CRM system that unified all customer interactions, 
                automated sales processes, and provided actionable insights.
              </p>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exceptional Performance
            </h2>
            <p className="text-xl text-gray-600">
              The CRM transformation delivered remarkable business improvements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 mb-2">{result.metric}</div>
                  <p className="text-gray-600">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Robust technologies powering the CRM system
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span key={index} className="px-6 py-3 bg-green-100 text-green-800 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Sales Process?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's build a CRM system that transforms how you manage customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Start Your CRM Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateCRM;
