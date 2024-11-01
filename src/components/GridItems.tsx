import React from 'react';
import Image from 'next/image';
import './GridItems.css';

interface GridItem {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
}

interface GridItemsProps {
  heading?: string;
  items: GridItem[];
}

const GridItems: React.FC<GridItemsProps> = ({ heading, items }) => {
  return (
    <div className="gridItemsContainer">
      {heading && <h2>{heading}</h2>}
      <div className="gridItemsGrid">
        {items.map((item, index) => (
          <div key={index} className="gridItem">
            <Image src={item.src} width={item.width} height={item.height} alt={item.alt} />
            <div className="textContent">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridItems;
