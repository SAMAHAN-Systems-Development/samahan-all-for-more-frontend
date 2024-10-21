// components/Steps.tsx
import React from 'react';
import Link from 'next/link';

import {
  AssetsFacilitiesTable,
  LibraryFacilities,
  PhysicalPlantOfficeFacilities,
  SuzanDoromalFacilities,
  HisFlexRoomFacilities,
} from '@/components/guidesite/Facilities';
import guidesiteData from '@/data/guidesiteData.json';

interface Step {
  description: string;
  number: number;
  assetsLinkText?: string;
  assetsLinkUrl?: string;
  assetsTable?: boolean;
  linkText?: string;
  linkUrl?: string;
}

interface StepsProps {
  steps: Step[];
}

const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (
    <ol className="list-decimal pl-5">
      {steps.map((step) => (
        <li key={step.number} className="mb-6 text-blue">
          <div className="flex flex-col">
            <span>
              <span className="font-bold">{step.description}</span>

              {step.linkText && (
                <>
                  Secure required parts of the paper (refer to the concept paper
                  form), and its needed signatures. Afterward, submit it to the
                  Office of the Student Affairs through this link:
                  <Link
                    href={step.linkUrl || '#'}
                    className="underline text-blue ml-1"
                  >
                    {step.linkText}
                  </Link>
                  . Submit your response through this link as well.
                </>
              )}

              {step.assetsLinkText && (
                <>
                  <span className="ml-1 font-normal">
                    Channels may vary depending on your chosen venue:
                  </span>
                </>
              )}
            </span>
          </div>

          {step.assetsLinkText && (
            <div className="ml-6">
              <ol className="list-[lower-alpha] list-outside mb-6 mt-3 pl-10">
                <li>
                  <span>
                    <Link
                      href={step.assetsLinkUrl || '#'}
                      className="text-blue underline ml-1"
                    >
                      {step.assetsLinkText}
                    </Link>
                    <span className="font-normal">
                      {' '}
                      for the following assets:
                    </span>
                  </span>
                  {step.assetsTable && (
                    <div className="mt-2">
                      <AssetsFacilitiesTable />
                    </div>
                  )}
                </li>
                <li>
                  <span>
                    <div className="mt-3">
                      {guidesiteData.bookingLinks.length > 0 && (
                        <div key={0}>
                          <Link
                            href={guidesiteData.bookingLinks[0].href}
                            className="underline text-blue"
                          >
                            {guidesiteData.bookingLinks[0].label}
                          </Link>{' '}
                          for the following library facilities:
                          <div className="ml-6">
                            <LibraryFacilities />
                          </div>
                        </div>
                      )}
                    </div>
                  </span>
                </li>
                <li>
                  <span>
                    <div className="mt-3">
                      Physical Plant Office for:
                      <div className="ml-6">
                        <PhysicalPlantOfficeFacilities />
                      </div>
                    </div>
                  </span>
                </li>
                <li>
                  <span>
                    <div className="mt-3">
                      Ma’am Suzanne Doromal, for:
                      <div className="ml-6">
                        <SuzanDoromalFacilities />
                      </div>
                    </div>
                  </span>
                </li>
                <li>
                  <span>
                    <div className="mt-3">
                      {guidesiteData.bookingLinks.length > 0 && (
                        <div key={0}>
                          <Link
                            href={guidesiteData.bookingLinks[1].href}
                            className="underline text-blue"
                          >
                            {guidesiteData.bookingLinks[1].label}
                          </Link>{' '}
                          for:
                          <div className="ml-6">
                            <HisFlexRoomFacilities />
                          </div>
                        </div>
                      )}
                    </div>
                  </span>
                </li>
              </ol>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Steps;
