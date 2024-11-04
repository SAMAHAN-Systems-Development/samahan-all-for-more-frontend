import React from 'react';
import acadhubData from '@/data/acadhubSectionFiveData.json';

const SectionFiveTable = () => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table-auto border-collapse border w-full text-blue border-blue">
        <thead>
          <tr>
            <th className="border border-blue px-4 py-2 text-left">Source</th>
            <th className="border border-blue px-4 py-2 text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {acadhubData.map((data, index) => (
            <tr key={index}>
              <td className="border border-blue px-4 py-2 text-main font-bold underline">
                {data.source}
              </td>
              <td className="border border-blue px-4 py-2">
                {data.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionFiveTable;
