import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Sparkles, Flame, Snowflake, Coffee, X, ArrowUpRight, ChevronDown, Check, SlidersHorizontal } from 'lucide-react';
import { categories, products } from '../../data/menuData';

export default function KopagMenuSection({ onSelectProduct, activeCategory, setActiveCategory }) {
  const [currentCategory, setCurrentCategory] = useState(activeCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, popular, hot, cold
  const [visibleLimit, setVisibleLimit] = useState(15);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sync if parent updates
  useEffect(() => {
    if (activeCategory) {
      setCurrentCategory(activeCategory);
      setVisibleLimit(15);
    }
  }, [activeCategory]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryChange = (catId) => {
    setCurrentCategory(catId);
    if (setActiveCategory) setActiveCategory(catId);
    setVisibleLimit(12);
  };

  const activeCategoryObj = categories.find((c) => c.id === currentCategory);
  const activeCategoryLabel =
    currentCategory === 'all'
      ? `All Items (${products.length})`
      : `${activeCategoryObj?.name || 'Category'} (${activeCategoryObj?.count || 0})`;

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category match
      const matchesCategory = currentCategory === 'all' || p.category === currentCategory;

      // Search match
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q));

      // Preference match
      let matchesFilter = true;
      if (filterType === 'popular') {
        matchesFilter = p.popular || p.badge === 'Signature' || p.badge === 'Bestseller';
      } else if (filterType === 'hot') {
        const isColdOnly =
          p.category === 'mojito' ||
          p.category === 'chiller' ||
          p.category === 'shakes' ||
          p.category === 'bubble-tea';
        matchesFilter = !isColdOnly;
      } else if (filterType === 'cold') {
        const isCold =
          p.category === 'mojito' ||
          p.category === 'chiller' ||
          p.category === 'shakes' ||
          p.category === 'bubble-tea' ||
          p.category === 'frappuccinos' ||
          p.name.toLowerCase().includes('iced') ||
          p.name.toLowerCase().includes('cold');
        matchesFilter = isCold || p.hasVariation;
      }

      return matchesCategory && matchesSearch && matchesFilter;
    });
  }, [currentCategory, searchQuery, filterType]);

  const displayedProducts = filteredProducts.slice(0, visibleLimit);

  return (
    <section id="explore-menu-section" className="kopag-menu-section">
      <div className="kopag-menu-inner">
        {/* 1. Header Row: "Explore Our Menu" / "/2026" */}
        <div className="kopag-menu-header-row">
          <h2 className="kopag-menu-title">Explore Our Menu</h2>
          <span className="kopag-menu-year">/2026</span>
        </div>

        {/* 2. Toolbar: Dropdown Category Filter + Search + Quick Filters */}
        <div className="kopag-menu-toolbar">
          {/* Custom Elegant Dropdown Filter */}
          <div className="kopag-category-dropdown-wrap" ref={dropdownRef}>
            <button
              type="button"
              className={`kopag-dropdown-trigger-btn ${isDropdownOpen ? 'is-open' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
            >
              <SlidersHorizontal size={15} className="dropdown-filter-icon" />
              <div className="dropdown-trigger-text">
                <span className="dropdown-trigger-label">Category:</span>
                <span className="dropdown-trigger-val">{activeCategoryLabel}</span>
              </div>
              <ChevronDown size={15} className={`dropdown-chevron ${isDropdownOpen ? 'rotate' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="kopag-dropdown-menu" role="listbox">
                <div className="dropdown-menu-header">Filter by Category</div>
                <button
                  type="button"
                  className={`kopag-dropdown-option ${currentCategory === 'all' ? 'selected' : ''}`}
                  onClick={() => {
                    handleCategoryChange('all');
                    setIsDropdownOpen(false);
                  }}
                  role="option"
                  aria-selected={currentCategory === 'all'}
                >
                  <span className="option-name">All Items</span>
                  <span className="option-count">({products.length})</span>
                  {currentCategory === 'all' && <Check size={14} className="option-check" />}
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`kopag-dropdown-option ${currentCategory === c.id ? 'selected' : ''}`}
                    onClick={() => {
                      handleCategoryChange(c.id);
                      setIsDropdownOpen(false);
                    }}
                    role="option"
                    aria-selected={currentCategory === c.id}
                  >
                    <span className="option-name">{c.name}</span>
                    <span className="option-count">({c.count})</span>
                    {currentCategory === c.id && <Check size={14} className="option-check" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Field */}
          <div className="kopag-search-field">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search Spanish Latte, Chemex, Chocolate, Frappe..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="kopag-quick-tabs">
            <button
              type="button"
              className={`quick-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`quick-btn ${filterType === 'popular' ? 'active' : ''}`}
              onClick={() => setFilterType('popular')}
            >
              <Sparkles size={12} /> Bestsellers
            </button>
            <button
              type="button"
              className={`quick-btn ${filterType === 'hot' ? 'active' : ''}`}
              onClick={() => setFilterType('hot')}
            >
              <Flame size={12} /> Hot
            </button>
            <button
              type="button"
              className={`quick-btn ${filterType === 'cold' ? 'active' : ''}`}
              onClick={() => setFilterType('cold')}
            >
              <Snowflake size={12} /> Cold &amp; Iced
            </button>
          </div>
        </div>

        {/* 4. Product Cards Grid (3 Columns with Sage Containers) */}
        {filteredProducts.length === 0 ? (
          <div className="kopag-empty-state">
            <Coffee size={36} className="empty-icon" />
            <h3>No coffee found</h3>
            <p>Try searching another keyword or reset the category filters.</p>
            <button
              type="button"
              className="kopag-pill-btn"
              onClick={() => {
                setCurrentCategory('all');
                setSearchQuery('');
                setFilterType('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="kopag-products-grid">
            {displayedProducts.map((item) => (
              <div
                key={item.id}
                className="kopag-card"
                onClick={() => onSelectProduct(item)}
              >
                {/* Sage Olive Container for Drink Media */}
                <div className="kopag-card-sage-box">
                  {item.badge && (
                    <span className="kopag-card-badge">{item.badge}</span>
                  )}
                  {item.hasVariation && (
                    <span className="kopag-card-opt-tag">Sizes &amp; Options</span>
                  )}
                  <div className="kopag-card-img-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="kopag-card-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80';
                      }}
                    />
                  </div>
                </div>

                {/* Card Text & Information */}
                <div className="kopag-card-body">
                  <h3 className="kopag-card-title">{item.name}</h3>
                  <p className="kopag-card-desc">{item.description}</p>
                  
                  <div className="kopag-card-price-row">
                    <div className="kopag-price">
                      <span className="currency">Rs.</span> {item.price.toLocaleString()}
                    </div>
                    <button
                      type="button"
                      className="kopag-add-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(item);
                      }}
                    >
                      <span>ORDER</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5. View More / Show All Pagination CTA */}
        {filteredProducts.length > displayedProducts.length && (
          <div className="kopag-view-more-row">
            <button
              type="button"
              className="kopag-load-more-btn"
              onClick={() => setVisibleLimit((prev) => prev + 15)}
            >
              Load More Drinks ({filteredProducts.length - displayedProducts.length} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
