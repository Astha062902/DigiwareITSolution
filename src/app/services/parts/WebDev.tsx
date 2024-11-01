
import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';
import styles from '@/components/SectionWithImage.module.css';




const WebsiteDevelopment: React.FC = () => {
  const content = (
    <>
      <p>
      Web app development services help with the establishment, upkeep and evolution of web-based apps. We design bespoke online apps fitted to individual company requirements, from basic landing pages to complicated customised web solutions, and assist customers to control expenses without investing in massive software where they may not require all modules and wind up paying more for customization.
      </p>
      <ul>
        <li><span className={styles.listItem}>CMS Development</span></li>
        <li><span className={styles.listItem}>E-commerce Development</span></li>
        <li><span className={styles.listItem}>Custom Website Development</span></li>
        <li><span className={styles.listItem}>Real Estate Website Development</span></li>
        <li><span className={styles.listItem}>Node JS Development</span></li>
        <li><span className={styles.listItem}>Python Development</span></li>
        <li><span className={styles.listItem}>Angular Development</span></li>
        <li><span className={styles.listItem}>React Development</span></li>
      </ul>
    </>
  );

  return (
    <div>
      <SectionWithImage
        imageSrc="/assets/webdev.jpg"
        imageAlt="Website Development"
        title="Website Development"
        content={content}
        imagePosition="right" // Adjust as needed
        showReadMoreButton={true}
      />
     
    </div>
  );
};

export default WebsiteDevelopment;





