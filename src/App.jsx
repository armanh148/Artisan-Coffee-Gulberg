import React, { useState, useMemo } from 'react';
import KopagNavbar from './components/kopag/KopagNavbar';
import KopagHeroSection from './components/kopag/KopagHeroSection';
import KopagMenuSection from './components/kopag/KopagMenuSection';
import KopagSplitBanner from './components/kopag/KopagSplitBanner';
import KopagAboutSection from './components/kopag/KopagAboutSection';
import KopagShopsSection from './components/kopag/KopagShopsSection';
import KopagContactSection from './components/kopag/KopagContactSection';
import KopagFaqSection from './components/kopag/KopagFaqSection';
import KopagFooter from './components/kopag/KopagFooter';

import ReservationModal from './components/taraq/ReservationModal';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import LocationModal from './components/LocationModal';
import CheckoutModal from './components/CheckoutModal';

import { branches } from './data/branches';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [orderType, setOrderType] = useState('Delivery');
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  }, [cartItems]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Cart Handlers
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const idx = prev.findIndex(
        (i) =>
          i.productId === item.productId &&
          i.size === item.size &&
          i.milk === item.milk &&
          i.sugar === item.sugar &&
          JSON.stringify(i.addons) === JSON.stringify(item.addons)
      );
      if (idx > -1) {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          quantity: next[idx].quantity + item.quantity,
          totalPrice: next[idx].unitPrice * (next[idx].quantity + item.quantity)
        };
        return next;
      }
      return [...prev, item];
    });
    showToast(`Added ${item.name} to order`);
  };

  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index] = {
        ...next[index],
        quantity: newQty,
        totalPrice: next[index].unitPrice * newQty
      };
      return next;
    });
  };

  const handleRemoveItem = (index) => {
    const it = cartItems[index];
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    if (it) showToast(`Removed ${it.name}`);
  };

  return (
    <div className="kopag-theme-wrapper">
      {/* 1. Floating Capsule Navbar (with Menu, About, Outlets, Contact, FAQs, Reserve, Cart) */}
      <KopagNavbar
        cartCount={cartCount}
        selectedBranch={selectedBranch}
        onOpenLocation={() => setIsLocationModalOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReserve={() => setIsReservationOpen(true)}
        onOpenMenu={() => scrollTo('explore-menu-section')}
        onOpenAbout={() => scrollTo('about-section')}
        onOpenShops={() => scrollTo('visit-shops-section')}
        onOpenContact={() => scrollTo('contact-section')}
        onOpenFaq={() => scrollTo('faq-section')}
      />

      <main className="kopag-main-content">
        {/* 2. Hero Section: Category Ticker, "Coffee Break" Title, Center Latte Visual & Roastery Stamp */}
        <KopagHeroSection
          selectedBranch={selectedBranch}
          onOpenShop={() => scrollTo('explore-menu-section')}
          onOpenReserve={() => setIsReservationOpen(true)}
          onOpenLocations={() => setIsLocationModalOpen(true)}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            scrollTo('explore-menu-section');
          }}
        />

        {/* 3. "Explore Our Menu /2026" Section with 5-Column Sage Rounded Containers & Dropdown Filter */}
        <KopagMenuSection
          onSelectProduct={(p) => setSelectedProduct(p)}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* 4. Split Promo Banner: Left Photo & Order CTA + Right Yellow "USE THE BEST COFFEE" */}
        <KopagSplitBanner
          onOpenMenu={() => scrollTo('explore-menu-section')}
          onOpenReserve={() => setIsReservationOpen(true)}
        />

        {/* 5. "The Artisan Story" (About Section: Heritage, 4 Craft Pillars, Sourcing & SCA Stats) */}
        <KopagAboutSection
          onOpenMenu={() => scrollTo('explore-menu-section')}
          onOpenReserve={() => setIsReservationOpen(true)}
        />

        {/* 6. "Visit shops" Section with 4-Column Storefronts & Floating Yellow Arrow */}
        <KopagShopsSection
          selectedBranch={selectedBranch}
          onSelectBranch={(b) => {
            setSelectedBranch(b);
            showToast(`Switched outlet to ${b.name}`);
          }}
          onOpenLocation={() => setIsLocationModalOpen(true)}
        />

        {/* 7. "Connect With Our Roastery" (Contact Section: Direct Touchpoints, WhatsApp & Interactive Form) */}
        <KopagContactSection selectedBranch={selectedBranch} />

        {/* 8. "Frequently Asked Questions" Accordion Section */}
        <KopagFaqSection
          onOpenReserve={() => setIsReservationOpen(true)}
          onOpenLocation={() => setIsLocationModalOpen(true)}
        />
      </main>

      {/* 9. Monumental Condensed "ARTISAN." Footer */}
      <KopagFooter
        onOpenMenu={() => scrollTo('explore-menu-section')}
        onOpenShop={() => scrollTo('explore-menu-section')}
        onOpenAbout={() => scrollTo('about-section')}
        onOpenContact={() => scrollTo('contact-section')}
        onOpenReserve={() => setIsReservationOpen(true)}
        onOpenLocation={() => setIsLocationModalOpen(true)}
      />

      {/* Quick Mobile Floating Cart Button */}
      {cartCount > 0 && (
        <button
          type="button"
          className="kopag-floating-cart-pill"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={18} />
          <span>View Order ({cartCount} &bull; Rs. {cartTotal.toLocaleString()})</span>
        </button>
      )}

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onConfirm={(res) => {
          showToast(`Table reserved for ${res.name} on ${res.date}!`);
        }}
      />

      {/* Product Customizer Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        cartTotal={cartTotal}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        selectedBranch={selectedBranch}
        orderType={orderType}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
      />

      {/* Branch & Delivery Selector Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        selectedBranch={selectedBranch}
        onSelectBranch={(b) => {
          setSelectedBranch(b);
          showToast(`Switched outlet to ${b.name}`);
        }}
        orderType={orderType}
        onSelectOrderType={(t) => {
          setOrderType(t);
          showToast(`Order type set to ${t}`);
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        selectedBranch={selectedBranch}
        orderType={orderType}
        onClearCart={() => setCartItems([])}
      />

      {/* Toast Notice */}
      {toast && (
        <div className="toast-notice kopag-toast">
          <CheckCircle2 size={18} color="#0D382B" />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
