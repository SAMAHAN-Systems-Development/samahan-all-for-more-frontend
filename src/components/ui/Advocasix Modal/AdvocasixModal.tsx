'use client';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

interface AdvocasixModalProps {
  content: string;
  image: string;
  onClose: () => void;
  title: string;
}

const AdvocasixModal: React.FC<AdvocasixModalProps> = ({
  title,
  content,
  image,
  onClose,
}) => {
  return (
    <div
      className="fixed top-0 w-full h-screen flex items-center justify-center z-[100] px-4 sm:px-6"
      onClick={onClose}
    >
      {/* Overlay to darken the background */}
      <div className="fixed inset-0 w-screen h-screen bg-blue backdrop-blur-sm bg-opacity-20" />

      {/* Modal content */}
      <div
        className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] rounded-3xl overflow-hidden shadow-2xl mx-auto bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header with Cover Image */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
          <Image
            src={`/images/advocasix-pictures/${image}`}
            alt={title}
            className="h-full w-full object-cover"
            width={900}
            height={400}
            priority
          />

          {/* Close button inside modal */}
          <button
            className="absolute top-4 right-4 text-white text-3xl sm:text-4xl"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-4 sm:p-6 text-blue text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 uppercase">
            {title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mx-2 sm:mx-6">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvocasixModal;
