import type { Meta, StoryObj } from '@storybook/react';

import { BannerContainer } from '@/components/banner/banner-container/BannerContainer';
import { SAMAHANMembersBanner } from '@/components/banner/banner-images/samahan-members-banner/SAMAHANMembersBanner';
import BallFrame from '@/components/ui/BallFrame';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BallFrame />
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
