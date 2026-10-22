import React from 'react';
import { Plus, ShoppingBag, Sparkles, Star, ArrowUpRight } from 'lucide-react';

export default function ShowcaseCakeSection({
  onSelectProduct,
  onQuickAdd
}) {
  const sesameBun = {
    id: 'black-sesame-bun',
    name: 'Black Sesame Brioche Bun',
    price: 550,
    description: 'Soft, fluffy, and topped with aromatic toasted sesame seeds and honey glaze.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80',
    sizes: [{ name: 'Single Bun', price: 550 }]
  };

  const layeredCake = {
    id: 'chocolate-perfection-cake',
    name: 'Chocolate Perfection Layered Gateau',
    price: 1250,
    description: 'Triple-tier dark chocolate sponge layered with Ecuadorian ganache, chocolate ribbons, and cocoa crumble.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80',
    sizes: [{ name: 'Single Slice', price: 1250 }, { name: 'Whole 3-Tier Gateau', price: 6500 }]
  };

  return (
    <section className="showcase-section">
      {/* Left Column */}
      <div className="showcase-left-col">
        {/* Black Sesame Bun */}
        <div className="sesame-bun-card" onClick={() => onSelectProduct(sesameBun)} style={{ cursor: 'pointer' }}>
          <img src={sesameBun.image} alt={sesameBun.name} className="sesame-bun-img" />
          <div style={{ flex: 1 }}>
            <h4 style={{ fontWeight: 700, fontSize: '0.98rem', marginBottom: 4 }}>Black Sesame Bun</h4>
            <p style={{ fontSize: '0.78rem', color: '#7E726C', marginBottom: 10 }}>
              Soft, fluffy, and topped with aromatic sesame
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600 }}>
                Rs. 550
              </span>
              <button
                className="editorial-add-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProduct(sesameBun);
                }}
              >
                <Plus size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Customer Favorite Trustpilot Box */}
        <div className="trustpilot-box">
          <div className="trustpilot-headline">
            Customer<br />favorite quality<br />always
          </div>
          <div className="trustpilot-score-row">
            <div className="trustpilot-badge">
              <Star size={16} fill="#00b67a" color="#00b67a" />
              <span>Trustpilot</span>
            </div>
            <div className="trustpilot-big-score">
              4.9 <span style={{ color: '#F6D672' }}>★</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Big Chocolate Layer Cake */}
      <div className="showcase-right-cake">
        <div className="cake-content-block">
          <div className="bento-chip-tag" style={{ alignSelf: 'flex-start' }}>
            <Sparkles size={12} color="#EE5632" style={{ display: 'inline', marginRight: 4 }} />
            <span>New Baking</span>
          </div>

          <h2 className="cake-main-title">
            CHOCOLATE<br />
            PERFECTION LAYER<br />
            AFTER LAYER
          </h2>

          <div className="cake-action-row">
            <button
              className="btn-orange"
              onClick={() => onSelectProduct(layeredCake)}
            >
              <ShoppingBag size={15} />
              <span>Add to Cart</span>
            </button>
            <span className="cake-price-tag">Rs. 1,250</span>
          </div>
        </div>

        <div>
          <img
            src={layeredCake.image}
            alt="Layered Chocolate Cake"
            className="big-cake-img"
          />
        </div>
      </div>
    </section>
  );
}
