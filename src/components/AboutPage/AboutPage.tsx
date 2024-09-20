import React from 'react';
import LogoSection from '@/components/AboutPage/LogoSection';
import BrandingSection from '@/components/AboutPage/BrandingSection';
import { Banner } from '../ui/banner/Banner';

const AboutPage = () => {
  return (
    <main>
      <Banner />
      <div className="p-12 overflow-x-hidden">
        <LogoSection />
        <BrandingSection />
      </div>
    </main>
  );
};

export default AboutPage;
