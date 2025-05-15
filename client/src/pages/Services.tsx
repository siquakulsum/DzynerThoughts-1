import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Service } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const Services = () => {
  const { ref } = useIntersectionObserver();
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  return (
    <>
      <Helmet>
        <title>Our Services | Dzyner Thoughts - Interior Design Excellence</title>
        <meta name="description" content="Explore our comprehensive interior design services - from space planning and color consultation to 3D visualization and project management." />
      </Helmet>

      <section 
        className="py-16 mt-8 page-section"
        ref={ref}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="uppercase font-bold text-royal-DEFAULT mb-2 font-montserrat">
              Our Services
            </h6>
            <h1 className="text-3xl md:text-5xl mb-3 font-playfair">
              Comprehensive Design Solutions
            </h1>
            <p className="text-lg mx-auto font-raleway" style={{ maxWidth: '700px' }}>
              From conceptualization to execution, we offer a full spectrum of interior design services tailored to your unique needs.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-royal-DEFAULT"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services?.map((service) => (
                  <div key={service.id} className="service-card bg-white p-6 rounded-lg shadow-sm h-full">
                    <div className="flex items-center mb-3">
                      <div className="bg-royal-DEFAULT p-2 rounded-full text-white mr-3">
                        <i className={`bi ${service.icon} text-xl`}></i>
                      </div>
                      <h3 className="text-xl font-playfair">{service.title}</h3>
                    </div>
                    <p className="font-raleway">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-neutral-light p-8 rounded-lg">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-8">
                    <h2 className="text-2xl md:text-3xl mb-4 font-playfair">Our Design Process</h2>
                    <p className="mb-4 font-raleway">
                      We follow a structured yet flexible process to ensure that your project is delivered on time, within budget, and exceeds your expectations.
                    </p>
                    
                    <div className="mt-6">
                      <div className="flex mb-4">
                        <div className="bg-royal-DEFAULT rounded-full w-8 h-8 flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-playfair text-lg mb-1">Consultation</h4>
                          <p className="font-raleway">We begin by understanding your needs, preferences, budget, and timeline.</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        <div className="bg-royal-DEFAULT rounded-full w-8 h-8 flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-playfair text-lg mb-1">Concept Development</h4>
                          <p className="font-raleway">We create mood boards, sketches, and preliminary designs for your approval.</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        <div className="bg-royal-DEFAULT rounded-full w-8 h-8 flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-playfair text-lg mb-1">Detailed Design</h4>
                          <p className="font-raleway">We finalize layouts, select materials, and prepare detailed specifications.</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        <div className="bg-royal-DEFAULT rounded-full w-8 h-8 flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">4</div>
                        <div>
                          <h4 className="font-playfair text-lg mb-1">Implementation</h4>
                          <p className="font-raleway">We coordinate with contractors and vendors to bring your design to life.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-royal-DEFAULT rounded-full w-8 h-8 flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">5</div>
                        <div>
                          <h4 className="font-playfair text-lg mb-1">Final Styling</h4>
                          <p className="font-raleway">We add the finishing touches to ensure your space is perfect down to the last detail.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
                      alt="Design Process" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl mb-4 font-playfair">Ready to Transform Your Space?</h2>
            <p className="text-lg mx-auto mb-6 font-raleway" style={{ maxWidth: '700px' }}>
              Contact us today to schedule a consultation and take the first step towards your dream space.
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
    </>
  );
};

export default Services;