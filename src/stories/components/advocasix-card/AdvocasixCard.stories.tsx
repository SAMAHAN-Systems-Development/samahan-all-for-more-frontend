import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import AdvocasixCard from '@/components/ui/Advocasix/AdvocasixCard';
import AdvocasixDescription from '@/components/ui/Advocasix/AdvocasixDescription';
import advocasixCardData from '@/data/advocasixCardData.json'; // Update import to your correct JSON file

const meta: Meta<typeof AdvocasixCard> = {
  title: 'AdvocasixCard',
  component: AdvocasixCard,
};

export default meta;

type Story = StoryObj<typeof AdvocasixCard>;

export const AdvocasixCards: Story = {
  render: () => (
    <div>
      <AdvocasixDescription />
      <AdvocasixCard data={advocasixCardData} />{' '}
    </div>
  ),
};
