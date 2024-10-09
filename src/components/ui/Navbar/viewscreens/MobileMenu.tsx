'use client';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import Link from 'next/link';

type DropdownItemsType = { link: string; title: string }[];

interface MobileMenuProps {
  AcademixDropdowns: boolean;
  academixDropdownItems: DropdownItemsType;
  infoPortalDropdownItems: DropdownItemsType;
  navItemsOne: DropdownItemsType;
  navItemsTwo: DropdownItemsType;
  officesDropdownItems: DropdownItemsType;
  openDropdowns: string[];
  setAcademixDropdowns: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggleDropdown: (id: string, isDesktop: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navItemsOne,
  navItemsTwo,
  officesDropdownItems,
  infoPortalDropdownItems,
  academixDropdownItems,
  openDropdowns,
  toggleDropdown,
  AcademixDropdowns,
  setAcademixDropdowns,
}) => {
  const ArrowSize = 15;

  const DropdownItems = (items: { link: string; title: string }[]) =>
    items.map(({ title, link }) => (
      <li className="cursor-pointer font-normal" key={title}>
        <Link href={link}>{title}</Link>
      </li>
    ));

  const handleDropdownToggle = (id: string) => {
    toggleDropdown(id, false);
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDropdownToggle(id);
    }
  };

  return (
    <div className="absolute px-6 left-1/2 transform -translate-x-1/2 top-28 w-full md:hidden z-50">
      <div className="w-full space-y-2 text-blue text-center text-md pt-4 pb-3 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[25px] flex flex-col items-center">
        {/* Home and About Links */}
        <ul>
          {navItemsOne.map(({ title, link }) => (
            <li className="cursor-pointer font-semibold" key={title}>
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>

        {/* Offices Dropdown */}
        <div className="w-full">
          <button
            onClick={() => handleDropdownToggle('offices')}
            onKeyDown={(event) => handleKeyDown(event, 'offices')}
            className="flex items-center w-full justify-center"
          >
            <span className="font-semibold">Offices</span>
            <div className="mt-1">
              {openDropdowns.includes('offices') ? (
                <IoMdArrowDropup size={ArrowSize} />
              ) : (
                <IoMdArrowDropdown size={ArrowSize} />
              )}
            </div>
          </button>
          <div
            className={`flex flex-col items-center space-y-1 transition-all duration-300 ease-in-out 
              ${openDropdowns.includes('offices') ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
          >
            <ul>{DropdownItems(officesDropdownItems)}</ul>
          </div>
        </div>

        {/* Central Board and FAQs Links */}
        <ul>
          {navItemsTwo.map(({ title, link }) => (
            <li className="cursor-pointer font-semibold" key={title}>
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>

        {/* Information Portal Dropdown */}
        <div className="w-full">
          <button
            onClick={() => handleDropdownToggle('infoPortal')}
            onKeyDown={(event) => handleKeyDown(event, 'infoPortal')}
            className="flex items-center w-full justify-center"
          >
            <span className="font-semibold">Information Portal</span>
            <div className="mt-1">
              {openDropdowns.includes('infoPortal') ? (
                <IoMdArrowDropup size={ArrowSize} />
              ) : (
                <IoMdArrowDropdown size={ArrowSize} />
              )}
            </div>
          </button>
          <div
            className={`flex flex-col items-center space-y-1 transition-all duration-300 ease-in-out 
              ${openDropdowns.includes('infoPortal') ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
          >
            <ul>{DropdownItems(infoPortalDropdownItems)}</ul>
            <div
              onClick={() => setAcademixDropdowns((prev) => !prev)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setAcademixDropdowns((prev) => !prev);
                }
              }}
              className="w-full"
              role="button"
              tabIndex={0}
            >
              <div className="flex justify-center mt-1 items-center cursor-pointer">
                <span className="font-semibold">ACADEMIX</span>
                <div className="mt-[0.5]">
                  {AcademixDropdowns ? (
                    <IoMdArrowDropup size={ArrowSize} />
                  ) : (
                    <IoMdArrowDropdown size={ArrowSize} />
                  )}
                </div>
              </div>

              {/* Academix Dropdown */}
              <div
                className={`transition-all duration-300 ease-in-out ${AcademixDropdowns ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                role="menu"
              >
                <ul>{DropdownItems(academixDropdownItems)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
