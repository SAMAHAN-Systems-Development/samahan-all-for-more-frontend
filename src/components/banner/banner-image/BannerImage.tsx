import { inter } from '@/styles/font';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

/**
 *
 * Used for SAMAHANMembersBanner and AFYPBanner as the base, this component is to give that rounded look.
 *
 */

const variants = cva(
  ['rounded-[10%_10%_50%_50%/0%_0%_20%_20%] overflow-hidden w-full h-full'],
  {
    variants: {
      position: {
        default: '',
        absolute: 'absolute',
        relative: 'relative',
      },
    },
    defaultVariants: {
      position: 'default',
    },
  }
);

interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export const BannerImage: React.FC<Props> = ({
  children,
  className,
  position,
  ...props
}) => {
  return (
    <div
      className={variants({
        position,
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
