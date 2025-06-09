
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsSection = () => {
  const projectCategories = {
    "ai": {
      title: "AI & Machine Learning",
      projects: [
        {
          title: "E-Commerce AI Platform",
          description: "AI-powered recommendation system for a leading retail company, increasing sales by 35%",
          image: "🛒",
          category: "AI Development",
          tech: ["React", "Python", "TensorFlow"]
        },
        {
          title: "EdTech Learning Platform",
          description: "Interactive learning platform with AI-powered personalized curriculum",
          image: "🎓",
          category: "AI Development",
          tech: ["Vue.js", "Python", "AI/ML"]
        }
      ]
    },
    "software": {
      title: "Software Engineering",
      projects: [
        {
          title: "Healthcare Management System",
          description: "Complete digital transformation solution for healthcare providers with patient portal",
          image: "🏥", 
          category: "Software Engineering",
          tech: ["Next.js", "Node.js", "PostgreSQL"]
        },
        {
          title: "Real Estate CRM",
          description: "Comprehensive CRM solution with automated lead scoring and property matching",
          image: "🏘️",
          category: "Software Engineering", 
          tech: ["Angular", "Java", "MongoDB"]
        }
      ]
    },
    "mobile": {
      title: "Mobile & IoT",
      projects: [
        {
          title: "FinTech Mobile App",
          description: "Secure mobile banking application with advanced fraud detection algorithms",
          image: "💳",
          category: "Mobile Development", 
          tech: ["React Native", "AWS", "Blockchain"]
        },
        {
          title: "Smart Manufacturing IoT",
          description: "IoT-based predictive maintenance system reducing downtime by 40%",
          image: "🏭",
          category: "IoT Solutions",
          tech: ["IoT", "Machine Learning", "Cloud"]
        }
      ]
    }
  };

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our successful projects that have transformed businesses across industries
          </p>
        </div>
        
        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="ai">AI & ML</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="mobile">Mobile & IoT</TabsTrigger>
          </TabsList>
          
          {Object.entries(projectCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, index) => (
                  <Card 
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 hover:border-blue-300 overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
