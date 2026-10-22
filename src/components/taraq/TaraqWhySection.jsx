import React, { useState } from 'react';
import { Coffee, Flame, Sparkles } from 'lucide-react';

export default function TaraqWhySection() {
  const [activeTab, setActiveTab] = useState('specialty');

  return (
    <section id="why-taraq-section" className="taraq-section taraq-why-section artisan-why">
      <div className="taraq-container">
        {/* Header */}
        <div className="taraq-center-header">
          <div className="taraq-section-number">THE ARTISAN STANDARD &mdash; SLOW CRAFT &amp; PASSION</div>
          <h2 className="taraq-section-title">
            <span>UNCOMPROMISING QUALITY</span>
            <span>IN EVERY SINGLE CUP</span>
          </h2>
          <p className="taraq-section-subtitle">
            Artisan Coffee Roaster elevates coffee culture in Pakistan. From ethically sourced green beans roasted in micro-batches to rich melted Belgian cacao and peaceful spaces designed for genuine connection.
          </p>
        </div>

        {/* 5-Photo Mosaic Gallery matching exact reference layout */}
        <div className="taraq-mosaic-grid">
          {/* Card 1: Left Tall (Two flat whites on green saucers) */}
          <div className="mosaic-item mosaic-item-left">
            <img
              src="/taraq/gallery_1_lattes.png"
              alt="Artisan Specialty Flat Whites"
              className="mosaic-img"
            />
          </div>

          {/* Card 2: Center Wide (Yellow vintage car with iced latte) */}
          <div className="mosaic-item mosaic-item-center">
            <img
              src="/taraq/gallery_2_yellow_car.png"
              alt="Artisan Iced Latte To Go"
              className="mosaic-img"
            />
          </div>

          {/* Card 3: Top Right (Tray with two hot lattes) */}
          <div className="mosaic-item mosaic-item-tr">
            <img
              src="/taraq/gallery_3_tray.png"
              alt="Freshly pulled Artisan espresso drinks"
              className="mosaic-img"
            />
          </div>

          {/* Card 4: Middle Right (Toasting iced drinks against blue sky) */}
          <div className="mosaic-item mosaic-item-mr">
            <img
              src="/taraq/gallery_4_cheers.png"
              alt="Artisan Chilled Mojitos and Shakes"
              className="mosaic-img"
            />
          </div>

          {/* Card 5: Bottom Center-Right (Almond croissant sandwich breakfast) */}
          <div className="mosaic-item mosaic-item-br">
            <img
              src="/taraq/gallery_5_pastry.png"
              alt="Fresh bakery bakes and Artisan breakfast"
              className="mosaic-img"
            />
          </div>
        </div>

        {/* Bottom Feature Strip with Steaming Mug & 3 Tab Columns */}
        <div className="taraq-feature-tabs-strip">
          {/* Left Line Icon: Steaming Mug */}
          <div className="taraq-mug-icon-col">
            <svg viewBox="0 0 48 48" className="taraq-steaming-mug-svg">
              <path d="M16 6c0 3-3 4-3 7" stroke="#59b6cd" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
              <path d="M24 4c0 4-3 5-3 9" stroke="#59b6cd" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
              <rect x="10" y="16" width="22" height="26" rx="4" stroke="#59b6cd" strokeWidth="2.5" fill="none"/>
              <path d="M32 20h4a6 6 0 0 1 0 12h-4" stroke="#59b6cd" strokeWidth="2.5" fill="none"/>
              <circle cx="21" cy="29" r="2.5" fill="#59b6cd"/>
            </svg>
          </div>

          {/* Column 1: Micro-Batch Roasting */}
          <div
            className={`taraq-feature-tab ${activeTab === 'specialty' ? 'active' : ''}`}
            onClick={() => setActiveTab('specialty')}
          >
            <h4 className="feature-tab-title">MICRO-BATCH ROASTING</h4>
            <p className="feature-tab-desc">
              Single-origin Arabica varietals roasted weekly to lock in peak aromatics, floral sweetness, and chocolate depth.
            </p>
          </div>

          {/* Column 2: Flagship Lounges */}
          <div
            className={`taraq-feature-tab ${activeTab === 'executive' ? 'active' : ''}`}
            onClick={() => setActiveTab('executive')}
          >
            <h4 className="feature-tab-title">EXECUTIVE LOUNGES</h4>
            <p className="feature-tab-desc">
              Dedicated power outlets, high-speed fiber Wi-Fi, and private meeting rooms at Gulberg M.M. Alam Road &amp; Karachi.
            </p>
          </div>

          {/* Column 3: Handcrafted Science */}
          <div
            className={`taraq-feature-tab ${activeTab === 'craft' ? 'active' : ''}`}
            onClick={() => setActiveTab('craft')}
          >
            <h4 className="feature-tab-title">BARISTA PRECISION</h4>
            <p className="feature-tab-desc">
              Every shot is calibrated for TDS extraction, steamed with silky micro-foam, and served by certified artisans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
