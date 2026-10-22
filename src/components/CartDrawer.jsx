import React, { useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles, MapPin, Coffee } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onOpenCheckout,
  selectedBranch,
  orderType
}) {
  const handleProceed = onProceedToCheckout || onOpenCheckout;

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalItemsCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const deliveryFee = orderType === 'Delivery' ? (subtotal > 0 ? selectedBranch.deliveryFee : 0) : 0;
  const gst = Math.round(subtotal * 0.05); // 5% PRA/SRB tax
  const grandTotal = subtotal + deliveryFee + gst;

  return (
    <div className="cart-drawer-backdrop kopag-drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cart-drawer kopag-cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* 1. Header */}
        <div className="kopag-drawer-header">
          <div className="kopag-drawer-title-group">
            <div className="kopag-drawer-icon-capsule">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 className="kopag-drawer-title">Your Coffee Order</h3>
              <span className="kopag-drawer-count-badge">
                {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} in basket
              </span>
            </div>
          </div>
          <button
            type="button"
            className="kopag-drawer-close-btn"
            onClick={onClose}
            title="Close Drawer (Esc)"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* 2. Outlet & Fulfillment Info Banner */}
        <div className="kopag-drawer-outlet-banner">
          <div className="outlet-icon-dot">
            <MapPin size={14} />
          </div>
          <div className="outlet-text-wrap">
            <span className="outlet-prefix">Fulfilling from:</span>
            <span className="outlet-branch">{selectedBranch.name}</span>
            <span className="outlet-type-pill">{orderType}</span>
          </div>
        </div>

        {/* 3. Items List */}
        <div className="cart-drawer-items kopag-drawer-items">
          {cartItems.length === 0 ? (
            <div className="kopag-drawer-empty">
              <div className="empty-icon-wrap">
                <Coffee size={42} />
              </div>
              <h3 className="empty-title">Your Cart is Empty</h3>
              <p className="empty-desc">
                Explore our signature Spanish Lattes, cold brews, artisanal chocolates and frappes!
              </p>
              <button
                type="button"
                className="kopag-drawer-browse-btn"
                onClick={onClose}
              >
                <span>Browse Menu</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.productId}-${index}`} className="kopag-cart-item-card">
                <div className="item-img-wrap">
                  <img src={item.image} alt={item.name} className="item-img" />
                </div>
                <div className="item-body">
                  <div className="item-top-row">
                    <span className="item-name">{item.name}</span>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(index)}
                      className="item-trash-btn"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  {/* Modifiers Pill Strip */}
                  <div className="item-mods-wrap">
                    {item.size && <span className="mod-pill size">{item.size}</span>}
                    {item.milk && <span className="mod-pill milk">{item.milk}</span>}
                    {item.sugar && <span className="mod-pill sugar">{item.sugar}</span>}
                    {item.addons && item.addons.length > 0 && (
                      <span className="mod-pill addons">+ {item.addons.join(', ')}</span>
                    )}
                    {item.specialInstructions && (
                      <div className="item-special-note">
                        "{item.specialInstructions}"
                      </div>
                    )}
                  </div>

                  {/* Price & Stepper Row */}
                  <div className="item-bottom-row">
                    <span className="item-price">
                      <span className="curr">Rs.</span> {item.totalPrice.toLocaleString()}
                    </span>

                    <div className="kopag-item-stepper">
                      <button
                        type="button"
                        className="item-stepper-btn"
                        onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="item-stepper-val">{item.quantity}</span>
                      <button
                        type="button"
                        className="item-stepper-btn"
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 4. Footer with Bill Breakdown */}
        {cartItems.length > 0 && (
          <div className="kopag-drawer-footer">
            <div className="kopag-receipt-card">
              <div className="bill-line">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="bill-line">
                <span>{orderType === 'Delivery' ? 'Delivery Fee' : 'Pick-Up Handling'}</span>
                <span className={deliveryFee === 0 ? 'is-free' : ''}>
                  {orderType === 'Delivery' ? `Rs. ${deliveryFee}` : 'FREE'}
                </span>
              </div>
              <div className="bill-line">
                <span>GST / Tax (5%)</span>
                <span>Rs. {gst.toLocaleString()}</span>
              </div>
              <div className="bill-total-line">
                <span className="total-label">Total Payable</span>
                <span className="total-val">Rs. {grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="button"
              className="kopag-checkout-cta-btn"
              onClick={handleProceed}
            >
              <div className="cta-left">
                <Sparkles size={16} />
                <span>Proceed to Checkout</span>
              </div>
              <div className="cta-price-pill">
                <span>Rs. {grandTotal.toLocaleString()}</span>
                <ArrowRight size={15} />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
