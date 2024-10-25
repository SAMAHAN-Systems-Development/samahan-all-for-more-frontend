import type { Meta, StoryObj } from '@storybook/react';

import BaseCard from '@/components/office-cards/BaseCard';

const meta: Meta<typeof BaseCard> = {
  title: 'Components/OfficeCards',
  component: BaseCard,
  argTypes: {
    name: { control: 'text' },
    title: { control: 'text' },
    imageSrc: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof BaseCard>;

// Story for SAMAHAN President Card
export const PresidentCard: Story = {
  args: {
    name: 'LEEN JULIET LAPATIS',
    title: 'SAMAHAN President',
    imageSrc: '/images/samahan-cutouts/[PRESIDENT] Leen Juliet Lapatis 1.png',
  },
};

// Story for SAMAHAN Vice President Card
export const VicePresidentCard: Story = {
  args: {
    name: 'SUNG GOON ACOSTA',
    title: 'SAMAHAN Vice President',
    imageSrc:
      '/images/samahan-cutouts/[VICE PRESIDENT] Sung Goon L. Acosta.png',
  },
};

// Story for SAMAHAN Secretary-General Card
export const SecretaryGeneralCard: Story = {
  args: {
    name: 'ALIYA MEDIDA',
    title: 'SAMAHAN Secretary-General',
    imageSrc: '/images/samahan-cutouts/[Secretary-General] Aliya R. Medida.png',
  },
};

// Story for SAMAHAN Treasurer Card
export const TreasurerCard: Story = {
  args: {
    name: 'MARY CLAIR CLARDE',
    title: 'SAMAHAN Treasurer',
    imageSrc: '/images/samahan-cutouts/[TREASURER] Mary Clair Clarde.png',
  },
};
