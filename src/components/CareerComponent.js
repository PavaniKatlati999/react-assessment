// File: CareerComponent.jsx

import React from 'react';
import TextCard from './TextCard';


const CareerComponent = () => {
  const items = [
    { title: 'Career Planner Tool', subtitle: 'Personalized guidance to discover your ideal career path.' },
    { title: 'Extensive Course Library:', subtitle: 'Over 24,000 courses across various fields.' },
    { title: 'Flexible Subscription Plans:', subtitle: 'Monthly, Quarterly, Half-Yearly, and Yearly options.' },
    { title: 'Industry-Recognized Certifications: ', subtitle: 'Boost your resume and professional profile.' },
  ];

  return (
    <div className= "top-[268px] w-[390px] h-[316px] font-lato text-[12px]">
      {/* Introductory Text */}
      <div className="w-[390px] h-[58px] font-Poppins text-[20px] font-medium leading-[29spx] tracking-[0.04em] text-center">
        <h1 className="text-#101828">Learn with AnySkill, The AI-Powered Super App, And Grow</h1>
      </div>
      
      {/* Cards Container */}
      <div className="flex flex-col justify-center gap-4">
        {items.map((item, index) => (
          <TextCard key={index} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default CareerComponent;
