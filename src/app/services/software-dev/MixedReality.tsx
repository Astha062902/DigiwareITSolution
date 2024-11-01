import React from 'react';
import CenteredTitleAndContent from '@/components/CenteredTitleandContent';
import GridItems from '@/components/GridItems';

const MixedReality: React.FC = () => {
  const content = (
    <p>
     Mixed reality (MR) is a user interface in which physical reality and digital material are integrated in such a manner that real-world and virtual items may interact with each other. Mixed reality combines digital and real-world settings, unlike virtual reality (VR), which immerses the user in a purely digital environment, or augmented reality (AR), which layers digital material on top of a physical environment. Mixed reality is commonly referred to as augmented reality (AR), but its ability to integrate real-world and digital aspects takes it further along the virtuality spectrum, which ranges from physical reality to immersive virtual reality.
    </p>
  );

  const items = [
    {
      src: '/assets/VR-1.jpg',
      width: 150,
      height: 150,
      alt: 'Virtual Reality',
      title: 'Virtual Reality',
      description: 'Virtual reality development aids businesses in developing product and process simulations. Data visualisation and product interactions benefit from virtual reality apps. Companies may offer virtual reality training instead of unsafe and costly in-person safety training sessions. Our virtual reality development process is completely turn-key, and we collaborate with you every step of the way, from original concept to final deployment. Virtual Reality provides a new technique for hyper-accelerated learning in ways that have never been seen before.',
    },
    {
      src: '/assets/AR-1.jpg',
      width: 150,
      height: 150,
      alt: 'Augmented Reality',
      title: 'Augmented Reality',
      description: 'Augmented reality app development is based on 3D model creation and algorithm implementation, which are responsible for overlaying virtual content over the scene in the device’s camera lens. Regardless of the in-house solutions, we can integrate the backends of AR apps with your internal systems. Our integration methods include fast 3D model retrieval from data storage, secure connections to your AR metadata storage and other necessary services, and synchronisation of vital user information with your CRM or other business applications.',
    },
  ];

  return (
    <section id="mixed-reality">
    <div>
      <CenteredTitleAndContent title="Mixed Reality" content={content} contentAlignment='left' />
      <GridItems items={items} />;
    </div>
    </section>
  );
};

export default MixedReality