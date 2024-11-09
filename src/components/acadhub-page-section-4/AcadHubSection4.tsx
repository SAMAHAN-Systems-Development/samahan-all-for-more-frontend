import React from 'react';
import AcadhubSection4Table from '@/components/acadhub-page-section-4/acadhub-page-table/AcadhubSection4Table';

interface AcadhubSection4Props {
  id?: string;
}

const AcadhubSection4: React.FC<AcadhubSection4Props> = ({}) => {
  return (
    <main>
      <div id="GE Courses Descriptions" className="bg-blue text-white">
        <section className="py-24 mb-48 text-center">
          <header>
            <h1 className="font-bold text-3xl mb-4 mx-4">
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
      <section className="mx-9 mb-72">
        <AcadhubSection4Table />
      </section>
    </main>
  );
};

export default AcadhubSection4;
