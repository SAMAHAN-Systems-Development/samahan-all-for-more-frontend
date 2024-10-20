import type { Meta, StoryObj } from '@storybook/react';

import BulletinCard from '@/components/ui/BulletinCard';

const meta: Meta<typeof BulletinCard> = {
  component: BulletinCard,
  title: 'UI/BulletinCard',
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    author: { control: 'text' },
    published_at: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Sample Title',
    content: 'Sample Content',
    author: 'Sample Author',
    published_at: '2024-10-11',
    // pdfAttachments: undefined,  <-- leave this out for Storybook purposes
  },
};
