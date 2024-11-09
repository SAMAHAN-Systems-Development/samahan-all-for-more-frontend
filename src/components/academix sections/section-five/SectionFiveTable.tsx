import React from 'react';
import acadhubData from '@/data/acadhubSectionFiveData.json';

const SectionFiveTable = () => {
  return (
    <div className="overflow-x-auto mt-5">
      {/* Standard Table View for Desktop */}
      <table className="hidden sm:table table-auto border-collapse w-full text-blue border border-blue">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-blue px-4 py-2 text-left">Source</th>
            <th className="border border-blue px-4 py-2 text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {acadhubData.map((data, index) => (
            <tr key={index} className="even:bg-blue-50">
              <td className="border border-blue px-4 py-2 font-bold underline">
                {data.source}
              </td>
              <td className="border border-blue px-4 py-2">
                {data.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Card View for Mobile */}
      <div className="sm:hidden space-y-4">
        {acadhubData.map((data, index) => (
          <div
            key={index}
            className="border border-blue p-4 rounded-md text-blue bg-white shadow-md"
          >
            <div className="mb-2">
              <strong>Source:</strong>{' '}
              <span className="block sm:inline font-bold underline">
                {data.source}
              </span>
            </div>
            <div>
              <strong>Description:</strong>{' '}
              <span className="block sm:inline">{data.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFiveTable;
