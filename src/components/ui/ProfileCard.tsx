import Image from 'next/image';

interface ProfileCardProps {
  fileName: string;
  fullName: string;
  position: string;
}

const ProfileCard = ({ fullName, position, fileName }: ProfileCardProps) => {
  return (
    <div className="relative w-[250px] h-[380px] text-blue hover:scale-105 transition ease-in-out delay-100">
      <div className="relative">
        {/* blue shape */}
        <div className="absolute bg-blue rounded-[32.5px] w-[250px] h-[250px] translate-y-16" />

        <div className="rounded-[32px] translate-y-[4px] overflow-hidden">
          <Image
            src={`/images/samahan-cutouts/${fileName}`}
            alt={`${fullName}'s Picture`}
            width={250}
            height={380}
            className="relative"
          />
        </div>
      </div>

      {/* text section */}
      <div className="mt-4">
        <p className="text-[18px] font-[700] leading-[21.78px]">{fullName}</p>
        <p className="text-[12px] font-[400]">{position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
