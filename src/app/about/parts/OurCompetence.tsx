

// pages/OurCompetence.tsx
import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';



const OurCompetence: React.FC = () => {
  const content = "In the year 2020, Digiware was launched. We have perfected the skill of web building and digital marketing in such a short period, guaranteeing that our clients’ businesses thrive and provide a unique brand experience for their valued consumers. Our knowledge of the most up-to-date technologies and processes, as well as the experience of our experienced specialists, has enabled us to supply our customers with 100 percent satisfactory outcomes. We’ve done wonders in the fields of web design and development, as well as digital marketing, showcasing our originality and expertise, earning us several plaudits and prizes.";

  return (
    <div>
      <SectionWithImage 
        imageSrc="/assets/competence.jpg"
        imageAlt="Our Competence"
        title="Our Competence"
        content={content}
         imagePosition="right"
      />
    </div>
  );
};

export default OurCompetence;



