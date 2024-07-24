// File: CardContainer.jsx

import React from 'react';
import Card from './Card'; // Adjust the import path if necessary

const cardData = [
  { imageUrl: '/images/image1.png', text: 'Agile Project Management' },
  { imageUrl: '/images/image2.png', text: 'Product Development' },
  { imageUrl: '/images/image3.png', text: 'Team Collaboration' },
  { imageUrl: '/images/image4.png', text: 'Customer Feedback' },
  { imageUrl: '/images/image5.png', text: 'Customer Feedback' },
  { imageUrl: '/images/image6.png', text: 'Customer Feedback' }

];

function CardContainer() {
  return (
    <div className="flex flex-wrap gap-4">
      {cardData.map((item, index) => (
        <Card key={index} imageUrl={item.imageUrl} text={item.text} />
      ))}
    </div>
  );
}

export default CardContainer;
