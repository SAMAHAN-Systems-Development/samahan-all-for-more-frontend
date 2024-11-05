import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import BulletinPage from '@/components/bulletin-page/BulletinPage';

export default {
  title: 'Components/BulletinPage',
  component: BulletinPage,
} as Meta;

export const Default: StoryFn = () => <BulletinPage />;
