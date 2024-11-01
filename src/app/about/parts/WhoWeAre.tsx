

import React from 'react';
import CenteredTitleAndContent from '@/components/CenteredTitleandContent';

const WhoWeArePage: React.FC = () => {
  const content = (
    <p>
      Digiware IT Solutions is a multi-award-winning agency that specializes in a variety of IT and digital marketing domains. We are a creative firm dedicated to bringing about good change and giving your company a fresh perspective in the marketing field. We believe in producing work that achieves outcomes as an independent, creatively-driven firm. As a result, we’ve hand-picked only the best people to join our team, who will work tirelessly to exceed your expectations.
      We are a team of brand strategists, researchers, writers, designers, and technologists that like collaborating with clients to improve their brand value and place their company at the top. We create high-impact messaging and campaigns that engage, motivate, and entertain a big audience while also increasing your company’s consumer base. Digiware does more than simply improve the way things look; we also get things done. This enables our ideas to live longer, stay fresher, and be more current.
    </p>
  );

  return (
    <div>
      <CenteredTitleAndContent title="Who We Are" content={content} contentAlignment='center'/>
    </div>
  );
};

export default WhoWeArePage;
