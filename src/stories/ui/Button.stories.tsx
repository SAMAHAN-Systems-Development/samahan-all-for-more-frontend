import type { Meta, StoryFn } from '@storybook/react';

import Button from '@/components/ui/Button';

// Meta configuration for Storybook
const meta: Meta<typeof Button> = {
  title: 'Components/Custom Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    colorScheme: {
      control: { type: 'select' },
      options: ['blue', 'white'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;


const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;


export const BlueVariant = Template.bind({});
BlueVariant.args = {
  text: 'EDIT ME',
  colorScheme: 'blue',
};


export const WhiteVariant = Template.bind({});
WhiteVariant.args = {
  text: 'EDIT ME',
  colorScheme: 'white',
};
