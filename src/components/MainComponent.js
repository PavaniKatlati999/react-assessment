import React from "react";

const MainComponent = () => {
  return (
    <div
      className="w-[390px] h-[228px]  bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url(/images/bg4.jpg)" }}
    >
      <div className="top-[50px] left-[69px] w-[309px] h-[170.43px]">
        <div className="top-[50px] left-[69px] w-[253px] h-[20px]">
          <p
            className="font-libre text-[18px] font-bold leading-[19.8px] tracking-[0.04em] text-center"
            style={{ color: "#FFFFFF" }}
          >
            Transform Your Life with
          </p>
        </div>

        <div
          className="top-[90px] left-[252px] w-[126px] h-[13px] font-lato text-[12px] font-bold leading-[13.2px] tracking-[0.04em] text-center"
          style={{ color: "#FFFFFF" }}
        >
          AI-Powered Learning.
        </div>

        <div
          className="top-[90px] left-[69px] w-[251px] h-[51px] font-libre text-[46px] font-bold leading-[50.6px] tracking-[0.04em] text-center"
          style={{ color: "#FFD700" }}
        >
          Super App
        </div>

        <div
          className="top-[142px] left-[145px] w-[98px] h-[9px] font-lusitana text-[12px] font-bold leading-[4.75px] tracking-[0.04em] text-center"
          style={{ color: "#FFFFFF" }}
        >
          for Super Skills!
        </div>
        <div className="absolute top-[170px] left-[130px] w-[129.2px] h-[22.78px]">
          <button
            className="w-full h-full bg-white rounded-full font-lato text-[12px] leading-[4.75px] tracking-[0.04em] text-center font-bold"
            style={{ color: "#313131" }}
          >
            Activate Your Trial
          </button>
        </div>
        <div className="absolute top-[203px] left-[167px] w-[62.24px] h-[17.43px]"  style={{ color: "#FFD700" }}>
            <p className="font-lato text-[8.71px] leading-[5.92px] tracking-[0.04em] text-center font-bold">4h 32m 48s</p>

        </div>
      </div>
    </div>
  );
};

export default MainComponent;
