'use client';
import React, { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';
import { FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';
import { inter } from '../styles/font';
import Image from 'next/image';
// import UniversitySealLogo from '../public/assets/images/UniversitySealLogo.png';
// import SamahanLogoWhite from '../public/assets/images/SamahanLogoWhite.png';

// Variants
// Font style is not applied
const footerSection = cva('mb-4', {
  variants: {
    size: {
      small: 'mb-2',
      medium: 'mb-4',
    },
    background: {
      default: 'bg-white',
      custom: 'bg-[#0923BA]',
    },
  },
});

const footerLink = cva('text-white hover:text-gray-300', {
  variants: {
    size: {
      small: 'text-sm',
      medium: 'text-base',
      regular: 'text-[14px]',
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
    <footer
      className={`${footerSection({ size: 'medium', background: 'custom' })} ${inter.variable} text-white`}
    >
      {/* Gap both sides are too big */}
      <div className="container mx-auto px-4 py-8">
        {/* Logos */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 text-center md:text-left">
          {/* Adding Images--Failed to compile */}
          {/* <div className="flex">
            <Image
              src={UniversitySealLogo}
              width={100}
              height={100}
              className="mr-4"
            />
            <Image
              src={SamahanLogoWhite}
              width={100}
              height={100}
            />
          </div> */}
          <div>
            <h3 className="text-xl font-semibold">
              Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao
            </h3>
            <p>
              The Student Government of College Unit of the Ateneo de Davao
              University
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 text-center md:text-left">
          <div className="col-span-1">
            <h3 className="font-bold mb-4" style={{ fontSize: '16px' }}>
              Quick Links
            </h3>
            <ul>
              <li>
                <a href="#" className={footerLink({ size: 'regular' })}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className={footerLink({ size: 'regular' })}>
                  Academix
                </a>
              </li>
              <li>
                <a href="#" className={footerLink({ size: 'regular' })}>
                  Meet the Developers
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4" style={{ fontSize: '16px' }}>
              Offices
            </h3>
            <ul>
              <li>
                <a href="#" className={footerLink({ size: 'regular' })}>
                  President
                </a>
              </li>
              <li>
                <a href="#" className={footerLink({ size: 'regular' })}>
                  Vice President
                </a>
              </li>
              <li>
                <a href="#" className={footerLink({ size: 'regular' })}>
                  Secretary-General
                </a>
              </li>
              <li>
                <a href="#" className={footerLink({ size: 'regular' })}>
                  Treasurer
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold mb-4" style={{ fontSize: '16px' }}>
              Policies
            </h3>
            <ul>
              <li>
                <a href="#" className={footerLink({ size: 'regular' })}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-5">
            <h3 className="font-bold mb-4" style={{ fontSize: '16px' }}>
              Address
            </h3>
            <p>Mezzanine Level,</p>
            <p>Martin Building</p>
            <p>Ateneo de Davao</p>
            <p>University E.</p>
            <p>Jacinto Street, Davao</p>
            <p>City 8000</p>
            <div className="text-center md:text-right">
              <h3 className="font-bold mb-1 mt-3" style={{ fontSize: '16px' }}>
                Telephone
              </h3>
              <p className="" style={{ fontSize: '14px' }}>
                (082) 221 2411 LOC 8328
              </p>
              <h3 className="font-bold mb-1 mt-3" style={{ fontSize: '16px' }}>
                Email
              </h3>
              <p style={{ fontSize: '14px' }}>samahan@addu.edu.ph</p>
              <h3 className="font-bold mb-1 mt-3" style={{ fontSize: '16px' }}>
                Socials
              </h3>
              <div className="flex justify-center md:justify-end ">
                <a
                  href="https://facebook.com"
                  className={footerLink({ size: 'regular' })}
                >
                  <FaFacebook className={socialIcon({ size: 'medium' })} />
                </a>
                <a
                  href="https://instagram.com"
                  className={footerLink({ size: 'medium' })}
                >
                  <FaInstagram className={socialIcon({ size: 'medium' })} />
                </a>
                <a
                  href="https://x.com"
                  className={footerLink({ size: 'medium' })}
                >
                  <FaXTwitter className={socialIcon({ size: 'medium' })} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-8 pt-4 text-center">
          {/* Must be aligned to "Assets by.." */}
          <p className="mt-2 text-right md:text-right">
            © 2024 SAMAHAN All For More
          </p>
          <div className="text-left md:text-left">
            <p>Assets by SAMAHAN Creative Team</p>
            <p>Developed by SAMAHAN Systems Development</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
