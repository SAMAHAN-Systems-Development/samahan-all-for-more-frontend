import React from 'react';
import Image, { StaticImageData } from 'next/image';
import m_ball from '@/stories/assets/hero/M.png';
import o_ball from '@/stories/assets/hero/O.png';
import r_ball from '@/stories/assets/hero/R.png';
import e_ball from '@/stories/assets/hero/E.png';

export default function BallFrame() {
  const balls: {
    M: StaticImageData;
    O: StaticImageData;
    R: StaticImageData;
    E: StaticImageData;
  } = {
    M: m_ball,
    O: o_ball,
    R: r_ball,
    E: e_ball,
  };
  return (
    <>
      <div className="h-fit w-56 border absolute  bottom-0 z-10">
        <div className="bottom-10 absolute w-10 left-0 z-10">
          <Image src={balls.O} alt="M" className="object-contain" />
        </div>
        <div className="bottom-20 absolute w-10 left-20 z-10">
          <Image src={balls.R} alt="M" className="object-contain" />
        </div>
        <div className="bottom-30 absolute w-10 left-12 z-10">
          <Image src={balls.O} alt="M" className="object-contain" />
        </div>
        <div className="bottom-60 absolute w-10 left-20 z-10">
          <Image src={balls.M} alt="M" className="object-contain" />
        </div>
        <div className="bottom-50 absolute w-10 left-35 z-10">
          <Image src={balls.M} alt="M" className="object-contain" />
        </div>
        <div className="bottom-13 absolute w-10 left-20 z-10">
          <Image src={balls.M} alt="M" className="object-contain" />
        </div>
      </div>
    </>
  );
}
