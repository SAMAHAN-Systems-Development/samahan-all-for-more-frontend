import React from 'react';
import { LinkType, navLinks } from '../_constants/nav-links';
import Link from 'next/link';
import SamahanLogo from '/public/images/SamahanLogoWhite.png';
import Image from 'next/image';

const Sidebar = () => {
  const renderNavLinks = navLinks.map((link: LinkType) => (
    <Link
      key={link.link}
      href={link.link}
      className="flex gap-2 text-lg items-center"
    >
      <link.icon />
      {link.label}
    </Link>
  ));

  return (
    <div className="w-60 p-10 border-r-2 shadow-lg bg-primary text-white rounded-r-md font-semibold">
      <div className="flex gap-2 justify-center items-center mb-14">
        <Image src={SamahanLogo} alt="Samahan Logo" width={100} height={100} />
      </div>
      <div className="flex flex-col gap-8">{renderNavLinks}</div>
    </div>
  );
};

export default Sidebar;
