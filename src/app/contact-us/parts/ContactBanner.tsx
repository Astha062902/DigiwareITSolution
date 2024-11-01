import React from 'react';
import styles from './ContactBanner.module.css';

const ContactBanner: React.FC = () => {
  return (
    <div className={styles.contactBanner}>
      <div className={styles.contactBannerContent}>
        <h1>Contact Us</h1>
        <p>HOME &gt; CONTACT US</p>
      </div>
    </div>
  );
};

export default ContactBanner;
