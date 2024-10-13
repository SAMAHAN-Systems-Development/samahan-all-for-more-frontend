import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import type { Meta, StoryObj } from '@storybook/react';

import { EventCardField } from '@/components/event-finder/event-card/EventCardField';

const meta: Meta<typeof EventCardField> = {
  component: EventCardField,
  title: 'Components/EventCard/EventCardField',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '',
    icon: <div />,
  },
};

export const Date: Story = {
  args: {
    title: 'September 10, 2024',
    icon: <FaRegCalendarAlt />,
  },
};

export const Location: Story = {
  args: {
    title: 'Martin Hall 4F',
    icon: <FaLocationDot />,
  },
};
