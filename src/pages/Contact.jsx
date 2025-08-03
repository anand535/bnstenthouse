import React from 'react';

const Contact = () => {
    return (
        <div className="contact" style={{maxWidth: '900px', margin: '60px auto', padding: '40px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(78, 84, 200, 0.08)'}}>
            <h1 style={{fontSize: '2rem', fontFamily: 'Montserrat, sans-serif', color: '#4e54c8', marginBottom: '24px'}}>Contact Us</h1>
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
                <h2 style={{fontSize: '1.3rem', fontFamily: 'Montserrat, sans-serif', color: '#8f94fb', marginBottom: '10px'}}>Our Address</h2>
                <p>123 Event St, Event City, EC 12345</p>
                <h2 style={{fontSize: '1.3rem', fontFamily: 'Montserrat, sans-serif', color: '#8f94fb', marginBottom: '10px'}}>Phone</h2>
                <p>(123) 456-7890</p>
                <h2 style={{fontSize: '1.3rem', fontFamily: 'Montserrat, sans-serif', color: '#8f94fb', marginBottom: '10px'}}>Email</h2>
                <p>info@eventmanagement.com</p>
            </div>
        </div>
    );
};

export default Contact;