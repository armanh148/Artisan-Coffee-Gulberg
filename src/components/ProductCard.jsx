import React from 'react';
import { Plus, Heart } from 'lucide-react';

export default function ProductCard({
  product,
  onSelectProduct,
  onQuickAdd,
  isFavorite,
  onToggleFavorite
}) {
  return (
    <div className="product-card">
      <div className="product-image-wrap" onClick={() => onSelectProduct(product)} style={{ cursor: 'pointer' }}>
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button
          className={`product-fav-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
        >
          <Heart size={16} fill={isFavorite ? '#ef4444' : 'none'} color={isFavorite ? '#ef4444' : 'currentColor'} />
        </button>
      </div>

      <div className="product-body">
        <h3
          className="product-title"
          onClick={() => onSelectProduct(product)}
          style={{ cursor: 'pointer' }}
        >
          {product.name}
        </h3>
        <p className="product-desc">{product.description}</p>

        <div className="product-footer">
          <div className="product-price-wrap">
            <span className="product-price-label">Price</span>
            <span className="product-price">
              {product.hasVariation ? `from Rs. ${product.price.toLocaleString()}` : `Rs. ${product.price.toLocaleString()}`}
            </span>
          </div>

          <button
            className="product-add-btn"
            onClick={() => onSelectProduct(product)}
          >
            <Plus size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
