
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-40"
          alt="Fine Dining Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0a] via-transparent to-[#1a0f0a]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        <div className="mb-4 inline-block px-4 py-1 border border-gold/50 rounded-full bg-gold/10 backdrop-blur-sm">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Since 1994 • Fort, Mumbai</span>
        </div>
        
        <h1 className="font-royal text-5xl md:text-8xl text-white mb-6 leading-tight">
          Its <span className="text-gold">Lucknowi</span>
        </h1>
        
        <p className="font-serif-elegant text-xl md:text-3xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed italic">
          "Authentic Lucknowi & Mughlai Cuisine in the Heart of Mumbai"
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#menu" className="gold-gradient text-dark-brown font-bold px-10 py-4 rounded-sm transition-all hover:brightness-110 shadow-xl uppercase tracking-widest text-sm flex items-center justify-center">
            View Digital Menu
          </a>
          <a href="https://wa.me/919876543210" target="_blank" className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold px-10 py-4 rounded-sm transition-all hover:bg-white/20 uppercase tracking-widest text-sm flex items-center justify-center">
            Order on WhatsApp
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-gold/50 hover:text-gold">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5M7 6l5 5 5-5"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
