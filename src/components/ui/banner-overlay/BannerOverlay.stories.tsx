import type { Meta, StoryObj } from '@storybook/react';

import { BannerOverlay } from './BannerOverlay';

const meta: Meta<typeof BannerOverlay> = {
  component: BannerOverlay,
  title: 'Components/BannerOverlay',
  argTypes: {
    size: {}
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomBackground: Story = {
  args: {},
};