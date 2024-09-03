import Image from 'next/image';
import ContactItem from '@/components/AboutPage/ContactItem';
const LogoSection = () => {
  return (
    <section className="flex items-center flex-col mb-20">
      {/*adjust section spacing here (mb-value)^^*/}
      <div className="flex items-center flex-col mx-[24rem] mb-10">
        <Image
          src="/assets/images/Property 1=WHITE.png"
          alt="Samahan White Logo"
          width={576}
          height={576}
          className="w-[36rem] h-auto"
        ></Image>
        <p className="text-blue leading-tight text-center">
          The Samahan ng Mga Mag-Aaral ng Pamantasang Ateneo de Davao, or
          SAMAHAN, is the lone autonomous Student Government of the College unit
          of Ateneo de Davao University
        </p>
      </div>

      <div className="flex items-center">
        <ContactItem
          href="mailto:samahan@addu.edu.ph"
          imgSrc="/assets/images/Email Vector.png"
          altText="Email Vector"
        >
          samahan@addu.edu.ph
        </ContactItem>
        <ContactItem
          href=""
          imgSrc="/assets/images/Website Vector.png"
          altText="Website Vector"
        >
          samahan.addu.edu.ph
        </ContactItem>
        <ContactItem
          href=""
          imgSrc="/assets/images/@ Vector.png"
          altText="@ Vector"
        >
          addusamahan
        </ContactItem>
      </div>
    </section>
  );
};

export default LogoSection;
