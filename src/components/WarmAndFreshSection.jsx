import React from 'react';
import { ArrowUpRight, Utensils } from 'lucide-react';

export default function WarmAndFreshSection({
  onExploreMenu,
  onOpenReviews,
  onSelectProduct
}) {
  return (
    <section className="warm-fresh-section">
      <div className="warm-fresh-header">
        <h2 className="warm-fresh-headline">
          WARM AND{' '}
          <span className="inline-emoji-pill">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&auto=format&fit=crop&q=80"
              alt="Cake"
              className="inline-food-img"
            />
          </span>{' '}
          FRESH<br />ALL DAY LONG
        </h2>

        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', maxWidth: '280px', marginBottom: '14px', lineHeight: 1.4 }}>
            Experience the aroma of freshly roasted single origin beans and artisan bakes.
          </p>
          <button className="btn-orange" onClick={onExploreMenu}>
            <Utensils size={15} />
            <span>Explore Menu</span>
          </button>
        </div>
      </div>

      <div className="warm-fresh-cards-3">
        {/* Card 1: Review Card */}
        <div className="review-card-with-overlay" onClick={onOpenReviews} style={{ cursor: 'pointer' }}>
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80"
            alt="Artisan Specialty Coffee Pour"
            className="review-card-bg-img"
          />
          <div className="review-card-content">
            <div className="review-avatars-row">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Reviewer" className="reviewer-avatar-mini" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Reviewer" className="reviewer-avatar-mini" />
              <span className="reviewer-badge-count">20+</span>
            </div>

            <div>
              <div className="review-quote-text">
                "This sourdough & coffee ruined all other cafes for me"
              </div>
              <div className="review-pill-btn">
                <span>Read Review</span>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: 50+ In-House Baker Banner */}
        <div className="inhouse-baker-banner">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80"
            alt="Baker dusting flour"
            className="inhouse-baker-img"
          />
          <div className="inhouse-baker-overlay">
            <div className="inhouse-number-title">50+</div>
            <div className="inhouse-subtext">ARTISAN PRODUCTS<br />MADE IN-HOUSE</div>
          </div>
        </div>

        {/* Card 3: Chococloud Delight Card */}
        <div
          className="chococloud-card"
          onClick={() => onSelectProduct({
            id: 'chococloud-delight',
            name: 'Chococloud Velour Cupcakes (Trio)',
            price: 850,
            description: 'Fluffy cocoa cloud sponge with Swiss meringue buttercream frosting on pedestal presentation.',
            image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500&auto=format&fit=crop&q=80',
            sizes: [{ name: 'Trio Set (3 pcs)', price: 850 }]
          })}
          style={{ cursor: 'pointer' }}
        >
          <div className="chococloud-title">CHOCOCLOUD<br />DELIGHT</div>
          <img
            src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500&auto=format&fit=crop&q=80"
            alt="Chococloud Cupcakes"
            className="chococloud-img"
          />
        </div>
      </div>
    </section>
  );
}
