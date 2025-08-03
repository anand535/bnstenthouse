import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const cardRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.forEach((ref, idx) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight - 60) {
            ref.current.classList.add('visible');
          } else {
            ref.current.classList.remove('visible');
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cardRefs]);

  return (
    <div className="about">
      <div ref={cardRefs[0]} className="about-card">
        <h1>About Us</h1>
        <h2 style={{ color: '#e6b98a', fontStyle: 'italic', fontWeight: 700, marginTop: '32px' }}>
          Crafting Celebrations with Elegance & Heart
        </h2>
        <p>
          At Bihari Ji & Sons in Varanasi, we believe that every moment deserves to be celebrated in style. With years of experience and a flair for premium décor, our team transforms weddings, corporate events, and private celebrations into unforgettable experiences.
        </p>
      </div>
      <div ref={cardRefs[1]} className="about-card right">
        <h2 style={{ color: '#e6b98a', fontWeight: 700, marginTop: '32px' }}>Why Choose Us?</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '24px' }}>
          <li>✨ <b>Signature Style</b> – Thoughtfully curated décor themes tailored to your event</li>
          <li>🌷 <b>Expert Team</b> – Creative professionals with an eye for detail and trends</li>
          <li>💡 <b>Custom Concepts</b> – Designs that reflect your personality and vision</li>
          <li>🌟 <b>Impeccable Quality</b> – Premium materials that ensure durability and elegance</li>
        </ul>
      </div>
      <div ref={cardRefs[2]} className="about-card">
        <h2 style={{ color: '#e6b98a', fontWeight: 700, fontStyle: 'italic', marginTop: '32px' }}>From Concept to Creation</h2>
        <p>
          Whether you're planning a traditional ceremony or a modern soirée, we handle everything — from floral installations and lighting setups to custom backdrops and mood-enhancing accents. Every piece is placed with care, every detail polished to perfection.
        </p>
      </div>
      <div ref={cardRefs[3]} className="about-card right">
        <p style={{ color: '#e6b98a', fontStyle: 'italic', marginTop: '32px' }}>
          🎊 <b>Let’s Celebrate Together</b> &nbsp; Step into a world where design meets emotion. Bihari Ji & Sons is your trusted partner in creating décor that’s more than beautiful—it’s meaningful.
        </p>
      </div>
    </div>
  );
};

export default About;