import type { Meta, StoryObj } from '@storybook/react';

import Footer from 'src/components/ui/Footer/Footer';
import {
  FOOTER_SIZE_ENUM,
  LINK_SIZE_ENUM,
  LINK_WEIGHT_ENUM,
  SOCIAL_ICON_SIZE_ENUM,
} from '@/components/ui/Footer/enums';

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
    size: FOOTER_SIZE_ENUM.MEDIUM,
    background: 'default',
    linkSize: LINK_SIZE_ENUM.MEDIUM,
    linkWeight: LINK_WEIGHT_ENUM.BOLD,
    iconSize: SOCIAL_ICON_SIZE_ENUM.SMALL,
  },
};

export const CustomBackground: Story = {
  args: {
    size: FOOTER_SIZE_ENUM.MEDIUM,
    linkSize: LINK_SIZE_ENUM.REGULAR,
    linkWeight: LINK_WEIGHT_ENUM.NORMAL,
    iconSize: SOCIAL_ICON_SIZE_ENUM.MEDIUM,
  },
};
