import React from 'react';

export default function TaraqLoungeStripSection() {
  const images = [
    { src: '/taraq/chemex_clean.png', alt: 'Fresh pour-over coffee dripping in Chemex' },
    { src: '/taraq/gallery_1_lattes.png', alt: 'Two ceramic latte cups on green saucers' },
    { src: '/taraq/gallery_3_tray.png', alt: 'Barista serving hot flat whites on wooden tray' },
    { src: '/taraq/gallery_4_cheers.png', alt: 'Toasting iced matcha, americano and latte' },
    { src: '/taraq/gallery_5_pastry.png', alt: 'Fresh warm croissant and espresso' }
  ];

  return (
    <section className="taraq-section taraq-lounge-strip-section">
      <div className="taraq-container">
        {/* Header */}
        <div className="taraq-center-header">
          <div className="taraq-section-number">06 &mdash; INSIDE THE LOUNGE</div>
          <h2 className="taraq-section-title">
            A SPACE TO SLOW DOWN
          </h2>
        </div>

        {/* Horizontal photo strip */}
        <div className="taraq-lounge-strip">
          {images.map((img, idx) => (
            <div key={idx} className="lounge-strip-item">
              <img src={img.src} alt={img.alt} className="lounge-strip-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
