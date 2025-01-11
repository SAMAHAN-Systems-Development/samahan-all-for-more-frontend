import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import MeetTheDevelopersPage from '@/components/meet-the-developers-page/MeetTheDevelopersPage';

export default {
  title: 'Components/MeetTheDevelopersPage',
  component: MeetTheDevelopersPage,
} as Meta;

export const Default: StoryFn = () => <MeetTheDevelopersPage />;
