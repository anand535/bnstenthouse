import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Gallery.css';

const getSlidesToShow = (width) => {
  if (width < 600) return 1;
  if (width < 900) return 2;
  if (width < 1200) return 3;
  if (width < 1500) return 4;
  return 5;
};

const baseSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
};

const Gallery = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow(window.innerWidth));

  const openOverlay = (idx) => {
    setCurrentIdx(idx);
    setOverlayOpen(true);
  };
  const closeOverlay = () => setOverlayOpen(false);
  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };
  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const generateGalleryUrls = () => {
      const baseUrl = 'https://v5iuluhlwynnbfbz.public.blob.vercel-storage.com/gallery/';
      const imageCount = 10;
      const urls = Array.from({ length: imageCount }, (_, i) =>
        `${baseUrl}${i + 1}.jpg`
      );
      setGalleryImages(urls);
    };
    generateGalleryUrls();
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <p style={{ color: 'white' }}>Check out some of our past events!</p>

      {galleryImages.length > 0 && (
        <Slider
          {...baseSettings}
          slidesToShow={slidesToShow}
          className="gallery-carousel"
        >
          {galleryImages.map((img, idx) => (
            <div className="gallery-card" key={idx}>
              <img
                src={img}
                alt={`Event ${idx + 1}`}
                className="gallery-img"
                style={{ cursor: 'pointer' }}
                onClick={() => openOverlay(idx)}
              />
            </div>
          ))}
        </Slider>
      )}

      {overlayOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={closeOverlay}
        >
          <button onClick={prevImg} style={{ position: 'absolute', left: 40, top: '50%', fontSize: 32, color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>&lt;</button>
          <img src={galleryImages[currentIdx]} alt="Gallery Large" style={{ maxHeight: '80vh', maxWidth: '80vw', borderRadius: 12, boxShadow: '0 4px 24px #0008' }} />
          <button onClick={nextImg} style={{ position: 'absolute', right: 40, top: '50%', fontSize: 32, color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>&gt;</button>
          <button onClick={closeOverlay} style={{ position: 'absolute', top: 30, right: 30, fontSize: 32, color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>&#10005;</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;