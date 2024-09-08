import type { Meta, StoryObj } from '@storybook/react';

import { SAMAHANMembersBanner } from './SAMAHANMembersBanner';

const meta: Meta<typeof SAMAHANMembersBanner> = {
  component: SAMAHANMembersBanner,
  title: 'Components/Banner/SAMAHANMembersBanner',
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
