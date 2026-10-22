import React from 'react';
import { Sparkles, Coffee, ShieldCheck, Flame, Star, ArrowRight } from 'lucide-react';

export default function HeroBanner({ onExploreMenu, onOpenLocation }) {
  return (
    <section className="hero-section">
      <div className="hero-pattern"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy */}
          <div>
            <div className="hero-tag">
              <Sparkles size={14} /> Gulberg's Premier Specialty Roaster
            </div>
            <h2 className="hero-title">
              Artisanal Roasts, <br />
              <span>Perfected For You.</span>
            </h2>
            <p className="hero-desc">
              Experience the pinnacle of specialty coffee culture. Small-batch ethically sourced Arabica beans roasted on-site in Gulberg, handcrafted artisan chocolates, and ceremonial matcha crafted with obsessively honed precision.
            </p>

            <div className="hero-badges-row">
              <div className="hero-badge-item">
                <div className="hero-badge-icon"><Flame size={15} /></div>
                <span>Fresh Micro-Roasts</span>
              </div>
              <div className="hero-badge-item">
                <div className="hero-badge-icon"><Coffee size={15} /></div>
                <span>100% Specialty Arabica</span>
              </div>
              <div className="hero-badge-item">
                <div className="hero-badge-icon"><ShieldCheck size={15} /></div>
                <span>Master Baristas</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="hero-btn-primary" onClick={onExploreMenu}>
                Order Online Now <ArrowRight size={18} />
              </button>
              <button className="hero-btn-secondary" onClick={onOpenLocation}>
                Change Branch (Gulberg)
              </button>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div>
            <div className="hero-visual-card">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&auto=format&fit=crop&q=80"
                alt="Artisan Specialty Coffee"
                className="hero-visual-img"
              />
              <div className="hero-visual-overlay">
                <div>
                  <div className="hero-visual-title">Mocha Majestic & Spanish Latte</div>
                  <div className="hero-visual-sub">Single Origin Espresso & Velvet Microfoam</div>
                </div>
                <div className="hero-rating-badge">
                  <Star size={14} fill="#ffc107" color="#ffc107" />
                  <span>4.9 (1.2k+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
