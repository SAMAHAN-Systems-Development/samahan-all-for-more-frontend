import React from 'react';
import logo from '@/stories/assets/hero/A4M LOGO.png';
import Image from 'next/image';
import email_icon from '@/stories/assets/hero/email_icon.png';
import website_icon from '@/stories/assets/hero/website_icon.png';
import sns_icon from '@/stories/assets/hero/sns_icon.png';
import edge from '@/stories/assets/hero/round end.svg';

export default function HeroSection() {
  return (
    <section className="font-inter h-screen w-full p-10 relative max-w-[1440px]">
      <div className="w-full h-full bg-blue flex flex-col items-center justify-center text-white">
        {/* temp navigation bar */}
        <div className="w-9/12 mx-auto rounded-full bg-white h-14 sticky top-10 z-10 " />

        {/* logo and titles */}
        <div className="w-full h-full flex flex-col gap-4 items-center z-10 relative justify-center ">
          <div className="w-[650px] h-[305px] relative">
            <Image
              src={logo}
              alt="Logo"
              fill
              className="relative object-contain"
            />
          </div>
          <span className="leading-tight text-center">
            <h2 className="text-base">
              SAMAHAN NG MGA MAG-AARAL NG PAMANTASANG ATENEO DE DAVAO
            </h2>
            <h3 className="font-light text-xs">
              The Student Government of the College Unit of Ateneo de Davao
              University
            </h3>
          </span>

          {/* socials */}
          <div className="flex justify-between"></div>
        </div>
      </div>
      <div className="w-full h-40 relative">
        <Image src={edge} alt="" fill className="object-cover" />
      </div>
    </section>
  );
}
