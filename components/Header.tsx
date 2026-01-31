
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1a0f0a]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
        <a href="#" className="flex flex-col items-center">
          <span className="font-royal text-xl sm:text-2xl md:text-3xl text-gold tracking-widest font-bold">ITS LUCKNOWI</span>
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/70">Royal Mughlai</span>
        </a>
        
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          <a href="#about" className="hover:text-gold transition-colors font-medium">About</a>
          <a href="#menu" className="hover:text-gold transition-colors font-medium">Menu</a>
          <a href="#specialties" className="hover:text-gold transition-colors font-medium">Specialties</a>
          <a href="#gallery" className="hover:text-gold transition-colors font-medium">Gallery</a>
          <a href="#contact" className="hover:text-gold transition-colors font-medium">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="tel:+919876543210" className="md:hidden text-gold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <a 
            href="#menu" 
            className="hidden md:block gold-gradient text-dark-brown font-bold px-6 py-2 rounded-sm transform hover:scale-105 transition-all shadow-md text-sm uppercase"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
