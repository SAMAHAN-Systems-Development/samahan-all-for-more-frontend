import React from 'react';
import m_ball from '@/stories/assets/hero/M.png';
import o_ball from '@/stories/assets/hero/O.png';
import r_ball from '@/stories/assets/hero/R.png';
import e_ball from '@/stories/assets/hero/E.png';
import Ball from '@/components/ui/Balls';

export default function BallFrame() {
  return (
    <>
      <div className="h-5/6 w-1/2 border absolute transform translate-x-[-8rem] bottom-0 z-10 overflow-visible">
        <Ball style="top-10 left-8 w-32" letter={o_ball} />
        <Ball style="top-32 left-44 w-10" letter={m_ball} />
        <Ball style="bottom-64 left-0 w-56" letter={r_ball} />
        <Ball style="bottom-80 left-64 w-24" letter={e_ball} />
        <Ball style="bottom-32 left-28 w-40" letter={o_ball} />
        <Ball style="bottom-10 left-64 w-64" letter={m_ball} />
        <Ball style="bottom-28 right-24 w-24" letter={r_ball} />
      </div>
    </>
  );
}
