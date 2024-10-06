import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import AdvocasixModal from '@/components/ui/Advocasix Modal/AdvocasixModal';
import advocasixData from '@/data/advocasixData.json';

const meta: Meta<typeof AdvocasixModal> = {
  title: 'AdvocasixModal',
  component: AdvocasixModal,
};

export default meta;

type Story = StoryObj<typeof AdvocasixModal>;

export const AdvocasixModals: Story = {
  render: () => (
    <div>
      {advocasixData.map((modal, index) => (
        <AdvocasixModal
          key={index}
          title={modal.title}
          content={modal.content}
          image={modal.image}
        />
      ))}
    </div>
  ),
};
