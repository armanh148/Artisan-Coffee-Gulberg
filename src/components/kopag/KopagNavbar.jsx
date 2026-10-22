import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Calendar,
  Menu,
  X,
  MapPin,
  Coffee,
  Sparkles,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronRight,
  Store,
  BookOpen
} from 'lucide-react';

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
  const [activeNav, setActiveNav] = useState('menu');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const branchShortName = selectedBranch
    ? selectedBranch.name.replace('Artisan Coffee Roaster - ', '').split(' ')[0]
    : 'Gulberg';

  const branchFullName = selectedBranch
    ? selectedBranch.name.replace('Artisan Coffee Roaster - ', '')
    : 'Gulberg III Flagship';

  return (
    <>
      <header className={`navbar-root-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner-container">
        {/* 1. Left: Brand Emblem + Typography Mark */}
        <div
          className="navbar-brand-col"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveNav('menu');
          }}
          role="button"
          tabIndex={0}
          title="Artisan Coffee Roaster • Home"
        >
          <div className="navbar-seal-icon" aria-hidden="true">
            <svg viewBox="0 0 40 40" className="navbar-seal-svg" width="34" height="34">
              <circle cx="20" cy="20" r="18" fill="#0D382B" stroke="#F9D342" strokeWidth="1.5" strokeDasharray="2,2"/>
              <path d="M14 26 C14 26, 12 18, 20 12 C28 18, 26 26, 26 26 Z" fill="#F9D342" opacity="0.95"/>
              <circle cx="20" cy="20" r="2.5" fill="#0D382B"/>
            </svg>
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-title">ARTISAN</span>
            <span className="navbar-brand-sub">ROASTERY &bull; EST. 2020</span>
          </div>
        </div>

        {/* 2. Center: Tactile White Pill Capsule with Segmented Links */}
        <nav className="navbar-center-capsule" aria-label="Main Navigation">
          <button
            type="button"
            className={`capsule-link ${activeNav === 'menu' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveNav('menu');
              if (onOpenMenu) onOpenMenu();
            }}
          >
            Menu
          </button>
          <button
            type="button"
            className={`capsule-link ${activeNav === 'about' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveNav('about');
              if (onOpenAbout) onOpenAbout();
            }}
          >
            About
          </button>
          <button
            type="button"
            className={`capsule-link ${activeNav === 'outlets' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveNav('outlets');
              if (onOpenShops) onOpenShops();
            }}
          >
            Outlets
          </button>
          <button
            type="button"
            className={`capsule-link ${activeNav === 'contact' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveNav('contact');
              if (onOpenContact) onOpenContact();
            }}
          >
            Contact
          </button>
          <button
            type="button"
            className={`capsule-link ${activeNav === 'faq' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveNav('faq');
              if (onOpenFaq) onOpenFaq();
            }}
          >
            FAQs
          </button>
        </nav>

        {/* 3. Right Actions: Branch Live Chip + Reserve + Radiant Yellow Cart */}
        <div className="navbar-right-col">
          {selectedBranch && (
            <button
              type="button"
              className="navbar-branch-pill"
              onClick={onOpenLocation}
              title="Click to Switch Outlet"
            >
              <span className="pulse-dot" />
              <span className="branch-label">{branchShortName}</span>
            </button>
          )}

          <button
            type="button"
            className="navbar-secondary-btn"
            onClick={onOpenReserve}
            title="Reserve a Table"
          >
            <Calendar size={13} className="btn-icon" />
            <span>Reserve</span>
          </button>

          <button
            type="button"
            className={`navbar-primary-cta ${cartCount > 0 ? 'has-items' : ''}`}
            onClick={onOpenCart}
            title="View Cart"
          >
            <ShoppingBag size={14} className="cart-icon" />
            <span className="cta-text">Cart</span>
            {cartCount > 0 && <span className="navbar-cart-badge">{cartCount}</span>}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>

    {/* Luxury Editorial Mobile Slide-out Drawer */}
    {mobileMenuOpen && (
      <div className="kopag-mobile-drawer" onClick={() => setMobileMenuOpen(false)}>
        <div className="kopag-mobile-drawer-box" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Header */}
            <div className="mobile-drawer-header">
              <div className="mobile-brand-wrap">
                <div className="drawer-seal-mini" aria-hidden="true">
                  <svg viewBox="0 0 40 40" width="28" height="28">
                    <circle cx="20" cy="20" r="18" fill="#0D382B" stroke="#F9D342" strokeWidth="1.5" strokeDasharray="2,2"/>
                    <path d="M14 26 C14 26, 12 18, 20 12 C28 18, 26 26, 26 26 Z" fill="#F9D342" opacity="0.95"/>
                    <circle cx="20" cy="20" r="2.5" fill="#0D382B"/>
                  </svg>
                </div>
                <div className="drawer-title-group">
                  <span className="mobile-logo">ARTISAN</span>
                  <span className="mobile-sub">SPECIALTY ROASTERY &bull; EST. 2020</span>
                </div>
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

            {/* Live Outlet Card */}
            <div
              className="mobile-drawer-outlet-card"
              onClick={() => {
                if (onOpenLocation) onOpenLocation();
                setMobileMenuOpen(false);
              }}
              role="button"
              tabIndex={0}
            >
              <div className="drawer-outlet-left">
                <div className="drawer-outlet-dot pulse" />
                <div className="drawer-outlet-details">
                  <span className="drawer-outlet-name">{branchFullName}</span>
                  <span className="drawer-outlet-meta">Open 08:00 AM &ndash; 02:00 AM &bull; Dine-in &amp; Delivery</span>
                </div>
              </div>
              <span className="drawer-outlet-switch">Switch</span>
            </div>

            {/* Drawer Navigation Links */}
            <div className="mobile-drawer-links">
              <button
                type="button"
                className={`drawer-link-btn ${activeNav === 'menu' ? 'is-active' : ''}`}
                onClick={() => {
                  if (onOpenMenu) onOpenMenu();
                  setActiveNav('menu');
                  setMobileMenuOpen(false);
                }}
              >
                <div className="drawer-link-left">
                  <div className="drawer-link-icon-box">
                    <Coffee size={17} />
                  </div>
                  <div className="drawer-link-text">
                    <span className="link-title">Explore Menu</span>
                    <span className="link-sub">70+ Specialty Drinks, Bakes &amp; Brews</span>
                  </div>
                </div>
                <ChevronRight size={16} className="drawer-chevron" />
              </button>

              <button
                type="button"
                className={`drawer-link-btn ${activeNav === 'about' ? 'is-active' : ''}`}
                onClick={() => {
                  if (onOpenAbout) onOpenAbout();
                  setActiveNav('about');
                  setMobileMenuOpen(false);
                }}
              >
                <div className="drawer-link-left">
                  <div className="drawer-link-icon-box">
                    <BookOpen size={17} />
                  </div>
                  <div className="drawer-link-text">
                    <span className="link-title">About Our Roastery</span>
                    <span className="link-sub">Heritage, Direct-Trade &amp; 85+ SCA Cupping</span>
                  </div>
                </div>
                <ChevronRight size={16} className="drawer-chevron" />
              </button>

              <button
                type="button"
                className={`drawer-link-btn ${activeNav === 'outlets' ? 'is-active' : ''}`}
                onClick={() => {
                  if (onOpenShops) onOpenShops();
                  setActiveNav('outlets');
                  setMobileMenuOpen(false);
                }}
              >
                <div className="drawer-link-left">
                  <div className="drawer-link-icon-box">
                    <Store size={17} />
                  </div>
                  <div className="drawer-link-text">
                    <span className="link-title">Visit Our Outlets</span>
                    <span className="link-sub">4 Flagship Cafes in Lahore &amp; Karachi</span>
                  </div>
                </div>
                <ChevronRight size={16} className="drawer-chevron" />
              </button>

              <button
                type="button"
                className={`drawer-link-btn ${activeNav === 'reserve' ? 'is-active' : ''}`}
                onClick={() => {
                  if (onOpenReserve) onOpenReserve();
                  setMobileMenuOpen(false);
                }}
              >
                <div className="drawer-link-left">
                  <div className="drawer-link-icon-box">
                    <Calendar size={17} />
                  </div>
                  <div className="drawer-link-text">
                    <span className="link-title">Reserve a Table</span>
                    <span className="link-sub">Lounge Seating &amp; Private Meeting Rooms</span>
                  </div>
                </div>
                <ChevronRight size={16} className="drawer-chevron" />
              </button>

              <button
                type="button"
                className={`drawer-link-btn ${activeNav === 'contact' ? 'is-active' : ''}`}
                onClick={() => {
                  if (onOpenContact) onOpenContact();
                  setActiveNav('contact');
                  setMobileMenuOpen(false);
                }}
              >
                <div className="drawer-link-left">
                  <div className="drawer-link-icon-box">
                    <MessageCircle size={17} />
                  </div>
                  <div className="drawer-link-text">
                    <span className="link-title">Contact &amp; Wholesale</span>
                    <span className="link-sub">B2B Office Bean Supply &amp; Event Catering</span>
                  </div>
                </div>
                <ChevronRight size={16} className="drawer-chevron" />
              </button>

              <button
                type="button"
                className={`drawer-link-btn ${activeNav === 'faq' ? 'is-active' : ''}`}
                onClick={() => {
                  if (onOpenFaq) onOpenFaq();
                  setActiveNav('faq');
                  setMobileMenuOpen(false);
                }}
              >
                <div className="drawer-link-left">
                  <div className="drawer-link-icon-box">
                    <HelpCircle size={17} />
                  </div>
                  <div className="drawer-link-text">
                    <span className="link-title">Frequently Asked Questions</span>
                    <span className="link-sub">Roasting, Beans Delivery, Timings &amp; Math</span>
                  </div>
                </div>
                <ChevronRight size={16} className="drawer-chevron" />
              </button>
            </div>

            {/* Quick Roastery Concierge Contact Bar */}
            <div className="mobile-drawer-concierge-row">
              <a
                href="https://wa.me/923000777242?text=Hello%20Artisan%20Coffee%20Roaster%20Gulberg"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-concierge-btn wa"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Barista</span>
              </a>
              <a href="tel:+923000777242" className="drawer-concierge-btn tel">
                <Phone size={15} />
                <span>Call Roastery</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
