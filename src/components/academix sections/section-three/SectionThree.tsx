'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface Section {
  title: string;
  logo: string;
  hoverlogo: string;
}

interface SectionThreeProps {
  sections: Section[];
}

const SectionThree: React.FC<SectionThreeProps> = ({ sections }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const group1 = sections.slice(0, 3);
  const group2 = sections.slice(3, 6);
  const group3 = sections.slice(6, 10);
  const group4 = sections.slice(10, 12);

  return (
    <>
      <div
        id="Helpful Digital Applications"
        className="bg-blue w-full py-24 mb-48 text-center"
      >
        <h2 className=" text-white font-bold text-3xl">
          HELPFUL DIGITAL APPLICATION
        </h2>
      </div>

      {/* Container */}
      <div className="flex flex-col items-center bg-white text-blue mx-28">
        {/* Group 1 */}
        <div className="text-blue flex flex-col items-center justify-center text-center mb-14">
          <h2 className="font-bold text-3xl mb-10">FLASHCARDS</h2>
          <p>
            Helps when revising a handful of concepts. It helps in memorization
            and active recall. Digital applications can also help save time for
            more efficient studying sessions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24">
          {group1.map((section, index) => (
            <div
              key={index}
              className="w-[250px] flex flex-col items-center text-center p-6 hover:bg-gray-100 transition-all duration-300 rounded-lg mx-4 my-6"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={
                  hoveredIndex === index
                    ? `/images/academix-acadhub-page/section-three-images/${section.hoverlogo}`
                    : `/images/academix-acadhub-page/section-three-images/${section.logo}`
                }
                alt={section.title}
                className="mb-2 transition-all duration-300"
                width={125}
                height={125}
              />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
          ))}
        </div>

        {/* Group 2 */}
        <div className="text-blue flex flex-col items-center justify-center text-center mb-14">
          <h2 className="font-bold text-3xl mb-10">FOCUS</h2>
          <p>
            Boosts productivity by minimizing distractions and promoting
            effective time management through timed study intervals. Often uses
            reward systems to motivate users and enhance productivity such as
            earning points, unlocking achievements, or growing a virtual tree.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24">
          {group2.map((section, index) => (
            <div
              key={index + 3}
              className="w-[250px] flex flex-col items-center text-center p-6 hover:bg-gray-100 transition-all duration-300 rounded-lg mx-4 my-6"
              onMouseEnter={() => setHoveredIndex(index + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={
                  hoveredIndex === index + 3
                    ? `/images/academix-acadhub-page/section-three-images/${section.hoverlogo}`
                    : `/images/academix-acadhub-page/section-three-images/${section.logo}`
                }
                alt={section.title}
                className="mb-2 transition-all duration-300"
                width={125}
                height={125}
              />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
          ))}
        </div>

        {/* Group 3 */}
        <div className="text-blue flex flex-col items-center justify-center text-center mb-14">
          <h2 className="font-bold text-3xl mb-10">TASK MANAGEMENT</h2>
          <p>
            Enhances productivity by helping you organize tasks and track
            progress and habits. They also offer reminders to streamline your
            workflow and keep you focused for better time management.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24">
          {group3.map((section, index) => (
            <div
              key={index + 6}
              className="w-[250px] flex flex-col items-center text-center p-6 hover:bg-gray-100 transition-all duration-300 rounded-lg mx-4 my-6"
              onMouseEnter={() => setHoveredIndex(index + 6)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={
                  hoveredIndex === index + 6
                    ? `/images/academix-acadhub-page/section-three-images/${section.hoverlogo}`
                    : `/images/academix-acadhub-page/section-three-images/${section.logo}`
                }
                alt={section.title}
                className="mb-2 transition-all duration-300"
                width={125}
                height={125}
              />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
          ))}
        </div>

        {/* Group 4 */}
        <div className="text-blue flex flex-col items-center justify-center text-center mb-14">
          <h2 className="font-bold text-3xl mb-10">SCIENCES</h2>
          <p>
            Offers a wide range of resources that allows for better
            understanding of difficult topics. May provide lecture videos or
            illustrations that can aid those who are visual learners.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24">
          {group4.map((section, index) => (
            <div
              key={index + 10}
              className="w-[250px] flex flex-col items-center text-center p-6 hover:bg-gray-100 transition-all duration-300 rounded-lg mx-4 my-6"
              onMouseEnter={() => setHoveredIndex(index + 10)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={
                  hoveredIndex === index + 10
                    ? `/images/academix-acadhub-page/section-three-images/${section.hoverlogo}`
                    : `/images/academix-acadhub-page/section-three-images/${section.logo}`
                }
                alt={section.title}
                className="mb-2 transition-all duration-300"
                width={125}
                height={125}
              />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionThree;
