import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';
import styles from '@/components/SectionWithImage.module.css';

const App_dev: React.FC = () => {
  const content = "For firms in all sectors, custom apps are more vital than ever. When it comes to developing new apps or maintaining existing ones, the risks are just as high. The Application Development Services offered by Digiware are designed to give excellent assistance to internal and external end-users throughout their digital journey. We’re a web and mobile app development company focused on delivering high-quality software. Our development teams are experts in a number of different technology stacks. We create fully functioning, scalable, and durable software that stands the test of time. Technology advice, development, testing, support and maintenance are all part of our application development services. Digiware provides expert application development services as well as knowledge of various design patterns and technology stacks.";

  return (
    <section id="app-dev">
    <div className={styles.whiteBackground}>
      <SectionWithImage 
        imageSrc="/assets/app_dev.jpg"
        imageAlt="Application Development"
        title="Application Development"
        content={content}
        imagePosition="left"
      />
    </div>
    </section>
  );
};

export default App_dev;
