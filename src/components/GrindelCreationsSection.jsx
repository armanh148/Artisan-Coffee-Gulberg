import React from 'react';
import { Plus, ArrowUpRight, Flame, Sparkles } from 'lucide-react';

export default function GrindelCreationsSection({ onSelectProduct, onExploreMenu }) {
  const items = [
    {
      id: 'grindel-alpine-roast',
      tag: 'WHOLE BEAN &middot; 340G',
      name: 'Grindel Alpine Signature Roast',
      price: 2450,
      description: 'Single-origin Ethiopian Gesha & Colombian Supremo. Bergamot, candied orange, dark chocolate finish.',
      image: '/hero-product-duo.png',
      badge: 'Master Selection',
      sizes: [{ name: '250g Pouch', price: 2450 }, { name: '500g Bag', price: 4600 }]
    },
    {
      id: 'mocha-majestic-latte',
      tag: 'HOT &middot; ESPRESSO BAR',
      name: 'Mocha Majestic & Velvet Microfoam',
      price: 750,
      description: 'Double ristretto extraction of Swiss Alpine blend over house-made Valrhona 70% dark chocolate ganache.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
      badge: 'Customer Favorite',
      sizes: [{ name: 'Standard (8oz)', price: 750 }, { name: 'Large (12oz)', price: 880 }]
    },
    {
      id: 'almond-croissant-delight',
      tag: 'FRESH OVEN &middot; PASTRY',
      name: 'Double-Baked Almond Frangipane Brioche',
      price: 590,
      description: 'Laminated French AOP butter brioche layered with rich almond cream, dusted with powdered sugar.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80',
      badge: 'Baked Daily',
      sizes: [{ name: 'Single Brioche', price: 590 }, { name: 'Box of 2', price: 1120 }]
    }
  ];

  return (
    <section id="creations-section" className="grindel-section grindel-creations-section">
      <div className="grindel-section-inner">
        {/* Top Header */}
        <div className="grindel-header-row">
          <div>
            <div className="grindel-section-tag">// 02 &middot; THE SIGNATURE COLLECTION</div>
            <h2 className="grindel-editorial-title">
              <span className="title-row">CURATED ROASTS &amp;</span>
              <span className="title-script-row">
                <span className="script-text">handcrafted cups</span>
              </span>
            </h2>
          </div>

          <div className="grindel-cta-wrap">
            <button className="grindel-explore-link" onClick={onExploreMenu}>
              <span className="explore-text">VIEW FULL CATALOG</span>
              <span className="explore-arrow">&#8599;</span>
              <span className="explore-underline"></span>
            </button>
          </div>
        </div>

        {/* 3 Large Product Cards matching hero showcase */}
        <div className="grindel-products-grid">
          {items.map((item) => (
            <div
              key={item.id}
              className="grindel-card"
              onClick={() => onSelectProduct(item)}
            >
              {/* Product Visual Container with Ambient Center Glow */}
              <div className="grindel-card-visual">
                <div className="card-ambient-spotlight" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="grindel-card-img"
                  style={item.id === 'grindel-alpine-roast' ? { objectFit: 'contain', padding: '16px' } : {}}
                />
                <span className="card-pill-badge">{item.badge}</span>
              </div>

              {/* Product Info */}
              <div className="grindel-card-body">
                <span className="card-item-tag" dangerouslySetInnerHTML={{ __html: item.tag }} />
                <h3 className="card-item-title">{item.name}</h3>
                <p className="card-item-desc">{item.description}</p>

                <div className="card-item-footer">
                  <div className="card-price">Rs. {item.price.toLocaleString()}</div>
                  <div className="card-action-btn">
                    <span>ORDER</span>
                    <span className="btn-arrow">&#8599;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
