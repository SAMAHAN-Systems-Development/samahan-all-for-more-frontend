'use client';
import React, { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';
import { FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import SamahanLogoWhite from '../../../../public/assets/images/SamahanLogoWhite.png';
import UniversitySealLogo from '../../../../public/assets/images/UniversitySealLogo.png';
import Link from 'next/link';

import {
  LINK_SIZE_ENUM,
  LINK_WEIGHT_ENUM,
  FOOTER_SIZE_ENUM,
  LINK_TITLE_ENUM,
  FOOTER_BACKGROUND_ENUM,
  SOCIAL_ICON_SIZE_ENUM,
} from '../Footer/enums';

const getCurrentYear = () => {
  return new Date().getFullYear();
};
const currentYear = getCurrentYear();

// Variants
const footerSection = cva('mb-4', {
  variants: {
    size: {
      [FOOTER_SIZE_ENUM.SMALL]: 'mb-2',
      [FOOTER_SIZE_ENUM.MEDIUM]: 'mb-4',
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
      [LINK_SIZE_ENUM.REGULAR]: 'text-[14px]',
    },
    weight: {
      [LINK_WEIGHT_ENUM.SUPER_THIN]: 'font-extralight',
      [LINK_WEIGHT_ENUM.THIN]: 'font-thin',
      [LINK_WEIGHT_ENUM.NORMAL]: 'font-normal',
      [LINK_WEIGHT_ENUM.BOLD]: 'font-bold',
    },
  },
});

const socialIcon = cva('mx-1', {
  variants: {
    size: {
      [SOCIAL_ICON_SIZE_ENUM.SMALL]: 'mx-0.5',
      [SOCIAL_ICON_SIZE_ENUM.MEDIUM]: 'mx-1',
    },
  },
});

interface FooterProps {
  size?: FOOTER_SIZE_ENUM;
  background?: 'default' | 'blue';
  linkSize?: LINK_SIZE_ENUM;
  linkWeight?: LINK_WEIGHT_ENUM;
  iconSize?: SOCIAL_ICON_SIZE_ENUM;
}

// Store links in constants
const quickLinks = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Academix' },
  {
    href: '#',
    label: 'Meet the Developers',
    icon: <GoArrowUpRight className="inline-block align-middle ml-1" />,
  },
];
const officeLinks = [
  { href: '#', label: 'President' },
  { href: '#', label: 'Vice President' },
  { href: '#', label: 'Secretary-General' },
  { href: '#', label: 'Treasurer' },
];

const policyLinks = [{ href: '', label: 'Privacy Policy' }];

const socialLinks = [
  {
    href: 'https://www.facebook.com/AdDUSAMAHAN',
    icon: (
      <FaFacebook
        className={socialIcon({ size: SOCIAL_ICON_SIZE_ENUM.MEDIUM })}
      />
    ),
    size: LINK_SIZE_ENUM.MEDIUM,
  },
  {
    href: 'https://www.instagram.com/samahan_ateneo',
    icon: (
      <FaInstagram
        className={socialIcon({ size: SOCIAL_ICON_SIZE_ENUM.MEDIUM })}
      />
    ),
    size: LINK_SIZE_ENUM.MEDIUM,
  },
  {
    href: 'https://x.com/addusamahan',
    icon: (
      <FaXTwitter
        className={socialIcon({ size: SOCIAL_ICON_SIZE_ENUM.MEDIUM })}
      />
    ),
    size: LINK_SIZE_ENUM.MEDIUM,
  },
];

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
        className={`${footerSection({ background: FOOTER_BACKGROUND_ENUM.BLUE })} ${footerLink()} w-full flex flex-col px-[50px] md:px-[50px] items-center`}
      >
        <div className="w-full flex items-center">
          <div
            id="Logo-Text"
            className="flex flex-col xl:flex-row items-center xl:items-center xl:justify-start justify-center w-full"
          >
            {/* Logos */}

            <div id="logo " className="flex flex-row items-center">
              <Image
                src={UniversitySealLogo}
                width={122}
                height={122}
                className="mt-10 mr-[20px]"
                alt="University Seal Logo"
              />
              <Image
                src={SamahanLogoWhite}
                width={122}
                height={122}
                className="mt-10"
                alt="Samahan Logo White"
              />
            </div>
            <div
              id="Text"
              className="mt-5 xl:mt-10 lg:ml-4 text-center xl:text-left"
            >
              <h3 className="text-2xl font-semibold font-inter">
                Samahan ng mga Mag-aaral ng Pamantasan
              </h3>

              <h3 className="text-2xl font-semibold font-inter mb-2">
                ng Ateneo de Davao
              </h3>
              <p className="font-inter" style={{ fontSize: '14px' }}>
                The Student Government of College Unit of the Ateneo de Davao
                University
              </p>
            </div>
          </div>
        </div>

        <div
          id="content"
          className="font-inter flex flex-col lg:flex-row mt-[42px] w-full ml-start mr-auto items-center lg:items-start lg:justify-between"
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
              <h3 className="font-bold" style={{ fontSize: '16px' }}>
                Quick Links
              </h3>
              {/* Map Function */}
              <ul className="space-y-[0.938rem]">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} legacyBehavior>
                      <a
                        className={footerLink({
                          size: LINK_SIZE_ENUM.REGULAR,
                          weight: LINK_WEIGHT_ENUM.SUPER_THIN,
                        })}
                      >
                        {link.label}
                        {link.icon && link.icon}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div
              id="Offices"
              className="flex flex-col space-y-3 text-center lg:text-left mb-[3.125rem] lg:mb-0"
            >
              <h3 className="font-bold" style={{ fontSize: '16px' }}>
                Offices
              </h3>
              <ul className="space-y-[0.938rem]">
                {officeLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} legacyBehavior>
                      <a
                        className={footerLink({
                          size: LINK_SIZE_ENUM.REGULAR,
                          weight: LINK_WEIGHT_ENUM.SUPER_THIN,
                        })}
                      >
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div
              id="Policies"
              className="flex flex-col space-y-3 text-center lg:text-left mb-[3.125rem] lg:mb-0"
            >
              <h3 className="font-bold" style={{ fontSize: '16px' }}>
                Policies
              </h3>
              <ul className="space-y-[0.938rem]">
                {policyLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} legacyBehavior>
                      <a
                        className={footerLink({
                          size: LINK_SIZE_ENUM.REGULAR,
                          weight: LINK_WEIGHT_ENUM.SUPER_THIN,
                        })}
                      >
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div
              id="address"
              className="flex flex-col text-center lg:text-left lg:mb-0 space-y-[0.938rem]"
            >
              <p className="font-bold text-[16px]">Address</p>
              <p
                className={
                  footerLink({
                    size: LINK_SIZE_ENUM.REGULAR, // Use enum for size
                    weight: LINK_WEIGHT_ENUM.SUPER_THIN, // Use enum for weight
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
              <h3 className="font-bold" style={{ fontSize: '16px' }}>
                Telephone
              </h3>
              <p
                className={footerLink({
                  size: LINK_SIZE_ENUM.REGULAR,
                  weight: LINK_WEIGHT_ENUM.SUPER_THIN,
                })}
              >
                (082) 221 2411 LOC 8328
              </p>

              <h3
                className="font-bold mb-[0.938rem] mt-3"
                style={{ fontSize: '16px' }}
              >
                Email
              </h3>
              <p
                className={footerLink({
                  size: LINK_SIZE_ENUM.REGULAR,
                  weight: LINK_WEIGHT_ENUM.SUPER_THIN,
                })}
              >
                samahan@addu.edu.ph
              </p>

              <h3
                className="font-bold mb-[0.938rem] mt-3"
                style={{ fontSize: '16px' }}
              >
                {LINK_TITLE_ENUM.SOCIALS}
              </h3>
              <div className="flex justify-center xl:justify-end">
                {socialLinks.map((link, index) => (
                  <Link href={link.href} key={index} legacyBehavior>
                    <a className={footerLink({ size: link.size })}>
                      {link.icon}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[2.625rem]"></div>
        <div className="font-inter border-t border-gray-500 pb-10 text-center w-full flex justify-center items-center">
          <div
            id="credits"
            className="flex flex-col text-center lg:flex-row items-center lg:justify-between px-0 w-full mt-[2.625rem]"
          >
            <div className="text-center xl:text-left mb-4 lg:mb-0 text-sm">
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
  );
};

export default Footer;
