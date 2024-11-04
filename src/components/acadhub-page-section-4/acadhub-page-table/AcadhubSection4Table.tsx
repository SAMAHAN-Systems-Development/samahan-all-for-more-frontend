import React from 'react';
import acadhubData from '@/data/acadhubSection4Data.json';

const AcadhubSection4Table = () => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table-auto border-collapse border w-full text-blue border-blue">
        <thead>
          <tr>
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
            <tr key={index}>
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
    </div>
  );
};

export default AcadhubSection4Table;
