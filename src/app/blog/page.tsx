import React from 'react';
 import Header from '@/components/header';
import BlogBanner from './parts/BlogBanner';
import BlogContent from './parts/BlogContent';
import Footer from '@/components/footer'


const Blog: React.FC = () => {
    return (
      <div className="about-container">
        <Header />
        <BlogBanner />
        <BlogContent />
     
       <Footer/>
    </div>
  );
};

export default Blog;