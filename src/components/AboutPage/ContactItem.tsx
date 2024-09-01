import React from 'react';

interface ContactItemProps {
  href: string;
  imgSrc: string;
  altText: string;
  children: React.ReactNode;
}
const ContactItem: React.FC<ContactItemProps> = ({
  href,
  imgSrc,
  altText,
  children,
}) => (
  <div className="text-blue text-xs mb-14 flex items-center mr-6">
    <div className="w-4 h-4 bg-blue rounded-full mr-2 flex items-center justify-center">
      <img src={imgSrc} alt={altText} />
    </div>
    <p>
      <a href={href} className="hover:underline">
        {children}
      </a>
    </p>
  </div>
);

export default ContactItem;
