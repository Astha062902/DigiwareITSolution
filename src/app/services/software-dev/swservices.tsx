import React from 'react';
import CenteredTitleAndContent from '@/components/CenteredTitleandContent';

const SWServices: React.FC = () => {
  const content = (
    <p>
     Your requirements are distinct, and so should your software solution. Custom software is a key source of competitive advantage for businesses of all sizes in a variety of sectors. It’s not enough for software to solve today’s issues; it must also solve difficulties in the future. Digiware specialises in creating scalable bespoke software solutions that will allow you to compete in the future. To develop a brighter future, today’s dynamic and new-age enterprises need custom digital experiences. The software development team at Digiware has a proven track record of executing high-impact digital transformations with maximum efficiency and agility. We’ve aided a number of firms all around the world in establishing a digital-driven strategy for realising their full potential.
    </p>
  );

  return (
    <div>
      <CenteredTitleAndContent title="Software Development Services" content={content} contentAlignment='center' />
    </div>
  );
};

export default SWServices;