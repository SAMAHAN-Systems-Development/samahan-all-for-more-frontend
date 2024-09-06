import React from 'react';
import logo from '@/stories/assets/hero/A4M LOGO.png';
import Image, { StaticImageData } from 'next/image';
import email_icon from '@/stories/assets/hero/email_icon.png';
import website_icon from '@/stories/assets/hero/website_icon.png';
import sns_icon from '@/stories/assets/hero/sns_icon.png';
import edge from '@/stories/assets/hero/round end.svg';
import BallFrame from '../ui/BallFrame';

export default function HeroSection() {
  const socials: { icon: StaticImageData; title: string; value: string }[] = [
    { icon: email_icon, title: 'email', value: 'samahan@addu.edu.ph' },
    { icon: website_icon, title: 'website', value: 'samahan.addu.edu.ph' },
    { icon: sns_icon, title: 'sns', value: 'addusamahan' },
  ];

  return (
    <section
      className={`h-[120vh] w-full relative max-w-[1440px] tracking-wider border`}
    >
      <div className="w-full h-[90vh] bg-blue flex flex-col items-center border justify-center text-white">
        {/* temp navigation bar */}
        <div className="w-9/12 mx-auto rounded-full bg-white h-10 fixed top-10 z-10 " />

        {/* logo and titles */}
        <div className="w-full h-full flex flex-col gap-4 pt-20 items-center z-10 justify-center ">
          <div className="w-[650px] h-[305px] relative">
            <Image src={logo} alt="Logo" />
          </div>
          <span className="leading-tight text-center">
            <h2 className="text-base font-medium">
              SAMAHAN NG MGA MAG-AARAL NG PAMANTASANG ATENEO DE DAVAO
            </h2>
            <h3 className={`font-light text-xs`}>
              The Student Government of the College Unit of Ateneo de Davao
              University
            </h3>
          </span>

          {/* socials */}
          <div className="flex justify-between font-light mt-20">
            {socials.map((social) => (
              <div className="flex gap-2 text-xs p-2 items-center">
                <div className="rounded-full h-5 w-5 bg-white p-1 flex justify-center items-center overflow-visible">
                  <Image src={social.icon} alt={social.title} />
                </div>
                <span>{social.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* edge */}
      <div className="w-full h-[30vh] relative border">
        <Image src={edge} alt="" fill className="object-cover" />
      </div>

      {/* balls */}
      <BallFrame />
    </section>
  );
}
