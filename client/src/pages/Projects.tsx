import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Project } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import ProjectModal from "@/components/ProjectModal";
import { Helmet } from "react-helmet";

const Projects = () => {
  const { ref } = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  const categories = [
    { id: "all", label: "All" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "modern", label: "Modern" },
    { id: "traditional", label: "Traditional" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects?.filter(project => project.categories.includes(activeFilter));

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear data after closing animation
  };

  return (
    <>
      <Helmet>
        <title>Our Projects | Dzyner Thoughts - Interior Design Excellence</title>
        <meta name="description" content="Explore our portfolio of interior design projects - from residential spaces to commercial establishments, each with our signature elegant touch." />
      </Helmet>

      <section 
        className="py-16 mt-8 page-section"
        ref={ref}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="uppercase font-bold text-royal-DEFAULT mb-2 font-montserrat">
              Our Recent Projects
            </h6>
            <h1 className="text-3xl md:text-5xl mb-3 font-playfair">
              Spaces We've Transformed
            </h1>
            <p className="text-lg mx-auto font-raleway" style={{ maxWidth: '700px' }}>
              Browse through our portfolio of recent interior design projects spanning residential and commercial spaces.
            </p>
          </div>

          <div className="mb-8 text-center">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn px-4 py-1.5 rounded-full text-sm border ${
                    activeFilter === category.id 
                      ? 'active bg-[hsl(var(--royal-DEFAULT))] text-white border-transparent' 
                      : 'border-gray-300 hover:border-[hsl(var(--royal-DEFAULT))]'
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-royal-DEFAULT"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects?.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card rounded-lg overflow-hidden shadow-md h-full"
                >
                  <div className="overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-playfair text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3 font-raleway">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.categories.split(',').map((category, index) => (
                        <span 
                          key={index} 
                          className="bg-neutral-light text-xs px-2 py-1 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <button 
                      className="px-3 py-1.5 bg-[hsl(var(--royal-DEFAULT))] text-white rounded-full text-sm font-medium hover:bg-[hsl(var(--royal-dark))]"
                      onClick={() => openModal(project)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl mb-4 font-playfair">Ready to Start Your Project?</h2>
            <p className="text-lg mx-auto mb-6 font-raleway" style={{ maxWidth: '700px' }}>
              Contact us today to discuss how we can transform your space into something extraordinary.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-[hsl(var(--royal-DEFAULT))] text-white rounded-full text-md font-medium transition-all duration-300 hover:bg-[hsl(var(--royal-dark))] hover:transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default Projects;