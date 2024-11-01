import React from 'react';
import CardGrid from '@/components/CardGrid';

const ExamplePage: React.FC = () => {
  const cards = [
    { heading: 'Creative Thoughts', content: 'By thinking outside the box and designing unique software solutions that exceed expectations and provide you a competitive advantage, we facilitate innovation and disruption.' },
    { heading: 'Unparalleled Skills', content: 'Experience is the best teacher. Digiware’s full stack development team has worked with businesses of all sizes, from startups to enterprises, in almost every industry.' },
    { heading: 'Agile Progression', content: 'To expedite your project, our software development team collaborates with your team. We work with you at each iteration to ensure that your solution performs as planned.' },

  ];

  return (
    <div>
      <CardGrid cards={cards} />
    </div>
  );
};

export default ExamplePage;
