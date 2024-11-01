


"use client";

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css';
import './form.css';

interface ContactFormProps {
  className?: string;
  styles?: { [key: string]: string };
}

const ContactForm: React.FC<ContactFormProps> = ({ className, styles = {} }) => {
  const [phone, setPhone] = useState('');

  return (
    <div className={`form-container ${className} ${styles.formContainer || ''}`}>
      <form className="contact-form">
        <h4 className="form-heading">GET FREE CONSULTATION</h4>
        <div className="vborder"></div>
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div className="form-group">
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={setPhone}
            containerClass="phone-input-container"
            inputClass={`phone-input ${styles.phoneInput || ''}`}
            buttonClass="phone-input-button"
            dropdownClass="phone-input-dropdown"
          />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="E-mail" required />
        </div>
        <div className="form-group">
          <select id="service" name="service" required>
            <option value="" disabled selected>Select Required Service</option>
            <option value="service1">Software Development</option>
            <option value="service2">Web Development</option>
            <option value="service3">Digital Marketing</option>
            <option value="service4">UX Design</option>
            <option value="service5">Graphic Design & Branding</option>
            <option value="service6">SMS & IVR Services</option>
          </select>
        </div>
        <div className="form-group">
          <textarea id="message" name="message" rows={4} placeholder="How can we help you?" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className={`send-button ${styles.sendButton || ''}`}>SEND MESSAGE</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;



