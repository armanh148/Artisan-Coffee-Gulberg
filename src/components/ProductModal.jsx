import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, ShoppingBag } from 'lucide-react';
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
  const milkExtra = (product.canCustomizeMilk !== false && selectedMilk) ? selectedMilk.extraPrice : 0;
  const addonsTotal = selectedAddons.reduce((sum, item) => sum + item.price, 0);
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
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Image Header */}
        <div className="modal-header-image">
          <img src={product.image} alt={product.name} className="modal-header-img" />
          <button className="modal-close-btn" onClick={onClose} title="Close">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-content-pad">
          <h2 className="modal-title">{product.name}</h2>
          <p className="modal-desc">{product.description}</p>

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 1 && (
            <div className="modal-option-group">
              <div className="modal-option-title">
                <span>Select Size</span>
                <span className="modal-option-subtitle">Required</span>
              </div>
              <div className="modal-radio-grid">
                {product.sizes.map((size) => (
                  <div
                    key={size.name}
                    className={`modal-radio-item ${selectedSize.name === size.name ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <div className="modal-radio-label">
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          border: '2px solid #006871',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: selectedSize.name === size.name ? '#006871' : 'transparent'
                        }}
                      >
                        {selectedSize.name === size.name && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
                      </div>
                      <span>{size.name}</span>
                    </div>
                    <span className="modal-radio-price">Rs. {size.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Milk Customization */}
          {product.canCustomizeMilk !== false && (
            <div className="modal-option-group">
              <div className="modal-option-title">
                <span>Milk Options</span>
                <span className="modal-option-subtitle">Choose 1</span>
              </div>
              <div className="modal-radio-grid">
                {milkOptions.map((milk) => (
                  <div
                    key={milk.id}
                    className={`modal-radio-item ${selectedMilk.id === milk.id ? 'selected' : ''}`}
                    onClick={() => setSelectedMilk(milk)}
                  >
                    <div className="modal-radio-label">
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          border: '2px solid #006871',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: selectedMilk.id === milk.id ? '#006871' : 'transparent'
                        }}
                      >
                        {selectedMilk.id === milk.id && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
                      </div>
                      <span>{milk.name}</span>
                    </div>
                    <span className="modal-radio-price">
                      {milk.extraPrice > 0 ? `+Rs. ${milk.extraPrice}` : 'Included'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sweetness Customization */}
          {product.canCustomizeSugar !== false && (
            <div className="modal-option-group">
              <div className="modal-option-title">
                <span>Sweetness Level</span>
                <span className="modal-option-subtitle">Customize</span>
              </div>
              <div className="modal-radio-grid">
                {sugarOptions.map((sugar) => (
                  <div
                    key={sugar.id}
                    className={`modal-radio-item ${selectedSugar.id === sugar.id ? 'selected' : ''}`}
                    onClick={() => setSelectedSugar(sugar)}
                  >
                    <div className="modal-radio-label">
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          border: '2px solid #006871',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: selectedSugar.id === sugar.id ? '#006871' : 'transparent'
                        }}
                      >
                        {selectedSugar.id === sugar.id && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
                      </div>
                      <span>{sugar.name}</span>
                    </div>
                    <span className="modal-radio-price">Free</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add-ons */}
          <div className="modal-option-group">
            <div className="modal-option-title">
              <span>Barista Add-ons & Flavors</span>
              <span className="modal-option-subtitle">Optional</span>
            </div>
            <div className="modal-radio-grid">
              {addOnOptions.map((addon) => {
                const isChecked = Boolean(selectedAddons.find((a) => a.id === addon.id));
                return (
                  <div
                    key={addon.id}
                    className={`modal-radio-item ${isChecked ? 'selected' : ''}`}
                    onClick={() => handleToggleAddon(addon)}
                  >
                    <div className="modal-radio-label">
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: 4,
                          border: '2px solid #006871',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: isChecked ? '#006871' : 'transparent'
                        }}
                      >
                        {isChecked && <Check size={12} color="#fff" />}
                      </div>
                      <span>{addon.name}</span>
                    </div>
                    <span className="modal-radio-price">+Rs. {addon.price}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Barista Notes */}
          <div className="modal-option-group" style={{ borderBottom: 'none', marginBottom: 0 }}>
            <div className="modal-option-title">
              <span>Special Instructions for Barista</span>
              <span className="modal-option-subtitle">Optional</span>
            </div>
            <textarea
              className="modal-textarea"
              placeholder="e.g. Extra hot, separate lid, less ice..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
            />
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="modal-footer-sticky">
          <div className="quantity-stepper">
            <button
              className="stepper-btn"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <span className="stepper-value">{quantity}</span>
            <button
              className="stepper-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus size={16} />
            </button>
          </div>

          <button className="modal-add-cart-submit" onClick={handleConfirm}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <ShoppingBag size={18} /> Add To Order
            </span>
            <span>Rs. {totalPrice.toLocaleString()}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
