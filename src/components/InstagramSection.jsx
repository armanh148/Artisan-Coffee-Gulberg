import React from 'react';
import { InstagramIcon } from './SocialIcons';

export default function InstagramSection() {
  const posts = [
    {
      img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=80',
      handle: '@grindel.zurich',
      alt: 'Artisan Espresso Extraction'
    },
    {
      img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
      handle: '@artisancoffee.pk',
      alt: 'Microfoam Latte Art'
    },
    {
      img: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=500&auto=format&fit=crop&q=80',
      handle: '@roastery.dispatch',
      alt: 'Warm Flaky Croissants'
    },
    {
      img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80',
      handle: '@barista.journal',
      alt: 'Valrhona Chocolate Gateau'
    }
  ];

  return (
    <section id="instagram-section" className="instagram-section">
      <div className="instagram-header">
        <h2 className="instagram-title">FOLLOW THE ROASTERY ON INSTAGRAM</h2>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="instagram-handle"
        >
          <InstagramIcon size={20} color="#E2884F" />
          <span>@grindel.cafebar</span>
        </a>
      </div>

      <div className="instagram-grid-4">
        {posts.map((item, index) => (
          <div key={index} className="insta-photo-card">
            <img src={item.img} alt={item.alt} className="insta-photo-img" />
            <div className="insta-user-tag">
              <InstagramIcon size={13} color="#201410" />
              <span>{item.handle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
