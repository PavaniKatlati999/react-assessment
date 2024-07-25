// File: CareerComponent.jsx

import React from 'react';
import TextCard from './TextCard';
import RatingCard from './RatingCard';
import CardContainer from './CardContainer';


const RatingComponent = () => {
  const items = [
    { text: 'Stand out in the crowd:', rating: "Enroll in Any Skill's Top Courses Today" },
    { text: 'What Skills Do You Want to Master?:', rating: "Enroll in Any Skill's Top Courses Today" },
  ];

  return (
    <div className= "top-[268px] w-[390px] h-[492px] font-lato text-[12px]">
      <RatingCard />

     
      {/* <div className="flex flex-col justify-center gap-4">
        {items.map((item, index) => (
          <RatingCard key={index} text={item.text} rating={item.rating} />
        ))}
      </div> */}

    </div>
  );
};

export default RatingComponent;
