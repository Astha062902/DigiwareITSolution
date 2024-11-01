import BlogPage from '@/components/BlogPage';

const blogContent = [
    {
        paragraph:"In the bustling world of the culinary arts, where flavors dance and aromas weave tales, there lies a crucial element beyond the kitchen’s confines—establishing a robust online presence. In the age of digital dominance, mastering the art of social media is imperative for elevating a restaurant’s presence and ensuring a lasting impact. This journey is expertly navigated in “Feast on Fame: A Guide to Social Media Mastery for Elevating Your Restaurant’s Presence” by Digiware IT Solutions."
    },
  {
    heading: "Social Media Mastery Unveiled",
    paragraph: "At the core of this guide is the concept of social media mastery—a skill set that transcends mere posting and delves into the intricacies of navigating various platforms. Digiware IT Solutions brings forth a comprehensive approach, unraveling the secrets to creating a magnetic online presence that beckons patrons and builds a loyal following."
  },
  {
    heading: "Crafting Your Restaurant Presence",
    paragraph: "Your restaurant is not just a physical space; it’s an experience waiting to be shared. “Feast on Fame” emphasizes the significance of crafting a distinct restaurant presence on social media. Digiware IT Solutions delves into the art of storytelling through visuals, engaging narratives, and consistent branding to ensure your restaurant stands out in the digital crowd."
  },
  {
    heading: "Unlocking the Power of Feast on Fame:",
    paragraph: "“Feast on Fame” isn’t just a catchy phrase; it’s a mantra for success in the digital realm. Digiware IT Solutions introduces the concept of turning your culinary creations into a feast for the eyes on social media. Through visually enticing content, strategic posting, and leveraging the right hashtags, your restaurant can command attention and carve a niche in the online foodie community."
  },
  {
    heading: "Amplifying Online Visibility:",
    paragraph: "Visibility is the cornerstone of success in the digital age. Digiware IT Solutions unfolds tactics to amplify your restaurant’s online visibility, ensuring that it doesn’t just exist but thrives in the vast landscape of social media. From optimizing profiles to utilizing location-based tags, every detail contributes to a heightened online presence."
  },
  // Add more sections as needed
];

const nextPost = {
  link: "/blog/next-post",
  title: "Next Post Title"
};

const prevPost = {
  link: "/blog/prev-post",
  title: "Previous Post Title"
};

const MyBlogPage = () => (
  <BlogPage
   
 
    mainHeading="Feast on Fame: A Guide to Social Media Mastery for Elevating Your Restaurant’s Presence by Digiware IT Solutions"
    fullScreenImage="/assets/news1.png"
    content={blogContent}
    nextPost={nextPost}
    prevPost={prevPost}
  />
);

export default MyBlogPage;
