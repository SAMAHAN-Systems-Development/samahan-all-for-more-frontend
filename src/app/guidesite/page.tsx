import React from 'react';
import Link from 'next/link';

import { Banner } from '@/components/ui/banner/Banner';
import guidesiteData from '@/data/guidesiteData.json';
import { AssetsFacilitiesTable } from '@/components/guidesite/Facilities';
import { LibraryFacilities } from '@/components/guidesite/Facilities';
import { PhysicalPlantOfficeFacilities } from '@/components/guidesite/Facilities';
import { SuzanDoromalFacilities } from '@/components/guidesite/Facilities';
import { IcommpEquipment } from '@/components/guidesite/Facilities';
import { RequestForDocuments } from '@/components/guidesite/Facilities';

const Guidesite = () => {
  const { title, steps } = guidesiteData.venueReservations;
  return (
    <>
      <Banner
        image={'/images/samahan-members.png'}
        imageAlt={'SAMAHAN Members'}
        subtitle={'SAMAHAN'}
        title={'GUIDESITE'}
      />
      <div className="text-blue font-sans px-8 md:px-32 py-10 bg-gray-100">
        <div className="max-w-screen-lg mx-auto">
          <section>
            <h2 className="text-bold font-bold mb-4 pt-20">{title}</h2>

            <ol className="list-decimal pl-5">
              {steps.map((step) => (
                <li key={step.number} className="mb-6 text-blue">
                  <div className="flex flex-col">
                    <span>
                      <span className="font-bold">{step.description}</span>

                      {step.linkText && (
                        <>
                          Secure required parts of the paper (refer to the
                          concept paper form), and its needed signatures.
                          Afterward, submit it to the Office of the Student
                          Affairs through this link:
                          <Link
                            href={step.linkUrl}
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
                              href={step.assetsLinkUrl}
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
                              {guidesiteData.bookingLinks.map((link, index) => (
                                <div key={index}>
                                  <Link
                                    href={link.href}
                                    className="underline text-blue"
                                  >
                                    {link.label}
                                  </Link>{' '}
                                  for the following library facilities:
                                  <div className="ml-6">
                                    <LibraryFacilities />
                                  </div>
                                </div>
                              ))}
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
                      </ol>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <section>
            <IcommpEquipment />
          </section>

          <section className="mt-10">
            <RequestForDocuments />
          </section>
        </div>
      </div>
    </>
  );
};

export default Guidesite;
