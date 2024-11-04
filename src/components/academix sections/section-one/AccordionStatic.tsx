'use client';
import { IoIosArrowDropdown } from 'react-icons/io';

interface AccordionProps {
  title: string;
}

const Accordion = ({ title }: AccordionProps) => {
  return (
    <div className="p-[5px_10px_5px_25px] mb-3 border-2 border-blue rounded-[32px] bg-blue transition-colors duration-300">
      <div className="flex justify-between items-center p-2.5 rounded-[35px] text-white text-main leading-[21.78px]">
        <h3 className="mr-5">{title}</h3>
        <span className="transition-transform duration-300 size-8">
          <div className="flex justify-center items-center w-7 h-7 rounded-full border-blue border-2">
            <IoIosArrowDropdown size={25} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Accordion;
