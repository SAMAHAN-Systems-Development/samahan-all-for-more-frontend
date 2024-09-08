import { AFYPBanner } from '@/components/ui/banner/afyp-banner/AFYPBanner';
import { BannerContainer } from '@/components/ui/banner/banner-container/BannerContainer';
import type { Meta, StoryObj } from '@storybook/react';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <AFYPBanner
        subtitle="SAMAHAN NG MGA MAG-AARAL NG PAMANTASANG ATENEO DE DAVAO"
        subheader="The Student Government of the College Unit of Ateneo de Davao University"
      />
    </BannerContainer>
  );
};

const meta: Meta<typeof BannerContainer> = {
  component: Banner,
  title: 'UI/Banner/AFYPBanner',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
