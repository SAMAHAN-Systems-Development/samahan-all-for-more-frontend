import type { Meta, StoryObj } from '@storybook/react';

import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Components/Footer',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    background: {
      control: { type: 'select' },
      options: ['default', 'custom'],
    },
    linkSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'regular'],
    },
    linkWeight: {
      control: { type: 'select' },
      options: ['superThin', 'thin', 'normal', 'bold'],
    },
    iconSize: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    background: 'default',
    linkSize: 'medium',
    linkWeight: 'bold',
    iconSize: 'small',
  },
};

export const CustomBackground: Story = {
  args: {
    size: 'medium',
    linkSize: 'regular',
    linkWeight: 'normal',
    iconSize: 'medium',
  },
};
