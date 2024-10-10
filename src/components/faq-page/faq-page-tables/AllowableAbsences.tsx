import absenceData from '@/data/absenceData.json';
const AllowableAbsences = () => {
  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Subject</th>
          <th className="border px-4 py-2">Absences</th>
        </tr>
      </thead>
      <tbody>
        {absenceData.map((data, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{data.subject}</td>
            <td className="border px-4 py-2">
              {data.absences.map((absence, index2) => (
                <p key={index2}>{absence}</p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllowableAbsences;
