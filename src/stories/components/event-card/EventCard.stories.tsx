import type { Meta, StoryObj } from '@storybook/react';

import { EventCard } from '@/components/event-card/EventCard';
import { EventPoster } from '@/lib/types/entities/eventPoster.type';

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
      id: 1,
      name: 'Missing Name',
      description: '',
      start_time: new Date().toISOString(),
      end_time: new Date().toISOString(),
      registration_link: '',
      posters: {
        image_url: '',
        length: 0,
      },
      location_id: 1,
      location: {
        id: 1,
        name: '',
        address: '',
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    location: { name: '' },
    href: '',
    imageWidth: 0,
    imageHeight: 0,
  },
};

export const WithValues: Story = {
  args: {
    event: {
      id: 1,
      name: 'UFEST: Battle of the Bands',
      description: 'A battle of the bands event.',
      start_time: new Date().toISOString(),
      end_time: new Date().toISOString(),
      registration_link: 'https://example.com/register',
      posters: {
        image_url: '',
        length: 1, // Add the length property
      },
      location: {
        id: 1,
        name: 'Martin Hall 4F',
        address: 'Ateneo de Davao University',
      },
      location_id: 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    location: { name: 'Martin Hall 4F' },
    href: 'https://facebook.com',
    imageWidth: 5600,
    imageHeight: 2028,
  },
};
