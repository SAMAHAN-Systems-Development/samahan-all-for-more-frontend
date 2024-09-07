'use client';
import React, { useState } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { motion } from 'framer-motion';

const Ball = (props: {
  isVisible: boolean;
  letter: StaticImageData;
  onLoad: () => void;
  style: string;

  bottom?: number;
  left?: number;
  right?: number;
  rotate?: number;
  top?: number;
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const onLoad = props.onLoad;
  const handleLoad = () => {
    setLoaded(true);
    onLoad();
  };

  const animation =
    props.isVisible && loaded // trigger animation when all spheres are loaded
      ? {
          scale: 1,
          translateY: 0,
          translateX: 0,
          top: props.top,
          bottom: props.bottom,
          left: props.left,
          right: props.right,
        }
      : {};

  return (
    <>
      <motion.div
        className={`absolute ${props.style} z-10`}
        initial={{
          scale: 1.2,
          top: props.top! * 0.5,
          bottom: props.bottom! * 0.5,
          left: props.left! * 0.5,
          right: props.right! * 0.5,
          rotate: props.rotate,
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
          src={props.letter}
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
