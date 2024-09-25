import type { Meta, StoryObj } from '@storybook/react';

import { Banner } from '@/components/ui/banner/Banner';

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: 'UI/Banner',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
