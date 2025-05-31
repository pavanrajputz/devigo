
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Lightbulb, Settings, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ITConsulting = () => {
  const features = [
    "Technology strategy development",
    "Digital transformation consulting",
    "IT infrastructure assessment",
    "Cloud migration planning",
    "Security audits and recommendations",
    "Software architecture design",
    "Technology stack selection",
    "Process optimization",
    "Vendor evaluation and selection",
    "Training and knowledge transfer"
  ];

  const consultingAreas = [
    { name: "Strategy", icon: <Lightbulb className="w-8 h-8" />, description: "Technology roadmap and strategic planning" },
    { name: "Implementation", icon: <Settings className="w-8 h-8" />, description: "Hands-on implementation support" },
    { name: "Optimization", icon: <Zap className="w-8 h-8" />, description: "Performance and efficiency improvements" },
    { name: "Training", icon: <Users className="w-8 h-8" />, description: "Team training and knowledge transfer" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-3 bg-orange-100 rounded-full mb-6">
              <Users className="w-12 h-12 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IT Consulting & Strategy
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert technology consulting to guide your digital transformation journey 
              and optimize your IT infrastructure for maximum efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Consulting Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consulting Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive IT consulting across all aspects of technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-orange-100 rounded-full w-fit">
                    <div className="text-orange-600">{area.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{area.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600">
              Strategic IT consulting services to accelerate your business transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Technology Strategy?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let our experts guide you through your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Get Strategic Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
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

export default ITConsulting;
