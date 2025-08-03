import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './components/Services';
import OtherServices from './components/OtherServices';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import './styles/main.css';

function App() {
    return (
        <div>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#other-services">Other Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact Us</a>
            </nav>
            <main>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="services"><Services /></section>
                <section id="other-services"><OtherServices /></section>
                <section id="gallery"><Gallery /></section>
                <section id="testimonials"><Testimonials /></section>
                <section id="contact"><Contact /></section>
            </main>
        </div>
    );
}

export default App;