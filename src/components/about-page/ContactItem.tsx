import React from 'react';
import Link from 'next/link';

interface ContactItemProps {
  children: React.ReactNode;
  href: string;
  icon: React.ElementType;
}
const ContactItem: React.FC<ContactItemProps> = ({
  children,
  href,
  icon: Icon,
}) => (
  <div className="text-blue text-footer-main lg:mb-14 flex items-center mr-0 md:mr-6">
    <div className="w-8 h-8 bg-blue rounded-full mr-2 flex items-center justify-center">
      <Icon className="text-white w-5 h-5" />
    </div>
    <Link href={href} className="hover:underline">
      {children}
    </Link>
  </div>
);

export default ContactItem;
