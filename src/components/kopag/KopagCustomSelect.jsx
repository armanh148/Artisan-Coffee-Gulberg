import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function KopagCustomSelect({
  id,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option...',
  className = '',
  icon: Icon
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  return (
    <div className={`kopag-custom-select-wrap ${className}`} ref={selectRef}>
      <button
        id={id}
        type="button"
        className={`kopag-custom-select-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="trigger-content-left">
          {Icon && <Icon size={16} className="trigger-icon" />}
          <div className="trigger-text-wrap">
            <span className="trigger-value">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>
        </div>
        <ChevronDown size={16} className={`trigger-chevron ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && (
        <div className="kopag-custom-select-menu" role="listbox" tabIndex={-1}>
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                className={`kopag-select-option ${isSelected ? 'is-selected' : ''}`}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                role="option"
                aria-selected={isSelected}
              >
                <div className="option-text-group">
                  <span className="option-main-label">{opt.label}</span>
                  {opt.sublabel && <span className="option-sub-label">{opt.sublabel}</span>}
                </div>
                {isSelected ? (
                  <div className="option-check-disc">
                    <Check size={13} strokeWidth={3} />
                  </div>
                ) : opt.badge ? (
                  <span className="option-tag-pill">{opt.badge}</span>
                ) : null}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
