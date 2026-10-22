import React, { useState, useRef, useEffect } from 'react';
import { Clock, ChevronDown, Check } from 'lucide-react';

const TIME_SLOTS = [
  { value: '09:00', label: '09:00 AM', period: 'Morning Brew' },
  { value: '10:00', label: '10:00 AM', period: 'Morning Deep Work' },
  { value: '11:00', label: '11:00 AM', period: 'Coffee & Pairing' },
  { value: '12:00', label: '12:00 PM', period: 'Midday Pour-over' },
  { value: '13:00', label: '01:00 PM', period: 'Lunch Session' },
  { value: '14:00', label: '02:00 PM', period: 'Afternoon Tasting' },
  { value: '15:30', label: '03:30 PM', period: 'Barista Pairing' },
  { value: '17:00', label: '05:00 PM', period: 'Golden Hour Brew' },
  { value: '18:30', label: '06:30 PM', period: 'Sunset Roastery' },
  { value: '20:00', label: '08:00 PM', period: 'Evening Lounge' },
  { value: '21:30', label: '09:30 PM', period: 'Late Night Coffee' },
  { value: '23:00', label: '11:00 PM', period: 'Night Cap Espresso' },
];

export default function KopagTimePicker({
  value,
  onChange,
  className = '',
  id
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const selectedSlot = TIME_SLOTS.find((s) => s.value === value) || {
    value: value || '14:00',
    label: value ? `${value}` : '02:00 PM',
    period: 'Afternoon Tasting'
  };

  return (
    <div className={`kopag-timepicker-wrap ${className}`} ref={containerRef}>
      <button
        id={id}
        type="button"
        className={`kopag-timepicker-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="timepicker-trigger-left">
          <Clock size={16} className="timepicker-icon" />
          <div className="timepicker-text-wrap">
            <span className="timepicker-value">{selectedSlot.label}</span>
            <span className="timepicker-sub-badge">{selectedSlot.period}</span>
          </div>
        </div>
        <ChevronDown size={15} className={`timepicker-chevron ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && (
        <div className="kopag-timepicker-popover" role="listbox">
          <div className="timepicker-header">Select Roastery Seating Time</div>
          <div className="timepicker-slots-grid">
            {TIME_SLOTS.map((slot) => {
              const isSelected = slot.value === value;
              return (
                <button
                  key={slot.value}
                  type="button"
                  className={`time-slot-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    onChange(slot.value);
                    setIsOpen(false);
                  }}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div className="slot-text-group">
                    <span className="slot-time-text">{slot.label}</span>
                    <span className="slot-period-text">{slot.period}</span>
                  </div>
                  {isSelected && (
                    <div className="slot-check-icon">
                      <Check size={13} strokeWidth={3} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
