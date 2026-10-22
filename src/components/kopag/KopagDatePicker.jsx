import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function KopagDatePicker({
  value,
  onChange,
  className = '',
  id
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Parse current value (expected 'YYYY-MM-DD')
  const initialDate = value ? new Date(value + 'T00:00:00') : new Date();
  const [viewYear, setViewYear] = useState(initialDate.getFullYear() || 2026);
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth() || 9); // 0-indexed

  // Today reference
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  // Close on outside click or Escape
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

  const handlePrevMonth = (e) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = (e) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  // Days in month
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  // Selected date object formatted
  const selectedDateObj = value ? new Date(value + 'T00:00:00') : null;
  const formattedDisplay = selectedDateObj
    ? selectedDateObj.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    : 'Select date';

  const selectDate = (day) => {
    const monthStr = String(viewMonth + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const fullDateStr = `${viewYear}-${monthStr}-${dayStr}`;
    onChange(fullDateStr);
    setIsOpen(false);
  };

  const setQuickDate = (offsetDays) => {
    const target = new Date();
    target.setDate(target.getDate() + offsetDays);
    const y = target.getFullYear();
    const m = String(target.getMonth() + 1).padStart(2, '0');
    const d = String(target.getDate()).padStart(2, '0');
    setViewYear(y);
    setViewMonth(target.getMonth());
    onChange(`${y}-${m}-${d}`);
    setIsOpen(false);
  };

  return (
    <div className={`kopag-datepicker-wrap ${className}`} ref={containerRef}>
      <button
        id={id}
        type="button"
        className={`kopag-datepicker-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <div className="datepicker-trigger-left">
          <CalendarIcon size={16} className="datepicker-icon" />
          <span className="datepicker-value">{formattedDisplay}</span>
        </div>
        <ChevronDown size={15} className={`datepicker-chevron ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && (
        <div className="kopag-calendar-popover" role="dialog" aria-modal="false">
          {/* Calendar Header */}
          <div className="calendar-header">
            <span className="calendar-month-label">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </span>
            <div className="calendar-nav-group">
              <button
                type="button"
                className="calendar-nav-btn"
                onClick={handlePrevMonth}
                aria-label="Previous month"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className="calendar-nav-btn"
                onClick={handleNextMonth}
                aria-label="Next month"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Day Names Header */}
          <div className="calendar-weekdays">
            {DAY_NAMES.map((d) => (
              <span key={d} className="calendar-weekday">{d}</span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="calendar-days-grid">
            {/* Blank leading days */}
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} className="calendar-day empty" />
            ))}

            {/* Days of current month */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const monthStr = String(viewMonth + 1).padStart(2, '0');
              const dayStr = String(day).padStart(2, '0');
              const dateKey = `${viewYear}-${monthStr}-${dayStr}`;

              const isSelected = value === dateKey;
              const isToday = todayStr === dateKey;

              return (
                <button
                  key={day}
                  type="button"
                  className={`calendar-day-btn ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                  onClick={() => selectDate(day)}
                >
                  <span className="day-number">{day}</span>
                  {isSelected && <span className="day-gold-dot" />}
                </button>
              );
            })}
          </div>

          {/* Quick Date Shortcuts Footer */}
          <div className="calendar-quick-footer">
            <button
              type="button"
              className="quick-date-btn"
              onClick={() => setQuickDate(0)}
            >
              Today
            </button>
            <button
              type="button"
              className="quick-date-btn"
              onClick={() => setQuickDate(1)}
            >
              Tomorrow
            </button>
            <button
              type="button"
              className="quick-date-btn"
              onClick={() => setQuickDate(2)}
            >
              Weekend
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
