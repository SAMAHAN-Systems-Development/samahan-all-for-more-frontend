import React from 'react';
import Link from 'next/link';

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
  const keys = Object.keys(numeralLookup);

  for (const key of keys) {
    const numeral = key as keyof typeof numeralLookup;
    while (num >= numeralLookup[numeral]) {
      roman += romanSymbols[numeral];
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

const HisFlexRoomFacilities = () => (
  <ol className="list-outside list-[lower-roman] mb-4">
    {guidesiteData.hisflexRoom.map((facility, index) => (
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

  const mainTextWithLink = mainText.replace(
    'link',
    `<a href="${linkUrl}" class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">${linkText}</a>`
  );

  return (
    <div>
      <h2 className="text-bold font-bold mb-4 pt-10">{title}</h2>
      <p className="text-main mb-4 ml-10">
        <span
          dangerouslySetInnerHTML={{
            __html: mainTextWithLink,
          }}
        />
      </p>
      <ul className="list-decimal list-outside ml-20">
        {content.map((equipment, index) => (
          <li key={index} className="font-bold">
            <span className="font-normal">{equipment.item}</span>
            {equipment.details && (
              <ol className="list-outside list-[lower-alpha] ml-14">
                <li className="font-bold">
                  <span className="font-normal">{equipment.details}</span>
                </li>
              </ol>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-[15px] ml-[70px]">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfZECyMcQ7dCiQUr8dosFKrdfuoExv_9AxDNQzMZ8oWzimhHQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="Book ICOMMP Equipment" />
        </a>
      </div>
    </div>
  );
};

const RequestForDocuments = () => {
  const { title, mainText, linkText, linkUrl, content, OSA } =
    guidesiteData.requestDocuments;

  const mainTextWithLink = mainText.replace(
    'link',
    `<a href="${linkUrl}" class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">${linkText}</a>`
  );

  return (
    <div>
      <h2 className="text-bold font-bold mb-4 pt-10">{title}</h2>
      <p className="text-main mb-4 ml-10">
        <span className="font-bold block">Registrar&apos;s Office:</span> <br />
        <span
          dangerouslySetInnerHTML={{
            __html: mainTextWithLink,
          }}
        />
      </p>

      <ul className="list-decimal list-outside ml-24">
        {content.map((document, index) => (
          <li key={index} className="font-bold">
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
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfD7NdpLyGHiFTzhDTwadbOaJ-6SM5oVwFmGi7869z0nHDxAQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="Request Registrar's Certificate" />
        </a>
      </div>

      <div className="mt-8">
        <ul className="list-decimal list-outside ml-10">
          <span className="font-bold block">
            Office of the Student Affairs:
          </span>
          {OSA.map((document, index) => (
            <li key={index} className="mb-2 ml-5 font-bold">
              <span className="font-normal">{document.item}</span>

              <ul className="list-[lower-alpha] list-outside ml-6 font-bold">
                <li className="font-bold">
                  <span className="font-normal">
                    {document.details.mainText.split('link')[0]}
                    <Link
                      href={document.details.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue"
                    >
                      {document.details.linkText}
                    </Link>
                    {document.details.mainText.split('link')[1]}
                  </span>
                </li>
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-[15px] ml-[70px] pb-16">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2yDCKM-mBypxukNhE5i0ersX59JjDFObSVGuP8UkenS8kMA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="Request Certificate" />
          </a>
        </div>
      </div>
    </div>
  );
};

export {
  AssetsFacilitiesTable,
  LibraryFacilities,
  PhysicalPlantOfficeFacilities,
  SuzanDoromalFacilities,
  IcommpEquipment,
  RequestForDocuments,
  HisFlexRoomFacilities,
};
