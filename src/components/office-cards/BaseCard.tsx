import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const BaseCard: React.FC<{
  imageSrc: string;
  name: string;
  title: string;
  buttonLink: string;
}> = ({ name, title, imageSrc, buttonLink }) => {
  return (
    <div className="relative w-[525px] h-[250px] flex items-center bg-blue text-white max-w-3xl rounded-[32.5px] transition-all duration-300 overflow-visible">
      {/* Officer Image */}
      <div className="absolute left-0 bottom-0 w-1/2 h-auto transform translate-x-[-0.5px] translate-y-[0%] z-0">
        <Image
          src={`/images/samahan-cutouts/${imageSrc}`}
          alt={name}
          width={450}
          height={600}
          className="object-cover"
          priority
        />
      </div>
      {/* Text content */}
      <div className="flex flex-col justify-between ml-auto w-1/2 space-y-2 p-4 z-10 gap-10">
        <div className="text-left">
          <h2 className="font-bold text-thin text-left">{name}</h2>
          <p className="text-main font-normal">{title}</p>
        </div>
        {/* Button */}
        <div className="flex justify-end">
          {buttonLink ? (
            <Link href={buttonLink}>
              <Button text="View Office" colorScheme="white" />
            </Link>
          ) : (
            <Button text="View Office" colorScheme="white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
