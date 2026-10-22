import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function KopagFaqSection({ onOpenReserve, onOpenLocation }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Where are Artisan coffee beans sourced from?',
      a: 'We directly import specialty-grade 100% Arabica green beans from renowned micro-lots in Ethiopia (Yirgacheffe, Guji), Colombia (Huila Supremo), Brazil, and Guatemala. Every origin is scored 84+ on the SCA scale and roasted weekly in-house.'
    },
    {
      q: 'Do you offer freshly roasted coffee beans for home brewing?',
      a: 'Yes! We roast and pack whole bean bags as well as custom ground profiles (Espresso, Aeropress, V60 / Chemex, French Press, Cold Brew). You can order bags via delivery or pick them up at any of our Lahore and Karachi outlets.'
    },
    {
      q: 'Can I book a table or private executive meeting room?',
      a: 'Absolutely. Both our Gulberg M.M. Alam Road and DHA Phase 5 branches feature private acoustic meeting rooms and dedicated study pods equipped with high-speed Wi-Fi and power outlets. Reservations can be placed instantly online.'
    },
    {
      q: 'Do you provide home delivery in Lahore & Karachi?',
      a: 'Yes, we deliver across Lahore (Gulberg, DHA, Cantt, Model Town, Johar Town) and Karachi (Clifton, DHA, Tipu Sultan, PECHS) in insulated temperature-safe packaging within 25–40 minutes.'
    },
    {
      q: 'What are your outlet operating hours?',
      a: 'All our Lahore and Karachi outlets are open daily from 08:00 AM to 02:00 AM for dine-in, takeaway, and express online delivery.'
    }
  ];

  return (
    <section id="faq-section" className="kopag-faq-section">
      <div className="kopag-faq-inner">
        {/* Left Column: Monumental Headline */}
        <div className="kopag-faq-left">
          <h2 className="kopag-faq-title">
            <span>Frequently</span>
            <span>Asked Questions</span>
          </h2>
          <p className="kopag-faq-sub">
            Everything you need to know about our specialty roasting philosophy, bean origins, lounge reservations, and city-wide express delivery.
          </p>
          <div className="kopag-faq-actions">
            <button type="button" className="kopag-faq-cta" onClick={onOpenReserve}>
              Book a Table
            </button>
            <button type="button" className="kopag-faq-cta-sec" onClick={onOpenLocation}>
              Our Outlets
            </button>
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="kopag-faq-right">
          <div className="kopag-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`kopag-accordion-item ${isOpen ? 'is-open' : ''}`}
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                >
                  <div className="kopag-accordion-header">
                    <h3 className="kopag-accordion-question">{faq.q}</h3>
                    <div className="kopag-accordion-toggle">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                  {isOpen && (
                    <div className="kopag-accordion-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
