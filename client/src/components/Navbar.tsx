import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <span className="text-royal-DEFAULT font-playfair text-2xl font-bold">Dzyner Thoughts</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <i className="bi bi-x-lg text-xl"></i>
            ) : (
              <i className="bi bi-list text-2xl"></i>
            )}
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-4">
              <li>
                <a className="nav-link active px-2 py-1" href="#home">Home</a>
              </li>
              <li>
                <a className="nav-link px-2 py-1" href="#about">About Us</a>
              </li>
              <li>
                <a className="nav-link px-2 py-1" href="#services">Services</a>
              </li>
              <li>
                <a className="nav-link px-2 py-1" href="#projects">Projects</a>
              </li>
              <li>
                <a className="nav-link px-2 py-1" href="#contact">Contact</a>
              </li>
            </ul>
            <a 
              href="#contact" 
              className="ml-4 px-4 py-2 bg-[hsl(var(--royal-DEFAULT))] text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-[hsl(var(--royal-dark))] hover:transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col space-y-3">
              <li>
                <a 
                  className="nav-link block px-2 py-1"
                  href="#home"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  className="nav-link block px-2 py-1"
                  href="#about"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  className="nav-link block px-2 py-1"
                  href="#services"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  className="nav-link block px-2 py-1"
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  className="nav-link block px-2 py-1"
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-block px-4 py-2 bg-[hsl(var(--royal-DEFAULT))] text-white rounded-full text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
