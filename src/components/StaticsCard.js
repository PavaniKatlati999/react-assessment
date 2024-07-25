import React from "react";

const StaticsCard = ({ course, rating }) => {
  return (
    <div className="w-[153px] h-[43px] top-[40px] left-[62px] ">
      <div className="w-[183px] h-[19px] font-lato text-[16px] font-bold leading-[19.2px] text-center">
        <p className="text-lg font-bold" style={{ color: "#000000" }}>
          {course}
        </p>
      </div>
      <div className="w-[183px] h-[22px] font-lato  text-[18px] font-bold leading-[21.6px] text-center">
        <p className="text-sm" style={{ color: "#FFD700" }}>
          {rating}
        </p>
      </div>
    </div>
  );
};

export default StaticsCard;
