import React from 'react';
import LogoSection from '@/components/AboutPage/LogoSection';
import BrandingSection from '@/components/AboutPage/BrandingSection';

const AboutPage = () => {
  return (
    <main className="p-12 overflow-x-hidden">
      <LogoSection />
      <BrandingSection />
    </main>
  );
};

export default AboutPage;
