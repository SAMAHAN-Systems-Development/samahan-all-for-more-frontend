import React from 'react';
import acadhubData from '@/data/acadhubSection4Data.json';

const AcadhubSection4Table = () => {
  return (
    <div className="overflow-x-auto mt-5">
      {/* Standard Table View for Desktop */}
      <table className="hidden sm:table table-auto border-collapse w-full text-blue border border-blue">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-blue px-4 py-2 text-left">
              Course Code
            </th>
            <th className="border border-blue px-4 py-2 text-left">
              Course Description
            </th>
            <th className="border border-blue px-4 py-2 text-left">
              Narrative Descriptions
            </th>
          </tr>
        </thead>
        <tbody>
          {acadhubData.map((data, index) => (
            <tr key={index} className="even:bg-blue-50">
              <td className="border border-blue px-4 py-2">{data.code}</td>
              <td className="border border-blue px-4 py-2">
                {data.courseDescription}
              </td>
              <td className="border border-blue px-4 py-2">
                {data.narrativeDescription}
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
              <strong>Course Code:</strong>{' '}
              <span className="block sm:inline">{data.code}</span>
            </div>
            <div className="mb-2">
              <strong>Course Description:</strong>{' '}
              <span className="block sm:inline">{data.courseDescription}</span>
            </div>
            <div>
              <strong>Narrative Descriptions:</strong>{' '}
              <span className="block sm:inline">
                {data.narrativeDescription}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcadhubSection4Table;
