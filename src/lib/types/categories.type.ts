import type { Bulletin } from '@/lib/types/bulletin.type';

export type Categories = {
  bulletins: Bulletin[];
  description: string;
  id: number;
  name: string;
};
