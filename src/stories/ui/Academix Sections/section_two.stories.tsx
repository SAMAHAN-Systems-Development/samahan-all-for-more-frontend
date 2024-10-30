import type { Meta, StoryObj } from '@storybook/react';
import ClusterAcademicArms from '@/academix sections/sectionTwo';
import sections from '@/data/ClusterAcademicArms.json';

// Define the type for each section item
interface Section {
  title: string;
  icon: string;
  hoverIcon: string;
  description: string;
}

const meta: Meta<typeof ClusterAcademicArms> = {
  title: 'Components/ClusterAcademicArms',
  component: ClusterAcademicArms,
};

export default meta;

type Story = StoryObj<typeof ClusterAcademicArms>;

export const Default: Story = {
  render: () => <ClusterAcademicArms sections={sections as Section[]} />,
};
