import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { SlGlobe } from 'react-icons/sl';
import Image from 'next/image';

import Property1White from '/public/images/about-page/Property 1=WHITE.png';
import ContactItem from '@/components/about-page/ContactItem';
import contactsData from '@/data/contactItem.json';

interface Contact {
  href: string;
  icon: keyof typeof iconMap; // Ensures the icon is one of the keys in iconMap
  text: string;
}

const iconMap: Record<string, React.ElementType> = {
  MdOutlineEmail,
  SlGlobe,
  AiOutlineMail,
};

const LogoSection: React.FC = () => {
  return (
    <section className="flex items-center flex-col mb-20">
      {/* Adjust section spacing here (mb-value) ^^ (import images) */}
      <div className="flex items-center flex-col mb-10">
        <Image
          src={Property1White}
          alt="Samahan White Logo"
          width={576}
          height={576}
          className="w-[36rem] h-auto"
        />
        <p className="text-blue text-main leading-tight text-center mx-10">
          The Samahan ng Mga Mag-Aaral ng Pamantasang Ateneo de Davao, or
          SAMAHAN, is the lone autonomous Student Government of the College unit
          of Ateneo de Davao University.
        </p>
      </div>

      <div className="flex items-center flex-col lg:flex-row mb-14 lg:mb-0">
        {/* Map through contactsData */}
        {contactsData.map((contact: Contact, index: number) => {
          const IconComponent = iconMap[contact.icon];

          return (
            <ContactItem key={index} href={contact.href} icon={IconComponent}>
              {contact.text}
            </ContactItem>
          );
        })}
      </div>
    </section>
  );
};

export default LogoSection;
