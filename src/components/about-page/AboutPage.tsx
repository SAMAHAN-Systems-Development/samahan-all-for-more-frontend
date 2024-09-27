import React from 'react';

import BrandingSection from '@/components/about-page/BrandingSection';
import LogoSection from '@/components/about-page/LogoSection';
import { Banner } from '@/components/ui/banner/Banner';

const AboutPage = () => {
  return (
    <main>
      <Banner
        image="/images/samahan-members.png"
        imageAlt="SAMAHAN Members Image"
        subtitle="About"
        title="SAMAHAN"
      />
      <div className="p-12 overflow-x-hidden">
        <LogoSection />
        <BrandingSection />
      </div>
    </main>
  );
};

export default AboutPage;
