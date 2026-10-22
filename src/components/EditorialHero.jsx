import React from 'react';
import { Utensils, Play, ArrowUpRight } from 'lucide-react';

export default function EditorialHero({
  onGrabBite,
  onOpenStory,
  onSelectFeatured
}) {
  return (
    <section className="hero-block">
      {/* Left Column */}
      <div>
        <div className="hero-tag-pill">
          <span>🧁 The gold standard in American baking</span>
        </div>

        <h1 className="hero-main-headline">
          BAKED TO{' '}
          <span className="inline-emoji-pill">
            <img
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=100&auto=format&fit=crop&q=80"
              alt="Cookie"
              className="inline-food-img"
            />
          </span>{' '}
          DELIGHT SERVED WITH{' '}
          <span className="inline-emoji-pill">
            <img
              src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=100&auto=format&fit=crop&q=80"
              alt="Cupcake"
              className="inline-food-img"
            />
          </span>{' '}
          LOVE
        </h1>

        <p className="hero-desc-text">
          From oven to heart handcrafted pastries, breads, and treats made with love
        </p>

        <div className="hero-buttons-row">
          <button className="btn-orange" onClick={onGrabBite}>
            <Utensils size={16} />
            <span>Grab a Bite</span>
          </button>

          <div className="btn-story-play" onClick={onOpenStory}>
            <div className="play-circle-icon">
              <Play size={14} fill="currentColor" />
            </div>
            <span>Our Story</span>
          </div>

          <div className="hero-featured-pill" onClick={onSelectFeatured}>
            <img
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=60&auto=format&fit=crop&q=80"
              alt="Chocolate Bliss"
              className="hero-featured-thumb"
            />
            <span style={{ textDecoration: 'underline' }}>Chocolate Bliss</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      {/* Right Column: Visual Collage */}
      <div className="hero-collage-wrap">
        {/* Center Bread Stack Card */}
        <div className="hero-center-bread-card">
          <img
            src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=700&auto=format&fit=crop&q=80"
            alt="Artisan Sourdough Stack"
            className="hero-stack-img"
          />
        </div>

        {/* Side Elements */}
        <div className="hero-side-elements">
          {/* Chef Avatar */}
          <div className="chef-avatar-card">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=180&auto=format&fit=crop&q=80"
              alt="Edfior Bastian"
              className="chef-avatar-img"
            />
            <div className="chef-signature-text">Edfior Bastian</div>
          </div>

          {/* Freshly Baked Daily Card */}
          <div className="fresh-daily-card">
            <div className="fresh-daily-title">
              FRESHLY 🥐<br />BAKED EVERY<br />DAY
            </div>
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&auto=format&fit=crop&q=80"
              alt="Fresh Breads Basket"
              className="fresh-daily-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
