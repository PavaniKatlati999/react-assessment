import React from 'react';

const features = [
  { image: "/images/notes.png", text: "Assignments" },
  { image: "/images/notes.png", text: "Certification" },
  { image: "/images/notes.png", text: "Career Planner" },
  { image: "/images/notes.png", text: "Coding Ground" },
  { image: "/images/notes.png", text: "FAQ" },
  { image: "/images/notes.png", text: "MCQ" },
  { image: "/images/notes.png", text: "Mock Exam" },
  { image: "/images/notes.png", text: "Online Exam" },
  { image: "/images/notes.png", text: "Personal Panel" },
  { image: "/images/notes.png", text: "Practicals" },
  { image: "/images/notes.png", text: "Project" },
  { image: "/images/notes.png", text: "Short Notes" },
  { image: "/images/notes.png", text: "Theory Classes" },
  { image: "/images/notes.png", text: "Topic Test" },
  { image: "/images/notes.png", text: "Quick Test" },
];

const FeaturesComponent = () => {
  return (
    <div className="w-[389px] h-[225.72px] top-[2081.1px]">
      <div className="w-[390px] h-[24px] font-lato text-[20px] font-bold leading-[24px] text-center">
        <h1 className="text-black">Our Features</h1>
      </div>

      {/* Grid for feature cards */}
      <div className="grid grid-cols-3 gap-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-[117.45px] h-[29.36px] top-[-0.1px] left-[0.33px] border-2 border-[#FFD700] rounded-lg bg-black flex flex-wrap  items-center justify-center  "
          >
            <img
              src={feature.image}
              alt={feature.text}
              className="w-[14.09px] h-[18.79px] top-[5.77px] left-[9.73px] "
            />
            <p className="w-[92.47px] h-[20.78px] top-[9.75px] left-[32.03px] text-sm text-white text-center">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesComponent;
