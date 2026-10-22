import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles, MapPin } from 'lucide-react';

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
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const deliveryFee = orderType === 'Delivery' ? (subtotal > 0 ? selectedBranch.deliveryFee : 0) : 0;
  const gst = Math.round(subtotal * 0.05); // 5% PRA/SRB tax
  const grandTotal = subtotal + deliveryFee + gst;

  return (
    <div className="cart-drawer-backdrop" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <ShoppingBag size={22} color="#006871" />
            <span>Your Coffee Order</span>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
              ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose} style={{ position: 'static', background: '#e2e8f0', color: '#1e293b' }}>
            <X size={18} />
          </button>
        </div>

        {/* Branch Info Banner */}
        <div style={{ background: '#f0fdfa', borderBottom: '1px solid #ccfbf1', padding: '10px 24px', fontSize: '0.82rem', color: '#0f766e', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={15} />
          <span>Fulfilling from: <strong>{selectedBranch.name}</strong> ({orderType})</span>
        </div>

        {/* Items List */}
        <div className="cart-drawer-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">
                <ShoppingBag size={40} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '8px' }}>Your Cart is Empty</h3>
              <p style={{ fontSize: '0.88rem', maxWidth: '280px', marginBottom: '20px' }}>
                Explore our signature Spanish Lattes, cold brews, artisanal chocolates and frappes!
              </p>
              <button
                className="hero-btn-primary"
                onClick={onClose}
                style={{ fontSize: '0.88rem', padding: '10px 20px' }}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.productId}-${index}`} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span className="cart-item-name">{item.name}</span>
                    <button
                      onClick={() => onRemoveItem(index)}
                      style={{ color: '#94a3b8', padding: 4 }}
                      title="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <div className="cart-item-mods">
                    <span>{item.size}</span>
                    {item.milk && <span> • {item.milk}</span>}
                    {item.sugar && <span> • {item.sugar}</span>}
                    {item.addons && item.addons.length > 0 && (
                      <div style={{ color: '#006871', marginTop: 2 }}>
                        + {item.addons.join(', ')}
                      </div>
                    )}
                    {item.specialInstructions && (
                      <div style={{ fontStyle: 'italic', color: '#64748b', marginTop: 2 }}>
                        Note: "{item.specialInstructions}"
                      </div>
                    )}
                  </div>

                  <div className="cart-item-price-row">
                    <span className="cart-item-price">Rs. {item.totalPrice.toLocaleString()}</span>
                    <div className="quantity-stepper" style={{ transform: 'scale(0.85)', transformOrigin: 'right center' }}>
                      <button
                        className="stepper-btn"
                        onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="stepper-value">{item.quantity}</span>
                      <button
                        className="stepper-btn"
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Bill Breakdown */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="bill-row">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="bill-row">
              <span>{orderType === 'Delivery' ? 'Delivery Fee' : 'Pick-Up Fee'}</span>
              <span>{orderType === 'Delivery' ? `Rs. ${deliveryFee}` : 'FREE'}</span>
            </div>
            <div className="bill-row">
              <span>GST / Sales Tax (5%)</span>
              <span>Rs. {gst.toLocaleString()}</span>
            </div>
            <div className="bill-total-row">
              <span>Total Payable</span>
              <span style={{ color: '#006871' }}>Rs. {grandTotal.toLocaleString()}</span>
            </div>

            <button className="cart-checkout-btn" onClick={handleProceed}>
              <span>Proceed to Checkout</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span>Rs. {grandTotal.toLocaleString()}</span>
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
