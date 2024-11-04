'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface Section {
  title: string;
  logo: string;
  hoverlogo: string;
  description: string;
}

interface ClusterAcademicArmsProps {
  sections: Section[];
}

const ClusterAcademicArms: React.FC<ClusterAcademicArmsProps> = ({
  sections,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div
        id="ClusterAcademicArms"
        className="bg-blue w-full py-16 text-center"
      >
        <h2 className="text-white font-bold text-3xl">
          GET TO KNOW YOUR <br /> CLUSTER ACADEMIC ARMS
        </h2>
      </div>

      {/* Container */}
      <div className="flex flex-wrap justify-center py-10 px-12 bg-white text-blue">
        {/* content */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-[250px] flex flex-col items-center text-center p-6 hover:bg-gray-100 transition-all duration-300 rounded-lg mx-4 my-6"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={
                hoveredIndex === index
                  ? `/images/cluster-academix-arms/${section.hoverlogo}`
                  : `/images/cluster-academix-arms/${section.logo}`
              }
              alt={section.title}
              className="mb-2 transition-all duration-300"
              width={125}
              height={125}
            />
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-lg text-gray-700">{section.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClusterAcademicArms;
