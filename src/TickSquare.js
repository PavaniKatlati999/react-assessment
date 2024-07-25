import React, { useState } from 'react';

const TickSquare = ({ checked, onChange }) => {
  return (
    <div 
      className={`w-[19.93px] h-[19px] border-2 rounded-sm ${checked ? 'bg-[#FFD700] border-[#FFD700]' : 'bg-white border-gray-300'} flex items-center justify-center cursor-pointer`}
      onClick={onChange}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[12px] h-[12px] text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17 4 12" />
        </svg>
      )}
    </div>
  );
};

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="p-4">
      <TickSquare checked={isChecked} onChange={handleCheckboxChange} />
    </div>
  );
};

export default App;
