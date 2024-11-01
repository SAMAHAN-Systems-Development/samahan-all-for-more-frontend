'use client';
import AdvocasixCard from '@/components/ui/Advocasix/AdvocasixCard';
import type { Metadata } from 'next';
import advocasixCardData from '@/data/advocasixCardData.json';
import HomeSection from '@/components/Sections/HomePage';

export default function Home() {
  return (
    <main>
      {/* add sections here */}
      {/* <AdvocasixCard data={advocasixCardData} /> */}
      <HomeSection />
    </main>
  );
}
