import { z } from 'zod';

export const createBulletinSchema = z.object({
  category_id: z.number({ required_error: 'Category ID is required' }),
  title: z.string({ required_error: 'Title is required' }),
  content: z.string({ required_error: 'Content is required' }),
  author: z.string({ required_error: 'Author is required' }),
  published_at: z.date({ required_error: 'Published date is required' }),
  file: z
    .union([z.instanceof(File), z.null()])
    .refine((file) => file !== null, {
      message: 'File is required',
    }),
});
