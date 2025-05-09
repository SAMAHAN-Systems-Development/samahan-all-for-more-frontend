import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import BallFrame from '@/components/ui/BallFrame';

/**
 *
 * @returns Container for all BannerImage and AFYPBanner:
 * @param children - place BannerImage as the child
 *
 *
 */

export const BannerContainerVariants = cva(
  ['rounded-[10%_10%_50%_50%/0%_0%_20%_20%] w-full h-full'],
  {
    variants: {
      hasBallFrame: {
        true: '',
        false: 'hidden',
      },
    },
    defaultVariants: {
      hasBallFrame: true,
    },
  }
);

export interface BannerContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BannerContainerVariants> {
  children: React.ReactNode;
}

export const BannerContainer: React.FC<BannerContainerProps> = ({
  children,
  hasBallFrame,
  ...props
}) => {
  return (
    <div {...props} className={`w-full relative h-[80vh] overflow-x-clip`}>
      <div className=" absolute bottom-[-4rem] xl:bottom-[-6rem] max-sm:bottom-[-2rem]">
        <div className={BannerContainerVariants({ hasBallFrame })}>
          <BallFrame />
        </div>
      </div>
      {children}
    </div>
  );
};
