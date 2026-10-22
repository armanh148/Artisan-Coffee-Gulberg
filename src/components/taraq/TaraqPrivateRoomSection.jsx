import React from 'react';
import { Wifi, Tv, Coffee, Wind, Armchair, ShieldCheck } from 'lucide-react';

export default function TaraqPrivateRoomSection({ onOpenReserve }) {
  const perks = [
    { icon: <Wifi size={15} />, text: 'HIGH-SPEED WI-FI' },
    { icon: <Tv size={15} />, text: 'LARGE DISPLAY' },
    { icon: <Coffee size={15} />, text: 'PREMIUM COFFEE SERVICE' },
    { icon: <Wind size={15} />, text: 'AIR CONDITIONING' },
    { icon: <Armchair size={15} />, text: 'COMFORTABLE SEATING' },
    { icon: <ShieldCheck size={15} />, text: 'PRIVATE ENVIRONMENT' }
  ];

  return (
    <section id="private-room-section" className="taraq-private-room-section">
      {/* Background Lifestyle Image */}
      <div className="private-room-bg-wrap">
        <img
          src="/taraq/table_photo_full.png"
          alt="Taraq Private Room - Croissants and iced coffee on sunny green cafe table"
          className="private-room-bg-img"
        />
        <div className="private-room-overlay" />
      </div>

      <div className="taraq-container private-room-content-wrap">
        {/* Left Floating Content Card */}
        <div className="private-room-card">
          <div className="taraq-section-number light">03 &mdash; PRIVATE ROOM</div>
          <h2 className="taraq-section-title light">
            <span>MEET IN</span>
            <span>COMFORT</span>
          </h2>
          <p className="taraq-section-subtitle light">
            A private, comfortable room for meetings that need a little more focus.
            We take care of the coffee, Wi-Fi, and space.
          </p>

          <button className="taraq-btn-dark-solid" onClick={onOpenReserve}>
            Reserve a table
          </button>
        </div>
      </div>

      {/* Bottom Perks Strip */}
      <div className="private-room-perks-strip">
        <div className="taraq-container perks-inner">
          {perks.map((item, idx) => (
            <div key={idx} className="perk-item">
              <span className="perk-icon">{item.icon}</span>
              <span className="perk-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
