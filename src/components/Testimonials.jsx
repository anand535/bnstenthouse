import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    text: 'Working with Biharji and Sons was an amazing experience. Their attention to detail and creative ideas made our celebration truly special.',
    author: 'Aditya & Family'
  },
  {
    text: 'The team transformed our vision into reality. Their dedication and professionalism made our event stress-free and memorable.',
    author: 'Jyoti Anand.'
  },
  {
    text: 'Exceptional service from start to finish. They handled everything perfectly and created an atmosphere that exceeded our expectations.',
    author: 'Adesh Prasad.'
  }
];

const getSlidesToShow = (width) => {
  if (width < 600) return 1;
  if (width < 900) return 2;
  return 3;
};

const baseSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
};

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonials</h2>
      <Slider
        {...baseSettings}
        slidesToShow={slidesToShow}
        className="testimonials-carousel"
      >
        {testimonialsData.map((testimonial, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="testimonial-text">{testimonial.text}</div>
            <div className="testimonial-author">{testimonial.author}</div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;