import React from 'react';
import { ArrowRight, Award, Flame, Droplets, Coffee, Sparkles } from 'lucide-react';

export default function KopagAboutSection({ onOpenMenu, onOpenReserve }) {
  const craftPillars = [
    {
      icon: <Award size={22} className="pillar-icon" />,
      tag: 'ETHICAL SOURCING',
      title: 'Direct-Trade Micro Lots',
      desc: 'We partner directly with smallholder coffee farms across Yirgacheffe Ethiopia, Huila Colombia, and Huehuetenango Guatemala, paying premium prices well above fair-trade minimums.'
    },
    {
      icon: <Flame size={22} className="pillar-icon" />,
      tag: 'ROASTER SCIENCE',
      title: 'Small-Batch Drum Roasting',
      desc: 'Roasted locally in Lahore every Tuesday & Friday on cast-iron drum roasters. We profile each harvest to highlight origin terroir, stone-fruit sweetness, and silky cocoa finishes.'
    },
    {
      icon: <Droplets size={22} className="pillar-icon" />,
      tag: 'EXTRACTION PRECISION',
      title: 'Calibrated Water & Brew Math',
      desc: 'Our extraction water undergoes custom remineralization (75–100 TDS) to pull vibrant aromatics without harsh bitterness, dialed in daily with digital refractometers.'
    },
    {
      icon: <Coffee size={22} className="pillar-icon" />,
      tag: 'PURE INGREDIENTS',
      title: 'Real Chocolates & Organic Milk',
      desc: 'Zero artificial flavor syrups or pre-mix powders. We hand-melt authentic Belgian Callebaut chocolate and pair drinks with fresh local farm milk and premium oat options.'
    }
  ];

  const roasteryStats = [
    { value: '100%', label: 'Specialty Arabica', sub: 'High-Altitude Volcanic Soil' },
    { value: '85+', label: 'SCA Cupping Score', sub: 'Certified Specialty Grade' },
    { value: '4', label: 'Flagship Cafes', sub: 'Lahore & Karachi Locations' },
    { value: 'Daily', label: 'Fresh Micro Roasts', sub: 'Peak Flavor Window' }
  ];

  return (
    <section id="about-section" className="kopag-about-section">
      <div className="kopag-about-inner">
        {/* Section Header */}
        <div className="kopag-about-header">
          <div className="about-kicker-wrap">
            <span className="about-kicker-tag">OUR ROASTERY HERITAGE</span>
            <span className="about-kicker-sub">EST. 2020 &bull; LAHORE, PAKISTAN</span>
          </div>

          <div className="about-title-row">
            <h2 className="kopag-about-title">
              Obsession In <br />Every Single Bean
            </h2>
            <p className="kopag-about-lead">
              Artisan Coffee Roasters started with a singular premise: Pakistan deserved genuine, third-wave specialty coffee where the farmer’s craft, the roast master’s curve, and the barista’s extraction sing together in harmony.
            </p>
          </div>
        </div>

        {/* Feature Grid: Left Editorial Media & Right Craft Pillars */}
        <div className="kopag-about-grid">
          {/* Left Column: Visual Showcase & Editorial Manifesto */}
          <div className="about-visual-column">
            <div className="about-photo-wrapper">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&auto=format&fit=crop&q=85"
                alt="Artisan Barista pouring pour-over coffee"
                className="about-main-img"
                loading="lazy"
              />
              <div className="about-photo-tag-top">
                <span className="photo-tag-chip">SCA 85+ SPECIALTY GRADE</span>
              </div>
              <div className="about-floating-card">
                <Sparkles size={16} className="sparkle-icon" />
                <div className="floating-card-text">
                  <strong>Specialty Micro-Roaster</strong>
                  <span>Small-Batch Drum Roasted Every Week</span>
                </div>
              </div>
            </div>

            {/* The Artisan Standard Manifesto Card */}
            <div className="about-manifesto-card">
              <div className="manifesto-card-top">
                <span className="manifesto-badge-pill">THE ARTISAN STANDARD</span>
                <span className="manifesto-est">EST. 2020 &bull; LAHORE</span>
              </div>
              <blockquote className="manifesto-quote">
                &ldquo;We never roast dark to hide flaws. We roast to reveal the unique character of soil, rain, and elevation.&rdquo;
              </blockquote>
              <div className="manifesto-footer-row">
                <div className="roast-master-seal">
                  <Coffee size={15} className="seal-icon" />
                  <span>Fresh Cast-Iron Drum Profiling</span>
                </div>
                <span className="roast-master-sign">&mdash; Roast Master &bull; Artisan Gulberg</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Craft Pillars */}
          <div className="about-pillars-column">
            <div className="pillars-list">
              {craftPillars.map((pillar, idx) => (
                <div key={idx} className="about-pillar-card">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <div className="pillar-body">
                    <span className="pillar-tag">{pillar.tag}</span>
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions-row">
              <button type="button" className="about-primary-btn" onClick={onOpenMenu}>
                <span>Explore Coffee Offerings</span>
                <ArrowRight size={15} />
              </button>
              <button type="button" className="about-secondary-btn" onClick={onOpenReserve}>
                <span>Book Tasting Lounge</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="kopag-about-stats-strip">
          {roasteryStats.map((item, idx) => (
            <div key={idx} className="about-stat-item">
              <span className="stat-big-val">{item.value}</span>
              <span className="stat-bold-label">{item.label}</span>
              <span className="stat-sub-text">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
