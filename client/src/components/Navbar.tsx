import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

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

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-royal-DEFAULT font-playfair text-2xl font-bold">Dzyner Thoughts</span>
          </Link>
          
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
                <Link 
                  href="/" 
                  className={`nav-link px-2 py-1 ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`nav-link px-2 py-1 ${isActive('/about') ? 'active' : ''}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className={`nav-link px-2 py-1 ${isActive('/services') ? 'active' : ''}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className={`nav-link px-2 py-1 ${isActive('/projects') ? 'active' : ''}`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`nav-link px-2 py-1 ${isActive('/contact') ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link 
              href="/contact" 
              className="ml-4 px-4 py-2 bg-[hsl(var(--royal-DEFAULT))] text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-[hsl(var(--royal-dark))] hover:transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link 
                  href="/"
                  className={`nav-link block px-2 py-1 ${isActive('/') ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className={`nav-link block px-2 py-1 ${isActive('/about') ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className={`nav-link block px-2 py-1 ${isActive('/services') ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects"
                  className={`nav-link block px-2 py-1 ${isActive('/projects') ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className={`nav-link block px-2 py-1 ${isActive('/contact') ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  href="/contact" 
                  className="inline-block px-4 py-2 bg-[hsl(var(--royal-DEFAULT))] text-white rounded-full text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
