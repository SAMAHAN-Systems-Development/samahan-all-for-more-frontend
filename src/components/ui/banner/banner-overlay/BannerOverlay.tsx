import React from 'react';

export const BannerOverlay: React.FC = () => {
  return (
    <div
      className="
        before:absolute 
        before:bottom-1
        before:w-[180%]
        before:h-[450%]
        before:rounded-full 
        before:shadow-[0_300px_0_300px_white]
        before:left-[-40%]
      "
    >
      {/* <div className="absolute top-1/2 right-0 bg-blue"></div> */}
    </div>
  );
};
