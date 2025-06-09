
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Filter, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";
import { Link } from "react-router-dom";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ["All", "Healthcare", "E-commerce", "Enterprise", "SaaS", "Mobile"];

  const projects = [
    {
      title: "Blood Bank Management System",
      client: "HealthCare Plus",
      category: "Healthcare",
      description: "Digital transformation of blood bank operations with real-time tracking",
      image: "bg-gradient-to-br from-red-100 to-pink-100",
      tech: ["React", "Node.js", "MongoDB"],
      link: "/case-studies/blood-bank-system",
      featured: true
    },
    {
      title: "E-commerce Platform",
      client: "RetailMax",
      category: "E-commerce",
      description: "Scalable multi-vendor marketplace with advanced analytics",
      image: "bg-gradient-to-br from-blue-100 to-cyan-100",
      tech: ["Next.js", "Laravel", "MySQL"],
      link: "/case-studies/ecommerce-platform",
      featured: true
    },
    {
      title: "Corporate CRM System",
      client: "TechCorp Industries",
      category: "Enterprise",
      description: "Custom CRM solution with automation and analytics",
      image: "bg-gradient-to-br from-green-100 to-emerald-100",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "/case-studies/corporate-crm",
      featured: true
    },
    {
      title: "Educational Platform",
      client: "EduTech Solutions",
      category: "SaaS",
      description: "Online learning platform with video streaming and assessments",
      image: "bg-gradient-to-br from-purple-100 to-indigo-100",
      tech: ["Vue.js", "Python", "Django"],
      link: "#",
      featured: false
    },
    {
      title: "Fitness Mobile App",
      client: "FitLife",
      category: "Mobile",
      description: "Cross-platform fitness app with workout tracking and nutrition",
      image: "bg-gradient-to-br from-orange-100 to-yellow-100",
      tech: ["Flutter", "Firebase", "Node.js"],
      link: "#",
      featured: false
    },
    {
      title: "Financial Dashboard",
      client: "FinanceMax",
      category: "Enterprise",
      description: "Real-time financial analytics and reporting dashboard",
      image: "bg-gradient-to-br from-teal-100 to-cyan-100",
      tech: ["React", "D3.js", "Python"],
      link: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Work Speaks for Itself
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Explore the innovative projects we've delivered for startups and enterprises alike.
              Each solution is crafted with precision, passion, and cutting-edge technology.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-400 rounded-full opacity-10 animate-pulse"></div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Featured Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marquee Projects
            </h2>
            <p className="text-xl text-gray-600">
              Our most impactful solutions that transformed businesses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer" onClick={() => handleProjectClick(project)}>
                <div className={`${project.image} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="text-4xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    {index === 0 ? "🏥" : index === 1 ? "🛒" : "📊"}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group/btn hover:bg-blue-600 hover:text-white">
                    View Details
                    <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Projects
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Filter by industry or explore our complete portfolio
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => handleProjectClick(project)}>
                <div className={`${project.image} h-40 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="text-3xl opacity-30">
                    {project.category === "Healthcare" ? "🏥" : 
                     project.category === "E-commerce" ? "🛒" : 
                     project.category === "Enterprise" ? "📊" : 
                     project.category === "SaaS" ? "💻" : 
                     project.category === "Mobile" ? "📱" : "🔧"}
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to start your own success story? Let's discuss your project and create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ProjectDetailsModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Work;
