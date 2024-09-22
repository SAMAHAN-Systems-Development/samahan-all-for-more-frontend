import Image from 'next/image';
const BrandingSection = () => {
  return (
    <article className="flex relative">
      <div className="hidden lg:block">
        <div>
          <Image
            src="/assets/images/Blue SMHN Logo Normal.png"
            alt="Left Image 1"
            width={576}
            height={576}
            className="w-[20rem] h-auto absolute top-0 left-[-10rem] rotate-[30deg]"
          />
        </div>
        <div className="">
          <Image
            src="/assets/images/Blue E1.png"
            alt="Left Image 2"
            width={576}
            height={576}
            className="w-28 h-auto absolute left-12 top-1/2 transform -translate-y-1/2 rotate-[-30deg]"
          />
        </div>
        <div className="">
          <Image
            src="/assets/images/Blue O3.png"
            alt="Left Image 3"
            width={576}
            height={576}
            className="w-[16rem] h-auto absolute bottom-0 left-[-10rem] rotate-[-150deg]"
          />
        </div>
      </div>

      {/*to align this whole section with the logo*/}
      <section className="lg:mx-[15rem]">
        <div className="flex items-center mb-5 mt-28">
          <Image
            src="/assets/images/A4M S-LOGOHD.png"
            alt=""
            width={576}
            height={576}
            className="w-28 h-auto "
          />
          <Image
            src="/assets/images/A4M LOGO.png"
            alt="A4M Logo"
            width={576}
            height={576}
            className="w-48 h-auto"
          />
        </div>
        <h1 className="text-blue font-bold text-title mb-14">THE BRANDING</h1>
        <p className="text-blue mb-14 leading-tight text-main">
          In envisioning Our Ateneo, we also aim to achieve a SAMAHAN that
          embodies a principle that puts students at the heart of everything we
          do. For 42 years, we have been championing the diverse interests of
          our student- body and the communities outside the walls of Ateneo.
          Moving forward to this academic year, we zoom in to the real agenda of
          our student community, as we do things with them and for them.
        </p>
        <p className="text-blue mb-14 leading-tight text-main">
          &quot;All for More&quot; is our blueprint of commitment to the
          Ignatian Ideals of Magis, Cura Personalis, and Ad Majorem Dei Gloriam
          (AMDG), inspiring us to aspire for greater depth, care for the whole
          person and the greater glory of God where students feel empowered and
          heard. We go All for More in furthering student&apos;s initiatives to
          shape the direction of our governance. This is a pledge to amplify
          student engagement and involvement, ensuring that we deliver the
          service which they deserve, enriching their journey in Ateneo.
        </p>
        <p className="text-blue mb-14 leading-tight text-main">
          With &quot;All&quot;, we recognize how Ateneo is enriched with
          resources, talents, and exemplary values that led us to do
          &quot;More&quot; in strengthening our service towards achieving a
          community that is beyond greatness. Together, we go All for More
          towards building a SAMAHAN that personifies these virtues, epitomizing
          excellence in all that we do, while putting the students at our
          topmost priority.
        </p>
        <p className="text-blue leading-tight mb-44 text-main">
          This time, we establish SAMAHAN not just a student-body but as a
          community that supports and uplifts one another. All for More reflects
          this spirit of liberation and inclusivity, striving to create a unique
          and colorful experience and opportunities for every Atenean. As one
          SAMAHAN, we embrace every single Atenean as we create illuminating
          milestones-All for More.
        </p>
      </section>
      <div className="hidden lg:block">
        <div>
          <Image
            src="/assets/images/Blue M1.png"
            alt="Left Image 1"
            width={576}
            height={576}
            className="w-[19rem] h-auto absolute top-28 right-[-10rem] rotate-[-30deg]"
          />
        </div>
        <div className="">
          <Image
            src="/assets/images/Blue R1.png"
            alt="Left Image 2"
            width={576}
            height={576}
            className="w-24 h-auto absolute right-12 top-[60%] transform -translate-y-1/2 rotate-[-30deg]"
          />
        </div>
        <div className="">
          <Image
            src="/assets/images/Blue E1.png"
            alt="Left Image 3"
            width={576}
            height={576}
            className="w-[13rem] h-auto absolute bottom-0 right-[-6rem] rotate-[30deg]"
          />
        </div>
      </div>
    </article>
  );
};

export default BrandingSection;
