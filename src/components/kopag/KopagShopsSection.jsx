import React from 'react';
import { ArrowUpRight, MapPin, Clock, Phone } from 'lucide-react';
import { branches } from '../../data/branches';

export default function KopagShopsSection({ onSelectBranch, onOpenLocation }) {
  // Real high-aesthetic storefront imagery for the 4 locations
  const shopImages = [
    {
      id: 'gulberg-lahore',
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&auto=format&fit=crop&q=80',
      badge: 'Flagship Roastery'
    },
    {
      id: 'dha-lahore',
      img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=700&auto=format&fit=crop&q=80',
      badge: 'DHA Lounge'
    },
    {
      id: 'tipu-sultan-karachi',
      img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&auto=format&fit=crop&q=80',
      hasYellowArrow: true,
      badge: 'Karachi Central'
    },
    {
      id: 'clifton-karachi',
      img: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=700&auto=format&fit=crop&q=80',
      badge: 'Coastal Espresso Bar'
    }
  ];

  return (
    <section id="visit-shops-section" className="kopag-shops-section">
      <div className="kopag-shops-inner">
        {/* Section Headline */}
        <div className="kopag-shops-header">
          <h2 className="kopag-shops-title">Visit shops</h2>
          <p className="kopag-shops-sub">
            Four bespoke architectural coffee lounges in Lahore &amp; Karachi. Crafted for coffee rituals, conversations, and deep work.
          </p>
        </div>

        {/* 4-Column Storefront Cards Grid */}
        <div className="kopag-shops-grid">
          {branches.map((b, idx) => {
            const extra = shopImages[idx] || {};
            return (
              <div
                key={b.id}
                className="kopag-shop-card"
                onClick={() => onSelectBranch ? onSelectBranch(b) : onOpenLocation()}
              >
                <div className="kopag-shop-media-wrap">
                  <img
                    src={extra.img}
                    alt={b.name}
                    className="kopag-shop-img"
                    loading="lazy"
                  />
                  {extra.badge && (
                    <span className="kopag-shop-tag">{extra.badge}</span>
                  )}
                  {/* Floating Yellow Action Circle (as seen on the 3rd card in reference) */}
                  {extra.hasYellowArrow && (
                    <div className="kopag-floating-circle-arrow" title="View location">
                      <ArrowUpRight size={20} color="#0D382B" />
                    </div>
                  )}
                </div>

                <div className="kopag-shop-body">
                  <h3 className="kopag-shop-name">{b.name.replace('Artisan Coffee Roaster - ', '')}</h3>
                  <p className="kopag-shop-address">{b.address}</p>
                  <div className="kopag-shop-time">
                    <Clock size={12} className="time-icon" />
                    <span>{b.timings}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
