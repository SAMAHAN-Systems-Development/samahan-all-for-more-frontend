import React from 'react';
import { BannerOverlay } from '../banner-overlay/BannerOverlay';

type Props = {
  children: React.ReactNode;
};

export const BannerContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full relative h-96 overflow-hidden ">
      {children}
      <BannerOverlay />
    </div>
  );
};
