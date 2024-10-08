import React from 'react';

/**
 *
 * @returns Gradient used for BannerImage
 *
 */

export const BannerGradient: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div
      className="bg-gradient-to-t from-blue from-10% to-transparent to-80% absolute w-full h-full "
      {...props}
    />
  );
};
