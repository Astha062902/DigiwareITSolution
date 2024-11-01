
import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';
import styles from '@/components/SectionWithImage.module.css';




const UX_UI: React.FC = () => {
  const content = (
    <>
      <p>
      We recognize the significance of good design in achieving digital success. Digiware’s UI and UX expertise seamlessly integrate into the software development process to create user-friendly digital products. We provide a full range of UI/UX services, including branding, responsive site design, mobile app design, user experience consultancy, and promotional graphics, all using the most up-to-date tools and technology.
      </p>
      <ul>
        <li><span className={styles.listItem}>UX Research</span></li>
        <li><span className={styles.listItem}>UX Testing</span></li>
        <li><span className={styles.listItem}>Information Architecture</span></li>
        <li><span className={styles.listItem}>Dashboard Design</span></li>
        <li><span className={styles.listItem}>Interaction Design</span></li>
      </ul>
    </>
  );

  return (
    <div>
      <SectionWithImage
        imageSrc="/assets/UI-UX.jpg"
        imageAlt="UX/UI Design"
        title="UX/UI Design"
        content={content}
        imagePosition="right" // Adjust as needed
        showReadMoreButton={true}
      />
     
    </div>
  );
};

export default UX_UI;





