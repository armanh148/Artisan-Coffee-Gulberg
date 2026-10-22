import React from 'react';

// Baker Hat Icon used across pills in the reference
export function BakerHatIcon({ size = 14, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
      <line x1="6" y1="17" x2="18" y2="17"></line>
    </svg>
  );
}

// Cake slice icon for the headline
export function CakeSliceIcon({ size = 32 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, margin: '0 4px', verticalAlign: 'middle' }}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M4 22L16 6L28 12L28 22L4 22Z" fill="#F4DECE" stroke="#D18E66" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 22C4 22 7 24 10 22C13 20 16 22 19 22C22 22 25 20 28 22" stroke="#EE5D3B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 14L28 17" stroke="#A8623D" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="6" r="2.5" fill="#EE5D3B"/>
      </svg>
    </span>
  );
}

// Baker illustrated logo mark
export function BakerLogoIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" fill="#FDEEE9" stroke="#EE5D3B" strokeWidth="1.5"/>
      <path d="M14 26C14 23 15 21 17 21C19 21 21 21 23 21C25 21 26 23 26 26" stroke="#EE5D3B" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="18" r="3.5" stroke="#EE5D3B" strokeWidth="1.5"/>
      <path d="M15 15C13 13 14 10 16.5 10C17.5 10 18.5 10.5 19 11C19.5 9 22 9 23 10C24.5 10 25.5 11.5 25 13.5C25.5 14 26 15 25 16H15Z" fill="#EE5D3B"/>
    </svg>
  );
}

// Spark action lines above cookie in hero
export function SparkLines() {
  return (
    <svg width="22" height="18" viewBox="0 0 24 20" fill="none" style={{ position: 'absolute', top: -14, right: -6 }}>
      <line x1="12" y1="2" x2="12" y2="8" stroke="#EE5D3B" strokeWidth="2" strokeLinecap="round"/>
      <line x1="4" y1="6" x2="8" y2="10" stroke="#EE5D3B" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="6" x2="16" y2="10" stroke="#EE5D3B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
