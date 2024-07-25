import React from "react";

const aboutUs = [
  "Who We Are",
  "Contact Us",
  "Terms of use",
  "FAQs",
  "Privacy Policy",
  "Refund Policy",
  "Terms & Conditions",
];
const db = [
  "MySQL",
  "MongoDB",
  "Postgre SQL",
  "SQLIte",
  "Oracle",
  "Maria DB",
  "Apach Casandr",
];

const languages = ["c"];

function CoursesComponent() {
  return (
    <div className="relative w-[390px] h-[543px] top-[1024.82px] bg-black">
      <div className="w-[70px] h-[35.8px] absolute top-[19px] left-[14px]">
        <img src="/images/group.png" className="w-full h-full object-cover" />
      </div>
      <div className="absolute w-[255px] h-[48px] top-[13px] left-[121px] bg-transparent">
        <p className="font-lato font-medium text-[10px] leading-[16px] text-justify text-white">
          Thelearnyn is an educational platform striving to provide the best
          learning material on technical, non-technical and vocational subjects.
        </p>
      </div>
      <div className="absolute w-[63px] h-[18px] top-[76px] left-[17px] ">
        <p className="text-white font-lato font-bold text-[15px] leading-[18px]">
          About Us
        </p>
        <div className="absolute w-[101px] h-[126px] top-[26px] left-[0px] text-white">
          {aboutUs.map((eachItem, index) => (
            <li
              key={index}
              className="font-lato font-normal text-[10px] leading-[18px]"
            >
              {eachItem}
            </li>
          ))}
        </div>
      </div>
      <div className="w-[194px] h-[18px] absolute top-[74.9px] left-[189px] flex items-center justify-center">
        <p className="font-lato font-bold text-[15px] leading-[18px] text-center text-white">
          DATABASE TECHNOLOGIES
        </p>
        <div className="absolute w-[101px] h-[126px] top-[26px] left-[0px] text-white">
          {db.map((eachItem, index) => (
            <li
              key={index}
              className="font-lato font-normal text-[10px] leading-[18px]"
            >
              {eachItem}
            </li>
          ))}
        </div>
      </div>
      <div className="absolute w-[322px] h-[202px] top-[253px] left-[21px] gap-72">
        <p className="text-white font-lato font-bold text-[15px] leading-[18px]">
          LANGUAGES
        </p>
        <div>
          {languages.map((eachItem, index) => (
            <li
              key={index}
              className="font-lato font-normal text-[10px] leading-[18px]"
            >
              {eachItem}
            </li>
          ))}
        </div>
        <div className="w-[160px] h-[202px]">
          <div className="absolute w-[101px] h-[126px] top-[26px] left-[0px] text-white">
            {db.map((eachItem, index) => (
              <li
                key={index}
                className="font-lato font-normal text-[10px] leading-[18px]"
              >
                {eachItem}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[160px] h-[202px]">
      <div 
      className="absolute w-[152px] h-[18px] left-[170px] top-[253px] flex items-center justify-center"
    >
      <p 
        className="font-lato font-bold text-[15px] leading-[18px] text-white"
      >
        Web Technologies
      </p>
      
      <div className="absolute w-[101px] h-[126px] top-[26px] left-[0px] text-white">
          {db.map((eachItem, index) => (
            <li
              key={index}
              className="font-lato font-normal text-[10px] leading-[18px]"
            >
              {eachItem}
            </li>
          ))}
        </div>
        

      
      
    </div>

      </div>
      {/* <hr className="" style={{color : "#777777"}} /> */}
      <div 
      className="absolute w-[283px] h-[19px] top-[513px] left-[26px] flex items-center justify-center"
    >
      <p 
        className="font-lato font-bold text-[16px] leading-[19.2px] text-white"
      >
        SMART WAY OF LEARNING
      </p>
    </div>
      
      
    </div>
    
  );
}

export default CoursesComponent;
