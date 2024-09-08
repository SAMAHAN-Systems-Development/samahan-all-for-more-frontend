import type { Meta, StoryObj } from '@storybook/react';

import { BannerImage } from './BannerImage';

const meta: Meta<typeof BannerImage> = {
  component: BannerImage,
  title: 'Components/Banner/BannerImage',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
