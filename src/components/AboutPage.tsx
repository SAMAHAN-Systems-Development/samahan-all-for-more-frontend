import React from 'react';

const AboutPage = () => {
  return (
    <main className="p-12">
      <article>
        <header className="flex items-center">
          <img
            src="/assets/images/Property 1=WHITE.png"
            alt="Samahan White Logo"
            className="w-36 h-auto"
          />
          <img
            src="/assets/images/A4M LOGO.png"
            alt="A4M Logo"
            className="w-48 h-auto"
          />
        </header>

        {/*to align this whole section with the logo*/}
        <section className="mx-6">
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
          <p className="text-blue mb-14 leading-tight">
            This time, we establish SAMAHAN not just a student-body but as a
            community that supports and uplifts one another. All for More
            reflects this spirit of liberation and inclusivity, striving to
            create a unique and colorful experience and opportunities for every
            Atenean. As one SAMAHAN, we embrace every single Atenean as we
            create illuminating milestones-All for More.
          </p>
        </section>
      </article>
    </main>
  );
};

export default AboutPage;
