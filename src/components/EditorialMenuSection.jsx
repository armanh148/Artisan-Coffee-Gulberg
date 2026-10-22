import React, { useState, useMemo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { categories, products } from '../data/menuData';

export default function EditorialMenuSection({ onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    return products.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        search.trim() === '' ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, search]);

  const getCategoryLabel = (catId) => {
    switch (catId) {
      case 'coffee-hot': return 'HOT · ESPRESSO BAR';
      case 'coffee-cold': return 'CHILLED · COLD BREW & TONIC';
      case 'tea-matcha': return 'ORGANIC · CEREMONIAL MATCHA';
      case 'croissants': return 'FRESH OVEN · LAMINATED VIENNOISERIE';
      case 'cakes': return 'PATISSERIE · ARTISAN CAKES';
      case 'savory': return 'KITCHEN · SAVORY TOASTS & BITES';
      case 'beans': return 'ROASTERY · 340G WHOLE BEAN';
      default: return 'SWISS CAFE BAR SELECTION';
    }
  };

  return (
    <section id="menu-catalog-section" className="grindel-section grindel-menu-section">
      <div className="grindel-section-inner">
        {/* Top Header matching Hero aesthetic */}
        <div className="grindel-header-row">
          <div>
            <div className="grindel-section-tag">// 05 &middot; COMPLETE ROASTERY CATALOG</div>
            <h2 className="grindel-editorial-title">
              <span className="title-row">SLOW-ROASTED BEANS, BREWS &amp;</span>
              <span className="title-script-row">
                <span className="script-text">artisan bakes</span>
              </span>
            </h2>
          </div>

          {/* Search Box matching Swiss Luxury */}
          <div className="grindel-search-box">
            <Search size={16} color="#E2884F" className="grindel-search-icon" />
            <input
              type="text"
              placeholder="SEARCH BEANS, ESPRESSO, BRIOCHE..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="grindel-search-input"
            />
            {search && (
              <button
                className="grindel-search-clear"
                onClick={() => setSearch('')}
                title="Clear search"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="grindel-category-strip">
          <button
            className={`grindel-cat-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <span>ALL CREATIONS</span>
            <span className="pill-count">{products.length}</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`grindel-cat-pill ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.name.toUpperCase()}</span>
              <span className="pill-count">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid matching Hero Showcase */}
        {filteredItems.length === 0 ? (
          <div className="grindel-empty-results">
            <p className="empty-title">NO MATCHING ITEMS FOUND</p>
            <p className="empty-sub">Try adjusting your search terms or filter selection.</p>
            <button
              className="grindel-reset-btn"
              onClick={() => {
                setSelectedCategory('all');
                setSearch('');
              }}
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grindel-menu-grid">
            {filteredItems.map((prod) => (
              <div
                key={prod.id}
                className="grindel-card grindel-menu-card"
                onClick={() => onSelectProduct(prod)}
              >
                {/* Visual Area with Center Ambient Spotlight */}
                <div className="grindel-card-visual menu-card-visual">
                  <div className="card-ambient-spotlight" />
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="grindel-card-img"
                    loading="lazy"
                  />
                  {prod.badge && (
                    <span className="card-pill-badge">{prod.badge}</span>
                  )}
                </div>

                {/* Card Body */}
                <div className="grindel-card-body">
                  <span className="card-item-tag">
                    {getCategoryLabel(prod.category)}
                  </span>
                  <h3 className="card-item-title">{prod.name}</h3>
                  <p className="card-item-desc">{prod.description}</p>

                  <div className="card-item-footer">
                    <div className="card-price">
                      Rs. {prod.price.toLocaleString()}
                    </div>
                    <div className="card-action-btn">
                      <span>CUSTOMIZE</span>
                      <span className="btn-arrow">&#8599;</span>
                    </div>
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
