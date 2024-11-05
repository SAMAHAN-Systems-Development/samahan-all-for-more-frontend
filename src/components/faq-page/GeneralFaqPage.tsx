import React from 'react';

import FaqSection from '@/components/faq-page/FaqSection';
import GeneralInfoPage from '@/components/faq-page/GeneralInfoPage';
import { Banner } from '@/components/ui/banner/Banner';

const GeneralFaqPage = () => {
  return (
    <div>
      <Banner
        image="/images/faqs-banner.jpg"
        imageAlt="FAQS Image"
        subtitle="FAQ"
        title="SAMAHAN"
      />
      <FaqSection />
      <GeneralInfoPage />
    </div>
  );
};
export default GeneralFaqPage;
