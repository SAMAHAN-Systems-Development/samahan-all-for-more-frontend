'use client';

import React from 'react';
import Image from 'next/image';

import { BannerGradient } from '@/components/banner/banner-gradient/BannerGradient';
import { BannerImageContainer } from '@/components/banner/banner-image-container/BannerImageContainer';

/**
 *
 * Use ui/banner.tsx, not this.
 *
 */

export interface BannerProps {
  image: string;
  imageAlt: string;
  subtitle?: string;
  title?: string;
}

export const BannerImage: React.FC<BannerProps> = ({
  title,
  subtitle,
  image,
  imageAlt,
}) => {
  return (
    <div className="absolute w-full h-full overflow-hidden">
      <BannerImageContainer position={'absolute'} className="z-[1]">
        <BannerGradient />
      </BannerImageContainer>

      <div className=" flex justify-center items-center absolute w-[100%] h-[100%] z-[2]">
        <div className="text-title text-white text-center max-md:mb-9">
          <h2 className=" ">{subtitle}</h2>
          <h1 className=" font-bold ">{title}</h1>
        </div>
      </div>
      <BannerImageContainer>
        <div className="w-full h-full bg-blue pb-5 ">
          <Image
            alt={imageAlt}
            src={image}
            width={5600}
            height={2028}
            className="w-full h-full object-cover  "
          />
          {/* <div className="w-full h-full bg-[rgb(0,255,0)]" /> */}
        </div>
      </BannerImageContainer>
    </div>
  );
};
