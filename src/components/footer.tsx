

import React from 'react';
import './Footer.css';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-second-section">
        <div className="footer-column footer-column1">
          <Image src="/assets/logobg.png" width={200} height={70} alt="Company Logo" className="company-logo" />
         
          <p><Image src="/assets/pin.png" width={15} height={15} alt="pin" /> Plot No. 60, Sarhaul, Sector 18, Gurugram, Haryana 122008</p>
          <p><Image src="/assets/phone.png" width={15} height={15} alt="phone" /> +91 7283070707</p>
          <p><Image src="/assets/email.png" width={15} height={15} alt="mail" /> info@digiwareitsolution.com</p>
        </div>
        
        <div className="footer-column">
          <h5>Our Services</h5>
          <p><Image src="/assets/arrowhead.png" width={8} height={8} alt="arrowhead" /> Web Development Services</p>
          <p><Image src="/assets/arrowhead.png" width={8} height={8} alt="arrowhead" /> Digital Marketing Services</p>
          <p><Image src="/assets/arrowhead.png" width={8} height={8} alt="arrowhead" /> Restaurant Digital Marketing</p>
        </div>
        <div className="footer-column">
          <h5>Connect With Us</h5>
          <p>Connect with us through our social media handles and channels</p>
          <div className="social-icons">
            <Image src="/assets/facebook.png" width={15} height={15} alt="facebook" />
            <Image src="/assets/insta.png" width={15} height={15} alt="instagram" />
          </div>
        </div>
        <div className="footer-column">
          <h5>Quick Enquiry</h5>
          <form className="enquiry-form">
            <input type="text" placeholder="NAME" required />
            <input type="email" placeholder="EMAIL" required />
            <input type="tel" placeholder="PHONE" required />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <div className="footer-rights">
        <p>Digiware IT Solutions. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
