import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    text: 'B-S made our wedding day absolutely perfect! Every detail was handled with care and professionalism.',
    author: 'Sarah & Mike'
  },
  {
    text: 'The team at B-S exceeded our expectations for our corporate event. Highly recommended!',
    author: 'Acme Corp.'
  },
  {
    text: 'From planning to execution, everything was seamless. Thank you for making our celebration unforgettable!',
    author: 'Priya S.'
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 900, settings: { slidesToShow: 1 } }
  ]
};

const Testimonials = () => (
  <section id="testimonials" className="testimonials-section">
    <h2>Testimonials</h2>
    <Slider {...settings} className="testimonials-carousel">
      {testimonialsData.map((testimonial, idx) => (
        <div className="testimonial-card" key={idx}>
          <div className="testimonial-text">{testimonial.text}</div>
          <div className="testimonial-author">{testimonial.author}</div>
        </div>
      ))}
    </Slider>
  </section>
);

export default Testimonials;
