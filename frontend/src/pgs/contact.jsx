import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    reason: '',
    confirmationNumber: '',
    message: '',
    phonePrimary: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row"> 
        <select name="title" value={formData.title} onChange={handleChange} className="form-input" placeholder="Title"
        >
          <option value="">Title</option>
          <option value="Mr">None</option>
          <option value="Ms">Mr.</option>
          <option value="Mrs">Mrs.</option>
          <option value="Mrs">Ms.</option>
          <option value="Mrs">Miss</option>
        </select>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="form-input"
          placeholder="First Name*"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="form-input"
          placeholder="Last Name*"
        />
      </div>
      <div className="form-row">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="Email*"
        />
        <div className="phone-row">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="Phone number"
          />
          <label>
            <input
              type="checkbox"
              name="phonePrimary"
              checked={formData.phonePrimary}
              onChange={handleChange}
            />
            Make phone number my primary contact option.
          </label>
        </div>
      </div>
      <div className="form-row">
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Destination*</option>
          <option value="Paris">Paris</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
        </select>
        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Reason for contact*</option>
          <option value="Booking">Booking</option>
          <option value="Inquiry">Inquiry</option>
          <option value="Inquiry">Make or Change Reservaton</option>
          <option value="Inquiry">General Questions</option>
          <option value="Inquiry">Travel Agent Inquiry</option>
          <option value="Inquiry">Technical support</option>
          <option value="Inquiry">Comments nd Concerns</option>
        </select>
      </div>
      <div className="form-row">
        <input
          type="text"
          name="confirmationNumber"
          value={formData.confirmationNumber}
          onChange={handleChange}
          className="form-input"
          placeholder="Confirmation Number"
        />
      </div>
      <div className="form-row">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      <button type="submit" className="form-submit-button">
        Submit
      </button>
    </form>

    
  );
}

export default Contact;
