import React, { useRef, useState } from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_204tg69', // replace with your EmailJS service ID
      'template_5xmq40e', // replace with your EmailJS template ID
      form.current,
      'e2RZiUk5BdTb4tUt0' // replace with your EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        setMessageSent(true);
        setError('');
        e.target.reset(); // reset form on success
      },
      (error) => {
        console.log(error.text);
        setError('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <div className="contact-container">
      <div className="contact-form-section">
        <h4>Send Us a Quick Message</h4>
        <h1>GET IN TOUCH</h1>
        <p>Need Something? Fill out the form and we will connect as soon as possible.</p>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="input-row">
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="user_name" required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" name="user_email" required />
            </div>
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input type="number" name="user_phone" />
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="send-button">Send</button>
          {messageSent && <p className="success-msg">Message sent successfully!</p>}
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>

      <div className="contact-info-section">
        <h3>Call / Email Us</h3>
        <p>You can also try contacting us quickly via Phone / Email.</p>
        <p><FaPhoneAlt className="icon" /> +91 9999999999</p>
        <p><FaEnvelope className="icon" /> chemsafe.industries@gmail.com</p>

        <h3>Visit Us</h3>
        <p>Want to explore more about us? Do visit us.</p>

        <p><strong>Manufacturing Site & Registered Office:</strong><br />
          <FaMapMarkerAlt className="icon" /> Bamnod 425503, Maharashtra
        </p>

        <p><strong>Head Office:</strong><br />
          <FaMapMarkerAlt className="icon" /> Bamnod 425503, Maharashtra
        </p>
      </div>
    </div>
  );
}

export default Contact;

