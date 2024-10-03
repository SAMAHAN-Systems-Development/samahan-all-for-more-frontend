import type { Meta, StoryObj } from '@storybook/react';

import { EventCard } from '@/components/event-card/EventCard';
// import placeholder from '/event-card-placeholder.png';

const meta: Meta<typeof EventCard> = {
  component: EventCard,
  title: 'Components/EventCard/EventCard',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startTime: new Date(Date.now()),
    imageSrc: '',
    imageAlt: 'Blank',
    name: 'Default Name',
    location: 'Default Location',
    href: '',
    width: 0,
    height: 0,
  },
};

export const WithValues: Story = {
  args: {
    startTime: new Date(Date.now()),
    imageSrc: '/images/samahan-members.png',
    imageAlt: 'Samahan Members',
    name: 'UFEST: Battle of the Bands',
    location: 'Martin Hall 4F',
    href: 'https://facebook.com',
    width: 5600,
    height: 2028,
  },
};
