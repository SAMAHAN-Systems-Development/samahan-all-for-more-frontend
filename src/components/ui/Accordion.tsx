'use client';
import { useState } from 'react';
import { PiPlayBold , PiPlayFill } from 'react-icons/pi';

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
      className={`p-[5px_10px_5px_25px] m-3 border-2 border-blue rounded-[32px] transition-colors duration-300 ${isHovered ? 'bg-white' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex justify-between items-center p-2.5 cursor-pointer rounded-[35px] text-blue font-bold text-main leading-[21.78px]"
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
            <div className="flex justify-center items-center w-full h-full">
              <div className="bg-blue w-7 h-7 rounded-full border-blue border-2">
                <div className="flex ml-[-0.5px] w-full h-full justify-center items-center">
                  <PiPlayFill color="white" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-7 h-7 rounded-full border-blue border-2">
                <div className="flex ml-[-0.5px] w-full h-full justify-center items-center">
                  <PiPlayBold size={18} />
                </div>
              </div>
            </div>
          )}
        </span>
      </div>
      <section>
        {isOpen && (
          <article className="text-blue rounded-[35px] p-[0px_55px_15px_10px] flex flex-col text-main gap-[25px]">
            {content}
          </article>
        )}
      </section>
    </div>
  );
};

export default Accordion;
