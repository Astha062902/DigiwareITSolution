import React from 'react';
import Card from '@/components/Card';
import './CardsSection.css';

const CardsSection: React.FC = () => {
  return (
    <div className="cards-section">
      <Card
        src="/assets/exp.png"
        height={250}
        width={300}
        alt="Experience-Driven"
        title="Experience-Driven & Outcome-Oriented"
        description="We assist companies in better understanding the role of digital in achieving strategic possibilities with a constant emphasis on the customer’s experience and the outcomes achieved."
      />
      <Card
        src="/assets/web.png"
        height={250}
        width={300}
        alt="Qualified Web Designers"
        title="Qualified Web Designers & Developers"
        description="For years, we’ve been designing and creating websites and online apps. Our specialists have been trained, certified, and have extensive expertise with a number of website platforms."
      />
      <Card
        src="/assets/expressive.png"
        height={250}
        width={300}
        alt="Creative and Transparent"
        title="Creative, Transparent and Expressive"
        description="You’ll have comprehensive project visibility and multiple open lines of contact from the outset. We’ll be there when you need us, and we’ll keep you updated on the status of your project."
      />
    </div>
  );
};

export default CardsSection;
