'use client';

import { useState } from 'react';

import { cva } from 'class-variance-authority';
import { ArrowDownToLine } from 'lucide-react';

const buttonStyles = cva(
  'py-4 px-4 pr-6 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer flex items-center justify-center',
  {
    variants: {
      variant: {
        outline: 'bg-transparent',
      },
      colorScheme: {
        blue: 'text-blue border-2 border-blue hover:bg-blue hover:text-white',
        white:
          'text-white border-2 border-white hover:bg-white hover:text-blue',
      },
    },
    defaultVariants: {
      variant: 'outline',
      colorScheme: 'blue',
    },
  }
);

export default function DownloadButton() {
  const [, setIsClicked] = useState(false);

  const handleDownload = async () => {
    setIsClicked(true);

    try {
      const response = await fetch('/charts/SAMAHANOrganizationalChart.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SAMAHAN Organizational Chart.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    }

    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <button
      onClick={() => {
        void handleDownload();
      }}
      className={buttonStyles({ variant: 'outline', colorScheme: 'blue' })}
      aria-label="Download chart"
    >
      <div className="mr-2 p-2 rounded-full bg-blue flex items-center justify-center">
        <ArrowDownToLine className="h-4 w-4 text-white" />
      </div>
      DOWNLOAD CHART
    </button>
  );
}
