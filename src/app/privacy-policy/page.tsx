import React from 'react';

import Accordion from '@/components/ui/Accordion';
import { Banner } from '@/components/ui/banner/Banner';
import accordionData from '@/data/accordionData.json';
import privacyData from '@/data/privacyData.json';

const Page = () => {
  return (
    <div>
      <Banner />
      <div className="container-2xl mt-40">
        {privacyData.map((section, index) => (
          <div key={index} className="mb-8">
            <p className="text-title text-blue font-bold mb-2">
              {section.title}
            </p>
            <p className="text-main text-blue mb-20">{section.content}</p>

            {section.title === 'SUMMARY OF KEY POINTS' && (
              <>
                {accordionData.map((item, accordionIndex) => (
                  <Accordion
                    key={accordionIndex}
                    title={item.title}
                    content={item.content}
                  />
                ))}

                <div className="mt-14">
                  <p className="text-main text-blue mb-4 text-center">
                    If you have any other questions or need help with our
                    Privacy Policy, don&apos;t hesitate to get in touch.
                    We&apos;re happy to assist and want to make sure you feel
                    confident about how we handle your information. Just email
                    us at{' '}
                    <a href="mailto:samahan@addu.edu.ph" className="font-bold">
                      samahan@addu.edu.ph
                    </a>
                    .
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
