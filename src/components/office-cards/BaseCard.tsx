import Image from 'next/image';

import Button from '@/components/ui/Button';

const BaseCard: React.FC<{
  imageSrc: string;
  name: string;
  title: string;
}> = ({ name, title, imageSrc }) => {
  return (
    <div className="flex relative items-center p-6 bg-blue text-white w-full max-w-[800px] rounded-[30px] md:max-w-[900px] transition-all duration-300">
      {/* Officer Image */}
      <div className="w-1/3 h-auto">
        <Image
          src={imageSrc}
          alt={name}
          width={400}
          height={400}
          className="object-contain"
          priority
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col w-2/3 pl-4 space-y-2">
        <h2 className="text-bold font-bold leading-tight mt-1">{name}</h2> 
        <p className="text-thin">{title}</p> 
      </div>

      {/* Button positioned to bottom-right */}
      <div className="absolute bottom-6 right-6">
        <Button text="View Office" colorScheme="white" />
      </div>
    </div>
  );
};

export default BaseCard;
