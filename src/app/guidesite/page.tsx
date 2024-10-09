// pages/guidesite.tsx
import React from 'react';

import {
  IcommpEquipment,
  RequestForDocuments,
} from '@/components/guidesite/Facilities';
import Steps from '@/components/guidesite/Steps';
import { Banner } from '@/components/ui/banner/Banner';
import guidesiteData from '@/data/guidesiteData.json';

const Guidesite = () => {
  const { title, steps } = guidesiteData.venueReservations;

  return (
    <>
      <Banner
        image={'/images/samahan-members.png'}
        imageAlt={'SAMAHAN Members'}
        subtitle={'SAMAHAN'}
        title={'GUIDESITE'}
      />
      <div className="text-blue font-sans px-8 md:px-32 py-10 bg-gray-100">
        <div className="max-w-screen-lg mx-auto">
          <section>
            <h2 className="text-bold font-bold mb-4 pt-20">{title}</h2>
            <Steps steps={steps} />
          </section>

          <section>
            <IcommpEquipment />
          </section>

          <section className="mt-10">
            <RequestForDocuments />
          </section>
        </div>
      </div>
    </>
  );
};

export default Guidesite;
