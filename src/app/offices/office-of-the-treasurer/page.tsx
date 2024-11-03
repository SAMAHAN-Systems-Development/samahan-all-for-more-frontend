import React from 'react';

import { Banner } from '@/components/ui/banner/Banner';
import ProfileCard from '@/components/ui/ProfileCard';
import TreasurerOfficeData from '@/data/officeOfTheTreasurerData.json';

type Officer = {
  fileName: string;
  fullName: string;
  position: string;
};

type SectionTitleData = {
  sectionTitle: string;
  subText?: string;
};

const sectionTitles: SectionTitleData[] = [
  {
    sectionTitle: 'Office of the Treasurer',
    subText:
      'The Office of the SAMAHAN Treasurer manages the organization’s finances, including budgeting and resource allocation, oversees the logistics of the event, and secures sponsorships to support effective fund utilization.',
  },
  {
    sectionTitle: 'Samahan Logistics Department',
    subText:
      'The SAMAHAN Logistics Department manages procurement, organization, and supervision of equipment and materials to ensure smooth operations and successful events for the SAMAHAN.',
  },
  {
    sectionTitle: 'Samahan Sponsorship and Support',
    subText:
      'The SAMAHAN Sponsorship and Support Department secures financial support and resources by cultivating sponsor relationships to enhance student events and activities.',
  },
];

const OSTPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Banner
        image="/images/office-of-the-treasurer.jpg"
        imageAlt="SAMAHAN Office of the Treasurer Image"
        subtitle="Office of the"
        title="TREASURER"
      />
      <section className="text-center p-12">
        {sectionTitles.map((section, index) => (
          <div key={index} className="p-10">
            <h1 className="text-bold font-bold uppercase text-blue pb-2">
              {section.sectionTitle}
            </h1>
            {section.subText && (
              <p className="text-main text-blue mb-4 md:px-8 sm:px-10">
                {section.subText}
              </p>
            )}

            {/* Office of the Treasurer */}
            {section.sectionTitle === 'Office of the Treasurer' && (
              <div className="flex flex-col items-center">
                <div className="grid gap-y-6 gap-x-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  {TreasurerOfficeData.OfficeOfTheSamahanTreasurer.map(
                    (officer: Officer, officerIndex: number) => (
                      <div
                        key={officerIndex}
                        className={`flex flex-col items-center ${
                          officerIndex === 0
                            ? 'lg:col-span-3 text-center'
                            : 'lg:col-span-1 text-center'
                        }`}
                      >
                        <ProfileCard
                          fileName={officer.fileName}
                          fullName={officer.fullName}
                          position={officer.position}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Samahan Logistics Department */}
            {section.sectionTitle === 'Samahan Logistics Department' && (
              <div className="flex justify-center">
                <div className="grid lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {TreasurerOfficeData.SamahanLogisticsDepartment.map(
                    (officer: Officer, officerIndex: number) => (
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
            )}

            {/* Samahan Sponsorship and Support */}
            {section.sectionTitle === 'Samahan Sponsorship and Support' && (
              <div className="flex justify-center">
                <div className="grid justify-center lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {TreasurerOfficeData.SamahanSponsorshipAndSupport.map(
                    (officer: Officer, officerIndex: number) => (
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
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default OSTPage;
