import React from 'react';
import ContactItem from '@/components/AboutPage/ContactItem';

const AboutPage = () => {
  return (
    <main className="p-12 overflow-x-hidden">
      {/*adjust section spacing here (mb-value)*/}
      <section className="flex items-center flex-col mb-20">
        <div className="flex items-center flex-col mx-[24rem] mb-10">
          <img
            src="/assets/images/Property 1=WHITE.png"
            alt="Samahan White Logo"
            className="w-[36rem] h-auto"
          />
          <p className="text-blue leading-tight text-center">
            The Samahan ng Mga Mag-Aaral ng Pamantasang Ateneo de Davao, or
            SAMAHAN, is the lone autonomous Student Government of the College
            unit of Ateneo de Davao University
          </p>
        </div>

        <div className="flex items-center">
          <ContactItem
            href="mailto:samahan@addu.edu.ph"
            imgSrc="/assets/images/Email Vector.png"
            altText="Email Vector"
            children="samahan@addu.edu.ph"
          ></ContactItem>
          <ContactItem
            href=""
            imgSrc="/assets/images/Website Vector.png"
            altText="Website Vector"
            children="samahan.addu.edu.ph"
          ></ContactItem>
          <ContactItem
            href=""
            imgSrc="/assets/images/@ Vector.png"
            altText="@ Vector"
            children="addusamahan"
          ></ContactItem>
        </div>
      </section>

      <article className="flex relative">
        <div>
          <div>
            <img
              src="/assets/images/Blue SMHN Logo Normal.png"
              alt="Left Image 1"
              className="w-[20rem] h-auto absolute top-0 left-[-10rem] rotate-[30deg]"
            />
          </div>
          <div className="">
            <img
              src="/assets/images/Blue E1.png"
              alt="Left Image 2"
              className="w-28 h-auto absolute left-12 top-1/2 transform -translate-y-1/2 rotate-[-30deg]"
            />
          </div>
          <div className="">
            <img
              src="/assets/images/Blue O3.png"
              alt="Left Image 3"
              className="w-[16rem] h-auto absolute bottom-0 left-[-10rem] rotate-[-150deg]"
            />
          </div>
        </div>

        {/*to align this whole section with the logo*/}
        <section className="mx-[15rem]">
          <div className="flex items-center mb-7 mt-28">
            {/*waiting for the logo for*/}
            <img
              src="/assets/images/A4M S-LOGO.png"
              alt=""
              className="w-28 h-auto "
            />
            <img
              src="/assets/images/A4M LOGO.png"
              alt="A4M Logo"
              className="w-48 h-auto"
            />
          </div>
          <h1 className="text-blue font-bold text-7xl mb-14">THE BRANDING</h1>
          <p className="text-blue mb-14 leading-tight">
            In envisioning Our Ateneo, we also aim to achieve a SAMAHAN that
            embodies a principle that puts students at the heart of everything
            we do. For 42 years, we have been championing the diverse interests
            of our student- body and the communities outside the walls of
            Ateneo. Moving forward to this academic year, we zoom in to the real
            agenda of our student community, as we do things with them and for
            them.
          </p>
          <p className="text-blue mb-14 leading-tight">
            "All for More" is our blueprint of commitment to the Ignatian Ideals
            of Magis, Cura Personalis, and Ad Majorem Dei Gloriam (AMDG),
            inspiring us to aspire for greater depth, care for the whole person
            and the greater glory of God where students feel empowered and
            heard. We go All for More in furthering student's initiatives to
            shape the direction of our governance. This is a pledge to amplify
            student engagement and involvement, ensuring that we deliver the
            service which they deserve, enriching their journey in Ateneo.
          </p>
          <p className="text-blue mb-14 leading-tight">
            With "All", we recognize how Ateneo is enriched with resources,
            talents, and exemplary values that led us to do "More" in
            strengthening our service towards achieving a community that is
            beyond greatness. Together, we go All for More towards building a
            SAMAHAN that personifies these virtues, epitomizing excellence in
            all that we do, while putting the students at our topmost priority.
          </p>
          <p className="text-blue leading-tight mb-44">
            This time, we establish SAMAHAN not just a student-body but as a
            community that supports and uplifts one another. All for More
            reflects this spirit of liberation and inclusivity, striving to
            create a unique and colorful experience and opportunities for every
            Atenean. As one SAMAHAN, we embrace every single Atenean as we
            create illuminating milestones-All for More.
          </p>
        </section>
        <div>
          <div>
            <img
              src="/assets/images/Blue M1.png"
              alt="Left Image 1"
              className="w-[19rem] h-auto absolute top-28 right-[-10rem] rotate-[-30deg]"
            />
          </div>
          <div className="">
            <img
              src="/assets/images/Blue R1.png"
              alt="Left Image 2"
              className="w-24 h-auto absolute right-12 top-[60%] transform -translate-y-1/2 rotate-[-30deg]"
            />
          </div>
          <div className="">
            <img
              src="/assets/images/Blue E1.png"
              alt="Left Image 3"
              className="w-[13rem] h-auto absolute bottom-0 right-[-6rem] rotate-[30deg]"
            />
          </div>
        </div>
      </article>
    </main>
  );
};

export default AboutPage;
