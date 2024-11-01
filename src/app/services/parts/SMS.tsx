
import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';
import styles from '@/components/SectionWithImage.module.css';




const SMS_IVR: React.FC = () => {
  const content = (
    <>
      <p>
      Digiware is a leading mobile marketing solution supplier with in-depth knowledge of mobile technology, communication and interaction. We use IVR and SMS/MMS technologies to deliver services to businesses. The IVR/SMS service allows mobile users to obtain information via their phones, without the need for human interaction over the phone because the user’s engagement is planned. The majority of current marketing tactics using telecommunications are Interactive Voice Response (IVR) Campaign Systems and SMS Marketing Solutions.
      </p>
      <ul>
        <li><span className={styles.listItem}>Bulk SMS Services</span></li>
        <li><span className={styles.listItem}>Cloud Telephony</span></li>
        <li><span className={styles.listItem}>Lead Mentor</span></li>
      </ul>
    </>
  );

  return (
    <div>
      <SectionWithImage
        imageSrc="/assets/sms-2.jpg"
        imageAlt="SMS & IVR Services"
        title="SMS & IVR Services"
        content={content}
        imagePosition="right" // Adjust as needed
        showReadMoreButton={true}
      />
     
    </div>
  );
};

export default SMS_IVR;





