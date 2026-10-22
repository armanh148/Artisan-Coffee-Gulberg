import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function GrindelHeroSection({
  cartCount = 0,
  onOpenCart,
  selectedBranch,
  onOpenLocation,
  onExploreMenu,
  onOpenShop,
  onOpenStory,
  onOpenLocations
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="grindel-hero-wrapper">
      {/* Ambient background glow behind products */}
      <div className="grindel-ambient-glow" />

      {/* 1. TOP NAVBAR */}
      <nav className="grindel-navbar">
        {/* Left Links */}
        <div className="grindel-nav-left">
          <button className="grindel-nav-link" onClick={onOpenShop || onExploreMenu}>SHOP</button>
          <button className="grindel-nav-link" onClick={onExploreMenu}>MENU</button>
          <button className="grindel-nav-link" onClick={onOpenStory}>OUR STORY</button>
          <button className="grindel-nav-link" onClick={onOpenLocations || onOpenLocation}>
            LOCATIONS
            {selectedBranch && (
              <span className="branch-quick-dot" title={selectedBranch.name} />
            )}
          </button>
        </div>

        {/* Center Logo */}
        <div className="grindel-nav-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="/grindel-logo.png"
            alt="Grindel Swiss Cafe Bar"
            className="grindel-logo-img"
          />
        </div>

        {/* Right Actions */}
        <div className="grindel-nav-right">
          <button className="grindel-order-btn" onClick={onOpenCart}>
            <span>ORDER ONLINE</span>
            {cartCount > 0 && (
              <span className="grindel-cart-badge">{cartCount}</span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            className="grindel-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="grindel-mobile-menu">
          <button className="mobile-menu-item" onClick={() => { (onOpenShop || onExploreMenu)(); setMobileMenuOpen(false); }}>SHOP</button>
          <button className="mobile-menu-item" onClick={() => { onExploreMenu(); setMobileMenuOpen(false); }}>MENU</button>
          <button className="mobile-menu-item" onClick={() => { onOpenStory(); setMobileMenuOpen(false); }}>OUR STORY</button>
          <button className="mobile-menu-item" onClick={() => { (onOpenLocations || onOpenLocation)(); setMobileMenuOpen(false); }}>LOCATIONS</button>
          <button className="mobile-menu-item highlight" onClick={() => { onOpenCart(); setMobileMenuOpen(false); }}>
            ORDER ONLINE {cartCount > 0 && `(${cartCount})`}
          </button>
        </div>
      )}

      {/* 2. HERO MAIN CONTENT */}
      <div className="grindel-hero-container">
        <div className="grindel-hero-grid">
          {/* Left Column: Typography & Story */}
          <div className="grindel-hero-left">
            <div className="grindel-est-tag">
              // SWISS CAFE BAR &middot; EST. 1914
            </div>

            <h1 className="grindel-main-title">
              <span className="title-row">COFFEE</span>
              <span className="title-row">FOR YOUR</span>
              <span className="title-script-row">
                <span className="script-text">moment</span>
              </span>
            </h1>

            <p className="grindel-description">
              ALPINE-ROASTED BEANS, BREWED<br />
              THE SWISS WAY &mdash; PRECISE,<br />
              PATIENT AND MADE TO SAVOUR IN<br />
              EVERY CUP.
            </p>

            <div className="grindel-cta-wrap">
              <button className="grindel-explore-link" onClick={onExploreMenu}>
                <span className="explore-text">EXPLORE MENU</span>
                <span className="explore-arrow">&#8599;</span>
                <span className="explore-underline"></span>
              </button>
            </div>
          </div>

          {/* Right Column: High-end 3D Packaging Duo */}
          <div className="grindel-hero-right">
            <div className="grindel-product-stage">
              <img
                src="/hero-product-duo.png"
                alt="Grindel Swiss Cafe Bar Roast Coffee Bag and Branded Cup"
                className="grindel-stage-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. HERO BOTTOM BAR */}
      <div className="grindel-bottom-bar">
        <div className="bottom-bar-inner">
          {/* Info Item 1: Hours */}
          <div className="grindel-info-item">
            <span className="info-label">OPEN DAILY</span>
            <span className="info-detail">07:00 - 21:00</span>
          </div>

          {/* Info Item 2: Location */}
          <div className="grindel-info-item interactive" onClick={onOpenLocation} title="Click to view branches">
            <span className="info-label">BAHNHOFSTRASSE 19</span>
            <span className="info-detail">8001 Z&Uuml;RICH, CH</span>
          </div>

          {/* Info Item 3: Socials */}
          <div className="grindel-info-item socials-col">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-strip-link"
            >
              INSTAGRAM
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-strip-link"
            >
              TIKTOK
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
