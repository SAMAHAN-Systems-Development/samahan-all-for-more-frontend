import React from 'react';
import DownloadButton from '../ui/DownloadButton';

const OrganizationalChartSection = () => {
  return (
    <div className="flex flex-col items-center text-center my-12">
      <h2 className="text-blue font-bold text-2xl mb-4">
        ORGANIZATIONAL CHART
      </h2>
      <p className="text-blue mb-6 max-w-lg">
        See how the departments work together to support overall operations.
        Click the button below to download the full organizational chart for a
        clear view of the department structure.
      </p>
      <DownloadButton></DownloadButton>
    </div>
  );
};

export default OrganizationalChartSection;
