import Image from 'next/image';
import React from 'react';
import BannerGradient from '../../../banner/banner-gradient/BannerGradient';
import { BannerImage } from '../../../banner/banner-image/BannerImage';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  subtitle?: string;
  subheader?: string;
}

export const AFYPBanner: React.FC<Props> = ({
  subtitle,
  subheader,
  ...props
}) => {
  return (
    <BannerImage
      className="flex items-center justify-center bg-blue"
      {...props}
    >
      <div>
        <p className=" text-white text-center ">
          <h4 className=" text-main font-bold ">{subtitle}</h4>
          <h5 className=" text-footer-main">{subheader}</h5>
        </p>
      </div>
    </BannerImage>
  );
};
