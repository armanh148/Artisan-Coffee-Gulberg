import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin, Phone, User, CreditCard, Banknote, Smartphone, Sparkles, ArrowRight } from 'lucide-react';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  selectedBranch,
  orderType,
  onClearCart
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, setOrderId] = useState('');

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
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + deliveryFee + gst;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const generatedId = 'ACR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setIsOrdered(true);
    onClearCart();
  };

  return (
    <div className="modal-backdrop kopag-checkout-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog kopag-checkout-dialog" onClick={(e) => e.stopPropagation()}>
        {!isOrdered ? (
          <>
            {/* 1. Header Banner */}
            <div className="kopag-checkout-header">
              <div className="header-text-group">
                <div className="header-kicker">
                  <Sparkles size={12} />
                  <span>ARTISAN ROASTERY &middot; GULBERG LAHORE</span>
                </div>
                <h3 className="header-title">Checkout Order</h3>
                <span className="header-branch-tag">
                  {orderType} from {selectedBranch.name}
                </span>
              </div>
              <button
                type="button"
                className="kopag-checkout-close-btn"
                onClick={onClose}
                title="Close (Esc)"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* 2. Form Content */}
            <form onSubmit={handleSubmitOrder} className="kopag-checkout-content">
              {/* Customer Contact Information */}
              <div className="checkout-section">
                <div className="section-label-bar">
                  <span className="section-title">Contact &amp; Delivery Details</span>
                  <span className="section-step">Step 1 of 2</span>
                </div>

                <div className="fields-stack">
                  {/* Name */}
                  <div className="form-field-group">
                    <label className="field-label">Full Name</label>
                    <div className="input-with-icon">
                      <User size={16} className="field-icon" />
                      <input
                        required
                        type="text"
                        placeholder="e.g. Arman Khan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="kopag-input"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="form-field-group">
                    <label className="field-label">Mobile Number (Pakistan)</label>
                    <div className="input-with-icon">
                      <Phone size={16} className="field-icon" />
                      <input
                        required
                        type="tel"
                        placeholder="e.g. 0344 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="kopag-input"
                      />
                    </div>
                  </div>

                  {/* Address (If Delivery) */}
                  {orderType === 'Delivery' && (
                    <div className="form-field-group">
                      <label className="field-label">Delivery Address (Gulberg / Lahore)</label>
                      <div className="input-with-icon">
                        <MapPin size={16} className="field-icon top-align" />
                        <textarea
                          required
                          placeholder="House / Apartment #, Street name, Block, Gulberg..."
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="kopag-textarea"
                          rows={2}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="checkout-section">
                <div className="section-label-bar">
                  <span className="section-title">Select Payment Method</span>
                  <span className="section-step">Step 2 of 2</span>
                </div>

                <div className="payment-options-grid">
                  {/* COD */}
                  <div
                    className={`kopag-pay-card ${paymentMethod === 'cod' ? 'is-selected' : ''}`}
                    onClick={() => setPaymentMethod('cod')}
                  >
                    <div className="pay-left">
                      <div className={`kopag-pay-radio ${paymentMethod === 'cod' ? 'active' : ''}`}>
                        {paymentMethod === 'cod' && <div className="radio-dot" />}
                      </div>
                      <div className="pay-icon-capsule">
                        <Banknote size={18} />
                      </div>
                      <div className="pay-info">
                        <span className="pay-name">Cash on Delivery / Pick-Up</span>
                        <span className="pay-desc">Pay upon receiving your order</span>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`kopag-pay-card ${paymentMethod === 'card' ? 'is-selected' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <div className="pay-left">
                      <div className={`kopag-pay-radio ${paymentMethod === 'card' ? 'active' : ''}`}>
                        {paymentMethod === 'card' && <div className="radio-dot" />}
                      </div>
                      <div className="pay-icon-capsule">
                        <CreditCard size={18} />
                      </div>
                      <div className="pay-info">
                        <span className="pay-name">Credit / Debit Card (Online)</span>
                        <span className="pay-desc">Visa, Mastercard, PayPak</span>
                      </div>
                    </div>
                  </div>

                  {/* Wallet */}
                  <div
                    className={`kopag-pay-card ${paymentMethod === 'wallet' ? 'is-selected' : ''}`}
                    onClick={() => setPaymentMethod('wallet')}
                  >
                    <div className="pay-left">
                      <div className={`kopag-pay-radio ${paymentMethod === 'wallet' ? 'active' : ''}`}>
                        {paymentMethod === 'wallet' && <div className="radio-dot" />}
                      </div>
                      <div className="pay-icon-capsule">
                        <Smartphone size={18} />
                      </div>
                      <div className="pay-info">
                        <span className="pay-name">Easypaisa / JazzCash</span>
                        <span className="pay-desc">Instant mobile wallet checkout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Bill Summary Box */}
              <div className="kopag-checkout-receipt">
                <div className="receipt-row">
                  <span>Items Total ({totalItemsCount})</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="receipt-row">
                  <span>Delivery / Handling</span>
                  <span className={deliveryFee === 0 ? 'is-free' : ''}>
                    {orderType === 'Delivery' ? `Rs. ${deliveryFee}` : 'FREE'}
                  </span>
                </div>
                <div className="receipt-row">
                  <span>Tax (5% GST)</span>
                  <span>Rs. {gst.toLocaleString()}</span>
                </div>
                <div className="receipt-total-row">
                  <span className="total-title">Total Amount</span>
                  <span className="total-amount">Rs. {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="kopag-order-confirm-btn"
              >
                <div className="confirm-btn-left">
                  <ShieldCheck size={18} />
                  <span>Confirm &amp; Place Order</span>
                </div>
                <div className="confirm-btn-pill">
                  <span>Rs. {grandTotal.toLocaleString()}</span>
                  <ArrowRight size={15} />
                </div>
              </button>
            </form>
          </>
        ) : (
          /* Order Success Confirmation State */
          <div className="kopag-success-container">
            <div className="success-badge-glow">
              <CheckCircle2 size={46} strokeWidth={2.5} />
            </div>

            <h3 className="success-heading">ORDER CONFIRMED!</h3>
            <p className="success-subtext">
              Shukriya <strong>{name}</strong>! Your order has been dispatched to <strong>{selectedBranch.name}</strong> roastery bar.
            </p>

            <div className="success-receipt-card">
              <div className="success-detail-row">
                <span className="detail-label">Order Reference:</span>
                <span className="detail-value id-badge">{orderId}</span>
              </div>
              <div className="success-detail-row">
                <span className="detail-label">Fulfillment:</span>
                <span className="detail-value">{orderType}</span>
              </div>
              <div className="success-detail-row">
                <span className="detail-label">Estimated Time:</span>
                <span className="detail-value highlight">
                  {orderType === 'Delivery' ? selectedBranch.eta : '15 mins'}
                </span>
              </div>
              <div className="success-detail-row">
                <span className="detail-label">Payment:</span>
                <span className="detail-value status">Pending on {orderType}</span>
              </div>
            </div>

            <button
              type="button"
              className="kopag-success-done-btn"
              onClick={onClose}
            >
              <span>Done &bull; Back to Menu</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
