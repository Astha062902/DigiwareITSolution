import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './BlogPage.css'; // Import the CSS file for styling

// Define types for props
interface ContentSection {
  heading?: string;
  paragraph?: string;
}

interface Post {
  link: string;
  title: string;
}

interface BlogPageProps {
  mainHeading: string;
  fullScreenImage: string;
  content: ContentSection[];
  nextPost?: Post;
  prevPost?: Post;
}

const BlogPage: React.FC<BlogPageProps> = ({ 
  mainHeading, 
  fullScreenImage, 
  content, 
  nextPost, 
  prevPost 
}) => {
  return (
    <div className="blog-page">
      <main>
        <h1>{mainHeading}</h1>
        <div className="full-screen-image">
          <Image src={fullScreenImage} alt="Blog Image" layout="fill" objectFit="cover" />
        </div>
        <div className="content">
          {content.map((section, index) => (
            <div key={index}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraph && <p>{section.paragraph}</p>}
            </div>
          ))}
        </div>
        <div className="navigation">
          {prevPost && (
            <Link href={prevPost.link} className="nav-link prev">
              <div className="arrow left-arrow">&#8592;</div>
              <div>{prevPost.title}</div>
            </Link>
          )}
          {nextPost && (
            <Link href={nextPost.link} className="nav-link next">
              <div>{nextPost.title}</div>
              <div className="arrow right-arrow">&#8594;</div>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
