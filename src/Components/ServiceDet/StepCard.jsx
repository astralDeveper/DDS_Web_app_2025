// StepCard.jsx
import React, { useRef } from 'react';
import Button from '../Button';

const StepCard = ({ stepNumber, title, description, image, isReversed, isActive }) => {
  return (
    <div
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between w-full md:gap-4 p-4 relative`}
    >
      {/* Glowing Circle on Active Step */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 md:flex hidden items-start justify-center h-full">
    <div className={`glow-circle ${isActive ? "active" : ""}`}></div>
  </div>

      {/* Text Section */}
      <div className="flex flex-col items-left justify-center p-4 rounded-lg w-full md:w-1/2">
        <div>
          <Button
            btnname={`Stage ${stepNumber}`}
            btnStyle={`text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full mx-auto mb-2`}
            disabled={true}
          />
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-white mt-4 mb-4">{description}</p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center justify-center p-4 rounded-lg w-full md:w-1/2">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
    </div>
  );
};


export default StepCard;