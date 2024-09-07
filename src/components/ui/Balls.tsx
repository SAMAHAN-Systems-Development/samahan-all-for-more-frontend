import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

const Ball = (props: {
  style: string;
  letter: StaticImageData;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}) => {
  return (
    <>
      <motion.div
        className={`absolute ${props.style} z-10 origin-top-left`}
        initial={{
          rotate: 12,
          scale: 1.5,
          translateY: 200,
          translateX: -200,
          top: props.top! * 0.5,
          bottom: props.bottom! * 0.5,
          left: props.left! * 0.5,
          right: props.right! * 0.15,
        }}
        animate={{
          rotate: 0,
          scale: 1,
          translateY: 0,
          translateX: 0,
          top: props.top,
          bottom: props.bottom,
          left: props.left,
          right: props.right,
        }}
        transition={{
          type: 'spring',
          duration: 2,
          mass: 1,
          stiffness: 28.44,
          damping: 8,
          delay: 0.15,
        }}
      >
        <Image
          src={props.letter}
          alt="ball"
          className="object-contain"
          priority
        />
      </motion.div>
    </>
  );
};

export default Ball;
