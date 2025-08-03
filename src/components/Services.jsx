import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Services.css';

const serviceData = [
  {
    title: 'Event Planning',
    desc: 'Comprehensive planning for corporate, social, and private events.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
  },
  {
    title: 'Venue Coordination',
    desc: 'Finding and managing the perfect venue for your event.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca'
  },
  {
    title: 'Catering Services',
    desc: 'Delicious menus tailored to your event and guests.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308'
  },
  {
    title: 'Entertainment',
    desc: 'Music, performances, and activities to engage your guests.',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e'
  },
  {
    title: 'Logistics',
    desc: 'Seamless coordination of transport, setup, and schedules.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } }
  ]
};

const Services = () => (
  <section id="services" className="services-section">
    <h2>Our Services</h2>
    <Slider {...settings} className="services-carousel">
      {serviceData.map((service, idx) => (
        <div className="service-card" key={idx}>
          <img src={service.img} alt={service.title} className="service-img" />
          <div className="service-title">{service.title}</div>
          <div className="service-desc">{service.desc}</div>
        </div>
      ))}
    </Slider>
  </section>
);

export default Services;
