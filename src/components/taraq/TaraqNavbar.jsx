import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Coffee, Sparkles, MapPin, Phone, Calendar, ArrowRight, ChevronDown } from 'lucide-react';

export default function TaraqNavbar({
  cartCount = 0,
  selectedBranch,
  onOpenLocation,
  onOpenCart,
  onOpenReserve,
  onOpenShop,
  onOpenMenu,
  onOpenAbout
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navItems = [
    { num: '01', label: 'Artisan Menu (70+ Items)', action: onOpenMenu, desc: 'Single Origins, Lattes & Signature Brews' },
    { num: '02', label: 'Select Branch / Outlet', action: onOpenLocation, desc: selectedBranch ? selectedBranch.name : 'Gulberg, DHA, Karachi' },
    { num: '03', label: 'Our Roastery Craft', action: onOpenAbout, desc: 'Direct trade specialty green beans' },
    { num: '04', label: 'Table & Lounge Reserve', action: onOpenReserve, desc: 'Quiet workspace & private lounge' }
  ];

  return (
    <nav className={`taraq-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="taraq-nav-inner">
        {/* Left Nav Links (Desktop) */}
        <div className="taraq-nav-left">
          <button className="taraq-nav-link" onClick={onOpenMenu}>Menu</button>
          <button className="taraq-nav-link" onClick={onOpenAbout}>Roastery</button>
          <button className="taraq-nav-link" onClick={onOpenLocation}>
            <MapPin size={13} style={{ marginRight: 4, color: '#59b6cd' }} />
            <span>Outlets</span>
          </button>
        </div>

        {/* Center Brand Logo */}
        <div className="taraq-nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="artisan-badge-sub">EST. LAHORE &middot; KARACHI</span>
          <span className="taraq-logo-text artisan-brand-text">ARTISAN</span>
          <span className="artisan-tagline-text">COFFEE ROASTER</span>
        </div>

        {/* Right Nav Links & Actions */}
        <div className="taraq-nav-right">
          {/* Branch Pill Selector */}
          {selectedBranch && (
            <button
              className="artisan-branch-indicator-btn"
              onClick={onOpenLocation}
              title="Change Delivery Branch"
            >
              <span className="branch-dot" />
              <span className="branch-name">{selectedBranch.city} &middot; {selectedBranch.name.replace('Artisan Coffee Roaster - ', '')}</span>
              <ChevronDown size={13} className="branch-arrow" />
            </button>
          )}

          <button className="taraq-reserve-btn" onClick={onOpenReserve}>
            <Calendar size={13} style={{ marginRight: 6 }} />
            Reserve Table
          </button>

          {/* Cart Icon */}
          <button className="taraq-cart-btn" onClick={onOpenCart} title="View Cart">
            <ShoppingBag size={18} />
            {cartCount > 0 && <span className="taraq-cart-count">{cartCount}</span>}
          </button>

          {/* Mobile hamburger */}
          <button
            className="taraq-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Luxury Full-Screen Mobile Drawer */}
      {mobileOpen && (
        <div className="taraq-mobile-drawer-overlay" onClick={() => setMobileOpen(false)}>
          <div className="taraq-mobile-drawer-modal" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Header */}
            <div className="drawer-top-row">
              <div className="drawer-brand">
                <span className="drawer-logo">ARTISAN</span>
                <span className="drawer-city-tag">COFFEE ROASTER &middot; PAKISTAN</span>
              </div>
              <button
                className="drawer-close-btn"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation List */}
            <div className="drawer-nav-list">
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  className="drawer-nav-item"
                  onClick={() => {
                    item.action();
                    setMobileOpen(false);
                  }}
                >
                  <div className="item-text-group">
                    <span className="item-num">{item.num}</span>
                    <span className="item-label">{item.label}</span>
                  </div>
                  <ArrowRight size={18} className="item-arrow" />
                </div>
              ))}
            </div>

            {/* Quick Lounge Details Card */}
            <div className="drawer-bottom-card">
              <div className="drawer-info-line">
                <MapPin size={14} className="drawer-info-icon" />
                <span>Plot 14-C/2, M.M. Alam Road, Gulberg III, Lahore</span>
              </div>
              <div className="drawer-info-line">
                <Sparkles size={14} className="drawer-info-icon" />
                <span>Open Daily: 08:00 AM &ndash; 02:00 AM</span>
              </div>
              <div className="drawer-info-line">
                <Phone size={14} className="drawer-info-icon" />
                <span>+92 344 2731441</span>
              </div>

              <div className="drawer-actions-row">
                <button
                  className="drawer-cta-primary"
                  onClick={() => {
                    onOpenReserve();
                    setMobileOpen(false);
                  }}
                >
                  <Calendar size={16} />
                  <span>Reserve Table</span>
                </button>
                <button
                  className="drawer-cta-secondary"
                  onClick={() => {
                    onOpenCart();
                    setMobileOpen(false);
                  }}
                >
                  <ShoppingBag size={16} />
                  <span>Order ({cartCount})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
