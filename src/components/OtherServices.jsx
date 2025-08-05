import React from 'react';
import Slider from 'react-slick';
import '../styles/OtherServices.css';

const otherServicesData = [
  {
    title: 'Catering',
    desc: 'Custom menus and professional catering for any event size.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308'
  },
  {
    title: 'Decoration',
    desc: 'Creative themes and decor to transform your venue.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca'
  },
  {
    title: 'Entertainment',
    desc: 'Live music, DJs, performers, and more to keep guests engaged.',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e'
  },
  {
    title: 'Photography',
    desc: 'Capture every moment with our professional photographers.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];



const OtherServices = () => (
  <section id="other-services" className="other-services-section">
    <h2>Other Services</h2>
    <div className="other-services-list">
      {otherServicesData.map((service, idx) => (
        <div className="other-service-card" key={idx}>
          <img src={service.img} alt={service.title} className="other-service-img" />
          <div className="other-service-title">{service.title}</div>
          <div className="other-service-desc">{service.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default OtherServices;
