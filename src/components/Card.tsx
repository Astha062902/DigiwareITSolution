import React from 'react';
import Image from 'next/image';

interface CardProps {
  src: string;
  height: number;
  width: number;
  alt: string;
  title: string;
  description: string;
  buttonLabel?: string;
}

const Card: React.FC<CardProps> = ({ src, height, width, alt, title, description, buttonLabel }) => {
  return (
    <div className="card">
      <Image src={src} height={height} width={width} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonLabel && <button className="services-button">{buttonLabel}</button>}
    </div>
  );
};

export default Card;
