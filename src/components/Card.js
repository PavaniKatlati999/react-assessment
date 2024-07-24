// File: Card.jsx

import React from "react";

function Card() {
  return (
    <div className="w-[136px] h-[200px] bg-black rounded-3xl relative">
      <div
        className="absolute w-[116px] h-[110px] top-[7px] left-[13px]"
        style={{
          borderRadius: "12.67px 12.67px 0px 0px",
          backgroundImage: "url(/images/image1.png)", // Ensure this path is correct
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="absolute top-[125px] left-[6.34px] w-[122.91px] h-0 opacity-0 border-t-[0.63px] border-transparent"
        style={{ color: "#FFFFFF" }}
      ></div>
      <div className="absolute top-[130.85px] left-[12.67px] w-[112.77px] h-[34px] flex items-center justify-center">
        <p
          className="font-lato text-[14px] font-semibold leading-[16.8px] text-center"
          style={{ color: "#FFFFFF" }}
        >
          Agile Project Management
        </p>
      </div>
      
    </div>
  );
}

export default Card;
