import React from "react";

const RatingCard = ({ text, rating }) => {
  return (
    <div className="w-[66px] h-[43px] top-[40px] left-[62px] ">
      <div className="w-[390px] h-[24px] font-lato text-[20px] font-bold leading-[24px] text-center">
        <p className="text-lg font-bold" style={{ color: "#101828" }}>
          {text}
        </p>
      </div>
      <div className="w-[390px] h-[14px] font-medium  text-[12px] font-normal leading-[14.4px] text-center">
        <p className="text-sm" style={{ color: "#313131" }}>
          {rating}
        </p>
      </div>
     

    </div>
  );
};

export default RatingCard;
