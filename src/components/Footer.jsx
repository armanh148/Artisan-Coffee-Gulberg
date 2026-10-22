import React from 'react';
import { Phone, Mail, MapPin, Clock, Coffee, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <img
                src="https://g-cdn.blinkco.io/ordering-system/restaurant_new/55977/logo/1749039482.jpg"
                alt="Artisan Coffee Roaster"
                style={{ width: 42, height: 42, borderRadius: '50%', border: '2px solid #59b6cd' }}
              />
              <span className="footer-brand-title">Artisan Coffee Roaster</span>
            </div>
            <p className="footer-desc">
              Pioneering specialty micro-roasting in Pakistan. We craft exceptional coffee experiences through directly traded single-origin beans, precision brewing, and artisanal chocolates.
            </p>
            <div style={{ color: '#59b6cd', fontSize: '0.85rem', fontWeight: 600 }}>
              Gulberg III, Lahore • Shahrah-e-Faisal, Karachi
            </div>
          </div>

          {/* Quick Menu Links */}
          <div>
            <h4 className="footer-heading">Specialty Menu</h4>
            <ul className="footer-links-list">
              <li><a href="#artisan-signature" className="footer-link">Artisan Signature</a></li>
              <li><a href="#handcrafted-chocolates" className="footer-link">Handcrafted Chocolates</a></li>
              <li><a href="#specialty-matcha" className="footer-link">Specialty Matcha</a></li>
              <li><a href="#essential-coffee" className="footer-link">Essential Espresso & Cortados</a></li>
              <li><a href="#frappuccinos" className="footer-link">Frappuccinos & Shakes</a></li>
              <li><a href="#bubble-tea" className="footer-link">Bubble Tea</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="footer-heading">Opening Timings</h4>
            <div className="footer-contact-item">
              <Clock size={16} color="#59b6cd" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <strong style={{ color: '#ffffff', display: 'block' }}>Monday – Sunday</strong>
                <span>09:00 AM – 02:00 AM</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#10b981', marginTop: 4 }}>
                  ● Roastery & Kitchen Open
                </span>
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h4 className="footer-heading" style={{ fontSize: '0.95rem', marginBottom: 10 }}>Fulfillment</h4>
              <div style={{ fontSize: '0.84rem' }}>
                Delivery across Gulberg, DHA, Cantt, Model Town, and Lahore.
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-heading">Customer Support</h4>
            <div className="footer-contact-item">
              <Phone size={16} color="#59b6cd" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <span style={{ display: 'block', color: '#ffffff' }}>+92 344 2731441</span>
                <span style={{ fontSize: '0.78rem' }}>WhatsApp & Calls</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={16} color="#59b6cd" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <span style={{ display: 'block', color: '#ffffff' }}>acrcustomersup@gmail.com</span>
                <span style={{ fontSize: '0.78rem' }}>Inquiries & Feedback</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={16} color="#59b6cd" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <span style={{ display: 'block', color: '#ffffff' }}>Gulberg Branch:</span>
                <span style={{ fontSize: '0.78rem' }}>Plot 14-C/2, M.M. Alam Road, Gulberg III, Lahore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2026 Artisan Coffee Roaster Pakistan. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <span style={{ cursor: 'pointer' }}>Terms & Conditions</span>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
