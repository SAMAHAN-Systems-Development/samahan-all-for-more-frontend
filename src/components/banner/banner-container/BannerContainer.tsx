import React from 'react';

/**
 *
 * @returns Container for all BannerImage and AFYPBanner:
 * @param children - place BannerImage as the child
 *
 *
 */

interface BannerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BannerContainer: React.FC<BannerContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className="w-full relative h-96 ">
      {children}
    </div>
  );
};
