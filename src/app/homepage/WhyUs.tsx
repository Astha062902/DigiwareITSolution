// import React from 'react';
// import Image from 'next/image';
// import './WhyUs.css';

// const WhyUsPage: React.FC = () => {
//   return (
//     <div className="whyUsContainer">
//       <h2>Why Choose Us?</h2>
//       <div className="whyUsGrid">
//         <div className="gridItem">
//           <Image src="/assets/innovation.png" width={150} height={150} alt="Innovation" />
//           <div className="textContent">
//             <h3>Innovation</h3>
//             <p>With our experience, we provide simple business intelligence by bringing fresh ideas to the table every time. We’ve always believed that love for coding can lead to amazing results.</p>
//           </div>
//         </div>
//         <div className="gridItem">
//           <Image src="/assets/project-delivery.png" width={150} height={150} alt="Project Delivery" />
//           <div className="textContent">
//             <h3>Project Delivery</h3>
//             <p>With on-time delivery and a reasonable price range, we provide what others promise. We have a huge team of professionals who expertise in delivering projects across industry verticals in mobile and cloud.</p>
//           </div>
//         </div>
//         <div className="gridItem">
//           <Image src="/assets/team.png" width={150} height={150} alt="Team" />
//           <div className="textContent">
//             <h3>Team</h3>
//             <p>We are a highly skilled group with extensive expertise in online design, web development, logo and branding, internet marketing, game development, and app development.</p>
//           </div>
//         </div>
//         <div className="gridItem">
//           <Image src="/assets/support.png" width={150} height={150} alt="Support" />
//           <div className="textContent">
//             <h3>Support</h3>
//             <p>We endeavour to serve you with excellent service. Our team goes above and beyond to assure your total satisfaction, and we’re continually searching for ways to enhance our services.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyUsPage;

import React from 'react';
import GridItems from '@/components/GridItems';

const WhyUsPage: React.FC = () => {
  const items = [
    {
      src: '/assets/innovation.png',
      width: 150,
      height: 150,
      alt: 'Innovation',
      title: 'Innovation',
      description: 'With our experience, we provide simple business intelligence by bringing fresh ideas to the table every time. We’ve always believed that love for coding can lead to amazing results.',
    },
    {
      src: '/assets/project-delivery.png',
      width: 150,
      height: 150,
      alt: 'Project Delivery',
      title: 'Project Delivery',
      description: 'With on-time delivery and a reasonable price range, we provide what others promise. We have a huge team of professionals who expertise in delivering projects across industry verticals in mobile and cloud.',
    },
    {
      src: '/assets/team.png',
      width: 150,
      height: 150,
      alt: 'Team',
      title: 'Team',
      description: 'We are a highly skilled group with extensive expertise in online design, web development, logo and branding, internet marketing, game development, and app development.',
    },
    {
      src: '/assets/support.png',
      width: 150,
      height: 150,
      alt: 'Support',
      title: 'Support',
      description: 'We endeavour to serve you with excellent service. Our team goes above and beyond to assure your total satisfaction, and we’re continually searching for ways to enhance our services.',
    },
  ];

  return <GridItems heading="Why Choose Us?" items={items} />;
};

export default WhyUsPage;
