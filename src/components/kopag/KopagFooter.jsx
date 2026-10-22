import React from 'react';
import { ArrowUpRight, Phone, MapPin, Globe } from 'lucide-react';
import { branches } from '../../data/branches';

export default function KopagFooter({
  onOpenMenu,
  onOpenShop,
  onOpenAbout,
  onOpenContact,
  onOpenReserve,
  onOpenLocation
}) {
  return (
    <footer className="kopag-footer-section">
      <div className="kopag-footer-inner">
        {/* Top Split: Giant Monumental "ARTISAN." Wordmark + Right Paragraph & Yellow CTA */}
        <div className="kopag-footer-hero-row">
          <div className="kopag-footer-monumental-brand">
            <h1 className="kopag-footer-huge-wordmark">ARTISAN.</h1>
          </div>

          <div className="kopag-footer-hero-right">
            <p className="kopag-footer-mission">
              Artisan Coffee Roaster Pakistan. Dedicated to the pursuit of exceptional single-origin specialty coffees, slow manual extractions, handcrafted melted chocolates, and serene architectural spaces across Lahore and Karachi.
            </p>
            <div className="kopag-footer-hero-actions">
              <button type="button" className="kopag-yellow-pill-cta" onClick={onOpenShop}>
                <span>Order Online</span>
                <ArrowUpRight size={15} />
              </button>
              <button type="button" className="kopag-trans-pill-cta" onClick={onOpenReserve}>
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Divider */}
        <div className="kopag-footer-divider" />

        {/* 4 Clean Columns: Navigation, Hours, Outlets, Social */}
        <div className="kopag-footer-columns-grid">
          {/* Col 1: Navigation */}
          <div className="kopag-footer-col">
            <span className="kopag-col-label">Navigation</span>
            <ul className="kopag-col-links">
              <li><button type="button" onClick={onOpenMenu}>Specialty Menu (70+ Items)</button></li>
              <li><button type="button" onClick={onOpenAbout}>About Our Roastery</button></li>
              <li><button type="button" onClick={onOpenLocation}>Our Flagship Outlets</button></li>
              <li><button type="button" onClick={onOpenContact}>Contact &amp; Inquiries</button></li>
              <li><button type="button" onClick={onOpenReserve}>Book Private Lounge</button></li>
            </ul>
          </div>

          {/* Col 2: Operating Hours */}
          <div className="kopag-footer-col">
            <span className="kopag-col-label">Operating Hours</span>
            <ul className="kopag-col-links">
              <li><strong>Gulberg Lahore:</strong> 08:00 AM &ndash; 02:00 AM</li>
              <li><strong>DHA Phase 5:</strong> 08:00 AM &ndash; 02:00 AM</li>
              <li><strong>Tipu Sultan Karachi:</strong> 09:00 AM &ndash; 02:00 AM</li>
              <li><strong>Clifton Karachi:</strong> 09:00 AM &ndash; 02:00 AM</li>
            </ul>
          </div>

          {/* Col 3: Outlets */}
          <div className="kopag-footer-col">
            <span className="kopag-col-label">Locations</span>
            <ul className="kopag-col-links">
              {branches.map((b) => (
                <li key={b.id} onClick={onOpenLocation} className="clickable-branch">
                  <strong>{b.name.replace('Artisan Coffee Roaster - ', '')}:</strong> {b.address}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="kopag-footer-col">
            <span className="kopag-col-label">Contact &amp; Social</span>
            <ul className="kopag-col-links">
              <li><a href="tel:+923000777242">+92 300 0777242 (Lahore)</a></li>
              <li><a href="tel:+923000777243">+92 300 0777243 (Karachi)</a></li>
              <li><a href="mailto:beans@artisancoffeeroaster.pk">beans@artisancoffeeroaster.pk</a></li>
            </ul>
            <div className="kopag-social-icons-row">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.artisancoffeeroaster.pk" target="_blank" rel="noreferrer" aria-label="Official Website">
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="kopag-footer-bottom-row">
          <span>&copy; {new Date().getFullYear()} Artisan Coffee Roaster Pakistan. All rights reserved.</span>
          <div className="kopag-footer-legal-links">
            <button type="button" onClick={onOpenMenu}>Menu</button>
            <button type="button" onClick={onOpenAbout}>About</button>
            <button type="button" onClick={onOpenLocation}>Branches</button>
            <button type="button" onClick={onOpenContact}>Contact</button>
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
