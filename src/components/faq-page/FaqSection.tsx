import React from 'react';

import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import FakeData from '@/data/accordionData.json';
import EmailData from '@/data/emailDataFaq.json';

const FaqSection = () => {
  return (
    <div>
      <div className="p-16 mx-6">
        <h1 className="text-blue font-bold text-bold mb-8 mt-12">
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
        {FakeData.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
        <h1 className="flex items-center flex-col text-blue font-bold text-thin mb-7 mt-12">
          Enrollment and Registration
        </h1>
        {FakeData.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}

        <div className="flex justify-center items-center flex-col mt-28">
          <p className="text-blue text-footer text-center mb-6">
            If you have any other questions or need help with our Privacy
            Policy, don&apos;t hesitate to get in touch. We&apos;re happy to
            assist and want to make sure you feel confident about how we handle
            your information. Just email us at
            <span className="font-bold"> samahan@addu.edu.ph</span>
          </p>
          <Button text="CONTACT US" />
        </div>
      </div>
    </div>
  );
};
export default FaqSection;
