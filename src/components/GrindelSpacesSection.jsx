import React from 'react';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';

export default function GrindelSpacesSection({ selectedBranch, onOpenLocation }) {
  return (
    <section id="spaces-section" className="grindel-section grindel-spaces-section">
      <div className="grindel-section-inner">
        {/* Top Header */}
        <div className="grindel-header-row">
          <div>
            <div className="grindel-section-tag">// 04 &middot; THE SPACES &amp; OUTLETS</div>
            <h2 className="grindel-editorial-title">
              <span className="title-row">TWO HOMES, ONE DISCIPLINE:</span>
              <span className="title-script-row">
                <span className="script-text">lahore &amp; zürich</span>
              </span>
            </h2>
          </div>

          <div className="grindel-cta-wrap">
            <button className="grindel-explore-link" onClick={onOpenLocation}>
              <span className="explore-text">CHANGE ORDER OUTLET</span>
              <span className="explore-arrow">&#8599;</span>
              <span className="explore-underline"></span>
            </button>
          </div>
        </div>

        {/* 2 Atmospheric Outlet Showcases */}
        <div className="grindel-spaces-grid">
          {/* Space 1: Gulberg Flagship */}
          <div className="space-card" onClick={onOpenLocation}>
            <div className="space-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80"
                alt="Artisan Coffee Roasters Gulberg III"
                className="space-img"
              />
              <span className="space-badge">Active Roastery &middot; Lahore</span>
            </div>
            <div className="space-body">
              <div className="space-city-tag">PAKISTAN &middot; EST. 2018</div>
              <h3 className="space-title">Gulberg III Flagship Roastery</h3>
              <p className="space-address">MM Alam Road, Block B2, Gulberg III, Lahore</p>

              <div className="space-info-strip">
                <div className="space-info-col">
                  <Clock size={13} color="#E2884F" />
                  <span>07:00 &ndash; 23:00 DAILY</span>
                </div>
                <div className="space-info-col">
                  <MapPin size={13} color="#E2884F" />
                  <span>Dine-in, Slow Bar, Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Space 2: Zürich Heritage */}
          <div className="space-card" onClick={onOpenLocation}>
            <div className="space-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&auto=format&fit=crop&q=80"
                alt="Grindel Swiss Cafe Bar Zürich"
                className="space-img"
              />
              <span className="space-badge">Heritage Cafe Bar &middot; Zürich</span>
            </div>
            <div className="space-body">
              <div className="space-city-tag">SWITZERLAND &middot; EST. 1914</div>
              <h3 className="space-title">Bahnhofstrasse Alpine Bar</h3>
              <p className="space-address">Bahnhofstrasse 19, 8001 Z&uuml;rich, Switzerland</p>

              <div className="space-info-strip">
                <div className="space-info-col">
                  <Clock size={13} color="#E2884F" />
                  <span>07:00 &ndash; 21:00 DAILY</span>
                </div>
                <div className="space-info-col">
                  <MapPin size={13} color="#E2884F" />
                  <span>Espresso Bar, Bean Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
