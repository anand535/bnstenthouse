import React from 'react';
import Slider from 'react-slick';
import '../styles/OtherServices.css';

const otherServicesData = [
  {
    title: 'Catering',
    desc: 'Delicious food options to suit every palate.',
    img: 'https://v5iuluhlwynnbfbz.public.blob.vercel-storage.com/services/Catering.jpg'
  },
  {
    title: 'Band Dhol & DJ',
    desc: 'Bannd Dhol for Barat, DJ and more to keep guests engaged.',
    img: 'https://v5iuluhlwynnbfbz.public.blob.vercel-storage.com/services/Band.jpg'
  },
  {
    title: 'Photographers',
    desc: 'Capture every moment with our professional photographers.',
    img: 'https://v5iuluhlwynnbfbz.public.blob.vercel-storage.com/services/photographer.jpg'
  },
  {
    title: 'Anchors',
    desc: 'Engaging anchors to keep the event lively.',
    img: 'https://v5iuluhlwynnbfbz.public.blob.vercel-storage.com/services/anchor.jpg'
  },
  {
    title: 'Singers & Performers',
    desc: 'Live performances to entertain your guests.',
    img: 'https://v5iuluhlwynnbfbz.public.blob.vercel-storage.com/services/Performers.jpg'
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
