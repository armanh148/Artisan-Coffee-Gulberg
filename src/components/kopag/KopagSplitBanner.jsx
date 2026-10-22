import React from 'react';
import { Coffee, ArrowRight } from 'lucide-react';

export default function KopagSplitBanner({ onOpenMenu, onOpenReserve }) {
  return (
    <section className="kopag-split-banner-section">
      <div className="kopag-split-inner">
        {/* Left Column: Cafe Scene Photo + CTA */}
        <div className="kopag-split-media-col">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&auto=format&fit=crop&q=85"
            alt="Artisan Roastery Sunlit Space"
            className="kopag-split-bg-img"
          />
          <div className="kopag-split-media-overlay">
            <div className="split-overlay-card">
              <span className="split-overlay-tag">ROASTED DAILY &bull; ZERO PRESERVATIVES</span>
              <p className="split-overlay-caption">
                Small-batch single origin beans roasted weekly in our dedicated Lahore micro-roastery.
              </p>
              <button type="button" className="kopag-split-cta-btn" onClick={onOpenMenu}>
                <span>Order Drink</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Buttercup Golden Yellow with Monumental Condensed Typography */}
        <div className="kopag-split-text-col">
          {/* Subtle line art coffee equipment watermark */}
          <div className="split-watermark-art" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="watermark-svg">
              <circle cx="100" cy="100" r="80" stroke="#0D382B" strokeWidth="1.2" strokeDasharray="4,4" fill="none" opacity="0.12" />
              <path d="M70 50h60v70c0 16-14 30-30 30s-30-14-30-30V50z" stroke="#0D382B" strokeWidth="1.5" fill="none" opacity="0.15" />
              <path d="M130 70h16c6 0 10 4 10 10s-4 10-10 10h-16" stroke="#0D382B" strokeWidth="1.5" fill="none" opacity="0.15" />
            </svg>
          </div>

          <div className="split-text-content">
            <span className="split-kicker">USE</span>
            <h2 className="split-display-statement">
              THE BEST COFFEE
            </h2>
            <p className="split-manifesto-text">
              PREMIUM ARABICA FRESH BEANS AND FRESHLY GROUND EXTRACTS TO UNDENIABLY FLAVOURS COFFEE MECCA
            </p>
            <div className="split-stats-row">
              <div className="split-stat">
                <strong>86+</strong>
                <span>SCA Cup Score</span>
              </div>
              <div className="split-stat-div" />
              <div className="split-stat">
                <strong>100%</strong>
                <span>Specialty Arabica</span>
              </div>
              <div className="split-stat-div" />
              <div className="split-stat">
                <strong>4</strong>
                <span>Flagship Outlets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
