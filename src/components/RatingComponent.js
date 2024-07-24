// File: CareerComponent.jsx

import React from 'react';
import TextCard from './TextCard';
import RatingCard from './RatingCard';
import CardContainer from './CardContainer';


const RatingComponent = () => {
  const items = [
    { text: 'Stand out in the crowd:', rating: "Enroll in Any Skill's Top Courses Today" },
    { text: 'What Skills Do You Want to Master?:', rating: "Enroll in Any Skill's Top Courses Today" },
    { imageUrl: '/images/image1.png', text: 'Agile Project Management' },
    { imageUrl: '/images/image2.png', text: 'Product Development' },
    { imageUrl: '/images/image3.png', text: 'Team Collaboration' },
    { imageUrl: '/images/image4.png', text: 'Customer Feedback' },
    { imageUrl: '/images/image5.png', text: 'Customer Feedback' },
    { imageUrl: '/images/image6.png', text: 'Customer Feedback' }
  ];

  return (
    <div className= "top-[268px] w-[390px] h-[316px] font-lato text-[12px]">
     
      <div className="flex flex-col justify-center gap-4">
        {items.map((item, index) => (
          <RatingCard key={index} text={item.text} rating={item.rating} />
        ))}
      </div>
      <CardContainer />

    </div>
  );
};

export default RatingComponent;
