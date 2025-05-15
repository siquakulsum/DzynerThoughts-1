import { Project } from "@shared/schema";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl rounded-lg overflow-hidden p-0">
        <DialogHeader className="py-3 px-4 bg-royal-DEFAULT text-white">
          <DialogTitle className="font-playfair">{project.title}</DialogTitle>
          <button 
            onClick={onClose}
            className="absolute right-4 top-3 text-white hover:text-gray-200 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>
        
        <div className="modal-img-container">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
        
        <div className="p-6">
          <h6 className="text-royal-DEFAULT font-montserrat font-medium mb-2">Project Overview</h6>
          <p className="font-raleway mb-6">{project.details}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h6 className="text-royal-DEFAULT font-montserrat font-medium mb-3">Scope of Work</h6>
              <ul className="space-y-1">
                {project.scope.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="bi bi-check-circle-fill text-royal-DEFAULT mr-2 mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h6 className="text-royal-DEFAULT font-montserrat font-medium mb-3">Project Details</h6>
              <ul className="space-y-1">
                <li><strong>Location:</strong> {project.location}</li>
                <li><strong>Size:</strong> {project.size}</li>
                <li><strong>Duration:</strong> {project.duration}</li>
                <li><strong>Style:</strong> {project.style}</li>
                <li><strong>Year:</strong> {project.year}</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
