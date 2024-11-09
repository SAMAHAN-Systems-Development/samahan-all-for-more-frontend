'use client';

interface AccordionProps {
  title: string;
  href: string;
}

const Accordion = ({ title, href }: AccordionProps) => {
  return (
    <div className="p-[5px_8px_5px_15px] sm:p-[5px_10px_5px_25px] mb-3 border-2 border-blue rounded-[20px] sm:rounded-[32px] bg-blue transition-colors duration-300">
      <a
        href={href}
        className="flex justify-between items-center p-1.5 sm:p-2.5 rounded-[25px] sm:rounded-[35px] text-white text-sm sm:text-main leading-[18px] sm:leading-[21.78px]"
      >
        <h3 className="mr-3 sm:mr-5">{title}</h3>
        <span className="transition-transform duration-300 size-6 sm:size-8"></span>
      </a>
    </div>
  );
};

export default Accordion;
