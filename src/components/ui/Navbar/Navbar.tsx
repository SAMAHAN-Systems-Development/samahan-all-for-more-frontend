'use client';
import { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/images/about-page/A4M LOGO.png';

const Navbar = () => {
  const navItems = [
    { title: 'Home', link: '/Home' },
    { title: 'About', link: '/About' },
    { title: 'Central Board', link: '/central-board' },
    { title: 'FAQs', link: '/faqs' },
  ];

  const officesDropdownItems = [
    { title: 'Office of the President', link: '/offices/president' },
    { title: 'Office of the Vice President', link: '/offices/vice-president' },
    {
      title: 'Office of the Secretary General',
      link: '/offices/secretary-general',
    },
    { title: 'Office of the Treasurer', link: '/offices/treasurer' },
  ];

  const infoPortalDropdownItems = [
    { title: 'Bulletin', link: '/info-portal/bulletin' },
    { title: 'GuideSite', link: '/info-portal/guidesite' },
    { title: 'Event Finder', link: '/info-portal/event-finder' },
  ];

  const academixDropdownItems = [
    { title: 'AcadHub', link: '/academix/acadhub' },
    { title: 'AcadDrive', link: '/academix/acaddrive' },
    { title: 'Atheneum', link: '/academix/atheneum' },
  ];

  const ArrowSize = 15;
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [AcademixDropdowns, setAcademixDropdowns] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (id: string, isDesktop: boolean) => {
    setOpenDropdowns((prev) =>
      isDesktop
        ? prev.includes(id)
          ? []
          : [id]
        : prev.includes(id)
          ? prev.filter((drop) => drop !== id)
          : [...prev, id]
    );

    if (id !== 'academix') setAcademixDropdowns(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    action: () => void
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      action();
    }
  };

  const DropdownItems = (items: { link: string, title: string; }[]) =>
    items.map(({ title, link }) => (
      <li
        key={title}
        className="cursor-pointer p-2"
        tabIndex={0}
        role="menuitem"
      >
        {/* for navigation routings */}
        <Link href={link}>{title}</Link>
      </li>
    ));

  return (
    <nav className="bg-white py-3 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[100px] flex justify-between items-center">
      <div className="text-blue-900 font-bold text-xl flex items-center">
        <Image src={logo} alt="Logo" width={90} height={90} />
      </div>

      {/* Toggle icons in mobile view */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-blue"
          aria-label="Toggle mobile menu "
        >
          {isMobileMenuOpen ? <IoClose size={40} /> : <HiBars3 size={40} />}
        </button>
      </div>

      {/* Desktop menu */}
      <ul
        className="hidden md:flex space-x-6 text-blue font-semibold"
        role="menu"
      >
        {/* Home and About Links */}
        {navItems.slice(0, 2).map(({ title, link }) => (
          <ul className="cursor-pointer font-semibold" key={title}>
            <Link href={link}>{title}</Link>
          </ul>
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
          {openDropdowns.includes('offices') && (
            <div
              id="offices-dropdown"
              className="absolute space-y-[-4px] font-normal left-1/2 transform -translate-x-1/2 bg-white w-[255px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] py-3 px-7 mt-10 z-10"
              role="menu"
            >
              {DropdownItems(officesDropdownItems)}
            </div>
          )}
        </li>

        {/* Central Board and FAQs Links */}
        {navItems.slice(2).map(({ title, link }) => (
          <ul className="cursor-pointer font-semibold" key={title}>
            <Link href={link}>{title}</Link>
          </ul>
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
          {openDropdowns.includes('infoPortal') && (
            <div
              id="infoPortal-dropdown"
              className="absolute space-y-[-4px] font-normal left-1/2 transform -translate-x-1/2 pt-3 pb-4 px-7 z-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-[200px] flex flex-col justify-center items-center rounded-[20px] mt-10"
              role="menu"
            >
              {DropdownItems(infoPortalDropdownItems)}
              <li
                role="menuitem"
                tabIndex={0}
                onClick={() => setAcademixDropdowns((prev) => !prev)}
                onKeyDown={(event) =>
                  handleKeyDown(event, () =>
                    setAcademixDropdowns((prev) => !prev)
                  )
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
                {AcademixDropdowns && (
                  <ul
                    id="academix-dropdown"
                    className="space-y-[-4px]"
                    role="menu"
                  >
                    {DropdownItems(academixDropdownItems)}
                  </ul>
                )}
              </li>
            </div>
          )}
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute px-6 left-1/2 transform -translate-x-1/2 top-28 w-full md:hidden z-50">
          <div className="w-full space-y-2 text-blue text-center text-md pt-4 pb-3 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[25px] flex flex-col items-center">
            {/* Home and About Links */}
            {navItems.map(({ title, link }) => (
              <ul className="cursor-pointer font-semibold" key={title}>
                <Link href={link}>{title}</Link>
              </ul>
            ))}

            {/* Offices Dropdown */}
            <ul className="cursor-pointer w-full">
              <button
                onClick={() => toggleDropdown('offices', false)}
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
              {openDropdowns.includes('offices') && (
                <div className="flex flex-col items-center space-y-[-4px]">
                  {DropdownItems(officesDropdownItems)}
                </div>
              )}
            </ul>

            {/* Information Portal Dropdown */}
            <ul className="cursor-pointer w-full">
              <button
                onClick={() => toggleDropdown('infoPortal', false)}
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
              {openDropdowns.includes('infoPortal') && (
                <div className="flex flex-col items-center space-y-[-4px]">
                  {DropdownItems(infoPortalDropdownItems)}
                  <li
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => setAcademixDropdowns((prev) => !prev)}
                    onKeyDown={(event) =>
                      handleKeyDown(event, () =>
                        setAcademixDropdowns((prev) => !prev)
                      )
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
                    {AcademixDropdowns && (
                      <ul
                        id="academix-dropdown"
                        className="space-y-[-4px]"
                        role="menu"
                      >
                        {DropdownItems(academixDropdownItems)}
                      </ul>
                    )}
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
