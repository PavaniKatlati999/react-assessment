
import React,{useState} from 'react';

import TickSquare from '../TickSquare'

const TextCard = ({ title, subtitle }) => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    return (
        
        <div className="flex flex-col bg-black rounded-lg border">
            <div className='flex '>
                <TickSquare onChange={handleCheckboxChange} className=' w-[19.93px] h-[19px] rounded' style={{ color: '#FFD700' }} />
                <div>
                <h3 className="text-lg font-bold" style={{ color: '#FFD700' }}>
                    {title}
                </h3>
                <p className="text-sm" style={{ color: "white" }}>
                {subtitle}
            </p>
                </div>

                
            </div>

            
        </div>
    );
};

export default TextCard;



