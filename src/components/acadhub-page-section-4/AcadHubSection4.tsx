import React from 'react';
import AcadhubSection4Table from '@/components/acadhub-page-section-4/acadhub-page-table/AcadhubSection4Table';

const AcadhubSection4 = () => {
  return (
    <main>
      <div className="bg-blue text-white">
        <section className="py-24 mb-48 text-center">
          <header>
            <h1 className="font-bold text-title mb-4">
              GE COURSES DESCRIPTION
            </h1>
          </header>
          <p className="text-main mx-24">
            These interdisciplinary courses are designed to enhance students'
            knowledge in areas such as{' '}
            <span className="font-bold">
              humanities, social sciences, natural sciences, and mathematics
            </span>
            , promoting well-rounded personal and academic growth.
          </p>
        </section>
      </div>
      <section className="mx-28 mb-72">
        <AcadhubSection4Table />
      </section>
    </main>
  );
};

export default AcadhubSection4;
