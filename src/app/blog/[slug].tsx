import BlogPage from '@/components/BlogPage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Define the type for blogContentMap
type BlogContent = {
  mainHeading: string;
  fullScreenImage: string;
  content: Array<{ paragraph: string; heading?: string }>;
  nextPost: { link: string; title: string };
  prevPost: { link: string; title: string };
};

const blogContentMap: Record<string, BlogContent> = {
  'feast-on-fame': {
    mainHeading: "Feast on Fame: A Guide to Social Media Mastery for Elevating Your Restaurant’s Presence by Digiware IT Solutions",
    fullScreenImage: "/assets/news1.png",
    content: [
      {
        paragraph: "In the bustling world of the culinary arts, where flavors dance and aromas weave tales, there lies a crucial element beyond the kitchen’s confines—establishing a robust online presence. In the age of digital dominance, mastering the art of social media is imperative for elevating a restaurant’s presence and ensuring a lasting impact. This journey is expertly navigated in “Feast on Fame: A Guide to Social Media Mastery for Elevating Your Restaurant’s Presence” by Digiware IT Solutions."
      },
      {
        heading: "Social Media Mastery Unveiled",
        paragraph: "At the core of this guide is the concept of social media mastery—a skill set that transcends mere posting and delves into the intricacies of navigating various platforms. Digiware IT Solutions brings forth a comprehensive approach, unraveling the secrets to creating a magnetic online presence that beckons patrons and builds a loyal following."
      },
      // Add more sections as needed...
    ],
    nextPost: {
      link: "/blog/next-post",
      title: "Next Post Title"
    },
    prevPost: {
      link: "/blog/prev-post",
      title: "Previous Post Title"
    },
  },
  // Add other blog content as needed...
};

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // State to handle the blog content
  const [blogContent, setBlogContent] = useState<BlogContent | null>(null);

  useEffect(() => {
    if (typeof slug === 'string') {
      const content = blogContentMap[slug];
      if (content) {
        setBlogContent(content);
      }
    }
  }, [slug]);

  if (!blogContent) {
    return <div>Loading...</div>;
  }

  const { mainHeading, fullScreenImage, content, nextPost, prevPost } = blogContent;

  return (
    <BlogPage
      mainHeading={mainHeading}
      fullScreenImage={fullScreenImage}
      content={content}
      nextPost={nextPost}
      prevPost={prevPost}
    />
  );
};

export default BlogPost;
