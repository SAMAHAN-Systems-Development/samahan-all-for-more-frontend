'use client';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

interface AdvocasixModalProps {
  content: string;
  image: string;
  title: string;
}

const AdvocasixModal: React.FC<AdvocasixModalProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <div className="relative shadow-2xl w-full max-w-[900px] rounded-3xl overflow-hidden mx-auto bg-white">
      {/* Header with Cover Image */}
      <div className="relative h-[400px] sm:h-[300px] md:h-[400px]">
        <Image
          src={`/images/advocasix-pictures/${image}`}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Close button inside modal */}
        <button className="absolute top-4 right-4 text-white text-3xl">
          <AiOutlineClose />
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6 text-blue text-center mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
        <p className=" mx-6 text-sm sm:text-base">{content}</p>
      </div>
    </div>
  );
};

export default AdvocasixModal;
