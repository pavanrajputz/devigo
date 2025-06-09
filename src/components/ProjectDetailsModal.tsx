
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, Target } from "lucide-react";

interface Project {
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  featured: boolean;
}

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
  if (!project) return null;

  const projectDetails = {
    duration: "3-6 months",
    teamSize: "4-6 developers",
    objective: "Digital transformation and user experience enhancement",
    challenges: [
      "Legacy system integration",
      "Scalability requirements",
      "User experience optimization"
    ],
    results: [
      "50% increase in user engagement",
      "40% reduction in load times",
      "99.9% uptime achievement"
    ]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Overview */}
          <div className={`${project.image} h-64 rounded-lg flex items-center justify-center`}>
            <div className="text-6xl opacity-50">
              {project.category === "Healthcare" ? "🏥" : 
               project.category === "E-commerce" ? "🛒" : 
               project.category === "Enterprise" ? "📊" : 
               project.category === "SaaS" ? "💻" : 
               project.category === "Mobile" ? "📱" : "🔧"}
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Client: {project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Duration: {projectDetails.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Team: {projectDetails.teamSize}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {project.description}. This comprehensive solution was designed to address specific business challenges
              while ensuring scalability and optimal user experience.
            </p>
          </div>

          {/* Objective */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Objective</h3>
            <p className="text-gray-600">{projectDetails.objective}</p>
          </div>

          {/* Challenges & Results */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Challenges</h3>
              <ul className="space-y-2">
                {projectDetails.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Results Achieved</h3>
              <ul className="space-y-2">
                {projectDetails.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            {project.link !== "#" ? (
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Case Study
              </Button>
            ) : (
              <Button disabled>
                Coming Soon
              </Button>
            )}
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;
