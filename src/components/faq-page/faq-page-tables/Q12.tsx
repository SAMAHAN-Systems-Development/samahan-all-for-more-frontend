import AssessmentData from '@/data/assessmentTableData.json';
const Q12 = () => {
  return (
    <div className="overflow-x-auto">
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
          {AssessmentData.map((assessment, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{assessment.week}</td>
              <td className="border px-4 py-2">{assessment.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Q12;
