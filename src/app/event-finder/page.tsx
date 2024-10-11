import React from 'react';

import { Banner } from '@/components/ui/banner/Banner';

export default function page() {
  return (
    <>
      <Banner
        image={'/images/samahan-members.png'}
        imageAlt={'SAMAHAN Members'}
        subtitle={'SAMAHAN'}
        title={'EVENT FINDER'}
      />

      <section>
        <span className="text-bold font-bold">ONGOING EVENTS</span>
      </section>
    </>
  );
}
