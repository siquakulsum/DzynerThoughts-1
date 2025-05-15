import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-royal-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-playfair text-xl mb-4">Dzyner Thoughts</h4>
            <p className="font-raleway text-gray-300">
              We transform spaces into experiences. Our passion for design drives us to create interiors that inspire, comfort, and delight.
            </p>
          </div>
          
          <div>
            <h6 className="font-montserrat text-lg mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-montserrat text-lg mb-4">Services</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Space Planning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Color Consultation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Furniture Selection
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  3D Visualization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Project Management
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-montserrat text-lg mb-4">Newsletter</h6>
            <p className="text-gray-300 mb-4 font-raleway">
              Subscribe to our newsletter for design tips and inspiration.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="rounded-l-md px-3 py-2 w-full focus:outline-none text-gray-800"
              />
              <button className="bg-royal-DEFAULT hover:bg-royal-light px-4 py-2 rounded-r-md transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dzyner Thoughts. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="bi bi-pinterest"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
