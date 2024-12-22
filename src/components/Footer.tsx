import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-estate-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-xl mb-4">Elite Pergolas</h3>
            <p className="text-estate-300">
              Custom pergolas and winter balcony closures crafted with excellence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-estate-300">
              <li><a href="#pergolas" className="hover:text-white transition-colors">Custom Pergolas</a></li>
              <li><a href="#winter-closures" className="hover:text-white transition-colors">Winter Closures</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Project Gallery</a></li>
              <li><a href="#consultation" className="hover:text-white transition-colors">Free Consultation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-estate-300">
              <li>123 Construction Avenue</li>
              <li>Your City, State 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@elitepergolas.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="hover:text-estate-300 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-estate-300 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-estate-300 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-estate-300 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-estate-700 text-center text-estate-300">
          <p>&copy; {new Date().getFullYear()} Elite Pergolas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;