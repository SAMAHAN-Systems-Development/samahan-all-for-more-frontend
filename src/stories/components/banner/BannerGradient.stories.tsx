import type { Meta, StoryObj } from '@storybook/react';

import { BannerGradient } from '@/components/banner/banner-gradient/BannerGradient';

const meta: Meta<typeof BannerGradient> = {
  component: BannerGradient,
  title: 'Components/Banner/BannerGradient',
  argTypes: {
    size: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
