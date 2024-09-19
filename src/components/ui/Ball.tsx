'use client';
import React, { useState } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { motion } from 'framer-motion';

type BallProps = {
  isVisible: boolean;
  letter: StaticImageData;
  onLoad: () => void;
  style: string;

  bottom?: number;
  left?: number;
  right?: number;
  rotate?: number;
  top?: number;
};

const Ball = ({
  isVisible,
  letter,
  onLoad,
  style,
  bottom,
  left,
  right,
  rotate,
  top,
}: BallProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const handleLoad = () => {
    setLoaded(true);
    onLoad();
  };

  const animation = isVisible &&
    loaded && { // trigger animation when all spheres are loaded
      scale: 1,
      translateY: 0,
      translateX: 0,
      top: top,
      bottom: bottom,
      left: left,
      right: right,
    };
  return (
    <>
      <motion.div
        className={`absolute ${style} z-10`}
        initial={{
          scale: 1.2,
          top: top! * 0.5,
          bottom: bottom! * 0.5,
          left: left! * 0.5,
          right: right! * 0.5,
          rotate: rotate,
        }}
        animate={animation}
        transition={{
          type: 'spring',
          duration: 4,
          mass: 1,
          stiffness: 28.44,
          damping: 8,
          delay: 0.15,
        }}
      >
        <Image
          src={letter}
          alt="ball"
          onLoad={handleLoad}
          className="object-contain"
          priority
        />
      </motion.div>
    </>
  );
};

export default Ball;
