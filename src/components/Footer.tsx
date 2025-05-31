
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-gray-900 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">DEVIGO</div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a leading web agency specializing in creating innovative digital solutions that help businesses achieve their goals through modern technology and strategic design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors p-2">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors p-2">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors p-2">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors p-2">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors p-2">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  Full Stack Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  Web Design & Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  Website Maintenance & Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-600 mr-2">→</span>
                  WordPress Development
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 relative">
              Contact Info
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></div>
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-gray-600">
                <span className="text-blue-600 mr-3 mt-1">📍</span>
                <span>San Francisco, CA</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-600 mr-3">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-600 mr-3">📧</span>
                <span>contact@devigo.com</span>
              </li>
            </ul>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Subscribe to our Newsletter
              </h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Email Address"
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 px-4">
                  →
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p>© 2025 DEVIGO. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
