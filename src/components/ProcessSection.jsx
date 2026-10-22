import React from 'react';
import { Play, ArrowUpRight, Utensils, Sparkles } from 'lucide-react';

export default function ProcessSection({
  onOrderFresh,
  onOpenStory
}) {
  return (
    <section className="process-section">
      {/* Column 1: Master Roaster */}
      <div className="baker-profile-card">
        <img
          src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=500&auto=format&fit=crop&q=80"
          alt="Marcus Weber - Head Roaster"
          className="baker-profile-img"
        />
        <h3 className="baker-profile-name">MARCUS WEBER</h3>
        <p className="baker-profile-desc">
          Head Roaster — Tuning profiles to unlock rich stonefruit &amp; dark cocoa terroir.
        </p>
        <div className="grab-link-underlined" onClick={onOpenStory} style={{ marginTop: 4 }}>
          <span>Read Story &#8599;</span>
        </div>
      </div>

      {/* Column 2: Center Roast Poster Card */}
      <div className="yellow-poster-card">
        <div className="yellow-play-btn" onClick={onOpenStory} style={{ cursor: 'pointer' }}>
          <Play size={14} fill="currentColor" />
        </div>
        <h3 className="yellow-poster-title">SLOW ROASTED</h3>
        <div className="yellow-poster-sub">Small-batch profiling for pure, honest extraction</div>
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&auto=format&fit=crop&q=80"
          alt="Freshly Roasted Beans"
          className="yellow-poster-img"
        />
        <div className="yellow-poster-tag">#SwissRoastCraft</div>
      </div>

      {/* Column 3: Process Copy & CTA */}
      <div className="process-content-right">
        <div className="process-pill-label">
          <Sparkles size={13} color="#E2884F" />
          <span>// The Roastery Craft</span>
        </div>

        <h2 className="process-main-title">
          ROASTED &amp; BREWED<br />
          IN OBSESSIVELY<br />
          TUNED BATCHES
        </h2>

        <div className="process-actions-row">
          <button className="btn-orange" onClick={onOrderFresh}>
            <Utensils size={15} />
            <span>Order Fresh</span>
          </button>
          <p className="process-small-text">
            Roasted daily in micro-batches to guarantee peak flavor bloom in every single cup.
          </p>
        </div>
      </div>
    </section>
  );
}
