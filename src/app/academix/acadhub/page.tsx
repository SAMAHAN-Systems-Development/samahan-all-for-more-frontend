import SectionFive from '@/components/academix sections/section-five/SectionFive';
import SectionOne from '@/components/academix sections/section-one/SectionOne';
import SectionThree from '@/components/academix sections/section-three/SectionThree';
import ClusterAcademicArms from '@/components/academix sections/sectionTwo';
import AcadhubSection4 from '@/components/acadhub-page-section-4/AcadHubSection4';
import { Banner } from '@/components/ui/banner/Banner';
import sections from '@/data/ClusterAcademicArms.json';
import sectionsData from '@/data/sectionFiveData.json';
import React from 'react';

const AcadHub = () => {
  return (
    <div>
      <Banner
        image={'/images/privacypolicy-banner.jpg'}
        imageAlt={'ACADHUB Image'}
        subtitle={'ACADEMIX'}
        title={'ACADHUB'}
      />
      <SectionOne />
      <ClusterAcademicArms sections={sections} />
      <SectionThree sections={sectionsData} />
      <AcadhubSection4 />
      <SectionFive />
    </div>
  );
};

export default AcadHub;
