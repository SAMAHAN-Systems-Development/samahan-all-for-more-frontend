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
      <section className="sm:mx-[5rem] lg:mx-[10rem]">
        <h1 className="p-2 uppercase text-blue font-bold text-title mt-14">
          Advocasix
        </h1>
        {homepagedatatext.map((paragraph: Paragraph, index: number) => (
          <p
            key={index}
            className="mx-5 mb-4 text-blue leading-tight text-main"
          >
            {paragraph.text}
          </p>
        ))}
      </section>
      <AdvocasixCard data={advocasixCardData} />
    </div>
  );
}

export default HomePage;
