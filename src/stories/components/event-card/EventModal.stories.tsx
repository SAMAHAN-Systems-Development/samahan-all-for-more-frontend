import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import EventCardModal from '@/components/event-card/eventCardModal';
import type { EventData } from '@/lib/types/eventData.type';

export default {
  title: 'Components/EventCardModal',
  component: EventCardModal,
  argTypes: { onClose: { action: 'closed' } },
} as Meta<typeof EventCardModal>;

// Mock event data for the story
const mockEventData: EventData = {
  name: 'Sample Event',
  description: 'This is a description for a sample event.',
  start_time: '2024-10-15 10:00',
  end_time: '2024-10-15 12:00',
  posters: {
    image_url:
      'https://qph.cf2.quoracdn.net/main-qimg-ebdbe6ad5edda19e6f55fc13e4e5d3ba.webp',
    length: 0,
  },
  registration_link: 'https://example.com/register',
  location: {
    name: 'Sample Location',
  },
  id: '',
  location_id: '',
};

//  Template for the modal
const Template: StoryFn<typeof EventCardModal> = (args) => (
  <EventCardModal {...args} event={mockEventData} />
);

export const Default = Template.bind({});
Default.args = {};
