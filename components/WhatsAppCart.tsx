
import React from 'react';
import { CartItem } from '../types';

interface WhatsAppCartProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClear: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const WhatsAppCart: React.FC<WhatsAppCartProps> = ({ cart, onUpdateQuantity, onClear, onClose, isOpen }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const getItemPrice = (price: string | number): number => {
    if (typeof price === 'number') return price;
    // For "395/595" style strings, we'll use the base price (the first one)
    const basePrice = parseInt(price.split('/')[0]);
    return isNaN(basePrice) ? 0 : basePrice;
  };

  const totalPrice = cart.reduce((sum, item) => sum + (getItemPrice(item.price) * item.quantity), 0);

  const handleCheckout = () => {
    const itemString = cart
      .map(item => `• ${item.quantity}x ${item.name} (₹${item.price})`)
      .join('%0A');
    
    const message = `Hello Its Lucknowi! I'd like to place a royal order:%0A%0A${itemString}%0A%0A*Approx Total: ₹${totalPrice}*%0A%0APlease confirm the final amount and delivery time.`;
    
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  if (!isOpen && totalItems === 0) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-[60] flex flex-col items-end`}>
      {!isOpen && (
        <button 
          onClick={onClose}
          className="gold-gradient p-4 rounded-full shadow-2xl transform hover:scale-110 active:scale-95 transition-all flex items-center justify-center gap-2 group relative"
        >
          <div className="absolute -top-2 -right-2 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-dark-brown">
            {totalItems}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d1e17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span className="hidden md:inline font-bold text-dark-brown text-sm pr-2">Your Order</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-[#1a0f0a] border border-gold/30 rounded-lg shadow-2xl w-[90vw] md:w-[400px] max-h-[80vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="p-4 bg-dark-brown border-b border-gold/20 flex justify-between items-center">
            <h4 className="font-royal text-gold text-lg">Royal Order Details</h4>
            <button onClick={onClose} className="text-white/40 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-white/40 italic">Your plate is empty.</p>
                <button onClick={onClose} className="text-gold mt-2 underline">Explore Menu</button>
              </div>
            ) : cart.map(item => (
              <div key={item.id} className="flex justify-between items-center gap-4 bg-dark-brown/50 p-3 rounded border border-gold/5">
                <div className="flex-1">
                  <h5 className="text-white font-medium text-sm">{item.name}</h5>
                  <p className="text-gold text-xs">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-3 bg-[#1a0f0a] rounded border border-gold/10 p-1">
                  <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-gold hover:bg-gold/10 rounded">-</button>
                  <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center text-gold hover:bg-gold/10 rounded">+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gold/20 bg-dark-brown">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white/60">Estimated Total</span>
              <span className="text-gold font-bold text-xl">₹{totalPrice}</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={onClear} 
                className="flex-1 border border-gold/20 text-gold/60 py-3 rounded text-xs font-bold uppercase hover:bg-red-900/10 transition-all"
              >
                Clear
              </button>
              <button 
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="flex-[2] gold-gradient text-dark-brown py-3 rounded font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Order on WhatsApp
              </button>
            </div>
            <p className="text-[10px] text-white/30 text-center mt-3 uppercase tracking-tighter">Orders are confirmed via direct WhatsApp message</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppCart;
