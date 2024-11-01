



// pages/SoftwareDevelopment.tsx
import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';
import styles from '@/components/SectionWithImage.module.css';

const SoftwareDevelopment: React.FC = () => {
  const content = (
    <>
      <p>
        What is software development? This is a question that is frequently asked both inside and outside of IT. It’s a method of developing computer software utilizing one or more programming languages to meet specific commercial or personal goals. The construction of operational software is generally the outcome of a planned project including a number of processes and stages.
      </p>
      <ul>
        <li><span className={styles.listItem}> Application Development</span></li>
        <li><span className={styles.listItem}>AI & ML- Python, Tensorflow</span></li>
        <li><span className={styles.listItem}>MEAN/MERN Stack Development</span></li>
        <li><span className={styles.listItem}>Big Data Services</span></li>
        <li><span className={styles.listItem}>Mixed Reality</span></li>
      </ul>
    </>
  );

  return (
    <div className={styles.whiteBackground}>
      <SectionWithImage
        imageSrc="/assets/softwaredev.jpg"
        imageAlt="Software Development"
        title="Software Development"
        content={content}
        imagePosition="left"
        showReadMoreButton={true} // Conditionally show the Read More button
         readMoreLink="/services/software-dev"
      />
    </div>
  );
};

export default SoftwareDevelopment;


