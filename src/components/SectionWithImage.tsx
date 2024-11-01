// components/SectionWithImage.tsx
// import React from 'react';
// import Image from 'next/image';
// import styles from './SectionWithImage.module.css';

// interface SectionWithImageProps {
//   imageSrc: string;
//   imageAlt: string;
//   title: string;
//   content: React.ReactNode;
//   imagePosition?: 'left' | 'right';
//   showReadMoreButton?: boolean;
// }

// const SectionWithImage: React.FC<SectionWithImageProps> = ({
//   imageSrc,
//   imageAlt,
//   title,
//   content,
//   imagePosition = 'left',
//   showReadMoreButton = false,
// }) => {
//   return (
//     <div className={`${styles.container} ${imagePosition === 'right' ? styles.reverse : ''}`}>
//       <div className={styles.image}>
//         <Image src={imageSrc} alt={imageAlt} layout="responsive" width={700} height={475} />
//       </div>
//       <div className={styles.content}>
//         <h2 className={styles.title}>{title}</h2>
//         <div className={styles.contentBody}>{content}</div>
//         {showReadMoreButton && <button className={styles.readMoreButton}>Read More</button>}
//       </div>
//     </div>
//   );
// };

// export default SectionWithImage;

"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './SectionWithImage.module.css';

interface SectionWithImageProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  content: React.ReactNode;
  imagePosition?: 'left' | 'right';
  showReadMoreButton?: boolean;
  readMoreLink?: string;
}

const SectionWithImage: React.FC<SectionWithImageProps> = ({
  imageSrc,
  imageAlt,
  title,
  content,
  imagePosition = 'left',
  showReadMoreButton = false,
  readMoreLink = '/',
}) => {
  const router = useRouter();

  const handleReadMoreClick = () => {
    if (readMoreLink) {
      router.push(readMoreLink);
    }
  };

  return (
    <div className={`${styles.container} ${imagePosition === 'right' ? styles.reverse : ''}`}>
      <div className={styles.image}>
        <Image src={imageSrc} alt={imageAlt} layout="responsive" width={700} height={475} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.contentBody}>{content}</div>
        {showReadMoreButton && (
          <button className={styles.readMoreButton} onClick={handleReadMoreClick}>
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionWithImage;

