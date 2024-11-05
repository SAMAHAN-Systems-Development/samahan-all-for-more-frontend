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
  <div className="text-blue text-footer-main mb-4 flex items-center sm:flex-row flex-col sm:space-x-3 space-y-2 sm:space-y-0 justify-center sm:justify-start">
    <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center">
      <Icon className="text-white w-5 h-5" />
    </div>
    <Link href={href} className="hover:underline text-center sm:text-left">
      {children}
    </Link>
  </div>
);

export default ContactItemTwo;
