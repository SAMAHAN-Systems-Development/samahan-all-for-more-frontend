import React from 'react';
import { FaPenNib } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';
import { RiCalendar2Fill } from 'react-icons/ri';
import Link from 'next/link';

import Button from '@/components/ui/Button';

type BulletinCardProps = {
  author: string;
  content: string;
  id: number;
  pdfAttachments: {
    category: string;
    file_path: string;
    id: number;
  }[];
  published_at: string;
  title: string;
};

const BulletinCard = ({
  id,
  title,
  content,
  author,
  published_at,
  pdfAttachments,
}: BulletinCardProps) => {
  return (
    <div
      key={id}
      className="w-[525px] border-2 border-blue rounded-2xl shadow-md overflow-hidden"
    >
      {/* Header Section */}
      <div className="bg-blue text-white text-left p-6 uppercase font-bold text-lg">
        {title}
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        <div className="flex items-center text-blue space-x-2">
          <FaPenNib />
          <span className="text-main">{author}</span>
        </div>

        <div className="flex items-center text-blue space-x-2">
          <IoNewspaperOutline className="w-5 h-5 flex-shrink-0" />
          <span className="text-main">{content}</span>
        </div>

        <div className="flex items-center text-blue space-x-2">
          <RiCalendar2Fill />
          <span className="text-main">{published_at}</span>
        </div>
      </div>

      <div className="p-4">
        {pdfAttachments.length > 0 && (
          <Link
            href={pdfAttachments[0].file_path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="View Details" size="wide" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BulletinCard;
