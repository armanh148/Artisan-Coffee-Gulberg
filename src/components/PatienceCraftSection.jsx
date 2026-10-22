import React from 'react';
import { Utensils, ArrowUpRight } from 'lucide-react';

export default function PatienceCraftSection({
  onOpenStory,
  onSelectProduct
}) {
  return (
    <section className="feature-split-2">
      {/* Left Column: Handcrafted Roast & Extraction */}
      <div className="feature-left-donut">
        <div className="donut-stack-frame">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80"
            alt="Handcrafted Coffee and Artisan Roasts"
            className="donut-stack-img"
          />
        </div>

        <div className="donut-left-caption">
          <button className="btn-orange" onClick={onOpenStory} style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
            <Utensils size={14} />
            <span>Our Swiss Story</span>
          </button>
          <span style={{ fontSize: '0.84rem', color: 'var(--text-body)', lineHeight: 1.4 }}>
            Swiss precision roasting rooted in 1914 tradition and perfected in Gulberg.
          </span>
        </div>
      </div>

      {/* Right Column: Craft Details */}
      <div className="feature-right-craft">
        <div>
          <h2 className="craft-main-headline">
            PATIENCE IN EVERY STEP,<br />
            PRECISION IN EVERY ROAST
          </h2>
          <p className="craft-subline">
            Slow profile drum-roasting &amp; honest alpine water extraction in every cup.
          </p>
        </div>

        <div className="craft-subgrid">
          {/* Sub Left */}
          <div className="craft-croissant-box">
            <p className="craft-croissant-text">
              Golden, flaky, and freshly baked a croissant crafted with buttery layers and rustic charm
            </p>
            <img
              src="https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=500&auto=format&fit=crop&q=80"
              alt="Flaky Croissants"
              className="craft-wide-croissant-img"
            />
          </div>

          {/* Sub Right: Yellow Circle Badge */}
          <div className="craft-sweetness-box">
            <div className="yellow-badge-circle">
              <img
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=200&auto=format&fit=crop&q=80"
                alt="Sweetness"
                className="yellow-badge-img"
              />
            </div>
            <h3 className="serif-title" style={{ fontSize: '1.25rem', lineHeight: 1.15, marginBottom: 12 }}>
              SWEETNESS WORTH<br />HOLDING ON TO
            </h3>
            <div
              className="grab-link-underlined"
              onClick={() => onSelectProduct({
                id: 'almond-croissant-delight',
                name: 'Parisian Almond Frangipane Croissant',
                price: 590,
                description: 'Double-baked artisan croissant filled with rich almond frangipane cream and toasted sliced almonds.',
                image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=500&auto=format&fit=crop&q=80',
                sizes: [{ name: 'Single Croissant', price: 590 }]
              })}
            >
              <span>Get Yours Now</span>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
