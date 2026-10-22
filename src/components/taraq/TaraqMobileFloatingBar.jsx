import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag } from 'lucide-react';

export default function TaraqMobileFloatingBar({ onOpenReserve, onOpenCart, cartCount = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling past 240px
      if (window.scrollY > 240) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="taraq-mobile-floating-bar" role="region" aria-label="Quick mobile actions">
      <div className="floating-bar-inner">
        <button className="floating-reserve-btn" onClick={onOpenReserve}>
          <Calendar size={16} />
          <span>Reserve Table</span>
        </button>

        <button className="floating-cart-btn" onClick={onOpenCart}>
          <div className="floating-cart-icon-wrap">
            <ShoppingBag size={17} />
            {cartCount > 0 && <span className="floating-cart-count">{cartCount}</span>}
          </div>
          <span className="floating-cart-label">Bag</span>
        </button>
      </div>
    </div>
  );
}
