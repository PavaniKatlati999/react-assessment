// File: CardContainer.jsx

import React from 'react';
import Card from './Card'; // Adjust the import path if necessary

const cardData = [
  { imageUrl: '/images/image1.png', text: 'Agile Project Management' },
  { imageUrl: '/images/image2.png', text: 'Product Development' },
  { imageUrl: '/images/image3.png', text: 'Team Collaboration' },
  // { imageUrl: '/images/image4.png', text: 'Project Management' },
  // { imageUrl: '/images/image5.png', text: 'Digital Marketing' },
  // { imageUrl: '/images/image6.png', text: 'Data Science Course' }

];

function CardContainer() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {cardData.map((item, index) => (
        <Card key={index} imageUrl={item.imageUrl} text={item.text} />
      ))}
    </div>
  );
}

export default CardContainer;
