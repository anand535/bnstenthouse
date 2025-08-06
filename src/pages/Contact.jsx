import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-section">
            <h1 style={{fontSize: '2rem', fontFamily: 'Montserrat, sans-serif', color: 'white', marginBottom: '24px', textAlign: 'center'}}>Contact Us</h1>
            <form className="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div className="contact-info" style={{marginTop: '40px', textAlign: 'left'}}>
                <h2 style={{fontSize: '1.3rem', fontFamily: 'Montserrat, sans-serif', color: '#ffffffff', marginBottom: '10px'}}>Our Address</h2>
                <p>C33/204-24-C, New Loco Colony, Chandua Chhittupur, Varanasi, UP-221001</p>
                <h2 style={{fontSize: '1.3rem', fontFamily: 'Montserrat, sans-serif', color: '#fafafaff', marginBottom: '10px'}}>Phone</h2>
                <p>Landline: (+91)5422221633 <br/>Mobile: (+91)9335471494</p>
                <h2 style={{fontSize: '1.3rem', fontFamily: 'Montserrat, sans-serif', color: '#ffffffff', marginBottom: '10px'}}>Email</h2>
                <p>info@bnstenthouse.com</p>
            </div>
        </div>
    );
};

export default Contact;