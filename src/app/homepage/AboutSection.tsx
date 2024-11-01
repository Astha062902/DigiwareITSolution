// import React from 'react';
// import Image from 'next/image';
// import Button from '@/components/Button';
// import './AboutSection.css';

// const AboutSection: React.FC = () => {
//   return (
//     <div className="about-section">
//       <div className="about-image">
//         <Image src="/assets/about-co.jpg" width={590} height={420} alt="About Our Company" />
//       </div>
//       <div className="about-content-container">
//         <div className="about-content">
//         <h3>Know About Our Company</h3>
//         <p>Digiware IT Solutions is a unique Information Technology/Internet Marketing firm with a goal to equip organisations with cutting-edge technology so that they may survive in the digital era and create long-term value by digitally addressing problems.</p>
//         <p>We are skilled at designing high-quality, smart, and strong software solutions for quick company transformation because we place a premium on innovation. Begin your journey with us to digitise your company utilising cutting-edge technology in order to create a better, bolder, and more futuristic corporate empire.</p>
//         <Button label="Contact Now" className="contact-button" />
//       </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;
import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <div className="about-section">
      <div className="about-image">
        <Image src="/assets/about-co.jpg" layout="fill" objectFit="cover" alt="About Our Company" />
      </div>
      <div className="about-content-container">
        <div className="about-content">
          <h3>Know About Our Company</h3>
          <p>Digiware IT Solutions is a unique Information Technology/Internet Marketing firm with a goal to equip organisations with cutting-edge technology so that they may survive in the digital era and create long-term value by digitally addressing problems.</p>
          <p>We are skilled at designing high-quality, smart, and strong software solutions for quick company transformation because we place a premium on innovation. Begin your journey with us to digitise your company utilising cutting-edge technology in order to create a better, bolder, and more futuristic corporate empire.</p>
          <Button label="Contact Now" className="contact-button" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
