import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { milkOptions, sugarOptions, addOnOptions } from '../data/menuData';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(() =>
    product?.sizes ? product.sizes[0] : { name: 'Standard', price: product?.price || 0 }
  );
  const [selectedMilk, setSelectedMilk] = useState(milkOptions[0]);
  const [selectedSugar, setSelectedSugar] = useState(sugarOptions[0]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Reset or setup when product changes
  useEffect(() => {
    if (!product) return;
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize({ name: 'Standard', price: product.price || 0 });
    }
    setSelectedMilk(milkOptions[0]);
    setSelectedSugar(sugarOptions[0]);
    setSelectedAddons([]);
    setSpecialInstructions('');
    setQuantity(1);
  }, [product]);

  // Close on Escape key press
  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  // Toggle addons
  const handleToggleAddon = (addon) => {
    if (selectedAddons.find((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  if (!product) return null;

  // Calculate dynamic unit price
  const basePrice = selectedSize?.price || product.price || 0;
  const milkExtra = (product.canCustomizeMilk !== false && selectedMilk) 
    ? (selectedMilk.price ?? selectedMilk.extraPrice ?? 0) 
    : 0;
  const addonsTotal = selectedAddons.reduce((sum, item) => sum + (item.price || 0), 0);
  const unitPrice = basePrice + milkExtra + addonsTotal;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    onAddToCart({
      productId: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize.name,
      milk: product.canCustomizeMilk !== false ? selectedMilk.name : null,
      sugar: product.canCustomizeSugar !== false ? selectedSugar.name : null,
      addons: selectedAddons.map((a) => a.name),
      specialInstructions: specialInstructions.trim(),
      unitPrice,
      totalPrice,
      quantity
    });
    onClose();
  };

  return (
    <div className="modal-backdrop kopag-product-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog kopag-product-dialog" onClick={(e) => e.stopPropagation()}>
        {/* 1. Modal Hero Media Header */}
        <div className="kopag-product-media">
          <img src={product.image} alt={product.name} className="kopag-product-img" />
          <div className="kopag-product-media-overlay" />

          {/* Top Floating Badges & Close Button */}
          <div className="kopag-product-media-top">
            <div className="kopag-product-badges">
              <span className="kopag-badge-capsule category">
                {product.categoryName || 'ARTISAN GULBERG'}
              </span>
              {product.badge && (
                <span className="kopag-badge-capsule highlight">
                  {product.badge}
                </span>
              )}
            </div>

            <button
              className="kopag-product-close-btn"
              onClick={onClose}
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Floating Price Pill */}
          <div className="kopag-product-price-chip">
            <span className="chip-label">Unit Price</span>
            <span className="chip-price">Rs. {unitPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* 2. Scrollable Body Content */}
        <div className="kopag-product-content">
          {/* Header Info */}
          <div className="kopag-product-header">
            <div className="kopag-product-kicker">
              <Sparkles size={13} />
              <span>ARTISAN COFFEE ROASTERS &middot; LAHORE</span>
            </div>
            <h2 className="kopag-product-title">{product.name}</h2>
            {product.description && (
              <p className="kopag-product-desc">{product.description}</p>
            )}

            {/* Feature Pills */}
            <div className="kopag-product-features">
              <span className="kopag-feature-tag">☕ Specialty Roast</span>
              <span className="kopag-feature-tag">🌿 100% Arabica</span>
              {product.hasVariation && <span className="kopag-feature-tag">✨ Made to Order</span>}
            </div>
          </div>

          {/* Customization Options */}
          <div className="kopag-options-container">
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 1 && (
              <div className="kopag-option-section">
                <div className="kopag-option-header">
                  <span className="kopag-option-title">Select Size</span>
                  <span className="kopag-option-badge required">Required</span>
                </div>
                <div className="kopag-options-grid">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize.name === size.name;
                    return (
                      <div
                        key={size.name}
                        className={`kopag-choice-card ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => setSelectedSize(size)}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="choice-left">
                          <div className={`kopag-radio-disc ${isSelected ? 'active' : ''}`}>
                            {isSelected && <div className="disc-dot" />}
                          </div>
                          <span className="choice-name">{size.name}</span>
                        </div>
                        <span className="choice-price">Rs. {size.price.toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Milk Customization */}
            {product.canCustomizeMilk !== false && (
              <div className="kopag-option-section">
                <div className="kopag-option-header">
                  <span className="kopag-option-title">Milk Selection</span>
                  <span className="kopag-option-badge choice">Choose 1</span>
                </div>
                <div className="kopag-options-grid">
                  {milkOptions.map((milk) => {
                    const isSelected = selectedMilk.id === milk.id;
                    const extra = milk.price ?? milk.extraPrice ?? 0;
                    return (
                      <div
                        key={milk.id}
                        className={`kopag-choice-card ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => setSelectedMilk(milk)}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="choice-left">
                          <div className={`kopag-radio-disc ${isSelected ? 'active' : ''}`}>
                            {isSelected && <div className="disc-dot" />}
                          </div>
                          <span className="choice-name">{milk.name}</span>
                        </div>
                        <span className={`choice-price ${extra === 0 ? 'is-free' : ''}`}>
                          {extra > 0 ? `+Rs. ${extra}` : 'Included'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sweetness Customization */}
            {product.canCustomizeSugar !== false && (
              <div className="kopag-option-section">
                <div className="kopag-option-header">
                  <span className="kopag-option-title">Sweetness Level</span>
                  <span className="kopag-option-badge optional">Customize</span>
                </div>
                <div className="kopag-options-grid">
                  {sugarOptions.map((sugar) => {
                    const isSelected = selectedSugar.id === sugar.id;
                    return (
                      <div
                        key={sugar.id}
                        className={`kopag-choice-card ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => setSelectedSugar(sugar)}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="choice-left">
                          <div className={`kopag-radio-disc ${isSelected ? 'active' : ''}`}>
                            {isSelected && <div className="disc-dot" />}
                          </div>
                          <span className="choice-name">{sugar.name}</span>
                        </div>
                        <span className="choice-price is-free">Free</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Barista Add-ons */}
            <div className="kopag-option-section">
              <div className="kopag-option-header">
                <span className="kopag-option-title">Barista Add-ons &amp; Syrups</span>
                <span className="kopag-option-badge optional">Optional</span>
              </div>
              <div className="kopag-options-grid">
                {addOnOptions.map((addon) => {
                  const isChecked = Boolean(selectedAddons.find((a) => a.id === addon.id));
                  return (
                    <div
                      key={addon.id}
                      className={`kopag-choice-card ${isChecked ? 'is-selected' : ''}`}
                      onClick={() => handleToggleAddon(addon)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="choice-left">
                        <div className={`kopag-check-box ${isChecked ? 'active' : ''}`}>
                          {isChecked && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="choice-name">{addon.name}</span>
                      </div>
                      <span className="choice-price">+Rs. {addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Barista Notes */}
            <div className="kopag-option-section no-border">
              <div className="kopag-option-header">
                <span className="kopag-option-title">Special Barista Instructions</span>
                <span className="kopag-option-badge optional">Optional</span>
              </div>
              <textarea
                className="kopag-modal-textarea"
                placeholder="e.g. Extra hot, separate lid, less ice, oat milk froth on side..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* 3. Sticky Action Footer */}
        <div className="kopag-modal-footer">
          <div className="kopag-stepper-wrap">
            <button
              type="button"
              className="kopag-stepper-btn"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus size={15} />
            </button>
            <span className="kopag-stepper-qty">{quantity}</span>
            <button
              type="button"
              className="kopag-stepper-btn"
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Increase quantity"
            >
              <Plus size={15} />
            </button>
          </div>

          <button
            type="button"
            className="kopag-modal-submit-btn"
            onClick={handleConfirm}
          >
            <div className="submit-label-wrap">
              <ShoppingBag size={18} />
              <span>Add To Order</span>
            </div>
            <div className="submit-total-pill">
              <span>Rs. {totalPrice.toLocaleString()}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
