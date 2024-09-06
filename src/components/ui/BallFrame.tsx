import React from 'react';
import m_ball from '@/stories/assets/hero/M.png';
import o_ball from '@/stories/assets/hero/O.png';
import r_ball from '@/stories/assets/hero/R.png';
import e_ball from '@/stories/assets/hero/E.png';
import Ball from '@/components/ui/Balls';

export default function BallFrame() {
  return (
    <>
      {/* left spheres */}
      <div className="h-[670px] w-1/2 absolute transform translate-x-[-8rem] bottom-0 z-10 overflow-visible">
        <Ball style="top-10 left-10 w-32" letter={o_ball} />
        <Ball style="top-32 left-44 w-10 -rotate-12" letter={m_ball} />
        <Ball style="bottom-64 left-0 w-56 rotate-45" letter={r_ball} />
        <Ball style="bottom-80 left-64 w-24 -rotate-45" letter={e_ball} />
        <Ball style="bottom-32 left-28 w-40" letter={o_ball} />
        <Ball style="bottom-10 left-64 w-64 rotate-12" letter={m_ball} />
        <Ball style="bottom-24 right-[6.5rem] w-24 rotate-45" letter={r_ball} />
      </div>
      {/* right spheres */}
      <div className="h-[670px] w-1/2 absolute transform translate-x-[8rem] bottom-0 right-0 z-10 overflow-visible">
        <Ball style="top-10 right-4 w-56 -rotate-45" letter={m_ball} />
        <Ball style="top-32 right-72 w-12 -rotate-45" letter={r_ball} />
        <Ball style="bottom-80 right-64 w-24" letter={o_ball} />
        <Ball
          style="bottom-56 right-20 w-40 -rotate-[145deg]"
          letter={e_ball}
        />
        <Ball
          style="bottom-10 right-40 w-64 -rotate-[110deg]"
          letter={r_ball}
        />
        <Ball style="bottom-64 left-64 w-12" letter={e_ball} />
        <Ball style="bottom-5 left-24 w-56 rotate-[100deg]" letter={o_ball} />
      </div>
    </>
  );
}
