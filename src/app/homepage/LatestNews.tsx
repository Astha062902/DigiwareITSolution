

import React from 'react';
import styles from './LatestNews.module.css';
import Image from 'next/image';

const LatestNews: React.FC = () => {
  const news = [
    {
      id: 1,
      src: '/assets/news1.png',
      height: 200,
      width: 300,
      alt: 'News 1',
      title: 'Feast on Fame: A Guide to Social Media Mastery for Elevating Your Restaurant’s Presence by Digiware IT Solutions',
      description: 'In the bustling world of the culinary arts, where flavors dance and aromas weave tales, there lies a crucial element...',
    },
    {
      id: 2,
      src: '/assets/news2.webp',
      height: 242,
      width: 345,
      alt: 'News 2',
      title: 'The Crucial Role of Location in Real Estate – Navigating Neighborhood Selection for Optimal Investment',
      description: 'In the dynamic world of real estate, success often hinges on strategic decision-making, with one of the most critical factors...',
    },
    {
      id: 3,
      src: '/assets/news3.webp',
      height: 242,
      width: 345,
      alt: 'News 3',
      title: 'Crafting Your Cornerstone: A Guide to Building a Powerful Personal Brand in Real Estate',
      description: 'In the dynamic world of real estate, standing out is not just an option—it’s a necessity. Crafting Your Cornerstone is ...',
    },
    {
      id: 4,
      src: '/assets/news4.jpg',
      height: 242,
      width: 345,
      alt: 'News 4',
      title: 'Tips for Digitizing Financial Services.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  ...',
    },
    {
      id: 5,
      src: '/assets/news5.jpg',
      height: 242,
      width: 345,
      alt: 'News 5',
      title: 'Winning the Race for Digital Commerce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  ...',
    },
    // Add the remaining news items here...
  ];

  const Card: React.FC<{src: string, height: number, width: number, alt: string, title: string, description: string}> = ({ src, height, width, alt, title, description }) => (
    <div className={styles.newsCardWrapper}>
      <Image src={src} alt={alt} height={100} width={200} />
      <h3>{title}</h3>
      <p>{description}</p>
      <hr className={styles.horizontalLine} />
      <div className={styles.cardFooter}>
        <span className={styles.comments}>Comments(0)</span>
        <span className={styles.readMore}>Read More</span>
      </div>
    </div>
  );

  return (
    <section className={styles.latestNews}>
      <div className={styles.latestNewsOverlay}>
        <div className={styles.latestNewsContent}>
          <h2 className={styles.heading}>Latest News</h2>
          <div className={styles.newsSlider}>
            {news.map((item) => (
              <Card
                key={item.id}
                src={item.src}
                height={item.height}
                width={item.width}
                alt={item.alt}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;






