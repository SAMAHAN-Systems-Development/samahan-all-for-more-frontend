'use client';
import { useState } from 'react';
import { HiOutlinePlay } from 'react-icons/hi';
import { PiPlayCircleFill } from 'react-icons/pi';

interface AccordionProps {
  content: React.ReactNode;
  title: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleAccordion();
    }
  };

  return (
    <div
      className={`p-[5px_10px_5px_25px] m-3 border-2 border-blue rounded-[40px] transition-colors duration-300 ${isHovered ? 'bg-white' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex justify-between items-center p-2.5 cursor-pointer rounded-[40px] text-blue font-bold text-main leading-[21.78px]"
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <h3>{title}</h3>
        <span
          className={`transition-transform duration-300 size-8 ${isOpen ? 'rotate-90' : ''}`}
        >
          {isOpen ? (
            <PiPlayCircleFill className="size-8" color="#0923BA" />
          ) : (
            <HiOutlinePlay className="size-8" color="#0923BA" />
          )}
        </span>
      </div>
      <section>
        {isOpen && (
          <article className="text-blue rounded-[40px] p-[0px_55px_15px_10px] flex flex-col text-main gap-[25px]">
            {content}
          </article>
        )}
      </section>
    </div>
  );
};

export default Accordion;
