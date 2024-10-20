import type { Meta, StoryFn } from '@storybook/react';

import Navbar from '@/components/ui/Navbar/Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: StoryFn = () => <Navbar />;

export const Default = Template.bind({});
