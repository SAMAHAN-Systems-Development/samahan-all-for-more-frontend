import React from 'react';

import Q12 from '@/components/faq-page/faq-page-tables/Q12';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import EmailData from '@/data/emailDataFaq.json';
import EnrollmentAndRegistrationData1 from '@/data/enrollmentAndRegistrationData1.json';
import EnrollmentAndRegistrationData2 from '@/data/enrollmentAndRegistrationData2.json';
import Link from 'next/link';
const FaqSection = () => {
  return (
    <div className="sm:mx-24 mx-8">
      <div className="">
        <h1 className="text-blue font-bold text-3xl sm:text-title mb-8 mt-12 leading-relaxed">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        {/* Emails */}
        <h1 className="flex items-center flex-col text-blue font-bold text-thin mb-7 mt-12">
          Email
        </h1>
        {EmailData.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}

        {/* Online Learning */}
        <h1 className="flex items-center flex-col text-blue font-bold text-thin mb-7 mt-12">
          Online Learning
        </h1>
        <Accordion
          title="What applications will the professor use?"
          content={
            <div>
              <p>
                Professors will be using Daigler20
                (https://daigler20.addu.edu.ph) as the official medium to post
                their assignments and assessments, and to receive the outputs
                from their students.
              </p>
              <br />
              <p>
                For video conferences, Google Meet, Zoom, or the Big Blue Button
                (via Daigler) may be used.
              </p>
            </div>
          }
        />

        {/* Scholarships */}
        <h1 className="flex items-center flex-col text-blue font-bold text-thin mb-7 mt-12">
          Scholarships
        </h1>

        {/* Q1 */}
        <Accordion
          title="What are the available scholarship grants that AdDU offers?"
          content={
            <div className="ml-4">
              <ol className="list-decimal ">
                <li>
                  Jubilee Scholarship Fund (Exclusive for Valedictorian and
                  Salutatorian)
                </li>
                <li>Grant-In-Aid</li>
                <li>Working Scholar Program</li>
              </ol>
            </div>
          }
        />

        {/* Q2 */}
        <Accordion
          title="How much is/are the grants given to the scholars?"
          content={
            <div className="ml-4">
              <ol className="list-decimal ">
                <li>
                  Jubilee Scholarship Fund (Exclusive for Valedictorian and
                  Salutatorian)
                  <ul className="list-disc ml-10">
                    <li>For Valedictorians, 100% Tuition Fee Discount ONLY</li>
                    <li>For Salutatorians, 50% Tuition Fee Discount ONLY</li>
                  </ul>
                </li>
                <li>Grant-In-Aid</li>
                <ul className="list-disc ml-10">
                  <li>Php 10,000.00 up to 100% Tuition and Fees Discount</li>
                </ul>
                <li>Working Scholar Program</li>
                <ul className="list-disc ml-10">
                  <li>Php 15,000.00</li>
                </ul>
              </ol>
            </div>
          }
        />

        {/* Q3 */}
        <Accordion
          title="How to apply for the scholarship grant?"
          content={
            <div>
              <p>
                The application process will be done face to face during the
                enrollment period which will be posted on the following social
                media accounts for further information:
              </p>
              <div className="ml-[3.5rem]">
                <ol className="list-disc">
                  <li>
                    Facebook Page: Ateneo de Davao - College Admission and Aid
                  </li>
                  <li>Ateneo de Davao Scholar’s Society</li>
                  <li>X (Formerly known as Twitter): (@addu_scholars)</li>
                </ol>
              </div>
            </div>
          }
        />

        {/* Q4 */}
        <Accordion
          title="Is it okay to apply if a student already has an external (government) grant?"
          content={
            <div className="ml-4">
              <ol className="list-decimal ">
                <li>
                  For DOST and CHED grantees: It is allowed however, GIA/JSF
                  grant will be adjusted if the total scholarship grant of the
                  scholar exceeds the student’s total assessment.
                </li>
                <li>
                  For STEP/EBSU grantees: It is not allowed to apply for the GIA
                  grant. But they will allow for the JSF grant.
                </li>
              </ol>
            </div>
          }
        />

        {/* Q5 */}
        <Accordion
          title="What are the requirements?"
          content={
            <div className="ml-4">
              <ol className="list-decimal ">
                <li>
                  For JSF:
                  <ul className="list-disc ml-10">
                    <li>Senior High School Report Card</li>
                    <li>Valedictorian or Salutatorian Certification</li>
                    <li>Certificate of Good Moral Character</li>
                    <li>Filled out application form</li>
                  </ul>
                </li>
                <li>For GIA and WSP:</li>
                <ul className="list-disc ml-10">
                  <li>
                    Senior High School Report Card with at least 85% and above
                    average
                  </li>
                  <li>
                    ITR for both parents who are working OR Certificate of
                    Low/No Income from the Barangay stamp by BIR
                  </li>
                  <li>Answered Essay</li>
                  <li>Certificate of Good Moral Character</li>
                  <li>Filled out application form</li>
                </ul>
              </ol>
            </div>
          }
        />

        {/* Q6 */}
        <Accordion
          title="Is there a grade that scholars need to maintain?"
          content={
            <div className="ml-4">
              <ol className="list-decimal ">
                <li>For JSF: A minimum annual QPI of 3.0 (B)</li>
                <li>For GIA and WSP: A minimum annual QPI of 2.5 (C+)</li>
              </ol>
            </div>
          }
        />

        {/* Q7 */}
        <Accordion
          title="Is it required to render a service to the university offices? If so, how many hours are needed?"
          content="Yes, scholars are now required to render service. The required number of hours of rendering of service depends on the amount of the scholarship grant. (Php 1,000.00 = 1 hour)"
        />

        {/* Enrollment and Registration */}
        <h1 className="flex items-center flex-col text-blue font-bold text-thin mb-7 mt-12">
          Enrollment and Registration
        </h1>

        {/* Q1 */}
        <Accordion
          title="What is pre-registration and how can it be done?"
          content={
            <div>
              <p>
                Pre-registration is the prelisting of students, prior to the
                enrollment period, of courses they desire to take or basing in
                their required course curriculum for the succeeding semester.
                Students may enlist in classes, depending on slot availability.
              </p>
              <br />
              <p>
                This process is done online via sis.addu.edu.ph which shall
                commence on the period as set and announced in the same portal.
              </p>
            </div>
          }
        />

        {/* Q2-Q3 */}
        {EnrollmentAndRegistrationData1.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}

        {/* Q4 */}
        <Accordion
          title="Why does a student have un-updated registration during enrollment?"
          content={
            <div>
              <p>
                The student’s enrollment registration for the current
                semester/summer term is not updated/created yet due to:
              </p>
              <div className="ml-[3.5rem]">
                <ul className="list-disc">
                  <li>
                    Finance Hold – A hold coming from the finance office which
                    requires students to pay their outstanding balances for the
                    previous semester.
                  </li>
                  <li>
                    OSA Hold – A hold coming from the Office of Student Affairs
                    (OSA) for uncompleted or non-compliance with directives/call
                    slips relating to violations of the student handbook (e.g.,
                    uniform, ID, validation, etc.)
                  </li>
                  <li>
                    Department Hold – A hold coming from the respective
                    department to require students to contact their departments
                    to fulfill certain requirements.
                  </li>
                  <li>
                    QPI Hold – For not obtaining the required QPI to be retained
                    in the University. The student has to contact the concerned
                    department/office to settle and unblock the hold before his
                    registration is created.
                  </li>
                </ul>
              </div>
            </div>
          }
        />

        {/* Q5-Q11 */}
        {EnrollmentAndRegistrationData2.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}

        {/* Q12 */}
        <Accordion
          title="What are the financial implications of withdrawal?"
          content={
            <div>
              <p>
                The University may withhold or charge the following amounts for
                the withdrawal, varying on the period when the same is made.
              </p>
              <br />
              <Q12 />
              <br />
              <p>
                As the withdrawal charge changes according to the period when it
                is settled or paid, this must be paid right away upon request
                for withdrawal to avoid the escalating charges.
              </p>
            </div>
          }
        />

        <div className="flex justify-center items-center flex-col mt-28">
          <p className="text-blue text-footer text-center mb-6">
            If you have any other questions or need help with our Privacy
            Policy, don&apos;t hesitate to get in touch. We&apos;re happy to
            assist and want to make sure you feel confident about how we handle
            your information. Just email us at
            <span className="font-bold"> samahan@addu.edu.ph</span>
          </p>
          <Link href="mailto:samahan@addu.edu.ph">
            <Button text="CONTACT US" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FaqSection;
