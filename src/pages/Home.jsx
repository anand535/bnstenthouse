import React from 'react';
import About from './About.jsx';
import Services from '../components/Services.jsx';
import Gallery from '../components/Gallery.jsx';
import Testimonials from '../components/Testimonials.jsx';
import OtherServices from '../components/OtherServices.jsx';
import Contact from './Contact.jsx';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';

const Home = () => (
  <div id="home-page" style={{
    minHeight: '100vh',
    background: 'linear-gradient(90deg, #B91B54 0%, #8938D8 100%)'
  }}>
    <Navbar />
    <section id="home">
      {/* Hero/Header Section */}
      <Header />
    </section>
    <section id="about">
      <div className="glass-effect">
        <About />
      </div>
    </section>
    <section id="services">
      <div className="glass-effect">
        <Services />
      </div>
    </section>
    <section id="gallery">
      <div className="glass-effect">
        <Gallery />
      </div>
    </section>
    <section id="testimonials">
      <div className="glass-effect">
        <Testimonials />
      </div>
    </section>
    <section id="other-services">
      <div className="glass-effect">
        <OtherServices />
      </div>
    </section>
    <section id="contact">
      <div className="glass-effect">
        <Contact />
      </div>
    </section>
  </div>
);

export default Home;