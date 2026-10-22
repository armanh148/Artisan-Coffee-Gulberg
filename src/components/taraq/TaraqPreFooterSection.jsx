import React from 'react';

export default function TaraqPreFooterSection({ onOpenReserve, onOpenLocations }) {
  return (
    <section className="taraq-prefooter-section artisan-prefooter">
      <div className="taraq-container">
        <div className="taraq-center-header light">
          <div className="taraq-section-number light">FRESH ROASTS DAILY &mdash; LAHORE &amp; KARACHI</div>
          
          <h2 className="taraq-section-title light">
            <span>TASTE THE DIFFERENCE OF</span>
            <span>REAL ARTISAN COFFEE</span>
          </h2>

          <p className="taraq-section-subtitle light">
            Meet friends, grab a quiet workspace corner, or order directly to your door.<br className="desk-br"/>
            Artisan Coffee Roaster is open every day from 08:00 AM to 02:00 AM.
          </p>

          <div className="taraq-prefooter-actions">
            <button className="taraq-btn-dark" onClick={onOpenLocations}>
              Find Our Outlets
            </button>
            <button className="taraq-btn-teal-outline" onClick={onOpenReserve}>
              Reserve a Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
