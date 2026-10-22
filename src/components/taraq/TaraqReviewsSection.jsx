import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle, Quote } from 'lucide-react';

export default function TaraqReviewsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = [
    {
      id: 1,
      quote: 'The Spanish Latte and Mocha Majestic are unrivaled in Lahore. You can immediately taste the single-origin beans roasted to perfection.',
      name: 'Hamza Malik',
      title: 'Gulberg III, Lahore Regular',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      tag: 'Verified Patron'
    },
    {
      id: 2,
      quote: 'Finally a specialty roastery in Pakistan that takes manual filter extraction seriously. The Chemex and Salted Caramel Cacao are absolute perfection.',
      name: 'Ayesha Farooq',
      title: 'Coffee Enthusiast, Karachi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      tag: 'Specialty Member'
    },
    {
      id: 3,
      quote: 'Best coffee work ambiance in Gulberg. Super fast Wi-Fi, peaceful executive seating, and open until 2:00 AM every single night.',
      name: 'Bilal Tariq',
      title: 'Product Designer, Lahore',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      tag: 'Verified Regular'
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="taraq-section taraq-reviews-section artisan-reviews">
      <div className="taraq-container">
        {/* Header */}
        <div className="taraq-center-header">
          <div className="taraq-section-number">COMMUNITY LOVE &mdash; GULBERG &amp; KARACHI</div>
          <h2 className="taraq-section-title">
            WHY COFFEE LOVERS COME BACK
          </h2>
          <p className="taraq-section-subtitle">
            Loved by coffee connoisseurs, creators, and evening loungers across Lahore and Karachi.
          </p>
        </div>

        {/* Desktop 3-Card Grid */}
        <div className="taraq-reviews-wrapper">
          <div className="taraq-reviews-grid desktop-only">
            {reviews.map((rev) => (
              <div key={rev.id} className="taraq-review-card">
                <div className="card-top-row">
                  <div className="review-stars-strip">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  <Quote size={20} className="quote-watermark" />
                </div>

                <p className="review-quote-text">&ldquo;{rev.quote}&rdquo;</p>

                <div className="review-author-row">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="review-author-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/taraq/avatar_nadia.png';
                    }}
                  />
                  <div className="review-author-info">
                    <span className="author-name">{rev.name}</span>
                    <span className="author-title">{rev.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="taraq-reviews-slider mobile-only">
            <div className="taraq-review-card active-slide">
              <div className="card-top-row">
                <div className="review-stars-strip">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <Quote size={20} className="quote-watermark" />
              </div>

              <p className="review-quote-text">&ldquo;{reviews[activeIdx].quote}&rdquo;</p>

              <div className="review-author-row">
                <img
                  src={reviews[activeIdx].avatar}
                  alt={reviews[activeIdx].name}
                  className="review-author-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/taraq/avatar_nadia.png';
                  }}
                />
                <div className="review-author-info">
                  <span className="author-name">{reviews[activeIdx].name}</span>
                  <span className="author-title">{reviews[activeIdx].title}</span>
                </div>
              </div>
            </div>

            <div className="slider-nav-btns">
              <button className="slider-btn" onClick={handlePrev} aria-label="Previous review">
                <ChevronLeft size={18} />
              </button>
              <span className="slider-counter">{activeIdx + 1} / {reviews.length}</span>
              <button className="slider-btn" onClick={handleNext} aria-label="Next review">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
