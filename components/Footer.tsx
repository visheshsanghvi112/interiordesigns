import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from './Reveal';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <Reveal>
              <div className="mb-6">
                 <span className="font-serif font-bold text-2xl tracking-tight text-white">SHAPE N SHADES</span>
                 <div className="h-1 w-12 bg-brand-orange mt-2"></div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Creating functional, aesthetically pleasing, and harmonious spaces that reflect your unique personality and lifestyle. We bring shapes and shades to life.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Quick Links */}
          <div>
            <Reveal delay={0.1}>
              <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Our Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Contact Us</Link></li>
                <li><Link to="/portfolio" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Portfolio</Link></li>
              </ul>
            </Reveal>
          </div>

          {/* Services */}
          <div>
            <Reveal delay={0.2}>
              <h3 className="font-serif text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">Residential Design</li>
                <li className="text-gray-400 text-sm">Commercial Interiors</li>
                <li className="text-gray-400 text-sm">Space Planning</li>
                <li className="text-gray-400 text-sm">Modular Kitchens</li>
                <li className="text-gray-400 text-sm">Renovations</li>
              </ul>
            </Reveal>
          </div>

          {/* Contact Info */}
          <div>
            <Reveal delay={0.3}>
              <h3 className="font-serif text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-brand-orange shrink-0 mt-1" size={18} />
                  <span className="text-gray-400 text-sm">123 Design Avenue, Creative District, Metro City, 400001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-brand-orange shrink-0" size={18} />
                  <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-brand-orange shrink-0" size={18} />
                  <span className="text-gray-400 text-sm">info@shapenshades.com</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Shape N Shades Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;