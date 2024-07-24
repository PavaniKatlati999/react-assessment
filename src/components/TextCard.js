
import React from 'react';

const TextCard = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col bg-black rounded border">
            <div className='flex  mb-2'>
                <input type="checkbox" checked className=' w-[19.93px] h-[19px] rounded' style={{ color: '#FFD700' }}/>
                <h3 className="text-lg font-bold" style={{ color: '#FFD700' }}>
                    {title}
                </h3>
            </div>
            <p className="text-sm" style={{ color: "#777777" }}>
                {subtitle}
            </p>
        </div>
    );
};

export default TextCard;
