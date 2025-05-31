import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Smartphone, Apple, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDevelopment = () => {
  const features = [
    "Native iOS and Android development",
    "Cross-platform solutions (Flutter, React Native)",
    "UI/UX design for mobile interfaces",
    "App Store optimization and deployment",
    "Backend integration and APIs",
    "Push notifications and real-time features",
    "Payment gateway integration",
    "App analytics and performance monitoring",
    "Maintenance and updates",
    "App store compliance"
  ];

  const platforms = [
    { name: "iOS", icon: <Apple className="w-8 h-8" />, description: "Native iOS apps using Swift and Objective-C" },
    { name: "Android", icon: <Smartphone className="w-8 h-8" />, description: "Native Android apps using Kotlin and Java" },
    { name: "Flutter", icon: <Code className="w-8 h-8" />, description: "Cross-platform apps with single codebase" },
    { name: "React Native", icon: <Smartphone className="w-8 h-8" />, description: "JavaScript-based cross-platform development" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-6">
              <Smartphone className="w-12 h-12 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Native and cross-platform mobile apps for iOS and Android. 
              Flutter, React Native, and native development expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Start Your App Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View App Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Platforms
            </h2>
            <p className="text-xl text-gray-600">
              We build apps for all major platforms and frameworks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-fit">
                    <div className="text-purple-600">{platform.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{platform.description}</p>
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
              Comprehensive mobile app development services
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's turn your app idea into reality with our expert development team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
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

export default MobileAppDevelopment;
