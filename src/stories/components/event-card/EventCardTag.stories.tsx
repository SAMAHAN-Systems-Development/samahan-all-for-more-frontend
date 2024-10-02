import type { Meta, StoryObj } from '@storybook/react';

import { EventCardTag } from '@/components/event-card/EventCardTag';

const meta: Meta<typeof EventCardTag> = {
  component: EventCardTag,
  title: 'Components/EventCard/EventCardTag',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
