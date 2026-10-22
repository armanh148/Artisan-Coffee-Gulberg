import React from 'react';
import { Ticket, ShoppingBag, MapPin, ChevronDown } from 'lucide-react';

export default function EditorialNavbar({
  cartCount,
  cartTotal,
  onOpenCart,
  selectedBranch,
  onOpenLocation,
  onScrollToMenu
}) {
  return (
    <nav className="top-nav">
      {/* Brand Logo */}
      <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="brand-icon-wrap">🌾</div>
        <span>SWEET GRAIN.</span>
      </div>

      {/* Center Nav Links */}
      <ul className="nav-links">
        <li className="nav-link" onClick={onScrollToMenu}>Recipe</li>
        <li className="nav-link" onClick={onScrollToMenu}>Bakery</li>
        <li className="nav-link" onClick={onScrollToMenu}>
          Cookies <ChevronDown size={14} />
        </li>
        <li className="nav-link" onClick={onScrollToMenu}>Cake</li>
        <li className="nav-link" onClick={() => {
          const el = document.getElementById('instagram-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}>Gallery</li>
      </ul>

      {/* Right Actions */}
      <div className="nav-right-actions">
        {/* Branch / Location Picker */}
        <button className="branch-select-pill" onClick={onOpenLocation} title="Change delivery branch">
          <MapPin size={13} color="#EE5632" />
          <span>{selectedBranch.name.replace('Artisan Coffee Roaster - ', '')}</span>
          <ChevronDown size={12} color="#7E726C" />
        </button>

        {/* Order Now button matching Image 1 */}
        <button className="nav-order-btn" onClick={onOpenCart}>
          <Ticket size={16} />
          <span>Order Now</span>
          {cartCount > 0 && <span className="cart-pill-count">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}
