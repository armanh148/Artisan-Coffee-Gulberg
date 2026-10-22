import React from 'react';
import { Send } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function EditorialFooter({ onOpenMenu, onOpenShop, onOpenStory, onOpenLocations }) {
  return (
    <footer className="rich-dark-footer">
      <div className="footer-top-grid">
        {/* Roastery / Coffee Bag & Cup Photo */}
        <div>
          <img
            src="/hero-product-duo.png"
            alt="Grindel Coffee Roastery"
            className="footer-basket-img"
            style={{ objectFit: 'contain', background: '#1c110b', padding: '12px' }}
          />
        </div>

        {/* Column 1: Shop */}
        <div>
          <h4 className="footer-column-title">The Roastery</h4>
          <ul className="footer-nav-list">
            <li><span className="footer-nav-link" onClick={onOpenShop || onOpenMenu} style={{ cursor: 'pointer' }}>Single Origin Beans</span></li>
            <li><span className="footer-nav-link" onClick={onOpenShop || onOpenMenu} style={{ cursor: 'pointer' }}>Swiss Alpine Roasts</span></li>
            <li><span className="footer-nav-link" onClick={onOpenMenu} style={{ cursor: 'pointer' }}>Cold Brew & Nitro</span></li>
            <li><span className="footer-nav-link" onClick={onOpenMenu} style={{ cursor: 'pointer' }}>Artisan Bakes & Brioche</span></li>
            <li><span className="footer-nav-link" onClick={onOpenShop || onOpenMenu} style={{ cursor: 'pointer' }}>Home Brewer Kits</span></li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="footer-column-title">Quick Links</h4>
          <ul className="footer-nav-list">
            <li><span className="footer-nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Home</span></li>
            <li><span className="footer-nav-link" onClick={onOpenMenu} style={{ cursor: 'pointer' }}>Complete Menu</span></li>
            <li><span className="footer-nav-link" onClick={onOpenShop || onOpenMenu} style={{ cursor: 'pointer' }}>Signature Shop</span></li>
            <li><span className="footer-nav-link" onClick={onOpenStory} style={{ cursor: 'pointer' }}>Our Swiss Heritage</span></li>
            <li><span className="footer-nav-link" onClick={onOpenMenu} style={{ cursor: 'pointer' }}>Order Online</span></li>
          </ul>
        </div>

        {/* Column 3: Outlets */}
        <div>
          <h4 className="footer-column-title">Locations</h4>
          <ul className="footer-nav-list">
            <li><span className="footer-nav-link" onClick={onOpenLocations} style={{ cursor: 'pointer' }}>Bahnhofstrasse 19, Zürich</span></li>
            <li><span className="footer-nav-link" onClick={onOpenLocations} style={{ cursor: 'pointer' }}>MM Alam Road, Gulberg III</span></li>
            <li><span className="footer-nav-link" onClick={onOpenLocations} style={{ cursor: 'pointer' }}>DHA Phase 5 Roastery</span></li>
            <li><span className="footer-nav-link" onClick={onOpenLocations} style={{ cursor: 'pointer' }}>Daily: 07:00 – 21:00</span></li>
            <li><span className="footer-nav-link" onClick={onOpenLocations} style={{ cursor: 'pointer' }}>Wholesale Inquiries</span></li>
          </ul>
        </div>

        {/* Column 4: Brand & Newsletter */}
        <div>
          <div className="footer-brand-title-large" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
            <img src="/grindel-logo.png" alt="Grindel Swiss Cafe Bar" style={{ height: 44, width: 'auto' }} />
            <span style={{ fontSize: '1.05rem', letterSpacing: '0.08em', marginTop: 4 }}>GRINDEL SWISS CAFE BAR</span>
          </div>
          <p className="footer-tagline">
            Alpine-roasted beans brewed the Swiss way — precise, patient, and made to savour in every cup.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Grindel Roastery Dispatch!'); }} className="newsletter-input-wrap">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div>
          &copy; 1914 &ndash; 2026 GRINDEL SWISS CAFE BAR. All Rights Reserved.
        </div>

        <div className="footer-social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-icon">
            <InstagramIcon size={14} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-icon">
            <FacebookIcon size={14} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-icon">
            <LinkedinIcon size={14} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-icon">
            <TwitterIcon size={14} />
          </a>
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
          <span style={{ cursor: 'pointer' }}>Roast Date Guarantee</span>
        </div>
      </div>
    </footer>
  );
}
