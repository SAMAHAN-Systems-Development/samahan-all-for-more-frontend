import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import AdvocasixCard from '../ui/Advocasix/AdvocasixCard';
import advocasixCardData from '@/data/advocasixCardData.json';
import homepagedata from '../../data/homepageData.json';

interface Paragraph {
  text: string;
}

const homepagedatatext: Paragraph[] = homepagedata as Paragraph[];
function HomePage() {
  return (
    <div>
      <HeroSection />
      <div className="flex justify-center w-full">
        <section className="max-w-[1400px] mx-[50px]">
          <h1 className="uppercase text-blue font-bold text-title mt-14">
            Advocasix
          </h1>
          {homepagedatatext.map((paragraph: Paragraph, index: number) => (
            <p key={index} className="mb-4 text-blue leading-tight text-main">
              {paragraph.text}
            </p>
          ))}
        </section>
      </div>
      <AdvocasixCard data={advocasixCardData} />
    </div>
  );
}

export default HomePage;
