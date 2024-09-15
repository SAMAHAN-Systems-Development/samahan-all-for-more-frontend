'use client';

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

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
  const animationDuration = 1.1;
  const imageDelay = 0.3;

  return (
    <div className="absolute w-full h-full overflow-hidden">
      <BannerImageContainer position={'absolute'} className="z-[1]">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: animationDuration,
            delay: imageDelay,
          }}
        >
          <BannerGradient />
        </motion.div>
      </BannerImageContainer>

      <div className=" flex justify-center items-center absolute w-[100%] h-[100%] z-[2]">
        <motion.div
          initial={{
            translateY: '200%',
          }}
          animate={{
            translateY: '0',
          }}
          transition={{
            duration: animationDuration,
          }}
          className="text-title text-white text-center max-md:mb-9"
        >
          <h2 className=" ">{subtitle}</h2>
          <h1 className=" font-bold ">{title}</h1>
        </motion.div>
      </div>
      <BannerImageContainer>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: animationDuration,
            delay: imageDelay,
          }}
          className="w-full h-full bg-blue pb-5 "
        >
          <Image
            alt={imageAlt}
            src={image}
            width={5600}
            height={2028}
            className="w-full h-full object-cover  "
          />
          {/* <div className="w-full h-full bg-[rgb(0,255,0)]" /> */}
        </motion.div>
      </BannerImageContainer>
    </div>
  );
};
