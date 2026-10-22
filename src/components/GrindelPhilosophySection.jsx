import React from 'react';
import { ArrowUpRight, Flame, ShieldCheck, Award } from 'lucide-react';

export default function GrindelPhilosophySection({ onExploreMenu, onOpenStory }) {
  return (
    <section className="grindel-section grindel-philosophy-section">
      <div className="grindel-section-inner">
        {/* Top Tag matching Hero style */}
        <div className="grindel-section-tag">
          // 01 &middot; THE ROASTERY PHILOSOPHY
        </div>

        <div className="grindel-split-grid">
          {/* Left Column: Bold Typography & Manifesto */}
          <div className="grindel-philosophy-left">
            <h2 className="grindel-editorial-title">
              <span className="title-row">PRECISE, PATIENT &amp;</span>
              <span className="title-script-row">
                <span className="script-text">slow roasted</span>
              </span>
            </h2>

            <p className="grindel-manifesto-text">
              WE ROAST ACCORDING TO TIME-HONOURED SWISS CRAFT. ETHICALLY SOURCED
              FROM SHADE-GROWN HIGH-ALTITUDE ESTATES AT 1,800M+ ELEVATION IN ETHIOPIA,
              COLOMBIA AND GUATEMALA, ROASTED ON-SITE IN GULBERG TO UNLOCK CLEAN FLORAL
              ACIDITY, STONEFRUIT COMPLEXITY AND VELVET DARK COCOA NOTES.
            </p>

            <div className="grindel-specs-strip">
              <div className="spec-col">
                <span className="spec-num">1,850M+</span>
                <span className="spec-label">HIGH-ALTITUDE ESTATES</span>
              </div>
              <div className="spec-col">
                <span className="spec-num">100%</span>
                <span className="spec-label">SPECIALTY ARABICA</span>
              </div>
              <div className="spec-col">
                <span className="spec-num">SMALL BATCH</span>
                <span className="spec-label">DRUM ROASTED DAILY</span>
              </div>
            </div>

            <div className="grindel-cta-wrap" style={{ marginTop: '36px' }}>
              <button className="grindel-explore-link" onClick={onExploreMenu}>
                <span className="explore-text">DISCOVER OUR BEANS</span>
                <span className="explore-arrow">&#8599;</span>
                <span className="explore-underline"></span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Stage with Backlight Glow */}
          <div className="grindel-philosophy-right">
            <div className="philosophy-visual-card">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80"
                alt="Artisan Roasting Craft in Gulberg"
                className="philosophy-visual-img"
              />
              <div className="philosophy-card-overlay">
                <div className="overlay-badge">
                  <Flame size={14} color="#E2884F" />
                  <span>Slow Profile Roasting</span>
                </div>
                <div className="overlay-title">ETHIOPIAN YIRGACHEFFE &middot; NATURAL G1</div>
                <div className="overlay-desc">Notes of Bergamot, Jasmine Florals &amp; Wild Peach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
