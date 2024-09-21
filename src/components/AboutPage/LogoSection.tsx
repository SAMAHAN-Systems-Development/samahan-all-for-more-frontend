import Image from 'next/image';
import ContactItem from '@/components/AboutPage/ContactItem';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { SlGlobe } from 'react-icons/sl';

const LogoSection = () => {
  return (
    <section className="flex items-center flex-col mb-20">
      {/*adjust section spacing here (mb-value)^^*/}
      <div className="flex items-center flex-col mb-10">
        <Image
          src="/assets/images/Property 1=WHITE.png"
          alt="Samahan White Logo"
          width={576}
          height={576}
          className="w-[36rem] h-auto"
        ></Image>
        <p className="text-blue text-main leading-tight text-center mx-10">
          The Samahan ng Mga Mag-Aaral ng Pamantasang Ateneo de Davao, or
          SAMAHAN, is the lone autonomous Student Government of the College unit
          of Ateneo de Davao University
        </p>
      </div>

      <div className="flex items-center flex-col lg:flex-row mb-14 lg:mb-0">
        <ContactItem href="mailto:samahan@addu.edu.ph" icon={MdOutlineEmail}>
          samahan@addu.edu.ph
        </ContactItem>
        <ContactItem href="" icon={SlGlobe}>
          samahan.addu.edu.ph
        </ContactItem>
        <ContactItem href="" icon={AiOutlineMail}>
          addusamahan
        </ContactItem>
      </div>
    </section>
  );
};

export default LogoSection;
