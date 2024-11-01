// blog/[id].tsx
import { useRouter } from 'next/router';
import React from 'react';
import Blog1 from './parts/Blog1';
// Import other blog components as needed
//import Blog2 from './parts/Blog2'; // Example for another blog component

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Render the appropriate blog component based on the id
  const renderBlog = () => {
    switch (id) {
      case '1':
        return <Blog1 />;
    //   case '2':
    //     return <Blog2 />;
      // Add cases for other blog components
      default:
        return <div>Blog not found</div>;
    }
  };

  return (
    <div>
      {renderBlog()}
    </div>
  );
};

export default BlogPost;
