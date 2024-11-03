'use client';
import { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/images/about-page/A4M LOGO.png';

import DesktopMenu from 'src/components/ui/Navbar/viewscreens/DesktopMenu';
import MobileMenu from 'src/components/ui/Navbar/viewscreens/MobileMenu';

const Navbar = () => {
  const navItemsOne = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about-us' },
  ];

  const navItemsTwo = [
    { title: 'Central Board', link: '/central-board' },
    { title: 'FAQs', link: '/frequently-asked-questions' },
  ];

  const officesDropdownItems = [
    {
      title: 'Office of the President',
      link: '/offices/office-of-the-president',
    },
    {
      title: 'Office of the Vice President',
      link: '/offices/office-of-the-vice-president',
    },
    {
      title: 'Office of the Secretary General',
      link: '/offices/office-of-the-secretary-general',
    },
    {
      title: 'Office of the Treasurer',
      link: '/offices/office-of-the-treasurer',
    },
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

  const DropdownItems = (items: { link: string; title: string }[]) =>
    items.map(({ title, link }) => (
      <li
        key={title}
        className="cursor-pointer p-2"
        tabIndex={0}
        role="menuitem"
      >
        <Link href={link}>{title}</Link>
      </li>
    ));

  return (
    <nav className="fixed top-4 left-0 w-full z-50 bg-white py-3 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[100px] flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" aria-label="Home">
          <Image
            src={logo}
            alt="Logo"
            className="cursor-pointer"
            width={90}
            height={90}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <DesktopMenu
        navItemsOne={navItemsOne}
        navItemsTwo={navItemsTwo}
        officesDropdownItems={officesDropdownItems}
        infoPortalDropdownItems={infoPortalDropdownItems}
        academixDropdownItems={academixDropdownItems}
        openDropdowns={openDropdowns}
        toggleDropdown={toggleDropdown}
        AcademixDropdowns={AcademixDropdowns}
        setAcademixDropdowns={setAcademixDropdowns}
        ArrowSize={ArrowSize}
        DropdownItems={DropdownItems}
        handleKeyDown={handleKeyDown}
      />

      {/* Mobile Navigation */}
      <button
        className="md:hidden text-blue"
        onClick={toggleMobileMenu}
        aria-label="Toggle Mobile Menu"
      >
        {isMobileMenuOpen ? <IoClose size={40} /> : <HiBars3 size={40} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu
          navItemsOne={navItemsOne}
          navItemsTwo={navItemsTwo}
          officesDropdownItems={officesDropdownItems}
          infoPortalDropdownItems={infoPortalDropdownItems}
          academixDropdownItems={academixDropdownItems}
          openDropdowns={openDropdowns}
          toggleDropdown={toggleDropdown}
          AcademixDropdowns={AcademixDropdowns}
          setAcademixDropdowns={setAcademixDropdowns}
        />
      )}
    </nav>
  );
};

export default Navbar;
