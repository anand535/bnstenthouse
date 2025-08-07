import React from 'react';
// Removed slick-carousel imports for static cards
import '../styles/Services.css';

const serviceData = [
  {
    title: 'Wedding Decoration',
    desc: 'Elegant and personalized decorations for your special day.',
    img: 'https://v5iuluhlwynnbfbz.public.blob.vercel-storage.com/services/Wedding-Decor.jpg' // Updated to use relative path
  },
  {
    title: 'Corporate Events',
    desc: 'Professional event management for conferences, seminars, and corporate gatherings.',
    img: 'https://v5iuluhlwynnbfbz.public.blob.vercel-storage.com/services/Corporate-Events.jpg' // Updated to use relative path
  },
  {
    title: 'Birthday Parties & Decorations',
    desc: 'Fun and creative themes for unforgettable birthday celebrations.',
    img: 'https://v5iuluhlwynnbfbz.public.blob.vercel-storage.com/services/Birthday-decor.jpg' // Updated to use relative path
  },
  // {
  //   title: 'Entertainment',
  //   desc: 'Music, performances, and activities to engage your guests.',
  //   img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e'
  // },
  // {
  //   title: 'Logistics',
  //   desc: 'Seamless coordination of transport, setup, and schedules.',
  //   img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  // }
];

// No carousel settings needed for static cards

const Services = () => (
  <section id="services" className="services-section">
    <h2>Our Services</h2>
    <div className="services-list">
      {serviceData.map((service, idx) => (
        <div className="service-card" key={idx}>
          <img src={service.img} alt={service.title} className="service-img" />
          <div className="service-title">{service.title}</div>
          <div className="service-desc">{service.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
