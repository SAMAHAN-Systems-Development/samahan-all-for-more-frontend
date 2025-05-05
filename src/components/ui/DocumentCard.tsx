import React from 'react';
import Link from 'next/link';

interface DocumentCardProps {
  title: string;
  description: string;
  downloadLink: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  description,
  downloadLink,
}) => {
  return (
    <div className="w-full bg-white border border-blue rounded-xl p-6 shadow-lg flex flex-col justify-between h-full">
      <div>
        <h3 className="text-blue text-xl font-bold mb-2">{title}</h3>
        <p className="text-blue/80 text-sm">{description}</p>
      </div>
      <Link
        href={downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-white bg-blue hover:bg-blue-dark font-medium py-2 px-4 rounded-lg text-center transition duration-200"
      >
        View PDF
      </Link>
    </div>
  );
};

export default DocumentCard;
