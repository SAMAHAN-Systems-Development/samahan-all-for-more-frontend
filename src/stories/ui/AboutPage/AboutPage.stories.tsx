import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AboutPage from '@/components/AboutPage/AboutPage';

export default {
  title: 'Components/AboutPage',
  component: AboutPage,
} as Meta;

export const Default: StoryFn = () => <AboutPage />;
