
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Let's discuss your project and explore how our expertise can help you achieve your digital goals. 
            Get a free consultation and detailed project roadmap.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Calendar className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Free Consultation</h3>
              <p className="text-blue-100 text-sm">30-minute strategy session</p>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Project Roadmap</h3>
              <p className="text-blue-100 text-sm">Detailed planning & timeline</p>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Phone className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100 text-sm">Ongoing assistance available</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group font-semibold"
            >
              Schedule a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all duration-300 font-semibold"
            >
              View Portfolio
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
            <div className="hidden sm:block w-1 h-4 bg-blue-300"></div>
            <div>Response within 24 hours</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
