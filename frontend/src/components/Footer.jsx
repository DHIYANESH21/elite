import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="text-2xl font-bold tracking-wider flex items-center gap-2 group">
            <span className="text-white group-hover:text-glow transition-all duration-300">ELITE</span>
            <span className="text-primary group-hover:text-white transition-all duration-300">CLUB</span>
          </Link>
          <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
            Empowering visionary leaders and shaping the future through innovation and community.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
          <Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="flex gap-4">
          <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-all duration-300">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-all duration-300">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-all duration-300">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center flex flex-col items-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Elite Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
