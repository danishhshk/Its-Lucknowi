
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 mughal-pattern relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-gold/30"></div>
            <img 
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mughlai Food Heritage" 
              className="rounded-sm shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold/30"></div>
            <div className="absolute -bottom-8 left-8 bg-gold p-6 rounded-sm shadow-xl z-20 hidden md:block">
              <p className="text-dark-brown font-bold text-center">
                30+ YEARS<br/><span className="font-normal text-xs uppercase tracking-tighter">Of Culinary Excellence</span>
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-gold font-royal text-sm tracking-[0.3em] uppercase mb-4">Our Heritage</h2>
            <h3 className="font-royal text-4xl md:text-5xl text-white mb-8">The Art of Nawabi Slow Cooking</h3>
            
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              In the historic lanes of Fort, Mumbai, "Its Lucknowi" preserves the centuries-old tradition of Awadhi cuisine. Our master chefs, descendants of the royal khansamas, specialize in the 'Dum Pukht' style—the art of slow-cooking in sealed pots to retain every nuance of aroma and flavor.
            </p>
            
            <p className="text-white/70 text-lg mb-10 leading-relaxed italic border-l-4 border-gold/40 pl-6 py-2">
              "To eat here is not just to dine; it is to travel through time to the courts of the Nawabs."
            </p>
            
            <div className="grid grid-cols-2 gap-8 text-center lg:text-left">
              <div>
                <h4 className="text-gold font-royal text-2xl mb-2">Authentic</h4>
                <p className="text-white/50 text-sm">Traditional spice blends made in-house.</p>
              </div>
              <div>
                <h4 className="text-gold font-royal text-2xl mb-2">Premium</h4>
                <p className="text-white/50 text-sm">Finest local ingredients & saffron.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
