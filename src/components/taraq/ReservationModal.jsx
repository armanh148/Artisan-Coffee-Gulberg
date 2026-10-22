import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';
import KopagCustomSelect from '../kopag/KopagCustomSelect';

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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onConfirm) onConfirm({ date, time, guests, type, name, phone });
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="taraq-modal-backdrop" onClick={onClose}>
      <div className="taraq-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="taraq-modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {submitted ? (
          <div className="taraq-modal-success">
            <CheckCircle2 size={48} color="#238B83" />
            <h3 className="success-title">RESERVATION CONFIRMED!</h3>
            <p className="success-sub">
              We have reserved your {type.toLowerCase()} for {guests} guests on {date} at {time}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="taraq-modal-form">
            <div className="taraq-section-number">RESERVATION &middot; TARAQ</div>
            <h3 className="taraq-modal-title">RESERVE YOUR SPACE</h3>
            <p className="taraq-modal-sub">
              Book a quiet table or private executive room for your meeting.
            </p>

            <div className="taraq-form-row">
              <label className="taraq-form-label">Reservation Type</label>
              <div className="taraq-type-toggle">
                <button
                  type="button"
                  className={`type-btn ${type === 'Table' ? 'active' : ''}`}
                  onClick={() => setType('Table')}
                >
                  Lounge Table
                </button>
                <button
                  type="button"
                  className={`type-btn ${type === 'Private Meeting Room' ? 'active' : ''}`}
                  onClick={() => setType('Private Meeting Room')}
                >
                  Private Room
                </button>
              </div>
            </div>

            <div className="taraq-form-grid-2">
              <div>
                <label className="taraq-form-label">Date</label>
                <div className="input-with-icon">
                  <Calendar size={16} />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="taraq-input"
                  />
                </div>
              </div>

              <div>
                <label className="taraq-form-label">Time</label>
                <div className="input-with-icon">
                  <Clock size={16} />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="taraq-input"
                  />
                </div>
              </div>
            </div>

            <div className="taraq-form-row">
              <label className="taraq-form-label">Number of Guests</label>
              <KopagCustomSelect
                value={guests}
                onChange={(val) => setGuests(val)}
                options={GUEST_OPTIONS}
                icon={Users}
              />
            </div>


            <div className="taraq-form-grid-2">
              <div>
                <label className="taraq-form-label">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Alex Sterling"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="taraq-input"
                />
              </div>

              <div>
                <label className="taraq-form-label">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="taraq-input"
                />
              </div>
            </div>

            <button type="submit" className="taraq-submit-btn">
              Confirm Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
