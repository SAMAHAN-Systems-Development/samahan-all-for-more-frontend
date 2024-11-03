import { MdPeople } from 'react-icons/md';

import type { Meta, StoryObj } from '@storybook/react';

import { EventCardTag } from '@/components/event-finder/event-card/EventCardTag';

const meta: Meta<typeof EventCardTag> = {
  component: EventCardTag,
  title: 'Components/EventCard/EventCardTag',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '',
    icon: <div />,
  },
};

export const WithValues: Story = {
  args: {
    title: 'Open to all AdDU students',
    icon: <MdPeople size={20} className="rounded-full" />,
  },
};
