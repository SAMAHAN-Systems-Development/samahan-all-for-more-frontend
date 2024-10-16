import React from 'react';

import { Banner } from '@/components/ui/banner/Banner';
import ProfileCard from '@/components/ui/ProfileCard';
import SecretaryGeneralOfficeData from '@/data/officeOfTheSecretaryGeneralData.json';

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
    sectionTitle: 'Office Of The Samahan Secretary-General',
    subText:
      'The OSG aims to ensure efficiency on administrative and secretariat works that shall mobilize the student government to operate its services and meet its goals.',
  },
  {
    sectionTitle: 'SAMAHAN Communications',
    subText:
      'The SAMAHAN Communications (SAMACOMMS) serves as the public affairs and information hub, managing communication, information dissemination, and social media for the SAMAHAN Central Board.',
  },
  {
    sectionTitle: 'Ateneo SAMAHAN Productions',
    subText:
      'The Ateneo SAMAHAN Productions specializes in planning and managing SAMAHAN-led activities and events at Ateneo de Davao University.',
  },
  {
    sectionTitle: 'SAMAHAN Creative Team',
    subText:
      'The SAMAHAN Creative Team is the innovative force behind the SAMAHAN Central Board, crafting engaging visual content and creative solutions to inspire and connect with the student body.',
  },
  {
    sectionTitle: 'SAMAHAN Research and Development',
    subText:
      'The SAMAHAN Research and Development Department conducts comprehensive research to analyze and address the needs of the student body, providing data-driven insights and solutions for the Ateneo community.',
  },
  {
    sectionTitle: 'SAMAHAN Systems Development',
    subText:
      'The SAMAHAN Systems Development Department designs and develops software and digital systems to make SAMAHAN more efficient through technology.',
  },
];

const OSGPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Banner
        image="/images/office-of-the-secretary-general.jpg"
        imageAlt="SAMAHAN Office of the Secretary-General Image"
        subtitle="Office of the"
        title="SECRETARY-GENERAL"
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

            {/* Office Of The Samahan Secretary-General */}
            {section.sectionTitle ===
              'Office Of The Samahan Secretary-General' && (
              <div className="flex flex-col items-center">
                {/* Grid layout  */}
                <div className="grid gap-y-6 gap-x-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  {SecretaryGeneralOfficeData.OfficeOfTheSecretaryGeneral.slice(
                    0,
                    4
                  ).map((officer: Officer, officerIndex: number) => (
                    <div
                      key={officerIndex}
                      className={`flex flex-col items-center  ${
                        officerIndex === 0 ? 'lg:col-span-3' : 'lg:col-span-1'
                      }`}
                    >
                      <ProfileCard
                        fileName={officer.fileName}
                        fullName={officer.fullName}
                        position={officer.position}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid py-6 lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {SecretaryGeneralOfficeData.OfficeOfTheSecretaryGeneral.slice(
                    4,
                    6
                  ).map((officer: Officer, officerIndex: number) => (
                    <ProfileCard
                      key={officerIndex}
                      fileName={officer.fileName}
                      fullName={officer.fullName}
                      position={officer.position}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SAMAHAN Communications */}
            {section.sectionTitle === 'SAMAHAN Communications' && (
              <div className="flex justify-center">
                <div className="grid lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {SecretaryGeneralOfficeData.SamahanCommunications.map(
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

            {/* Ateneo SAMAHAN Productions */}
            {section.sectionTitle === 'Ateneo SAMAHAN Productions' && (
              <div className="flex justify-center">
                <div className="grid lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {SecretaryGeneralOfficeData.AteneoSamahanProductions.map(
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

            {/* SAMAHAN Creative Team */}
            {section.sectionTitle === 'SAMAHAN Creative Team' && (
              <div className="flex justify-center">
                <div className="grid lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {SecretaryGeneralOfficeData.SamahanCreativeTeam.map(
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

            {/* SAMAHAN Research and Development */}
            {section.sectionTitle === 'SAMAHAN Research and Development' && (
              <div className="flex justify-center">
                <div className="grid lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {SecretaryGeneralOfficeData.SamahanResearchAndDevelopment.map(
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

            {/* SAMAHAN Systems Development */}
            {section.sectionTitle === 'SAMAHAN Systems Development' && (
              <div className="flex justify-center">
                <div className="grid lg:gap-20 lg:grid-cols-2 md:col-span-2 md:gap-10">
                  {SecretaryGeneralOfficeData.SamahanSystemsDevelopment.map(
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

export default OSGPage;
