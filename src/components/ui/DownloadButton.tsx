import React from 'react';
import Link from 'next/link';

import { ArrowDownToLine } from 'lucide-react';

import Button from '@/components/ui/Button';

const DownloadButton = () => {
  return (
    <div>
      <Link
        href="/charts/SAMAHANOrganizationalChart.pdf"
        download="Samahan Organizational Chart"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="icon"
          colorScheme="blue"
          icon={
            <ArrowDownToLine className="w-8 h-8 text-white bg-blue p-2 rounded-full" />
          }
        >
          DOWNLOAD CHART
        </Button>
      </Link>
    </div>
  );
};

export default DownloadButton;
