
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MENU_DATA } from '../data/menu';
import { MenuItem, DishType, CartItem } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
  cart: CartItem[];
}

const Menu: React.FC<MenuProps> = ({ onAddToCart, cart }) => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].category);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'veg' | 'non-veg'>('all');
  const categoriesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredMenu = useMemo(() => {
    return MENU_DATA.map(cat => ({
      ...cat,
      items: cat.items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === 'all' || item.type === filterType;
        return matchesSearch && matchesFilter;
      })
    })).filter(cat => cat.items.length > 0);
  }, [searchTerm, filterType]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const element = categoriesRef.current[category];
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    Object.values(categoriesRef.current).forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredMenu]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-dark-brown">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-gold font-royal text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4">Our Offering</h2>
          <h3 className="font-royal text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">Nawabi Digital Menu</h3>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto px-2">Explore our curated selection of royal recipes. Add items to your order and message us directly on WhatsApp.</p>
        </div>

        <div className="sticky top-[64px] z-40 bg-dark-brown py-4 shadow-xl border-y border-gold/10">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Search for your favorite dish..." 
                  className="w-full bg-[#1a0f0a] border border-gold/20 rounded-full py-3 px-12 text-white focus:outline-none focus:border-gold transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="absolute left-4 top-3.5 text-gold/40" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <div className="flex bg-[#1a0f0a] rounded-full p-1 border border-gold/10 shrink-0">
                <button 
                  onClick={() => setFilterType('all')}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all ${filterType === 'all' ? 'gold-gradient text-dark-brown' : 'text-white/60'}`}
                >All</button>
                <button 
                  onClick={() => setFilterType('veg')}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-2 ${filterType === 'veg' ? 'bg-green-600 text-white' : 'text-white/60'}`}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 border border-white"></div> Veg
                </button>
                <button 
                  onClick={() => setFilterType('non-veg')}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-2 ${filterType === 'non-veg' ? 'bg-red-800 text-white' : 'text-white/60'}`}
                >
                   <div className="w-2 h-2 rounded-full bg-red-500 border border-white"></div> Non-Veg
                </button>
              </div>
            </div>

            <div className="overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-4 pb-1">
              {MENU_DATA.map(cat => (
                <button
                  key={cat.category}
                  onClick={() => handleCategoryClick(cat.category)}
                  className={`px-4 py-1 text-sm font-medium transition-all border-b-2 ${
                    activeCategory === cat.category ? 'border-gold text-gold' : 'border-transparent text-white/40 hover:text-white/70'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 space-y-16">
          {filteredMenu.length > 0 ? filteredMenu.map((cat) => (
            <div 
              key={cat.category} 
              id={cat.category} 
              ref={(el) => { categoriesRef.current[cat.category] = el; }}
              className="scroll-mt-32"
            >
              <h4 className="font-royal text-2xl text-gold mb-8 flex items-center gap-4">
                {cat.category}
                <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/50 to-transparent"></div>
              </h4>
              <div className="grid gap-6">
                {cat.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-[#1a0f0a] p-6 rounded-sm border border-gold/5 hover:border-gold/20 transition-all flex items-start gap-4 shadow-lg group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-3 h-3 border ${item.type === 'veg' ? 'border-green-600' : 'border-red-600'} flex items-center justify-center p-[2px]`}>
                          <div className={`w-full h-full rounded-full ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}></div>
                        </div>
                        {item.isSpecial && (
                          <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full uppercase font-bold tracking-tighter">Chef's Special</span>
                        )}
                      </div>
                      <h5 className="font-bold text-lg text-white group-hover:text-gold transition-colors">{item.name}</h5>
                      <p className="text-white/50 text-sm mt-1 mb-4 leading-relaxed">{item.description}</p>
                      <span className="font-bold text-white">{typeof item.price === 'string' ? `₹${item.price}` : `₹${item.price}`}</span>
                    </div>
                    <div className="shrink-0 flex flex-col items-center">
                      <button 
                        onClick={() => onAddToCart(item)}
                        className="bg-[#2d1e17] text-gold border border-gold/30 px-6 py-2 rounded-sm text-xs font-bold uppercase hover:bg-gold hover:text-dark-brown transition-all shadow-md active:scale-95"
                      >
                        Add to Order
                      </button>
                      {cart.find(c => c.id === item.id) && (
                        <span className="text-xs text-gold/60 mt-2 font-medium">Added x{cart.find(c => c.id === item.id)?.quantity}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )) : (
            <div className="text-center py-20">
              <p className="text-white/40 italic">No dishes found matching your selection.</p>
              <button onClick={() => { setSearchTerm(''); setFilterType('all'); }} className="text-gold mt-4 underline">Show all dishes</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
