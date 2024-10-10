import React from 'react';

import FaqSection from '@/components/faq-page/FaqSection';
import GeneralInfoPage from '@/components/faq-page/GeneralInfoPage';
import { Banner } from '@/components/ui/banner/Banner';
import Footer from '@/components/ui/Footer/Footer';

const GeneralFaqPage = () => {
  return (
    <div>
      <Banner
        image="/images/samahan-members.png"
        imageAlt="SAMAHAN Members Image"
        subtitle="FAQ"
        title="SAMAHAN"
      />
      <FaqSection />
      <GeneralInfoPage />
      <Footer />
    </div>
  );
};
export default GeneralFaqPage;
