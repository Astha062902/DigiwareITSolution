import React from 'react';
import styles from './ContactDetails.module.css';
import Image from 'next/image';

const ContactDetails: React.FC = () => {
  return (
    <div className={styles.contactDetails}>
      <div className={styles.contactSection}>
        <Image src="/assets/phone-call.png" alt="Phone" width={80} height={80} />
        <h2>CONTACT DETAILS</h2>
        <p>Please call us anytime and we will be happy to assist you.</p>
        <p className={styles.boldText}>+91-9999794342</p>
      </div>
      <div className={styles.contactSection}>
        <Image src="/assets/envelope.png" alt="Email" width={80} height={80} />
        <h2>EMAIL</h2>
        <p>Please email us anytime and we will be happy to assist you.</p>
        <p className={styles.boldText}>info@digiwareitsolution.com</p>
      </div>
      <div className={styles.contactSection}>
        <Image src="/assets/marker.png" alt="Location" width={80} height={80} />
        <h2>LOCATION</h2>
        <p>Please call, email or submit contact form and we will be happy to assist you.</p>
        
        <div className={styles.address}>
        <p>
          <strong className={styles.lightText}>Gurugram Address:</strong><br/>
          <span className={styles.boldText}>669, MG Road, Sector 28, Gurugram, Haryana 122002</span>
        </p>
        <p>
          <strong className={styles.lightText}>Dubai Address:</strong><br/>
          <span className={styles.boldText}>BCM Corporate Services LLC Office 1305, Building Burlington Tower, 1305 Business Bay, Dubai</span>
        </p>
        </div>
        </div>
      
    </div>
  );
};

export default ContactDetails;

