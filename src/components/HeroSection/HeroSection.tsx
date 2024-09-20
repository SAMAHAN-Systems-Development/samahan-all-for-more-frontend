import React from 'react';
import { FaAt } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { PiGlobe } from 'react-icons/pi';
import Image from 'next/image';

import BallFrame from '@/components/ui/BallFrame';
import logo from '@/stories/assets/hero/A4M LOGO.svg';

export default function HeroSection() {
  const socials: { icon: React.ReactNode; title: string; value: string }[] = [
    {
      icon: <MdOutlineMail className="scale-110" />,
      title: 'email',
      value: 'samahan@addu.edu.ph',
    },
    {
      icon: <PiGlobe className="scale-125" />,
      title: 'website',
      value: 'samahan.addu.edu.ph',
    },
    { icon: <FaAt />, title: 'sns', value: 'addusamahan' },
  ];

  return (
    <section
      className={`h-[26rem] min-[400px]:h-[28rem] sm:h-[40rem] md:h-[46rem] lg:h-[50rem] xl:h-[55rem] w-full relative tracking-wide overflow-clip `}
    >
      <div className="rounded-[10%_10%_50%_50%/0%_0%_20%_20%] w-full h-[23rem] min-[400px]:h-[26rem] sm:h-[36rem] md:h-[42rem] xl:h-[46rem] bg-blue pt-32 min-[400px]:pt-10 sm:pt-20 pb-28 sm:pb-36 flex flex-col items-center justify-center text-white">
        {/* temp navigation bar */}
        <div className="w-9/12 mx-auto rounded-full bg-white h-10 fixed top-10 z-10 mb-20 " />

        {/* logo and titles */}
        <div className="w-full flex flex-col gap-4 pt-8 pb-2 sm:pb-8 items-center z-10 justify-center ">
          <div className="w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-[650px] xl:h-[305px]  relative">
            <Image src={logo} alt="Logo" />
          </div>
          <span className="leading-tight text-center w-2/3 ">
            <h2 className="text-[0.5rem] sm:text-base font-medium">
              SAMAHAN NG MGA MAG-AARAL NG PAMANTASANG ATENEO DE DAVAO
            </h2>
            <h3 className={`font-light text-[0.5rem] sm:text-xs mt-1 sm:mt-0`}>
              The Student Government of the College Unit of Ateneo de Davao
              University
            </h3>
          </span>

          {/* socials */}
          <div className="flex flex-col min-[400px]:flex-row justify-center sm:justify-between font-light mt-2 sm:mt-12">
            {socials.map((social, index) => (
              <div
                key={index}
                className="flex gap-2 text-[0.5rem] p-1 sm:text-xs sm:p-2 items-center"
              >
                <div className="rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-white text-blue flex justify-center items-center overflow-visible">
                  {social.icon}
                </div>
                {social.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* balls */}
      <div className="w-full absolute bottom-0 lg:scale-110 ">
        <BallFrame hero />
      </div>
    </section>
  );
}
