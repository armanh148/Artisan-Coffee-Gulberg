import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Coffee, ShieldCheck, Heart } from 'lucide-react';
import { branches } from '../../data/branches';

export default function TaraqFooter({
  onOpenMenu,
  onOpenShop,
  onOpenAbout,
  onOpenReserve,
  onOpenLocation
}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="taraq-footer artisan-footer">
      <div className="taraq-container">
        {/* Top 4 Columns: Brand/About, Outlets & Branches, Menu Highlights, Newsletter */}
        <div className="taraq-footer-top-grid artisan-footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <span className="footer-brand-title">ARTISAN</span>
              <span className="footer-brand-sub">COFFEE ROASTER</span>
            </div>
            <p className="footer-brand-desc">
              Pakistan&rsquo;s premier specialty coffee roastery and lounge. Serving freshly roasted single-origin coffees, handcrafted chocolates, and artisan beverages daily from 08:00 AM to 02:00 AM.
            </p>
            <div className="footer-phone-callout">
              <Phone size={15} className="phone-icon" />
              <a href="tel:+923442731441" className="phone-link">+92 344 2731441</a>
            </div>
          </div>

          {/* Column 2: Branches & Outlets */}
          <div className="footer-col">
            <h5 className="footer-col-title">Our Outlets</h5>
            <ul className="footer-links-list branch-list">
              {branches.map((b) => (
                <li key={b.id} className="footer-branch-item">
                  <div className="branch-item-name">{b.name}</div>
                  <div className="branch-item-addr">{b.address}</div>
                  <div className="branch-item-time">{b.timings}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Menu Categories */}
          <div className="footer-col">
            <h5 className="footer-col-title">Explore Catalog</h5>
            <ul className="footer-links-list">
              <li><button className="footer-link-btn" onClick={onOpenMenu}>Artisan Signature</button></li>
              <li><button className="footer-link-btn" onClick={onOpenMenu}>Essential Espresso &amp; Lattes</button></li>
              <li><button className="footer-link-btn" onClick={onOpenMenu}>Handcrafted Chocolates</button></li>
              <li><button className="footer-link-btn" onClick={onOpenMenu}>Specialty Matcha</button></li>
              <li><button className="footer-link-btn" onClick={onOpenMenu}>Chillers &amp; Mojitos</button></li>
              <li><button className="footer-link-btn" onClick={onOpenMenu}>Frappuccinos &amp; Shakes</button></li>
              <li><button className="footer-link-btn" onClick={onOpenReserve}>Reserve Meeting Room</button></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Order */}
          <div className="footer-col footer-newsletter-col">
            <h5 className="footer-col-title">Stay Connected</h5>
            <p className="newsletter-text">
              Subscribe for private tasting invitations, secret roastery drops, and seasonal drink releases.
            </p>
            <form onSubmit={handleSubscribe} className="taraq-newsletter-form">
              <div className="taraq-newsletter-line-wrap">
                <div className="input-group">
                  <Mail size={15} className="newsletter-mail-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-underline-input"
                  />
                </div>
                <button type="submit" className="taraq-subscribe-outline-btn">
                  {subscribed ? 'Subscribed!' : 'Join'}
                </button>
              </div>
            </form>

            <div className="footer-social-row">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-pill">Facebook</a>
              <a href="https://www.artisancoffeeroaster.pk" target="_blank" rel="noreferrer" className="social-pill">Official Site</a>
            </div>
          </div>
        </div>

        {/* Middle Row: Quick Outlet Contacts */}
        <div className="taraq-footer-touch-row">
          <div className="touch-heading">Flagship Outlet &mdash; Gulberg Lahore</div>
          
          <div className="touch-items-grid">
            <div className="touch-item">
              <MapPin size={15} className="touch-icon" />
              <span>Plot 14-C/2, M.M. Alam Road, Gulberg III, Lahore</span>
            </div>

            <div className="touch-item">
              <Phone size={15} className="touch-icon" />
              <span>+92 344 2731441 / +92 344 2731442</span>
            </div>

            <div className="touch-item">
              <Clock size={15} className="touch-icon" />
              <span>Daily 08:00 AM &ndash; 02:00 AM (Dine-in, Takeaway &amp; Delivery)</span>
            </div>

            <div className="touch-item">
              <Coffee size={15} className="touch-icon" />
              <span>Online Ordering &amp; Table Booking Active</span>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="taraq-footer-bottom-bar">
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} Artisan Coffee Roaster Pakistan. All rights reserved.
          </div>

          <div className="legal-links">
            <button className="legal-btn" onClick={onOpenMenu}>Menu</button>
            <button className="legal-btn" onClick={onOpenReserve}>Reservations</button>
            <span>Delivery &amp; Refund Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
