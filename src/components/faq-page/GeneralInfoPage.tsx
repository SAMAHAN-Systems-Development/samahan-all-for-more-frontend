import Button from '@/components/ui/Button';

const GeneralInfoPage = () => {
  return (
    <div className="mx-28">
      <h1 className="text-blue font-bold text-title mt-24">
        GENERAL INFORMATION CENTER
      </h1>

      {/*School deans and departments...*/}
      <div>
        <h2 className="text-blue font-bold text-main mt-5">
          1. School Deans and Department Heads Directory
        </h2>
        <div className="text-blue text-main ml-8">
          <p className="mb-5 mt-5">
            Meet the dedicated leaders guiding our academic programs and shaping
            the future of our departments.
          </p>
          <Button text="View Directory" />
        </div>
      </div>

      {/*Grading System*/}
      <h2 className="text-blue font-bold text-main mt-12">2. Grading System</h2>
      <div className="ml-8">
        <p className="text-blue mb-5 mt-5">a. Weighted Percentage Average</p>
        <div className="ml-8">
          <WPA />
        </div>
        <p className="text-blue mb-5 mt-5">b. Quality Point Index</p>
        <div className="ml-8">
          <QPI />
        </div>
      </div>

      {/* Class Attendance and Absences */}
      <h2 className="text-blue font-bold text-main mt-12">
        3. Class Attendance and Absences
      </h2>
      <div className="text-blue text-main ml-8">
        <p className="mb-5 mt-5">a. Allowable Absences</p>
        <div className="ml-8">
          <AllowableAbsences />
          <div className="text-blue text-main ml-8">
            <ul className="list-[lower-roman] pl-6 mt-5">
              <li className="mt-5">
                However, for a five-unit course (i.e., 3 units lecture, 2 units
                laboratory), any student who has exceeded the allowable number
                of absences for lecture or laboratory will automatically be
                debarred for the whole 5-unit course.
              </li>
              <li className="mt-5">
                In the summer, the prescribed maximum number of cuts for a
                particular subject is five meeting days. This is regardless of
                the number of units assigned to the subject.
              </li>
            </ul>
          </div>
        </div>
        <p className="mb-5 mt-5">b. &quot;Unli Cuts&quot; Privilege</p>
        <div className="text-blue text-main ml-8">
          <p className="mb-5">
            “Honor students,” i.e., students on the President’s or Dean’s List
            for a given semester are given the privilege of “unlimited cuts” in
            all their courses/subjects during the semester immediately
            following.
          </p>
          <ol className="list-decimal pl-6 mt-5">
            <li className="mt-5">
              While these honor students are responsible, like all other
              students, for all the course requirements as set for the course,
              they have the privilege of “unlimited cuts” in all their courses
              in the semester immediately following and may, therefore not be
              debarred from a course because of absences.
            </li>
            <li className="mt-5">
              Honor students are asked to inform their teachers and provide the
              necessary documentation.
            </li>
          </ol>
        </div>
      </div>

      {/* Scholarship-related Information */}
      <h2 className="text-blue font-bold text-main mt-12">
        4. Scholarship-related Information
      </h2>

      {/* Available scholarship programs offered by the University */}
      <div className="text-blue text-main ml-8">
        <p className="mb-5 mt-5">
          a. Available scholarship programs offered by the University
        </p>
        <div className="ml-8">
          <ol className="list-decimal pl-6 mt-5">
            <li className="mt-5">
              JSF or Jubilee Scholarship Fund (Exclusive for Valedictorians and
              Salutatorians)
            </li>
            <div className="ml-8">
              <ol className="list-[lower-roman] pl-6 mt-5">
                <li className="mt-5">
                  100% Tuition fee free for High School Valedictorians
                </li>
                <li className="mt-5">
                  50% Tuition fee free for High School Salutatorians
                </li>
              </ol>
            </div>
            <li className="mt-5">GIA or Grant-in-Aid</li>
            <div className="ml-8">
              <ol className="list-[lower-roman] pl-6 mt-5">
                <li className="mt-5">10,000 up to 100% tuition and fees</li>
              </ol>
            </div>
          </ol>
        </div>

        {/* Application process */}
        <p className="mb-5 mt-5">b. Application process</p>
        <div className="ml-8">
          <ol className="list-[lower-roman] pl-6 mt-5">
            <li className="mt-5">
              The application process will be administered by the University’s
              Admission and Aid Office. Its process will be publicized on its
              official social media accounts:
            </li>
            <div className="ml-8">
              <ol className="list-decimal pl-6 mt-5">
                <li className="mt-5">
                  Facebook Page: Ateneo de Davao – College Admission and Aid /
                  Ateneo de Davao Scholars Society
                </li>
                <li className="mt-5">Twitter: @addu_scholars</li>
              </ol>
            </div>
          </ol>
        </div>

        {/* Eligibility */}
        <p className="mb-5 mt-5">
          c. Eligibility for the university’s offered scholarship if the student
          is also a scholar of an outside organization/program.
        </p>
        <div className="ml-8">
          <ol className="list-[lower-roman] pl-6 mt-5">
            <li className="mt-5">
              For DOST and CHED grants: Eligible. However, GIA/JSF grant will be
              adjusted if the total scholarship grant of the scholar exceeds the
              student’s total assessment.
            </li>
            <li className="mt-5">
              STEP/EBSU: Not eligible for a GIA scholarship, but still eligible
              for the JSF grant.
            </li>
          </ol>
        </div>

        {/* Grades to maintain in order renew the scholarship */}
        <p className="mb-5 mt-5">
          c. Grades to maintain in order renew the scholarship
        </p>
        <div className="ml-8">
          <ol className="list-[lower-roman] pl-6 mt-5">
            <li className="mt-5">For JSF Grantees: A QPI of 3 (B)</li>
            <li className="mt-5">For GIA Grantees: A QPI of 2.5 (C+)</li>
          </ol>
        </div>
      </div>

      <h2 className="text-blue font-bold text-main mt-12">
        5. Graduation Honors
      </h2>
      <div className="ml-8 text-blue">
        <p className="mb-5 mt-5">
          a. Scholastic requirements for academic honors for graduation are as
          follows:
        </p>
        <div className="ml-8">
          <ol className="list-[lower-roman] pl-6 mt-5">
            <li className="mt-5">
              Summa cum laude - cumulative QPI of 3.80 to 4.00
            </li>
            <li className="mt-5">
              Magna cum laude - cumulative QPI of 3.60 to 3.79
            </li>
            <li className="mt-5">Cum laude - cumulative QPI of 3.40 to 3.59</li>
          </ol>
        </div>
      </div>

      <h2 className="text-blue font-bold text-main mt-12">
        6. The University Student Government and Organizations
      </h2>
      <div className="ml-8 text-blue mb-48">
        <p className="mb-5 mt-5">
          <span className="font-bold">
            a. SAMAHAN NG MAG-AARAL NG PAMATASANG ATENEO DE DAVAO (SAMAHAN)
          </span>{' '}
          - the official student government of the Ateneo de Davao University.
        </p>
        <p className="mb-5 mt-5">
          <span className="font-bold">
            b. COUNCIL OF ORGANIZATIONS OF THE ATENEO - DAVAO (COAD)
          </span>{' '}
          - the umbrella organization of all recognized clubs in the Ateneo de
          Davao University.
        </p>
        <p className="mb-5 mt-5">
          <span className="font-bold">
            c. COUNCIL OF CLASS PRESIDENTS (CCP)
          </span>{' '}
          - is composed of all class presidents (from the first to fifth years)
          elected for the current academic year.
        </p>
        <p className="mb-5 mt-5">
          <span className="font-bold">d. COMELEC</span> - the constitutional
          electoral and independent body of Ateneo de Davao University.
        </p>
      </div>
    </div>
  );
};
export default GeneralInfoPage;

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
          <tr className="text-center">
            <td className="border px-4 py-2">A</td>
            <td className="border px-4 py-2">92% to 100%</td>
            <td className="border px-4 py-2">Excellent</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">B+</td>
            <td className="border px-4 py-2">88% to 91%</td>
            <td className="border px-4 py-2">Very Good</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">B</td>
            <td className="border px-4 py-2">84% to 87%</td>
            <td className="border px-4 py-2">Good</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">C+</td>
            <td className="border px-4 py-2">80% to 83%</td>
            <td className="border px-4 py-2">Satisfactory</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">C</td>
            <td className="border px-4 py-2">76% to 79%</td>
            <td className="border px-4 py-2">Acceptable</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">D</td>
            <td className="border px-4 py-2">72% to 75%</td>
            <td className="border px-4 py-2">Minimal Pass</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">F</td>
            <td className="border px-4 py-2">below 72%</td>
            <td className="border px-4 py-2">Failure</td>
          </tr>
          {/* FD Row */}
          <tr className="text-center">
            <td className="border px-4 py-2">FD</td>
            <td className="border px-4 py-2" colSpan={2}>
              Failure Debarred (for students whose attendance is less than 80%
              of total class hours)
            </td>
          </tr>
          {/* WP Row */}
          <tr className="text-center">
            <td className="border px-4 py-2">WP</td>
            <td className="border px-4 py-2" colSpan={2}>
              Withdrawn with Permission (for students who withdrew all enrolled
              courses within the first six weeks of the semester, or the first
              two weeks of summer classes)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const QPI = () => {
  return (
    <div className="overflow-x-auto mt-5">
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
          <tr className="text-center">
            <td className="border px-4 py-2">A</td>
            <td className="border px-4 py-2">4.0</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">B+</td>
            <td className="border px-4 py-2">3.5</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">B</td>
            <td className="border px-4 py-2">3.0</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">C+</td>
            <td className="border px-4 py-2">2.5</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">C</td>
            <td className="border px-4 py-2">2.0</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">D</td>
            <td className="border px-4 py-2">1.0</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">F</td>
            <td className="border px-4 py-2">0</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">WP</td>
            <td className="border px-4 py-2">Not counted in QPI</td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">No grade</td>
            <td className="border px-4 py-2">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const AllowableAbsences = () => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table-auto border-collapse border w-full text-blue">
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              Any subject meeting once a week
            </td>
            <td className="border px-4 py-2">
              <p>= 3 absences maximum</p>
              <p>= 4 absences over cut</p>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              Any subject meeting twice a week
            </td>
            <td className="border px-4 py-2">
              <p>= 7 absences maximum</p>
              <p>= 8 absences over cut</p>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              Any subject meeting thrice a week
            </td>
            <td className="border px-4 py-2">
              <p>= 10 absences maximum</p>
              <p>= 11 absences over cut</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
