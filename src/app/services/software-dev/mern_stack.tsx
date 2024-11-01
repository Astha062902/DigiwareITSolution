import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';
import styles from '@/components/SectionWithImage.module.css';

const Mern_stack: React.FC = () => {
  const content = "Digiware, as a top development company, can help you supplement your development team with one of our MEAN stack experts. Our developers consistently provide the most cost-effective solutions and are experts in MEAN stack development. We employ MEAN Stack technology to build web applications and websites that will help you turn your website into a more productive and efficient business. Our talented MEAN Stack developers can create websites as well as web apps to promote your company. MERN Stack Development is an open-source Javascript developed for creating online apps and dynamic websites, including software components such as MongoDB, Express.JS, React, and Node.JS. MERN Stack was created specifically to make the development process easier, since each of these tools offers developers an end-to-end development environment.";

  return (
    <section id="mean-mern">
    <div className={styles.whiteBackground}>
      <SectionWithImage 
        imageSrc="/assets/stack.jpg"
        imageAlt="MEAN/MERN Stack Development"
        title="MEAN/MERN Stack Development"
        content={content}
        imagePosition="left"
      />
    </div>
    </section>
  );
};

export default Mern_stack;