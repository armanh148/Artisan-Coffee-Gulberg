import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

export default function KopagHeroSection({
  onOpenShop,
  onOpenReserve,
  onOpenLocations,
  selectedBranch,
  onSelectCategory
}) {
  const categoryTicker = [
    { label: 'Artisan Signatures', id: 'artisan-signature' },
    { label: 'Cold Drink & Brew', id: 'artisan-signature' },
    { label: 'Essential Coffee', id: 'essential-coffee' },
    { label: 'Handcrafted Chocolate', id: 'handcrafted-chocolates' },
    { label: 'Specialty Matcha', id: 'specialty-matcha' },
    { label: 'Frappuccinos & Shakes', id: 'frappuccinos' }
  ];

  return (
    <section className="kopag-hero-section">
      {/* 1. Category Ticker Row */}
      <div className="kopag-hero-ticker-wrap">
        <div className="kopag-hero-ticker">
          {categoryTicker.map((item, idx) => (
            <React.Fragment key={idx}>
              <button
                type="button"
                className="kopag-ticker-item"
                onClick={() => onSelectCategory && onSelectCategory(item.id)}
              >
                {item.label}
              </button>
              {idx < categoryTicker.length - 1 && (
                <span className="kopag-ticker-dot">&bull;</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. Monumental Headline: "Coffee Break" */}
      <div className="kopag-hero-headline-wrap">
        <h1 className="kopag-hero-monumental-title">Coffee Break</h1>
      </div>

      {/* 3. Hero Visual & Editorial Content Container */}
      <div className="kopag-hero-stage">
        {/* Left Side: Editorial Paragraph + Pill Button */}
        <div className="kopag-hero-left-col">
          <p className="kopag-hero-lead-text">
            Pure single-origin specialty roast, slow manual extractions, velvety Spanish lattes, and handcrafted melted chocolates. Crafted with obsessive dedication to taste.
          </p>
          <button type="button" className="kopag-pill-cta" onClick={onOpenShop}>
            <span>Order Now</span>
            <ArrowRight size={14} className="cta-arrow" />
          </button>

          {/* Quick Active Branch Pill */}
          {selectedBranch && (
            <div className="kopag-hero-branch-pill" onClick={onOpenLocations}>
              <MapPin size={13} className="pin-icon" />
              <span>{selectedBranch.name.replace('Artisan Coffee Roaster - ', '')} &bull; Open {selectedBranch.timings}</span>
            </div>
          )}
        </div>

        {/* Center Visual: Person Holding Iced Glass in Cream Knit Sweater */}
        <div className="kopag-hero-center-media">
          <div className="kopag-photo-frame">
            <img
              src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=900&auto=format&fit=crop&q=85"
              alt="Person holding iced artisan coffee"
              className="kopag-hero-img"
              loading="eager"
            />
          </div>

          {/* Circular Roastery Stamp Badge at bottom of photo */}
          <div className="kopag-stamp-badge" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="stamp-svg">
              <defs>
                <path
                  id="kopagStampCircle"
                  d="M 60, 60 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
              <circle cx="60" cy="60" r="54" fill="#0D382B" stroke="#F4F0E8" strokeWidth="2" strokeDasharray="3,3" />
              <text className="stamp-text" fill="#F4F0E8" fontSize="9.5" fontWeight="700" letterSpacing="1.2">
                <textPath href="#kopagStampCircle" startOffset="0%">
                  ARTISAN COFFEE ROASTER &bull; EST. 2020 &bull;
                </textPath>
              </text>
              <g transform="translate(47, 47) scale(0.9)" stroke="#F4F0E8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h18v14a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" fill="#F9D342" fillOpacity="0.25"/>
                <path d="M2 8h22"/>
                <path d="M8 4v4"/>
                <path d="M14 2v6"/>
                <path d="M19 4v4"/>
              </g>
            </svg>
          </div>

          {/* Subtitle Under Badge */}
          <div className="kopag-hero-subcaption">
            SPECIALTY COFFEE CULTURE &bull; LAHORE &amp; KARACHI &bull; OPEN DAILY 08:00 AM &ndash; 02:00 AM
          </div>
        </div>

        {/* Right Side: Quick Highlights / Reservations */}
        <div className="kopag-hero-right-col">
          <div className="kopag-hero-stat-card">
            <span className="stat-label">Single Origin</span>
            <span className="stat-value">100% Arabica</span>
            <span className="stat-sub">Direct Trade Ethiopia &amp; Colombia</span>
          </div>

          <div className="kopag-hero-stat-card" onClick={onOpenReserve}>
            <span className="stat-label">Reserve Table</span>
            <span className="stat-value">Quiet Lounge</span>
            <span className="stat-sub">M.M. Alam Rd &amp; DHA Phase 5 &rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
