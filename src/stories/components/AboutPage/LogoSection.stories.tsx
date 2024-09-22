import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import LogoSection from '@/components/AboutPage/LogoSection';

export default {
  title: 'Components/LogoSection',
  component: LogoSection,
} as Meta;

export const Default: StoryFn = () => <LogoSection />;
