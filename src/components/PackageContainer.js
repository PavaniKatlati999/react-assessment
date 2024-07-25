// File: CareerComponent.jsx

import React from 'react';
import PackageCard from './PacakgeCard';


const PackageComponent = () => {
  const items = [
    {text: 'For 1 Month',price: "199" },
    { text: 'For 1 Month', price: "499" },
    { text: 'For 1 Month', price: "799" },
    { text: 'For 1 Month', price: "999" },

  ];

  return (
    <div className= "top-[1405px] w-[390px] h-[636px] gap-14"> 
        <div className= "w-[390px] h-[33px]">
            <div className="w-[390px] h-[19px]">
            <p className= "font-lato text-[20px] font-bold leading-[19.2px] text-center ">Affordable Packages</p>
            </div>
            <div className= "w-[390px] h-[14px] top-[19px]">
            <p className= "font-lato text-[12px] font-semibold leading-[14.4px] text-center ">Quality Experiences Within Your Budget</p>
        </div>  
        </div>  
          
      <div className="p-4 grid grid-cols-2 gap-6">
        {items.map((item, index) => (
          <PackageCard key={index} text={item.text} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default PackageComponent;
