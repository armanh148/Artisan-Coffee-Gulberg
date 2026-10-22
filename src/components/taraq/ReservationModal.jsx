import React, { useState } from 'react';
import { X, Users, CheckCircle2, User, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import KopagCustomSelect from '../kopag/KopagCustomSelect';
import KopagDatePicker from '../kopag/KopagDatePicker';
import KopagTimePicker from '../kopag/KopagTimePicker';

const GUEST_OPTIONS = [
  { value: '1', label: '1 Person (Solo Work)', sublabel: 'Espresso Bar / Solo Focus Table', badge: 'Solo' },
  { value: '2', label: '2 People (Catch-up / Pairing)', sublabel: 'Artisan Table for Two', badge: 'Duo' },
  { value: '4', label: '3–4 People (Small Meeting)', sublabel: 'Lounge Seating with Power Outlets', badge: 'Meeting' },
  { value: '6', label: '5–6 People (Team Sync)', sublabel: 'Large Round Roastery Table', badge: 'Team' },
  { value: '10', label: '8–10 People (Full Boardroom)', sublabel: 'Private Acoustic Conference Space', badge: 'Executive' }
];

export default function ReservationModal({ isOpen, onClose, onConfirm }) {
  const [date, setDate] = useState('2026-10-22');
  const [time, setTime] = useState('14:00');
  const [guests, setGuests] = useState('2');
  const [type, setType] = useState('Table'); // 'Table' or 'Private Meeting Room'
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = `ART-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationCode(code);
    setSubmitted(true);
    setTimeout(() => {
      if (onConfirm) onConfirm({ date, time, guests, type, name, phone, code });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2400);
    }, 400);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="taraq-modal-backdrop" onClick={handleClose}>
      <div className="taraq-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="taraq-modal-close" onClick={handleClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="taraq-modal-success">
            <div className="success-badge-glow">
              <CheckCircle2 size={46} strokeWidth={2.5} color="#0D382B" />
            </div>
            <h3 className="success-title">RESERVATION CONFIRMED!</h3>
            <p className="success-sub">
              Shukriya <strong>{name || 'Guest'}</strong>! We have reserved your{' '}
              <strong>{type === 'Table' ? 'Lounge Table' : 'Private Executive Room'}</strong> for{' '}
              <strong>{guests} guests</strong> on <strong>{date}</strong> at <strong>{time}</strong>.
            </p>
            {reservationCode && (
              <div className="reservation-code-pill">
                <span>Confirmation Pass:</span>
                <strong>{reservationCode}</strong>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="taraq-modal-form">
            <div className="taraq-section-number">
              <Sparkles size={12} className="number-sparkle" />
              <span>ARTISAN SPECIALTY ROASTERY &bull; TABLE CONCIERGE</span>
            </div>
            <h3 className="taraq-modal-title">RESERVE YOUR SPACE</h3>
            <p className="taraq-modal-sub">
              Book a quiet espresso table or private boardroom at our flagship roastery lounges.
            </p>

            {/* Reservation Type Toggle */}
            <div className="taraq-form-row">
              <label className="taraq-form-label">Reservation Experience</label>
              <div className="taraq-type-toggle">
                <button
                  type="button"
                  className={`type-btn ${type === 'Table' ? 'active' : ''}`}
                  onClick={() => setType('Table')}
                >
                  ☕ Lounge Table
                </button>
                <button
                  type="button"
                  className={`type-btn ${type === 'Private Meeting Room' ? 'active' : ''}`}
                  onClick={() => setType('Private Meeting Room')}
                >
                  🏛️ Private Room
                </button>
              </div>
            </div>

            {/* Custom Date & Time Row */}
            <div className="taraq-form-grid-2">
              <div className="form-field-group">
                <label className="taraq-form-label">Date</label>
                <KopagDatePicker
                  id="reservation-date"
                  value={date}
                  onChange={(d) => setDate(d)}
                />
              </div>

              <div className="form-field-group">
                <label className="taraq-form-label">Seating Time</label>
                <KopagTimePicker
                  id="reservation-time"
                  value={time}
                  onChange={(t) => setTime(t)}
                />
              </div>
            </div>

            {/* Number of Guests */}
            <div className="taraq-form-row">
              <label className="taraq-form-label">Number of Guests</label>
              <KopagCustomSelect
                value={guests}
                onChange={(val) => setGuests(val)}
                options={GUEST_OPTIONS}
                icon={Users}
              />
            </div>

            {/* Guest Name & Phone */}
            <div className="taraq-form-grid-2">
              <div className="form-field-group">
                <label className="taraq-form-label">Your Name</label>
                <div className="input-with-icon">
                  <User size={16} />
                  <input
                    type="text"
                    placeholder="e.g. Arman Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="taraq-input"
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label className="taraq-form-label">Phone / WhatsApp</label>
                <div className="input-with-icon">
                  <Phone size={16} />
                  <input
                    type="tel"
                    placeholder="e.g. 0300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="taraq-input"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="taraq-submit-btn kopag-reserve-confirm-btn">
              <ShieldCheck size={18} />
              <span>Confirm Reservation</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
