import type { Meta, StoryObj } from '@storybook/react';

import { BannerImage } from '@/components/banner-section/banner-image/BannerImage';

const meta: Meta<typeof BannerImage> = {
  component: BannerImage,
  title: 'Components/BannerSection/BannerImage',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
