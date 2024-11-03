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
  const firstPdfAttachment = pdfAttachments[0];

  return (
    <div
      key={id}
      className="w-full md:max-w-[525px] border-2 border-blue rounded-2xl shadow-md overflow-hidden"
    >
      {/* Header Section */}
      <div className="bg-blue text-white text-left p-4 md:p-6 uppercase font-bold text-base md:text-lg">
        {title}
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-5 space-y-3 md:space-y-4">
        <div className="flex items-center text-blue space-x-2 text-sm md:text-base">
          <FaPenNib className="flex-shrink-0" />
          <span className="text-main">{author}</span>
        </div>

        <div className="flex items-center text-blue space-x-2 text-sm md:text-base">
          <IoNewspaperOutline className="w-5 h-5 flex-shrink-0" />
          <span className="text-main">
            {content.length <= 100
              ? content
              : content.substring(0, 100) + '...'}
          </span>
        </div>

        <div className="flex items-center text-blue space-x-2 text-sm md:text-base">
          <RiCalendar2Fill className="flex-shrink-0" />
          <span className="text-main">{published_at}</span>
        </div>
      </div>
      {/* renders 1 button if there is atleast 1 pdf */}
      {firstPdfAttachment && (
        <div className="p-4">
          <Link
            href={firstPdfAttachment.file_path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="View Details" size="wide" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default BulletinCard;
