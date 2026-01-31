
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 mughal-pattern">
      <div className="container mx-auto px-4">
        <div className="bg-dark-brown/80 backdrop-blur-md rounded-sm border border-gold/20 overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16">
            <h2 className="text-gold font-royal text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</h2>
            <h3 className="font-royal text-4xl text-white mb-8">Visit the Haveli</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Location</h4>
                  <p className="text-white/60">G-21, Ground Floor, Heritage Building, Mint Road, Fort, Mumbai - 400001</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Opening Hours</h4>
                  <p className="text-white/60">Monday — Sunday<br/>12:00 PM — 12:00 AM (Midnight)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Contact Details</h4>
                  <p className="text-white/60">+91 98765 43210<br/>bookings@itslucknowi.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               <a href="tel:+919876543210" className="gold-gradient text-dark-brown px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 Call to Reserve
               </a>
               <a href="https://maps.app.goo.gl/KSH3axYhyUxMAP9g9" target="_blank" rel="noopener noreferrer" className="gold-gradient text-dark-brown px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 Get Directions
               </a>
            </div>
          </div>

          <div className="lg:w-1/2 min-h-[400px]">
            <iframe 
              title="IT'S LUCKNOWI Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.6567889625376!2d72.8375679!3d18.9359836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1deb87b2397%3A0x92d91d83a852339c!2sIT'S%20LUCKNOWI!5e0!3m2!1sen!2sin!4v1715694312345" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
