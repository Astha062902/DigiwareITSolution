import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';
import styles from '@/components/SectionWithImage.module.css';

const DigitalMarketing: React.FC = () => {
  const content = (
    <>
      <p>
      If the internet is the most important worldwide business platform today, then digital marketing services are required to fully use this platform. Digiware’s professional digital marketing services are based on decades of experience and extensive knowledge in delivering you custom digital marketing services that help you expand the reach of your digital goods marketing, sales, and distribution programs into new markets or to targeted online communities.
      </p>
      <ul>
        <li><span className={styles.listItem}>Google, Facebook & Linkedin Ads</span></li>
        <li><span className={styles.listItem}>Search Engine Optimization (SEO)</span></li>
        <li><span className={styles.listItem}>Search Engine Marketing (SEM)</span></li>
        <li><span className={styles.listItem}>Social Media Marketing</span></li>
        <li><span className={styles.listItem}>Youtube Marketing</span></li>
        <li><span className={styles.listItem}>Email & SMS Marketing</span></li>
        <li><span className={styles.listItem}>Online Reputation Management (ORM)</span></li>
      </ul>
    </>
  );

  return (
    <div className={styles.whiteBackground}>
      <SectionWithImage
        imageSrc="/assets/digital-marketing.jpg"
        imageAlt="Digital Marketing"
        title="Digital Marketing"
        content={content}
        imagePosition="left"
        showReadMoreButton={true} // Conditionally show the Read More button
      />
    </div>
  );
}

export default DigitalMarketing;