import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';
import styles from '@/components/SectionWithImage.module.css';

const GraphicsDesign: React.FC = () => {
  const content = (
    <>
      <p>
      Digiware has vast expertise in the creation and management of brand identities. Outstanding website designs, attention-grabbing logos, noteworthy posters, and gorgeous flexes are just a few of the Graphic Design and Branding Services that businesses require to boost their brand image while increasing awareness. Customers are quickly engaged and their attention is captured when the visuals are creative, smart, and prominent.
      </p>
      <ul>
        <li><span className={styles.listItem}>Logo & Brand Identity</span></li>
        <li><span className={styles.listItem}>Graphic Design</span></li>
        <li><span className={styles.listItem}>Info-graphics Design</span></li>
        <li><span className={styles.listItem}>Print Design</span></li>
        <li><span className={styles.listItem}>Social Media Post Design</span></li>
        <li><span className={styles.listItem}>Explanation Videos</span></li>

      </ul>
    </>
  );

  return (
    <div className={styles.whiteBackground}>
      <SectionWithImage
        imageSrc="/assets/graphics.jpg"
        imageAlt="Graphics Design & Branding"
        title="Graphics Design & Branding"
        content={content}
        imagePosition="left"
        showReadMoreButton={true} // Conditionally show the Read More button
      />
    </div>
  );
}

export default GraphicsDesign;