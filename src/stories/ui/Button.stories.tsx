import type { Meta, StoryFn } from '@storybook/react'; 

import Button from '@/components/ui/Button';

// Meta configuration for Storybook
const meta: Meta<typeof Button> = {
  title: 'Components/Custom Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: { type: 'select' }, 
      options: ['filled', 'outline'], 
    },
    colorScheme: {
      control: { type: 'select' }, 
      options: ['blue', 'white'], 
    },
    onClick: { action: 'clicked' }, 
  },
};

export default meta;

// Template for stories
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const BlueFilled = Template.bind({});
BlueFilled.args = {
  text: 'Blue Filled Button',
  variant: 'filled',
  colorScheme: 'blue',
};

export const BlueOutline = Template.bind({});
BlueOutline.args = {
  text: 'Blue Outline Button',
  variant: 'outline',
  colorScheme: 'blue',
};

export const WhiteFilled = Template.bind({});
WhiteFilled.args = {
  text: 'White Filled Button',
  variant: 'filled',
  colorScheme: 'white',
};

export const WhiteOutline = Template.bind({});
WhiteOutline.args = {
  text: 'White Outline Button',
  variant: 'outline',
  colorScheme: 'white',
};
