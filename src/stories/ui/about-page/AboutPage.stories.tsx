import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import AboutPage from '@/components/about-page/AboutPage';

export default {
  title: 'Components/AboutPage',
  component: AboutPage,
} as Meta;

export const Default: StoryFn = () => <AboutPage />;
