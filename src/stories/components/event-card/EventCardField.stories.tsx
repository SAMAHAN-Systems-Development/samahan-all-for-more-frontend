import type { Meta, StoryObj } from '@storybook/react';

import { EventCardField } from '@/components/event-card/EventCardField';

const meta: Meta<typeof EventCardField> = {
  component: EventCardField,
  title: 'Components/EventCard/EventCardField',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
