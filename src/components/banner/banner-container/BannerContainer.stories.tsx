import type { Meta, StoryObj } from '@storybook/react';

import { BannerContainer } from './BannerContainer';

const meta: Meta<typeof BannerContainer> = {
  component: BannerContainer,
  title: 'Components/Banner/BannerContainer',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
