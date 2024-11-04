import type { Meta, StoryObj } from '@storybook/react';
import ClusterAcademicArms from '@/components/academix sections/sectionTwo';
import sections from '@/data/ClusterAcademicArms.json';

const meta: Meta<typeof ClusterAcademicArms> = {
  title: 'Components/ClusterAcademicArms',
  component: ClusterAcademicArms,
};

export default meta;

type Story = StoryObj<typeof ClusterAcademicArms>;

export const Default: Story = {
  render: () => <ClusterAcademicArms sections={sections} />,
};
