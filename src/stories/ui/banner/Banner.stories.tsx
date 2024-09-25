import type { Meta, StoryObj } from '@storybook/react';

import { Banner } from '@/components/ui/banner/Banner';

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: 'UI/Banner',
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    image: { control: 'text' },
    imageAlt: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    image: '/images/samahan-members.png',
    imageAlt: 'Default Image Alt',
  },
};
