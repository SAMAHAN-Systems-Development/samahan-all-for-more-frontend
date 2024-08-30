'use client';
import React, { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';
import { FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import UniversitySealLogo from '../../../public/assets/images/UniversitySealLogo.png';
import SamahanLogoWhite from '../../../public/assets/images/SamahanLogoWhite.png';

const getCurrentYear = () => {
  return new Date().getFullYear();
};
const currentYear = getCurrentYear();

// Variants
const footerSection = cva('mb-4', {
  variants: {
    size: {
      small: 'mb-2',
      medium: 'mb-4',
    },
    background: {
      default: 'bg-white',
      blue: 'bg-[#0923BA] text-white',
    },
  },
});

const footerLink = cva('text-white', {
  variants: {
    size: {
      small: 'text-sm',
      medium: 'text-base',
      regular: 'text-[14px]',
    },
    weight: {
      superThin: 'font-extralight',
      thin: 'font-thin',
      normal: 'font-normal',
      bold: 'font-bold',
    },
  },
});

const socialIcon = cva('mx-1', {
  variants: {
    size: {
      small: 'mx-0.5',
      medium: 'mx-1',
    },
  },
});

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full">
      {/* Oblong Shape - WIP*/}
      <div className="absolute w-full h-[227.65px] bg-blue rounded-t-full rounded-b-full -translate-y-1/2 z-[-1]" />
      <div
        id="main"
        className={`${footerSection({ background: 'blue' })} ${footerLink()} w-full flex flex-col px-[50px] md:px-[50px] items-center`}
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
              <ul className="space-y-[0.938rem]">
                <li>
                  <a
                    href="#"
                    className={footerLink({
                      size: 'regular',
                      weight: 'superThin',
                    })}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={footerLink({
                      size: 'regular',
                      weight: 'superThin',
                    })}
                  >
                    Academix
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={footerLink({
                      size: 'regular',
                      weight: 'superThin',
                    })}
                  >
                    Meet the Developers
                    <GoArrowUpRight className="inline-block align-middle ml-1" />
                  </a>
                </li>
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
                <li>
                  <a
                    href="#"
                    className={footerLink({
                      size: 'regular',
                      weight: 'superThin',
                    })}
                  >
                    President
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={footerLink({
                      size: 'regular',
                      weight: 'superThin',
                    })}
                  >
                    Vice President
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={footerLink({
                      size: 'regular',
                      weight: 'superThin',
                    })}
                  >
                    Secretary-General
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={footerLink({
                      size: 'regular',
                      weight: 'superThin',
                    })}
                  >
                    Treasurer
                  </a>
                </li>
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
                <li>
                  <a
                    href="#"
                    className={footerLink({
                      size: 'regular',
                      weight: 'superThin',
                    })}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div
              id="address"
              className=" flex flex-col text-center lg:text-left lg:mb-0 space-y-[0.938rem]"
            >
              <p className="font-bold text-[16px]">Address</p>
              <p
                className={
                  footerLink({ size: 'regular', weight: 'superThin' }) +
                  ' h-[139px] w-[150px] leading-[18px]'
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
                className={footerLink({ size: 'regular', weight: 'superThin' })}
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
                className={footerLink({ size: 'regular', weight: 'superThin' })}
              >
                samahan@addu.edu.ph
              </p>

              <h3
                className="font-bold mb-[0.938rem] mt-3"
                style={{ fontSize: '16px' }}
              >
                Socials
              </h3>
              <div className="flex justify-center xl:justify-end">
                <a
                  href="https://www.facebook.com/AdDUSAMAHAN"
                  className={footerLink({ size: 'regular' })}
                >
                  <FaFacebook className={socialIcon({ size: 'medium' })} />
                </a>
                <a
                  href="https://www.instagram.com/samahan_ateneo"
                  className={footerLink({ size: 'medium' })}
                >
                  <FaInstagram className={socialIcon({ size: 'medium' })} />
                </a>
                <a
                  href="https://x.com/addusamahan"
                  className={footerLink({ size: 'medium' })}
                >
                  <FaXTwitter className={socialIcon({ size: 'medium' })} />
                </a>
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
