import React from 'react';
import ContactForm from '@/components/form';
import './Banner.css';

interface BannerProps {
  backgroundImage: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ backgroundImage, title }) => {
  return (
    <div className="banner">
      <div className="banner-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="banner-content">
          <div className="banner-text-content">
            <h1><b>{title}</b></h1>
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

export default Banner;
