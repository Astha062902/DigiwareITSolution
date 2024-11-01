'use client';
import React, { useState } from 'react';
import styles from './BlogContent.module.css';
import Image from 'next/image';

const BlogContent: React.FC = () => {
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
  ];

  const itemsPerPage = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(news.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const Card: React.FC<{ src: string, height: number, width: number, alt: string, title: string, description: string }> = ({ src, height, width, alt, title, description }) => (
    <div className={styles.newsCardWrapper}>
      <Image src={src} alt={alt} height={height} width={width} />
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
    <section className={styles.blogContent}>
      <div className={styles.blogContentWrapper}>
        <div className={styles.newsGrid}>
          {currentItems.map((item) => (
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
        <div className={styles.pagination}>
          <span className={styles.pageItem} onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}>&laquo;</span>
          {pageNumbers.map(number => (
            <span key={number} className={`${styles.pageItem} ${number === currentPage ? styles.active : ''}`} onClick={() => paginate(number)}>
              {number}
            </span>
          ))}
          <span className={styles.pageItem} onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}>&raquo;</span>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;




