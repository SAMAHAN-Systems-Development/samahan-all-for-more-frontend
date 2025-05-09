'use client';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';
import Image from 'next/image';
import Link from 'next/link';

import { cva } from 'class-variance-authority';
import SamahanLogoWhite from 'public/images/SamahanLogoWhite.png';
import UniversitySealLogo from 'public/images/UniversitySealLogo.png';

import {
  FOOTER_BACKGROUND_ENUM,
  FOOTER_SIZE_ENUM,
  LINK_SIZE_ENUM,
  LINK_WEIGHT_ENUM,
  SOCIAL_ICON_SIZE_ENUM,
} from '@/components/ui/Footer/enums';

const getCurrentYear = () => {
  return new Date().getFullYear();
};
const currentYear = getCurrentYear();

// Variants
const footerSection = cva('', {
  variants: {
    size: {
      [FOOTER_SIZE_ENUM.SMALL]: 'mb-2',
    },
    background: {
      [FOOTER_BACKGROUND_ENUM.DEFAULT]: 'bg-white',
      [FOOTER_BACKGROUND_ENUM.BLUE]: 'bg-blue text-white',
    },
  },
});

const footerLink = cva('text-white', {
  variants: {
    size: {
      [LINK_SIZE_ENUM.SMALL]: 'text-sm',
      [LINK_SIZE_ENUM.MEDIUM]: 'text-base',
      [LINK_SIZE_ENUM.REGULAR]: 'text-footer-main',
      [LINK_SIZE_ENUM.MAIN]: 'text-main',
    },
    weight: {
      [LINK_WEIGHT_ENUM.SUPER_THIN]: 'font-extralight',
      [LINK_WEIGHT_ENUM.THIN]: 'font-thin',
      [LINK_WEIGHT_ENUM.NORMAL]: 'font-normal',
      [LINK_WEIGHT_ENUM.BOLD]: 'font-bold',
    },
  },
});

const socialIcon = cva('ml-1', {
  variants: {
    size: {
      [SOCIAL_ICON_SIZE_ENUM.SMALL]: 'mx-0.5',
      [SOCIAL_ICON_SIZE_ENUM.MEDIUM]: 'mx-1',
      [SOCIAL_ICON_SIZE_ENUM.LARGE]: 'ml-2',
    },
  },
});
interface FooterProps {
  background?: 'default' | 'blue';
  iconSize?: SOCIAL_ICON_SIZE_ENUM;
  linkSize?: LINK_SIZE_ENUM;
  linkWeight?: LINK_WEIGHT_ENUM;
  size?: FOOTER_SIZE_ENUM;
}

// Store links in constants
const quickLinks = [
  { href: '/about-us', label: 'About' },
  { href: '/academix/acadhub', label: 'Academix' },
  {
    href: '/meet-the-developers',
    label: 'Meet the Developers',
    icon: <GoArrowUpRight className="inline-block align-middle ml-1" />,
  },
];
const officeLinks = [
  { href: '/offices/office-of-the-president', label: 'President' },
  { href: '/offices/office-of-the-vice-president', label: 'Vice President' },
  {
    href: '/offices/office-of-the-secretary-general',
    label: 'Secretary-General',
  },
  { href: '/offices/office-of-the-treasurer', label: 'Treasurer' },
];

const policyLinks = [{ href: '/privacy-policy', label: 'Privacy Policy' }];

const socialLinks = [
  {
    href: 'https://www.facebook.com/AdDUSAMAHAN',
    icon: (
      <FaFacebook
        className={`size-6 ${socialIcon({ size: SOCIAL_ICON_SIZE_ENUM.LARGE })}`}
      />
    ),
    size: LINK_SIZE_ENUM.MEDIUM,
  },
  {
    href: 'https://www.instagram.com/samahan_ateneo',
    icon: (
      <FaInstagram
        className={`size-6 ${socialIcon({ size: SOCIAL_ICON_SIZE_ENUM.LARGE })}`}
      />
    ),
    size: LINK_SIZE_ENUM.MEDIUM,
  },
  {
    href: 'https://x.com/addusamahan',
    icon: (
      <FaXTwitter
        className={`size-6 ${socialIcon({ size: SOCIAL_ICON_SIZE_ENUM.LARGE })}`}
      />
    ),
    size: LINK_SIZE_ENUM.MEDIUM,
  },
];

