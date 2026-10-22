import React from 'react';
import { Sparkles, MapPin, ArrowRight, Clock, Coffee, ShieldCheck } from 'lucide-react';

export default function TaraqHeroSection({ onOpenReserve, onOpenShop, onOpenLocations, selectedBranch }) {
  return (
    <section className="taraq-hero-section artisan-hero">
      <div className="taraq-hero-inner">
        {/* Left Column: Headline & CTAs */}
        <div className="taraq-hero-content">
          <div className="taraq-hero-tag">
            <span className="live-dot" /> SPECIALTY ROASTERY &middot; LAHORE &amp; KARACHI
          </div>

          <h1 className="taraq-hero-title artisan-title">
            <span>ARTISAN</span>
            <span>COFFEE</span>
            <span className="accent-roaster">ROASTER</span>
          </h1>

          <p className="taraq-hero-desc">
            Slow-crafted single origins, velvety Spanish Lattes, hand-poured Chemex &amp; V60, artisanal melted chocolates, and chilled refreshing blends. Crafted with obsessive precision.
          </p>

          <div className="taraq-hero-actions">
            <button className="taraq-btn-dark" onClick={onOpenShop}>
              <Coffee size={16} style={{ marginRight: 6 }} />
              Order Menu (70+ Items)
            </button>
            <button className="taraq-btn-light" onClick={onOpenReserve}>
              Reserve a Table
            </button>
          </div>

          {/* Quick Luxury Trust Pills */}
          <div className="taraq-hero-chips-strip">
            <span className="hero-chip">✨ 100% Specialty Arabica</span>
            <span className="hero-chip-sep">&bull;</span>
            <span className="hero-chip">⚡ 25-35 Mins Express Delivery</span>
            <span className="hero-chip-sep">&bull;</span>
            <span className="hero-chip">📍 Gulberg III, M.M. Alam Rd</span>
          </div>

          {/* Branch status notice */}
          {selectedBranch && (
            <div className="artisan-hero-branch-card" onClick={onOpenLocations}>
              <MapPin size={16} className="branch-icon" />
              <div className="branch-info-text">
                <span className="serving-label">Delivering from:</span>
                <strong>{selectedBranch.name}</strong>
                <span className="timing-label"> &middot; Open {selectedBranch.timings}</span>
              </div>
              <span className="change-branch-link">Change &rarr;</span>
            </div>
          )}
        </div>

        {/* Right Column: Visual Area with Roastery aesthetic */}
        <div className="taraq-hero-visual-wrap">
          {/* Circular Roastery Stamp Badge */}
          <div className="taraq-starburst-badge artisan-stamp" aria-hidden="true">
            <svg viewBox="0 0 140 140" className="starburst-svg">
              <defs>
                <path
                  id="textCircle"
                  d="M 70, 70 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                />
              </defs>
              <polygon
                points="70,2 83,16 102,10 110,28 129,29 130,48 144,56 137,74 145,91 133,103 133,122 115,126 107,143 89,139 76,150 63,139 45,143 37,126 19,122 19,103 7,91 15,74 8,56 22,48 23,29 42,28 50,10 69,16"
                fill="#59b6cd"
              />
              <text className="starburst-text" fill="#00353a">
                <textPath href="#textCircle" startOffset="0%">
                  ARTISAN COFFEE ROASTER &bull; CRAFTED &bull;
                </textPath>
              </text>
              <g transform="translate(56, 56) scale(0.9)" stroke="#00353a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h18v14a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" fill="#FFF" fillOpacity="0.7"/>
                <path d="M2 8h22"/>
                <path d="M8 4v4"/>
                <path d="M14 2v6"/>
                <path d="M19 4v4"/>
                <circle cx="13" cy="18" r="3" fill="#00353a"/>
              </g>
            </svg>
          </div>

          {/* Main Hero Visual: High-res Roastery coffee presentation */}
          <div className="taraq-car-driver-container artisan-hero-image-box">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&auto=format&fit=crop&q=85"
              alt="Artisan Coffee Roaster Specialty Barista"
              className="taraq-driver-img"
              loading="eager"
            />
            {/* Floating Glassmorphism Badge */}
            <div className="artisan-hero-floating-glass-badge">
              <span className="badge-flame">☕</span>
              <div>
                <span className="badge-caption">Single-Origin Roast</span>
                <span className="badge-title">Ethiopia Yirgacheffe &amp; Colombia Supremo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
