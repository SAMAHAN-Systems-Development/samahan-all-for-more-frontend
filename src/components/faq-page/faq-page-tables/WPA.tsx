import wpaData from '@/data/wpaData.json';
const WPA = () => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table-auto border-collapse border w-full text-blue">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left w-1/3">Letter Grade</th>
            <th className="border px-4 py-2 text-left w-1/3">
              Percentage Grade
            </th>
            <th className="border px-4 py-2 text-left w-1/3">Description</th>
          </tr>
        </thead>
        <tbody>
          {wpaData.map((data, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{data.letterGrade}</td>
              {/* Conditionally render colSpan for FD and WP */}
              {data.letterGrade === 'FD' || data.letterGrade === 'WP' ? (
                <td className="border px-4 py-2" colSpan={2}>
                  {data.description}
                </td>
              ) : (
                <>
                  <td className="border px-4 py-2">{data.percentage}</td>
                  <td className="border px-4 py-2">{data.description}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default WPA;
