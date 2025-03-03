import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import connectionBG from '../assets/images/connection-bg.png';
import '../styles/Connection.scss';

const serviceID = 'service_ezamccr';
const templateID = 'template_r8v5piw';
const userID = 'uesieNfl6p0PM25zY';

const Connection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!validateEmail(formData.email)) newErrors.email = 'Enter a valid email.';
    if (!validatePhone(formData.phone)) newErrors.phone = 'Enter a valid 10-digit phone number.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatusMessage(''), 3000);
      })
      .catch(() => {
        setStatusMessage('Failed to send message. Please try again later.');
        setTimeout(() => setStatusMessage(''), 3000);
      });
  };

  return (
    <div className="connection">
      <div className="connection__content">
        <div className="connection__content__header">
          <p className="p1">Our connection</p>
          <h1 className="h1">Interested in Working With Us</h1>
          <p className="p2">Let’s work together and we’ll help by our best interior design</p>
        </div>
        <form className="connection__content__form" onSubmit={handleSubmit}>
          <div className="connection__content__form__groups">
            <div className="input__group">
              <label htmlFor="name" className="p1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name here"
                className="p2"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="p2">{errors.name}</p>}
            </div>
            <div className="input__group">
              <label htmlFor="email" className="p1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email here"
                className="p2"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="p2">{errors.email}</p>}
            </div>
          </div>
          <div className="connection__content__form__groups">
            <div className="input__group">
              <label htmlFor="phone" className="p1">Phone</label>
              <input
                name="phone"
                placeholder="Your phone number here"
                className="p2"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="p2">{errors.phone}</p>}
            </div>
          </div>
          <div className="connection__content__form__groups">
            <div className="input__group">
              <label htmlFor="message" className="p1">Message</label>
              <input
                name="message"
                placeholder="Your message here"
                className="p2"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="p2">{errors.message}</p>}
            </div>
          </div>
          <div className="connection__content__form__groups">
            <div className="input__group">
              <button type="submit" className="btn1">Submit</button>
            </div>
          </div>
          {statusMessage && <p className="p2">{statusMessage}</p>}
        </form>
      </div>
      <div className="connection__image__container">
        <img src={connectionBG} alt="Image"/>
      </div>
    </div>
  );
};

export default Connection;
