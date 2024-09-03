import React from 'react';
import Image from 'next/image';
import m_ball from '@/stories/assets/hero/M.png';
import o_ball from '@/stories/assets/hero/O.svg';
import r_ball from '@/stories/assets/hero/R.svg';
import e_ball from '@/stories/assets/hero/E.svg';

export default function BallFrame() {
  return (
    <>
      <div className="h-screen w-fit border absolute top-10 left-0 z-10"></div>
    </>
  );
}
