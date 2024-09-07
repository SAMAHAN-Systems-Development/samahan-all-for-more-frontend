import React, { useEffect, useState } from 'react';
import type { StaticImageData } from 'next/image';

import { motion } from 'framer-motion';

import Ball from '@/components/ui/Balls';
import e_ball from '@/stories/assets/hero/E.svg';
import m_ball from '@/stories/assets/hero/M.svg';
import o_ball from '@/stories/assets/hero/O.svg';
import r_ball from '@/stories/assets/hero/R.svg';

interface Ball {
  letter: StaticImageData;
  style: string;

  bottom?: number;
  left?: number;
  right?: number;
  rotate?: number;
  top?: number;
}

export default function BallFrame(props: { hero?: boolean }) {
  const hero = props.hero;
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [allLoaded, setAllLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedCount === 14) {
      setAllLoaded(true);
    }
  }, [loadedCount]);

  const left_balls: Ball[] = [
    {
      style: 'w-32',
      top: 48,
      left: 40,
      letter: o_ball,
    },
    {
      style: 'w-10 ',
      top: 128,
      left: 176,
      letter: m_ball,
      rotate: -12,
    },
    {
      style: 'w-56 ',
      bottom: 256,
      left: 0,
      letter: r_ball,
      rotate: 45,
    },
    {
      style: 'w-24',
      bottom: 320,
      left: 256,
      letter: e_ball,
      rotate: -45,
    },
    {
      style: 'w-40',
      bottom: 128,
      left: 112,
      letter: o_ball,
    },
    {
      style: 'w-64',
      bottom: 40,
      right: 208,
      letter: m_ball,
      rotate: 12,
    },
    {
      style: 'w-24',
      bottom: 96,
      right: 104,
      letter: r_ball,
      rotate: 45,
    },
  ];

  const right_balls: Ball[] = [
    {
      style: 'w-56',
      top: 40,
      right: 16,
      letter: m_ball,
      rotate: -45,
    },
    {
      style: 'w-12',
      top: 128,
      right: 288,
      letter: r_ball,
      rotate: -45,
    },
    {
      style: 'w-24',
      bottom: 320,
      right: 256,
      letter: o_ball,
    },
    {
      style: 'w-40',
      bottom: 224,
      right: 80,
      letter: e_ball,
      rotate: -145,
    },
    {
      style: 'w-64',
      bottom: 40,
      right: 160,
      letter: r_ball,
      rotate: -110,
    },
    {
      style: 'w-12',
      bottom: 256,
      left: 256,
      letter: e_ball,
    },
    {
      style: 'w-56',
      bottom: 20,
      left: 96,
      letter: o_ball,
      rotate: 100,
    },
  ];

  const initialSizes: { ballScale: number; translateFrom: number } = hero
    ? { ballScale: 1, translateFrom: 128 }
    : { ballScale: 0.7, translateFrom: 180 /* replace with banner scaling*/ };

  // initial responsive values
  const responsiveSizes: string = `xsm:[--scale-to:0.3] sm:[--scale-to:0.5] md:[--scale-to:0.6] lg:[--scale-to:${initialSizes.ballScale}]`;

  return (
    <>
      <div className="w-screen">
        {/* left spheres */}
        <motion.div
          initial={{
            translateX: initialSizes.translateFrom * -1,
            translateY: initialSizes.translateFrom,
          }}
          animate={{
            translateX: 0,
            translateY: 0,
            scale: 'var(--scale-to)',
          }}
          transition={{ duration: 0.5 }}
          className={`h-[670px] w-[720px] absolute transform origin-bottom-left bottom-0 z-10 lg:-ml-32 md:-ml-18 sm:-ml-16 xsm:-ml-8 overflow-visible ${responsiveSizes}`}
        >
          {left_balls.map((ball: Ball, index: number) => (
            <Ball
              key={index}
              letter={ball.letter}
              style={ball.style}
              top={ball.top}
              left={ball.left}
              right={ball.right}
              rotate={ball.rotate}
              bottom={ball.bottom}
              isVisible={allLoaded}
              onLoad={handleImageLoad}
            />
          ))}
        </motion.div>
        {/* right spheres */}
        <motion.div
          className={`h-[670px] w-[720px] absolute transform origin-bottom-right lg:-mr-32 md:-mr-18 sm:-mr-16 xsm:-mr-8 bottom-0 right-0 z-10 overflow-visible ${responsiveSizes}`}
          initial={{
            translateX: initialSizes.translateFrom,
            translateY: initialSizes.translateFrom,
          }}
          animate={{
            translateX: 0,
            translateY: 0,
            scale: 'var(--scale-to)',
          }}
          transition={{ duration: 0.5 }}
        >
          {right_balls.map((ball: Ball, index: number) => (
            <Ball
              key={index}
              letter={ball.letter}
              style={ball.style}
              top={ball.top}
              left={ball.left}
              right={ball.right}
              bottom={ball.bottom}
              rotate={ball.rotate}
              isVisible={allLoaded}
              onLoad={handleImageLoad}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}