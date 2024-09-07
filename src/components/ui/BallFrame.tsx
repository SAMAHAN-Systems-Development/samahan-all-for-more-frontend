import React, { useEffect, useState } from 'react';
import type { StaticImageData } from 'next/image';

import { motion } from 'framer-motion';

import Ball from '@/components/ui/Balls';
import e_ball from '@/stories/assets/hero/E.png';
import m_ball from '@/stories/assets/hero/M.png';
import o_ball from '@/stories/assets/hero/O.png';
import r_ball from '@/stories/assets/hero/R.png';

interface Ball {
  letter: StaticImageData;
  style: string;

  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
}

export default function BallFrame() {
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
      style: 'w-10 -rotate-12',
      top: 128,
      left: 176,
      letter: m_ball,
    },
    {
      style: 'w-56 rotate-45',
      bottom: 256,
      left: 0,
      letter: r_ball,
    },
    {
      style: 'w-24 -rotate-45',
      bottom: 320,
      left: 256,
      letter: e_ball,
    },
    {
      style: 'w-40',
      bottom: 128,
      left: 112,
      letter: o_ball,
    },
    {
      style: 'w-64 rotate-12',
      bottom: 40,
      right: 208,
      letter: m_ball,
    },
    {
      style: 'w-24 rotate-45',
      bottom: 96,
      right: 104,
      letter: r_ball,
    },
  ];

  const right_balls: Ball[] = [
    {
      style: 'w-56 -rotate-45',
      top: 40,
      right: 16,
      letter: m_ball,
    },
    {
      style: 'w-12 -rotate-45',
      top: 128,
      right: 288,
      letter: r_ball,
    },
    {
      style: 'w-24',
      bottom: 320,
      right: 256,
      letter: o_ball,
    },
    {
      style: 'w-40 -rotate-[145deg]',
      bottom: 224,
      right: 80,
      letter: e_ball,
    },
    {
      style: 'w-64 -rotate-[110deg]',
      bottom: 40,
      right: 160,
      letter: r_ball,
    },
    {
      style: 'w-12',
      bottom: 256,
      left: 256,
      letter: e_ball,
    },
    {
      style: 'w-56 rotate-[100deg]',
      bottom: 20,
      left: 96,
      letter: o_ball,
    },
  ];

  return (
    <>
      <div className="w-[1440px]">
        {/* left spheres */}
        <motion.div className="h-[670px] w-[720px] border absolute origin-top-left transform -translate-x-32 bottom-0 z-10 overflow-visible">
          {left_balls.map((ball: Ball, index: number) => (
            <Ball
              key={index}
              letter={ball.letter}
              style={ball.style}
              top={ball.top}
              left={ball.left}
              right={ball.right}
              bottom={ball.bottom}
              isVisible={allLoaded}
              onLoad={handleImageLoad}
            />
          ))}
        </motion.div>
        {/* right spheres */}
        <div className="h-[670px] w-[720px] absolute transform translate-x-[8rem] bottom-0 right-0 z-10 overflow-visible">
          {right_balls.map((ball: Ball, index: number) => (
            <Ball
              key={index}
              letter={ball.letter}
              style={ball.style}
              top={ball.top}
              left={ball.left}
              right={ball.right}
              bottom={ball.bottom}
              isVisible={allLoaded}
              onLoad={handleImageLoad}
            />
          ))}
        </div>
      </div>
    </>
  );
}
