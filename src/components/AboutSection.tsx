
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Devigo
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Devigo, we're passionate about transforming businesses through cutting-edge technology. 
              Our team of expert developers and AI specialists work closely with clients to build 
              innovative solutions that drive growth and efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in software development and artificial intelligence, 
              we understand the unique challenges facing modern businesses and provide 
              tailored solutions that deliver real results.
            </p>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              size="lg"
            >
              See how we work
            </Button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-yellow-100 p-6 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
