import { BannerContainer } from '@/components/banner-section/banner-container/BannerContainer';
import { BannerImage } from '@/components/banner-section/banner-image/BannerImage';

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
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
