
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [collaborationForm, setCollaborationForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCollaborationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!collaborationForm.name || !collaborationForm.email || !collaborationForm.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you for your interest! We'll get back to you within 24 hours.");
    setCollaborationForm({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
    setIsDialogOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">Devigo</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </Link>
              <Link to="/work" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Work
              </Link>
              <Link to="/case-studies" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Case Studies
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                  Collab
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Let's Collaborate</DialogTitle>
                  <DialogDescription>
                    Tell us about your project and let's create something amazing together.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCollaborationSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="collab-name">Name *</Label>
                      <Input
                        id="collab-name"
                        value={collaborationForm.name}
                        onChange={(e) => setCollaborationForm({ ...collaborationForm, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="collab-email">Email *</Label>
                      <Input
                        id="collab-email"
                        type="email"
                        value={collaborationForm.email}
                        onChange={(e) => setCollaborationForm({ ...collaborationForm, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="collab-company">Company</Label>
                    <Input
                      id="collab-company"
                      value={collaborationForm.company}
                      onChange={(e) => setCollaborationForm({ ...collaborationForm, company: e.target.value })}
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <Label htmlFor="collab-service">Service Needed</Label>
                    <Select value={collaborationForm.service} onValueChange={(value) => setCollaborationForm({ ...collaborationForm, service: value })}>
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
                    <Label htmlFor="collab-message">Project Details *</Label>
                    <Textarea
                      id="collab-message"
                      value={collaborationForm.message}
                      onChange={(e) => setCollaborationForm({ ...collaborationForm, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Collaboration
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
