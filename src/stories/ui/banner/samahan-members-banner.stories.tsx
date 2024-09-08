import { BannerContainer } from '@/components/banner/banner-container/BannerContainer';
import { BannerOverlay } from '@/components/ui/banner/banner-overlay/BannerOverlay';
import { SAMAHANMembersBanner } from '@/components/ui/banner/samahan-members-banner/SAMAHANMembersBanner';
import type { Meta, StoryObj } from '@storybook/react';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <SAMAHANMembersBanner title="SAMAHAN" subtitle="About" />
    </BannerContainer>
  );
};

const meta: Meta<typeof BannerContainer> = {
  component: Banner,
  title: 'UI/Banner/SAMAHANMembersBanner',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
