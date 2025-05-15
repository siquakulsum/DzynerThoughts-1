import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Service } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Link } from "wouter";

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

      {/* Elegant Hero Banner with Decorative Elements */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-royal-DEFAULT via-royal-dark to-royal-DEFAULT">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-full border-t-2 border-r-2 border-white transform rotate-6 origin-top-left"></div>
            <div className="absolute top-0 left-0 w-full h-full border-b-2 border-l-2 border-white transform -rotate-6 origin-bottom-right"></div>
          </div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMCAyOCAyOCAwIDEgMC01NiAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjQgMGEyNCAyNCAwIDEgMCA0OCAwIDI0IDI0IDAgMSAwLTQ4IDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTMwIDMwbS0yMCAwYTIwIDIwIDAgMSAwIDQwIDAgMjAgMjAgMCAxIDAtNDAgMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMzAgMzBtLTE2IDBhMTYgMTYgMCAxIDAgMzIgMCAxNiAxNiAwIDEgMC0zMiAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMTIgMGExMiAxMiAwIDEgMCAyNCAwIDEyIDEyIDAgMSAwLTI0IDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTMwIDMwbS04IDBhOCA4IDAgMSAwIDE2IDAgOCA4IDAgMSAwLTE2IDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTMwIDMwbS00IDBhNCA0IDAgMSAwIDggMCA0IDQgMCAxIDAtOCAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            {/* Label */}
            <div className="inline-flex items-center mb-5">
              <span className="h-px w-8 bg-gold"></span>
              <span className="mx-3 text-gold font-cinzel tracking-widest text-sm uppercase">Design Excellence</span>
              <span className="h-px w-8 bg-gold"></span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-cinzel text-white font-bold mb-6 leading-tight">
              Our <span className="text-gold">Services</span>
            </h1>
            
            {/* Description */}
            <p className="text-white/90 text-lg max-w-2xl mx-auto font-josefin leading-relaxed mb-8">
              Discover our comprehensive suite of thoughtfully crafted interior design services, tailored to transform ordinary spaces into extraordinary environments that inspire and delight.
            </p>
            
            {/* Decorative element */}
            <div className="w-24 h-1.5 mt-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section 
        className="py-24 page-section"
        ref={ref}
      >
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 rounded-full border-4 border-gold/20 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-t-4 border-gold animate-spin"></div>
              </div>
            </div>
          ) : (
            <>
              {/* Services Grid - Luxurious Version */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services?.map((service) => (
                  <div key={service.id} className="service-card bg-white p-8 rounded-lg shadow-md h-full transition-all">
                    <div className="mb-6 relative">
                      <div className="bg-royal-DEFAULT/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <i className={`bi ${service.icon} text-3xl text-royal-DEFAULT`}></i>
                      </div>
                      <h3 className="text-2xl font-cinzel mb-3">{service.title}</h3>
                      <div className="w-12 h-0.5 bg-gold/40 mb-4"></div>
                      <p className="font-josefin text-gray-700 leading-relaxed">{service.description}</p>
                    </div>
                    <a href="#" className="text-royal-DEFAULT font-josefin hover:text-gold inline-flex items-center text-sm transition-colors duration-300">
                      Learn more <i className="bi bi-arrow-right ml-2"></i>
                    </a>
                  </div>
                ))}
              </div>

              {/* Design Process Section - Luxurious Version */}
              <div className="mt-24 relative">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center">
                    <span className="h-px w-8 bg-gold"></span>
                    <span className="mx-3 text-gold font-cinzel tracking-widest text-sm uppercase">Our Process</span>
                    <span className="h-px w-8 bg-gold"></span>
                  </div>
                </div>
                
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-cinzel mb-4">The Art of <span className="text-gradient">Transformation</span></h2>
                  <p className="text-gray-700 max-w-3xl mx-auto font-josefin">
                    We follow a meticulous and collaborative process to ensure your vision is realized with precision and artistry, creating spaces that truly reflect your unique lifestyle and aspirations.
                  </p>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center bg-cream/50 rounded-xl overflow-hidden shadow-xl border border-gold/10">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="space-y-6">
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-royal-DEFAULT to-royal-dark text-white flex items-center justify-center font-cinzel font-semibold shadow-royal">
                          1
                        </div>
                        <div>
                          <h4 className="font-cinzel text-xl mb-2">Initial Consultation</h4>
                          <p className="font-josefin text-gray-700">We begin with a deep understanding of your vision, preferences, lifestyle needs, and budget considerations.</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-royal-DEFAULT to-royal-dark text-white flex items-center justify-center font-cinzel font-semibold shadow-royal">
                          2
                        </div>
                        <div>
                          <h4 className="font-cinzel text-xl mb-2">Concept Development</h4>
                          <p className="font-josefin text-gray-700">We craft detailed mood boards, material selections, and preliminary designs that capture your aesthetic vision.</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-royal-DEFAULT to-royal-dark text-white flex items-center justify-center font-cinzel font-semibold shadow-royal">
                          3
                        </div>
                        <div>
                          <h4 className="font-cinzel text-xl mb-2">Design Refinement</h4>
                          <p className="font-josefin text-gray-700">We collaborate closely with you to perfect every detail of the design, ensuring it aligns perfectly with your expectations.</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-royal-DEFAULT to-royal-dark text-white flex items-center justify-center font-cinzel font-semibold shadow-royal">
                          4
                        </div>
                        <div>
                          <h4 className="font-cinzel text-xl mb-2">Implementation</h4>
                          <p className="font-josefin text-gray-700">Our experienced team coordinates with contractors and artisans to bring your design to life with meticulous attention to detail.</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-royal-DEFAULT to-royal-dark text-white flex items-center justify-center font-cinzel font-semibold shadow-royal">
                          5
                        </div>
                        <div>
                          <h4 className="font-cinzel text-xl mb-2">Final Styling & Reveal</h4>
                          <p className="font-josefin text-gray-700">We add those final, thoughtful touches that elevate your space from beautiful to truly extraordinary.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 h-full">
                    <div className="relative h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
                        alt="Design Process" 
                        className="w-full h-full object-cover min-h-[400px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-6 right-6 w-20 h-20 border-4 border-white/20 rounded-full"></div>
                      <div className="absolute bottom-6 left-6 w-24 h-24 border-4 border-gold/20 rounded-full"></div>
                      
                      {/* Caption */}
                      <div className="absolute bottom-8 left-0 right-0 text-center">
                        <div className="bg-white/90 backdrop-blur-sm mx-auto w-max px-6 py-3 rounded-full shadow-lg">
                          <p className="font-cinzel text-royal-DEFAULT text-sm">Attention to Every Detail</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* CTA Section - Luxurious Version */}
          <div className="mt-32 relative">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-royal-DEFAULT to-royal-dark opacity-90"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMCAyOCAyOCAwIDEgMC01NiAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjQgMGEyNCAyNCAwIDEgMCA0OCAwIDI0IDI0IDAgMSAwLTQ4IDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTMwIDMwbS0yMCAwYTIwIDIwIDAgMSAwIDQwIDAgMjAgMjAgMCAxIDAtNDAgMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMzAgMzBtLTE2IDBhMTYgMTYgMCAxIDAgMzIgMCAxNiAxNiAwIDEgMC0zMiAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMTIgMGExMiAxMiAwIDEgMCAyNCAwIDEyIDEyIDAgMSAwLTI0IDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTMwIDMwbS04IDBhOCA4IDAgMSAwIDE2IDAgOCA4IDAgMSAwLTE2IDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTMwIDMwbS00IDBhNCA0IDAgMSAwIDggMCA0IDQgMCAxIDAtOCAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
            </div>
            
            <div className="relative z-10 py-16 px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-cinzel text-white mb-6">Ready to Transform Your Space?</h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 font-josefin">
                Let's collaborate to create interiors that reflect your unique style and enhance your daily living experience.
              </p>
              <Link 
                href="/contact" 
                className="px-8 py-4 btn-gold rounded-full"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;