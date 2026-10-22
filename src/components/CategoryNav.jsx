import React from 'react';
import {
  Sparkles,
  Heart,
  Leaf,
  CupSoda,
  Coffee,
  GlassWater,
  SunMedium,
  Milk,
  IceCream,
  Disc,
  Grid
} from 'lucide-react';

const iconMap = {
  Sparkles,
  Heart,
  Leaf,
  CupSoda,
  Coffee,
  GlassWater,
  SunMedium,
  Milk,
  IceCream,
  Disc
};

export default function CategoryNav({
  categories,
  activeCategory,
  onSelectCategory,
  countsByCategory
}) {
  return (
    <nav className="category-nav-sticky">
      <div className="container">
        <div className="category-scroll-container">
          {/* All Items chip */}
          <button
            className={`category-chip ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => onSelectCategory('all')}
          >
            <Grid size={16} />
            <span>All Menu</span>
            <span className="category-chip-count">
              {Object.values(countsByCategory).reduce((a, b) => a + b, 0)}
            </span>
          </button>

          {categories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Coffee;
            const count = countsByCategory[cat.id] || 0;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                className={`category-chip ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <IconComponent size={16} />
                <span>{cat.name}</span>
                <span className="category-chip-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
