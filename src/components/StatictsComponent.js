// File: StatictsComponent.jsx

import React from "react";
import StaticsCard from "./StaticsCard";

const StatictsComponent = () => {
  const items = [
    { course: "Courses", rating: "24000+" },
    { course: "Certificate", rating: "1900+" },
    { course: "Question Bank", rating: "100000+" },
    { course: "Google rating", rating: "4.9/5" },
  ];

  return (
    <div className="w-[390px] h-[144px] top-[624px] gap-6">
      <div className=" w-[390px] h-[24px]font-lato text-[20px] font-bold leading-[24px] text-center">
        <h1 className="text-#101828">Our Statistics</h1>
      </div>

      <div className="p-8 grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <StaticsCard key={index} course={item.course} rating={item.rating} />
        ))}
      </div>
    </div>
  );
};

export default StatictsComponent;
