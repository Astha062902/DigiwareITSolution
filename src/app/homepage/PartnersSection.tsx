import React from 'react';
import Image from 'next/image';
import './PartnersSection.css';

const PartnersSection: React.FC = () => {
  return (
    <div className="partners-section">
      <h2>We are Certified Partner</h2>
      <div className="partners-container">
        <div className="partner">
          <Image src="/assets/google-partner.png" width={180} height={60} alt="Partner 1" />
        </div>
        <div className="partner">
          <Image src="/assets/google.png" width={180} height={60} alt="Partner 2" />
        </div>
        <div className="partner">
          <Image src="/assets/facebook-marketing-partners.png" width={180} height={60} alt="Partner 3" />
        </div>
        <div className="partner">
          <Image src="/assets/bing.png" width={180} height={60} alt="Partner 4" />
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
