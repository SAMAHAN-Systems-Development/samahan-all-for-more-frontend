import React from 'react';
import { Banner } from '@/components/ui/banner/Banner';
import BrandingSection from '@/components/AboutPage/BrandingSection';
import LogoSection from '@/components/AboutPage/LogoSection';

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
