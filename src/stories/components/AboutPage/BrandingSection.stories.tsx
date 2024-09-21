import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BrandingSection from '@/components/AboutPage/BrandingSection';

export default {
  title: 'Components/BrandingSection',
  component: BrandingSection,
} as Meta;

export const Default: StoryFn = () => <BrandingSection />;
