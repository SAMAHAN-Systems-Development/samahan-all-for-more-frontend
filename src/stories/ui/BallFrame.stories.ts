import BallFrame from '@/components/ui/BallFrame';

export default {
  title: 'BallFrame',
  component: BallFrame,
  args: {
    hero: {
      control: { type: 'select' },
      options: ['true', 'false'],
    },
  },
};

export const Frame = {
  args: {
    hero: 'true',
  },
};
