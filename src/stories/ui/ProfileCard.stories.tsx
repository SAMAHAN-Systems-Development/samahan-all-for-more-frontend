import { Meta, StoryObj } from '@storybook/react';
import ProfileCard from '@/components/ui/ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  argTypes: {
    fullName: { control: 'text' },
    position: { control: 'text' },
    fileName: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Profile_Card: Story = {
  args: {
    fullName: "GWYNETH G. VIDANES",
    position: "Department Deputy Director",
    fileName: "[SCT Deputy Director] Gwyneth G. Vidanes.png", // Must include .png in the fileName
  },
};