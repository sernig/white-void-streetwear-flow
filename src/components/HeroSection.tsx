
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img 
        src="/lovable-uploads/f8181fac-c23f-473c-85a2-3da4ecd39284.png"
        alt="WACK Streetwear Collection"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </div>
  );
};

export default HeroSection;
