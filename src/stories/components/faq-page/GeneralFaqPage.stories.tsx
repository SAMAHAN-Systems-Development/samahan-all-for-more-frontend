import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import GeneralFaqPage from '@/components/faq-page/GeneralFaqPage';

export default {
  title: 'Components/GeneralFaqPage',
  component: GeneralFaqPage,
} as Meta;

export const Default: StoryFn = () => <GeneralFaqPage />;
