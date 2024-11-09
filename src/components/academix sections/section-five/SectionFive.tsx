import React from 'react';
import SectionFiveTable from '@/components/academix sections/section-five/SectionFiveTable';
import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import ContactItemTwo from '@/components/academix sections/section-five/ContactItemTwo';
import academixContactItemData from '@/data/academixContactItemData.json';
import Image from 'next/image';

interface Contact {
  href: string;
  icon: keyof typeof iconMap; // Ensures the icon is one of the keys in iconMap
  text: string;
}

const iconMap: Record<string, React.ElementType> = {
  MdOutlineEmail,
  FaFacebook,
  FaInstagram,
};

interface SectionFiveProps {
  id?: string;
}

const SectionFive: React.FC<SectionFiveProps> = ({}) => {
  return (
    <main>
      <div id="Recommended Websites for RRL" className="bg-blue text-white">
        <section className="py-24 mb-48 text-center">
          <header>
            <h1 className="font-bold text-3xl mb-4">
              RECOMMENDED WEBSITES FOR RRL
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
      <section className="mx-28 mb-40">
        <SectionFiveTable />
      </section>

      <section className="flex flex-col items-center justify-center bg-white border border-blue rounded-lg mx-4 sm:mx-8 md:mx-28 mb-20 sm:mb-40">
        <div className="text-center text-xs sm:text-sm mt-6 sm:mt-10 mb-4 sm:mb-8 text-blue px-4">
          <p>
            Need academic help?{' '}
            <span className="font-bold text-blue">Contact us.</span>
          </p>
        </div>

        <div className="flex flex-col text-blue mb-8 sm:mb-16 w-full max-w-xl mx-auto px-8 sm:px-12">
          {academixContactItemData.map((contact: Contact, index: number) => {
            const IconComponent = iconMap[contact.icon];

            return (
              <ContactItemTwo
                key={index}
                href={contact.href}
                icon={IconComponent}
              >
                {contact.text}
              </ContactItemTwo>
            );
          })}
        </div>
        <div className="bg-blue w-full py-3 sm:py-4 text-white flex items-center justify-center rounded-bl-md rounded-br-md">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 px-4 text-center sm:text-left">
            <Image
              src="/images/academix-acadhub-page/smhnAcadAffairs.png"
              alt="Samahan White Logo"
              width={576}
              height={576}
              className="w-[3rem] sm:w-[5rem] h-auto"
            />
            <span className="text-sm sm:text-base font-semibold sm:ml-2">
              SAMAHAN DEPARTMENT OF ACADEMIC AFFAIRS
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SectionFive;
