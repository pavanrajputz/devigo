
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Globe, MapPin, Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [quickMessage, setQuickMessage] = useState({ email: "", message: "" });
  const [inquiryForm, setInquiryForm] = useState({
    fullName: "",
    organization: "",
    services: "",
    email: "",
    phone: "",
    budget: "",
    requirements: ""
  });

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToForm) {
      const inquirySection = document.getElementById('inquiry-form');
      if (inquirySection) {
        inquirySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleQuickMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.email || !quickMessage.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setQuickMessage({ email: "", message: "" });
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.fullName || !inquiryForm.email || !inquiryForm.phone || !inquiryForm.requirements) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Inquiry submitted successfully! We'll contact you within 24 hours.");
    setInquiryForm({
      fullName: "",
      organization: "",
      services: "",
      email: "",
      phone: "",
      budget: "",
      requirements: ""
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question, idea, or project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Multiple ways to reach our team</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact@devigo.in</p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91-9876-543210</p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
              <p className="text-gray-600">www.devigo.in</p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Offices</h3>
              <p className="text-gray-600">India & France</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Twitter className="w-6 h-6 text-blue-600" />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Instagram className="w-6 h-6 text-blue-600" />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Github className="w-6 h-6 text-blue-600" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Message Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Send us a quick message</CardTitle>
              <CardDescription>Got a quick question? Drop us a line!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleQuickMessage} className="space-y-4">
                <div>
                  <Label htmlFor="quick-email">Email</Label>
                  <Input
                    id="quick-email"
                    type="email"
                    value={quickMessage.email}
                    onChange={(e) => setQuickMessage({ ...quickMessage, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="quick-message">Message</Label>
                  <Textarea
                    id="quick-message"
                    value={quickMessage.message}
                    onChange={(e) => setQuickMessage({ ...quickMessage, message: e.target.value })}
                    placeholder="Your message here..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h2>
            <p className="text-lg text-gray-600">Let's discuss how we can help bring your vision to life</p>
          </div>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={inquiryForm.fullName}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, fullName: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="organization">Organization Name</Label>
                    <Input
                      id="organization"
                      value={inquiryForm.organization}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, organization: e.target.value })}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="services">Services Needed</Label>
                    <Select value={inquiryForm.services} onValueChange={(value) => setInquiryForm({ ...inquiryForm, services: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                        <SelectItem value="enterprise">Enterprise Software</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="consulting">IT Consulting</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select value={inquiryForm.budget} onValueChange={(value) => setInquiryForm({ ...inquiryForm, budget: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="requirements">Project Requirements / Message *</Label>
                  <Textarea
                    id="requirements"
                    value={inquiryForm.requirements}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, requirements: e.target.value })}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
