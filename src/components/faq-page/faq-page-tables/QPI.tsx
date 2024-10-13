import qpiData from '@/data/qpiData.json';
const QPI = () => {
  return (
    <table className="table-auto border-collapse border w-full text-blue">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left w-1/3">Letter Grade</th>
          <th className="border px-4 py-2 text-left w-1/3">
            Quality Point Equivalent
          </th>
        </tr>
      </thead>
      <tbody>
        {qpiData.map((data, index) => (
          <tr key={index} className="text-center">
            <td className="border px-4 py-2">{data.letterGrade}</td>
            <td className="border px-4 py-2">{data.qualityPoint}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default QPI;
