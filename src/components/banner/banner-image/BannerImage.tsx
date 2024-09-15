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
  subtitle?: string;
  title?: string;
}

export const BannerImage: React.FC<BannerProps> = ({ title, subtitle }) => {
  const animationDuration = 1.1;
  const imageDelay = 0.3;

  return (
    <div className="absolute w-full h-full">
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
        <motion.p
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
        </motion.p>
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
          className="w-full h-full "
        >
          <Image
            alt="SAMAHAN Members"
            src={'/images/samahan-members.png'}
            width={0}
            height={0}
            className="w-full h-full object-cover mb-14 "
          />
        </motion.div>
      </BannerImageContainer>
    </div>
  );
};
