import type { Meta, StoryObj } from '@storybook/react';

import { BannerTest } from './BannerTest';

const meta: Meta<typeof BannerTest> = {
  component: BannerTest,
  title: 'Components/BannerTest',
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