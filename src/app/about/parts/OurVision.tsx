// import React from 'react';
// import Image from 'next/image';
// import './OurVision.css';

// const OurVision: React.FC = () => {
//   return (
//     <div className="vision-container">
//       <div className="vision-content">
//         <h2>Our Vision</h2>
//         <p>
//           Our vision is to empower businesses with innovative technology solutions that drive growth and success in the digital age. We strive to be at the forefront of technological advancements, providing our clients with cutting-edge tools and strategies that help them achieve their goals and stay ahead of the competition. Through our dedication to excellence and continuous improvement, we aim to create long-lasting partnerships and deliver exceptional value to our clients.
//         </p>
//       </div>
//       <div className="vision-image">
//         <Image src="/assets/our-vision.jpg" alt="Our Vision" layout="responsive" width={700} height={475} />
//       </div>
//     </div>
//   );
// };

// export default OurVision;



// pages/OurVision.tsx
import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';
import styles from '@/components/SectionWithImage.module.css';

const OurVision: React.FC = () => {
  const content = "Our vision is to empower businesses with innovative technology solutions that drive growth and success in the digital age. We strive to be at the forefront of technological advancements, providing our clients with cutting-edge tools and strategies that help them achieve their goals and stay ahead of the competition. Through our dedication to excellence and continuous improvement, we aim to create long-lasting partnerships and deliver exceptional value to our clients.";

  return (
    <div className={styles.whiteBackground}>
      <SectionWithImage 
        imageSrc="/assets/our-vision.jpg"
        imageAlt="Our Vision"
        title="Our Vision"
        content={content}
        imagePosition="left"
      />
    </div>
  );
};

export default OurVision;
