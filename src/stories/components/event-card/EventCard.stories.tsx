import type { Meta, StoryObj } from '@storybook/react';

import { EventCard } from '@/components/event-card/EventCard';
import type { EventData } from '@/lib/types/eventData.type';
// import placeholder from '/event-card-placeholder.png';
import type { EventLocation } from '@/lib/types/eventLocation.type';

const meta: Meta<typeof EventCard> = {
  component: EventCard,
  title: 'UI/EventCard',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    event: {
      name: 'Missing Name',
      startTime: new Date(Date.now()),
    } as EventData,
    imageSrc: '',
    imageAlt: 'Blank',
    location: { name: '' } as EventLocation,
    href: '',
    imageWidth: 0,
    imageHeight: 0,
  },
};

export const WithValues: Story = {
  args: {
    event: {
      name: 'UFEST: Battle of the Bands',
      startTime: new Date(Date.now()),
    } as EventData,
    imageSrc: '/images/samahan-members.png',
    imageAlt: 'Samahan Members',
    location: { name: 'Martin Hall 4F' } as EventLocation,
    href: 'https://facebook.com',
    imageWidth: 5600,
    imageHeight: 2028,
  },
};
