

// pages/OurCompetence.tsx
import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';



const AI_ML: React.FC = () => {
  const content = "Artificial intelligence (AI) is a vast subject of computer science that focuses on developing intelligent machines that can do tasks that need human intelligence. Machine learning (ML) is a technique that allows a computer program to understand data without the assistance of a programmer. It increases its capacity to comprehend information over time, resulting in increasingly accurate prediction models. Python is user-friendly and can do the same tasks as other programming languages with fewer lines of code. A machine learning (ML) software may be thought of as a specialised subset of artificial intelligence (AI) that excels at a small range of activities. The Python community has created a number of modules to help programmers implement machine learning.";

  return (
    <section id="ai-ml">
    <div>
    
      <SectionWithImage 
        imageSrc="/assets/ai_ml_python.jpg"
        imageAlt="AI & ML- Python"
        title="AI & ML- Python"
        content={content}
         imagePosition="right"
      />
    </div>
    </section>
  );
};

export default AI_ML;



