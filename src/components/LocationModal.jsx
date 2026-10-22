import React, { useState } from 'react';
import { X, MapPin, Check, Navigation, Clock, Phone } from 'lucide-react';
import { branches, cities } from '../data/branches';

export default function LocationModal({
  isOpen,
  onClose,
  selectedBranch,
  onSelectBranch,
  orderType,
  onSelectOrderType
}) {
  const [selectedCity, setSelectedCity] = useState(selectedBranch?.city || 'Lahore');

  if (!isOpen) return null;

  const filteredBranches = branches.filter((b) => b.city === selectedCity);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 520 }}>
        {/* Header */}
        <div style={{ padding: '20px 24px', background: '#006871', borderBottom: '1px solid rgba(89, 182, 205, 0.25)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>Select Order Type &amp; Outlet</h3>
            <span style={{ fontSize: '0.82rem', color: '#bbf0fa', marginTop: 3, display: 'block' }}>Choose your preferred pickup or delivery roastery branch</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} style={{ position: 'static', background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' }}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-content-pad" style={{ padding: '24px' }}>
          {/* Order Type Toggle */}
          <div className="order-type-switch">
            <button
              className={`order-type-btn ${orderType === 'Delivery' ? 'active' : ''}`}
              onClick={() => onSelectOrderType('Delivery')}
            >
              🚴 Delivery
            </button>
            <button
              className={`order-type-btn ${orderType === 'Pick-Up' ? 'active' : ''}`}
              onClick={() => onSelectOrderType('Pick-Up')}
            >
              🛍️ Pick-Up
            </button>
          </div>

          {/* City Selection Tabs */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', display: 'block', marginBottom: 8 }}>
              Select City / Region:
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 9999,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: '1.5px solid',
                    borderColor: selectedCity === city ? '#006871' : '#e2e8f0',
                    backgroundColor: selectedCity === city ? '#006871' : '#ffffff',
                    color: selectedCity === city ? '#ffffff' : '#64748b',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Branches list */}
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', display: 'block', marginBottom: 8 }}>
              Select Outlet / Branch:
            </label>
            <div className="branch-grid">
              {filteredBranches.map((branch) => {
                const isSelected = selectedBranch.id === branch.id;
                return (
                  <div
                    key={branch.id}
                    className={`branch-option-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      onSelectBranch(branch);
                      onClose();
                    }}
                  >
                    <div>
                      <div className="branch-card-name">
                        <MapPin size={16} color="#006871" />
                        <span>{branch.name}</span>
                        {branch.isPrimary && (
                          <span style={{ fontSize: '0.68rem', background: '#006871', color: '#fff', padding: '1px 6px', borderRadius: 4, marginLeft: 4 }}>
                            MAIN
                          </span>
                        )}
                      </div>
                      <div className="branch-card-address">{branch.address}</div>
                      <div className="branch-card-timing">
                        <Clock size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                        {branch.timings} • {orderType === 'Delivery' ? `ETA: ${branch.eta}` : 'Quick Pickup'}
                      </div>
                    </div>

                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        border: '2px solid #006871',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isSelected ? '#006871' : 'transparent',
                        flexShrink: 0,
                        marginTop: 2
                      }}
                    >
                      {isSelected && <Check size={14} color="#fff" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
