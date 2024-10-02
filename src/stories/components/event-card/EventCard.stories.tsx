import type { Meta, StoryObj } from '@storybook/react';

import { EventCard } from '@/components/event-card/EventCard';

const meta: Meta<typeof EventCard> = {
  component: EventCard,
  title: 'Components/EventCard/EventCard',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
