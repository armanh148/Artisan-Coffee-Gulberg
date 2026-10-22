import React from 'react';

export default function GrindelProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'ETHICAL SOURCING',
      sub: 'Single-origin estate farms at 1,850m+ in Yirgacheffe, Huila and Antigua.'
    },
    {
      num: '02',
      title: 'SLOW PROFILE DRUM',
      sub: 'Low-convection drum roasting profiling calibrated hourly for maximum clarity.'
    },
    {
      num: '03',
      title: '9-BAR EXTRACTION',
      sub: 'Triple-filtered alpine mineral profile water with 93.5°C temperature control.'
    },
    {
      num: '04',
      title: 'HANDCRAFTED SERVE',
      sub: 'Poured into pre-warmed handcrafted ceramic cups with silky textured microfoam.'
    }
  ];

  return (
    <section id="process-section" className="grindel-section grindel-process-section">
      <div className="grindel-section-inner">
        {/* Header */}
        <div className="grindel-section-tag">// 03 &middot; THE 4-STAGE DISCIPLINE</div>
        <h2 className="grindel-editorial-title" style={{ marginBottom: '40px' }}>
          <span className="title-row">FROM HIGH MOUNTAIN CHERRY TO</span>
          <span className="title-script-row">
            <span className="script-text">the perfect cup</span>
          </span>
        </h2>

        {/* 4-Column Strip with Vertical Dividers (Exact match to Hero Bottom Bar) */}
        <div className="grindel-process-strip">
          {steps.map((s, idx) => (
            <div key={idx} className="process-step-col">
              <div className="step-num">[ {s.num} ]</div>
              <h4 className="step-title">{s.title}</h4>
              <p className="step-sub">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
