import { BannerContainer } from '@/components/banner/banner-container/BannerContainer';
import { BannerImage } from '@/components/banner/banner-image/BannerImage';
import BallFrame from '@/components/ui/BallFrame';

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <div className=" absolute bottom-[-4rem] max-sm:bottom-[-2rem]">
        <BallFrame />
      </div>
      <div className="overflow-hidden ">
        <BannerImage title="SAMAHAN" subtitle="About" />
      </div>
    </BannerContainer>
  );
};
