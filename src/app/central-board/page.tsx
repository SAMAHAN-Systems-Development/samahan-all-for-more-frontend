'use client';
import React, { useEffect, useState } from 'react';

import BaseCard from '@/components/office-cards/BaseCard';
import { Banner } from '@/components/ui/banner/Banner';
import ProfileCard from '@/components/ui/ProfileCard';
import Officers from '@/data/officersData.json';

type OfficerTypes = {
  fileName: string;
  fullName: string;
  position: string;
  offices?: string;
};

type data = {
  ClusterRepresentatives: OfficerTypes[];
  SamahanCoreOfficers: OfficerTypes[];
};

const OfficerData = Officers as data;

type SectionTitleData = {
  sectionTitle: string;
  subText?: string;
};

const sectionTitles: SectionTitleData[] = [
  {
    sectionTitle: 'CLUSTER REPRESENTATIVES',
    subText:
      "The bridge between the SAMAHAN Central Board and the student clusters, ensuring their cluster's concerns are heard and addressed while fostering unity across the university.",
  },
];

const CentralBoardPage: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Banner
        image="/images/central-board.jpg"
        imageAlt="SAMAHAN Office of the President Image"
        subtitle="SAMAHAN"
        title="CENTRAL BOARD"
      />
      <section className="text-center p-12 sm:mt-10">
        {/* SAMAHAN CORE OFFICERS */}
        <div className="flex justify-center p-1 sm:p-14">
          <div className="grid lg:gap-20 xl:grid-cols-2 lg:grid-cols-1 xsm:gap-28 xsm:scale-75 sm:scale-100">
            {OfficerData.SamahanCoreOfficers.map(
              (officer: OfficerTypes, officerIndex: number) => (
                <BaseCard
                  key={officerIndex}
                  imageSrc={officer.fileName}
                  name={officer.fullName}
                  title={officer.position}
                  buttonLink={officer.offices || ''}
                />
              )
            )}
          </div>
        </div>

        <div className="">
          {sectionTitles.map((section, index) => (
            <div key={index} className="p-[0.1rem] sm:p-10">
              <h1
                className={`font-bold uppercase text-blue pb-2 ${windowWidth !== null && windowWidth <= 485 ? 'text-[28px]' : 'text-[40px]'}`}
              >
                {' '}
                {section.sectionTitle}
              </h1>
              {section.subText && (
                <p className="text-main text-blue mb-4 text-center">
                  {section.subText}
                </p>
              )}
              {/* CLUSTER REPRESENTATIVES */}
              <div className="flex justify-center">
                <div className="grid lg:grid-cols-3 lg:gap-20 md:grid-cols-1 md:gap-10">
                  {OfficerData.ClusterRepresentatives.map(
                    (officer: OfficerTypes, officerIndex: number) => (
                      <ProfileCard
                        key={officerIndex}
                        fileName={officer.fileName}
                        fullName={officer.fullName}
                        position={officer.position}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CentralBoardPage;
