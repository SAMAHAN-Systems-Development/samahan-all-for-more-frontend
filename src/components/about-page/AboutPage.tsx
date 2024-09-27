import React from 'react';

import BrandingSection from '@/components/about-page/BrandingSection';
import LogoSection from '@/components/about-page/LogoSection';
import { Banner } from '@/components/ui/banner/Banner';

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
