import React from 'react';
import { Utensils, Phone, ShoppingBag, MessageCircle } from 'lucide-react';

export default function KopagBottomNav({
  cartCount = 0,
  onOpenMenu,
  onOpenCart,
  onScrollTop
}) {
  const handleCall = () => {
    window.location.href = 'tel:+923000777242';
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/923000777242?text=Hello%20Artisan%20Coffee%20Roaster%2C%20I%20would%20like%20to%20place%20an%20order.',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <nav className="kopag-bottom-nav" aria-label="Mobile Bottom Navigation">
      <div className="kopag-bottom-nav-inner">
        {/* 1. Menu Action */}
        <button
          type="button"
          className="bottom-nav-item nav-menu-btn"
          onClick={onOpenMenu}
          title="Explore Menu"
        >
          <Utensils size={20} className="bottom-nav-icon menu-icon" />
          <span className="bottom-nav-label">Menu</span>
        </button>

        {/* 2. Call Action */}
        <button
          type="button"
          className="bottom-nav-item nav-call-btn"
          onClick={handleCall}
          title="Call Roastery"
        >
          <Phone size={20} className="bottom-nav-icon call-icon" />
          <span className="bottom-nav-label">Call</span>
        </button>

        {/* 3. Center Roastery Logo Emblem (Elevated Floating Action) */}
        <button
          type="button"
          className="bottom-nav-center-logo-btn"
          onClick={onScrollTop}
          title="Artisan Coffee Roaster &bull; Home"
          aria-label="Back to top"
        >
          <div className="center-logo-disc">
            <svg viewBox="0 0 40 40" className="center-logo-svg" width="30" height="30">
              <circle cx="20" cy="20" r="18" fill="#0D382B" stroke="#F9D342" strokeWidth="1.5" strokeDasharray="2,2" />
              <path d="M14 26 C14 26, 12 18, 20 12 C28 18, 26 26, 26 26 Z" fill="#F9D342" opacity="0.95" />
              <circle cx="20" cy="20" r="2.5" fill="#0D382B" />
            </svg>
          </div>
        </button>

        {/* 4. WhatsApp Direct Pill Button */}
        <button
          type="button"
          className="bottom-nav-whatsapp-pill"
          onClick={handleWhatsApp}
          title="Chat on WhatsApp"
        >
          <MessageCircle size={17} className="wa-icon" />
          <span className="wa-text">WhatsApp</span>
        </button>

        {/* 5. Bag / Cart Action */}
        <button
          type="button"
          className="bottom-nav-item nav-bag-btn"
          onClick={onOpenCart}
          title="View Bag / Cart"
        >
          <div className="bag-icon-wrapper">
            <ShoppingBag size={20} className="bottom-nav-icon bag-icon" />
            {cartCount > 0 && <span className="bottom-nav-badge">{cartCount}</span>}
          </div>
          <span className="bottom-nav-label">Bag</span>
        </button>
      </div>
    </nav>
  );
}
