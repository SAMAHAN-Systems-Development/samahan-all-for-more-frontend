import Image from 'next/image';
import Button from '@/components/ui/Button';

const BaseCard: React.FC<{
  imageSrc: string;
  name: string;
  title: string;
}> = ({ name, title, imageSrc }) => {
  return (
    <div className="relative flex items-center bg-blue text-white w-full max-w-3xl rounded-[32.5px] transition-all duration-300 overflow-visible h-[400px]">
      {/* Officer Image */}
      <div className="absolute left-0 bottom-0 w-1/2 h-auto transform translate-x-[-0.5px] translate-y-[0%] z-0">
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
        <h2 className="font-bold text-3xl leading-tight mt-1">{name}</h2>
        <p className="text-lg">{title}</p>
        <div className="absolute bottom-7 right-7 z-20">
          <Button text="View Office" colorScheme="white" />
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
