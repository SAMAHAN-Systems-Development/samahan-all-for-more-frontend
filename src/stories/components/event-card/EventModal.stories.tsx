import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import EventCardModal from '@/components/event-finder/event-card/eventCardModal';
import { Event } from '@/lib/types/entities/event.type';

export default {
  title: 'Components/EventCardModal',
  component: EventCardModal,
  argTypes: { onClose: { action: 'closed' } },
} as Meta<typeof EventCardModal>;

// Mock event data for the story
const mockEventData: Event = {
  id: 1,
  name: 'UFEST: Battle of the Bands',
  description: 'A battle of the bands event.',
  email: '',
  department_name: '',
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
};

//  Template for the modal
const Template: StoryFn<typeof EventCardModal> = (args) => (
  <EventCardModal {...args} event={mockEventData} />
);

export const Default = Template.bind({});
Default.args = {};
