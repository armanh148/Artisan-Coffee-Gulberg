import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function KopagNavbar({
  cartCount = 0,
  selectedBranch,
  onOpenLocation,
  onOpenCart,
  onOpenReserve,
  onOpenMenu,
  onOpenAbout,
  onOpenShops,
  onOpenContact,
  onOpenFaq
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-root-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner-container">
        {/* 1. Left: Clean Bold Brand Logo (matches "Guide" position in reference) */}
        <div
          className="navbar-brand-col"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          title="Artisan Coffee Roaster"
        >
          <span className="navbar-brand-title">ARTISAN</span>
          <span className="navbar-brand-sub">COFFEE ROASTER</span>
        </div>

        {/* 2. Center: Floating White Rounded Capsule with Navigation Links (5 links matching reference) */}
        <nav className="navbar-center-capsule" aria-label="Main Navigation">
          <button type="button" className="capsule-link" onClick={onOpenMenu}>
            Menu
          </button>
          <button type="button" className="capsule-link" onClick={onOpenAbout}>
            About
          </button>
          <button type="button" className="capsule-link" onClick={onOpenShops}>
            Outlets
          </button>
          <button type="button" className="capsule-link" onClick={onOpenContact}>
            Contact
          </button>
          <button type="button" className="capsule-link" onClick={onOpenFaq}>
            FAQs
          </button>
        </nav>

        {/* 3. Right: Secondary Action ("Log in" style) + Glowing Accent Pill ("Sign Up" style) */}
        <div className="navbar-right-col">
          <button
            type="button"
            className="navbar-secondary-btn"
            onClick={onOpenReserve}
            title="Reserve a Table"
          >
            Reserve
          </button>

          <button
            type="button"
            className={`navbar-primary-cta ${cartCount > 0 ? 'has-items' : ''}`}
            onClick={onOpenCart}
            title="View Cart"
          >
            <ShoppingBag size={15} />
            <span>Cart</span>
            {cartCount > 0 && <span className="navbar-cart-badge">{cartCount}</span>}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Luxury Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="kopag-mobile-drawer" onClick={() => setMobileMenuOpen(false)}>
          <div className="kopag-mobile-drawer-box" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="mobile-brand-wrap">
                <span className="mobile-logo">ARTISAN</span>
                <span className="mobile-sub">SPECIALTY ROASTERY</span>
              </div>
              <button
                type="button"
                className="mobile-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-links">
              <button
                type="button"
                onClick={() => {
                  if (onOpenMenu) onOpenMenu();
                  setMobileMenuOpen(false);
                }}
              >
                Explore Menu (70+ Items)
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onOpenAbout) onOpenAbout();
                  setMobileMenuOpen(false);
                }}
              >
                About Our Roastery &amp; Heritage
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onOpenShops) onOpenShops();
                  setMobileMenuOpen(false);
                }}
              >
                Visit Our Shops (Lahore &amp; Karachi)
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onOpenContact) onOpenContact();
                  setMobileMenuOpen(false);
                }}
              >
                Contact &amp; Wholesale Inquiries
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onOpenLocation) onOpenLocation();
                  setMobileMenuOpen(false);
                }}
              >
                Select Outlet / Delivery Branch
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onOpenReserve) onOpenReserve();
                  setMobileMenuOpen(false);
                }}
              >
                Reserve a Table / Meeting Room
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onOpenFaq) onOpenFaq();
                  setMobileMenuOpen(false);
                }}
              >
                Frequently Asked Questions
              </button>

              <button
                type="button"
                className="mobile-cart-cta"
                onClick={() => {
                  if (onOpenCart) onOpenCart();
                  setMobileMenuOpen(false);
                }}
              >
                <ShoppingBag size={16} />
                <span>View Cart ({cartCount} items)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
