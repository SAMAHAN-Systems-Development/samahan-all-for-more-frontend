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
          <td className="border px-4 py-2 text-right">
            <strong>{romanize(index + 1)}.</strong>
          </td>
          <td className="border px-4 py-2">
            <div>{asset.label}</div>
            {asset.nestedInstructions && (
              <ol className="list-decimal list-outside pl-8 mt-2">
                {asset.nestedInstructions.map((instruction, idx) => (
                  <li key={idx} className="mt-2">
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

const IcommpEquipment = () => (
  <div>
    <h2 className="text-bold font-bold mb-4">
      {guidesiteData.icommpEquipment.title}
    </h2>
    <p className="text-main mb-4 ml-10">
      {guidesiteData.icommpEquipment.mainText}
    </p>

    {/* Main Equipment List with Bold Decimal Markers */}
    <ul className="list-decimal list-inside ml-20">
      {guidesiteData.icommpEquipment.content.map((equipment, index) => (
        <li key={index} className="" style={{ fontWeight: 'bold' }}>
          {' '}
          <span style={{ fontWeight: 'normal' }}>{equipment.item}</span>
          {equipment.details && (
            <ol className="list-outside list-[lower-alpha] ml-14">
              <li style={{ fontWeight: 'bold' }}>
                {/* Bold alpha marker */}
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

const RequestForDocuments = () => (
  <div>
    <h2 className="text-bold font-bold mb-4">
      {guidesiteData.requestDocuments.title}
    </h2>
    <p className="text-main mb-4 ml-10">
      <span className="font-bold block">Registrar&apos;s Office:</span> <br />
      <span
        dangerouslySetInnerHTML={{
          __html: guidesiteData.requestDocuments.mainText,
        }}
      />
    </p>

    {/* Main Content List */}
    <ul className="list-decimal list-outside ml-24">
      {guidesiteData.requestDocuments.content.map((document, index) => (
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

    {/* Button Section */}
    <div className="mt-[15px] ml-[70px]">
      <Button text="Request Registrars Certificate" />
    </div>

    {/* New Section Below Button */}
    <div className="mt-8">
      <ul className="list-decimal list-outside ml-10">
        {guidesiteData.requestDocuments.OSA.map((document, index) => (
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

const Guidesite = () => {
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
              VENUE RESERVATIONS
            </h1>
            <div className="mb-6 text-blue">
              <h2 className="text-main">
                <TbCircleNumber1Filled className="inline-block mr-3 text-3xl" />
                <strong className="font-bold">
                  Craft the concept paper for your event/activity.
                </strong>{' '}
                Secure required parts of the paper (refer to the concept paper
                form), and its needed signatures. Afterward, submit it to the
                Office of the Student Affairs through this link:{' '}
                <Link href="#" className="underline text-blue ml-1">
                  Concept Paper Form
                </Link>
                . Submit your response through this link as well.
              </h2>
            </div>

            <div className="mb-6 text-blue">
              <h2 className="text-main">
                <TbCircleNumber2Filled className="inline-block mr-3 text-3xl" />
                <strong>
                  Once approved, you may proceed with booking your desired
                  venue.{' '}
                </strong>
                Channels may vary depending on your chosen venue:
              </h2>

              <div className="ml-6">
                <ol className="list-[lower-alpha] list-outside mb-6 mt-3 pl-4">
                  <li>
                    <span>booking.addu.edu.ph for the following assets:</span>
                    <div className="mt-2">
                      <AssetsFacilitiesTable />
                    </div>
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
            </div>
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
