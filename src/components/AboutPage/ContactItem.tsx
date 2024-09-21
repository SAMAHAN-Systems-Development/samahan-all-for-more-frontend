import React from 'react';
import Link from 'next/link';

interface ContactItemProps {
  children: React.ReactNode;
  icon: React.ElementType;
  href: string;
}
const ContactItem: React.FC<ContactItemProps> = ({
  children,
  icon: Icon,
  href,
}) => (
  <div className="text-blue text-footer-main lg:mb-14 flex items-center mr-6">
    <div className="w-4 h-4 bg-blue rounded-full mr-2 flex items-center justify-center">
      <Icon className="text-white w-2 h-2" />
    </div>
    <Link href={href} className="hover:underline">
      {children}
    </Link>
  </div>
);

export default ContactItem;
