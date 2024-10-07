import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import Link from 'next/link';

type DropdownItemsType = { link: string; title: string }[];

interface DesktopMenuProps {
  AcademixDropdowns: boolean;
  ArrowSize: number;
  DropdownItems: (items: DropdownItemsType) => JSX.Element[];
  academixDropdownItems: DropdownItemsType;
  handleKeyDown: (
    event: React.KeyboardEvent<HTMLElement>,
    action: () => void
  ) => void;
  infoPortalDropdownItems: DropdownItemsType;
  navItemsOne: DropdownItemsType;
  navItemsTwo: DropdownItemsType;
  officesDropdownItems: DropdownItemsType;
  openDropdowns: string[];
  setAcademixDropdowns: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDropdown: (id: string, isDesktop: boolean) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  navItemsOne,
  navItemsTwo,
  officesDropdownItems,
  infoPortalDropdownItems,
  academixDropdownItems,
  openDropdowns,
  toggleDropdown,
  AcademixDropdowns,
  setAcademixDropdowns,
  ArrowSize,
  DropdownItems,
  handleKeyDown,
}) => (
  <ul className="hidden md:flex space-x-6 text-blue font-semibold" role="menu">
    {/* Home and About Links */}
    {navItemsOne.map(({ title, link }) => (
      <li className="cursor-pointer font-semibold" key={title}>
        <Link href={link}>{title}</Link>
      </li>
    ))}

    {/* Offices Dropdown */}
    <li className="relative">
      <button
        onClick={() => toggleDropdown('offices', true)}
        className="flex items-center"
        aria-expanded={openDropdowns.includes('offices')}
        aria-controls="offices-dropdown"
      >
        <span>Offices</span>
        <div className="mt-1">
          {openDropdowns.includes('offices') ? (
            <IoMdArrowDropup size={ArrowSize} />
          ) : (
            <IoMdArrowDropdown size={ArrowSize} />
          )}
        </div>
      </button>
      <ul
        id="offices-dropdown"
        className={`${
          openDropdowns.includes('offices')
            ? 'opacity-100 max-h-[300px]'
            : 'opacity-0 max-h-0'
        } absolute transition-all duration-300 ease-in-out font-normal left-1/2 transform -translate-x-1/2 bg-white w-[255px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] py-3 px-7 mt-10 z-10 overflow-hidden`}
        role="menu"
      >
        {DropdownItems(officesDropdownItems)}
      </ul>
    </li>

    {/* Central Board and FAQs Links */}
    {navItemsTwo.map(({ title, link }) => (
      <li className="cursor-pointer font-semibold" key={title}>
        <Link href={link}>{title}</Link>
      </li>
    ))}

    {/* Information Portal Dropdown */}
    <li className="relative">
      <button
        onClick={() => toggleDropdown('infoPortal', true)}
        className="flex items-center"
        aria-expanded={openDropdowns.includes('infoPortal')}
        aria-controls="infoPortal-dropdown"
      >
        <span>Information Portal</span>
        <div className="mt-1">
          {openDropdowns.includes('infoPortal') ? (
            <IoMdArrowDropup size={ArrowSize} />
          ) : (
            <IoMdArrowDropdown size={ArrowSize} />
          )}
        </div>
      </button>
      <ul
        id="infoPortal-dropdown"
        className={`${
          openDropdowns.includes('infoPortal')
            ? 'opacity-100 max-h-[300px]'
            : 'opacity-0 max-h-0'
        } absolute transition-all duration-300 ease-in-out font-normal left-1/2 transform -translate-x-1/2 pt-3 pb-4 z-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-[200px] flex flex-col justify-center items-center rounded-[20px] mt-10 overflow-hidden`}
        role="menu"
      >
        {DropdownItems(infoPortalDropdownItems)}
        <li
          role="menuitem"
          tabIndex={0}
          onClick={() => setAcademixDropdowns((prev) => !prev)}
          onKeyDown={(event) =>
            handleKeyDown(event, () => setAcademixDropdowns((prev) => !prev))
          }
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
          <ul
            id="academix-dropdown"
            className={`${
              AcademixDropdowns
                ? 'opacity-100 max-h-[200px]'
                : 'opacity-0 max-h-0'
            } space-y-[-4px] transition-all duration-300 ease-in-out overflow-hidden`}
            role="menu"
          >
            {DropdownItems(academixDropdownItems)}
          </ul>
        </li>
      </ul>
    </li>
  </ul>
);

export default DesktopMenu;
