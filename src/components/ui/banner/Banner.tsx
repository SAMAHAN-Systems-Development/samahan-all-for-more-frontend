import { BannerContainer } from '@/components/banner-section/banner-container/BannerContainer';
import { BannerImage } from '@/components/banner-section/banner-image/BannerImage';

interface BannerProps {
  image: string;
  imageAlt: string;
  subtitle: string;
  title: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  image,
  imageAlt,
}) => {
  return (
    <BannerContainer>
      <div className="overflow-auto">
        <BannerImage
          title={title}
          subtitle={subtitle}
          image={image}
          imageAlt={imageAlt}
        />
      </div>
    </BannerContainer>
  );
};
