import { BannerContainer } from '@/components/banner/banner-container/BannerContainer';
import { SAMAHANMembersBanner } from '@/components/banner/banner-images/samahan-members-banner/SAMAHANMembersBanner';
import BallFrame from '@/components/ui/BallFrame';

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <div className=" absolute bottom-[-4rem] max-sm:bottom-[-2rem]">
        <BallFrame />
      </div>
      <div className="overflow-hidden ">
        <SAMAHANMembersBanner title="SAMAHAN" subtitle="About" />
      </div>
    </BannerContainer>
  );
};
