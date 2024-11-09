import React from 'react';
import AccordionStatic from '@/components/academix sections/section-one/AccordionStatic';

const SectionOne = () => {
  return (
    // mx28
    <main className="mt-52 mx-28">
      <div className="text-blue">
        <div className="w-full mx-auto">
          <h1 className="font-bold text-center sm:text-start text-[24px] xs:text-[28px] sm:text-[40px] md:text-title mb-6 sm:mb-8 md:mb-12 leading-tight">
            STUDENT RESOURCE GUIDE
          </h1>
        </div>
        <p className="mb-12 sm:text-start text-center">
          Traversing into new pathways towards attaining academic excellence,
          sustaining academic service, and empowering academic integrity, the
          SAMAHAN Department of Academic Affairs pioneers its mission to provide
          a convenient academic space among Ateneans for fostering individual
          knowledge and cultivating community engagement on resource sharing and
          distribution.
        </p>
        <p className="mb-36 sm:text-start text-center">
          <span className="font-bold">
            AcadHub: The Student Resource Guide,
          </span>{' '}
          an initiative of the SAMAHAN Department of Academic Affairs, is your
          one-stop destination for everything you need to succeed in your
          academic journey. Discover essential student services, helpful
          resources, and innovative digital tools, all in one convenient place.
          Whether you are a freshman just starting or a seasoned upperclassman,
          AcadHub is your partner in achieving academic excellence. Towards a
          thorough information dissemination of the vital student resources for
          the benefit of every Atenean, we shall build a more informed and
          engaged Atenean academic community!
        </p>
        <section className="mb-64">
          <AccordionStatic
            title="Get to Know Your Cluster Academic Arms"
            href="#ClusterAcademicArms"
          />
          <AccordionStatic
            title="Helpful Digital Applications"
            href="#Helpful Digital Applications"
          />
          <AccordionStatic
            title="GE Courses Descriptions"
            href="#GE Courses Descriptions"
          />
          <AccordionStatic
            title="Recommended Websites for RRL"
            href="#Recommended Websites for RRL"
          />
        </section>
      </div>
    </main>
  );
};

export default SectionOne;
