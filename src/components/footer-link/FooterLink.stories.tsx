import type { Meta, StoryObj } from '@storybook/react';

import { FooterLink } from './FooterLink';

const meta: Meta<typeof FooterLink> = {
  component: FooterLink,
  title: 'Components/Banner/FooterLink',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomBackground: Story = {
  args: {},
};
