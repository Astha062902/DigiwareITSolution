

import React from 'react';
import ContactForm from '@/components/form';
import Button from '@/components/Button';
import './HomeBanner.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h1><b>TECHNOLOGY IN THE WORKPLACE</b></h1>
            <h4>NEW INNOVATION AND TECHNOLOGY FOR YOUR BUSINESS</h4>
            <div className="buttons">
              <button className="knowmore-button">Know More</button>
              <Button label="Contact Us" className="contactus-button" />
            </div>
          </div>
          <div className="form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="form-below-banner">
        <ContactForm className="contact-form-fullwidth" />
      </div>
    </div>
  );
};

export default HeroSection;


