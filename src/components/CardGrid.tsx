import React from 'react';
import './CardGrid.css';

interface Card {
  heading: string;
  content: React.ReactNode;
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div className="card-grid-card" key={index}>
          <h3 className="card-heading">{card.heading}</h3>
          <div className="card-content">{card.content}</div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
