import React from 'react';

import { Banner } from '@/components/ui/banner/Banner';
import ProfileCard from '@/components/ui/ProfileCard';
import PresidentOfficeData from '@/data/officeOfThePresidentData.json';

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
    sectionTitle: 'Office of the Samahan President',
    subText:
      'The OSP, the highest executive office, aims to establish harmony and efficiency in both the internal operations and external relations of the student government.',
  },
  { sectionTitle: 'Department of External Affairs' },
  { sectionTitle: 'Ecoteneo Student Unit' },
  { sectionTitle: 'Department of Campaigns and Advocacies' },
];

const isLastCardCentered = (dataLength: number) => dataLength % 3 === 1;

const isLast = (index: number, dataLength: number) => index === dataLength - 1;

const shouldCenterLastCard = (index: number, dataLength: number) => {
  return isLast(index, dataLength) && isLastCardCentered(dataLength);
};

const OSPPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Banner
        image="/images/office-of-the-president.png"
        imageAlt="SAMAHAN Office of the President Image"
        subtitle="Office of the"
        title="PRESIDENT"
      />
      <section className="text-center p-12">
        {sectionTitles.map((section, index) => (
          <div key={index} className="p-10">
            <h1 className="text-bold font-bold uppercase text-blue pb-2">
              {section.sectionTitle}
            </h1>
            {section.subText && (
              <p className="text-main text-blue mb-4">{section.subText}</p>
            )}

            {/* Office of the Samahan President */}
            {section.sectionTitle === 'Office of the Samahan President' && (
              <div className="flex justify-center">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                  {PresidentOfficeData.OfficeOfTheSamahanPresident.map(
                    (officer: Officer, officerIndex: number) => (
                      <div
                        key={officerIndex}
                        className={`flex flex-col items-center ${
                          shouldCenterLastCard(
                            officerIndex,
                            PresidentOfficeData.OfficeOfTheSamahanPresident
                              .length
                          )
                            ? 'lg:col-span-3 text-center'
                            : ''
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

            {/* Department of External Affairs */}
            {section.sectionTitle === 'Department of External Affairs' && (
              <div className="flex justify-center">
                <div className="grid lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {PresidentOfficeData.DepartmentOfExternalAffairs.map(
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

            {/* Ecoteneo Student Unit */}
            {section.sectionTitle === 'Ecoteneo Student Unit' && (
              <div className="flex justify-center">
                <ProfileCard
                  fileName={PresidentOfficeData.EcoteneoStudentUnit.fileName}
                  fullName={PresidentOfficeData.EcoteneoStudentUnit.fullName}
                  position={PresidentOfficeData.EcoteneoStudentUnit.position}
                />
              </div>
            )}

            {/* Department of Campaigns and Advocacies */}
            {section.sectionTitle ===
              'Department of Campaigns and Advocacies' && (
              <div className="flex justify-center">
                <div className="grid justify-center lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {PresidentOfficeData.DepartmentOfCampaignsAndAdvocacies.map(
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

export default OSPPage;
