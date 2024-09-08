import type { Meta, StoryObj } from '@storybook/react';

import { AFYPBanner } from './AFYPBanner';

const meta: Meta<typeof AFYPBanner> = {
  component: AFYPBanner,
  title: 'Components/Banner/AFYPBanner',
  argTypes: {
    title: {},
    subtitle: {},
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
