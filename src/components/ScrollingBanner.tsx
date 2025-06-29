
import React from 'react';

const ScrollingBanner = () => {
  return (
    <div className="bg-black h-4 sm:h-4 overflow-hidden relative">
      <div className="animate-scroll whitespace-nowrap absolute top-0 left-0 h-full flex items-center">
        <span className="text-white text-xs sm:text-sm font-medium px-4">
          | NEW DROP x WACK | NEW DROP x WACK | NEW DROP x WACK | NEW DROP x WACK | NEW DROP x WACK | NEW DROP x WACK | NEW DROP x WACK | NEW DROP x WACK | NEW DROP x WACK | NEW DROP x WACK |
        </span>
      </div>
    </div>
  );
};

export default ScrollingBanner;
