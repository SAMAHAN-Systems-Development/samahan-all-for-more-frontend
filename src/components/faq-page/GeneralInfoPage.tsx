'use client';

import AllowableAbsences from '@/components/faq-page/faq-page-tables/AllowableAbsences';
import QPI from '@/components/faq-page/faq-page-tables/QPI';
import WPA from '@/components/faq-page/faq-page-tables/WPA';
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
          <Button
            text="View Directory"
            onClick={() =>
              window.open(
                '/charts/SchoolDeansandDepartmentHeads.pdf',
                '_blank',
                'noopener,noreferrer'
              )
            }
          />
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
