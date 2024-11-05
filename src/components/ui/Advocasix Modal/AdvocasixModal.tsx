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
      className="fixed inset-0 top-28 sm:top-24 md:top-20 flex items-center justify-center z-40 px-4 sm:px-6"
      onClick={onClose}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Modal content */}
      <div
        className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] rounded-3xl overflow-hidden shadow-2xl mx-auto bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header with Cover Image */}
        <div className="relative h-[400px] sm:h-[300px] md:h-[400px]">
          <Image
            src={`/images/advocasix-pictures/${image}`}
            alt={title}
            className="h-full w-full object-cover"
            width={900}
            height={400}
          />

          {/* Close button inside modal */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6 text-blue text-center mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
          <p className=" mx-6 text-sm sm:text-base">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AdvocasixModal;
