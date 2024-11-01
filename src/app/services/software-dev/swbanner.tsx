import React from 'react';
import Banner from '@/components/Banner';

const SoftwareBanner: React.FC = () => {
  return (
    <div>
      <Banner 
        backgroundImage="/assets/softwarebg.jpg"
        title="SOFTWARE DEVELOPMENT"
      />
      {/* Other content for the services page */}
    </div>
  );
};

export default SoftwareBanner;
