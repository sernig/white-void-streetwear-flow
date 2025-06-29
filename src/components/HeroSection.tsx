
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full flex justify-center py-4 sm:py-8">
      <div className="relative w-full max-w-4xl mx-auto">
        <img 
          alt="WACK Clothes Collection" 
          src="/lovable-uploads/89b4226e-f529-46cd-b112-a5ddceee9d32.png" 
          className="w-full h-[40vh] sm:h-[50vh] object-cover rounded-lg" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
            WACK CLOTHES
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white font-light max-w-2xl px-4">
            Discover unique streetwear that defines your style
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
