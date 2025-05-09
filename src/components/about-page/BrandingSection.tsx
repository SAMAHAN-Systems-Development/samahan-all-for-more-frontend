import Image from 'next/image';

// import A4MLogo from '/public/images/about-page/A4M LOGO.png';
// import A4MSLogoHd from '/public/images/about-page/A4M S-LOGOHD.png';
import A4MSMerged from '/public/images/about-page/A4M Merged.png';
import BlueE1 from '/public/images/about-page/Blue E1.png';
import BlueM1 from '/public/images/about-page/Blue M1.png';
import BlueO3 from '/public/images/about-page/Blue O3.png';
import BlueR1 from '/public/images/about-page/Blue R1.png';
import BlueSmhnLogo from '/public/images/about-page/Blue SMHN Logo Normal.png';
import paragraphsData from '@/data/brandingSection.json';

interface Paragraph {
  text: string;
}

const paragraphsDataTyped: Paragraph[] = paragraphsData as Paragraph[];
const BrandingSection = () => {
  return (
    <article className="flex relative">
      <div className="hidden lg:block">
        <div>
          <Image
            src={BlueSmhnLogo}
            alt="Left Image 1"
            width={576}
            height={576}
            className="w-[20rem] h-auto absolute top-0 left-[-10rem] animate-spin"
          />
        </div>
        <div>
          <Image
            src={BlueE1}
            alt="Left Image 2"
            width={576}
            height={576}
            className="w-28 h-auto absolute left-12 top-1/2 animate-spin-reverse"
          />
        </div>
        <div>
          <Image
            src={BlueO3}
            alt="Left Image 3"
            width={576}
            height={576}
            className="w-[16rem] h-auto absolute bottom-0 left-[-10rem] animate-spin"
          />
        </div>
      </div>

      {/*to align this whole section with the logo*/}
      <section className="lg:mx-[15rem]">
        <div className="w-full items-center mb-5 mt-28">
          <div className="flex gap-[10px] max-w-[250px]">
            <Image src={A4MSMerged} alt="" className="max-h-[70px]" />
          </div>
        </div>
        <h1 className="text-blue font-bold text-[35px] sm:text-title mb-14 leading-none">
          THE BRANDING
        </h1>
        {/*map this*/}
        {paragraphsDataTyped.map((paragraph: Paragraph, index: number) => (
          <p key={index} className="text-blue mb-14 leading-tight text-main">
            {paragraph.text}
          </p>
        ))}
      </section>
      <div className="hidden lg:block">
        <div>
          <Image
            src={BlueM1}
            alt="Left Image 1"
            width={576}
            height={576}
            className="w-[19rem] h-auto absolute top-28 right-[-10rem] animate-spin"
          />
        </div>
        <div>
          <Image
            src={BlueR1}
            alt="Left Image 2"
            width={576}
            height={576}
            className="w-24 h-auto absolute right-12 top-[60%] animate-spin"
          />
        </div>
        <div>
          <Image
            src={BlueE1}
            alt="Left Image 3"
            width={576}
            height={576}
            className="w-[13rem] h-auto absolute bottom-0 right-[-6rem] animate-spin-reverse"
          />
        </div>
      </div>
    </article>
  );
};

export default BrandingSection;
