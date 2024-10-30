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
      <div className="bg-blue text-center py-12">
        <h2 className="text-white font-bold text-3xl">
          GET TO KNOW YOUR <br /> CLUSTER ACADEMIC ARMS
        </h2>
      </div>
      {/* Container */}
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center px-4 lg:px-16 py-10 bg-white text-blue-900 rounded-md">
          {/* content */}
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 hover:bg-gray-100 transition-all duration-300 rounded-lg m-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ minWidth: '200px', maxWidth: '240px' }}
            >
              <Image
                src={
                  hoveredIndex === index
                    ? `/images/cluster-academix-arms/${section.hoverlogo}`
                    : `/images/cluster-academix-arms/${section.logo}`
                }
                alt={section.title}
                className="h-16 w-16 mb-2 transition-all duration-300"
                width={74}
                height={74}
              />
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="text-sm text-gray-700">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClusterAcademicArms;
