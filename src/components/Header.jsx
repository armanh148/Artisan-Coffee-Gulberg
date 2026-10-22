import React from 'react';
import { Search, ShoppingBag, MapPin, Clock, X, Heart, ChevronDown } from 'lucide-react';

export default function Header({
  searchQuery,
  setSearchQuery,
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenLocation,
  orderType,
  selectedBranch,
  favCount
}) {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="top-announcement-left">
            <span className="top-announcement-pill">Gulberg Roastery Open</span>
            <span>✨ Fresh specialty roasts, single origins & handcrafted chocolates in Lahore!</span>
          </div>
          <div className="top-announcement-right">
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={14} /> 08:00 AM - 02:00 AM
            </span>
            <span>📞 +92 344 2731441</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="app-header">
        <div className="container">
          <div className="header-inner">
            {/* Logo */}
            <div className="brand-logo-wrap" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="https://g-cdn.blinkco.io/ordering-system/restaurant_new/55977/logo/1749039482.jpg"
                alt="Artisan Coffee Roaster"
                className="brand-logo-img"
              />
              <div>
                <h1 className="brand-title">Artisan Coffee</h1>
                <span className="brand-subtitle">Specialty Roasters</span>
              </div>
            </div>

            {/* Branch & Fulfillment Selector */}
            <div className="fulfillment-badge" onClick={onOpenLocation} title="Change delivery branch or fulfillment mode">
              <span className="fulfillment-mode-chip">{orderType}</span>
              <div className="fulfillment-info">
                <span className="fulfillment-branch-name">
                  <MapPin size={13} color="#006871" />
                  {selectedBranch.name.replace('Artisan Coffee Roaster - ', '')}
                  <ChevronDown size={14} color="#64748b" />
                </span>
                <span className="fulfillment-eta">
                  {orderType === 'Delivery' ? `ETA: ${selectedBranch.eta}` : 'Ready in 15 mins'}
                </span>
              </div>
            </div>

            {/* Instant Search Bar */}
            <div className="header-search-wrap">
              <Search className="header-search-icon" size={18} />
              <input
                type="text"
                placeholder="Search coffee, matcha, frappes, shakes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="header-search-input"
              />
              {searchQuery && (
                <button className="header-search-clear" onClick={() => setSearchQuery('')}>
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Actions */}
            <div className="header-actions">
              {/* Cart Button */}
              <button className="header-cart-btn" onClick={onOpenCart}>
                <ShoppingBag size={18} />
                <span>Rs. {cartTotal.toLocaleString()}</span>
                {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
