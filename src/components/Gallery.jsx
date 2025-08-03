import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Gallery.css';

const galleryImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
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

const Gallery = () => (
  <section id="gallery" className="gallery-section">
    <h2>Gallery</h2>
    <p>Check out some of our past events!</p>
    <Slider {...settings} className="gallery-carousel">
      {galleryImages.map((img, idx) => (
        <div className="gallery-card" key={idx}>
          <img src={img} alt={`Event ${idx + 1}`} className="gallery-img" />
        </div>
      ))}
    </Slider>
  </section>
);

export default Gallery;
