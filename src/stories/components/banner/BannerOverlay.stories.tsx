import type { Meta, StoryObj } from '@storybook/react';

import { BannerOverlay } from '@/components/banner/banner-overlay/BannerOverlay';

const meta: Meta<typeof BannerOverlay> = {
  component: BannerOverlay,
  title: 'Components/Banner/BannerOverlay',
  argTypes: {
    size: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
