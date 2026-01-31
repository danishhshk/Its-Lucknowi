
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a0f0a] border-t border-gold/10 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="max-w-xs">
            <a href="#" className="flex flex-col items-center md:items-start mb-6">
              <span className="font-royal text-3xl text-gold tracking-widest font-bold">ITS LUCKNOWI</span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">Mughlai Fine Dining</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Serving the authentic taste of the royal Nawabs in the heart of Mumbai since 1994. Excellence in every morsel.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24 uppercase tracking-[0.2em] text-[11px] font-bold text-white/60">
            <div className="flex flex-col gap-4">
              <a href="#about" className="hover:text-gold transition-colors">History</a>
              <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
              <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
              <a href="#" className="hover:text-gold transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark-brown transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark-brown transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/5 text-center">
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Its Lucknowi Restaurant. All Rights Reserved. Crafted with ❤️ for Foodies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
