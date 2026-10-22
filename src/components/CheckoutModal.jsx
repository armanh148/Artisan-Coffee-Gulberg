import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin, Phone, User, CreditCard, Banknote, Smartphone } from 'lucide-react';

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

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const deliveryFee = orderType === 'Delivery' ? selectedBranch.deliveryFee : 0;
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
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 540 }}>
        {!isOrdered ? (
          <>
            <div style={{ padding: '20px 24px', background: '#006871', borderBottom: '1px solid rgba(89, 182, 205, 0.25)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>Checkout Order</h3>
                <span style={{ fontSize: '0.82rem', color: '#bbf0fa', marginTop: 3, display: 'block' }}>
                  {orderType} from {selectedBranch.name}
                </span>
              </div>
              <button className="modal-close-btn" onClick={onClose} style={{ position: 'static', background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' }}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmitOrder} className="modal-content-pad" style={{ padding: '24px' }}>
              {/* Customer Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e293b', display: 'block', marginBottom: 6 }}>
                    Full Name
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} color="#94a3b8" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Arman Khan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        height: 44,
                        padding: '0 12px 0 38px',
                        borderRadius: 8,
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e293b', display: 'block', marginBottom: 6 }}>
                    Mobile Number (Pakistan)
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} color="#94a3b8" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      required
                      type="tel"
                      placeholder="e.g. 0344 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: '100%',
                        height: 44,
                        padding: '0 12px 0 38px',
                        borderRadius: 8,
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>
                </div>

                {orderType === 'Delivery' && (
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e293b', display: 'block', marginBottom: 6 }}>
                      Complete Delivery Address (Gulberg / Lahore)
                    </label>
                    <div style={{ position: 'relative' }}>
                      <MapPin size={16} color="#94a3b8" style={{ position: 'absolute', left: 12, top: 14 }} />
                      <textarea
                        required
                        placeholder="House / Apartment #, Street name, Block, Gulberg..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{
                          width: '100%',
                          minHeight: 70,
                          padding: '12px 12px 12px 38px',
                          borderRadius: 8,
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.88rem',
                          resize: 'none'
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Methods */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', display: 'block', marginBottom: 10 }}>
                  Select Payment Method:
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 16px',
                      borderRadius: 10,
                      border: '1.5px solid',
                      borderColor: paymentMethod === 'cod' ? '#006871' : '#e2e8f0',
                      backgroundColor: paymentMethod === 'cod' ? 'rgba(0,104,113,0.04)' : '#fff',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                    <Banknote size={20} color="#006871" />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Cash on Delivery / Pick-Up</span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 16px',
                      borderRadius: 10,
                      border: '1.5px solid',
                      borderColor: paymentMethod === 'card' ? '#006871' : '#e2e8f0',
                      backgroundColor: paymentMethod === 'card' ? 'rgba(0,104,113,0.04)' : '#fff',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <CreditCard size={20} color="#006871" />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Credit / Debit Card (Online)</span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 16px',
                      borderRadius: 10,
                      border: '1.5px solid',
                      borderColor: paymentMethod === 'wallet' ? '#006871' : '#e2e8f0',
                      backgroundColor: paymentMethod === 'wallet' ? 'rgba(0,104,113,0.04)' : '#fff',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'wallet'}
                      onChange={() => setPaymentMethod('wallet')}
                    />
                    <Smartphone size={20} color="#006871" />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Easypaisa / JazzCash</span>
                  </label>
                </div>
              </div>

              {/* Order Summary & Submit */}
              <div style={{ background: '#f8fafc', padding: 16, borderRadius: 12, marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748b', marginBottom: 6 }}>
                  <span>Items Total ({cartItems.length})</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748b', marginBottom: 6 }}>
                  <span>Delivery / Handling</span>
                  <span>{orderType === 'Delivery' ? `Rs. ${deliveryFee}` : 'FREE'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748b', marginBottom: 8 }}>
                  <span>Tax (5% GST)</span>
                  <span>Rs. {gst.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem', fontWeight: 800, color: '#1e293b', borderTop: '1px dashed #cbd5e1', paddingTop: 8 }}>
                  <span>Total Amount</span>
                  <span style={{ color: '#006871' }}>Rs. {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="cart-checkout-btn"
                style={{ width: '100%', marginTop: 0 }}
              >
                <span>Confirm & Place Order</span>
                <span>Rs. {grandTotal.toLocaleString()}</span>
              </button>
            </form>
          </>
        ) : (
          /* Order Confirmation Screen */
          <div className="modal-content-pad" style={{ textAlign: 'center', padding: '40px 24px' }}>
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}
            >
              <CheckCircle2 size={42} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#14181b', marginBottom: 8 }}>
              Order Confirmed!
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: 20 }}>
              Shukriya {name}! Your order has been dispatched to <strong>{selectedBranch.name}</strong> kitchen.
            </p>

            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: 12, border: '1px solid #e2e8f0', marginBottom: 24, textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Order Reference:</span>
                <strong style={{ color: '#006871', fontSize: '0.95rem' }}>{orderId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Fulfillment:</span>
                <strong style={{ color: '#1e293b', fontSize: '0.85rem' }}>{orderType}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Estimated Time:</span>
                <strong style={{ color: '#006871', fontSize: '0.85rem' }}>
                  {orderType === 'Delivery' ? selectedBranch.eta : '15 mins'}
                </strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Payment Status:</span>
                <strong style={{ color: '#10b981', fontSize: '0.85rem' }}>Pending on Delivery</strong>
              </div>
            </div>

            <button
              className="hero-btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={onClose}
            >
              Back to Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
