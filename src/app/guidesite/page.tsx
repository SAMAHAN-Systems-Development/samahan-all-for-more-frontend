import React from 'react';
import { TbCircleNumber1Filled, TbCircleNumber2Filled } from 'react-icons/tb';
import Link from 'next/link';

import { Banner } from '@/components/ui/banner/Banner';
import Button from '@/components/ui/Button';
import guidesiteData from '@/data/guidesiteData.json';

// Table For Roman Numerals
const romanize = (num: number) => {
  const numeralLookup: { [key: string]: number } = {
    ten: 10,
    nine: 9,
    five: 5,
    four: 4,
    one: 1,
  };

  const romanSymbols: { [key: string]: string } = {
    ten: 'x',
    nine: 'ix',
    five: 'v',
    four: 'iv',
    one: 'i',
  };

  let roman = '';
  const keys = Object.keys(numeralLookup); // Get the keys array

  for (const key of keys) {
    const numeral = key as keyof typeof numeralLookup; // Cast key for TypeScript
    while (num >= numeralLookup[numeral]) {
      roman += romanSymbols[numeral]; // Use the symbol from the romanSymbols object
      num -= numeralLookup[numeral];
    }
  }
  return roman;
};

const AssetsFacilitiesTable = () => (
  <table className="table-auto border-collapse w-full">
    <tbody>
      {guidesiteData.assetsFacilities.map((asset, index) => (
        <tr key={index}>
          <td className="border pl-6 pr-3 py-2 text-right">
            <strong>{romanize(index + 1)}.</strong>
          </td>
          <td className="border px-4 py-2">
            <div>{asset.label}</div>
            {asset.nestedInstructions && (
              <ol className="list-decimal list-outside pl-8 mt-2">
                {asset.nestedInstructions.map((instruction, idx) => (
                  <li key={idx} className="my-0">
                    {instruction.replace(/'/g, '&apos;')}
                  </li>
                ))}
              </ol>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const LibraryFacilities = () => (
  <ol className="list-outside list-[lower-roman] mb-4">
    {guidesiteData.libraryFacilities.map((facility, index) => (
      <li key={index}>
        {facility.label}
        {facility.nestedInstructions && (
          <ul className="list-decimal list-inside">
            {facility.nestedInstructions.map(
              (instruction, instructionIndex) => (
                <li key={instructionIndex}>{instruction}</li>
              )
            )}
          </ul>
        )}
      </li>
    ))}
  </ol>
);
const PhysicalPlantOfficeFacilities = () => (
  <ol className="list-outside list-[lower-roman] mb-4">
    {guidesiteData.physicalPlantOffice.map((facility, index) => (
      <li key={index}>
        {facility.label}
        <ol className="list-decimal list-inside ml-6">
          {facility.nestedInstructions.map((instruction, idx) => (
            <li key={idx}>{instruction}</li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
);

const SuzanDoromalFacilities = () => (
  <ol className="list-outside list-[lower-roman] mb-4">
    {guidesiteData.suzanDoromal.map((facility, index) => (
      <li key={index}>
        {facility.label}
        <ol className="list-decimal list-inside ml-6">
          {facility.nestedInstructions.map((instruction, instructionIndex) => (
            <li key={instructionIndex}>{instruction}</li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
);
const IcommpEquipment = () => {
  const { title, mainText, linkText, linkUrl, content } =
    guidesiteData.icommpEquipment;

  // Insert the link into the mainText dynamically
  const mainTextWithLink = mainText.replace(
    'link',
    `<a href="${linkUrl}" class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">${linkText}</a>`
  );

  return (
    <div>
      <h2 className="text-bold font-bold mb-4">{title}</h2>
      <p className="text-main mb-4 ml-10">
        <span
          dangerouslySetInnerHTML={{
            __html: mainTextWithLink,
          }}
        />
      </p>

      {/* Main Equipment List */}
      <ul className="list-decimal list-inside ml-20">
        {content.map((equipment, index) => (
          <li key={index} style={{ fontWeight: 'bold' }}>
            <span style={{ fontWeight: 'normal' }}>{equipment.item}</span>
            {equipment.details && (
              <ol className="list-outside list-[lower-alpha] ml-14">
                <li style={{ fontWeight: 'bold' }}>
                  <span style={{ fontWeight: 'normal' }}>
                    {equipment.details}
                  </span>
                </li>
              </ol>
            )}
          </li>
        ))}
      </ul>

      {/* Button Section */}
      <div className="mt-[15px] ml-[70px]">
        <Button text="Book ICOMMP Equipment" />
      </div>
    </div>
  );
};
const RequestForDocuments = () => {
  const { title, mainText, linkText, linkUrl, content, OSA } =
    guidesiteData.requestDocuments;

  // Insert the link into the mainText dynamically
  const mainTextWithLink = mainText.replace(
    'link',
    `<a href="${linkUrl}" class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">${linkText}</a>`
  );

  return (
    <div>
      <h2 className="text-bold font-bold mb-4">{title}</h2>
      <p className="text-main mb-4 ml-10">
        <span className="font-bold block">Registrar&apos;s Office:</span> <br />
        <span
          dangerouslySetInnerHTML={{
            __html: mainTextWithLink,
          }}
        />
      </p>

      {/* Main Content List */}
      <ul className="list-decimal list-outside ml-24">
        {content.map((document, index) => (
          <li
            key={index}
            className=""
            style={{ fontWeight: 'bold' }} // This will make the numbering bold
          >
            <span className="font-bold">{document.item}</span>
            {document.details && (
              <>
                {' '}
                -- <span className="font-normal">{document.details}</span>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-[15px] ml-[70px]">
        <Button text="Request Registrar's Certificate" />
      </div>

      <div className="mt-8">
        <ul className="list-decimal list-outside ml-10">
          {OSA.map((document, index) => (
            <li
              key={index}
              className="mb-2"
              style={{ fontWeight: 'bold' }} // Make the numbering bold
            >
              <span className="font-normal">{document.item}</span>
              {document.details && (
                <ul className="list-[lower-alpha] list-outside ml-6 font-bold">
                  <li className="font-bold">
                    <span className="font-normal">{document.details}</span>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* Button Section */}
        <div className="mt-[15px] ml-[70px]">
          <Button text="Request Certificate" />
        </div>
      </div>
    </div>
  );
};
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
            <h1 className="text-title font-bold text-blue mb-6 -ml-8 md:-ml-8">
              {title}
            </h1>

            {steps.map((step, index) => (
              <div key={step.number} className="mb-6 text-blue">
                <h2 className="text-main flex items-start">
                  {index === 0 ? (
                    <TbCircleNumber1Filled className="inline-block mr-3 text-3xl h-8 w-8" /> // Added h-8 and w-8
                  ) : (
                    <TbCircleNumber2Filled className="inline-block mr-3 text-3xl h-8 w-8" /> // Added h-8 and w-8
                  )}
                  <div className="flex flex-col">
                    <span className="font-bold">{step.description}</span>
                    {step.linkText && (
                      <span className="inline">
                        Secure required parts of the paper (refer to the concept
                        paper form), and its needed signatures. Afterward,
                        submit it to the Office of the Student Affairs through
                        this link:{' '}
                        <Link
                          href={step.linkUrl}
                          className="underline text-blue ml-1"
                        >
                          {step.linkText}
                        </Link>
                        . Submit your response through this link as well.
                      </span>
                    )}
                  </div>
                </h2>
                {step.assetsLinkText && (
                  <div className="ml-6">
                    <ol className="list-[lower-alpha] list-outside mb-6 mt-3 pl-10">
                      <li>
                        <span>{step.assetsLinkText}</span>
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
              </div>
            ))}
          </section>

          <section>
            <IcommpEquipment />
          </section>

          {/* REQUEST FOR OFFICIAL DOCUMENTS */}
          <section className="mt-10">
            <RequestForDocuments />
          </section>
        </div>
      </div>
    </>
  );
};

export default Guidesite;
