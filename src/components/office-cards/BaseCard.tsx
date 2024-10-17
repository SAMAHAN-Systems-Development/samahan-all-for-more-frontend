import Image from 'next/image';

import Button from '@/components/ui/Button';

const BaseCard: React.FC<{
  imageSrc: string;
  name: string;
  title: string;
}> = ({ name, title, imageSrc }) => {
  return (
    <div className="relative flex items-center bg-blue text-white w-full max-w-[900px] rounded-[30px] md:max-w-[900px] transition-all duration-300 overflow-visible" style={{ height: '400px' }}>
      {/* Officer Image */}
      <div className="absolute left-0 bottom-0 w-[50%] h-auto" style={{ transform: 'translateY(-.1%)' }}>
        <Image
          src={imageSrc}
          alt={name}
          width={450}
          height={600}
          className="object-cover"
          priority
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col ml-auto w-1/2 space-y-2 pl-8 pr-8 z-10">
        <h2 className="text-bold font-bold text-3xl leading-tight mt-1">{name}</h2>
        <p className="text-lg">{title}</p>
        <div className="mt-4">
          <Button text="View Office" colorScheme="white" />
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
