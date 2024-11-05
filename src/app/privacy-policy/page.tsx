import React from 'react';

import Accordion from '@/components/ui/Accordion';
import { Banner } from '@/components/ui/banner/Banner';
import Button from '@/components/ui/Button';
import accordionData from '@/data/accordionData.json';
import privacyData from '@/data/privacyData.json';
import Link from 'next/link';

const formatEmail = (content: string) => {
  const email = 'samahan@addu.edu.ph';
  const mailtoLink = `<a href="mailto:${email}" class="font-bold">${email}</a>`;
  return content.replace(new RegExp(email, 'g'), mailtoLink);
};

const renderContent = (content: string | string[]) => {
  if (Array.isArray(content)) {
    return (
      <div className="text-main text-blue mb-20">
        {typeof content[0] === 'string' && <p className="mb-4">{content[0]}</p>}
        <ul className="list-disc ml-5">
          {content.slice(1).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <p className="text-main text-blue mb-20">
      <span dangerouslySetInnerHTML={{ __html: formatEmail(content) }} />
    </p>
  );
};

const renderAccordion = () => {
  return (
    <>
      {accordionData.map((item, index) => {
        const updatedContent = formatEmail(item.content);
        return (
          <Accordion
            key={index}
            title={item.title}
            content={
              <span dangerouslySetInnerHTML={{ __html: updatedContent }} />
            }
          />
        );
      })}
      <div className="mt-14 flex flex-col items-center">
        <p className="text-main text-blue mb-4 text-center">
          If you have any other questions or need help with our Privacy Policy,
          don&apos;t hesitate to get in touch. We&apos;re happy to assist and
          want to make sure you feel confident about how we handle your
          information. Just email us at{' '}
          <a href="mailto:samahan@addu.edu.ph" className="font-bold">
            samahan@addu.edu.ph
          </a>
          .
        </p>
        <Link href="mailto:samahan@addu.edu.ph">
          <Button text="CONTACT US" />
        </Link>
      </div>
    </>
  );
};

const Page = () => {
  return (
    <div>
      <Banner
        image={'/images/privacypolicy-banner.jpg'}
        imageAlt={'Privacy Policy Image'}
        subtitle={'SAMAHAN'}
        title={'Privacy Policy'}
      />
      <div className="container-2xl mt-40 px-20">
        {privacyData.map((section, index) => (
          <div key={index} className="mb-8">
            <p className="text-title text-blue font-bold mb-2">
              {section.title}
            </p>

            {renderContent(section.content)}

            {section.title === 'SUMMARY OF KEY POINTS' && renderAccordion()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
