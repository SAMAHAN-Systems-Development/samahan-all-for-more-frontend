import type { Meta, StoryObj } from '@storybook/react';

import Accordion from '@/components/ui/Accordion';
import accordionData from '@/data/accordionData.json';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Accordions: Story = {
  render: () => (
    <div>
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  ),
};
