import React from "react";

const PackageCard = ({ text, price }) => {
  return (
    <div className="w-[173px] h-[265px] rounded-lg border-x-4 bg-[#101828] shadow-lg shadow-black  items-center justify-center p-4">
  
  
  <p className="text-center text-[#FFFFFF]">{text}</p>
  
  <p className="text-center text-[#FFD700] ">₹{price}</p>
  
  <p className="text-center text-[#FFFFFF]">Course Description</p>
  <p className="text-center text-[#FFFFFF]">Theory Classes</p>
  <p className="text-center text-[#FFFFFF]">Short Notes</p>
  <p className="text-center text-[#FFFFFF]">Quick Test</p>
  <p className="text-center text-[#FFFFFF]">Online Exams</p>
  <p className="text-center text-[#FFFFFF]">Practicals</p>
  <div
      className="inline-block rounded-[4.43px] border border-[#FFD700] bg-[#FFD700] text-[#101828] text-[14px] px-26 font-medium shadow-[0_0_2.22px_#F4EBFF,0_0.55px_1.11px_#101828] leading-[20px]"
      style={{
        width: '105.04px',
        height: '20px',
        borderColor: '#FFD700',
        backgroundColor: '#FFD700',
        color: '#101828',
        borderRadius: '4.43px',
      }}
    >
        <p className="text-center text-[#000000]">CHOOSE PLAN</p>

    </div>
</div>

  );
};

export default PackageCard;
