import React from "react";
import Card from "./Card";
import CardContainer from "./CardContainer";

const RatingCard = ({ text, rating }) => {
  return (
    <>
      <div className="w-[390px] h-[256px] top-[808px] ">
        <div className="w-[390px] h-[50.1px] font-lato text-[20px] font-bold leading-[24px] text-center">
          <div className="w-[390px] h-[24px] font-lato text-[20px] leading-[24px]">
            <p className="text-lg font-bold" style={{ color: "#101828" }}>
              Stand out in the crowd:
            </p>
          </div>
          <div className="w-[390px] h-[14px] font-medium  text-[12px] font-normal leading-[14.4px] text-center">
            <p className="text-sm" style={{ color: "#313131" }}>
              Enroll in Any Skill's Top Courses Today
            </p>
          </div>
        </div>

        <div className="w-[390px] h-[206px]">
          <CardContainer />
        </div>
      </div>
      <div className="w-[390px] h-[261px] top-[1104.1px] gap-16 ">
        <div className="w-[390px] h-[38px]  ">
          <div className="w-[390px] h-[24px] font-lato text-[20px] font-bold leading-[24px] text-center">
            <p className="" style={{ color: "#101828" }}>
              What Skills Do You Want to Master?
            </p>
          </div>
          <div className="w-[390px] h-[14px] font-medium  text-[12px] font-normal leading-[14.4px] text-center">
            <p className="" style={{ color: "#313131" }}>
              Enroll in Any Skill's Top Courses Today
            </p>
          </div>
        </div>
        <div className="w-[390px] h-[217px]">
          <CardContainer />
        </div>
      </div>
    </>
  );
};

export default RatingCard;
