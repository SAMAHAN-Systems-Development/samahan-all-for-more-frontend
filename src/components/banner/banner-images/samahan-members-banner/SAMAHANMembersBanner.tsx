import React from 'react';
import Image from 'next/image';

import { BannerGradient } from '@/components/banner/banner-gradient/BannerGradient';
import { BannerImageContainer } from '@/components/banner/banner-image-container/BannerImageContainer';

export interface Props {
  subtitle?: string;
  title?: string;
}

export const SAMAHANMembersBanner: React.FC<Props> = ({
  title,
  subtitle,
}: Props) => {
  return (
    <div className="absolute w-full h-full">
      <BannerImageContainer position={'absolute'}>
        <BannerGradient />
      </BannerImageContainer>

      <div className=" flex justify-center items-center absolute w-[100%] h-[100%]">
        <p className="text-title text-white text-center">
          <h2 className=" ">{subtitle}</h2>
          <h1 className="  font-bold ">{title}</h1>
        </p>
      </div>

      <BannerImageContainer>
        <Image
          alt="SAMAHANN Members"
          src={'/images/samahan-members.png'}
          width={0}
          height={0}
          className="w-full h-full object-cover pb-8"
        />
      </BannerImageContainer>
    </div>
  );
};
