// import React from 'react';
// import './CenteredTitleAndContent.css';

// interface CenteredTitleAndContentProps {
//   title: string;
//   content: React.ReactNode;
// }

// const CenteredTitleAndContent: React.FC<CenteredTitleAndContentProps> = ({ title, content }) => {
//   return (
//     <div className="centered-title-and-content">
//       <h2>{title}</h2>
//       <div className="content">{content}</div>
//     </div>
//   );
// };

// export default CenteredTitleAndContent;


import React from 'react';
import './CenteredTitleAndContent.css';

interface CenteredTitleAndContentProps {
  title: string;
  content: React.ReactNode;
  contentAlignment?: 'center' | 'left';
}

const CenteredTitleAndContent: React.FC<CenteredTitleAndContentProps> = ({ title, content, contentAlignment = 'center' }) => {
  return (
    <div className="centered-title-and-content">
      <h2>{title}</h2>
      <div className={`content ${contentAlignment}`}>{content}</div>
    </div>
  );
};

export default CenteredTitleAndContent;
