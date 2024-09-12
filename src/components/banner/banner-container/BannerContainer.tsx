import React from 'react';

/**
 *
 * @returns Container for all SAMAHANMembersBanner and AFYPBanner:
 * @param children - place BannerImage as the child
 *
 *
 */

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BannerContainer: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div {...props} className="w-full relative h-96 ">
      {children}
    </div>
  );
};
