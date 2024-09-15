import { BannerContainer } from '@/components/banner/banner-container/BannerContainer';
import { BannerImage } from '@/components/banner/banner-image/BannerImage';

export const Banner: React.FC = () => {
  return (
    <BannerContainer height="80vh">
      <div className="overflow-hidden ">
        <BannerImage
          title="SAMAHAN"
          subtitle="About"
          image="/images/samahan-members.png"
          imageAlt="SAMAHAN Members Image"
        />
      </div>
    </BannerContainer>
  );
};
