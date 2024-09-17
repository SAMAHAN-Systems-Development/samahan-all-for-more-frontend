import type { Meta, StoryObj } from '@storybook/react';

import { BannerImageContainer } from '@/components/banner-section/banner-image-container/BannerImageContainer';

const meta: Meta<typeof BannerImageContainer> = {
  component: BannerImageContainer,
  title: 'Components/BannerSection/BannerImageContainer',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
