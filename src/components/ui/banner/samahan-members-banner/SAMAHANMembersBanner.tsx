import Image from 'next/image';
import React from 'react';
import BannerGradient from '../banner-gradient/BannerGradient';

interface Props {
  title?: string;
  subtitle?: string;
}

export const SAMAHANMembersBanner: React.FC<Props> = ({
  title,
  subtitle,
}: Props) => {
  return (
    <div className="absolute bg-blue w-full h-full">
      <BannerGradient />
      <div className=" flex justify-center items-center absolute w-[100%] h-[100%]">
        <p className="text-title text-white text-center">
          <h2 className=" ">{subtitle}</h2>
          <h1 className="  font-bold ">{title}</h1>
        </p>
      </div>
      <Image
        alt="SAMAHANN Members"
        src={'/images/samahan-members.png'}
        width={0}
        height={0}
        className="w-full h-full object-cover pb-14"
      />
    </div>
  );
};
