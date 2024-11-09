import React from 'react';
import Link from 'next/link';

interface ContactItemProps {
  children: React.ReactNode;
  href: string;
  icon: React.ElementType;
}

const ContactItemTwo: React.FC<ContactItemProps> = ({
  children,
  href,
  icon: Icon,
}) => (
  <div className="text-blue text-[14px] sm:text-footer-main mb-3 sm:mb-4 flex items-center sm:flex-row flex-col sm:space-x-3 space-y-1.5 sm:space-y-0 justify-center sm:justify-start">
    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue rounded-full flex items-center justify-center">
      <Icon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
    </div>
    <Link
      href={href}
      className="hover:underline text-center sm:text-left px-2 sm:px-0"
    >
      {children}
    </Link>
  </div>
);

export default ContactItemTwo;
