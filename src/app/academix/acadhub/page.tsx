import ClusterAcademicArms from '@/components/academix sections/sectionTwo';
import AcadhubSection4 from '@/components/acadhub-page-section-4/AcadHubSection4';
import { Banner } from '@/components/ui/banner/Banner';
import sections from '@/data/ClusterAcademicArms.json';
import React from 'react';

const AcadHub = () => {
  return (
    <div>
      <Banner
        image={'/images/samahan-members.png'}
        imageAlt={'SAMAHAN Members'}
        subtitle={'ACADEMIX'}
        title={'ACADHUB'}
      />
      {/* Section 2 */}
      <ClusterAcademicArms sections={sections} />
      {/* Section 4 */}
      <AcadhubSection4 />
    </div>
  );
};

export default AcadHub;
