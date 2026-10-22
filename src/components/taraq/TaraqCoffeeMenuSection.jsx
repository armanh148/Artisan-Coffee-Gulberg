import React, { useState, useMemo } from 'react';
import { Sparkles, Search, Coffee, Flame, Snowflake, Heart, Leaf, CupSoda, GlassWater, SunMedium, Milk, IceCream, Disc, SlidersHorizontal, X } from 'lucide-react';
import { categories, products } from '../../data/menuData';

export default function TaraqCoffeeMenuSection({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPreference, setFilterPreference] = useState('all'); // all, hot, cold, signature

  // Icon mapping for categories
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={15} />;
      case 'Heart': return <Heart size={15} />;
      case 'Leaf': return <Leaf size={15} />;
      case 'CupSoda': return <CupSoda size={15} />;
      case 'Coffee': return <Coffee size={15} />;
      case 'GlassWater': return <GlassWater size={15} />;
      case 'SunMedium': return <SunMedium size={15} />;
      case 'Milk': return <Milk size={15} />;
      case 'IceCream': return <IceCream size={15} />;
      case 'Disc': return <Disc size={15} />;
      default: return <Coffee size={15} />;
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;

      // Search query filter
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query)) ||
        (p.badge && p.badge.toLowerCase().includes(query));

      // Quick filter
      let matchesPreference = true;
      if (filterPreference === 'signature') {
        matchesPreference = p.popular || p.badge === 'Signature' || p.badge === 'Bestseller';
      } else if (filterPreference === 'hot') {
        const isColdOnly = p.category === 'mojito' || p.category === 'chiller' || p.category === 'shakes' || p.category === 'bubble-tea';
        matchesPreference = !isColdOnly;
      } else if (filterPreference === 'cold') {
        const isCold = p.category === 'mojito' || p.category === 'chiller' || p.category === 'shakes' || p.category === 'bubble-tea' || p.category === 'frappuccinos' || p.name.toLowerCase().includes('iced') || p.name.toLowerCase().includes('cold');
        matchesPreference = isCold || p.hasVariation;
      }

      return matchesCategory && matchesSearch && matchesPreference;
    });
  }, [activeCategory, searchQuery, filterPreference]);

  return (
    <section id="coffee-menu-section" className="taraq-section taraq-menu-section artisan-full-menu">
      <div className="taraq-container">
        {/* Section Header */}
        <div className="taraq-center-header">
          <div className="taraq-section-number">ARTISAN SPECIALTY MENU &mdash; 70+ HANDCRAFTED CREATIONS</div>
          <h2 className="taraq-section-title">
            FRESHLY BREWED &amp; CRAFTED
          </h2>
          <p className="taraq-section-subtitle">
            Explore the complete live menu of Artisan Coffee Roaster. From single-origin pour-overs and signature lattes to artisanal chocolates, chilled refreshers, and matcha.
          </p>

          {/* Search & Quick Tag Toolbar */}
          <div className="artisan-menu-toolbar">
            {/* Search Box */}
            <div className="artisan-search-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search coffee, spanish latte, matcha, frappe, chocolate..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="artisan-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Quick Filter Badges */}
            <div className="artisan-quick-pills">
              <button
                type="button"
                className={`quick-pill ${filterPreference === 'all' ? 'active' : ''}`}
                onClick={() => setFilterPreference('all')}
              >
                All Items
              </button>
              <button
                type="button"
                className={`quick-pill ${filterPreference === 'signature' ? 'active' : ''}`}
                onClick={() => setFilterPreference('signature')}
              >
                <Sparkles size={13} />
                Bestsellers
              </button>
              <button
                type="button"
                className={`quick-pill ${filterPreference === 'hot' ? 'active' : ''}`}
                onClick={() => setFilterPreference('hot')}
              >
                <Flame size={13} />
                Hot Brews
              </button>
              <button
                type="button"
                className={`quick-pill ${filterPreference === 'cold' ? 'active' : ''}`}
                onClick={() => setFilterPreference('cold')}
              >
                <Snowflake size={13} />
                Cold &amp; Iced
              </button>
            </div>
          </div>

          {/* Complete 10 Categories Horizontal Scrollable Strip */}
          <div className="artisan-category-scroll-strip">
            <button
              type="button"
              className={`artisan-cat-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <Coffee size={16} />
              <span>All Categories</span>
              <span className="cat-count-badge">{products.length}</span>
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`artisan-cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.name}</span>
                <span className="cat-count-badge">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Active Filter Summary */}
          <div className="artisan-results-count-bar">
            <span>
              Showing <strong>{filteredProducts.length}</strong> items
              {activeCategory !== 'all' && (
                <> in <em>{categories.find(c => c.id === activeCategory)?.name}</em></>
              )}
              {searchQuery && <> matching &ldquo;{searchQuery}&rdquo;</>}
            </span>
            {(activeCategory !== 'all' || searchQuery || filterPreference !== 'all') && (
              <button
                type="button"
                className="reset-filters-inline-btn"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setFilterPreference('all');
                }}
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="artisan-empty-catalog">
            <Coffee size={40} className="empty-icon" />
            <h4 className="empty-title">No items found</h4>
            <p className="empty-desc">
              We couldn't find any drinks matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
            </p>
            <button
              type="button"
              className="artisan-reset-cta"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setFilterPreference('all');
              }}
            >
              View Full Menu
            </button>
          </div>
        ) : (
          <div className="artisan-products-grid">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="artisan-product-card"
                onClick={() => onSelectProduct(item)}
              >
                {/* Visual Area */}
                <div className="artisan-card-media">
                  {item.badge && (
                    <span className="artisan-badge-tag">{item.badge}</span>
                  )}
                  {item.hasVariation && (
                    <span className="artisan-variant-tag">Sizes &amp; Options</span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="artisan-card-img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80';
                    }}
                  />
                </div>

                {/* Info Area */}
                <div className="artisan-card-content">
                  <div className="artisan-cat-small">
                    {categories.find((c) => c.id === item.category)?.name || 'Artisan Drink'}
                  </div>
                  <h3 className="artisan-card-title">{item.name}</h3>
                  <p className="artisan-card-desc">{item.description}</p>

                  {/* Size info badge */}
                  {item.sizes && item.sizes.length > 1 && (
                    <div className="artisan-sizes-chips">
                      {item.sizes.map((s, idx) => (
                        <span key={idx} className="size-chip-item">
                          {s.name.split(' ')[0]}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer with Price and Add to Order CTA */}
                  <div className="artisan-card-footer">
                    <div className="artisan-price-wrap">
                      <span className="price-prefix">From</span>
                      <span className="price-val">Rs. {item.price.toLocaleString()}</span>
                    </div>

                    <button
                      type="button"
                      className="artisan-order-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(item);
                      }}
                    >
                      <span>ORDER +</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
