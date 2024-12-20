import { z } from 'zod';

export const createBulletinSchema = z.object({
  category_id: z.string({ required_error: 'Category is required' }),
  title: z.string({ required_error: 'Title is required' }),
  content: z.string({ required_error: 'Content is required' }),
  author: z.string({ required_error: 'Author is required' }),
  published_at: z.date({ required_error: 'Published date is required' }),
  pdfAttachments: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size <= 50 * 1024 * 1024, {
          message: 'PDF file size should not exceed 50MB',
        })
        .refine((file) => file.type === 'application/pdf', {
          message: 'Only PDF files are allowed',
        })
    )
    .optional()
    .nullable(),
});
