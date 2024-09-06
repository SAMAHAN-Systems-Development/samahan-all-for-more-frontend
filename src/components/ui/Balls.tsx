import React from 'react';
import Image, { StaticImageData } from 'next/image';

const Ball = (props: { style: string; letter: StaticImageData }) => {
  return (
    <>
      <div className={`absolute ${props.style} z-10`}>
        <Image src={props.letter} alt="ball" className="object-contain" />
      </div>
    </>
  );
};

export default Ball;
