import React from 'react';
import { ArrowUpRight, Flame } from 'lucide-react';

export default function BakeboardBento({
  onSelectProduct,
  onOpenMenu
}) {
  return (
    <section className="bento-row-3">
      {/* Column 1: ROASTERY BOARD */}
      <div className="bento-col">
        <div className="bakeboard-header">
          <span className="bakeboard-title">ROASTERY BOARD</span>
          <span className="bakeboard-link" onClick={onOpenMenu}>
            Explore All &#8599;
          </span>
        </div>

        <div className="bakeboard-items">
          {/* Midnight Melt */}
          <div
            className="bakeboard-item"
            onClick={() => onSelectProduct({
              id: 'midnight-melt',
              name: 'Midnight Melt Chocolate Gateau',
              price: 950,
              description: 'Dark, sensory appeal. Rich layers of Valrhona dark chocolate fudge and velvet ganache.',
              image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80',
              sizes: [{ name: 'Single Slice', price: 950 }, { name: 'Full Gateau', price: 4500 }]
            })}
          >
            <div className="bakeboard-item-left">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=120&auto=format&fit=crop&q=80"
                alt="Midnight Melt"
                className="bakeboard-thumb"
              />
              <div>
                <div className="bakeboard-name">Midnight Melt Gateau</div>
                <div className="bakeboard-sub">Valrhona dark ganache &amp; espresso</div>
              </div>
            </div>
            <div className="bakeboard-price">Rs. 950</div>
          </div>

          {/* Alpine Single Origin Pourover */}
          <div
            className="bakeboard-item"
            onClick={() => onSelectProduct({
              id: 'pourover-specialty',
              name: 'Ethiopian Yirgacheffe Pour-Over',
              price: 680,
              description: 'Hand-poured single origin with notes of bergamot, jasmine florals, and wild peach.',
              image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
              sizes: [{ name: '250ml Carafe', price: 680 }, { name: '500ml Sharing', price: 1250 }]
            })}
          >
            <div className="bakeboard-item-left">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&auto=format&fit=crop&q=80"
                alt="Single Origin Pourover"
                className="bakeboard-thumb"
              />
              <div>
                <div className="bakeboard-name">Single Origin Pourover</div>
                <div className="bakeboard-sub">Bergamot &amp; jasmine florals</div>
              </div>
            </div>
            <div className="bakeboard-price">Rs. 680</div>
          </div>
        </div>
      </div>

      {/* Column 2: Center Croissant Box */}
      <div className="bento-col center-bento-card">
        <div>
          <span className="bento-chip-tag">// SWISS BAKERY CRAFT</span>
          <h2 className="bento-headline-medium">
            GOLDEN ON THE OUTSIDE, BUTTERY<br />LAYERS ON THE INSIDE
          </h2>
        </div>

        <div className="bento-croissant-visual">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80"
            alt="Warm Croissants Basket"
            className="bento-croissant-img"
          />
          <div className="now-baking-pill">
            <Flame size={12} fill="#E2884F" color="#E2884F" />
            <span>Baked Every Dawn</span>
          </div>
        </div>
      </div>

      {/* Column 3: Right Cookie Box */}
      <div className="bento-col right-bento-card">
        <img
          src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200&auto=format&fit=crop&q=80"
          alt="Artisan Cookies"
          className="cookie-avatar-img"
        />
        <h2 className="bento-headline-medium" style={{ fontSize: '1.45rem' }}>
          WARM CHOCOLATE, MALDON SALT &amp;<br />ESPRESSO CRUNCH
        </h2>
        <div
          className="grab-link-underlined"
          onClick={() => onSelectProduct({
            id: 'artisan-choc-cookie',
            name: 'Sea Salt Chocolate Chunk Cookie',
            price: 420,
            description: 'Crisp chewy edges, melted Belgian dark chocolate puddle, Maldon sea salt flakes.',
            image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=80',
            sizes: [{ name: 'Cookie Single', price: 420 }, { name: 'Box of 4', price: 1550 }]
          })}
        >
          <span>Grab Yours &#8599;</span>
        </div>
      </div>
    </section>
  );
}
