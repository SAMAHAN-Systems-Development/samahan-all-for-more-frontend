import React from 'react';

import { Banner } from '@/components/ui/banner/Banner';
import ProfileCard from '@/components/ui/ProfileCard';
import VicePresidentOfficeData from '@/data/officeOfTheVicePresidentData.json';

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
    sectionTitle: 'Office of the Samahan Vice President',
    subText:
      'The OVP aims to supervise the internal affairs of the SAMAHAN Central Board and lead the Student Assembly.',
  },
  {
    sectionTitle: 'Office of the Legislative Secretary',
    subText:
      'The Office of the Legislative Secretary provides essential legislative support and assistance to the Student Assembly, ensuring effective governance within the SAMAHAN.',
  },
  {
    sectionTitle: 'Department of Academic Affairs',
    subText:
      'The Department of Academic Affairs fosters academic excellence and supports students in their journey while enhancing institutional academic standards.',
  },
  {
    sectionTitle: 'Department of Disaster Risk Reduction and Management',
    subText:
      'The Department of Disaster Risk Reduction and Management (DDRRM) promotes disaster resilience and preparedness while providing support for the Atenean community during emergencies.',
  },
  {
    sectionTitle: 'Samahan Political Affairs and Engagements Department',
    subText:
      'The SAMAHAN Political Affairs and Engagements Department (SPAED) champions socio-political awareness and advocacy for meaningful change through campaigns and critical discussions.',
  },
];

const OVPPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Banner
        image="/images/office-of-the-vice-president.jpg"
        imageAlt="SAMAHAN Office of the Vice President Image"
        subtitle="Office of the"
        title="VICE PRESIDENT"
      />
      <section className="text-center p-12">
        {sectionTitles.map((section, index) => (
          <div key={index} className="p-10">
            <h1 className="text-bold font-bold uppercase text-blue pb-2">
              {section.sectionTitle}
            </h1>
            {section.subText && (
              <p className="text-main text-blue mb-4 md:px-80 sm:px-10">
                {section.subText}
              </p>
            )}

            {/* Office of the Samahan Vice President */}
            {section.sectionTitle ===
              'Office of the Samahan Vice President' && (
              <div className="flex flex-col items-center">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">
                  {VicePresidentOfficeData.OfficeOfTheSamahanVicePresident.map(
                    (officer: Officer, officerIndex: number) => (
                      <div
                        key={officerIndex}
                        className={`flex flex-col items-center ${
                          officerIndex === 0
                            ? 'lg:col-span-2 text-center'
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

            {/* Office of the Legislative Secretary */}
            {section.sectionTitle === 'Office of the Legislative Secretary' && (
              <div className="flex justify-center">
                <div className="grid lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {VicePresidentOfficeData.OfficeOfTheLegislativeSecretary.map(
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

            {/* Department of Academic Affairs */}
            {section.sectionTitle === 'Department of Academic Affairs' && (
              <div className="flex justify-center">
                <div className="grid lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {VicePresidentOfficeData.DepartmentOfAcademicAffairs.map(
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

            {/* Department of Disaster Risk Reduction and Management */}
            {section.sectionTitle ===
              'Department of Disaster Risk Reduction and Management' && (
              <div className="flex justify-center">
                <div className="grid justify-center lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {VicePresidentOfficeData.DepartmentOfDisasterRiskReductionAndManagement.map(
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

            {/* Samahan Political Affairs and Engagements Department */}
            {section.sectionTitle ===
              'Samahan Political Affairs and Engagements Department' && (
              <div className="flex justify-center">
                <div className="grid justify-center lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {VicePresidentOfficeData.SamahanPoliticalAffairsAndEngagementsDepartment.map(
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

export default OVPPage;