// Office Links
const OfficeLinks = () => (
  <ul className="space-y-[0.938rem]">
    {officeLinks.map((link, index) => (
      <li key={index}>
        <Link
          href={link.href}
          className={footerLink({
            size: LINK_SIZE_ENUM.REGULAR,
            weight: LINK_WEIGHT_ENUM.SUPER_THIN,
          })}
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

// Quick Links
const QuickLinks = () => (
  <ul className="space-y-[0.938rem]">
    {quickLinks.map((link, index) => (
      <li key={index}>
        <Link
          href={link.href}
          className={footerLink({
            size: LINK_SIZE_ENUM.REGULAR,
            weight: LINK_WEIGHT_ENUM.SUPER_THIN,
          })}
        >
          {link.label}
          {link.icon && link.icon}
        </Link>
      </li>
    ))}
  </ul>
);

// Policy Links
const PolicyLinks = () => (
  <ul className="space-y-[0.938rem]">
    {policyLinks.map((link, index) => (
      <li key={index}>
        <Link
          href={link.href}
          className={footerLink({
            size: LINK_SIZE_ENUM.REGULAR,
            weight: LINK_WEIGHT_ENUM.SUPER_THIN,
          })}
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

// Social Links
const SocialLinks = () => (
  <div className="flex justify-center xl:justify-end lg:justify-end">
    {socialLinks.map((link, index) => (
      <Link
        href={link.href}
        key={index}
        className={footerLink({ size: link.size })}
      >
        {link.icon}
      </Link>
    ))}
  </div>
);

const Footer: React.FC<FooterProps> = ({}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full">
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1400 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 65.0002L1400 65.0002C1219.57 24.7903 972.507 0 700 0C427.493 0 180.432 24.7903 0 65.0002Z"
          fill="#0923BA"
        />
      </svg>

      {/* Oblong Shape*/}
      <div
        id="main"
        className={`${footerSection({ background: FOOTER_BACKGROUND_ENUM.BLUE })} ${footerLink()} w-full flex flex-col items-center`}
      >
        <div className="w-full flex items-center">
          <div
            id="Logo-Text"
            className="flex flex-col xl:flex-row items-center xl:items-center xl:justify-start justify-center w-full mx-[50px]"
          >
            {/* Logos */}

            <div
              id="logo "
              className="flex flex-row items-center mt-10 gap-[20px]"
            >
              <Image
                src={UniversitySealLogo}
                width={122}
                height={122}
                alt="University Seal Logo"
              />
              <Image
                src={SamahanLogoWhite}
                width={122}
                height={122}
                alt="Samahan Logo White"
              />
            </div>
            <div
              id="Text"
              className="mt-5 xl:mt-10 lg:ml-5 text-center xl:text-left px-[50px]"
            >
              <h3 className="text-2xl font-semibold font-inter">
                Samahan ng mga Mag-aaral ng Pamantasan
              </h3>

              <h3 className="text-2xl font-semibold font-inter mb-2">
                ng Ateneo de Davao
              </h3>
              <p className="font-inter text-footer-main">
                The Student Government of College Unit of the Ateneo de Davao
                University
              </p>
            </div>
          </div>
        </div>

        <div
          id="content"
          className="font-inter flex flex-col lg:flex-row mt-[42px] w-full px-[50px] ml-start mr-auto items-center lg:items-start lg:justify-between"
        >
          <div
            id="left"
            className="flex flex-col lg:flex-row lg:space-x-[3.125rem]"
          >
            {/* Quick Links */}
            <div
              id="links"
              className="flex flex-col space-y-3 text-center lg:text-left mb-[3.125rem] lg:mb-0"
            >
              <h3 className={`font-bold ${LINK_SIZE_ENUM.MAIN}`}>
                Quick Links
              </h3>
              <QuickLinks />
            </div>

            {/* Offices */}
            <div
              id="Offices"
              className="flex flex-col space-y-3 text-center lg:text-left mb-[3.125rem] lg:mb-0"
            >
              <h3 className={`font-bold ${LINK_SIZE_ENUM.MAIN}`}>Offices</h3>
              <OfficeLinks />
            </div>

            {/* Policies */}
            <div
              id="Policies"
              className="flex flex-col space-y-3 text-center lg:text-left mb-[3.125rem] lg:mb-0"
            >
              <h3 className={`font-bold ${LINK_SIZE_ENUM.MAIN}`}>Policies</h3>
              <PolicyLinks />
            </div>

            {/* Address */}
            <div
              id="address"
              className="flex flex-col text-center lg:text-left lg:mb-0 space-y-[0.938rem]"
            >
              <p className={`font-bold ${LINK_SIZE_ENUM.MAIN}`}>Address</p>
              <p
                className={
                  footerLink({
                    size: LINK_SIZE_ENUM.REGULAR,
                    weight: LINK_WEIGHT_ENUM.SUPER_THIN,
                  }) + ' h-[139px] w-[150px] leading-[18px]'
                }
              >
                Mezzanine Level, Martin Building
                <br />
                Ateneo de Davao University E. <br />
                Jacinto Street, Davao City 8000
              </p>
            </div>
          </div>

          <div id="right" className="flex flex-col lg:flex-row">
            <div className="w-[200px] h-[180px] flex flex-col space-y-3 text-center lg:text-right lg:mb-0">
              {/* Telephone Section */}
              <h3 className={`font-bold ${LINK_SIZE_ENUM.MAIN}`}>Telephone</h3>
              <p
                className={footerLink({
                  size: LINK_SIZE_ENUM.REGULAR,
                  weight: LINK_WEIGHT_ENUM.SUPER_THIN,
                })}
              >
                (082) 221 2411 LOC 8328
              </p>

              {/* Email Section */}
              <h3 className={`font-bold ${LINK_SIZE_ENUM.MAIN}`}>Email</h3>
              <p
                className={footerLink({
                  size: LINK_SIZE_ENUM.MAIN,
                  weight: LINK_WEIGHT_ENUM.SUPER_THIN,
                })}
              >
                samahan@addu.edu.ph
              </p>
              {/* Socials Section */}
              <h3 className={`font-bold ${LINK_SIZE_ENUM.MAIN}`}>Socials</h3>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="font-inter pb-10 text-center w-full flex justify-center items-center mt-[2.625rem]">
          <div className="flex flex-col w-full mx-[50px]">
            <div className="h-[2px] bg-gray-500 opacity-75 w-full"></div>
            <div
              id="credits"
              className="flex flex-col text-center lg:flex-row items-center lg:justify-between px-0 w-full mt-[2.625rem]"
            >
              <div
                className={`text-center lg:text-left mb-4 lg:mb-0 text-sm ${LINK_SIZE_ENUM.REGULAR}`}
              >
                <p>
                  Assets by <strong>SAMAHAN Creative Team</strong>
                </p>
                <p>
                  Developed by <strong> SAMAHAN Systems Development </strong>
                </p>
              </div>
              <p className="text-sm font-normal lg:mt-0">
                © {currentYear} SAMAHAN All For More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
