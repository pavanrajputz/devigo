
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Users, TrendingUp, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BloodBankSystem = () => {
  const challenges = [
    "Manual inventory tracking leading to errors",
    "Inefficient donor management system",
    "Lack of real-time blood availability updates",
    "Poor communication between departments",
    "Time-consuming report generation"
  ];

  const solutions = [
    "Real-time inventory management dashboard",
    "Automated donor registration and scheduling",
    "SMS/Email notification system",
    "Cross-department communication portal",
    "Automated reporting and analytics"
  ];

  const results = [
    { metric: "90%", description: "Reduction in manual errors" },
    { metric: "3x", description: "Faster processing time" },
    { metric: "75%", description: "Improved donor retention" },
    { metric: "60%", description: "Reduction in waste" }
  ];

  const techStack = ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "Material-UI"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                Healthcare Technology
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Blood Bank Management System
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Complete digital transformation of blood bank operations with real-time inventory tracking, 
                donor management, and automated notifications for HealthCare Plus.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-gray-600">6 months project</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-gray-600">HealthCare Plus</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-gray-600">2023</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-gray-600">90% efficiency gain</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-8xl opacity-30">🏥</div>
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
                HealthCare Plus was struggling with outdated manual processes for blood bank management. 
                Critical errors in inventory tracking, inefficient donor management, and lack of real-time 
                updates were affecting their ability to serve patients effectively.
              </p>
              
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <p className="text-lg text-gray-600 mb-8">
                We developed a comprehensive digital solution that automated all critical processes, 
                providing real-time visibility and seamless communication across departments.
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
              Measurable Results
            </h2>
            <p className="text-xl text-gray-600">
              The impact of our solution on HealthCare Plus operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-red-600 mb-2">{result.metric}</div>
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
              Cutting-edge technologies used to build this solution
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span key={index} className="px-6 py-3 bg-red-100 text-red-800 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let's discuss how we can help you achieve similar results with custom software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
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

export default BloodBankSystem;
